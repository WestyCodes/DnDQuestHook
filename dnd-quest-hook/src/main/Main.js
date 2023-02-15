import { useState, useEffect } from 'react'
import { getPrompts } from '../apiFunctions/apiFunctions'

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

    const [loading, setIsLoading] = useState(true)

    
    async function promptsAPIReuqest() {
        const broadLocs = await getPrompts("broadLocations")
        setBroadLocations(broadLocs)
        const race = await getPrompts("races")
        setRaces(race)
        const raceDesc = await getPrompts("raceDescription")
        setRaceDescription(raceDesc)
        const cultActi = await getPrompts("cultureActivity")
        setCultureActivity(cultActi)
        const actiRea = await getPrompts("activityReason")
        setActivityReason(actiRea)
        const speciLocAdj = await getPrompts("specificLocationAdjective")
        setSpecificLocationAdjective(speciLocAdj)
        const speciLoc = await getPrompts("specificLocation")
        setSpecificLocation(speciLoc)
        const speciCharState = await getPrompts("specificCharacterState")
        setSpecificCharacterState(speciCharState)
        const taskAct = await getPrompts("taskAction")
        setTaskAction(taskAct)
        const taskObj = await getPrompts("taskObject")
        setTaskObject(taskObj)
        const speciGoalAct = await getPrompts("specificGoalAction")
        setSpecificGoalAction(speciGoalAct)
        const speciGoalObj = await getPrompts("specificGoalObject")
        setSpecificGoalObject(speciGoalObj)
        const obstObj = await getPrompts("obstacleObject")
        setObstacleObject(obstObj)
        const obsObjMoti = await getPrompts("obstacleObjectsMotivation")
        setObstacleObjectsMotivation(obsObjMoti)
    }


    useEffect(() => {
        setIsLoading(true)
        async function getMyPrompts() {
            const res = await promptsAPIReuqest()
            setIsLoading(false)
            return res
        }
        getMyPrompts()
    }, [])


    return (

        <div>
            <p>This is the Main</p>
            <p>This is a test randomised Quest:</p>
            {loading ? (<p>Loading...</p>) : (<p>
                {broadLocations[0]?.title}, where {raceDescription[0]?.title} {races[0]?.title} {cultureActivity[0]?.title} {activityReason[0]?.title}, 
                you find yourself in a {specificLocationAdjective[0]?.title} {specificLocation[0]?.title}, {specificCharacterState[0]?.title} and {specificCharacterState[0]?.title}. 
                You must {taskAction[0]?.title} the {taskObject[0]?.title} in order to {specificGoalAction[0]?.title} {specificGoalObject[0]?.title}.
                However, the {obstacleObject[0]?.title} would be opposed to the {taskObject[0]?.title} {obstacleObjectsMotivation[0]?.title}!
            </p>)}
        </div>
    )
}