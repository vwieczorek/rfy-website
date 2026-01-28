# Managing the RFY Website with Claude

Open Claude Desktop, go to the Cowork tab, and describe what you want. Claude handles the rest.

---

## Setup (One Time)

### Step 1: Get GitHub Access

1. Create a GitHub account at github.com/signup if you don't have one
2. Send Victor your username
3. Accept the invitation when it arrives

### Step 2: Connect GitHub to Claude

1. Open Claude Desktop
2. Click the **Cowork** tab
3. Click the **...** menu, then **Connectors**
4. Enable **GitHub** and authorize the connection

That's it. You're ready.

---

## Making Changes

### Start a Task

1. Open Claude Desktop
2. Click the **Cowork** tab
3. Describe what you want

**Examples:**

> Update the RFY website. Change the main phone number to (317) 555-1234.

> I need to update the RFY website. Add a new staff member: Sarah Chen, Director of Clinical Services.

> Update the youth served statistic on the RFY website to 912.

> The RFY website buttons are too bright green. Make them a deeper forest green.

> Add a testimonial to the RFY website from a parent: "This program saved my son's life."

> Create a new page on the RFY website for summer programs.

Claude will:
1. Clone the website repository
2. Find the right files to edit
3. Make the changes
4. Show you what it did
5. Push the changes live (with your approval)

The site rebuilds automatically in about 30 seconds after changes are pushed.

---

## Tips

**Be specific.** "Make it look better" is vague. "Increase the headline font size" is clear.

**You can watch or walk away.** Cowork shows you progress in real time, but you can also step away and come back when it's done.

**Review before pushing.** Claude will show you what changed and ask before pushing to the live site.

**You can always undo.** Tell Claude to "revert the last commit" if something goes wrong.

**Ask questions.** "How does the homepage pull in statistics?" Claude can explain any part of the site.

---

## Common Requests

| What You Want | What to Tell Claude |
|---------------|---------------------|
| Update phone/email | "Change the RFY phone number to..." |
| Add staff member | "Add a new staff member to the RFY site: [name], [title]" |
| Update statistics | "Update youth served on the RFY site to 950" |
| Add testimonial | "Add a testimonial to the RFY site: '[quote]' - [name]" |
| Change colors | "The RFY website buttons are too bright, make them darker" |
| Fix display issue | "The RFY testimonials section is cramped on mobile" |
| Add new page | "Create a new page on the RFY site for [topic]" |

---

## Bonus: Claude + Canva

Claude can also connect to Canva. If you use Canva for RFY graphics:

1. Go to Cowork tab > ... > Connectors
2. Enable **Canva** and authorize

Then you can ask Claude things like:

> Find my RFY event flyer designs in Canva.

> Create a social media graphic for the Rise & Shine event.

> Export the volunteer recruitment flyer as a PDF.

This lets you manage both the website and graphics from one place.

---

## Troubleshooting

**"I don't have access to that repository"**
Make sure GitHub is connected (Cowork tab > ... > Connectors > GitHub). You also need collaborator access to the repo (ask Victor).

**Changes aren't showing on the live site**
Ask Claude "Did you push the changes?" If yes, wait 60 seconds and refresh the page (Cmd+Shift+R).

**Something went wrong**
Tell Claude: "Revert the last commit on the RFY website"

---

## Backup Option

If Claude is unavailable, there's a web editor at https://rfy.thewicksproject.org/admin/

Log in with your GitHub account. See `EDITING-GUIDE.md` for details.

---

## Questions?

Ask Claude, or reach out to Victor.
