import { useEffect, useState } from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js';
import './App.css';

function App() {
    const [broadLocations, setBroadLocations] = useState([])
    const [races, setRaces] = useState([])
    const [raceDescription, setRaceDescription] = useState([])
    const [cultureActivity, setCultureActivity] = useState([])
    const [activityReason, setActivityReason] = useState([])
    const [specificLocationAdjective, setSpecificLocationAdjective] = useState([])
    const [specificLocation, setSpecificLocation] = useState([])
    const [specificCharacterState, setSpecificCharacterState] = useState([])
    const [taskAction, setTaskAction] = useState([])
    const [taskObject, setTaskObject] = useState([])
    const [specificGoalAction, setSpecificGoalAction] = useState([])
    const [specificGoalObject, setSpecificGoalObject] = useState([])
    const [obstacleObject, setObstacleObject] = useState([])
    const [obstacleObjectsMotivation, setObstacleObjectsMotivation] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/races/")
        .then((res) => res.json())
        .then((data) => {
            setRaces(data)
            console.log(data)
        })
    }, [])


    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
