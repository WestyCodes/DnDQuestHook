import { useState, useEffect } from 'react'

export default function Main() {
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

        fetch("http://localhost:3000/broadLocations/")
        .then((res) => res.json())
        .then((data) => {
            setBroadLocations(data)
        })

        fetch("http://localhost:3000/races/")
        .then((res) => res.json())
        .then((data) => {
            setRaces(data)
        })

        fetch("http://localhost:3000/raceDescription/")
        .then((res) => res.json())
        .then((data) => {
            setRaceDescription(data)
        })

        fetch("http://localhost:3000/cultureActivity/")
        .then((res) => res.json())
        .then((data) => {
            setCultureActivity(data)
        })

        fetch("http://localhost:3000/activityReason/")
        .then((res) => res.json())
        .then((data) => {
            setActivityReason(data)
        })

        fetch("http://localhost:3000/specificLocationAdjective/")
        .then((res) => res.json())
        .then((data) => {
            setSpecificLocationAdjective(data)
        })

        fetch("http://localhost:3000/specificLocation/")
        .then((res) => res.json())
        .then((data) => {
            setSpecificLocation(data)
        })

        fetch("http://localhost:3000/specificCharacterState/")
        .then((res) => res.json())
        .then((data) => {
            setSpecificCharacterState(data)
        })

        fetch("http://localhost:3000/taskAction/")
        .then((res) => res.json())
        .then((data) => {
            setTaskAction(data)
        })

        fetch("http://localhost:3000/taskObject/")
        .then((res) => res.json())
        .then((data) => {
            setTaskObject(data)
        })

        fetch("http://localhost:3000/specificGoalAction/")
        .then((res) => res.json())
        .then((data) => {
            setSpecificGoalAction(data)
        })

        fetch("http://localhost:3000/specificGoalObject/")
        .then((res) => res.json())
        .then((data) => {
            setSpecificGoalObject(data)
        })

        fetch("http://localhost:3000/obstacleObject/")
        .then((res) => res.json())
        .then((data) => {
            setObstacleObject(data)
        })

        fetch("http://localhost:3000/obstacleObjectsMotivation/")
        .then((res) => res.json())
        .then((data) => {
            setObstacleObjectsMotivation(data)
        })

    }, [])

    return (
        <div>
            <p>This is the Main</p>
            <p>This is a test randomised Quest:</p>
            <p>
                {broadLocations[0]?.title}, where {raceDescription[0]?.title} {races[0]?.title} {cultureActivity[0]?.title} {activityReason[0]?.title}, 
                you find yourself in a {specificLocationAdjective[0]?.title} {specificLocation[0]?.title}, {specificCharacterState[0]?.title} and {specificCharacterState[0]?.title}. 
                You must {taskAction[0]?.title} the {taskObject[0]?.title} in order to {specificGoalAction[0]?.title} {specificGoalObject[0]?.title}.
                However, the {obstacleObject[0]?.title} would be opposed to the {taskObject[0]?.title} {obstacleObjectsMotivation[0]?.title}!
            </p>
            <p>why no work</p>
        </div>
    )
}