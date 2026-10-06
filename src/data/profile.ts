/**
 * Everything about you lives here. Edit freely, the whole site reads from it.
 */
export const profile = {
  name: 'Andris Volkovs',
  role: 'AI Automation Developer',
  location: 'Dublin, Ireland',
  /** Short line under your name in the hero. */
  headline: 'I turn repetitive work into bots and AI pipelines that run on their own.',
  /** Sentences above the statement in the About section. Each string is a paragraph; empty hides it. */
  bio: [
    "I'm a developer in Dublin. I build bots, automations and AI systems in Python and TypeScript. Since January 2026 I've been building on my own, from live Telegram bots to pipelines that publish across many networks. I work with Claude, ChatGPT, Gemini and Grok every day.",
  ] as string[],
  /** A short statement shown under the bio. Set to '' to hide. */
  statement:
    'AI is the greatest leverage of our time. It allows one person to 10x or even 100x their output and create an immense amount of value for businesses and clients. But only if you point it at a real problem and build a proper system around it.',
  /** "How I think" cards in the About section. Icons: src/data/ui-icons.ts or step-icons.ts */
  principles: [
    {
      icon: 'target',
      color: '#fb7185',
      title: 'Results first',
      text: 'I judge a project by what it actually changes when it comes to results. How many hours it saves, how much risk it takes away and, ultimately, how that productivity translates into the business making more money.',
    },
    {
      icon: 'workflow',
      color: '#22d3ee',
      title: 'Systems thinking',
      text: 'I try to look at the whole pipeline, not just single tasks. If you get the system right, good results will come.',
    },
    {
      icon: 'user-check',
      color: '#34d399',
      title: 'Human in the loop',
      text: 'The bot can do the heavy work, but a person should make the final call and take responsibility for what the AI did.',
    },
  ],
  /** Your photo for the About section, e.g. '/me.jpg' in /public. '' shows your initials. */
  photo: '/me.webp',
  /** Shown as a small status pill in the hero. Set to '' to hide. */
  availability: '',
  /** Show Live / Completed labels on projects. */
  showProjectStatus: false,
  email: 'anvolkovs@gmail.com',
  /** Optional: path to a PDF in /public, e.g. '/cv.pdf'. Set to '' to hide. */
  resume: '',
  languages: ['Latvian (native)', 'Russian (native)', 'English (professional)'],
  socials: [{ label: 'GitHub', url: 'https://github.com/andvolkovs' }],
};

export type Profile = typeof profile;
