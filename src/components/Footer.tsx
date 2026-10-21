import React, { JSX } from 'react';
import { motion } from 'framer-motion';

function Footer(): JSX.Element {
    return (
        <footer className="w-full border-t border-indigo-100 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-16 py-8">

                {/* Contact row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold text-gray-700">Zeeshan Shaikh</p>
                        <p className="text-xs text-gray-400 -mt-2">Software Developer · Dubai, UAE</p>

                        <motion.a
                            href={`https://mail.google.com/mail/?view=cm&to=zeeshanshaikhonline@gmail.com&su=Enquiry%20%2F%20Opportunity&body=Hi%20Zeeshan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20regarding%3A%0A%0A%5B%20%5D%20Job%20%2F%20Career%20Opportunity%0A%5B%20%5D%20Consulting%20%2F%20Freelance%20Work%0A%5B%20%5D%20Collaboration%0A%5B%20%5D%20Other%0A%0A---%0AName%3A%20%0ACompany%3A%20%0ADetails%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C%0A%5BYour%20Name%5D`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -1 }}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors group"
                        >
                            <span className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </span>
                            zeeshanshaikhonline@gmail.com
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            href="tel:+971557436491"
                            whileHover={{ y: -1 }}
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors group"
                        >
                            <span className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </span>
                            <span className="mr-0.5">🇦🇪</span>
                            +971 55 743 6491
                        </motion.a>
                    </div>

                    <motion.button
                        whileHover={{ y: -2 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-xs text-indigo-400 hover:text-indigo-600 transition-colors font-medium"
                    >
                        ↑ Back to top
                    </motion.button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-100 to-transparent mb-4" />

                {/* Bottom */}
                <p className="text-xs text-gray-400 text-center">
                    &copy; {new Date().getFullYear()} Zeeshan Shaikh · Dubai, UAE
                </p>
            </div>
        </footer>
    );
}

export default Footer;
