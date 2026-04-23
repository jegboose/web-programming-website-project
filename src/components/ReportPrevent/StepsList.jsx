// Data for steps list for how to report on social media platform 

const stepsData = { 
    Instagram: {
        icon: "📸",
        video: "https://www.youtube.com/embed/7ZdDVGpSJT0",
        steps: [
        {text: "First, go to the account you want to report.", /* image */},
        {text: "Tap the three dots in top right corner.", /* image */},
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
        {text: "First, go to the account you want to report.", /* image */},
        {text: "Tap the three dots in top right corner.", /* image */},
        {text: "There is a tab with a red report button, press that"},
        {text: "There will be a tab that follows up with 'What do you want to report'"},
        {text: "Press any of the options that fit the description"}
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
