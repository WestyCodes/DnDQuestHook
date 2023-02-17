import { useState, useEffect } from 'react'
import { getPrompts } from '../apiFunctions/apiFunctions'
import './main.css'

export default function Main( {setNumberOfQuests} ) {
    const [locationName, setLocationName] = useState([])
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
        const locName = await getPrompts("locationName")
        setLocationName(locName)
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
        quest.mainName = locationName[Math.floor(Math.random()*locationName.length)].title
        quest.mainLocation = broadLocations[Math.floor(Math.random()*broadLocations.length)].title
        quest.inhabitantsDescription = raceDescription[Math.floor(Math.random()*raceDescription.length)].title
        quest.inhabitants = races[Math.floor(Math.random()*races.length)].title
        quest.culture = cultureActivity[Math.floor(Math.random()*cultureActivity.length)].title
        quest.cultureReason = activityReason[Math.floor(Math.random()*activityReason.length)].title
        quest.pcLocationAdj = specificLocationAdjective[Math.floor(Math.random()*specificLocationAdjective.length)].title
        quest.pcLocation = specificLocation[Math.floor(Math.random()*specificLocation.length)].title
        quest.pcMood1 = specificCharacterState[Math.floor(Math.random()*specificCharacterState.length)].title
        quest.pcMood2 = specificCharacterState[Math.floor(Math.random()*specificCharacterState.length)].title
        while(quest.pcMood1 === quest.pcMood2){
            quest.pcMood2 = specificCharacterState[Math.floor(Math.random()*specificCharacterState.length)].title
        }
        quest.questAction = taskAction[Math.floor(Math.random()*taskAction.length)].title
        quest.questObject = taskObject[Math.floor(Math.random()*taskObject.length)].title
        quest.goalAction = specificGoalAction[Math.floor(Math.random()*specificGoalAction.length)].title
        quest.goalObject = specificGoalObject[Math.floor(Math.random()*specificGoalObject.length)].title
        quest.antagonistObject = obstacleObject[Math.floor(Math.random()*obstacleObject.length)].title
        quest.antagonistMotivation = obstacleObjectsMotivation[Math.floor(Math.random()*obstacleObjectsMotivation.length)].title

        if(quest.mainLocation === "Cliffs" || quest.mainLocation === "Shores" || quest.mainLocation === "Sea" || quest.mainLocation === "Ocean" || quest.mainLocation === "Plains" || quest.mainLocation === "Island") {
            quest.startingPhrase = "On the"
        } else {
            quest.startingPhrase = "In the"
        }

        setQuestText(quest)
        setLoadQuest(true)
    }

    const howManyQuests = () => {
        const res = locationName.length * broadLocations.length * raceDescription.length * races.length * cultureActivity.length * activityReason.length * specificLocationAdjective.length * specificLocation.length * specificCharacterState.length * (specificCharacterState.length - 1) * taskAction.length * taskObject.length * specificGoalAction.length * specificGoalObject.length * obstacleObject.length * obstacleObjectsMotivation.length
        setNumberOfQuests(res)
    }
    howManyQuests()

    return (
        <div className='mainDiv'>
            <div className='mainWrapper'>
                <div>
                    <h2>TTRPG Random Quest Prompt</h2>
                </div>
                {loadQuest ? (
                    <div className='questTextWrap'>
                        <p>
                            {questText.startingPhrase} {questText.mainName} {questText.mainLocation}, where {questText.inhabitantsDescription} {questText.inhabitants} {questText.culture} {questText.cultureReason}, 
                            you find yourself in {questText.pcLocationAdj} {questText.pcLocation}, {questText.pcMood1} and {questText.pcMood2}. 
                            You must {questText.questAction} the {questText.questObject} in order to {questText.goalAction} {questText.goalObject}.
                            However, the {questText.antagonistObject} would object to the {questText.questObject} {questText.antagonistMotivation}!
                        </p>
                    </div>
                ) : <p>Get some <span className='italic'>inspiration</span> for your next adventure!</p>}
                {loadingAPI ? (<p className='loading'>Loading...</p>) : (<button className="mainButton" onClick={(randomiseQuest)}>{loadQuest ? `${questText.inhabitants} are DUMB! Do it again!`: `Generate Me A Quest!`}</button>)}
            </div>
        </div>
    )
}