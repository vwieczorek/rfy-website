// OAuth callback - exchanges code for token
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing code parameter', { status: 400 });
  }

  const clientId = context.env.GITHUB_CLIENT_ID;
  const clientSecret = context.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response('OAuth not configured', { status: 500 });
  }

  // Exchange code for access token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return new Response(`OAuth error: ${tokenData.error_description || tokenData.error}`, { status: 400 });
  }

  // Safely encode the token data for embedding in HTML
  const messageData = JSON.stringify({
    token: tokenData.access_token,
    provider: 'github'
  });

  // Base64 encode to avoid any escaping issues
  const encodedData = btoa(messageData);

  // Return HTML that posts the token back to the CMS
  // Decap CMS expects a two-way handshake:
  // 1. Popup sends "authorizing:github"
  // 2. Parent responds
  // 3. Popup sends the actual token
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Authenticating...</title>
</head>
<body>
  <script>
    (function() {
      var data = JSON.parse(atob("${encodedData}"));

      if (!window.opener) {
        document.body.innerHTML = '<p>Authentication successful! You can close this window.</p>';
        return;
      }

      // Step 1: Send initial handshake message
      window.opener.postMessage("authorizing:github", "*");

      // Step 2: Listen for response from parent, then send token
      window.addEventListener("message", function receiveMessage(event) {
        // Send the token regardless of the message content
        // (parent will send back the provider name)
        var message = "authorization:github:success:" + JSON.stringify(data);
        window.opener.postMessage(message, "*");

        // Remove listener and close window
        window.removeEventListener("message", receiveMessage);
        setTimeout(function() { window.close(); }, 500);
      });

      // Fallback: if no response after 2 seconds, send token anyway
      setTimeout(function() {
        var message = "authorization:github:success:" + JSON.stringify(data);
        window.opener.postMessage(message, "*");
        setTimeout(function() { window.close(); }, 500);
      }, 2000);
    })();
  </script>
  <p>Authenticating...</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
