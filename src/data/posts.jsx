import React from 'react';
import {
  IkeaTransformationInfographic,
  AlphabetCapexInfographic,
  GenAiRoiMismatchInfographic
} from '../components/blog/AiLayoffTrapInfographics';
import { ClarityDecisionMediationInfographic } from '../components/blog/FiveSkillsInfographics';

export const posts = {
  'the-5-skills-nobody-teaches-you': [
    { type: 'paragraph', content: 'Most people build a resume. They list what they studied, where they interned, what tools they know. Then they send it out and wait to be chosen.' },
    { type: 'paragraph', content: 'That is the wrong game entirely.' },
    { type: 'paragraph', content: 'A resume built on qualifications makes you a commodity. There are ten thousand people with the same degree, the same internship, the same tools. You are competing on price — and someone will always accept less than you.' },
    { type: 'paragraph', content: 'There is a different game. One where you stop being chosen and start being sought. Where companies don\'t compare you to other candidates — they wonder how they\'ll operate without you.' },
    { type: 'paragraph', content: 'That game is built on five skills. Not technical skills. Not domain knowledge. The five disciplines that sit underneath everything — that make every other skill you have actually work.' },

    { type: 'heading', content: '1. Clarity — The Skill Every Other Skill Is Downstream Of' },
    { type: 'paragraph', content: 'Before you can decide well, you need to see clearly. Before you can communicate well, you need to know what you actually mean. Before you can lead, you need to know where you\'re going. Clarity is not a soft skill. It is the prerequisite for every other skill on this list.' },
    { type: 'paragraph', content: 'Most people are not unclear because they lack intelligence. They are unclear because they have never been forced to state their thinking explicitly. They carry vague convictions, half-formed goals, and unexamined assumptions — and then wonder why their decisions feel uncertain, why their communication lands softly, why their leadership doesn\'t pull people forward.' },
    { type: 'paragraph', content: 'Clarity is a practice, not a personality type. It works like this: you take a thought you believe is true and you force it into precise language. Not rough language. Precise language. You ask: What exactly am I claiming here? What would have to be true for this to be correct? What am I assuming? What\'s the specific outcome I\'m trying to produce?' },
    { type: 'paragraph', content: 'When you do this consistently, something happens. The fuzzy beliefs either sharpen into something defensible or dissolve into nothing. The assumptions become visible. The actual problem — as opposed to the surface problem — shows itself. And once you can see it, you can act on it. Until then, you are just managing the fog.' },
    { type: 'paragraph', content: 'In a professional context, clarity is what makes you credible before you\'ve said very much. The person who can articulate a situation precisely — who can name the real problem when everyone else is describing the symptoms, who can say what they want and why they want it without wandering — signals competence. Not because clarity sounds impressive, but because it makes everything downstream more reliable: the decisions sharper, the communication cleaner, the negotiating position stronger.' },
    { type: 'paragraph', content: 'Build it like a muscle. After every significant conversation or decision, write down what you actually concluded and why. Before every important meeting, write down what you want to happen and what you\'re willing to trade. Force vagueness into specificity repeatedly, and specificity becomes your default mode of thinking.' },

    { type: 'component', component: <ClarityDecisionMediationInfographic /> },

    { type: 'heading', content: '2. Decision Making — The World\'s Greatest Skill' },
    { type: 'paragraph', content: 'Every other skill you have is wasted if you cannot make great decisions.' },
    { type: 'paragraph', content: 'Think about it. You can be brilliant at communication — but if you communicate the wrong message, it counts for nothing. You can be a natural leader — but if you lead people in the wrong direction, the team follows you into failure. Every skill you build, every capability you develop, every piece of knowledge you accumulate — it all flows through the filter of your decisions. If that filter is broken, everything is lost.' },
    { type: 'paragraph', content: 'Decision making is the world\'s greatest skill because it is the one that determines whether all your other skills produce outcomes or produce noise.' },
    { type: 'paragraph', content: 'Here is how you build it. A great decision is not a guess. It is a process:' },
    { type: 'paragraph', content: 'Gather — collect the relevant information. Not all information. Relevant information. The person who waits for complete information never decides. The person who acts on insufficient information decides badly. You are looking for the minimum viable input to make a sound call.' },
    { type: 'paragraph', content: 'Filter — remove what doesn\'t apply to your specific situation. Most information is noise. Your job is to find the signal.' },
    { type: 'paragraph', content: 'Categorise — sort what remains. What is urgent? What is important? What is both? What is neither?' },
    { type: 'paragraph', content: 'Connect the dots — look for patterns. What does this remind you of? What has happened before in situations like this? What is the underlying structure?' },
    { type: 'paragraph', content: 'Make assumptions explicit — every decision rests on assumptions. State yours out loud. "I am assuming that X is true. If X is not true, my decision changes." This one practice alone will save you from more bad decisions than almost anything else.' },
    { type: 'paragraph', content: 'Do a dry run — simulate the outcome mentally before you commit. Run it forward three months, six months, a year. What does the world look like if this decision plays out as expected? What does it look like if it doesn\'t?' },
    { type: 'paragraph', content: 'Decide. Then close the loop.' },
    { type: 'paragraph', content: 'That last part is where most people fail. They decide — and then keep the loop open. They continue entertaining alternatives. They revisit. They second-guess. Every open loop costs mental energy and delays the execution that would give you real information about whether the decision was right.' },
    { type: 'paragraph', content: 'A good decision committed to fully beats a perfect decision made too late. Every time. Without exception.' },
    { type: 'paragraph', content: 'Do this process mentally, repeatedly, across every decision you face — small and large. Train the muscle. Because decision making is not a gift. It is a discipline built through deliberate repetition.' },

    { type: 'heading', content: '3. Communication — The Skill That Makes Everything Land' },
    { type: 'paragraph', content: 'You can be completely correct and completely unheard at the same time. This happens every day to intelligent people who have not mastered communication.' },
    { type: 'paragraph', content: 'The mistake most people make is thinking communication begins when they speak. It doesn\'t. Communication begins in the other person\'s mind — before you\'ve said a word. What do they already believe? What are they afraid of? What do they need to feel understood about before they can receive anything you\'re about to say?' },
    { type: 'paragraph', content: 'The person who steps into the other person\'s position first — who speaks from their reality, not their own — will always land their message more effectively than the person who simply says the right thing.' },
    { type: 'paragraph', content: 'This is not manipulation. It is the highest form of communication. It is the difference between being understood and making someone feel understood. Trust comes before teaching. Always.' },
    { type: 'paragraph', content: 'And in a professional context, this matters more than almost any other skill — because communication is the thing that makes your technical ability, your ideas, your decisions actually reach people. Without it, everything else stays inside your head.' },

    { type: 'heading', content: '4. Negotiation — The Skill That Removes Neediness' },
    { type: 'paragraph', content: 'Most people think negotiation is a conversation that happens when you\'re discussing salary or closing a deal. It isn\'t. Negotiation is a mindset that runs underneath every professional interaction you have.' },
    { type: 'paragraph', content: 'The person who negotiates well is never needy. And neediness is the most expensive professional position you can occupy — because the moment someone senses you need something from them, all the leverage shifts to their side.' },
    { type: 'paragraph', content: 'A negotiating mind understands one thing deeply: businessmen don\'t involve emotions. They replace. The moment you understand this — not as cynicism, but as clarity — you stop showing up desperate and start showing up positioned.' },
    { type: 'paragraph', content: 'Here is what that positioning looks like in practice. You don\'t negotiate for things you haven\'t built leverage for yet. You build the leverage first — the skill, the result, the proof of work — and then the negotiation is just making that leverage visible. By the time you sit across from someone, the work is already done. You are simply letting them see it.' },
    { type: 'paragraph', content: 'The negotiating mindset doesn\'t just help in salary discussions. It changes how you enter every room. You stop asking "will they choose me?" and start asking "do I want to be here?" That shift — from needing to being needed — is the foundation of a career that doesn\'t depend on anyone\'s approval.' },

    { type: 'heading', content: '5. Leadership — The Skill That Makes You a Commodity Worth Fighting Over' },
    { type: 'paragraph', content: 'Leadership is not a title. It is a practice available to anyone, from day one, regardless of where they sit in an organisation.' },
    { type: 'paragraph', content: 'The people who are never at risk of being cut — who get called first when something important needs to happen — they are not necessarily the most technically skilled. They are the people whose absence would create the most problems.' },
    { type: 'paragraph', content: 'They make others better. They solve problems nobody assigned them. They give direction when there is none. They hold accountability without being asked. They surface risks before they become crises. They manage the team, maintain the decorum, get the work done.' },
    { type: 'paragraph', content: 'Understand this: a leader is a commodity that people want to hire to get their work done. And a commodity in genuine demand does not negotiate from desperation — they negotiate from abundance. The best organisations are not just hiring you. They are replacing someone. And they will replace someone with you if you are demonstrably better at leading outcomes than whoever is currently there.' },
    { type: 'paragraph', content: 'This is not ruthless. It is simply how organisations function. Emotions are not part of the business calculation. Results are. Become the person who delivers results through other people — and you become someone who cannot easily be replaced.' },

    { type: 'heading', content: 'The Thread That Connects All Five' },
    { type: 'paragraph', content: 'These skills do not operate in isolation. They compound.' },
    { type: 'paragraph', content: 'Clarity lets you see the whole system before you act. Decision making lets you choose the right move within that system. Communication lets your choice reach the people who need to act on it. Negotiation means you are doing all of this from a position of strength — never desperation. And leadership ensures that all of it moves at the scale of a team, not just an individual.' },
    { type: 'paragraph', content: 'Build them in sequence. Start with clarity — because without it, everything else is just movement without direction. Add decision making — because clarity without action is just observation. Layer in communication — because decisions that don\'t reach people don\'t change anything. Build the negotiating mindset — because the world will test your resolve constantly, and the person who negotiates from strength survives every test. And develop leadership — because the greatest multiplier of individual capability is the ability to move other people.' },
    { type: 'paragraph', content: 'Your resume is not a list of what you have done. It is a pitch deck backed by proof of work. And the proof that matters most is not the certificates or the grades. It is the evidence that you think clearly, decide well, communicate effectively, negotiate from strength, and lead without being asked.' },
    { type: 'paragraph', content: 'That person is not a candidate. That person is a solution. And solutions don\'t wait to be chosen. They get called.' }
  ],

  'the-ai-layoff-trap-why-companies-winning-arent-cutting-jobs': [
    { type: 'paragraph', content: 'IKEA automated the work of nearly 8,500 customer service employees with a single chatbot. Most companies would have booked that as a payroll win and stopped there.' },
    { type: 'paragraph', content: 'IKEA didn\'t stop there. It retrained those employees into interior design advisors, guiding customers through room planning and furniture selection over phone and video. The result was a richer customer experience, higher-value work for the employees who stayed, and a reported $1.3 billion new revenue stream.' },
    { type: 'paragraph', content: 'That one decision — automate the task, reinvest in the person — is turning out to be the clearest dividing line between companies that will actually win with AI and companies that will just spend on it.' },

    { type: 'component', component: <IkeaTransformationInfographic /> },

    { type: 'heading', content: 'The layoff instinct is a costly shortcut' },
    { type: 'paragraph', content: 'Walk into most boardrooms right now and you\'ll hear a version of the same logic: AI is automating tasks, so headcount should shrink. It sounds like straightforward cost optimization. In practice, it\'s often the opposite.' },
    { type: 'paragraph', content: 'The real risk isn\'t that AI outperforms your employees. It\'s that eliminating the people who built up institutional knowledge — the ones who understand the edge cases, the exceptions, the messy realities that never make it into a training set — quietly erodes the capability that gave the company its edge in the first place.' },
    { type: 'paragraph', content: 'What replaces that workforce isn\'t a smarter version of them. It\'s a model trained on historical data, without the judgment, adaptability, or contextual reasoning that real business problems demand. Downsizing on the assumption that AI is a like-for-like substitute for experienced people means trading a flexible, accountable workforce for a system that only performs well within the limits of what it\'s already seen.' },
    { type: 'paragraph', content: 'The resulting division of labor is fairly simple, even if most organizations struggle to act on it. AI absorbs the repetitive, high-volume, pattern-based work. Strategic decisions and judgment calls stay with people. Street smarts, business acumen, the ability to read a situation that doesn\'t match any historical pattern — none of that gets trained into a model. It gets built through experience, context, and accountability. The companies getting this right aren\'t choosing between AI and people. They\'re drawing a clear line for each: AI handles the volume, people handle the judgment.' },

    { type: 'heading', content: 'Role transformation is the lever most companies skip' },
    { type: 'paragraph', content: 'The mistake isn\'t adopting AI. It\'s stopping at adoption. The real value shows up in the step most organizations never take: deliberately redesigning what people do once AI has taken over the repetitive parts of their job.' },
    { type: 'paragraph', content: 'IKEA\'s case makes the point well. Done properly, role transformation doesn\'t just protect jobs — it can directly improve profitability and open entirely new lines of business. Companies that treat AI purely as a cost-cutting tool capture a fraction of what it can actually deliver. Companies that treat it as a growth lever, by freeing people up for judgment-driven, customer-facing, higher-value work, tend to see returns that are out of proportion to the initial investment.' },
    { type: 'paragraph', content: 'The organizations that win with AI over the next decade won\'t be the ones that eliminate the most jobs. They\'ll be the ones that eliminate the most repetitive work, freeing their people to do what machines still can\'t.' },

    { type: 'heading', content: 'Spend isn\'t the metric — ROI is' },
    { type: 'paragraph', content: 'There\'s a sharper lesson buried in the IKEA story: how much a company spends on AI infrastructure matters far less than what it gets back for that spend.' },
    { type: 'paragraph', content: 'Even Alphabet proves the point, and Alphabet is one of the most profitable companies on the planet. In Q2 2026, Google spent $44.9 billion on AI infrastructure — chips, servers, data centers — but generated only $39.1 billion in operating cash flow over the same period. That\'s the company\'s first-ever quarter of negative free cash flow since its 2004 IPO, and this from a business still posting record revenue, still growing double digits, still expanding cloud at pace. If a balance sheet like Alphabet\'s can see AI capex outpace cash generation in a single quarter, no organization should assume that spending alone guarantees a return.' },

    { type: 'component', component: <AlphabetCapexInfographic /> },

    { type: 'paragraph', content: 'Infrastructure is the entry ticket, not the scoreboard. The organizations that actually benefit from AI are the ones treating ROI, not capital deployed, as the metric that defines success.' },
    { type: 'paragraph', content: 'And the ROI data holds a genuine surprise. A 2025 MIT study analyzing 300 enterprise AI deployments found that 95% of corporate generative AI pilots fail to deliver any measurable financial return. The revealing part isn\'t the failure rate — it\'s where the money goes versus where the returns actually show up. Companies are pouring the bulk of their AI budgets into sales and marketing, which turns out to be consistently the weakest area for ROI. The strongest, most measurable returns are showing up instead in back-office functions: customer service automation and HR operations, where cost reduction and efficiency gains are far easier to track and prove.' },

    { type: 'component', component: <GenAiRoiMismatchInfographic /> },

    { type: 'paragraph', content: 'This is exactly the disconnect IKEA avoided. Its transformation worked because it targeted a function — customer service — where AI\'s effectiveness was already proven, and it paired the automation with an actual plan for the people it displaced. Most companies skip that second half. They fund AI where the hype is loudest rather than where the integration is strongest, and then wonder why the returns don\'t show up.' },
    { type: 'paragraph', content: 'The sequencing lesson follows from this directly: lead with the functions where AI\'s ROI is already demonstrated, rather than spreading spend evenly and hoping for the best, and use those early, provable wins to fund and de-risk transformation elsewhere in the business.' },

    { type: 'heading', content: 'Change management is the missing discipline' },
    { type: 'paragraph', content: 'This is where change management stops being a soft skill and starts being a strategic capability.' },
    { type: 'paragraph', content: 'Consulting firms can bring frameworks, benchmarks, and technical expertise to AI readiness and digital transformation. But the actual work of managing the change inside the organization — retraining people, redesigning workflows, communicating a new vision for what roles look like — sits with leadership, not with external advisors.' },
    { type: 'paragraph', content: 'Which means change management can\'t stay an HR afterthought bolted on at the end of a transformation program. It has to be built into the strategy from day one, with the same rigor applied to technology selection or process redesign.' },

    { type: 'heading', content: 'The leadership skill for this decade' },
    { type: 'paragraph', content: 'AI adoption is becoming table stakes fast. What separates the organizations that thrive from the ones that stagnate is what happens after the technology is in place — whether leadership actually has the discipline to reinvest in its people instead of simply reducing their headcount.' },
    { type: 'paragraph', content: 'AI doesn\'t have to replace human potential. Done right, it unlocks it. The companies internalizing that — and building the change management muscle to act on it — aren\'t just adopting AI. They\'re the ones that will actually grow because of it.' },

    {
      type: 'references',
      items: [
        'IKEA AI chatbot and workforce retraining into interior design advisors — widely reported case, including coverage of the retraining program and associated revenue impact.',
        'Alphabet Q2 2026 earnings — Yahoo Finance, "Even Google\'s $120 billion earnings couldn\'t out-pace its AI spend" (July 2026)',
        'Alphabet Q2 2026 capex and free cash flow — Moneywise, "Google hits negative free cash flow for the first time since its 2004 IPO..." (July 2026)',
        'MIT NANDA Initiative, "The GenAI Divide: State of AI in Business 2025" — as reported by National CIO Review',
        'MIT GenAI Divide findings on sales/marketing spend vs. back-office ROI — Trullion',
        'MIT GenAI Divide report coverage — Fortune/Yahoo Finance, "MIT report: 95% of generative AI pilots at companies are failing"'
      ]
    }
  ]
};
