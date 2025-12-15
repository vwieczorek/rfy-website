// GitHub OAuth handler for Decap CMS on Cloudflare Pages
// Environment variables needed: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET

const OAUTH_PROVIDER = 'github';

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Handle initial auth request - redirect to GitHub
  if (url.searchParams.has('provider')) {
    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', `${url.origin}/api/callback`);
    authUrl.searchParams.set('scope', 'repo,user');
    authUrl.searchParams.set('state', crypto.randomUUID());

    return Response.redirect(authUrl.toString(), 302);
  }

  return new Response('Auth endpoint', { status: 200 });
}
