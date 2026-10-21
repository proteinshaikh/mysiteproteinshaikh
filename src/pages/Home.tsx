import React, { useState, useEffect, useRef, JSX, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

/* ── Typewriter ─────────────────────────────────────────── */
const ROLES = ['Software Developer', 'Powerlifter', 'Long-term Investor', 'Problem Solver'];

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
        <span className="text-indigo-500 font-semibold">
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

/* ── FadeIn wrapper ─────────────────────────────────────── */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }): JSX.Element {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
}

/* ── Skills ─────────────────────────────────────────────── */
const SKILLS = [
    { label: 'Java',          color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { label: 'Spring Boot',   color: 'bg-green-100 text-green-700 border-green-200' },
    { label: 'React',         color: 'bg-sky-100 text-sky-700 border-sky-200' },
    { label: 'TypeScript',    color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { label: 'AWS',           color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { label: 'Docker',        color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { label: 'PostgreSQL',    color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { label: 'Microservices', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { label: 'Investing',     color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { label: 'Powerlifting',  color: 'bg-rose-100 text-rose-700 border-rose-200' },
];

/* ── Social button with hover tooltip ───────────────────── */
function SocialButton({ href, label, icon, color }: {
    href: string; label: string; icon: React.ReactNode; color: string;
}): JSX.Element {
    const [copied, setCopied] = useState(false);
    const copy = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        });
    }, [href]);

    return (
        <div className="relative group">
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white border border-indigo-100 shadow-md hover:shadow-indigo-200 hover:border-indigo-300 transition-all ${color}`}
            >
                {icon}
                <span className="text-sm font-semibold">{label}</span>
            </motion.a>
            {/* Tooltip */}
            <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
                            opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl flex flex-col items-center gap-1 min-w-[140px]">
                    <span className="font-semibold tracking-wide">{label}</span>
                    <span className="text-gray-300 text-[10px] truncate max-w-[160px]">{href}</span>
                    <button
                        onMouseDown={(e) => { e.stopPropagation(); }}
                        onClick={(e) => { (e as unknown as React.MouseEvent).preventDefault(); copy(e as unknown as React.MouseEvent); }}
                        className="pointer-events-auto mt-0.5 bg-indigo-500 hover:bg-indigo-400 text-white text-[10px] px-2 py-0.5 rounded-md transition-colors"
                    >
                        {copied ? '✓ Copied!' : 'Copy link'}
                    </button>
                </div>
                <div className="w-2 h-2 bg-gray-900 rotate-45 mx-auto -mt-1" />
            </div>
        </div>
    );
}

/* ── SVG icons ──────────────────────────────────────────── */
const GithubIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);
const LinkedinIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);
const MediumIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
);
const BlogIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        <path d="M6.5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
    </svg>
);
const InstaIcon = ({ className = 'w-5 h-5' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);

/* ── Main ───────────────────────────────────────────────── */
export default function Home(): JSX.Element {
    return (
        <>
            <Helmet><title>Zeeshan Shaikh - Developer · Lifter · Investor</title></Helmet>

            {/* Hero */}
            <section className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
                {/* Sketch - free-floating in background, right side */}
                <div className="absolute right-0 top-0 h-full w-[45%] hidden lg:block pointer-events-none select-none">
                    <img
                        src={`${process.env.PUBLIC_URL}/fit.jpeg`}
                        alt=""
                        aria-hidden="true"
                        className="absolute bottom-0 right-0 w-full object-contain object-bottom"
                        style={{ opacity: 0.92, mixBlendMode: 'multiply', maxHeight: '95%' }}
                    />
                </div>
                <div className="max-w-6xl mx-auto px-6 lg:px-16 py-14 lg:py-24 flex flex-col lg:flex-row items-end gap-10 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
                        className="flex-1 relative z-10"
                    >
                        <p className="text-indigo-500 text-sm font-semibold tracking-widest uppercase mb-2">Hey there 👋</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">I'm Zeeshan Shaikh</h1>
                        <p className="text-lg text-gray-500 mt-2 min-h-[1.75rem]"><Typewriter /></p>

                        <div className="mt-5 space-y-3 text-gray-600 leading-relaxed text-[15px] max-w-2xl">
                            <p>
                                I build things with{' '}
                                <span className="text-indigo-600 font-medium">Java & Spring Boot</span> by day,
                                lift heavy weights by evening, and read about the universe somewhere in between.
                                Based in <span className="text-indigo-600 font-medium">Dubai</span> - but my mind wanders everywhere.
                            </p>
                            <p>
                                I lost <span className="text-indigo-600 font-medium">20 kg</span> not through a diet plan
                                but through curiosity - understanding how the body actually works.
                                Same energy goes into{' '}
                                <span className="text-indigo-600 font-medium">investing</span>: slow, intentional, no noise.
                            </p>
                            <p>
                                I'm drawn to patterns - in code, in markets, in people, in art.
                                I write, I observe, I overthink playlists.
                                This site is just a small window into all of that.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.45 }}
                            className="mt-5 flex flex-wrap gap-4"
                        >
                            {[
                                { href: 'https://github.com/proteinshaikh',         label: 'GitHub',    icon: <GithubIcon className="w-6 h-6"/>,   color: 'text-gray-800' },
                                { href: 'https://linkedin.com/in/proteinshaikh',    label: 'LinkedIn',  icon: <LinkedinIcon className="w-6 h-6"/>,  color: 'text-[#0A66C2]' },
                                { href: 'https://medium.com/@proteinshaikh',        label: 'Medium',    icon: <MediumIcon className="w-6 h-6"/>,    color: 'text-gray-900' },
                                { href: 'https://proteinshaikh.blogspot.com/',      label: 'Blog',      icon: <BlogIcon className="w-6 h-6"/>,      color: 'text-[#FF5722]' },
                                { href: 'https://www.instagram.com/gkfornerds',    label: 'Instagram', icon: <InstaIcon className="w-6 h-6"/>,     color: 'text-[#C13584]' },
                            ].map(({ href, label, icon, color }) => (
                                <SocialButton key={href} href={href} label={label} icon={icon} color={color} />
                            ))}
                        </motion.div>
                    </motion.div>


                </div>
            </section>

            {/* Stats */}
            <section className="w-full bg-white border-y border-indigo-50">
                <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
                    <FadeIn>
                        <div className="grid grid-cols-3 gap-4 lg:gap-8">
                            {[
                                { value: 10,   suffix: '+',  label: 'Years coding',  sub: 'Java · Spring · Cloud' },
                                { value: 20,  suffix: 'kg', label: 'Weight lost',   sub: 'Calorie deficit + lifting' },
                                { value: 100, suffix: '%',  label: 'Buy & hold forever',    sub: 'Buffett-style investing' },
                            ].map(({ value, suffix, label, sub }) => (
                                <div key={label} className="text-center p-4 lg:p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                                    <p className="text-3xl lg:text-4xl font-bold text-indigo-600">
                                        <Counter to={value} suffix={suffix}/>
                                    </p>
                                    <p className="text-sm font-semibold text-gray-700 mt-1">{label}</p>
                                    <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">{sub}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Skills + Currently */}
            <section className="w-full">
                <div className="max-w-6xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <FadeIn>
                        <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-5">What I work with</h2>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.map(({ label, color }) => (
                                <motion.span key={label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium border cursor-default select-none ${color}`}
                                >
                                    {label}
                                </motion.span>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-5">Currently</h2>
                        <div className="space-y-2">
                            {[
                                { emoji: '💻', text: 'Building backend systems with Java & Spring Boot in Dubai' },
                                { emoji: '🏋️', text: 'Training 4× a week - squat, bench, deadlift' },
                                { emoji: '📈', text: 'Holding a concentrated stock portfolio, Buffett-style' },
                                { emoji: '✍️', text: 'Writing about tech, fitness & money on Medium' },
                                { emoji: '📚', text: 'Reading: The origin of species by Charles Darwin' },
                            ].map(({ emoji, text }, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, x: -14 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07, duration: 0.38 }}
                                    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
                                >
                                    <span className="text-base mt-0.5">{emoji}</span>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

        </>
    );
}
