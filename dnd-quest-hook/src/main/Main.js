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
    const [loadingAPI, setIsLoadingAPI] = useState(true)
    const [loadQuest, setLoadQuest] = useState(false)

    
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
        setIsLoadingAPI(true)
        async function getMyPrompts() {
            const res = await promptsAPIReuqest()
            setIsLoadingAPI(false)
            return res
        }
        getMyPrompts()
    }, [])

    const randomiseQuest = () => {
        setLoadQuest(false)
        const quest = {}
        quest.mainLocation = broadLocations[Math.floor(Math.random()*broadLocations.length)].title
        quest.inhabitantsDescription = raceDescription[Math.floor(Math.random()*raceDescription.length)].title
        quest.inhabitants = races[Math.floor(Math.random()*races.length)].title
        quest.culture = cultureActivity[Math.floor(Math.random()*cultureActivity.length)].title
        quest.cultureReason = activityReason[Math.floor(Math.random()*activityReason.length)].title
        quest.pcLocationAdj = specificLocationAdjective[Math.floor(Math.random()*specificLocationAdjective.length)].title
        quest.pcLocation = specificLocation[Math.floor(Math.random()*specificLocation.length)].title
        quest.pcMood1 = specificCharacterState[Math.floor(Math.random()*specificCharacterState.length)].title
        quest.pcMood2 = specificCharacterState[Math.floor(Math.random()*specificCharacterState.length)].title
        quest.questAction = taskAction[Math.floor(Math.random()*taskAction.length)].title
        quest.questObject = taskObject[Math.floor(Math.random()*taskObject.length)].title
        quest.goalAction = specificGoalAction[Math.floor(Math.random()*specificGoalAction.length)].title
        quest.goalObject = specificGoalObject[Math.floor(Math.random()*specificGoalObject.length)].title
        quest.antagonistObject = obstacleObject[Math.floor(Math.random()*obstacleObject.length)].title
        quest.antagonistMotivation = obstacleObjectsMotivation[Math.floor(Math.random()*obstacleObjectsMotivation.length)].title
        setQuestText(quest)
        setLoadQuest(true)
        // console.log(questText)
    }


    return (

        <div>
            <p>This is the Main</p>
            <p>This is a test randomised Quest:</p>
            {loadQuest && (
                <div>
                    <p>
                        {questText.mainLocation}, where {questText.inhabitantsDescription} {questText.inhabitants} {questText.culture} {questText.cultureReason}, 
                        you find yourself in a {questText.pcLocationAdj} {questText.pcLocation}, {questText.pcMood1} and {questText.pcMood2}. 
                        You must {questText.questAction} the {questText.questObject} in order to {questText.goalAction} {questText.goalObject}.
                        However, the {questText.antagonistObject} would be opposed to the {questText.questObject} {questText.antagonistMotivation}!
                    </p>
                </div>
            )}
            {loadingAPI ? (<p>Loading...</p>) : (<p onClick={(randomiseQuest)}>{loadQuest ? `That sucks... do it again!`: `Generate Me A Quest!`}</p>)}
            {/* <p onClick={(randomiseQuest)}>That sucks, try again!</p> */}
        </div>
    )
}