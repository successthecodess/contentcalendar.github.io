import React, { useState } from 'react';
import { Calendar, Mail, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const EmailCalendar = () => {
  const [expandedMonth, setExpandedMonth] = useState('November');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const calendar = [
    {
      month: "November",
      theme: "Foundation & Fear-Busting",
      emails: [
        {
          week: "Week 1",
          subject: "Your brain is lying to you about AP CS...",
          hook: "Fear/Pattern Interrupt",
          cta: "Reply 'READY' to see how we turn C students into 5-scorers",
          prompt: "Write a marketing email using the 'brain lying' angle. Start with a shocking truth about how students' biggest fear (that they're not smart enough for AP CS) is actually a cognitive bias. Include a mini case study of a student who thought they'd fail but scored a 5. Tone: confident, slightly provocative, empowering. End with CTA to reply 'READY'."
        },
        {
          week: "Week 1",
          subject: "[FIRSTNAME] - This is NOT another coding course",
          hook: "Differentiation",
          cta: "Book a 15-min Strategy Call - 3 spots left this week",
          prompt: "Create an email that positions our AP CS prep as completely different from traditional tutoring or online courses. Use the 'gap in the market' framework - what everyone else does vs what we do. Include the specific difference: we focus on confidence + exam strategy, not just content. Make it feel exclusive and premium. CTA: book a strategy call."
        },
        {
          week: "Week 2",
          subject: "The '90-Day 5-Score Formula' (stolen from my Stanford students)",
          hook: "Curiosity/Social Proof",
          cta: "Click here to see the exact blueprint",
          prompt: "Write an email revealing a specific framework/system for scoring 5s. Use the 'stolen/borrowed' angle to create intrigue. Break down the 90-day formula into 3 simple phases (Foundation, Mastery, Confidence). Include a surprising stat about how confidence matters more than coding skills. CTA: book a call to get the personalized version."
        },
        {
          week: "Week 2",
          subject: "Why your AP CS teacher can't help you score a 5",
          hook: "Controversial Truth",
          cta: "Reply 'TRUTH' for the real reason kids struggle",
          prompt: "Create a provocative email (but respectful to teachers) explaining that classroom teaching and exam preparation are two different skills. Use the analogy of 'driving instructor vs. race car coach.' Position our service as the 'race car coach' for AP exams. Include parent-friendly language. CTA: reply to start a conversation."
        },
        {
          week: "Week 3",
          subject: "3 students, 3 months, 3 perfect 5s (here's what they did)",
          hook: "Social Proof/Results",
          cta: "Want results like these? Book your call here",
          prompt: "Write a story-driven email featuring 3 quick success stories. Each student had a different starting point (beginner, struggling, average). Show the transformation arc. Use specific details (starting score, ending score, biggest breakthrough moment). Make readers see themselves in at least one story. CTA: book a strategy call."
        }
      ]
    },
    {
      month: "December",
      theme: "Urgency & Holiday Momentum",
      emails: [
        {
          week: "Week 1",
          subject: "While everyone's baking cookies, smart students are...",
          hook: "Opportunity/Contrast",
          cta: "Start now, thank yourself in May - Book call",
          prompt: "Create an email about using the holiday season strategically. Contrast what most students do (completely disconnect) vs what top scorers do (use the break to build momentum). Include the psychological advantage of starting when others aren't. Make it feel like an insider secret. CTA: book a call to create their holiday game plan."
        },
        {
          week: "Week 2",
          subject: "Your kid's Java homework ≠ AP Exam prep (here's why)",
          hook: "Education/Misconception",
          cta: "Reply with your biggest AP CS question",
          prompt: "Write an educational email explaining the gap between coursework and exam readiness. Use specific examples of what the AP exam actually tests (exam strategy, time management, confidence under pressure). Break the myth that good grades = good scores. Include a compelling stat. CTA: engage via reply."
        },
        {
          week: "Week 2",
          subject: "The 'Christmas Break Accelerator' (limited to 10 students)",
          hook: "Scarcity/Seasonality",
          cta: "Claim your spot - only 6 remaining",
          prompt: "Create urgency around a holiday-specific opportunity. Frame the break as the perfect time to get ahead. Include a limited enrollment number. Describe what students will achieve over the break. Use FOMO (fear of missing out) without being pushy. CTA: book immediately due to limited spots."
        },
        {
          week: "Week 3",
          subject: "My #1 prediction for May 2025 AP CS exam",
          hook: "Curiosity/Authority",
          cta: "Get my full exam predictions - reply YES",
          prompt: "Write an email that positions you as an authority with insider knowledge. Make a specific prediction about exam topics or question types. Tease additional predictions without giving everything away. Build credibility by mentioning past accuracy. CTA: reply to get full predictions and personalized prep plan."
        },
        {
          week: "Week 4",
          subject: "🎁 New Year's gift: Your kid's personalized 5-score roadmap",
          hook: "Gift/Value",
          cta: "Claim your free roadmap consultation",
          prompt: "Create a generous, value-first email offering a personalized roadmap. Frame it as a New Year's gift. Explain what they'll get (assessment, customized plan, timeline). No strings attached vibe but naturally leads to booking. Make parents feel this is too good to pass up. CTA: book the free roadmap session."
        }
      ]
    },
    {
      month: "January",
      theme: "New Year Momentum & Goal Setting",
      emails: [
        {
          week: "Week 1",
          subject: "New Year's Resolution: Score a 5 (here's the 120-day plan)",
          hook: "Fresh Start/Timely",
          cta: "Let's map out your path to a 5 - Book here",
          prompt: "Write an inspiring New Year email that taps into resolution energy. Break down a 120-day plan from January to May. Make it feel achievable and exciting. Include the psychological power of starting fresh. Use countdown mentality. CTA: book a call to customize their plan."
        },
        {
          week: "Week 2",
          subject: "The students who start in January have an unfair advantage",
          hook: "Timing/Advantage",
          cta: "Get your advantage - Reply ADVANTAGE",
          prompt: "Create an email about the strategic timing advantage of starting now vs later. Use data or examples showing January-starters outperform March-starters. Explain why (more time for confidence building, less cramming stress). Make readers feel smart for acting now. CTA: engage by replying."
        },
        {
          week: "Week 2",
          subject: "[FIRSTNAME] - Your transcript is screaming for a 5",
          hook: "Aspiration/Stakes",
          cta: "Let's talk college apps & CS scores - Book call",
          prompt: "Write an email connecting AP CS scores to college admissions. Target high-achievers and their parents. Explain how a 5 on AP CS stands out (especially for STEM majors). Include the credit/placement benefits. Make the stakes clear but motivating. CTA: book a strategy call."
        },
        {
          week: "Week 3",
          subject: "I analyzed 847 AP CS exams. Here's what nobody tells you...",
          hook: "Data/Secrets",
          cta: "Get the full analysis - Click here",
          prompt: "Create an authority-building email with a specific number (makes it credible). Reveal one surprising insight from analyzing many exams. Tease additional insights. Position yourself as someone who has unique knowledge. Make readers curious about what else you know. CTA: book a call for personalized insights."
        },
        {
          week: "Week 4",
          subject: "Quick question: What's your biggest AP CS fear?",
          hook: "Engagement/Personal",
          cta: "Hit reply and tell me - I read every response",
          prompt: "Write a short, personal email asking a direct question. Make it feel like you genuinely want to know and help. Mention that you'll respond personally to every reply. Build connection and start conversations. Keep it brief and authentic. CTA: simply reply with their fear or concern."
        }
      ]
    },
    {
      month: "February",
      theme: "Reality Check & Mid-Prep Motivation",
      emails: [
        {
          week: "Week 1",
          subject: "90 days left. Here's your move-by-move playbook.",
          hook: "Urgency/Strategy",
          cta: "Let's build your 90-day sprint plan - Book now",
          prompt: "Create urgency with the 90-day countdown. Break it into manageable chunks (30/30/30 or by theme). Make it feel like a game plan, not overwhelming. Include the 'if you start today' angle. Position your program as the playbook they need. CTA: book a call to customize their sprint."
        },
        {
          week: "Week 2",
          subject: "The 'Valentine's Day Massacre' of AP CS misconceptions 💔",
          hook: "Seasonal/Education",
          cta: "Don't fall for these myths - Reply MYTHS",
          prompt: "Write a fun, seasonal email debunking common AP CS myths. Use the Valentine's theme creatively (breaking up with bad beliefs, etc). Make it entertaining but educational. List 3-5 myths and truths. Build credibility while engaging. CTA: reply to get personalized myth-busting."
        },
        {
          week: "Week 2",
          subject: "Why 'studying harder' won't get you a 5",
          hook: "Counterintuitive",
          cta: "Here's what actually works - Book call",
          prompt: "Create a paradigm-shifting email. Explain that AP success requires strategy, not just effort. Use the 'work smarter' angle. Include examples of students who studied less but scored higher (because of better strategy). Position your coaching as the strategic advantage. CTA: book a strategy call."
        },
        {
          week: "Week 3",
          subject: "I'm doubling my time with students who...",
          hook: "Exclusivity/Criteria",
          cta: "See if you qualify - Book assessment call",
          prompt: "Write an email that creates exclusivity without being elitist. Mention you're investing more time in students who are serious/committed. List qualities you're looking for (coachable, action-taker, goal-oriented). Make readers want to prove they qualify. CTA: book an assessment call."
        },
        {
          week: "Week 4",
          subject: "The 'Mid-Prep Slump' (and how to crush it)",
          hook: "Problem/Solution",
          cta: "Stay motivated all the way to May - Reply MOMENTUM",
          prompt: "Address the common mid-preparation motivation dip. Validate the struggle, then provide solutions. Include psychological tactics for staying motivated. Position your coaching as the accountability and motivation system. Make it empathetic and actionable. CTA: engage by replying."
        }
      ]
    },
    {
      month: "March",
      theme: "Crunch Time & Confidence Building",
      emails: [
        {
          week: "Week 1",
          subject: "60 days out: From panic to prepared",
          hook: "Urgency/Transformation",
          cta: "Let's turn panic into power - Book here",
          prompt: "Create an email for the 60-day mark. Acknowledge the anxiety students/parents feel. Quickly pivot to the transformation available in 60 days. Include a success story of a late-starter. Make it feel possible, not overwhelming. CTA: book a call for their 60-day plan."
        },
        {
          week: "Week 2",
          subject: "March Madness? More like March MASTERY",
          hook: "Seasonal/Wordplay",
          cta: "Join the mastery movement - 5 spots open",
          prompt: "Use March Madness sports metaphor. Compare tournament brackets to exam prep strategy. Make it fun and energizing. Include the 'winning formula' for AP CS. Create FOMO with limited spots. Keep the energy high and exciting. CTA: book one of the limited spots."
        },
        {
          week: "Week 2",
          subject: "Your practice exam scores are lying to you",
          hook: "Controversial/Revelation",
          cta: "Find out your REAL score potential - Reply REAL",
          prompt: "Write about the gap between practice scores and actual potential. Explain how confidence and exam-day strategy can change everything. Share a story of someone who scored lower in practice but aced the real exam. Build hope without false promises. CTA: engage via reply."
        },
        {
          week: "Week 3",
          subject: "The 'Spring Break Sprint' that changed everything",
          hook: "Timing/Opportunity",
          cta: "Book your breakthrough week - Click here",
          prompt: "Position Spring Break as a strategic opportunity. Create a special intensive or accelerated option. Make it sound like a game-changer without being overwhelming. Include results from past Spring Break students. Create urgency around this specific window. CTA: book immediately."
        },
        {
          week: "Week 4",
          subject: "45 days: Your final confidence-building checklist",
          hook: "Tactical/Countdown",
          cta: "Get your personalized checklist - Book call",
          prompt: "Provide value with a checklist format. Focus on confidence-building activities, not just content review. Make it actionable and specific. Position your coaching as helping them check every box. Create momentum toward the finish line. CTA: book a call for a personalized version."
        }
      ]
    },
    {
      month: "April",
      theme: "Final Push & Exam Readiness",
      emails: [
        {
          week: "Week 1",
          subject: "30 days: This is where 5's are made (or lost)",
          hook: "Urgency/Critical Moment",
          cta: "Make these 30 days count - Book now",
          prompt: "Create high-urgency email for the 30-day mark. Explain that the final month is where differentiation happens. Include the critical activities for the last 30 days. Make it feel important but achievable. Position your coaching as the difference-maker. CTA: book immediately."
        },
        {
          week: "Week 2",
          subject: "The 'Exam Day Simulator' that eliminates test anxiety",
          hook: "Solution/Innovation",
          cta: "Experience the simulator - Limited sessions available",
          prompt: "Introduce a specific offering or approach (real or metaphorical) that helps with test anxiety. Describe the experience and benefits. Include testimonial about reduced anxiety. Make it sound valuable and unique. Create scarcity. CTA: book a session."
        },
        {
          week: "Week 2",
          subject: "What every 5-scorer does the week before (that 3-scorers don't)",
          hook: "Insider Knowledge",
          cta: "Get the full pre-exam protocol - Reply PROTOCOL",
          prompt: "Reveal specific behaviors or strategies of top performers. Create contrast between successful and unsuccessful students. Make readers want to adopt the winning behaviors. Build anticipation for more insights. Position yourself as the guide. CTA: engage by replying."
        },
        {
          week: "Week 3",
          subject: "🚨 Final boarding call for May exam preparation",
          hook: "Last Chance/Urgency",
          cta: "This is it - Book your final prep session",
          prompt: "Create maximum urgency as the last possible enrollment moment. Make it clear this is the final opportunity. Include what's possible even with limited time. No scare tactics, but real urgency. Make the CTA feel like now-or-never. CTA: book immediately."
        },
        {
          week: "Week 4",
          subject: "Your 72-hour pre-exam game plan (save this)",
          hook: "Tactical Value",
          cta: "Want the full game plan? Book here",
          prompt: "Provide high-value tactical advice for the final days before exam. Make it so useful they want to save it. Include both practical and psychological tips. Tease that there's a personalized version available. Build goodwill right before exam. CTA: book for personalized version."
        }
      ]
    },
    {
      month: "May",
      theme: "Exam Week Support & Early Results",
      emails: [
        {
          week: "Week 1",
          subject: "Tonight: The confidence ritual that changes everything",
          hook: "Pre-Exam Support",
          cta: "Need last-minute support? Reply CONFIDENCE",
          prompt: "Write a supportive email for the night before the exam. Provide a calming ritual or routine. Build confidence without adding pressure. Make it feel like you're in their corner. Keep it brief and encouraging. CTA: offer to provide personal encouragement via reply."
        },
        {
          week: "Week 1",
          subject: "You've got this. Here's why I'm certain.",
          hook: "Encouragement/Belief",
          cta: "Reply after your exam - I want to hear how it went",
          prompt: "Write a pure encouragement email. List specific reasons why they're prepared. Build confidence through evidence and belief. Make it personal and warm. No sales, just support. Create connection for post-exam engagement. CTA: simply reply afterward."
        },
        {
          week: "Week 2",
          subject: "How did it go? (And what's next)",
          hook: "Post-Exam Check-in",
          cta: "Share your experience - Reply to this email",
          prompt: "Follow up after exam day. Ask how it went. Validate whatever they experienced. Transition to what's next (future CS courses, results wait, etc). Keep conversation going. Build relationship beyond the immediate prep. CTA: engage in conversation by replying."
        },
        {
          week: "Week 3",
          subject: "While you wait for scores: The smart student's next move",
          hook: "Forward-Looking",
          cta: "Plan your CS journey - Book planning call",
          prompt: "Help them productively use the waiting period. Suggest next steps (summer coding projects, CS courses, college prep). Position long-term relationship. Introduce other offerings if applicable. Keep them engaged with your brand. CTA: book a planning session."
        }
      ]
    },
    {
      month: "June-July",
      theme: "Results, Celebration & Next Steps",
      emails: [
        {
          week: "June Week 1",
          subject: "The waiting game: What your score actually means",
          hook: "Education/Preparation",
          cta: "Questions about your score? Let's talk - Book here",
          prompt: "Educate about score release and interpretation. Manage expectations. Explain what different scores mean for college credit. Position yourself as the guide through results. Prepare them to respond productively to any score. CTA: book a results debrief call."
        },
        {
          week: "June Week 2",
          subject: "Scores are in. Now what?",
          hook: "Results-Focused",
          cta: "Got your score? Let's celebrate or strategize - Reply with your score",
          prompt: "React to score release. Celebrate successes and address disappointments. Offer next steps for both scenarios (5-scorers: advanced opportunities; lower scores: retake strategy, other CS paths). Be supportive regardless of outcome. CTA: engage by sharing results."
        },
        {
          week: "June Week 3",
          subject: "We did it! 🎉 (And here's what we're doing next)",
          hook: "Celebration/Forward",
          cta: "Continue your CS journey - Book consultation",
          prompt: "Celebrate collective success (share aggregated results if available). Transition to future opportunities. Introduce programs for summer/next year. Thank them for being part of your community. Keep momentum going. CTA: book for next-level offerings."
        },
        {
          week: "July Week 1",
          subject: "The '5-Scorer Summer': Turn your success into opportunity",
          hook: "Advancement",
          cta: "Explore advanced opportunities - Click here",
          prompt: "Target successful students. Suggest ways to leverage their AP CS success (internships, projects, advanced courses). Position yourself as ongoing mentor. Introduce relevant programs or resources. Keep them engaged with your brand. CTA: book an advancement planning session."
        },
        {
          week: "July Week 2",
          subject: "Next year's students are already asking about you...",
          hook: "Social Proof/Referral",
          cta: "Know someone who needs this? Forward this email",
          prompt: "Create a referral-focused email. Share success stories from this cohort. Make current students feel proud. Ask for referrals naturally. Offer incentive if appropriate. Plant seeds for next year's enrollment. CTA: refer friends or family."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">AP CS Exam Email Marketing Calendar</h1>
          </div>
          <p className="text-gray-600 mb-2">November 2024 - July 2025 | 3 Emails per Week</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <span>Total: 96+ high-converting emails with CustomGPT prompts</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-4">
          {calendar.map((month, monthIndex) => (
            <div key={monthIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Month Header */}
              <button
                onClick={() => setExpandedMonth(expandedMonth === month.month ? null : month.month)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-indigo-600">{month.month}</h2>
                  <p className="text-gray-600 mt-1">Theme: {month.theme}</p>
                  <p className="text-sm text-gray-500 mt-1">{month.emails.length} emails this month</p>
                </div>
                {expandedMonth === month.month ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {/* Month Content */}
              {expandedMonth === month.month && (
                <div className="border-t border-gray-200">
                  {month.emails.map((email, emailIndex) => (
                    <div key={emailIndex} className="p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                      {/* Email Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                              {email.week}
                            </span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                              {email.hook}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            📧 Subject: {email.subject}
                          </h3>
                          <p className="text-sm text-green-600 font-medium mb-1">
                            ✅ CTA: {email.cta}
                          </p>
                        </div>
                      </div>

                      {/* CustomGPT Prompt */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border-l-4 border-indigo-500">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                            <span className="text-indigo-600">🤖</span>
                            CustomGPT Prompt:
                          </h4>
                          <button
                            onClick={() => copyToClipboard(email.prompt, `${monthIndex}-${emailIndex}`)}
                            className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                          >
                            {copiedIndex === `${monthIndex}-${emailIndex}` ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{email.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="font-bold text-lg text-gray-800 mb-3">📝 Usage Instructions for VA:</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span>Click "Copy" button to copy the CustomGPT prompt for each email</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span>Paste the prompt into your CustomGPT tool exactly as written</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span>Use the subject line generated, or keep the one provided (both are optimized for open rates)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">4.</span>
              <span>Ensure the CTA is prominent in the final email (button or bolded text)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">5.</span>
              <span>Send emails on Monday, Wednesday, Friday for consistent engagement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">6.</span>
              <span>Track open rates and replies - adjust timing/sending if needed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailCalendar;