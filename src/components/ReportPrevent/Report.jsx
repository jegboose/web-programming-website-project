import './Report.css'
import { useForm } from '@formspree/react'

function ReportForm() {
    const [state, handleSubmit] = useForm('mgorjyjq')

    if (state.succeeded) {
        return (
            <div className="report-form">
                <p className="form-success">Your report has been submitted, thank you.</p>
            </div>
        )
    }

    return (
        <div className="report-form">
            <p>If you, or someone you know is getting cyberbullied. Fill out this report form & let us know.</p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Why are you reporting this?</label>
                    <div className="radio-group">
                        <input type="radio" id="victim" name="reportType" value="victim" />
                        <label htmlFor="victim">I am a victim of Cyberbullying</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" id="witness" name="reportType" value="witness" />
                        <label htmlFor="witness">I know someone who is being cyberbullied</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="platform">Platform where it occurred</label>
                    <select id="platform" name="platform">
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
                    <input type="text" id="name" name="name" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Explain what happened. . ." />
                </div>

                <button type="submit" disabled={state.submitting}>Submit Report</button>

                {state.errors && state.errors.length > 0 && (
                    <p className="form-error">Something went wrong. Please try again.</p>
                )}

            </form>
        </div>
    )
}

export default ReportForm