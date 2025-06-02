import React, {JSX, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Articles from './pages/Tech';
import Contact from './pages/Contact';
import Fitness from './pages/Fitness';
import Stocks from './pages/Stocks';
import Blogs from './pages/Blogs';

import ReactHooksGuide from './files/tech/ReactHooksGuide';
import BuffetLessons from './files/stocks/BuffettInvestmentLessons';

import DevToDefined from './files/fitness/DevToDefined';
import StartWithCompoundMovements from './files/fitness/StartWithCompoundMovements';
import TrackYourProgress from './files/fitness/TrackYourProgress';
import MealPlan from './files/fitness/MealPlan';

import GeogOfBelief from './files/blogs/GeogOfBelief';
import MoneyAndRisk from './files/blogs/InterplayOfMoneyAndRisk';
import LessonsFromSteveJobs from './files/blogs/LessonsFromSteveJobs';
import Books from './files/blogs/Books';

function App(): JSX.Element {
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
                        <Route path="/blogs" element={<Blogs/>}/>
                        <Route path="/contact" element={<Contact/>}/>

                        <Route path="/tech/understanding-react-hooks" element={<ReactHooksGuide/>}/>
                        <Route path="/stocks/buffet-lessons" element={<BuffetLessons/>}/>

                        <Route path="/fitness/dev-to-defined" element={<DevToDefined/>}/>
                        <Route path="/fitness/start-with-compound-movements" element={<StartWithCompoundMovements/>}/>
                        <Route path="/fitness/track-your-progress" element={<TrackYourProgress/>}/>
                        <Route path="/fitness/meal-plan" element={<MealPlan/>}/>

                        <Route path="/blogs/geography-of-belief" element={<GeogOfBelief/>}/>
                        <Route path="/blogs/money-and-risk" element={<MoneyAndRisk/>}/>
                        <Route path="/blogs/steve-jobs" element={<LessonsFromSteveJobs/>}/>
                        <Route path="/blogs/books" element={<Books/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
