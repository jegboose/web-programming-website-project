const tips = []

function PreventList() {
    return (
        <div className="prevention-grid">
            {tips.map((tip, index) => (
                <div key={index} className="prevention-card">
                    <div>{tip.icon}</div>
                    <p className="prevent-title">{tip.title}</p>
                    <p className="prevent-desc">{tip.description}</p>
                </div>
        ))}
        </div>
    )
}

export default PreventList