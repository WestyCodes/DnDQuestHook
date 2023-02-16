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

    const [questText, setQuestText] = useState()
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

    const randomiseQuest = () => {
        const quest = {}
        quest.mainLocation = broadLocations[Math.floor(Math.random()*broadLocations.length)].title
        quest.inhabitantsDescription = raceDescription[Math.floor(Math.random()*raceDescription.length)].title
        quest.inhabitants = races[Math.floor(Math.random()*races.length)].title
        quest.culture = cultureActivity[Math.floor(Math.random()*cultureActivity.length)].title
        quest.cultureReason = activityReason[Math.floor(Math.random()*activityReason.length)].title
        quest.pcLocationAdj = specificLocationAdjective[Math.floor(Math.random()*specificLocationAdjective.length)].title
        quest.pcLocation = specificLocation[Math.floor(Math.random()*specificLocation.length)].title
        quest.pcMood = specificCharacterState[Math.floor(Math.random()*specificCharacterState.length)].title
        quest.questAction = taskAction[Math.floor(Math.random()*taskAction.length)].title
        quest.questObject = taskObject[Math.floor(Math.random()*taskObject.length)].title
        quest.goalAction = specificGoalAction[Math.floor(Math.random()*specificGoalAction.length)].title
        quest.goalObject = specificGoalObject[Math.floor(Math.random()*specificGoalObject.length)].title
        quest.antagonistObject = obstacleObject[Math.floor(Math.random()*obstacleObject.length)].title
        quest.antagonistMotivation = obstacleObjectsMotivation[Math.floor(Math.random()*obstacleObjectsMotivation.length)].title
        setQuestText(quest)
        // console.log(questText)
    }


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
            <p onClick={(randomiseQuest)}>That sucks, try again!</p>
        </div>
    )
}