import React, {JSX} from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import BooksPage from './pages/BooksPage';
import ResumePage from './pages/ResumePage';
import ProtectedRoute from './routes/ProtectedRoute';

function App(): JSX.Element {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/books" element={<BooksPage/>}/>
                    <Route path="/resume" element={<ResumePage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
