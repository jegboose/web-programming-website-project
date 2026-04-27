import './TypeCard.css'
export default function TypeCards({type, description, icon}) {
    return (
        <section id="types">
        <div className="type-card">
            <div className="card-header">
                <img src={icon} alt={type}/>
            </div>
            <span className="type-name">{type}</span>
            <p>{description}</p>
        </div>
        </section>
    );
}