import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

export default function AboutPage(): JSX.Element {
    return (
        <>
            <Helmet><title>About · Zeeshan Shaikh</title></Helmet>

            {/* Hero */}
            <div className="w-full t-hero-grad border-b t-border-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
                        <img
                            src={`${process.env.PUBLIC_URL}/fit.jpeg`}
                            alt="Zeeshan Shaikh"
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-lg shrink-0"
                        />
                        <div>
                            <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-1">About me</p>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Zeeshan Shaikh</h1>
                            <p className="text-gray-500 mt-1.5 text-sm">Software Engineer · Powerlifter · Investor · Dubai, UAE 🇦🇪</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 space-y-12">

                {/* The human */}
                <FadeUp>
                    <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">Who I am</p>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                        <p>
                            I'm a software engineer who has spent 10+ years building backend systems — mostly in Java and Spring Boot,
                            mostly in banking and fintech, currently at <span className="text-gray-900 font-medium">Mashreq Bank in Dubai</span>.
                            I care about systems that are reliable, readable and built to last.
                        </p>
                        <p>
                            But I'm not just a developer. I'm someone who got obsessed with understanding how things actually work —
                            whether that's how a distributed system handles failure, how the human body responds to a calorie deficit,
                            or how a business compounds value over decades.
                        </p>
                        <p>
                            I moved to Dubai from Mumbai and it changed how I see the world. Different cultures, different ambitions,
                            different pace. I like it here.
                        </p>
                    </div>
                </FadeUp>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* The engineer */}
                <FadeUp delay={0.05}>
                    <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">The engineer</p>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                        <p>
                            I started writing Java in 2016 at LTIMindtree and haven't stopped. Over the years I've worked at
                            IBM, Deloitte, Innovations Group and now Mashreq Bank — each place teaching me something different
                            about how software behaves under real pressure.
                        </p>
                        <p>
                            My focus is backend architecture — microservices, event-driven systems with Kafka, REST APIs,
                            cloud deployments on Azure. I've built payment systems, money-transfer flows, card management platforms
                            and the kind of infrastructure that has to work at 3am when nobody is watching.
                        </p>
                        <p>
                            I'm also learning React and TypeScript — this site is part of that journey. I believe engineers
                            should understand the full stack even if they specialise in one layer.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="mt-6 space-y-4">
                        {[
                            { period: '2023 – Present', role: 'Senior Software Developer', place: 'Mashreq Bank, Dubai' },
                            { period: '2023',           role: 'Software Developer',        place: 'Innovations Group, UAE' },
                            { period: '2020 – 2023',    role: 'Software Developer',        place: 'Deloitte' },
                            { period: '2020',           role: 'Senior System Engineer',    place: 'IBM' },
                            { period: '2016 – 2020',    role: 'Software Developer',        place: 'LTIMindtree' },
                        ].map(({ period, role, place }, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.35 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="shrink-0 w-24 text-xs text-gray-400 pt-0.5">{period}</div>
                                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                                    <p className="text-sm font-semibold text-gray-900">{role}</p>
                                    <p className="text-xs t-text-500 mt-0.5">{place}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </FadeUp>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* The lifter */}
                <FadeUp delay={0.05}>
                    <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">The lifter</p>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                        <p>
                            A few years ago I was overweight and didn't really understand why. I started reading about nutrition —
                            not diet blogs, actual science — and realised it came down to one thing: energy balance.
                        </p>
                        <p>
                            I lost <span className="text-gray-900 font-medium">20 kg</span> through a calorie deficit and
                            started powerlifting. Squat, bench, deadlift — four times a week. I'm not training to look good
                            (though that's a side effect). I train because it's the one hour of the day where the only variable
                            is how hard I'm willing to work.
                        </p>
                        <p>
                            The discipline from the gym carries into everything else. Consistency over intensity. Show up even
                            when you don't feel like it. Trust the process.
                        </p>
                    </div>
                </FadeUp>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* The investor */}
                <FadeUp delay={0.05}>
                    <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">The investor</p>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                        <p>
                            I invest the way I lift — slowly, deliberately, without chasing quick results. I'm a Boglehead at heart:
                            low-cost index funds, long time horizons, no market timing.
                        </p>
                        <p>
                            I've read Buffett's letters, Bogle's books, and enough annual reports to know that most of the noise
                            in financial media is just noise. The edge isn't information — it's patience.
                        </p>
                        <p>
                            Living in Dubai as an expat means thinking carefully about domicile, withholding tax and which ETFs
                            actually make sense for someone outside the US. I wrote about it — you can read it in Learnings.
                        </p>
                    </div>
                </FadeUp>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* The reader */}
                <FadeUp delay={0.05}>
                    <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">What I'm into</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { label: 'Reading', value: 'Currently: The Origin of Species by Darwin. I read across science, history, investing and biography.' },
                            { label: 'Writing', value: 'I write on Medium about tech, fitness and money. No fluff — only when I have something real to say.' },
                            { label: 'Building', value: 'This site. Side projects in Java and React. Learning TypeScript properly. Always something on the workbench.' },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
                                <p className="text-xs font-semibold t-text-500 uppercase tracking-widest mb-2">{label}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{value}</p>
                            </div>
                        ))}
                    </div>
                </FadeUp>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* CTA */}
                <FadeUp delay={0.05}>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/contact">
                            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 t-btn rounded-xl text-sm font-semibold cursor-pointer">
                                Say hello
                            </motion.span>
                        </Link>
                        <Link to="/learnings">
                            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border t-border-200 t-text-600 hover:t-bg-50 transition cursor-pointer">
                                Read my articles
                            </motion.span>
                        </Link>
                    </div>
                </FadeUp>

            </div>
        </>
    );
}
