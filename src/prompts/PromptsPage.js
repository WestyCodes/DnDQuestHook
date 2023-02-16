import { useState } from "react"
import { post } from '../apiFunctions/apiFunctions.js'

export default function PromptsPage() {
    
    
    const [broadLocationsForm, setBroadLocationsForm] = useState("")
    const [racesForm, setRacesForm] = useState("")
    const [raceDescriptionForm, setRaceDescriptionForm] = useState("")
    const [cultureActivityForm, setCultureActivityForm] = useState("")
    const [activityReasonForm, setActivityReasonForm] = useState("")
    const [specificLocationAdjectiveForm, setSpecificLocationAdjectiveForm] = useState("")
    const [specificLocationForm, setSpecificLocationForm] = useState("")
    const [specificCharacterStateForm, setSpecificCharacterStateForm] = useState("")
    const [taskActionForm, setTaskActionForm] = useState("")
    const [taskObjectForm, setTaskObject] = useState("")
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
        console.log("test test", broadLocationsForm)
        console.log("Form Submitted")
        const data = {title: broadLocationsForm}
        post("broadLocations", data)
        
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

            {/* <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="raceDescription">General Emotion: </label>
                <input id="raceDescription" name="raceDescription" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="cultureActivity">Culture Activity: </label>
                <input id="cultureActivity" name="cultureActivity" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="activityReason">Activity Reason: </label>
                <input id="activityReason" name="activityReason" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>


            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="specificLocationAdjective">Descriptive Word for Location: </label>
                <input id="specificLocationAdjective" name="specificLocationAdjective" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

            <label htmlFor="specificLocation">A more specific Location: </label>
            <input id="specificLocation" name="specificLocation" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="specificCharacterState">Characters emotional/physical state: </label>
                <input id="specificCharacterState" name="specificCharacterState" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="taskAction">What is your Quests Action?: </label>
                <input id="taskAction" name="taskAction" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="taskObject">What is the Object of your Quest?: </label>
                <input id="taskObject" name="taskObject" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="specificGoalAction">Verb for your overall Goal: </label>
                <input id="specificGoalAction" name="specificGoalAction" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="specificGoalObject">Object of your overall Goal: </label>
                <input id="specificGoalObject" name="specificGoalObject" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="obstacleObject">Who is against your goal?: </label>
                <input id="obstacleObject" name="obstacleObject" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form>

            <form className="form-stack contact-form" onSubmit={handleSubmit}>

                <label htmlFor="obstacleObjectMotivation">What is this villains motivation?: </label>
                <input id="obstacleObjectMotivation" name="obstacleObjectMotivation" type="text" required onChange={handleChange}/>
                <div className="actions-section">
                    <button className="button blue" type="submit">
                    Submit
                    </button>
                </div>
            </form> */}
        </div>
    )
}