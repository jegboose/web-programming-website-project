import './VideoHolder.css';
export default function VideoHolder() {
    return (
        <figure id="video" className="video-wrapper">
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/0Xo8N9qlJtk?si=jCTg9oycNv_DaJNt" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
    <figcaption>
        Video: "Cyber-bullying Facts – Top 10 Forms of Cyber Bullying" - Kaspersky.com
    </figcaption>
</figure>
);
}