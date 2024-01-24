import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Films from './views/Films';
import Home from './views/Home';
import People from './views/People';
import Navbar from './components/Navbar';
import FilmDetails from './views/Film Details';
import PeopleDetails from './views/People Details';

const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <main className="container mt-5">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Films />} />
                <Route path='/films/:filmid' element={<FilmDetails />} />
                <Route path="/people" element={<People />} />
                <Route path='/people/:peopleid' element={<PeopleDetails />} />
            </Routes>
        </main>
    </BrowserRouter>
    );
};

export default App; 