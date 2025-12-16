# Reach For Youth Website

This is the official website for Reach For Youth, built with [Eleventy](https://www.11ty.dev/) and managed through [Decap CMS](https://decapcms.org/).

## Quick Start: Editing Content

**To edit website content:**

1. Go to: https://rfy.thewicksproject.org/admin/
2. Click "Login with GitHub"
3. Authorize access (first time only)
4. Edit content using the visual editor
5. Click "Publish" when done

Changes are automatically deployed within ~30 seconds.

## What You Can Edit

### Site Settings
- Organization name, phone, email, address
- Social media links
- Footer content

### Pages
| Page | What to Edit |
|------|--------------|
| Home | Hero text, mission statement, featured content |
| About | Organization history, mission, values |
| Services | Program descriptions |
| Success Stories | Testimonials and outcomes |
| Events | Upcoming events and announcements |
| Donate | Donation information and calls-to-action |
| Volunteer | Volunteer opportunities |
| Contact | Contact form settings, office hours |

### People
- **Staff** - Staff member profiles (name, title, bio, photo)
- **Board Members** - Board of directors information

## Content Editing Tips

### Adding Images
1. In the CMS, click the image field
2. Click "Choose an image"
3. Upload from your computer or select existing
4. Images are automatically optimized

### Formatting Text
- Use the toolbar for bold, italic, links
- Create headers with the dropdown
- Add bullet points and numbered lists

### Publishing Changes
- **Save** = Saves draft (not live)
- **Publish** = Makes changes live on the website

## Technical Information

### Architecture
- **Static Site Generator:** Eleventy (11ty)
- **CMS:** Decap CMS with GitHub backend
- **Hosting:** Cloudflare Pages
- **Domain:** rfy.thewicksproject.org (staging)

### Auto-Deploy
Every change pushed to the `main` branch automatically:
1. Triggers GitHub Actions
2. Builds the site with Eleventy
3. Deploys to Cloudflare Pages
4. Live in ~30 seconds

### File Structure
```
/
├── _data/           # Content data (JSON files)
│   ├── site.json    # Site-wide settings
│   ├── staff.json   # Staff directory
│   ├── board.json   # Board members
│   └── ...
├── _includes/       # Reusable templates
├── admin/           # CMS configuration
│   └── config.yml   # CMS settings
├── functions/       # OAuth handlers
├── images/          # Site images
└── *.njk            # Page templates
```

### Environment Variables (Cloudflare)
- `GITHUB_CLIENT_ID` - OAuth app ID
- `GITHUB_CLIENT_SECRET` - OAuth app secret

### GitHub Secrets (for auto-deploy)
- `CLOUDFLARE_ACCOUNT_ID` - Cloudflare account
- `CLOUDFLARE_API_TOKEN` - Deploy token

## Troubleshooting

### "Login with GitHub" not working
1. Clear browser cache and cookies
2. Try incognito/private window
3. Check if popup blocker is preventing the login window

### Changes not appearing on site
1. Wait 30-60 seconds after publishing
2. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
3. Check GitHub Actions tab for build errors

### Can't upload images
1. Ensure image is under 10MB
2. Use JPG, PNG, or WebP format
3. Try a different browser

## Support

For technical issues with the website, contact:
- Victor Wieczorek (original developer)

For content questions:
- Melissa Baker, Director of Administration

## Migration Notes

This site will eventually move to `reachforyouth.org`. When ready:
1. Update DNS to point to Cloudflare Pages
2. Update GitHub OAuth app URLs
3. Update `base_url` in `admin/config.yml`
