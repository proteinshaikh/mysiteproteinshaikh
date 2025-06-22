import React, {
    useState,
    useEffect,
    useRef,
    MouseEvent,
    ReactNode, JSX,
} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import LangToggle from '../utils/LangToggle';
import {CalculatorIcon} from '@heroicons/react/16/solid';
import {useAuth} from '../auth/AuthContext';
import LoginDialog from '../auth/components/LoginDialog';
import RegisterDialog from '../auth/components/RegisterDialog';
import ForgotPasswordDialog from '../auth/components/ForgotPasswordDialog';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

type Article = {
    title: string;
    link: string;
};

// -----------------------------------------------------------------------------
// Static article menus
// -----------------------------------------------------------------------------

const stockArticles: Article[] = [
    {title: 'Investment lessons from Warren Buffet.', link: '/stocks/buffet-lessons'},
];

const fitnessArticles: Article[] = [
    {title: 'My Fitness Journey 🏋️‍♂️', link: '/fitness/dev-to-defined'},
    {title: 'Start with Compound Movements 🏋️', link: '/fitness/start-with-compound-movements'},
    {title: 'Track Your Progress 📈', link: '/fitness/track-your-progress'},
    {title: 'Meal Plan June 2025', link: '/fitness/meal-plan'},
];

const techArticles: Article[] = [
    {title: 'Understanding React Hooks 📚', link: '/tech/understanding-react-hooks'},
];

const blogsArticles: Article[] = [
    {title: 'The Geography of Belief: Coincidence or Conditioning?', link: '/blogs/geography-of-belief'},
    {title: 'The Interplay of Money and Risk', link: '/blogs/money-and-risk'},
    {title: '12 Lessons from Steve Jobs (via Guy Kawasaki)', link: '/blogs/steve-jobs'},
    {title: 'Best Books to Read in 2025', link: '/blogs/books'},
];

// -----------------------------------------------------------------------------
// Navbar
// -----------------------------------------------------------------------------

function Navbar(): JSX.Element {
    const navigate = useNavigate();
    const {token, logout} = useAuth();

    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgot, setShowForgot] = useState(false);

    useEffect(() => {
        const onScroll = () => isOpen && setIsOpen(false);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isOpen]);

    const scrollToContact = () =>
        setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);

    const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('/');
        scrollToContact();
    };

    return (
        <>
            {/* Top bar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={`${process.env.PUBLIC_URL}/logo-gym.svg`} alt="Logo" className="h-10"/>
                        <span className="text-2xl font-bold font-[Playfair_Display] text-gray-800">ProteinShaikh</span>
                    </Link>

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

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4 relative">
                        <Link to="/calculators"
                              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition font-medium">
                            <CalculatorIcon className="h-5 w-5 text-blue-700"/>
                            <span>Health Calculators</span>
                        </Link>
                        <DropdownNavItem title="Tech" baseLink="/tech" articles={techArticles}/>
                        <DropdownNavItem title="Fitness" baseLink="/fitness" articles={fitnessArticles}/>
                        <DropdownNavItem title="Stocks" baseLink="/stocks" articles={stockArticles}/>
                        <DropdownNavItem title="Blogs" baseLink="/blogs" articles={blogsArticles}/>
                        <a href="#contact" onClick={handleContactClick}
                           className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition font-medium">Contact</a>
                        {token ? (
                            <>
                                <Link to="/profile"
                                      className="px-4 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition font-medium">My
                                    Profile</Link>
                                <button onClick={logout}
                                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition font-medium">Logout
                                </button>
                            </>
                        ) : (
                            <button onClick={() => setShowLogin(true)}
                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium">Login</button>
                        )}
                        <LangToggle/>
                    </div>
                </div>

                {/* Mobile drawer */}
                {isOpen && (
                    <div className="md:hidden bg-white px-4 pb-4 space-y-3 pt-2">
                        <MobileNavItem to="/calculators" onClick={() => setIsOpen(false)}>Calculators</MobileNavItem>
                        <MobileNavItem to="/tech" onClick={() => setIsOpen(false)}>Tech</MobileNavItem>
                        <MobileNavItem to="/fitness" onClick={() => setIsOpen(false)}>Fitness</MobileNavItem>
                        <MobileNavItem to="/stocks" onClick={() => setIsOpen(false)}>Stocks</MobileNavItem>
                        <MobileNavItem to="/blogs" onClick={() => setIsOpen(false)}>Blogs</MobileNavItem>
                        <a href="#contact" onClick={(e) => {
                            setIsOpen(false);
                            handleContactClick(e);
                        }}
                           className="block bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 font-medium shadow-sm hover:bg-gray-100 transition">Contact</a>{token ? (
                        <>
                            <Link to="/profile" onClick={() => setIsOpen(false)}
                                  className="w-full bg-green-100 border border-green-200 rounded-lg px-4 py-3 font-medium text-green-800 shadow-sm hover:bg-green-200 transition mb-2">My
                                Profile</Link>
                            <button onClick={() => {
                                logout();
                                setIsOpen(false);
                            }}
                                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-800 shadow-sm hover:bg-gray-200 transition">Logout
                            </button>
                        </>
                    ) : (
                        <button onClick={() => {
                            setShowLogin(true);
                            setIsOpen(false);
                        }}
                                className="w-full bg-blue-600 rounded-lg px-4 py-3 font-medium text-white shadow-sm hover:bg-blue-700 transition">Login</button>
                    )}
                        <div className="mt-2"><LangToggle/></div>
                    </div>
                )}
            </nav>

            {/* Auth modals */}
            <LoginDialog isOpen={showLogin} onClose={() => setShowLogin(false)} onRegister={() => setShowRegister(true)}
                         onForgot={() => setShowForgot(true)}/>
            <RegisterDialog isOpen={showRegister} onClose={() => setShowRegister(false)}/>
            <ForgotPasswordDialog isOpen={showForgot} onClose={() => setShowForgot(false)}/>
        </>
    );
}

// -----------------------------------------------------------------------------
// MobileNavItem
// -----------------------------------------------------------------------------

type MobileNavItemProps = {
    to: string;
    children: ReactNode;
    onClick?: () => void;
};

const MobileNavItem = ({to, children, onClick}: MobileNavItemProps): JSX.Element => {
    const navigate = useNavigate();
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.();
        if (to === '/contact' || to === '#contact') {
            e.preventDefault();
            navigate('/');
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);
        }
    };
    return (
        <Link to={to} onClick={handleClick}
              className="block bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 font-medium shadow-sm hover:bg-gray-100 transition">
            {children}
        </Link>
    );
};

// -----------------------------------------------------------------------------
// DropdownNavItem (desktop only)
// -----------------------------------------------------------------------------

type DropdownNavItemProps = {
    title: string;
    baseLink: string;
    articles: Article[];
};

const DropdownNavItem = ({title, baseLink, articles}: DropdownNavItemProps): JSX.Element => {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const onEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHovered(true);
    };
    const onLeave = () => {
        timeoutRef.current = setTimeout(() => setHovered(false), 150);
    };

    return (
        <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <Link to={baseLink}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">
                {title}
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2}
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </Link>
            <div
                className={`absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-3 transition-all duration-200 ${hovered ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {articles.map((a) => (
                    <Link key={a.link} to={a.link}
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-100">
                        <div className="font-semibold text-gray-800 text-sm">{a.title}</div>
                        <div className="text-xs text-gray-500">Read article →</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
