# Lab Buddy AI

Prompt:
Create a student-side “Live Lab Session with AI Copilot” screen for the Hatsize platform, visually consistent with the same design system used at https://ascend-mocks.vinod-patil-302.workers.dev/hatsize/portal/admin-events (reuse top bar, typography scale, basic colors, and card styles, but switch to a student-centric layout).

Layout requirements:

Full-width main area split into:
Center-left (approx. 70%): the actual lab environment (terminal/VM + lab guide).

Right sidebar (approx. 30%): “Lab Copilot” assistant panel.


Center-left: Lab environment

At the top, add a horizontal strip showing:
Lab title (e.g., “SQL Injection: Exploit and Patch”).

Status pill “In Progress”.

Timer showing “Elapsed: 18:42”.


Below that, split vertically into two stacked regions:
Upper region: an embedded terminal window (black background, monospace text) showing a few past commands and an error message, like:
student@attack-box:~$ curl http://10.0.0.5/login.php

student@attack-box:~$ sqlmap -u "http://10.0.0.5/login.php" --batch

Error line showing something like “Connection refused” or “Unknown host”.


Lower region: a collapsible “Lab Guide” panel with numbered steps. Highlight the current step (“Step 3: Identify vulnerable input field”) with a colored border or background.


Right sidebar: Lab Copilot assistant

Add a vertical panel titled “Lab Copilot (AI)”.

At the top of the panel, show a context summary chip row:
“Current step: 3/5”

“Last command: sqlmap …”

“Status: You might be stuck” (in a subtle warning color)


Below, show a chat-like interaction between Student and Copilot, with different bubble styles:
Copilot message (faded to indicate it’s scripted, not live):
“I noticed your last command failed to connect to the target. Let’s debug this together. First, can you check if you can ping the server at 10.0.0.5?”


Student bubble:
“Why did my sqlmap command fail?”


Copilot bubble (Socratic tone):
“Take a look at the error message in your terminal. What does it say about the connection? Try to explain it in your own words.”

Followed by a small “Hint” chip the student can click: “Check basic network connectivity (ping) before running sqlmap.”



At the bottom of the sidebar, add:
A text input with placeholder “Ask about this lab or your last command…”

A mic icon button on the left (grey, not active by default). When “active”, show a small label “Listening…” and animated waves.

A small toggle labelled “Socratic mode” (on by default) with helper text: “Gives hints and questions instead of direct answers.”


Stuck detection & proactive hint UI

Above the chat area, briefly show a dismissible banner:
“It looks like you haven’t completed Step 3 yet. Need a hint?”

Buttons: “Show subtle hint”, “Show detailed explanation”, and “Not now”.


Design tone

Maintain the same visual language as the admin portal: same fonts, similar spacing, flat cards, and neutral backgrounds.

Ensure clear separation between the lab environment (practical work area) and the AI Copilot (guidance area).

The Copilot should feel assistive and non-intrusive—no full-screen takeover, just a helpful sidebar.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://copilot-lab-guide.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8af7c198-b8ef-46c4-9503-2a9038222d87).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
