const tips = [
    {title: "Tell someone you trust", 
     description: "If you feel unsafe when talking to someone, tell a trusted adult or friend if someone is harassing you or something is bothering you. Don't be afraid to reach out.", 
     video:"https://www.youtube.com/embed/jDPtuhS75ZQ?si=h5slgqIZTy4AlzjM"},
    {title: "Private your accounts", 
     description: "Privating your accounts and limiting followers to close family and friends can prevent online bullying or harassment from occuring. Never give out your information if you feel uncomfortable to share it with other people.",
     video: "https://www.youtube.com/embed/yiKeLOKc1tw?si=p-28_yV7ApiOyEvZ"},
    {title: "Never respond, block the user and save evidence", 
     description: "If you are getting constantly getting harassed and bullied, you can ignore and block the user, but if it keeps getting more and more persistent, save the evidence of bullying and send it to the proper authorities.",
     video: "https://www.youtube.com/embed/qb0XHrXsYog?si=B4PQiJOwPBdyq2z5"}
]

function PreventList() {
    return (
        <div className="prevention-grid">
            {tips.map((tip, index) => (
                <div key={index} className="prevention-card">
                    <p className="prevent-title">{tip.title}</p>
                    <p className="prevent-desc">{tip.description}</p>
                    <iframe 
                    width="100%"
                    height="315"
                    src={tip.video}
                    title={tip.title}
                    allowFullScreen
                    />
                </div>
        ))}
        </div>
    )
}

export default PreventList