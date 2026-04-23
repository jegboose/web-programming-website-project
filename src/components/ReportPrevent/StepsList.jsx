const stepsData = { 
    Instagram: {
        icon: "📸",
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
        </div>
    )
}

export default StepsList
