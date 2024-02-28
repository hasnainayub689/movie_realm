import { useState } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <CssBaseline />
            <main>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/movies" element={<h1>Movies</h1>} />
                    <Route
                        path="/movies/:id"
                        element={<h1>Movie Infomration</h1>}
                    />
                    <Route path="/actors" element={<h1>Actors</h1>} />
                    <Route path="/profile/:id" element={<h1>Profile</h1>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
