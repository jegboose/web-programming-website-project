import StoryCard from "./StoryCard.jsx";
import stories from "./storiesData.js";

export default function StoriesGrid() {
    return (
        <section className="stories-grid">
            {stories.map(story => (
                <StoryCard key={story.id} {...story} />
            ))}
        </section>
    )
}