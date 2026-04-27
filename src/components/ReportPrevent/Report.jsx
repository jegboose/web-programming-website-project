import './Report.css'

import { useState } from 'react'


function ReportForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted: ", formData)
        alert("Your report has been submitted, thank you.")
    } 

    return (
        <div className="report-form">
            <p>If you, or someone you know is getting cyberbullied. Fill out this report form & let us know.</p>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Why are you Reporting this?</label>
                <div className="radio-group">
                    <input type="radio" name="reportType" value="victim" onChange={handleChange} />
                    <label>I am a victim of Cyberbullying</label>
                </div>
                <div className="radio-group">
                    <input type="radio" name="reportType" value="witness" onChange={handleChange} />
                    <label>I know someone who is being cyberbullied</label>
                </div>
            </div>

                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"/>
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email"/>
                </div>

                <div className="form-group">
                    <label>Description: </label>
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Explain what happened. . ."/>
                </div>

                <button type="submit">Submit Report</button> { }
            </form>
        </div>
    )
}

export default ReportForm