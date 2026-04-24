// Data for steps list for how to report on social media platform 

// Discord Report images
import discordStep1 from '../../assets/rpp-images/discord-steps/discord-report1.jpeg'
import discordStep2 from '../../assets/rpp-images/discord-steps/discord-report2.jpeg'
import discordStep3 from '../../assets/rpp-images/discord-steps/discord-report3.jpeg'
import discordStep4 from '../../assets/rpp-images/discord-steps/discord-report4.png'
import discordStep5 from '../../assets/rpp-images/discord-steps/discord-report5.jpeg'

const stepsData = { 
    Instagram: {
        icon: "📸",
        video: "https://www.youtube.com/embed/7ZdDVGpSJT0",
        steps: [
        {text: "First, go to the account you want to report.", },
        {text: "Tap the three dots in top right corner."},
        {text: "There is a tab with a red report button, press that"},
        {text: "There will be a tab that follows up with 'What do you want to report'"},
        {text: "Press any of the options that fit the description"}
        ]
    },

    Snapchat:  {
        icon: "📸",
        video: "https://www.youtube.com/embed/puKpLESKLHk?si=w3kReFyQi20XFfIr",
        steps: [
        {text: "First, go to the account you want to report.", /* image */},
        {text: "Tap the three dots in top right corner.", /* image */},
        {text: "There is a tab with a red report button, press that"},
        {text: "There will be a tab that follows up with 'What do you want to report'"},
        {text: "Press any of the options that fit the description"}
        ]
    },

    Discord:  {
        icon: "📸",
        video: "https://www.youtube.com/embed/zPwpHt5P38c?si=ZHNCJX8LXvKOIkWZ",
        steps: [
        {text: "Select the user you want to report.", image: discordStep1},
        {text: "Press the user and the 3 dots (...) will appear on the top right corner of the user profile.", image: discordStep2},
        {text: "It will then redirect you to a different page where you will report the user, after reading the text, press 'Next'", image: discordStep3},
        {text: "The following screen will take you to another page, for your reasons to report someone.", image: discordStep4},
        {text: "Press any of the applicable options and press 'Next' again."},
        {text: "A report summary will then appear, outlining the reasons to the report. You can then proceed to report them, finalizing the report.", image: discordStep5},
        ]
    },

    X:  {
        icon: "📸",
        video: "https://www.youtube.com/embed/uCxKRhJkzbE?si=dxFYayt24n-dzdv0",
        steps: [
        {text: "First, go to the account you want to report.", /* image */},
        {text: "Tap the three dots in top right corner.", /* image */},
        {text: "There is a tab with a red report button, press that"},
        {text: "There will be a tab that follows up with 'What do you want to report'"},
        {text: "Press any of the options that fit the description"}
        ]
    },
}

function StepsList({platform}) {
    if (!platform) return <p>Select a platform to see how to report.</p>

    const steps = stepsData[platform].steps 

    return (
        <div>
            <h2>How to Report on {platform}</h2>
                {steps.map((step, index) => ( 
                    <div key={index}>
                    <p>{step.text}</p>
                    {step.image && <img src={step.image} alt={`Step ${index + 1}`} className="step-image"/>}
                    </div>
                ))}

                {stepsData[platform].video && (
                    <iframe
                        width="560"
                        height="315"
                        src={stepsData[platform].video}
                        title="How to report video"
                        allowFullScreen
                        />
                )}

        </div>
    )
}

export default StepsList
