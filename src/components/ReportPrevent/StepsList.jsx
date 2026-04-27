// Data for steps list for how to report on social media platform 

// import banner
import stopBullyingBanner from '../../assets/rpp-images/stop-cyberbullyin.png'

// Instagram Report images
import instagramStep1 from '../../assets/rpp-images/instagram-steps/instagram-report1.jpeg'
import instagramStep2 from '../../assets/rpp-images/instagram-steps/instagram-report2.jpeg'
import instagramStep3 from '../../assets/rpp-images/instagram-steps/instagram-report3.jpeg'
import instagramStep4 from '../../assets/rpp-images/instagram-steps/instagram-report4.jpeg'
import instagramStep5 from '../../assets/rpp-images/instagram-steps/instagram-report5.jpeg'
import instagramStep6 from '../../assets/rpp-images/instagram-steps/instagram-report6.jpeg'

// Snapchat Report Images
import snapchatStep1 from '../../assets/rpp-images/snapchat-steps/snapchat-report2.jpeg'
import snapchatStep2 from '../../assets/rpp-images/snapchat-steps/snapchat-report1.png'
import snapchatStep3 from '../../assets/rpp-images/snapchat-steps/snapchat-report3.png'
import snapchatStep4 from '../../assets/rpp-images/snapchat-steps/snapchat-report4.png'
import snapchatStep5 from '../../assets/rpp-images/snapchat-steps/snapchat-report5.png'
import snapchatStep6 from '../../assets/rpp-images/snapchat-steps/snapchat-report6.png'
import snapchatStep7 from '../../assets/rpp-images/snapchat-steps/snapchat-report7.png'
import snapchatStep8 from '../../assets/rpp-images/snapchat-steps/snapchat-report8.png'

// Discord Report images
import discordStep1 from '../../assets/rpp-images/discord-steps/discord-report1.jpeg'
import discordStep2 from '../../assets/rpp-images/discord-steps/discord-report2.jpeg'
import discordStep3 from '../../assets/rpp-images/discord-steps/discord-report3.jpeg'
import discordStep4 from '../../assets/rpp-images/discord-steps/discord-report4.png'
import discordStep5 from '../../assets/rpp-images/discord-steps/discord-report5.jpeg'
import discordStep6 from '../../assets/rpp-images/discord-steps/discord-report6.jpeg'

// X Report images
import xStep1 from '../../assets/rpp-images/x-steps/x-report1.jpeg'
import xStep2 from '../../assets/rpp-images/x-steps/x-report2.jpeg'
import xStep3 from '../../assets/rpp-images/x-steps/x-report3.png'
import xStep4 from '../../assets/rpp-images/x-steps/x-report4.png'


const stepsData = { 
    Instagram: {
        video: "https://www.youtube.com/embed/7ZdDVGpSJT0",
        steps: [
        {text: "Select the user you want to report.", image: instagramStep1},
        {text: "Then press the 3 dots (...) on the top right corner of their account. Press the red report button.", image: instagramStep2},
        {text: "A tab will open up, giving you options on what you want to report the user for doing. Press what options are applicable for you.", image: instagramStep3},
        {text: "Then, it will give you more detailed options, again press what is applicable.", image: instagramStep4},
        {text: "After submitting the details of the report. A summary will follow up to review what you reported them for. Hit submit after reading the summary.", image: instagramStep5},
        {text: "A successful report page will appear, also giving you the option of block and restricting the users account from interacting with you.", image: instagramStep6}
        ]
    },

    Snapchat:  {
        video: "https://www.youtube.com/embed/puKpLESKLHk?si=w3kReFyQi20XFfIr",
        steps: [
        {text: "Select the user you want to report.", image: snapchatStep1},
        {text: "Press the 3 dots (...) on the top right of the users account and press 'Manage Friendship'", image: snapchatStep2},
        {text: "This will give you the option to report, block or remove the user from your friends list.", image: snapchatStep3},
        {text: "After pressing report, Snapchat will ask you why you are reporting the user. Pressing either options will send you to another tab with detailed options to choose from.", image: snapchatStep4},
        {text: "Depending on the option, there will be more detailed sub-options depending on what you have chosen. You may choose whichever one is applicable in your case.", image: snapchatStep5},
        {text: "Snapchat will then ask you for a description of what happened, as well as a request to check available chats between you and the user to review the report. You may opt-in or opt-out of that as well.", image: snapchatStep7},
        {text: "After that, there will be a prompt that has successfully submitted the report. There are also other options that will allow you to view your reports, get support tools and to block the reported user as well.", image: snapchatStep8}
        ]
    },

    Discord:  {
        video: "https://www.youtube.com/embed/zPwpHt5P38c?si=ZHNCJX8LXvKOIkWZ",
        steps: [
        {text: "Select the user you want to report.", image: discordStep6},
        {text: "Press the user and the 3 dots (...) will appear on the top right corner of the user profile.", image: discordStep1},
        {text: "It will then redirect you to a different page where you will report the user, after reading the text, press 'Next'", image: discordStep2},
        {text: "The following screen will take you to another page, for your reasons to report someone.", image: discordStep3},
        {text: "Press any of the applicable options and press 'Next' again.", image: discordStep4},
        {text: "A report summary will then appear, outlining the reasons to the report. You can then proceed to report them, finalizing the report.", image: discordStep5},
        ]
    },

    X:  {
        video: "https://www.youtube.com/embed/uCxKRhJkzbE?si=dxFYayt24n-dzdv0",
        steps: [
        {text: "Select the user you want to report.", image: xStep1},
        {text: "On the account, press the 3 dots (...) on the top right of the users account", image: xStep2},
        {text: "A dropdown will appear where it will give you the option to report the user.", image: xStep3},
        {text: "Press any of the given options that apply to you."},
        {text: "After the report, a successful report prompt will appear, giving you the options to block and mute the account.", image: xStep4}
        ]
    },
}

function StepsList({platform}) {
    if (!platform) return (
        <div className="landing-content">
            <h3>Prevent Cyberbullying!</h3>
            <img src={stopBullyingBanner} alt="StopCyberbullying" className="cyberbullying-banner"/>
            <h2>Around 67% of social media users do not belive that the platforms they are using are doing enough to fight and prevent cyberbullying</h2>
            <p>Source: <a href="https://sqmagazine.co.uk/cyberbullying-statistics/" target="_blank" rel="noopener noreferrer">SQ Magazine</a></p>
            <p>Here is a showcase of different ways to report and prevent online bullying and harassment on social media.</p>
            
            <div className="action-calls">
                <p>Select a provided social media platform from the sidebar, to see how to report online bullying and harassment.</p>
                <p>Click on "How to Prevent" to learn how to stay safe online and Prevent online bullying.</p>
            </div>
        </div>
    )

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
                    <div>
                <h3>Video Tutorial</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={stepsData[platform].video}
                        title="How to report video"
                        allowFullScreen
                        />
                    </div>
                )}

        </div>
    )
}

export default StepsList
