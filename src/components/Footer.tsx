import React, {JSX} from 'react';

function Footer(): JSX.Element {
    const scrollToTop = (): void => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="bg-gradient-to-r from-blue-50 to-purple-100 shadow-inner mt-12">
            <div className="container mx-auto px-4 py-10 text-center">

                {/* Logo and Name */}
                <div className="flex justify-center items-center gap-3 mb-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/logo-gym.svg`}
                        alt="Logo"
                        className="h-10 w-10"
                    />
                    <span className="text-2xl font-bold text-gray-800">ProteinShaikh</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4 w-2/3 mx-auto"/>

                {/* Footer Text */}
                <p className="text-sm text-gray-600 mb-1">
                    &copy; {new Date().getFullYear()} ProteinShaikh. Made with ❤️ and ☕ in Dubai.
                </p>
                <p className="text-xs text-gray-400">All rights reserved.</p>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="inline-block mt-6 px-5 py-2 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition"
                >
                    ↑ Back to Top
                </button>
            </div>
        </footer>
    );
}

export default Footer;
