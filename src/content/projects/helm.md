---
title: Helm
summary: One place for all my tasks, shared with my AI agents
icon: helm
tagline: One place to rapidly log all my tasks, by voice or chat. My AI agents can work on them too, but only with my approval.
year: 2026
status: live
role: Solo developer, built with Claude Code
order: 1.5
accent: '#e26aa3'
cover:
  type: image
  src: /media/helm/desktop-board-dark.webp
  srcLight: /media/helm/desktop-board-light.webp
  alt: Helm's board on a desktop, with a tab and a coloured panel per project, tasks grouped by Now, Soon and Someday and their key words in bold
  caption: The board, one panel per project
gallery:
  - type: embed
    src: /media/helm/stageshow/embed.html?demo=agent-hero&frame=browser
    frame: browser
    aspect: 1.991
    alt: Animated demo. In Claude Code, an agent claims a task from the board over MCP, edits a file and hands it in for review. The card's badge turns to Review and the task is accepted.
    caption: An agent does a task, I approve it
  - type: embed
    src: /media/helm/stageshow/embed.html?demo=assistant&frame=browser
    frame: browser
    aspect: 1.855
    alt: Animated demo. The assistant suggests an order for the Now tasks with a reason for each, and the cards move into that order once it is applied.
    caption: The assistant suggests an order
  - type: embed
    src: /media/helm/stageshow/embed.html?demo=voice&frame=phone
    frame: none
    aspect: 0.4756
    alt: Animated demo on a phone. Spoken words stream in, Helm drafts the task with its project, priority, estimate and a subtask, and it is added to the Trip to Lisbon project.
    caption: Say a task, check the draft
  - type: embed
    src: /media/helm/stageshow/embed.html?demo=today&frame=phone
    frame: none
    aspect: 0.4755
    alt: Animated demo on a phone. A main task on Today is swiped right to finish it, the day's tally moves to 2 of 6 done, and Undo brings it back.
    caption: Plan the day, swipe a task to finish it
  - type: image
    src: /media/helm/desktop-board-dark.webp
    srcLight: /media/helm/desktop-board-light.webp
    alt: Helm's board on a desktop, with a tab and a coloured panel per project, tasks grouped by Now, Soon and Someday and their key words in bold
    caption: The board, one panel per project
  - type: image
    src: /media/helm/themes.webp
    frame: none
    alt: Helm's Focus view on phones in the Desert, Deep forest, Night and Neo Tokyo themes
    caption: Four of the seven themes
skills: [TypeScript, React, Node.js, Hono, SQLite, MCP, Claude Code, OpenAI API, LLMs, Voice AI, Human-in-the-loop, Real-time Systems, PWA, Web Push, Docker, Raspberry Pi, Tailscale]
workflow:
  - title: Capture
    icon: mic
    description: I type or say a task, and AI turns it into a draft.
  - title: Plan the day
    icon: calendar-clock
    description: Set the key tasks for the day, while every other task stays sorted by project and priority.
  - title: Focus
    icon: target
    description: Switch on a Pomodoro-like view to focus on one task, with a timer.
  - title: Agents
    icon: bot
    description: AI agents can be assigned to each project. Any task marked for AI can be picked up and done by them.
  - title: Sync & log
    icon: radio
    description: Every change is logged and synced across devices.
highlights:
  - AI agents like Claude Code use it over MCP
  - The AI proposes, I approve, and the log shows both
  - A day plan with up to three main tasks
  - Runs at home on my own Raspberry Pi, reached privately from my phone
  - Nearly 200 automated tests across 4 packages
links:
  - label: Source code
    url: https://github.com/andvolkovs/helm
    kind: repo
---

I wanted one place to rapidly log all my tasks the moment they come into my mind, either by voice or chat. AI sorts them by project and priority. My AI agents can then access the projects and begin executing those tasks as well. The apps I used before were clunky: slow, with too many clicks and messy AI integration.

The main screen is a simple, minimalist **Focus view** with one task in progress at a time, a bit like a Pomodoro screen. **AI agents** like Claude Code connect over MCP. They can add and change tasks, but can't delete them yet. Delete might come later, when needed. In the app, the assistant suggests the order of tasks, but nothing is saved until I approve it. Every change is logged, along with who made it.

I decided on most of the main features, while AI was mainly responsible for making the UI work well and look good. Claude Code built it step by step, and I reviewed every step. It runs at home on my own **Raspberry Pi**. It's free, and I was simply curious what it would be like to host it myself. I now use it daily and log all my to-dos in it. As its main user, I can easily see new efficiencies to add.
