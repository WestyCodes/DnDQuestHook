import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './header/Header.js';
import Main from './main/Main.js';
import PromptsPage from './prompts/PromptsPage.js'
import Footer from './footer/Footer.js';
import './App.css';

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/prompts' element={<PromptsPage />}/>
            </Routes>
            
            <Footer />
        </div>
    );
}

export default App;
