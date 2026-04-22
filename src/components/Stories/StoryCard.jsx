export default function StoryCard({title, author, date, excerpt, category}) {
    return(
        <section>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{date}</p>
            <p>{excerpt}</p>
            <a href= "#">Read more</a>
        </section>
    )
}