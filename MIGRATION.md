# Migration Guide: Moving to reachforyouth.org

This document outlines how to migrate from the staging site (`rfy.thewicksproject.org`) to the production domain (`reachforyouth.org`).

## Current Production Setup

| Component | Provider | Details |
|-----------|----------|---------|
| Registrar | Network Solutions | whois.networksolutions.com |
| DNS | Network Solutions | ns83/ns84.worldnic.com |
| Hosting | Network Solutions | IP: 209.17.116.165 |
| Web Server | OpenResty | Managed hosting stack |
| CMS | WordPress | At `/wp-admin` |

## Prerequisites

Before migrating:

1. **Content parity** - Ensure all WordPress content exists in the 11ty site
2. **Network Solutions login** - Need access to change DNS records
3. **Schedule downtime window** - CMS login won't work during DNS propagation (~1-24 hours)
4. **Notify stakeholders** - Let staff know about the transition

## Migration Steps

### Step 1: Add Custom Domain in Cloudflare

In Cloudflare dashboard:
1. Go to Pages → rfy-website → Custom domains
2. Click "Set up a custom domain"
3. Enter `reachforyouth.org`
4. Follow verification steps

### Step 2: Update DNS at Network Solutions

**Option A: CNAME Record (Recommended)**
- Log into Network Solutions
- Go to DNS settings for reachforyouth.org
- Change A record to CNAME: `reachforyouth.org` → `rfy-website.pages.dev`
- Note: May need to remove existing A record first

**Option B: Transfer to Cloudflare DNS**
- Add domain to Cloudflare account
- Update nameservers at Network Solutions to Cloudflare's
- More control, but bigger change

### Step 3: Update GitHub OAuth App

At https://github.com/settings/applications/3293067:

1. Homepage URL: `https://reachforyouth.org`
2. Authorization callback URL: `https://reachforyouth.org/api/callback`

### Step 4: Update CMS Configuration

Edit `admin/config.yml`:

```yaml
backend:
  name: github
  repo: thewicksproject/rfy-website
  branch: main
  base_url: https://reachforyouth.org   # Change this line
  auth_endpoint: /api/auth
```

Commit and push:
```bash
git add admin/config.yml
git commit -m "Update base_url for production domain"
git push origin main
```

### Step 5: Wait for DNS Propagation

- Can take 1-24 hours (usually faster)
- Check with: `dig reachforyouth.org`
- Should resolve to Cloudflare IPs

### Step 6: Test Everything

1. Visit https://reachforyouth.org - site should load
2. Visit https://reachforyouth.org/admin/ - CMS should load
3. Test "Login with GitHub" - OAuth should work
4. Make a test edit and publish - auto-deploy should work

## Rollback Plan

If something goes wrong:

1. **DNS:** Revert to original A record (209.17.116.165)
2. **OAuth:** Revert URLs to `rfy.thewicksproject.org`
3. **CMS config:** Revert `base_url` to staging domain

## Post-Migration

- [ ] Verify all pages load correctly
- [ ] Test donation link (Bloomerang)
- [ ] Test contact form
- [ ] Update any external links pointing to old staging URL
- [ ] Consider setting up redirect from staging → production

## Notes

- `callback.js` uses dynamic `url.origin` - no code changes needed
- SSL certificate is automatic via Cloudflare
- Old WordPress site can remain as backup until confident in new setup

---

*Last updated: December 2024*
