# Technical Handoff: RFY Website

**For Victor** — What to set up before handing off to Melissa.

---

## Architecture Summary

```
┌─────────────────┐     ┌─────────────┐     ┌──────────────────┐
│  Decap CMS      │────▶│   GitHub    │────▶│ Cloudflare Pages │
│  (Web Editor)   │     │   (Repo)    │     │   (Hosting)      │
└─────────────────┘     └─────────────┘     └──────────────────┘
        │                      │                      │
        │                      │                      │
   GitHub OAuth          Auto-deploy            Free hosting
   (user auth)           on push                rfy.thewicksproject.org
```

---

## What Melissa Needs Access To

| System | Access Level | How to Grant |
|--------|--------------|--------------|
| **GitHub** | Collaborator on repo | Repo Settings → Collaborators |
| **Decap CMS** | Automatic via GitHub OAuth | N/A (handled by GitHub access) |
| **Cloudflare** | None needed | Secrets stay in GitHub |
| **Domain** | None needed | Victor retains control |

---

## Security Model

### What Melissa CAN Do
- Edit any file in the repo
- Push changes to main branch
- Trigger deploys (automatic on push)
- Log into CMS with her GitHub account

### What Melissa CANNOT Do
- Access Cloudflare dashboard
- Change DNS settings
- Modify deploy secrets
- Access Victor's GitHub account

### Credentials That Stay With Victor
| Credential | Location | Purpose |
|------------|----------|---------|
| `CLOUDFLARE_API_TOKEN` | GitHub Secrets | Deploy access |
| `CLOUDFLARE_ACCOUNT_ID` | GitHub Secrets | Account identifier |
| `GITHUB_CLIENT_ID` | Cloudflare Env | OAuth app |
| `GITHUB_CLIENT_SECRET` | Cloudflare Env | OAuth app |

Melissa never needs these. They're used by automation only.

---

## Setup Steps

### 1. Add Melissa as Collaborator

1. Go to: https://github.com/vwieczorek/rfy-website/settings/access
2. Click **"Add people"**
3. Enter Melissa's GitHub username or email
4. Select **"Write"** access (not Admin)
5. Send invitation

### 2. Verify OAuth Still Works

After adding Melissa:
1. Have her go to https://rfy.thewicksproject.org/admin/
2. Click "Login with GitHub"
3. Authorize the app
4. Confirm she can see the CMS dashboard

### 3. Test the Full Flow

Have Melissa:
1. Make a small edit in the CMS
2. Click Publish
3. Verify the change appears on the live site (~30 sec)

---

## If RFY Wants Full Independence Later

To transfer complete ownership:

### Option A: Transfer to RFY GitHub Org
1. RFY creates a GitHub organization
2. Transfer repo to their org
3. Update OAuth app URLs
4. Update Cloudflare Pages project settings
5. Transfer Cloudflare account (or create new one)

### Option B: Keep Current Setup, Add RFY Admin
1. Add RFY IT contact as repo Admin
2. Share GitHub Secrets documentation
3. Document the Cloudflare Pages project
4. They can migrate when ready

**Recommendation:** Keep current setup until they're ready for full migration. The collaborator access is sufficient for content management.

---

## Hosting Details

### Cloudflare Pages
- **Project name:** `rfy-website`
- **Production URL:** https://rfy.thewicksproject.org
- **Preview URLs:** https://<branch>.rfy-website.pages.dev
- **Build command:** `npx @11ty/eleventy`
- **Output directory:** `_site`
- **Root directory:** `/`

### GitHub Actions
- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` branch
- **Build time:** ~30 seconds

### Domain
- **Current:** rfy.thewicksproject.org (subdomain of thewicksproject.org)
- **Future:** reachforyouth.org (when ready to migrate)
- **DNS:** Managed in Cloudflare (thewicksproject.org zone)

---

## Future Migration to reachforyouth.org

When RFY is ready to use their own domain:

1. **Add custom domain in Cloudflare Pages**
   - Pages project → Custom domains → Add
   - Enter `www.reachforyouth.org`

2. **Update DNS at RFY's registrar**
   - Add CNAME: `www` → `rfy-website.pages.dev`
   - Or transfer domain to Cloudflare

3. **Update OAuth app**
   - GitHub OAuth app settings
   - Change callback URL to new domain

4. **Update CMS config**
   - `admin/config.yml` → `base_url`

---

## Rollback Procedure

If something breaks:

### Quick Rollback (GitHub)
1. Go to repo → Commits
2. Find the last working commit
3. Click "..." → "Revert"
4. Commit the revert

### Full Rollback (Cloudflare)
1. Cloudflare Pages dashboard
2. Deployments tab
3. Find previous working deployment
4. Click "..." → "Rollback to this deploy"

---

## Support Contacts

| Issue | Contact |
|-------|---------|
| Content questions | Melissa (self-serve) |
| CMS login issues | Victor (GitHub OAuth) |
| Site down | Victor (Cloudflare) |
| Domain issues | Victor (DNS) |

---

## Files Included in Handoff

```
docs/
├── MELISSA-GETTING-STARTED.md  ← Start here
├── CLAUDE-DESKTOP-GUIDE.md     ← Advanced editing with AI
├── TECHNICAL-HANDOFF.md        ← This file (for Victor)
```

Plus existing docs:
- `README.md` — Technical overview
- `EDITING-GUIDE.md` — CMS walkthrough
- `MIGRATION.md` — Future domain migration
