# Using Claude Desktop to Edit the RFY Website

**For Melissa** — When you need to make changes beyond what the web CMS can do.

---

## What Claude Desktop Can Help With

- 🎨 Design changes (colors, layouts, spacing)
- 📄 Creating new pages
- 🔧 Fixing things that look broken
- 💡 "I want to change X but don't know how"
- 📝 Bulk content updates
- 🤔 Understanding how the site works

**The magic:** You describe what you want in plain English, Claude reads the files, and makes the changes for you.

---

## Step 1: Install Claude Desktop

1. Go to [claude.ai/download](https://claude.ai/download)
2. Download the Mac or Windows version
3. Install and open the app
4. Create a free account (or sign in if you have one)

**Free tier works fine** for website editing. Pro ($20/mo) gives you more messages per day.

---

## Step 2: Download the Website Files

You'll need a local copy of the website to work with.

### Option A: Download ZIP (Easiest)

1. Go to https://github.com/vwieczorek/rfy-website
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Unzip the folder somewhere easy to find (like Desktop)

### Option B: Use GitHub Desktop (Better for ongoing edits)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click **File → Clone Repository**
4. Find `vwieczorek/rfy-website` and clone it
5. Choose where to save it (Desktop or Documents)

**GitHub Desktop advantage:** You can sync changes back to the live site with one click.

---

## Step 3: Open the Project in Claude

1. Open Claude Desktop
2. Click **"Add folder"** or drag the `rfy-website` folder into the chat
3. Claude now has access to all the website files!

---

## Step 4: Ask Claude to Help

Just describe what you want in plain English. Examples:

### Change Colors
> "The green color on the buttons feels too bright. Can you make it a deeper forest green?"

### Update Layout
> "I want the staff photos to be in a 3-column grid instead of 4 columns on desktop."

### Add Content
> "Add a new volunteer opportunity called 'Event Support' with these details: [paste details]"

### Fix Something
> "The phone number on the contact page looks wrong on mobile. Can you check it?"

### Understand the Site
> "How do I add a completely new page to the website?"

---

## Step 5: Review and Apply Changes

Claude will:
1. Show you what files need to change
2. Explain what each change does
3. Give you the updated code

**To apply the changes:**

### If You Downloaded ZIP:
1. Copy Claude's code changes into the files
2. Upload the changed files to GitHub (via the web interface)

### If You Used GitHub Desktop:
1. Let Claude edit the files directly
2. Open GitHub Desktop
3. You'll see your changes listed
4. Write a short description (e.g., "Updated button colors")
5. Click **"Commit to main"**
6. Click **"Push origin"**
7. Wait 30-60 seconds — your changes are live!

---

## Example Conversation

**You:** I want to add a new staff member. Her name is Sarah Chen, she's the Director of Clinical Services, and I have her headshot saved on my desktop.

**Claude:** I'll help you add Sarah to the staff directory. Here's what we need to do:

1. First, let me add her photo to the images folder. Can you drag `sarah-chen.jpg` into this chat?

2. Then I'll update `_data/staff.json` to add her entry:

```json
{
  "name": "Sarah Chen",
  "title": "Director of Clinical Services",
  "image": "/images/staff/sarah-chen.jpg"
}
```

Want me to make these changes?

**You:** Yes, do it!

**Claude:** Done! I've added Sarah's entry to the staff list. Commit and push to see her on the live site.

---

## File Structure Cheat Sheet

| If You Want To Change... | Edit This File |
|--------------------------|----------------|
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

### Keep It Simple
Start with small changes. "Change this text" before "redesign this page."

### Describe the Problem, Not the Solution
Instead of: "Change line 47 of style.css"
Try: "The heading text is too small on mobile"

Claude will figure out the technical details.

### Test Before Pushing
Open the local files in your browser to preview changes before pushing to the live site.

### Ask Questions
Not sure how something works? Just ask Claude to explain it.

---

## Troubleshooting

### "Claude can't see my files"
Make sure you added the folder to the chat. Look for a folder icon in the input area.

### "My changes aren't showing up"
1. Did you commit AND push? (Both steps required)
2. Wait 60 seconds for the site to rebuild
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### "I broke something"
Don't panic! Every change is saved in GitHub history. Contact Victor to roll back.

### "Claude is confused"
Start a new chat and re-add the folder. Sometimes a fresh start helps.

---

## When to Use CMS vs Claude

| Task | Use CMS | Use Claude |
|------|---------|------------|
| Update phone number | ✅ | |
| Add staff photo | ✅ | |
| Change button color | | ✅ |
| Add new page | | ✅ |
| Update testimonial | ✅ | |
| Fix mobile layout | | ✅ |
| Change stats | ✅ | |
| Redesign section | | ✅ |

---

## Getting More Help

- **CMS issues:** See `EDITING-GUIDE.md`
- **Technical deep dive:** See `README.md`
- **Stuck:** Ask Claude! Or contact Victor.
