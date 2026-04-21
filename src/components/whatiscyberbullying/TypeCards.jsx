import './TypeCard.css'
export default function TypeCards({type, description}) {
    return (
        <div className="type-card">
            <span className="type-name">{type}</span>
            <p>{description}</p>
        </div>
    );
}