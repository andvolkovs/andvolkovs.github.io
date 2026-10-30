---
title: Reach
summary: One video in, posts on eight platforms out
icon: broadcast
tagline: AI writes the captions in the creator's own voice, and the posts go out on schedule on eight platforms.
year: 2026
status: live
role: Solo developer
featured: true
order: 2
accent: '#4cc9f0'
private: true
skills: [Python, FastAPI, React, TypeScript, SQLite, LLMs, Claude API, OpenAI API, Whisper, Prompt Engineering, ffmpeg, OpenCV, REST APIs, Scheduling, Automation, Human-in-the-loop, PWA, VPS Deployment]
cover:
  type: image
  src: /media/reach/connects-dark.webp
  srcLight: /media/reach/connects-light.webp
  frame: none
  alt: "What Reach connects to: AI models that draft the captions, eight networks it publishes to, videos and built-in tools, and outside AI agents"
  caption: What Reach connects to
workflow:
  - title: Upload
    icon: upload
    description: A video comes in by upload or from Google Drive.
  - title: Draft
    icon: sparkles
    description: AI transcribes it and drafts captions in the creator's voice.
  - title: Approve
    icon: circle-check
    description: Pick a caption and a time. Nothing posts until it's approved.
  - title: Publish
    icon: send
    description: Posts go out on schedule. No API? A phone alert says it's time to post.
  - title: Track
    icon: chart-column
    description: Every post is logged with its link, so gaps are easy to spot.
highlights:
  - Posts to X, TikTok, Instagram, Threads, YouTube, LinkedIn, Facebook and Snapchat
  - The AI learns the creator's voice from their videos and the captions they pick
  - Works with Claude, ChatGPT, Grok or any OpenAI-compatible model
  - Outside AI agents get their own key, limited to one part of the app
  - Runs as one service on one server, with tests on every push
---

I built it for my own use on a specific project, but with the goal to make it work for any project. My friend had a lot of video content that he wasn't using on other social media platforms. So I thought I would help him with it, and I saw that I could build an efficient system with AI to automate everything.

The annoying part would have been posting everything by hand on each platform, picking captions and tagging content. Now the creator only picks a caption and a time. **AI writes the captions** in his own voice, and the posts go out on **eight platforms** on schedule. Where a platform has no API, a phone alert arrives with the text ready to paste. It's in use right now.

The backend is **FastAPI** with SQLite, and the dashboard is **React**. It works on a phone too.
