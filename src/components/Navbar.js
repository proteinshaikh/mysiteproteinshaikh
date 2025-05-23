import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">ProteinShaikh</Link>
                <div className="space-x-4">
                    <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                    <Link to="/articles" className="text-gray-600 hover:text-gray-800">Articles</Link>
                    <Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
