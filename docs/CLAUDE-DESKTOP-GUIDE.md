# Managing the RFY Website with Claude

Claude handles all your website updates. Describe what you want in plain English and Claude makes the changes, shows you what it did, and pushes them live.

---

## Prerequisites

- **Claude Desktop app** (the downloadable app from claude.ai/download, not the web version)
- **A GitHub account** with collaborator access to the repo (Victor sets this up)

---

## Setup (One Time)

### Step 1: Install the Skill

The skill teaches Claude everything about the RFY website.

**Open Terminal:** Press Cmd+Space to open Spotlight, type "Terminal", and press Enter. You'll see a window where you paste commands and press Enter to run them.

**Paste this command:**

```bash
mkdir -p ~/.claude/skills
```

**Then paste this one:**

```bash
curl -L https://github.com/vwieczorek/rfy-website/archive/refs/heads/main.zip -o /tmp/rfy.zip && unzip -o /tmp/rfy.zip -d /tmp && cp -r /tmp/rfy-website-main/skill/rfy-website ~/.claude/skills/
```

Done. (The `~` means your home folder. These are hidden system folders Claude uses internally.)

### Step 2: Connect GitHub

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

### Tell Claude What You Need

Type `/rfy-website` followed by what you want. The slash tells Claude to load the skill. Include a space after it.

**Examples:**

```
/rfy-website Update the main phone number to (317) 555-1234
```

```
/rfy-website Add a new staff member: Sarah Chen, Director of Clinical Services
```

```
/rfy-website Update the youth served stat to 912
```

```
/rfy-website Add a testimonial from a parent: "This program saved my son's life."
```

```
/rfy-website The buttons are too bright green. Make them a deeper forest green.
```

```
/rfy-website Create a new page for summer programs
```

Or just describe what you want naturally. Claude recognizes when you're talking about the RFY website.

### Review and Approve

By default, Claude uses **Ask mode**: it shows you what it plans to change and waits for approval before each edit. This is the safest way to work.

To change modes, look for the mode selector next to the send button:
- **Ask** - Claude asks before each change (recommended)
- **Code** - Claude auto-approves file edits, asks before commands
- **Plan** - Claude creates a full plan for approval first

### Push Changes Live

When you're happy, tell Claude:

> "Commit and push these changes"

The site rebuilds automatically in about 30 seconds.

---

## Common Tasks

| What You Want | What to Tell Claude |
|---------------|---------------------|
| Update phone/email/address | `/rfy-website Change the phone number to...` |
| Add staff member | `/rfy-website Add new staff: [name], [title]` |
| Update statistics | `/rfy-website Update youth served to 950` |
| Add testimonial | `/rfy-website Add a testimonial from [name]: "[quote]"` |
| Change colors | `/rfy-website Make the green buttons darker` |
| Fix mobile display | `/rfy-website The testimonials are cramped on mobile` |
| Add new page | `/rfy-website Create a page for [topic]` |
| Update event info | `/rfy-website Update Rise & Shine to Fall 2026` |

---

## Tips

**Start with Ask mode.** You approve each change before it happens.

**Be specific.** "Make it look better" is vague. "Increase the headline font size" is clear.

**You can always undo.** Tell Claude to "revert the last commit" if something breaks.

**Ask questions.** "How does the homepage pull in statistics?" Claude can explain any part of the site.

---

## Troubleshooting

**"I don't have access to that repository"**
Make sure GitHub is connected in Connectors (Code tab > ... > Connectors). You also need collaborator access to the repo.

**Skill not found when I type /rfy-website**
Re-run the install commands from Step 1.

**Changes aren't showing on the live site**
Ask Claude "Did you push?" If yes, wait 60 seconds and hard refresh (Cmd+Shift+R).

**I made a mistake**
Tell Claude: "Revert the last commit"

---

## Updating the Skill

If Victor updates the skill, re-run the curl command from Step 1.

---

## Backup Option: Web Editor

If Claude is unavailable or you prefer a visual editor for simple text changes, there's a web-based CMS at https://rfy.thewicksproject.org/admin/

Log in with your GitHub account. See `EDITING-GUIDE.md` for details.
