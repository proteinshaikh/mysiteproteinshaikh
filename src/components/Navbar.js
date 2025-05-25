import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LangToggle from '../utils/LangToggle';

const stockArticles = [
    {
        title: 'Invest in What You Understand 📚',
        link: '/stocks/invest-in-what-you-understand',
    },
    {
        title: 'Be Greedy When Others Are Fearful 😨',
        link: '/stocks/be-greedy-when-others-are-fearful',
    },
    {
        title: 'Focus on the Long Term ⏳',
        link: '/stocks/focus-on-the-long-term',
    },
];

const fitnessArticles = [
    {
        title: 'My Fitness Journey 🏋️‍♂️',
        link: '/fitness/dev-to-defined',
    },
    {
        title: 'Start with Compound Movements 🏋️',
        link: '/fitness/start-with-compound-movements',
    },
    {
        title: 'Track Your Progress 📈',
        link: '/fitness/track-your-progress',
    },
];

const techArticles = [
    {
        title: 'Understanding React Hooks 📚',
        link: '/tech/understanding-react-hooks',
    },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={`${process.env.PUBLIC_URL}/logo-gym.svg`} alt="Logo" className="h-10"/>
                    <span className="text-2xl font-bold font-[Playfair_Display] text-gray-800">ProteinShaikh</span>
                </Link>

                {/* Hamburger Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-4 relative">
                    <DropdownNavItem title="Tech" baseLink="/tech" articles={techArticles}/>
                    <DropdownNavItem title="Fitness" baseLink="/fitness" articles={fitnessArticles}/>
                    <DropdownNavItem title="Stocks" baseLink="/stocks" articles={stockArticles}/>
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200 font-medium"
                    >
                        Contact
                    </a>

                    <LangToggle/>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-3 pt-2">
                    <MobileNavItem to="/tech" onClick={() => setIsOpen(false)}>Tech</MobileNavItem>
                    <MobileNavItem to="/fitness" onClick={() => setIsOpen(false)}>Fitness</MobileNavItem>
                    <MobileNavItem to="/stocks" onClick={() => setIsOpen(false)}>Stocks</MobileNavItem>
                    <MobileNavItem to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavItem>
                    <div className="mt-2">
                        <LangToggle/>
                    </div>
                </div>
            )}
        </nav>
    );
}

// Standard Nav Link
const NavItem = ({to, children}) => (
    <Link
        to={to}
        className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200 font-medium"
    >
        {children}
    </Link>
);

// Mobile Nav Link
const MobileNavItem = ({to, children, onClick}) => (
    <Link
        to={to}
        onClick={onClick}
        className="block bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 font-medium shadow-sm hover:bg-gray-100 transition"
    >
        {children}
    </Link>
);


// Dropdown for Articles under Stocks
const DropdownNavItem = ({title, baseLink, articles}) => {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = React.useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(false);
        }, 150); // short delay to allow click event to register
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Clickable "Stocks" link */}
            <Link
                to={baseLink}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium focus:outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                {title}
                <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </Link>


            {/* Dropdown */}
            <div
                className={`absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-3 transition-all duration-200 ${
                    hovered ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                {articles.map((article, index) => (
                    <Link
                        key={index}
                        to={article.link}
                        className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-100"
                    >
                        <div className="font-semibold text-gray-800 text-sm">{article.title}</div>
                        <div className="text-xs text-gray-500">Read article →</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default Navbar;
