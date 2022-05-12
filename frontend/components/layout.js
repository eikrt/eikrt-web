import contentStyles from '../styles/content.module.css';
import styles from './layout.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
	<div className={styles.container}>
	    <Head>
	    <title>Eikrt website </title>
	    <link rel="icon" href="/favicon.ico"/>
	    </Head>
	<div className={contentStyles.header_box}>
            <div className = {contentStyles.title_box}>
                <a href="/"> <h1>Eikrt website</h1> </a>
            </div>
            <div className = {contentStyles.title_box}>
                <a href="/projects"> <h1>Projects</h1> </a>
            </div>
            <div className={contentStyles.title_box}>
                <a href="/tutorials"> <h1>Tutorials</h1> </a>
            </div>
            <div className={contentStyles.title_box}>
                <a href="/reviews"> <h1>Reviews</h1> </a>
            </div>
            <div className={contentStyles.title_box}>
                <a href="/about"> <h1>About</h1> </a>
            </div>
	</div>
	    </div>)
}
