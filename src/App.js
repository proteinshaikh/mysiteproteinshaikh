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
import Opinions from './pages/Opinions';

import ReactHooksGuide from './files/tech/ReactHooksGuide';

import BuffetLessons from './files/stocks/BuffettInvestmentLessons';

import DevToDefined from './files/fitness/DevToDefined';
import StartWithCompoundMovements from './files/fitness/StartWithCompoundMovements';
import TrackYourProgress from './files/fitness/TrackYourProgress';

import GeogOfBelief from './files/opinions/GeogOfBelief';
import MoneyAndRisk from './files/opinions/InterplayOfMoneyAndRisk';
import LessonsFromSteveJobs from "./files/opinions/LessonsFromSteveJobs";


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
                        <Route path="/opinions" element={<Opinions/>}/>
                        <Route path="/contact" element={<Contact/>}/>


                        <Route path="/tech/understanding-react-hooks" element={<ReactHooksGuide/>}/>

                        <Route path="/stocks/buffet-lessons" element={<BuffetLessons/>}/>

                        <Route path="/fitness/dev-to-defined" element={<DevToDefined/>}/>
                        <Route path="/fitness/start-with-compound-movements" element={<StartWithCompoundMovements/>}/>
                        <Route path="/fitness/track-your-progress" element={<TrackYourProgress/>}/>

                        <Route path="/opinions/geography-of-belief" element={<GeogOfBelief/>}/>
                        <Route path="/opinions/money-and-risk" element={<MoneyAndRisk/>}/>
                        <Route path="/opinions/steve-jobs" element={<LessonsFromSteveJobs/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
