import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import LangToggle from '../utils/LangToggle';

function Navbar() {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={`${process.env.PUBLIC_URL}/logo-gym.svg`} alt="Logo" className="h-10"/>
                    <span className="text-2xl font-bold font-[Playfair_Display] text-black">ProteinShaikh</span>
                </Link>

                <div className="flex items-center space-x-6">
                    <div className="space-x-4">
                        <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                        <Link to="/articles" className="text-gray-600 hover:text-gray-800">Articles</Link>
                        <Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        <Link to="/fitness" className="text-gray-600 hover:text-gray-800">Fitness</Link>
                        <Link to="/stocks" className="text-gray-600 hover:text-gray-800">Stocks</Link>
                    </div>

                    {/* Language Toggle */}
                    <div className="flex items-center space-x-4">
                        <LangToggle/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
