# Technical Handoff: RFY Website

Reference document for Victor. Setup steps and security model.

---

## Architecture

```
┌─────────────────┐     ┌─────────────┐     ┌──────────────────┐
│  Decap CMS      │────>│   GitHub    │────>│ Cloudflare Pages │
│  (Web Editor)   │     │   (Repo)    │     │   (Hosting)      │
└─────────────────┘     └─────────────┘     └──────────────────┘
        │                      │                      │
   GitHub OAuth           Auto-deploy            Free hosting
   (user auth)            on push            rfy.thewicksproject.org
```

---

## Access Model

| System | Melissa's Access | How to Grant |
|--------|------------------|--------------|
| **GitHub** | Collaborator (Write) | Repo Settings > Collaborators |
| **Decap CMS** | Automatic via GitHub OAuth | N/A |
| **Cloudflare** | None needed | - |
| **Domain** | None needed | - |

### What Melissa Can Do
- Edit any file in the repo
- Push changes to main branch
- Trigger deploys (automatic)
- Log into CMS with her GitHub account

### What Melissa Cannot Do
- Access Cloudflare dashboard
- Change DNS settings
- Modify deploy secrets
- Access your GitHub account

### Credentials That Stay With You

| Credential | Location | Purpose |
|------------|----------|---------|
| `CLOUDFLARE_API_TOKEN` | GitHub Secrets | Deploy access |
| `CLOUDFLARE_ACCOUNT_ID` | GitHub Secrets | Account identifier |
| `GITHUB_CLIENT_ID` | Cloudflare Env | OAuth app |
| `GITHUB_CLIENT_SECRET` | Cloudflare Env | OAuth app |

These are used by automation only. Melissa never needs them.

---

## Setup Steps

### 1. Add Melissa as Collaborator

1. Go to https://github.com/thewicksproject/rfy-website/settings/access
2. Click **Add people**
3. Enter her GitHub username or email
4. Select **Write** access (not Admin)
5. Send invitation

### 2. Verify OAuth Works

Have her:
1. Go to https://rfy.thewicksproject.org/admin/
2. Click "Login with GitHub"
3. Authorize the app
4. Confirm she sees the CMS dashboard

### 3. Test the Full Flow

Have her:
1. Make a small edit in the CMS
2. Click Publish
3. Verify the change appears on the live site

---

## Hosting Details

### Cloudflare Pages
- **Project:** `rfy-website`
- **URL:** https://rfy.thewicksproject.org
- **Preview URLs:** https://[branch].rfy-website.pages.dev
- **Build command:** `npx @11ty/eleventy`
- **Output directory:** `_site`

### GitHub Actions
- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main`
- **Build time:** ~30 seconds

### Domain
- **Current:** rfy.thewicksproject.org (subdomain)
- **Future:** reachforyouth.org
- **DNS:** Cloudflare (thewicksproject.org zone)

---

## Future: Migration to reachforyouth.org

When RFY is ready:

1. **Add custom domain in Cloudflare Pages**
   - Pages project > Custom domains > Add
   - Enter `www.reachforyouth.org`

2. **Update DNS at RFY's registrar**
   - Add CNAME: `www` > `rfy-website.pages.dev`
   - Or transfer domain to Cloudflare

3. **Update OAuth app callback URL**
   - GitHub OAuth app settings
   - Point to new domain

4. **Update CMS config**
   - `admin/config.yml` > `base_url`

---

## Future: Full Independence

If RFY wants complete ownership:

**Option A: Transfer repo to RFY org**
1. RFY creates GitHub organization
2. Transfer repo
3. Update OAuth app
4. Update Cloudflare project
5. Transfer or recreate Cloudflare account

**Option B: Add RFY admin**
1. Add RFY IT contact as repo Admin
2. Share secrets documentation
3. They migrate when ready

Recommendation: Keep current setup until they have capacity for full migration. Collaborator access is sufficient for content management.

---

## Rollback

### Quick (GitHub)
1. Repo > Commits
2. Find last working commit
3. Click "..." > Revert
4. Commit the revert

### Full (Cloudflare)
1. Cloudflare Pages dashboard
2. Deployments tab
3. Find previous working deployment
4. Click "..." > Rollback

---

## Support Contacts

| Issue | Contact |
|-------|---------|
| Content | Melissa (self-serve) |
| CMS login | Victor |
| Site down | Victor |
| Domain | Victor |

---

## Handoff Files

```
docs/
├── MELISSA-GETTING-STARTED.md  <- Start here
├── CLAUDE-DESKTOP-GUIDE.md     <- Advanced editing
├── TECHNICAL-HANDOFF.md        <- This file
```

Plus existing:
- `README.md` - Technical overview
- `EDITING-GUIDE.md` - CMS walkthrough
- `MIGRATION.md` - Domain migration notes
