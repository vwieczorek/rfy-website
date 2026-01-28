# Using Claude for Website Edits

When you need to make changes beyond what the web CMS handles (design adjustments, new pages, layout fixes), Claude can do the technical work for you.

You describe what you want. Claude clones the repo, makes the edits, and pushes the changes live. You don't need to learn git or touch code.

---

## Prerequisites

You need:
- **Claude Desktop app** (the downloadable app from claude.ai/download, not the web version)
- **A GitHub account** with collaborator access to the repo (Victor sets this up)

---

## Setup

### Step 1: Install the Skill

The skill teaches Claude everything about the RFY website. You only need to do this once.

**Open Terminal:** Press Cmd+Space to open Spotlight, type "Terminal", and press Enter. You'll see a window where you paste commands and press Enter to run them.

**Copy and paste these commands one at a time:**

```bash
mkdir -p ~/.claude/skills
```

```bash
curl -L https://github.com/vwieczorek/rfy-website/archive/refs/heads/main.zip -o /tmp/rfy.zip && unzip -o /tmp/rfy.zip -d /tmp && cp -r /tmp/rfy-website-main/skill/rfy-website ~/.claude/skills/
```

That's it. The skill is installed.

(The `~` in the path means your home folder. These are hidden system folders that Claude uses internally.)

### Step 2: Connect GitHub

Before Claude can push changes to the live site, connect your GitHub account:

1. Open Claude Desktop
2. Click the **Code** tab at the top (not Chat)
3. Click the **...** menu, then **Connectors**
4. Enable **GitHub** and authorize the connection

---

## Making Changes

### Start a Session

1. Open Claude Desktop
2. Click the **Code** tab
3. Start a new session

### Use the Skill

Type `/rfy-website` followed by what you want. The slash tells Claude to load this skill. Always include a space after it.

**Examples:**

```
/rfy-website Update the main phone number to (317) 555-1234
```

```
/rfy-website Add a new staff member: Sarah Chen, Director of Clinical Services
```

```
/rfy-website The buttons are too bright green. Make them a deeper forest green.
```

```
/rfy-website Create a new page for summer programs with the same layout as services
```

Or just describe what you want naturally. Claude recognizes when you're talking about the RFY website and loads the skill automatically.

### Review and Approve

By default, Claude uses **Ask mode**: it shows you what it plans to change and waits for your approval before each edit. You'll see exactly what's changing. This is the safest way to work.

To change modes, look for the mode selector next to the send button:
- **Ask** - Claude asks before each change (recommended)
- **Code** - Claude auto-approves file edits, still asks before commands
- **Plan** - Claude creates a full plan for approval first

### Push Changes Live

When you're happy, tell Claude to push:

> "Commit and push these changes"

The site rebuilds automatically in about 30 seconds.

---

## What Claude Knows (from the Skill)

The skill teaches Claude:

- **Repository:** https://github.com/vwieczorek/rfy-website
- **Content files:** JSON files in `_data/` (staff, stats, testimonials, etc.)
- **Page templates:** `.njk` files in the root
- **Styling:** `css/styles.css`
- **How to push:** Commit to `main`, auto-deploys to Cloudflare Pages

---

## Tips

**Start with Ask mode.** You approve each change before it happens.

**Be specific.** "Make it look better" is vague. "Increase the headline font size" is clear.

**You can always undo.** Tell Claude to "revert the last commit" if something breaks.

**Ask questions.** "How does the homepage pull in statistics?" Claude can explain any part of the site.

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
Make sure GitHub is connected in Connectors (Code tab > ... > Connectors). You also need collaborator access to the repo.

**Skill not found when I type /rfy-website**
Re-run the install commands from Step 1. Make sure the skill folder exists at `~/.claude/skills/rfy-website/`

**Changes aren't showing on the live site**
Ask Claude "Did you push?" If yes, wait 60 seconds and hard refresh (Cmd+Shift+R).

**I made a mistake**
Tell Claude: "Revert the last commit"

---

## Updating the Skill

If Victor releases updates to the skill, re-run the install command from Step 1. It will overwrite the old version.

---

## Getting Help

- CMS questions: See `EDITING-GUIDE.md`
- Technical details: See `README.md`
- Anything else: Ask Claude, or reach out to Victor
