import { useState } from "react"
import { post } from '../apiFunctions/apiFunctions.js'
import './promptspage.css'

export default function PromptsPage() {
    
    const [locationNameForm, setLocationNameForm] = useState("")
    const [broadLocationsForm, setBroadLocationsForm] = useState("")
    const [raceDescriptionForm, setRaceDescriptionForm] = useState("")
    const [cultureActivityForm, setCultureActivityForm] = useState("")
    const [activityReasonForm, setActivityReasonForm] = useState("")
    const [specificLocationAdjectiveForm, setSpecificLocationAdjectiveForm] = useState("")
    const [specificLocationForm, setSpecificLocationForm] = useState("")
    const [specificCharacterStateForm, setSpecificCharacterStateForm] = useState("")
    const [taskActionForm, setTaskActionForm] = useState("")
    const [taskObjectForm, setTaskObjectForm] = useState("")
    const [specificGoalActionForm, setSpecificGoalActionForm] = useState("")
    const [specificGoalObjectForm, setSpecificGoalObjectForm] = useState("")
    const [obstacleObjectForm, setObstacleObjectForm] = useState("")
    const [obstacleObjectsMotivationForm, setObstacleObjectsMotivationForm] = useState("")

    const formState = [ 
        {
            state: locationNameForm,
            setState: setLocationNameForm,
            path: "locationName",
            title: "A Fantastical Name",
            examples: "Doomspire, Fresh Haven"
        },
        {
            state: broadLocationsForm,
            setState: setBroadLocationsForm,
            path: "broadLocations",
            title: "A Broad Location",
            examples: "Cliffs, Deserts"
        },
        {
            state: raceDescriptionForm,
            setState: setRaceDescriptionForm,
            path: "raceDescription",
            title: "General Emotion",
            examples: "dismissive, jovial"
        },
        {
            state: cultureActivityForm,
            setState: setCultureActivityForm,
            path: "cultureActivity",
            title: "A Culture Activity",
            examples: "pray, hunt"
        },
        {
            state: activityReasonForm,
            setState: setActivityReasonForm,
            path: "activityReason",
            title: "Culture Activity Reason",
            examples: "for sport, to quell the rage of their gods"
        },
        {
            state: specificLocationAdjectiveForm,
            setState: setSpecificLocationAdjectiveForm,
            path: "specificLocationAdjective",
            title: "Descriptive Word for Location",
            examples: "a dank, an opulent"
        },
        {
            state: specificLocationForm,
            setState: setSpecificLocationForm,
            path: "specificLocation",
            title: "A More Specific Location",
            examples: "cellar, pantry"
        },
        {
            state: specificCharacterStateForm,
            setState: setSpecificCharacterStateForm,
            path: "specificCharacterState",
            title: "What state is your Character in",
            examples: "proud, hungover"
        },
        {
            state: taskActionForm,
            setState: setTaskActionForm,
            path: "taskAction",
            title: "What is your Quest Action",
            examples: "find, save"
        },
        {
            state: taskObjectForm,
            setState: setTaskObjectForm,
            path: "taskObject",
            title: "What is the Object of your Quest",
            examples: "King of Frogs, Gemmed Crossbow"
        },
        {
            state: specificGoalActionForm,
            setState: setSpecificGoalActionForm,
            path: "specificGoalAction",
            title: "A Verb for your Overall Goal",
            examples: "access, appease"
        },
        {
            state: specificGoalObjectForm,
            setState: setSpecificGoalObjectForm,
            path: "specificGoalObject",
            title: "The Object of your Overall Goal",
            examples: "The Great Library of Alexandria, your Father"
        },
        {
            state: obstacleObjectForm,
            setState: setObstacleObjectForm,
            path: "obstacleObject",
            title: "Who Opposes your Quest",
            examples: "Thieves guild, rightful heir"
        },
        {
            state: obstacleObjectsMotivationForm,
            setState: setObstacleObjectsMotivationForm,
            path: "obstacleObjectsMotivation",
            title: "The Motivation of this Villain",
            examples: "ever being found, revealing their plan"
        }
    ]

    return (
        <div className="promptsMain">

            <div className="promptsWrap">
                <h2>Add Some Prompts</h2>

                {formState.map((promptsData, index) => {
                    return (
                        <div key={index} className="formDiv">
                            <form className="formWrap" onSubmit={(event) => {
                                event.preventDefault()
                                const data = {title: promptsData.state}
                                post(promptsData.path, data)
                                event.target.reset()
                            }}>
                                <div className="inputWrap">
                                    <label htmlFor={promptsData.path}>{promptsData.title}: </label>
                                    <input id={promptsData.path} name={promptsData.path} type="text" required  onChange={(event) => {
                                        const value = event.target.value;
                                        promptsData.setState(value)
                                    }}/>
                                    <p className="examples">E.g. {promptsData.examples}</p>
                                </div>
                                <div className="buttonWrap">
                                    <button className="submitPromptButton" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}