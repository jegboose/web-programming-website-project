import "../../styles/StoriesPage.css"

export default function StoryCard({id, type, category, title, author, date, excerpt, source, url, videoId, image}) {
    if (type === 'video') {
        return (
            <article className="story-card">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allowFullScreen={true}
                    />
                <div className="story-card-body">
                    <p>{category}</p>
                    <h2>{title}</h2>
                    <p>{source}</p>
                    <p>{date}</p>
                </div>
            </article>
        )
    }

    if (type === "article") {
        return (
            <article className="story-card">
                <div className="story-card-body">
                    <p>{category}</p>
                    <h2>{title}</h2>
                    <p>{author}</p>
                    <p>{source}</p>
                    <p>{date}</p>
                    <p>{excerpt}</p>
                    <a href={url} target="_blank" rel="noreferrer">Read more &gt;</a>
                </div>
            </article>
        )
    }

    return (
        <article className="story-card">
            <img src={image} alt={title} />
            <div className="story-card-body">
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{date}</p>
            <p>{excerpt}</p>
            <a href={url} target="_blank" rel="noreferrer">Read more &gt; </a>
            </div>

        </article>
    )
}