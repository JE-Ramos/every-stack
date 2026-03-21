I’m currently in the middle of writing a blog series on Claude Code tips, tricks, and best practices, and this first post isn’t the gentle introduction I originally planned.

I was going to ease in with straightforward topics like context management and useful commands, then Skills launched last week, and it looked like the missing piece I was waiting for, so I spent a good portion of my last week testing and rebuilding different parts of my workflows to understand these new systems.

When a fundamental shift happens, you pivot.

Consider this the “why does any of this matter” post before we get to the “here’s how to use /compact” posts. What follows is my current understanding based on the documentation, early testing, and a lot of trial and error.

I’m documenting what I’m learning in real-time, backed by my own testing with my different agents, commands and projects in Claude Code.

This post walks through what I learned about four core types of Claude Code extensibility and when to use each one. (There are others like hooks and MCP servers, but these four are where I started.)

The Mental Model: Four Core Types
Claude Code supports multiple extensibility types (skills, subagents, commands, plugins, hooks, MCP servers, and more). This post focuses on four that work together as a cohesive system. Each serves a specific purpose, and understanding when to use each is critical.

Here’s a simple decision tree:

“I want Claude to remember X automatically” → Skill

“I want to automate Y workflow step-by-step” → Subagent

“I use subagent Z frequently and want a shortcut” → Command

“I want to share my setup with others” → Plugin (bundle all three)

Skills: A Discovery Journey
Skills are auto-invoked context providers. Claude automatically loads them based on description matching with the conversation context.

Location hierarchy:

Personal: ~/.claude/skills/ - Your own preferences and context

Project: .claude/skills/ - Project-specific information

Shared: Template skills that can be reused across projects

I started by creating three skills to test this system:

