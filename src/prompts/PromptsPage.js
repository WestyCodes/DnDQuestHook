import { useState } from "react"
import { post } from '../apiFunctions/apiFunctions.js'

export default function PromptsPage() {
    
    
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
        <div>
            <h2>Add some prompts</h2>
            <form className="form-stack contact-form" onSubmit={handleSubmitBL}>
                <label htmlFor="broadLocations">A Broad Location: </label>
                <input id="broadLocations" name="broadLocations" type="text" required  onChange={handleChangeBL}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitRD}>

                <label htmlFor="raceDescription">General Emotion: </label>
                <input id="raceDescription" name="raceDescription" type="text" required onChange={handleChangeRD}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitCA}>

                <label htmlFor="cultureActivity">Culture Activity: </label>
                <input id="cultureActivity" name="cultureActivity" type="text" required onChange={handleChangeCA}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitAR}>

                <label htmlFor="activityReason">Activity Reason: </label>
                <input id="activityReason" name="activityReason" type="text" required onChange={handleChangeAR}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>


            <form className="form-stack contact-form" onSubmit={handleSubmitSLA}>

                <label htmlFor="specificLocationAdjective">Descriptive Word for Location: </label>
                <input id="specificLocationAdjective" name="specificLocationAdjective" type="text" required onChange={handleChangeSLA}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitSL}>

            <label htmlFor="specificLocation">A more specific Location: </label>
            <input id="specificLocation" name="specificLocation" type="text" required onChange={handleChangeSL}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitSCS}>

                <label htmlFor="specificCharacterState">Characters emotional/physical state: </label>
                <input id="specificCharacterState" name="specificCharacterState" type="text" required onChange={handleChangeSCS}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitTA}>

                <label htmlFor="taskAction">What is your Quests Action?: </label>
                <input id="taskAction" name="taskAction" type="text" required onChange={handleChangeTA}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitTO}>

                <label htmlFor="taskObject">What is the Object of your Quest?: </label>
                <input id="taskObject" name="taskObject" type="text" required onChange={handleChangeTO}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitSGA}>

                <label htmlFor="specificGoalAction">Verb for your overall Goal: </label>
                <input id="specificGoalAction" name="specificGoalAction" type="text" required onChange={handleChangeSGA}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitSGO}>

                <label htmlFor="specificGoalObject">Object of your overall Goal: </label>
                <input id="specificGoalObject" name="specificGoalObject" type="text" required onChange={handleChangeSGO}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitOO}>

                <label htmlFor="obstacleObject">Who is against your goal?: </label>
                <input id="obstacleObject" name="obstacleObject" type="text" required onChange={handleChangeOO}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmitOOM}>

                <label htmlFor="obstacleObjectMotivation">What is this villains motivation?: </label>
                <input id="obstacleObjectMotivation" name="obstacleObjectMotivation" type="text" required onChange={handleChangeOOM}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}