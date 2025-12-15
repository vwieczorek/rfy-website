// OAuth callback - exchanges code for token
// Based on: https://github.com/SubhenduX/decap-cms-cloudflare-pages

function renderBody(status, content) {
  // Decap CMS expects a two-way handshake:
  // 1. Popup sends "authorizing:github" to opener
  // 2. Parent responds with a message
  // 3. Popup sends token using message.origin from the response
  const contentStr = JSON.stringify(content);
  const html = `<!DOCTYPE html>
<html>
<head><title>OAuth</title></head>
<body>
  <p id="status">Authenticating...</p>
  <script>
    (function() {
      var status = document.getElementById('status');

      if (!window.opener) {
        status.textContent = 'Success! You can close this window.';
        return;
      }

      var receiveMessage = function(message) {
        status.textContent = 'Sending credentials...';
        window.opener.postMessage(
          'authorization:github:${status}:${contentStr}',
          message.origin
        );
        window.removeEventListener('message', receiveMessage, false);
        status.textContent = 'Done! Closing...';
        setTimeout(function() { window.close(); }, 1000);
      };

      window.addEventListener('message', receiveMessage, false);
      status.textContent = 'Waiting for CMS...';
      window.opener.postMessage('authorizing:github', '*');

      // Fallback if CMS doesn't respond in 5 seconds
      setTimeout(function() {
        status.textContent = 'CMS not responding, sending anyway...';
        window.opener.postMessage('authorization:github:${status}:${contentStr}', '*');
        setTimeout(function() { window.close(); }, 1000);
      }, 5000);
    })();
  </script>
</body>
</html>`;
  return html;
}

export async function onRequestGet(context) {
  const { request, env } = context;

  const client_id = env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    return new Response('OAuth not configured', { status: 500 });
  }

  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (!code) {
      return new Response('Missing code parameter', { status: 400 });
    }

    const response = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'rfy-website-oauth',
          'accept': 'application/json',
        },
        body: JSON.stringify({ client_id, client_secret, code }),
      },
    );

    const result = await response.json();

    if (result.error) {
      const errorHtml = renderBody('error', result);
      return new Response(errorHtml, {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
        status: 401
      });
    }

    const token = result.access_token;
    const provider = 'github';
    const successHtml = renderBody('success', { token, provider });

    return new Response(successHtml, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
      status: 200
    });

  } catch (error) {
    console.error(error);
    return new Response(error.message, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
      status: 500,
    });
  }
}
