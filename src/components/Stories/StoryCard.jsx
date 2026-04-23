export default function StoryCard({id, type, category, title, author, date, excerpt, source, url, videoId}) {
    if (type === 'video') {
        return (
            <article>
                <p>{category}</p>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allowFullScreen={true}
                    />
                <h2>{title}</h2>
                <p>{source}</p>
                <p>{date}</p>
            </article>
        )
    }

    if (type === "article") {
        return (
            <article>
                <p>{category}</p>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{source}</p>
                <p>{date}</p>
                <p>{excerpt}</p>
                <a href={url} target="_blank" rel="noreferrer">Read full article</a>
            </article>
        )
    }

    return (
        <article>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{date}</p>
            <p>{excerpt}</p>
            <a href="#">Read more</a>
        </article>
    )
}