import React, { useState, useEffect, JSX } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../auth/AuthContext';
import LoginDialog from '../auth/components/LoginDialog';
import RegisterDialog from '../auth/components/RegisterDialog';
import ForgotPasswordDialog from '../auth/components/ForgotPasswordDialog';

/* ── Colorful SVG logo ──────────────────────────────────── */
function Logo(): JSX.Element {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* background circle */}
            <circle cx="18" cy="18" r="18" fill="url(#logoGrad)"/>
            {/* dumbbell bar */}
            <rect x="8" y="16.5" width="20" height="3" rx="1.5" fill="white" opacity="0.9"/>
            {/* left weight plates */}
            <rect x="6" y="13" width="4" height="10" rx="2" fill="white"/>
            <rect x="4" y="14.5" width="3" height="7" rx="1.5" fill="#c7d2fe"/>
            {/* right weight plates */}
            <rect x="26" y="13" width="4" height="10" rx="2" fill="white"/>
            <rect x="29" y="14.5" width="3" height="7" rx="1.5" fill="#c7d2fe"/>
            {/* chart line overlay */}
            <polyline points="11,24 15,20 19,22 25,16" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
            <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

function Navbar(): JSX.Element {
    const { token, logout } = useAuth();
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgot, setShowForgot] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/85 backdrop-blur-md border-b border-indigo-100 shadow-sm'
                        : 'bg-white/60 backdrop-blur-sm border-b border-transparent'
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 lg:px-16 py-3.5 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-2.5">
                        <motion.div whileHover={{ rotate: 10, scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <Logo />
                        </motion.div>
                        <div className="flex flex-col leading-none">
                            <span className="text-base font-bold text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                                proteinshaikh
                            </span>
                            <span className="text-[10px] text-indigo-400 font-medium tracking-widest uppercase">
                                dev · lifter · investor
                            </span>
                        </div>
                    </Link>

                    {/* Right */}
                    <div className="flex items-center gap-2 text-sm">
                        {/* Books button */}
                        <Link to="/books">
                            <motion.span
                                whileHover={{ backgroundColor: '#eef2ff' }}
                                className="block px-3 py-1.5 rounded-lg text-gray-500 hover:text-indigo-600 transition-colors font-medium cursor-pointer text-sm"
                            >
                                📚 Books
                            </motion.span>
                        </Link>

                        {token ? (
                            <>
                                <Link to="/profile">
                                    <motion.span
                                        whileHover={{ backgroundColor: '#eef2ff' }}
                                        className="block px-3 py-1.5 rounded-lg text-gray-500 hover:text-indigo-600 transition-colors font-medium cursor-pointer"
                                    >
                                        Profile
                                    </motion.span>
                                </Link>
                                <motion.button
                                    whileHover={{ backgroundColor: '#eef2ff' }}
                                    onClick={logout}
                                    className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-indigo-600 transition-colors font-medium"
                                >
                                    Logout
                                </motion.button>
                            </>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setShowLogin(true)}
                                className="px-4 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
                            >
                                Login
                            </motion.button>
                        )}
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {showLogin && (
                    <LoginDialog
                        isOpen={showLogin}
                        onClose={() => setShowLogin(false)}
                        onRegister={() => { setShowLogin(false); setShowRegister(true); }}
                        onForgot={() => { setShowLogin(false); setShowForgot(true); }}
                    />
                )}
            </AnimatePresence>
            <RegisterDialog isOpen={showRegister} onClose={() => setShowRegister(false)} />
            <ForgotPasswordDialog isOpen={showForgot} onClose={() => setShowForgot(false)} />
        </>
    );
}

export default Navbar;
