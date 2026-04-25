const tips = [
    {title: "Tell someone you trust", description: "If you feel unsafe when talking to someone, tell a trusted adult or friend if someone is harassing you or something is bothering you. Don't be afraid to reach out."},
    {title: "Private your accounts", description: "Privating your accounts and limiting followers to close family and friends can prevent online bullying or harassment from occuring. Never give out your information if you feel uncomfortable to share it with other people."},
    {title: "Never respond, block the user and save evidence", description: "If you are getting constantly getting harassed and bullied, you can ignore and block the user, but if it keeps getting more and more persistent, save the evidence of bullying and send it to the proper authorities."}
]

function PreventList() {
    return (
        <div className="prevention-grid">
            {tips.map((tip, index) => (
                <div key={index} className="prevention-card">
                    <p className="prevent-title">{tip.title}</p>
                    <p className="prevent-desc">{tip.description}</p>
                </div>
        ))}
        </div>
    )
}

export default PreventList