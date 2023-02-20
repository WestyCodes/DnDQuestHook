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
      
    
    const handleChangeLN = (event) => {
        const value = event.target.value;
        setLocationNameForm(value)
    }

    const handleSubmitLN = (event) => {
        event.preventDefault()
        const data = {title: locationNameForm}
        post("locationName", data)
        event.target.reset()
    }

    const handleChangeBL = (event) => {
        const value = event.target.value;
        setBroadLocationsForm(value)
    }

    const handleSubmitBL = (event) => {
        event.preventDefault()
        const data = {title: broadLocationsForm}
        post("broadLocations", data)
        event.target.reset()
    }

    const handleChangeRD = (event) => {
        const value = event.target.value;
        setRaceDescriptionForm(value)
    }

    const handleSubmitRD = (event) => {
        event.preventDefault()
        const data = {title: raceDescriptionForm}
        post("raceDescription", data)
        event.target.reset()
    }

    const handleChangeCA = (event) => {
        const value = event.target.value;
        setCultureActivityForm(value)
    }

    const handleSubmitCA = (event) => {
        event.preventDefault()
        const data = {title: cultureActivityForm}
        post("cultureActivity", data)
        event.target.reset()
    }

    const handleChangeAR = (event) => {
        const value = event.target.value;
        setActivityReasonForm(value)
    }

    const handleSubmitAR = (event) => {
        event.preventDefault()
        const data = {title: activityReasonForm}
        post("activityReason", data)
        event.target.reset()
    }

    const handleChangeSLA = (event) => {
        const value = event.target.value;
        setSpecificLocationAdjectiveForm(value)
    }

    const handleSubmitSLA = (event) => {
        event.preventDefault()
        const data = {title: specificLocationAdjectiveForm}
        post("specificLocationAdjective", data)
        event.target.reset()
    }

    const handleChangeSL = (event) => {
        const value = event.target.value;
        setSpecificLocationForm(value)
    }

    const handleSubmitSL = (event) => {
        event.preventDefault()
        const data = {title: specificLocationForm}
        post("specificLocation", data)
        event.target.reset()
    }

    const handleChangeSCS = (event) => {
        const value = event.target.value;
        setSpecificCharacterStateForm(value)
    }

    const handleSubmitSCS = (event) => {
        event.preventDefault()
        const data = {title: specificCharacterStateForm}
        post("specificCharacterState", data)
        event.target.reset()
    }

    const handleChangeTA = (event) => {
        const value = event.target.value;
        setTaskActionForm(value)
    }

    const handleSubmitTA = (event) => {
        event.preventDefault()
        const data = {title: taskActionForm}
        post("taskAction", data)
        event.target.reset()
    }

    const handleChangeTO = (event) => {
        const value = event.target.value;
        setTaskObjectForm(value)
    }

    const handleSubmitTO = (event) => {
        event.preventDefault()
        const data = {title: taskObjectForm}
        post("taskObject", data)
        event.target.reset()
    }

    const handleChangeSGA = (event) => {
        const value = event.target.value;
        setSpecificGoalActionForm(value)
    }

    const handleSubmitSGA = (event) => {
        event.preventDefault()
        const data = {title: specificGoalActionForm}
        post("specificGoalAction", data)
        event.target.reset()
    }

    const handleChangeSGO = (event) => {
        const value = event.target.value;
        setSpecificGoalObjectForm(value)
    }

    const handleSubmitSGO = (event) => {
        event.preventDefault()
        const data = {title: specificGoalObjectForm}
        post("specificGoalObject", data)
        event.target.reset()
    }

    const handleChangeOO = (event) => {
        const value = event.target.value;
        setObstacleObjectForm(value)
    }

    const handleSubmitOO = (event) => {
        event.preventDefault()
        const data = {title: obstacleObjectForm}
        post("obstacleObject", data)
        event.target.reset()
    }

    const handleChangeOOM = (event) => {
        const value = event.target.value;
        setObstacleObjectsMotivationForm(value)
    }

    const handleSubmitOOM = (event) => {
        event.preventDefault()
        const data = {title: obstacleObjectsMotivationForm}
        post("obstacleObjectsMotivation", data)
        event.target.reset()
    }

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

                {/* <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitLN}>
                        <div className="inputWrap">
                            <label htmlFor="locationName">A Fantastical Name: </label>
                            <input id="locationName" name="locationName" type="text" required  onChange={handleChangeLN}/>
                            <p className="examples">E.g. Doomspire, Fresh Haven</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitBL}>
                        <div className="inputWrap">
                            <label htmlFor="broadLocations">A Broad Location: </label>
                            <input id="broadLocations" name="broadLocations" type="text" required  onChange={handleChangeBL}/>
                            <p className="examples">E.g. Cliffs, Deserts</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitRD}>
                        <div className="inputWrap">
                            <label htmlFor="raceDescription">General Emotion: </label>
                            <input id="raceDescription" name="raceDescription" type="text" required onChange={handleChangeRD}/>
                            <p className="examples">E.g. dismissive, angry</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitCA}>
                        <div className="inputWrap">
                            <label htmlFor="cultureActivity">Culture Activity: </label>
                            <input id="cultureActivity" name="cultureActivity" type="text" required onChange={handleChangeCA}/>
                            <p className="examples">E.g. pray, hunt</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                    
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitAR}>
                        <div className="inputWrap">
                            <label htmlFor="activityReason">Activity Reason: </label>
                            <input id="activityReason" name="activityReason" type="text" required onChange={handleChangeAR}/>
                            <p className="examples">E.g. for sport, to quell the rage of their gods</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitSLA}>
                        <div className="inputWrap">
                            <label htmlFor="specificLocationAdjective">Descriptive Word for Location: </label>
                            <input id="specificLocationAdjective" name="specificLocationAdjective" type="text" required onChange={handleChangeSLA}/>
                            <p className="examples">E.g. a dank, an opulent</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitSL}>
                        <div className="inputWrap">
                            <label htmlFor="specificLocation">A more specific Location: </label>
                            <input id="specificLocation" name="specificLocation" type="text" required onChange={handleChangeSL}/>
                            <p className="examples">E.g. cellar, tavern</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitSCS}>
                        <div className="inputWrap">
                            <label htmlFor="specificCharacterState">Characters emotional/physical state: </label>
                            <input id="specificCharacterState" name="specificCharacterState" type="text" required onChange={handleChangeSCS}/>
                            <p className="examples">E.g. hungover, weak</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitTA}>
                        <div className="inputWrap">
                            <label htmlFor="taskAction">What is your Quests Action?: </label>
                            <input id="taskAction" name="taskAction" type="text" required onChange={handleChangeTA}/>
                            <p className="examples">E.g. find, save</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form> 
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitTO}>
                        <div className="inputWrap">
                            <label htmlFor="taskObject">What is the Object of your Quest?: </label>
                            <input id="taskObject" name="taskObject" type="text" required onChange={handleChangeTO}/>
                            <p className="examples">E.g. Mysterious Crate, King of Frogs</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitSGA}>
                        <div className="inputWrap">
                            <label htmlFor="specificGoalAction">Verb for your overall Goal: </label>
                            <input id="specificGoalAction" name="specificGoalAction" type="text" required onChange={handleChangeSGA}/>
                            <p className="examples">E.g. access, appease</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitSGO}>
                        <div className="inputWrap">
                            <label htmlFor="specificGoalObject">Object of your overall Goal: </label>
                            <input id="specificGoalObject" name="specificGoalObject" type="text" required onChange={handleChangeSGO}/>
                            <p className="examples">E.g. the Great Library of Alexandria, your father</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitOO}>
                        <div className="inputWrap">
                            <label htmlFor="obstacleObject">Who is against your goal?: </label>
                            <input id="obstacleObject" name="obstacleObject" type="text" required onChange={handleChangeOO}/>
                            <p className="examples">E.g. Thieve's Guild, rightful heir</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="formDiv">
                    <form className="formWrap" onSubmit={handleSubmitOOM}>
                        <div className="inputWrap">
                            <label htmlFor="obstacleObjectMotivation">What is this villains motivation?: </label>
                            <input id="obstacleObjectMotivation" name="obstacleObjectMotivation" type="text" required onChange={handleChangeOOM}/>
                            <p className="examples">E.g. ever being found, revealing their plan</p>
                        </div>
                        <div className="buttonWrap">
                            <button className="submitPromptButton" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    )
}