Personal user manual (my work preferences and communication style) (https://www.youngleaders.tech/p/why-you-should-have-a-personal-user-manual)

I’m treating this like custom instructions on ChatGPT - What I like, who I am, what are my working styles, goals etc.

Test Project stakeholders (product lead and UX research lead context)

Current use case for this one is for using when creating user stories for stakeholder personas. This skill would be hold key information about the persona tied to the stakeholder and it would be triggered when I work on a user story with the matching trigger text or persona name

Stakeholder template (a meta-skill for creating other stakeholder skills)

I’m in a platform team, I have many stakeholder personas to support!

The critical success factor at this step was also my first discovery - description quality directly determines auto-invocation accuracy.

Generic descriptions failed completely.

But when I structured descriptions with a WHEN + WHEN NOT pattern, the skills were being invoked each time.

Example that works:

description: Stakeholder context for Test Project when discussing product features,
UX research, or stakeholder interviews. Auto-invoke when user mentions Test Project,
product lead, or UX research. Do NOT load for general stakeholder discussions
unrelated to Test Project.
Example that doesn’t work:

description: Provides information about stakeholders
Key success factors for descriptions:

The difference is specificity and boundaries. You need to tell Claude:

What the skill contains

When to load it

When NOT to load it

Putting the above at #1, here are the other findings:

WHEN + WHEN NOT pattern: Explicit boundaries prevent false positives

Possessive pronouns: “HIS/HER/THEIR work”, “HIS/HER/THEIR messages” scoped my personal skills perfectly

Multi-skill coordination: Claude successfully loads complementary skills together

Template meta-pattern: Template skills can provide guidance for creating other skills

Real-World Example: Personal User Manual
This is the first skill I created and deployed - and it was based on a prior blog of mine:

Why You Should Have a Personal User Manual | #88
Why You Should Have a Personal User Manual | #88
John Conneely
·
March 25, 2025
Read full story
Here’s the skill description:

description: Personal work preferences and communication style for John Conneely. Auto-invoke when drafting HIS emails, Slack messages, or internal updates; planning HIS work or tasks; optimising HIS productivity workflows; or discussing HIS collaboration approach. Auto-invoke when user requests “help me write”, “draft an email”, “create a message”, “plan my work”, or “write internally”. Do NOT load for external blog posts, customer-facing communications, or public documentation unless John explicitly requests.
What it contains:

My preferred collaboration methods and communication channels

How I like to give and receive feedback

My approach to documentation and technical decisions

Internal workflow preferences

This skill now automatically provides context whenever Claude assists me with my personal work, without me needing to repeat these preferences in every conversation. I’ve only had this enabled for a couple of days, so I can’t tell for sure how much of a difference this is going to make until I use it on a new project with no context.

Here’s a test though to show you the difference, of me asking Claude to help me create a slack message to share with the team about this blog. It’s pretty clear to me which one is written by an AI in these two examples, and I am a proponent of getting my points across quickly, which is clearly evident in the second example.

First example, with skill file removed

Personal skill file added back in

Certainly looks like a big improvement to me. Moving on..

Installing Skills from the Marketplace
Since I’ve been building and sharing agents for quite some time now, the most common question I get is: “How do I actually use these in my own Claude Code setup?”

The answer before plugins/marketplaces were released:

Clone my repo and run the install script

But only if I am not worried about all the AI slop and have made the repo public

And only if it doesn’t have any sensitive information

And only if the agent was built after the version of the agent builder that included installer script validations

And only if I remembered to trigger that validation agent when creating the agent initially because I didn’t have any commands

And only after the validation agent was refactored to <500 lines of instructions from 1000+, fixing a load of the missed installer validations

Now rinse and repeat for 20/30 other agents

The answer now:

Clone the marketplace repository

Find the plugin that contains the skill you want

Run the plugin install script.

For the above, simply swap out skill with agent, command, hook or template and the instructions remain the same.

Luckily for you, I already have published my skills toolkit, which includes the skills toolkit that you can see in the above screenshots. Here’s how you can get that and install it yourself.

# Clone the marketplace

git clone https://github.com/YoungLeadersDotTech/young-leaders-tech-marketplace.git

# Navigate to the plugin you want

cd young-leaders-tech-marketplace/plugins/skills-toolkit

# Run the install script

./install.sh
Now that I have this working, I also plan on adding some other useful agents to this marketplace (like my agent builder suite)

This install script automatically:

Detects your Claude Code configuration directory

Copies agents to .claude/agents/

Copies commands to .claude/commands/

Copies skill templates to .claude/skills/shared/

Verifies everything installed correctly

No separate repos needed.

Everything is bundled in the marketplace. You don’t need access to multiple repositories - just clone the marketplace and you’re done.

If you’re rolling skills out to a team:

Share the marketplace URL with your team

Document which plugins solve which problems

Consider forking the marketplace for internal customisation

Use git to keep everyone’s installations in sync

Updates

To update a plugin, pull the latest marketplace changes and re-run the install script. The script overwrites existing files, so you get the latest version.

Is it Time to Refactor Agents with Skills?
Subagents are explicit workflow orchestrators. You invoke them by typing @agent-name, keywords or through the Task tool. They guide multi-step processes.

As I explained above, as part of the learnings and testing in this whole process, I built two subagents:

skill-creator-agent - An interactive workflow for creating new skills

skill-validator-agent - A comprehensive validation checklist for skills

But the same problem I have had all along followed me here

The problem I am talking about is one that I have with a lot of my existing agent files. In an effort to keep instruction files minimal, I have implemented template re-usable instructions for most of my agents to refer to in their agent instructions, and they are quite difficult to maintain across different agent suites and repos.

From what I can tell at this early stage is that skills seems to fill in this gap, and make this a little less painful.

Here is an example, using the agents you can find on my marketplace.

My First Pass
(Without skills, as I didn’t have an agent to create them yet)

I ended with 803 lines for the skill-creator-agent.

I was pretty happy with the functionality. Comprehensive workflows, detailed instructions, extensive validation. Of course, I knew it was way over the advised size of agent instructions (3/400 lines max), but I was going to get them evaluated, so it wasn’t a problem yet.

Next, I asked my eval committee to review it. (Eval alumni are coming soon to the marketplace)

Eval committee score: 62/100

Primary feedback: “Too verbose. Redundant structure. Difficult to maintain.”

That stung. But they were right.

I had:

5 duplicate TODO structures across the subagent

A 130-line misaligned template section that should have been a separate file

Consolidated checklists that repeated themselves

Over-explained instructions that could be streamlined

My Second Pass
I spent the next iteration refactoring both subagents based on the feedback:

Before:

skill-creator-agent: 803 lines

skill-validator-agent: 698 lines

Total: 1,285 lines

After:

skill-creator-agent: 281 lines (65% reduction)

skill-validator-agent: 306 lines (56% reduction)

Total: 587 lines (54% reduction)

Zero functionality lost.

Every capability remained intact.

So, what changed?
Removed duplicate TODO structures (5 instances → 1 reusable pattern)

Extracted the misaligned template to a separate skill file (This is where I’m seeing the big improvement to agent performance by the way)

Consolidated redundant validation checklists

Streamlined instruction language without losing clarity

Improved maintainability through DRY principles

Post-refactoring eval: Estimated 82-85/100

So the learning that was reinforced from this is that More lines ≠ better instructions.

Subagents need to be maintainable, not comprehensive. Claude is smart enough to work with concise, well-structured guidance.

Skills enables this even further.

Subagent Analyses, Main Claude Executes
This is an architectural pattern I validated - a hybrid approach for subagent-command interactions.

How it works:

Subagent uses Read, Grep, Glob, TodoWrite (analysis tools only)

Subagent analyses context and creates comprehensive plan

Main Claude executes Write, Edit, Bash (modification tools)

This preserves tool access control while enabling workflow automation

Why this matters:

Slash Commands can invoke subagents for planning, then Main Claude handles execution. This pattern gives you the best of both worlds - structured workflows with full tool access.

But wait, what are slash commands?

Slash Commands are Shortcuts to Workflows
Commands are user-initiated shortcuts. You type /command to trigger them.

They are essentially prompts that can be saved per project or globally. These are powerful ways to ensure changes you make are actually working, as a tiny change in your prompt from one session to the next can have dramatically different outputs.

You can also direct the command towards the skill file, so you don’t have to worry about it being triggered by the keywords.

What do they look like? Well, if you install the above plugin on my marketplace, you can test this out yourself quite quickly.

I created three commands as part of my digging this weekend using my command subagent (also coming soon to the marketplace)

/create-skill - Invokes skill-creator-agent for interactive skill creation

/validate-skill - Invokes skill-validator-agent for comprehensive validation

/list-skills - Simple bash script to show all available skills

Most commands either invoke subagents (workflow shortcuts) or run simple bash scripts (utility shortcuts). They get saved to .claude/commands/ in your project or personal directory

Commands are the fastest way to start frequently-used workflows. Instead of typing “Can you help me create a skill?” or “@skill-creator-agent”, I just type /create-skill and the workflow starts immediately.

Can Plugins Help with Scalable Agent & Tool Distribution?
Well, yes, I think that is their main purpose.

Plugins are bundled packages of skills, subagents, and commands distributed as cohesive units.

As you may have surmised by now, I have shipped my first plugin - The Skills Toolkit - to the Young Leaders in Tech Marketplace.

What is in it?

2 intelligent subagents (skill-creator-agent, skill-validator-agent)

3 slash commands (/create-skill, /validate-skill, /list-skills)

4 professional skill templates (stakeholder, ground truth, product context, initiative overview)

Complete installation script with automatic setup

Full documentation and troubleshooting guides

The install script that comes with the plugin detects your Claude Code directory and copies everything to the right locations. No manual file management, no missing dependencies.

Plugins may solve the distribution problem.

Instead of sharing scattered markdown files or with complex install scripts on scattered repos, you now get a complete package with versioning, documentation, and automated installation. Users don’t need to understand your directory structure - they just run the install script.

What’s next

I’m gradually adding more plugins to the marketplace as I identify patterns worth sharing. The marketplace is young, but it’s where I’m investing time because I see the potential for community-driven extensibility. I also have 40 or 50 agents at this point that people may find useful, and this seems to be a great way to share.

Key Takeaways
After a week of building and testing (along with some already known takeaways), here’s what I think I know:

1. Description engineering is critical for skills

Use WHEN + WHEN NOT pattern for explicit boundaries

Possessive pronouns (”HIS/HER/THEIR work”) prevent contamination

Test your descriptions - generic descriptions fail

2. Multi-skill coordination works

Claude successfully loads complementary skills together

Personal + Project skills can coexist without conflicts

Template meta-skills provide guidance for creating other skills

3. Subagents should be concise, not comprehensive

First draft: 803 lines, eval score 62/100

Refactored: 281 lines, eval score 82-85/100

Zero functionality lost in refactoring

4. The hybrid pattern is effective

Subagents analyse using Read/Grep/Glob/TodoWrite

Main Claude executes using Write/Edit/Bash

Preserves security boundaries while enabling automation

5. Commands are workflow shortcuts

Many commands invoke subagents or run bash scripts

Type /command instead of describing what you want

Faster than typing subagent names or explaining workflows

The Learning Continues
This is what I know as of today (21st of October). I’ve validated these patterns through some small testing, but I’m still learning.

The Young Leaders Tech Marketplace is my experiment in sharing what works for me and might work for you.

The Skills Toolkit plugin is just the first - It’s not comprehensive, it’s not perfect, but it’s a real working set of agents in a plugin that you can use today to create your own skills.

I’ll be following this post soon with more Claude tips and tricks, but before that I need some help.

Things I’m still figuring out:

Best practices for team/company-wide skill management

Performance implications of many auto-invoked skills

How skills interact with other Claude Code features

What makes a plugin worth publishing vs keeping internal
