import { useEffect, useState } from 'react'
import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
import axios from 'axios'
export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {

	//axios.get("http://localhost:8080/blogposts/about", {crossdomain:true}).then(res => {
	axios.get("https://eikrt.com/api/blogposts/about").then(res => {
console.log(res.data)
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
	<h2>{p.title}</h2>
<pre>{p.body}</pre>
</div>
 );
		})}
		</div>
		);
   })}
   </div>
   <img src="images/mursu1.png"></img>
	</div>
    )
}
