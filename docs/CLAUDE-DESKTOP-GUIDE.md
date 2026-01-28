# Using Claude for Website Edits

When you need to make changes beyond what the web CMS handles (design adjustments, new pages, layout fixes), Claude can do the technical work for you.

You describe what you want. Claude clones the repo, makes the edits, and pushes the changes live. You don't need to learn git or touch code.

---

## What Claude Can Do For You

- Clone and set up the website project automatically
- Make design changes (colors, layouts, fonts, spacing)
- Create new pages
- Fix display issues
- Update multiple pieces of content at once
- Commit and push changes to make them live
- Explain how any part of the site works

---

## Setup (One Time)

### 1. Install the Claude Desktop App

1. Go to [claude.ai/download](https://claude.ai/download)
2. Download and install the Mac or Windows version
3. Sign in with your Claude account

You'll need a **Pro** or **Max** subscription ($20/month or $100/month) to use the Code features. The free tier only supports chat.

### 2. Connect to GitHub

The first time you work on the website, Claude will need access to GitHub:

1. Open Claude Desktop
2. Click the **Code** tab
3. Click the **...** menu, then **Connectors**
4. Enable **GitHub** and authorize the connection

This lets Claude clone repos and push changes on your behalf.

---

## Making Changes

### Start a Session

1. Open Claude Desktop
2. Go to the **Code** tab
3. Start a new session

### Tell Claude What You Want

Just describe your goal in plain language. Claude handles the rest.

**First time setup:**
> "Clone the RFY website from https://github.com/vwieczorek/rfy-website and help me make some changes."

Claude will clone the repo and set up a working copy.

**Then describe your change:**
> "The green on the buttons is too bright. Make it a deeper forest green."

> "Add a new staff member: Sarah Chen, Director of Clinical Services. I'll give you her photo."

> "The testimonials section looks cramped on mobile. Can you add more spacing?"

> "Create a new page for our summer programs with the same layout as the services page."

### Review and Approve

Claude will show you what it plans to change. In **Ask mode** (recommended), you approve each edit before it happens. You'll see a diff showing exactly what's changing.

### Push Changes Live

When you're happy with the changes, tell Claude:
> "Commit these changes and push them to GitHub."

Claude will commit with a descriptive message and push. The site rebuilds automatically in about 30 seconds.

---

## Example Session

**You:** Clone the RFY website repo and help me update it.

**Claude:** I'll clone the repository now.
```
git clone https://github.com/vwieczorek/rfy-website
```
Done. The website is ready. What would you like to change?

**You:** The phone number in the footer is wrong. It should be (317) 555-1234.

**Claude:** I found the phone number in `_data/site.json`. Here's the change:
```
- "main": "3179200900",
+ "main": "3175551234",
```
Should I apply this edit?

**You:** Yes.

**Claude:** Done. Want me to commit and push this change?

**You:** Yes, push it.

**Claude:** Committed as "Update main phone number" and pushed to main. The site will rebuild in about 30 seconds.

---

## Tips

**Use Ask mode when starting out.** You'll approve each change before it happens. Once you're comfortable, Code mode lets Claude work faster by auto-approving file edits.

**Be specific about what you want.** "Make it look better" is hard to act on. "Increase the font size of the headlines" is clear.

**You can always undo.** Every change is saved in git history. If something breaks, tell Claude to revert the last commit.

**Ask Claude to explain things.** "How does the homepage pull in the statistics?" or "What file controls the navigation menu?" Claude can walk you through the codebase.

---

## Permission Modes

| Mode | What Happens |
|------|--------------|
| **Ask** | Claude asks before each file edit or command. Best for learning. |
| **Code** | Claude auto-approves file edits, still asks before terminal commands. Faster. |
| **Plan** | Claude creates a full plan for your approval before making any changes. Good for complex tasks. |

---

## When to Use CMS vs Claude

| Task | CMS | Claude |
|------|-----|--------|
| Update phone number | Yes | |
| Add a staff photo | Yes | |
| Change button colors | | Yes |
| Add a new page | | Yes |
| Update a testimonial | Yes | |
| Fix mobile layout | | Yes |
| Update statistics | Yes | |
| Redesign a section | | Yes |

---

## Troubleshooting

**"I don't have access to that repository"**
Make sure GitHub is connected in Connectors. You also need to be a collaborator on the repo (Victor sets this up).

**Changes aren't showing on the live site**
Did Claude push the changes? Ask "Did you push to GitHub?" If yes, wait 60 seconds and hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R).

**I made a mistake**
Tell Claude: "Revert the last commit" or "Undo that change." Git keeps full history.

**Claude seems stuck**
Start a new session. Sometimes a fresh start helps.

---

## Getting Help

- For CMS questions: See `EDITING-GUIDE.md`
- For technical details: See `README.md`
- For anything else: Ask Claude, or reach out to Victor
