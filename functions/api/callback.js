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
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Authenticating...</title>
</head>
<body>
  <script>
    (function() {
      try {
        var data = JSON.parse(atob("${encodedData}"));
        var message = "authorization:github:success:" + JSON.stringify(data);

        if (window.opener) {
          // Post to specific origin for security, with longer delay for reliability
          window.opener.postMessage(message, "https://rfy.thewicksproject.org");
          // Also try wildcard as fallback
          window.opener.postMessage(message, "*");
          // Longer delay to ensure message is received
          setTimeout(function() { window.close(); }, 1500);
        } else {
          document.body.innerHTML = '<p>Authentication successful! You can close this window.</p>';
        }
      } catch(e) {
        document.body.innerHTML = '<p>Authentication error: ' + e.message + '</p>';
      }
    })();
  </script>
  <p>Authenticating...</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
