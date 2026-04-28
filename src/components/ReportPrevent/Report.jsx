import './Report.css'

import { useState } from 'react'


function ReportForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reportType: '',
        platform: '',
        description: ''
    })

    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('https://formspree.io/f/mgorjyjq', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(e.target)
            })
            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', reportType: '', platform: '', description: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="report-form">
            <p>If you, or someone you know is getting cyberbullied. Fill out this report form & let us know.</p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Why are you reporting this?</label>
                    <div className="radio-group">
                        <input type="radio" id="victim" name="reportType" value="victim" onChange={handleChange} />
                        <label htmlFor="victim">I am a victim of Cyberbullying</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" id="witness" name="reportType" value="witness" onChange={handleChange} />
                        <label htmlFor="witness">I know someone who is being cyberbullied</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="platform">Platform where it occurred</label>
                    <select id="platform" name="platform" value={formData.platform} onChange={handleChange}>
                        <option value="">Select a platform</option>
                        <option value="instagram">Instagram</option>
                        <option value="snapchat">Snapchat</option>
                        <option value="discord">Discord</option>
                        <option value="x">X (Twitter)</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Explain what happened. . ." />
                </div>

                <button type="submit">Submit Report</button>

                {status === 'success' && <p className="form-success">Your report has been submitted, thank you.</p>}
                {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}

            </form>
        </div>
    )
}

export default ReportForm
