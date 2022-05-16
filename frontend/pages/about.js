import { useEffect, useState } from 'react'
import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
import axios from 'axios'
export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {

	//axios.get("http://localhost:8080/blogposts/about", {crossdomain:true}).then(res => {
	const url = process.env.NEXT_PUBLIC_ENVIRONMENT == "dev" ? "http://localhost:8080/blogposts/about" : "https://eikrt.com/api/blogposts/about"
	axios.get(url).then(res => {
	    setPosts([...posts, res.data])
	}).catch((error) => {
	    console.log(error)
	});
    },[])
    return (
	    <div>
	    <Layout>
	    </Layout>
	    <div className={contentStyles.blog_entry}>
	    {posts.map((post,index) => {
		return(
			<div key={index}>
			{post.map((p,index) => {
			    return (
				    <div key={index}>
				    {Object.values(p.lines).map((line, index) => {
					return (
						<div key={index}>
						
					    {line.type === "body" && <pre>{line.line}</pre>}
					    {line.type === "h1" && <h1>{line.line}</h1>}
					    {line.type === "h2" && <h2>{line.line}</h2>}
					    {line.type === "h3" && <h3>{line.line}</h3>}
					    {line.type === "h4" && <h4>{line.line}</h4>}
					    {line.type === "img" && <img src={`images/${line.line}`}></img>}
						</div>
					);
				    })}
				</div>
			    );
			})}
		    </div>
		);
	    })}
	</div>
	    </div>
    )
}
