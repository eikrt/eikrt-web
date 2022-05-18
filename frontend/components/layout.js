import contentStyles from "../styles/content.module.css";
import styles from "./layout.module.css";
import Head from "next/head";
import "react-dropdown/style.css";

export default function Layout() {
  return (
      <div className={styles.container}>
      <Head>
      <title>Eikrt website </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={contentStyles.header_box}>
      <div className={contentStyles.main_title_box}>
      <a href="/">
      {" "}
      <h2>Eikrt website</h2>{" "}
          </a>
        </div>
        <div className={contentStyles.title_box}>
          <div className={contentStyles.dropdown}>
            <a href="/projects">
              {" "}
              <h2>Projects</h2>{" "}
            </a>
            <div className={contentStyles.dropdown_content}>
              <a href="/programming_projects">Programming</a>
              <a href="/game_projects">Games</a>
              <a href="/other_projects">Other</a>
            </div>
          </div>
        </div>
        <div className={contentStyles.title_box}>
          <a href="/tutorials">
            {" "}
            <h2>Tutorials</h2>{" "}
          </a>
        </div>
        <div className={contentStyles.title_box}>
          <div className={contentStyles.dropdown}>
            <a href="/reviews">
              {" "}
              <h2>Reviews</h2>{" "}
            </a>
            <div className={contentStyles.dropdown_content}>
              <a href="/game_reviews">Game reviews</a>
              <a href="/movie_reviews">Movie reviews</a>
              <a href="/music_reviews">Music reviews</a>
            </div>
          </div>
        </div>
        <div className={contentStyles.title_box}>
          <a href="/about">
            {" "}
            <h2>About</h2>{" "}
      </a>
      </div>
        <div className={contentStyles.hamburger_box}>
          <div className={contentStyles.dropdown}>
            <img className={contentStyles.blog_img}src="/images/hamburger.png"/>
            <div className={contentStyles.dropdown_content}>
              <a href="/">Home</a>
              <a href="/programming_projects">Coding Projects</a>
              <a href="/game_projects">Game Projects</a>
              <a href="/other_projects">Other Projects</a>
              <a href="/game_reviews">Game reviews</a>
              <a href="/movie_reviews">Movie reviews</a>
              <a href="/music_reviews">Music reviews</a>
              <a href="/about">About</a>
            </div>
      </div>
      </div>
      </div>
      </div>
  );
}
