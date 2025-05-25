import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Fitness from './pages/Fitness';
import Stocks from './pages/Stocks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectDetails from './pages/ProjectDetails';
import ArticlePage from './pages/ArticlePage';
import InvestmentGuide from './articles/InvestmentGuide';
import FitnessJourney from './articles/FitnessJourney';
import ReactHooksGuide from './articles/ReactHooksGuide';
import InvestInWhatYouUnderstand from './stocks/InvestInWhatYouUnderstand';
import BeGreedyWhenOthersAreFearful from './stocks/BeGreedyWhenOthersAreFearful';
import FocusOnTheLongTerm from './stocks/FocusOnTheLongTerm';
import StartWithCompoundMovements from './fitness/StartWithCompoundMovements';
import TrackYourProgress from './fitness/TrackYourProgress';


function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/articles" element={<Articles/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/blog/:slug" element={<Post/>}/>
                        <Route path="/fitness" element={<Fitness/>}/>
                        <Route path="/stocks" element={<Stocks/>}/>
                        <Route path="/projects/:slug" element={<ProjectDetails/>}/>
                        <Route path="/articles/:slug" element={<ArticlePage/>}/>
                        <Route path="/articles/investment-strategies" element={<InvestmentGuide/>}/>
                        <Route path="/articles/my-fitness-transformation-journey" element={<FitnessJourney/>}/>
                        <Route path="/articles/understanding-react-hooks" element={<ReactHooksGuide/>}/>
                        <Route path="/stocks/invest-in-what-you-understand" element={<InvestInWhatYouUnderstand/>}/>
                        <Route path="/stocks/be-greedy-when-others-are-fearful"
                               element={<BeGreedyWhenOthersAreFearful/>}/>
                        <Route path="/stocks/focus-on-the-long-term" element={<FocusOnTheLongTerm/>}/>
                        <Route path="/fitness/start-with-compound-movements" element={<StartWithCompoundMovements/>}/>
                        <Route path="/fitness/track-your-progress" element={<TrackYourProgress/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
