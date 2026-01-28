# Using Claude Desktop for Website Edits

This guide is for when you need to make changes beyond what the web CMS can handle: design adjustments, new pages, layout fixes, or anything that requires editing the underlying files.

You describe what you want in plain English. Claude reads the website files and makes the changes for you.

---

## What Claude Desktop Can Help With

- Design changes (colors, layouts, spacing)
- Creating new pages
- Fixing display issues
- Bulk content updates
- Understanding how any part of the site works

---

## Step 1: Install Claude Desktop

1. Go to [claude.ai/download](https://claude.ai/download)
2. Download the Mac or Windows version
3. Install and open the app
4. Create a free account or sign in

The free tier works well for website editing. The paid tier ($20/month) gives you more messages per day if you need it.

---

## Step 2: Get the Website Files

You'll need a local copy of the website to work with.

### Option A: Download as ZIP

1. Go to https://github.com/vwieczorek/rfy-website
2. Click the green **Code** button
3. Click **Download ZIP**
4. Unzip the folder somewhere accessible (Desktop works fine)

### Option B: Use GitHub Desktop

Better for ongoing work since you can sync changes back to the live site directly.

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click **File** then **Clone Repository**
4. Find `vwieczorek/rfy-website` and clone it
5. Choose where to save it

---

## Step 3: Open the Project in Claude

1. Open Claude Desktop
2. Click **Add folder** or drag the `rfy-website` folder into the chat
3. Claude now has access to all the website files

---

## Step 4: Describe What You Need

Explain what you want in plain language. Claude will figure out which files to change and how.

**Examples:**

> "The green on the buttons feels too bright. Can you make it a deeper, more muted green?"

> "I want the staff photos in a 3-column grid instead of 4 on desktop."

> "Add a new volunteer opportunity called 'Event Support' with these details: [paste details]"

> "The phone number looks odd on mobile. Can you check what's going on?"

> "How would I add a completely new page to this site?"

---

## Step 5: Apply the Changes

Claude will show you what files need to change and explain what each change does.

**If you downloaded as ZIP:**
1. Copy Claude's code into the relevant files
2. Upload the changed files to GitHub through the web interface

**If you're using GitHub Desktop:**
1. Let Claude edit the files directly
2. Open GitHub Desktop. You'll see your changes listed.
3. Write a brief description of what you changed
4. Click **Commit to main**
5. Click **Push origin**
6. Wait 30-60 seconds. The site rebuilds automatically.

---

## File Reference

| To change... | Edit this file |
|--------------|----------------|
| Organization info (phone, email) | `_data/site.json` |
| Staff members | `_data/staff.json` |
| Board members | `_data/board.json` |
| Homepage stats | `_data/stats.json` |
| Testimonials | `_data/testimonials.json` |
| Colors, fonts, styling | `css/style.css` |
| Page layouts | Files ending in `.njk` |
| CMS configuration | `admin/config.yml` |

---

## Tips

**Describe the problem, not the solution.** Instead of "change line 47 of style.css," say "the heading text is too small on mobile." Claude will handle the technical details.

**Start small.** Try a simple text change before attempting a page redesign.

**Preview locally.** You can open HTML files in your browser to see changes before pushing them live.

**Ask questions.** If you're not sure how something works, ask Claude to explain it.

---

## When to Use CMS vs Claude

| Task | CMS | Claude |
|------|-----|--------|
| Update phone number | Yes | |
| Add staff photo | Yes | |
| Change button color | | Yes |
| Add new page | | Yes |
| Update testimonial | Yes | |
| Fix mobile layout | | Yes |
| Change statistics | Yes | |
| Redesign a section | | Yes |

---

## Troubleshooting

**Claude can't see the files:** Make sure you added the folder to the chat. Look for a folder icon in the input area.

**Changes aren't showing up:** Did you both commit AND push? Both steps are required. Then wait 60 seconds and hard refresh (Ctrl+Shift+R or Cmd+Shift+R).

**Something broke:** Every change is saved in GitHub history. Contact Victor to roll back to a previous version.

**Claude seems confused:** Start a fresh chat and re-add the folder.

---

## Getting Help

- CMS issues: See `EDITING-GUIDE.md`
- Technical details: See `README.md`
- Stuck on something: Ask Claude, or reach out to Victor
