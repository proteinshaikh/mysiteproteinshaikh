import React, {JSX} from 'react';
import {Helmet} from 'react-helmet';

function LessonsFromSteveJobs(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>12 Lessons from Steve Jobs by Guy Kawasaki | ProteinShaikh</title>
            </Helmet>
            <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    🚀 12 Lessons from Steve Jobs (via Guy Kawasaki)
                </h1>
                <p className="text-gray-600 mb-6">
                    Guy Kawasaki, an early Apple evangelist, shares what he learned from working closely with Steve
                    Jobs—the visionary who transformed technology, design, and marketing forever.
                </p>

                {[
                    {
                        title: '❌ Experts Are Useless',
                        points: [
                            "Don't depend on gurus or analysts.",
                            "Steve Jobs didn’t listen to experts—experts listened to him.",
                            "Entrepreneurs must think independently and figure things out themselves.",
                        ],
                    },
                    {
                        title: '🧠 Customers Don’t Know What They Want',
                        points: [
                            "“People don’t know what they want until you show it to them.” – Jobs",
                            "Innovation comes from solving problems people don’t even know they have yet.",
                        ],
                    },
                    {
                        title: '🧊 Challenges Bring Out the Best',
                        points: [
                            "Working with tough clients (or Jobs) forces you to level up.",
                            "Challenge yourself and your team—it leads to excellence.",
                            "Example: Refrigeration wasn’t invented by ice companies. Step back and innovate.",
                        ],
                    },
                    {
                        title: '🎨 Design Matters',
                        points: [
                            "Design is not just how something looks—it’s what the product is.",
                            "Apple = design. It’s what people remember first.",
                        ],
                    },
                    {
                        title: '🔠 Big Graphics. Big Font.',
                        points: [
                            "Keep presentations simple and visual.",
                            "Large fonts and big images force clarity and focus.",
                            "KISS: Keep It Short and Simple.",
                        ],
                    },
                    {
                        title: '🚀 Jump Curves, Don’t Improve Slightly',
                        points: [
                            "Don’t make things 10% better—make them 10x better.",
                            "iPod vs. Walkman, iPhone vs. Blackberry = curve jumps.",
                        ],
                    },
                    {
                        title: '🔁 Only “Works” or “Doesn’t Work” Matters',
                        points: [
                            "Apple initially banned third-party apps—then changed its mind.",
                            "Changing your mind is a sign of intelligence, not weakness.",
                        ],
                    },
                    {
                        title: '💎 Value > Price',
                        points: [
                            "High price is okay if the product delivers higher value.",
                            "Ease of use, productivity, and quality justify cost.",
                            "Apple, McKinsey, and Mercedes all reflect this philosophy.",
                        ],
                    },
                    {
                        title: '🧠 A Players Hire A Players',
                        points: [
                            "A players hire A players. B players hire C players. That’s how the “Bozo Explosion” starts.",
                            "Always hire people better than you.",
                        ],
                    },
                    {
                        title: '📱 Real CEOs Demo',
                        points: [
                            "Jobs personally led product demos—even when they weren’t perfect.",
                            "It shows ownership and belief in your product.",
                        ],
                    },
                    {
                        title: '📦 Real Entrepreneurs Ship',
                        points: [
                            "Don’t wait for perfection—just make sure your product jumps the curve.",
                            "“Shipping something great with a few flaws is better than shipping nothing.”",
                        ],
                    },
                    {
                        title: '🙏 Believe First, Then See',
                        points: [
                            "Entrepreneurs believe before results are visible.",
                            "“Some things need to be believed to be seen.” – Guy Kawasaki",
                            "Jobs and his team believed in the Macintosh—and made it real.",
                        ],
                    },
                ].map((lesson, idx) => (
                    <div key={idx}>
                        <h2 className="text-3xl font-semibold mt-8 mb-4">{`${idx + 1}. ${lesson.title}`}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {lesson.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h2 className="text-3xl font-semibold mt-8 mb-4">📘 Final Thought</h2>
                <p>
                    These lessons go beyond business—they’re about courage, belief, and pushing boundaries. As Jobs
                    showed,
                    it’s not just about making better products. It’s about making things people didn’t know they
                    needed—until they did.
                </p>
            </section>
        </>
    );
}

export default LessonsFromSteveJobs;
