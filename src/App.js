import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Articles from './pages/Tech';
import Contact from './pages/Contact';
import Fitness from './pages/Fitness';
import Stocks from './pages/Stocks';

import ReactHooksGuide from './tech/ReactHooksGuide';

import InvestInWhatYouUnderstand from './stocks/InvestInWhatYouUnderstand';
import BeGreedyWhenOthersAreFearful from './stocks/BeGreedyWhenOthersAreFearful';
import FocusOnTheLongTerm from './stocks/FocusOnTheLongTerm';

import DevToDefined from './fitness/DevToDefined';
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
                        <Route path="/tech" element={<Articles/>}/>
                        <Route path="/fitness" element={<Fitness/>}/>
                        <Route path="/stocks" element={<Stocks/>}/>
                        <Route path="/contact" element={<Contact/>}/>


                        <Route path="/tech/understanding-react-hooks" element={<ReactHooksGuide/>}/>

                        <Route path="/stocks/invest-in-what-you-understand" element={<InvestInWhatYouUnderstand/>}/>
                        <Route path="/stocks/be-greedy-when-others-are-fearful"
                               element={<BeGreedyWhenOthersAreFearful/>}/>
                        <Route path="/stocks/focus-on-the-long-term" element={<FocusOnTheLongTerm/>}/>

                        <Route path="/fitness/dev-to-defined" element={<DevToDefined/>}/>
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
