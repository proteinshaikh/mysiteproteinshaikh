import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    {/* SVG Logo */}
                    <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="w-8 h-8"/>

                    {/* Stylish Brand Text */}
                    <span className="text-2xl font-bold font-[Playfair_Display] text-black">ProteinShaikh</span>
                </Link>


                <div className="space-x-4">
                    <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                    <Link to="/articles" className="text-gray-600 hover:text-gray-800">Articles</Link>
                    <Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                    <Link to="/fitness" className="text-gray-600 hover:text-gray-800">Fitness</Link>
                    <Link to="/stocks" className="text-gray-600 hover:text-gray-800">Stocks</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
