import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '../auth/AuthContext';

const displayNameFromEmail = (email: string): string =>
    email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

function StatCard({ value, label }: { value: string; label: string }): JSX.Element {
    return (
        <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
            <p className="text-2xl font-bold text-indigo-600">{value}</p>
            <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value: string }): JSX.Element {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <span className="text-sm text-gray-400 font-medium">{label}</span>
            <span className="text-sm text-gray-800 font-medium">{value}</span>
        </div>
    );
}

export default function ProfilePage(): JSX.Element {
    const { user, logout } = useAuth();
    const email = user ?? 'guest@example.com';
    const displayName = displayNameFromEmail(email);
    const initials = displayName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

    return (
        <>
            <Helmet><title>{displayName} · Profile</title></Helmet>

            {/* Hero banner */}
            <div className="w-full h-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

            <div className="max-w-6xl mx-auto px-6 lg:px-16 pb-20">

                {/* Avatar row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-14 mb-8">
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.45 }}
                        className="w-24 h-24 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg ring-4 ring-white"
                    >
                        {initials}
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={logout}
                        className="self-start sm:self-auto px-4 py-2 rounded-full border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
                    >
                        Sign out
                    </motion.button>
                </div>

                {/* Name + email */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="mb-10"
                >
                    <h1 className="text-2xl font-bold text-gray-900">{displayName}</h1>
                    <p className="text-sm text-gray-400 mt-0.5">{email}</p>
                    <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        Active
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left: account info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.45 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <StatCard value="Jun 2025" label="Member since" />
                            <StatCard value="Dubai" label="Location" />
                            <StatCard value="Admin" label="Role" />
                        </div>

                        {/* Account details card */}
                        <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6">
                            <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Account details</h2>
                            <InfoRow label="Display name" value={displayName} />
                            <InfoRow label="Email address" value={email} />
                            <InfoRow label="Member since" value="June 2025" />
                            <InfoRow label="Account type" value="Administrator" />
                        </div>
                    </motion.div>

                    {/* Right: quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.22, duration: 0.45 }}
                        className="space-y-4"
                    >
                        <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-6">
                            <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Quick links</h2>
                            <div className="space-y-2">
                                {[
                                    { label: 'GitHub', href: 'https://github.com/proteinshaikh' },
                                    { label: 'LinkedIn', href: 'https://linkedin.com/in/proteinshaikh' },
                                    { label: 'Medium', href: 'https://medium.com/@proteinshaikh' },
                                    { label: 'Email', href: 'mailto:zeeshanshaikhonline@gmail.com' },
                                ].map(({ label, href }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target={href.startsWith('mailto') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
                                    >
                                        <span className="text-sm text-gray-700 group-hover:text-indigo-600 font-medium transition-colors">{label}</span>
                                        <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Danger zone */}
                        <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6">
                            <h2 className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-4">Session</h2>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={logout}
                                className="w-full py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors"
                            >
                                Sign out
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
