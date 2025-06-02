import React, {JSX} from 'react';
import { Helmet } from 'react-helmet';

const TrackYourProgress = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Track Your Progress | ProteinShaikh</title>
      </Helmet>
      <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">📈 Track Your Progress</h1>
        <p>Want to crush your fitness goals? Track your workouts! Logging lifts, reps, and more turns guesswork into gains. I went from a 135-pound squat to 235 pounds in a year by tracking every session. Here’s why it’s a game-changer, how to do it, and what I learned to keep it fun and effective.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🏁 Why Track? The Big Picture</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Clarity</strong>: Know exactly what’s working (or not).</li>
          <li><strong>Motivation</strong>: Celebrate hitting new PRs!</li>
          <li><strong>Progress</strong>: Build strength with data-driven tweaks.</li>
        </ul>
        <p>Tracking isn’t just numbers—it’s your roadmap to a stronger you. My squat soared because I logged every rep, spotting when to push or rest.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🔑 Key Principles to Nail Tracking</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Progressive Overload</strong>: Add weight or reps over time to grow stronger.</li>
          <li><strong>Accountability</strong>: Logs keep you honest—no skipping workouts!</li>
          <li><strong>Data Insights</strong>: Spot patterns to fix plateaus fast.</li>
          <li><strong>Milestone Hype</strong>: Small wins (like adding 5 pounds) fuel motivation.</li>
          <li><strong>Tailored Plans</strong>: Adjust based on your body’s feedback.</li>
        </ul>
        <p>These rules turned my chaotic workouts into a system. Logging my bench press showed me when to up the weight, doubling my strength in months.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🚀 How to Track Like a Pro</h2>
        <p>Ready to start? Here’s your action plan:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Pick a Tool</strong>: Use apps (Strong, FitNotes), a notebook, or Google Sheets. I love Strong for quick logging.</li>
          <li><strong>Log Essentials</strong>: Note weights, sets, reps, rest time. Example: “Squat: 4x8 @ 185 lbs, 90s rest.”</li>
          <li><strong>Add Vibes</strong>: Jot down energy or mood (e.g., “felt awesome”). It helped me link diet to performance.</li>
          <li><strong>Set Goals</strong>: Aim for a 10-pound deadlift increase in 8 weeks. I targeted a 315-pound deadlift in 6 months.</li>
          <li><strong>Check Weekly</strong>: Review logs every Sunday to tweak weights or reps.</li>
          <li><strong>Track Extras</strong>: Log sleep or protein intake. My 150g daily protein boosted gains.</li>
        </ul>
        <p>These steps took my squat from 135 to 235 pounds in a year. Start simple, and you’ll see results fast.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">⚠️ Challenges (and Fixes)</h2>
        <p>Tracking isn’t always smooth. Here’s what I hit and how I dealt:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Takes Time</strong>: Logging felt like a chore. <em>Fix</em>: Spend 3 minutes post-workout; it’s a habit now.</li>
          <li><strong>Too Much Data</strong>: I tracked everything and got lost. <em>Fix</em>: Stick to weights, reps, and energy.</li>
          <li><strong>Slow Gains</strong>: Plateaus demotivated me. <em>Fix</em>: Celebrate tiny wins, like one extra rep.</li>
          <li><strong>Forgetting Logs</strong>: Missed entries messed me up. <em>Fix</em>: Set phone alarms to log right after.</li>
          <li><strong>Number Obsession</strong>: I stressed over stats. <em>Fix</em>: Mix in fun, untracked workouts weekly.</li>
        </ul>
        <p>These hurdles taught me to keep tracking lean and enjoyable, making it a sustainable part of my routine.</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🧠 What I Learned</h2>
        <p>Tracking changed my fitness game. Key takeaways:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Data = Power</strong>: Logs showed rest days boosted my deadlift.</li>
          <li><strong>Small Steps Win</strong>: Adding 2.5 pounds kept me pumped during stalls.</li>
          <li><strong>Habit Sticks</strong>: Daily logging became as routine as brushing my teeth.</li>
          <li><strong>Tweak Smart</strong>: Cutting squat sessions from 3 to 2 weekly fixed fatigue.</li>
          <li><strong>Celebrate Big</strong>: Hitting a 100-pound squat jump felt epic, thanks to my logs.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🎯 Wrap-Up</h2>
        <p>Tracking your progress is your secret weapon for fitness success. My 100-pound squat leap proves it—logging reps and weights made it happen. Pick an app, log the basics, and review weekly to crush your goals. It’s not just data; it’s your ticket to a stronger, fitter you. Start today, and let every workout count!</p>
        <p>I’m still tracking, chasing new PRs, and loving the clarity it brings. Grab a notebook or app, and join me—your next milestone is closer than you think! 💪</p>
      </section>
    </>
  );
};

export default TrackYourProgress;
