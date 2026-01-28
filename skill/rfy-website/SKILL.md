---
name: rfy-website
description: Manage the Reach For Youth website (RFY, rfy.thewicksproject.org). Clone the repo, edit content, fix layouts, create pages, and push changes live.
argument-hint: e.g., "update the phone number" or "add a new staff member"
---

# Reach For Youth Website Management

You help manage the RFY website at https://rfy.thewicksproject.org

## Repository

- **Repo:** https://github.com/vwieczorek/rfy-website
- **Live site:** https://rfy.thewicksproject.org
- **Stack:** Eleventy static site, hosted on Cloudflare Pages
- **Auto-deploy:** Push to `main` triggers rebuild (about 30 seconds)

## Before Making Changes

Always pull latest first:

```bash
cd ~/rfy-website
git pull origin main
```

If the repo isn't cloned yet:

```bash
git clone https://github.com/vwieczorek/rfy-website ~/rfy-website
cd ~/rfy-website
```

## Site Structure

### Content Data (`_data/`)

| File | Contains |
|------|----------|
| `site.json` | Organization info (phone, email, address, social links) |
| `staff.json` | Staff member profiles |
| `board.json` | Board member profiles |
| `stats.json` | Impact statistics shown on homepage |
| `testimonials.json` | Testimonials and quotes |
| `stories.json` | Success stories |
| `featuredStory.json` | Featured story on success stories page |
| `event.json` | Featured event details |
| `timeline.json` | History timeline on About page |
| `partners.json` | Funders and partners |
| `volunteerOpportunities.json` | Volunteer opportunities |
| `donationImpact.json` | Donation impact levels |
| `sponsorshipLevels.json` | Event sponsorship tiers |
| `mentalHealthServices.json` | Mental health program descriptions |
| `restorativePrograms.json` | Restorative justice program descriptions |

### Page Templates

Root pages (`.njk` files):
- `index.njk` - Homepage
- `about.njk` - About page
- `services.njk` - Services overview
- `contact.njk` - Contact page
- `donate.njk` - Donate page
- `volunteer.njk` - Volunteer page
- `events.njk` - Events page
- `success-stories.njk` - Stories page

Service subpages (`services/`):
- `services/mental-health.njk` - Mental health services detail
- `services/restorative-justice.njk` - Restorative justice detail

### Styling

Main stylesheet: `css/styles.css`

Brand colors are defined as CSS custom properties near the top of the file.

### Layouts and Components (`_includes/`)

| File | Purpose |
|------|---------|
| `base.njk` | Base layout wrapper for all pages |
| `footer.njk` | Site footer |
| `icons.njk` | SVG icon definitions |
| `translate-modal.njk` | Language translation modal |

## Common Tasks

### Update contact info
Edit `_data/site.json`. Phone numbers, email, addresses, and social links are all there.

### Add or update staff/board members
Edit `_data/staff.json` or `_data/board.json`. Each entry follows this structure:

```json
{
  "name": "Sarah Chen",
  "title": "Director of Clinical Services",
  "image": "/images/staff/sarah-chen.jpg"
}
```

Images go in the `images/` folder.

### Update statistics
Edit `_data/stats.json`. 
- The `hero` array displays in the homepage banner
- The `impact` array displays in other sections
- The `volunteer` array displays on the volunteer page

### Add a testimonial
Edit `_data/testimonials.json`. Add an object:

```json
{
  "quote": "This program changed my life.",
  "name": "Parent",
  "role": "Teen Court participant's mother",
  "initial": "P"
}
```

### Change colors or fonts
Edit `css/styles.css`. Brand colors are CSS custom properties near the top.

### Create a new page
1. Create a new `.njk` file in the root with frontmatter:

```
---
layout: base.njk
title: Page Title
---

Your page content here...
```

2. Add navigation link in `_includes/base.njk` if needed

## Pushing Changes

After making edits:

```bash
git add .
git commit -m "Brief description of changes"
git push
```

The site rebuilds automatically. Changes are live in about 30 seconds.

## When NOT to Use This Skill

For simple content updates (text, photos, stats, testimonials), the web CMS at https://rfy.thewicksproject.org/admin/ is faster. Use this skill for:

- Design changes (colors, layouts, spacing)
- Creating new pages
- Fixing display issues
- Bulk content updates
- Anything requiring code changes

## Task

$ARGUMENTS
