import React, { useState, useEffect, useRef, JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactPage';

/* ── Typewriter ─────────────────────────────────────────── */
const ROLES = ['Software Engineer', 'Powerlifter', 'Boglehead Investor', 'Problem Solver'];

function Typewriter(): JSX.Element {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = ROLES[index];
        let t: ReturnType<typeof setTimeout>;
        if (!deleting && displayed.length < word.length)
            t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
        else if (!deleting && displayed.length === word.length)
            t = setTimeout(() => setDeleting(true), 1800);
        else if (deleting && displayed.length > 0)
            t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        else { setDeleting(false); setIndex(i => (i + 1) % ROLES.length); }
        return () => clearTimeout(t);
    }, [displayed, deleting, index]);

    return (
        <span className="t-text-500 font-semibold">
            {displayed}<span className="animate-pulse">|</span>
        </span>
    );
}

/* ── Animated counter ───────────────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }): JSX.Element {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const mv = useMotionValue(0);
    const spring = useSpring(mv, { stiffness: 60, damping: 20 });
    const [val, setVal] = useState(0);
    useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
    useEffect(() => spring.on('change', v => setVal(Math.round(v))), [spring]);
    return <span ref={ref}>{val}{suffix}</span>;
}

/* ── FadeIn ─────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }): JSX.Element {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
}

/* ── SVG icons ──────────────────────────────────────────── */
const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);
const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);
const MediumIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
);
const InstaIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);
const BlogIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.18 15.64a2.18 2.18 0 012.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 012.18-2.18M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44m0 5.66a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z"/>
    </svg>
);

const SOCIALS = [
    { href: 'https://github.com/proteinshaikh',      label: 'GitHub',    icon: <GithubIcon />,   color: 'hover:text-gray-900' },
    { href: 'https://linkedin.com/in/proteinshaikh', label: 'LinkedIn',  icon: <LinkedinIcon />, color: 'hover:text-[#0A66C2]' },
    { href: 'https://medium.com/@proteinshaikh',     label: 'Medium',    icon: <MediumIcon />,   color: 'hover:text-gray-900' },
    { href: 'https://proteinshaikh.blogspot.com/',   label: 'Blog',      icon: <BlogIcon />,     color: 'hover:text-[#FF5722]' },
    { href: 'https://www.instagram.com/gkfornerds', label: 'Instagram', icon: <InstaIcon />,    color: 'hover:text-[#C13584]' },
];

