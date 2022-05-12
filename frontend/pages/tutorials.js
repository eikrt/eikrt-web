import Head from 'next/head'
import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
export default function Home() {
    return (
	<div>
	    <Layout>
	    <div className={contentStyles.blog_entry}>
	    </div>
	    </Layout>
	    <h3>FROM BACKEND</h3>
	    </div>
    )
}
