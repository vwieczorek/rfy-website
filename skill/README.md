# RFY Website Skill for Claude

This skill teaches Claude how to manage the Reach For Youth website.

**For complete setup instructions, see `docs/CLAUDE-DESKTOP-GUIDE.md`** in this repo.

---

## Quick Install (Mac)

Open Terminal (Cmd+Space, type "Terminal", press Enter) and paste:

```bash
mkdir -p ~/.claude/skills
```

Then paste:

```bash
curl -L https://github.com/vwieczorek/rfy-website/archive/refs/heads/main.zip -o /tmp/rfy.zip && unzip -o /tmp/rfy.zip -d /tmp && cp -r /tmp/rfy-website-main/skill/rfy-website ~/.claude/skills/
```

---

## Usage

Once installed, open Claude Desktop, go to the **Code** tab, and type:

```
/rfy-website [what you want to do]
```

**Examples:**

```
/rfy-website Update the main phone number to (317) 555-1234
```

```
/rfy-website Add a new staff member: Sarah Chen, Director of Clinical Services
```

```
/rfy-website The testimonials section looks cramped on mobile
```

The `/` tells Claude to load this skill. Include a space before your request.

---

## What the Skill Knows

- Repository location and how to clone it
- Site structure (which files control what content)
- How to edit content, styles, and layouts
- How to commit and push changes
- When to use the web CMS vs Claude

---

## Prerequisites

- Claude Desktop app (not the web version)
- GitHub account with repo access (ask Victor)
- GitHub connected in Claude (Code tab > ... > Connectors > GitHub)

---

## Updating

To get the latest skill version, re-run the curl command above.