const SKILLS = [
    { label: 'Java',          color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { label: 'Spring Boot',   color: 'bg-green-100 text-green-700 border-green-200' },
    { label: 'React',         color: 'bg-sky-100 text-sky-700 border-sky-200' },
    { label: 'TypeScript',    color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { label: 'AWS',           color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { label: 'Docker',        color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { label: 'Kafka',         color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { label: 'Microservices', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { label: 'Investing',     color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { label: 'Powerlifting',  color: 'bg-rose-100 text-rose-700 border-rose-200' },
];

/* ── Main ───────────────────────────────────────────────── */
export default function Home(): JSX.Element {
    return (
        <>
            <Helmet><title>Zeeshan Shaikh — Developer · Lifter · Investor</title></Helmet>

            {/* ── HERO ── */}
            <section className="w-full t-hero-grad">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-16 pb-12">

                    {/* Top row: text left, sketch right */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-14">

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <p className="t-text-500 text-xs font-semibold tracking-widest uppercase mb-3">Based in Dubai, UAE</p>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Zeeshan<br />Shaikh
                            </h1>
                            <p className="text-lg text-gray-400 mt-3 min-h-[1.75rem]"><Typewriter /></p>

                            <p className="mt-4 text-gray-500 text-[15px] leading-relaxed max-w-lg lg:mx-0 mx-auto">
                                I recognize patterns and connect the dots.
                            </p>

                            {/* Social icons row — icon only, clean */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 flex items-center gap-1 justify-center lg:justify-start"
                            >
                                {SOCIALS.map(({ href, label, icon, color }) => (
                                    <motion.a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        whileHover={{ y: -3, scale: 1.15 }}
                                        whileTap={{ scale: 0.92 }}
                                        className={`p-2.5 rounded-xl text-gray-400 transition-colors ${color}`}
                                    >
                                        {icon}
                                    </motion.a>
                                ))}

                                <div className="w-px h-5 bg-gray-200 mx-2" />

                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 t-btn rounded-xl text-sm font-semibold cursor-pointer"
                                >
                                    ✉️ Say hello
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Sketch — circular, right side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="shrink-0 pointer-events-none select-none"
                        >
                            <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img
                                    src={`${process.env.PUBLIC_URL}/fit.jpeg`}
                                    alt="Zeeshan Shaikh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                    </div>

                    {/* ── Stats strip ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                        className="mt-10 grid grid-cols-3 gap-3"
                    >
                        {[
                            { value: 10,  suffix: '+',  label: 'Years coding',       sub: 'Java · Spring · Cloud' },
                            { value: 20,  suffix: 'kg', label: 'Weight lost',        sub: 'Deficit + lifting' },
                            { value: 100, suffix: '%',  label: 'Buy & hold',         sub: 'Buffett-style' },
                        ].map(({ value, suffix, label, sub }) => (
                            <div key={label} className="rounded-2xl bg-white/70 backdrop-blur-sm border t-border-100 px-4 py-4 text-center shadow-sm">
                                <p className="text-2xl lg:text-3xl font-bold t-text-600">
                                    <Counter to={value} suffix={suffix} />
                                </p>
                                <p className="text-xs font-semibold text-gray-700 mt-0.5">{label}</p>
                                <p className="text-[10px] text-gray-400 hidden sm:block">{sub}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── BENTO GRID ── */}
            <section className="w-full bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

                    {/* Featured article */}
                    <FadeIn className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl border border-blue-100 p-6 shadow-sm">
                        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3">Featured Article</p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                                    ETF Investing: A Beginner's Guide to Building Wealth
                                </h3>
                                <p className="text-sm text-gray-500 max-w-xl">
                                    Index funds, S&amp;P 500, VWRA vs CSPX, Ireland-domiciled ETFs and the power of compounding — everything I've learned about passive investing.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">Investing</span>
                                    <span className="text-xs text-gray-400">15 min read</span>
                                </div>
                            </div>
                            <Link to="/articles/etf-investing" className="shrink-0">
                                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold cursor-pointer transition-colors">
                                    Read article →
                                </motion.span>
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.04} className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 rounded-3xl border border-slate-800 p-6 shadow-sm text-white">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                            <div>
                                <p className="text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">AI learning map · 9 months</p>
                                <h3 className="text-xl font-bold leading-snug mb-2">
                                    From senior backend developer to Applied AI Engineer
                                </h3>
                                <p className="text-sm text-slate-300 max-w-2xl">
                                    A practical, 5-hours-a-week roadmap through LLM engineering, RAG, agents and production AI—with projects built for an enterprise engineering background.
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mt-4">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-200 border border-white/10">195 focused hours</span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10">6 hands-on phases</span>
                                </div>
                            </div>
                            <Link to="/ai-roadmap" className="shrink-0">
                                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl text-sm font-bold cursor-pointer transition-colors">
                                    Explore roadmap →
                                </motion.span>
                            </Link>
                        </div>
                    </FadeIn>

                    {/* Skills — spans 2 cols */}
                    <FadeIn className="md:col-span-2 bg-white rounded-3xl border t-border-100 p-6 shadow-sm">
                        <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.map(({ label, color }) => (
                                <motion.span key={label}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default select-none ${color}`}
                                >
                                    {label}
                                </motion.span>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Currently reading */}
                    <FadeIn delay={0.05} className="bg-white rounded-3xl border t-border-100 p-6 shadow-sm">
                        <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">Reading now</p>
                        <div className="flex gap-3 items-start">
                            <span className="text-3xl">📖</span>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 leading-snug">The Origin of Species</p>
                                <p className="text-xs text-gray-400 mt-0.5">Charles Darwin</p>
                                <Link to="/books">
                                    <span className="text-xs t-text-500 mt-2 inline-block hover:underline cursor-pointer">See full shelf →</span>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Now */}
                    <FadeIn delay={0.08} className="bg-white rounded-3xl border t-border-100 p-6 shadow-sm">
                        <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-4">Now</p>
                        <ul className="space-y-2.5">
                            {[
                                { e: '💻', t: 'Backend dev at Mashreq Bank' },
                                { e: '🏋️', t: 'Squat · Bench · Deadlift, 4×/week' },
                                { e: '📈', t: 'Long-term concentrated portfolio' },
                                { e: '✍️', t: 'Writing on Medium' },
                            ].map(({ e, t }, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                                    <span className="text-base shrink-0">{e}</span>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Hire / Teach CTA */}
                    <FadeIn delay={0.1} className="bg-white rounded-3xl border t-border-100 p-6 shadow-sm flex flex-col justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-2">Work with me</p>
                            <p className="text-sm text-gray-500 leading-relaxed">Open to backend consulting, freelance projects, and teaching Java / Spring Boot.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <motion.button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                className="w-full text-center py-2.5 t-btn rounded-xl text-sm font-semibold cursor-pointer">
                                💼 Hire me
                            </motion.button>
                            <motion.button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold border t-border-200 t-text-600 hover:t-bg-50 transition cursor-pointer">
                                📚 Learn from me
                            </motion.button>
                        </div>
                    </FadeIn>

                    {/* About blurb */}
                    <FadeIn delay={0.12} className="md:col-span-2 lg:col-span-1 bg-white rounded-3xl border t-border-100 p-6 shadow-sm">
                        <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-3">A bit more</p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            I lost 20 kg not through a diet plan but through curiosity — understanding how the body actually works.
                            Same energy goes into investing: slow, intentional, no noise.
                            I'm drawn to patterns everywhere — this site is a small window into all of it.
                        </p>
                        <Link to="/resume">
                            <span className="text-xs t-text-500 mt-3 inline-block hover:underline cursor-pointer">View full resume →</span>
                        </Link>
                    </FadeIn>

                </div>
            </section>
            {/* ── CONTACT ── */}
            <section className="w-full border-t t-border-100 bg-white" id="contact">
                <div className="max-w-2xl mx-auto px-6 lg:px-12 py-16">
                    <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-2">Get in touch</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Say hello 👋</h2>
                    <p className="text-sm text-gray-400 mb-8">
                        No login needed. Just pick a topic and send — I read every message.
                    </p>
                    <ContactForm compact />
                </div>
            </section>
        </>
    );
}
