// OAuth callback - exchanges code for token
// Based on: https://github.com/SubhenduX/decap-cms-cloudflare-pages

function renderBody(status, content) {
  // Decap CMS expects a two-way handshake:
  // 1. Popup sends "authorizing:github" to opener
  // 2. Parent responds with a message
  // 3. Popup sends token using message.origin from the response
  const html = `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  `;
  const blob = new Blob([html]);
  return blob;
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
      return new Response(renderBody('error', result), {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
        status: 401
      });
    }

    const token = result.access_token;
    const provider = 'github';
    const responseBody = renderBody('success', { token, provider });

    return new Response(responseBody, {
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
