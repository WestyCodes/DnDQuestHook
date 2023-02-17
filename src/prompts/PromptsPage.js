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

                <div className="formDiv">
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
                            <p className="examples">E.g. Mysterious Create, King of Frogs</p>
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
                </div>
            </div>
        </div>
    )
}