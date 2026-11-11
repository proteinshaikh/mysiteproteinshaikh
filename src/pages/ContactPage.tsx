import React, { useState, JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useAuth } from '../auth/AuthContext';
import { useGoogleLogin } from '@react-oauth/google';

/* ── limits ─────────────────────────────────────────────── */
const GUEST_LIMIT = 2;
const USER_LIMIT  = 5;
const guestKey    = 'msg_guest_count';
const userKey     = (e: string) => `msg_count_${e}`;

const getCount = (key: string) => parseInt(localStorage.getItem(key) ?? '0', 10);
const bump     = (key: string) => { localStorage.setItem(key, String(getCount(key) + 1)); };

/* ── Google icon ─────────────────────────────────────────── */
function GoogleIcon() {
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"/>
        </svg>
    );
}

type Intent = 'hire' | 'teach' | 'chat';

const INTENTS: { id: Intent; emoji: string; label: string; placeholder: string }[] = [
    { id: 'hire',  emoji: '💼', label: 'Hire me',       placeholder: 'Tell me about the role or project…' },
    { id: 'teach', emoji: '📚', label: 'Learn from me', placeholder: 'What do you want to learn? Java, investing, fitness…' },
    { id: 'chat',  emoji: '👋', label: 'Just saying hi', placeholder: 'Say whatever you want…' },
];

/* ── shared form used in both page and inline widget ─────── */
interface FormProps { compact?: boolean; onSent?: () => void; }

export function ContactForm({ compact = false, onSent }: FormProps): JSX.Element {
    const { user, token, loginWithGoogle } = useAuth();

    const isLoggedIn  = !!token;
    const countKey    = isLoggedIn && user ? userKey(user) : guestKey;
    const limit       = isLoggedIn ? USER_LIMIT : GUEST_LIMIT;
    const used        = getCount(countKey);
    const remaining   = limit - used;
    const limitReached = remaining <= 0;

    const [intent,  setIntent]  = useState<Intent | null>(null);
    const [name,    setName]    = useState('');
    const [email,   setEmail]   = useState(isLoggedIn && user ? user : '');
    const [message, setMessage] = useState('');
    const [status,  setStatus]  = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [gLoading, setGLoading] = useState(false);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tr) => {
            setGLoading(true);
            try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tr.access_token}` },
                });
                const p = await res.json();
                loginWithGoogle(p.email, p.name ?? p.email);
                setEmail(p.email);
            } finally { setGLoading(false); }
        },
        onError: () => {},
    });

    const send = async () => {
        if (!intent || !message.trim()) return;
        setStatus('sending');
        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                {
                    from_name:  name  || (isLoggedIn ? user : 'Anonymous'),
                    from_email: email || 'no-email@provided.com',
                    intent:     INTENTS.find(i => i.id === intent)?.label ?? intent,
                    message,
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
            );
            bump(countKey);
            setStatus('sent');
            setMessage('');
            onSent?.();
        } catch { setStatus('error'); }
    };

    if (status === 'sent') return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8">
            <div className="text-4xl mb-2">🎉</div>
            <p className="font-semibold text-gray-800">Message sent!</p>
            <p className="text-sm text-gray-400 mt-1">I'll get back to you soon.</p>
            <button onClick={() => { setStatus('idle'); setIntent(null); setMessage(''); }}
                className="mt-4 text-xs t-text-500 hover:underline">Send another</button>
        </motion.div>
    );

    if (limitReached) return (
        <div className="text-center py-8">
            <div className="text-3xl mb-2">🙏</div>
            <p className="text-sm font-semibold text-gray-700">You've used your {limit} messages.</p>
            {!isLoggedIn && (
                <p className="text-xs text-gray-400 mt-2">
                    <button onClick={() => googleLogin()} className="t-text-500 hover:underline font-medium">
                        Sign in with Google
                    </button>{' '}to get {USER_LIMIT} messages.
                </p>
            )}
            <p className="text-xs text-gray-400 mt-1">
                Or email directly:{' '}
                <a href="mailto:zeeshanshaikhonline@gmail.com" className="t-text-500 hover:underline">
                    zeeshanshaikhonline@gmail.com
                </a>
            </p>
        </div>
    );

    return (
        <div className="space-y-4">
            {/* Intent pills */}
            <div className="flex flex-wrap gap-2">
                {INTENTS.map(({ id, emoji, label }) => (
                    <button key={id} onClick={() => setIntent(id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                            intent === id ? 't-btn border-transparent' : 'bg-white border-gray-200 text-gray-500 hover:t-border-300 hover:t-text-600'
                        }`}>
                        {emoji} {label}
                    </button>
                ))}
            </div>

            <AnimatePresence>
            {intent && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="space-y-3">

                    {/* Name + email row */}
                    <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                        <input value={name} onChange={e => setName(e.target.value)}
                            placeholder="Your name (optional)"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--c-200)] transition" />
                        <input value={email} onChange={e => setEmail(e.target.value)}
                            placeholder="Email so I can reply (optional)"
                            type="email"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--c-200)] transition" />
                    </div>

                    <textarea value={message} onChange={e => setMessage(e.target.value)}
                        placeholder={INTENTS.find(i => i.id === intent)?.placeholder}
                        rows={compact ? 3 : 5}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--c-200)] transition resize-none" />

                    {status === 'error' && (
                        <p className="text-red-500 text-xs">Something went wrong. Email me directly at <a href="mailto:zeeshanshaikhonline@gmail.com" className="underline">zeeshanshaikhonline@gmail.com</a></p>
                    )}

                    <div className="flex items-center gap-3">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                            onClick={send}
                            disabled={!message.trim() || status === 'sending'}
                            className="flex-1 t-btn py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-50">
                            {status === 'sending' ? 'Sending…' : 'Send message'}
                        </motion.button>

                        {/* Optional Google login nudge */}
                        {!isLoggedIn && (
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                onClick={() => googleLogin()} disabled={gLoading}
                                title="Sign in to get 5 messages instead of 2"
                                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition whitespace-nowrap">
                                <GoogleIcon />
                                {gLoading ? '…' : 'Sign in'}
                            </motion.button>
                        )}
                    </div>

                    {/* Limit hint */}
                    <p className="text-[10px] text-gray-300 text-right">
                        {remaining} message{remaining !== 1 ? 's' : ''} left
                        {!isLoggedIn && ' · sign in for more'}
                    </p>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

/* ── Full page ───────────────────────────────────────────── */
export default function ContactPage(): JSX.Element {
    const { user, token } = useAuth();

    return (
        <>
            <Helmet><title>Contact · Zeeshan Shaikh</title></Helmet>

            <div className="w-full t-hero-grad border-b t-border-100">
                <div className="max-w-4xl mx-auto px-6 lg:px-16 py-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <p className="text-xs font-semibold t-text-400 uppercase tracking-widest mb-2">Get in touch</p>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Say hello</h1>
                        <p className="text-gray-500 mt-2 text-sm max-w-lg">
                            No login needed — just type and send. Sign in with Google if you want a reply thread and more messages.
                        </p>
                        {token && user && (
                            <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                Signed in as <span className="text-gray-600 font-medium">{user}</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-6 lg:px-16 py-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <ContactForm />
                </motion.div>
            </div>
        </>
    );
}
