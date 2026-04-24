import { Helmet } from "react-helmet";

export default function AccessibilityPage() {
    return (
    <>
    <Helmet>
        <title>Accessibility | Prevent CyberBullying</title>
        <meta name="description" content="Our commitment to making this site accessible to all users." />
        <meta name="robots" content="index, follow" />
    </Helmet>

    <main id="main-content">
        <h1>Accessibility Statement</h1>
        <p>We are committed to making this website accessible to everyone, including people with disabilities. We aim to meet WCAG 2.1 level AA standards.</p>

        <h2>Features</h2>
        <ul>
            <li>Keyboard navigable</li>
            <li>Screen reader friendly</li>
            <li>Alt text on all images</li>
            <li>Sufficient color contrast</li>
        </ul>

        <h2>Contact</h2>
        <p>If you experience any accessibility issues on this site, please reach out so we can fix them.</p>
    </main>
    </>
    )
}