import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header.js';
import Main from './main/Main.js';
import PromptsPage from './prompts/PromptsPage.js';
import SavedPromptsPage from './savedPrompts/SavedPromptsPage.js';
import Footer from './footer/Footer.js';
import './App.css';

function App() {
    const [numberOfQuests, setNumberOfQuests] = useState();
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Main setNumberOfQuests={setNumberOfQuests} />}
                />
                {/* <Route path='/prompts' element={<PromptsPage />}/> */}
                <Route path="/saved" element={<SavedPromptsPage />} />
            </Routes>

            <Footer numberOfQuests={numberOfQuests} />
        </div>
    );
}

export default App;
