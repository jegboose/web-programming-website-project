// Stories / Blog — Ahmed
// Personal stories from survivors, expert articles, and news updates related to cyberbullying awareness

import StoriesHero from "../components/Stories/StoriesHero.jsx";
import StoriesGrid from "../components/Stories/StoriesGrid.jsx";
import {Helmet} from "react-helmet";

export default function StoriesPage() {
  return (
    <>
    <Helmet>
      <title>Stories & Experiences | Prevent Cyberbullying</title>
      <meta name="description" content="Read personal stories from cyberbullying survivors, expert articles, and news updates about cyberbullying awareness." />
      <meta name="keywords" content="cyberbullying stories, survivor stories, cyberbullying awareness, personal experiences, cyberbullying news" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ahmed Al-Kaisi" />
      <meta property="og:title" content="Stories & Experiences | Prevent Cyberbullying" />
      <meta property="og:description" content="Read personal stories from cyberbullying survivors, expert articles, and news updates about cyberbullying awareness."
      />
      <meta property="og:type" content="website" />
    </Helmet>
    <main>
      <StoriesHero/>
        <StoriesGrid/>
    </main>
    </>
  )
}
