import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../components/layout.js";
import contentStyles from "../styles/content.module.css";
export default function Blogposts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url =
      process.env.NEXT_PUBLIC_ENVIRONMENT == "dev"
        ? `http://localhost:8080/${props.blogFile}`
        : `https://eikrt.com/api/${props.blogFile}`;
    axios
      .get(url)
      .then((res) => {
        setPosts([...posts, res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 return (
    <div>
      <div className={contentStyles.blog_entry}>
        {posts && posts.map((post, index) => {
          return (
            <div key={index}>
              {post.map((p, index) => {
		  if (p.isDateBlogpost) {
		      return(
			  <h2><a href={`/${p.directory}#${p.heading}`}>{p.heading}</a></h2>
		      );
		  }
                return (
                  <div key={index}>
                    {p.lines && Object.values(p.lines).map((line, index) => {
                      return (
                        <div className={contentStyles.text_box}key={index}>
                          {line.type === "body" &&
			   <pre>
			      <div className={contentStyles.paragraph} dangerouslySetInnerHTML={{__html: line.line}} />
			   </pre>}
                          {line.type === "h1" && <h1>{line.line}</h1>}
                          {line.type === "h2" && <h2>{line.line}</h2>}
                          {line.type === "h3" && <h3>{line.line}</h3>}
                          {line.type === "h4" && <h4>{line.line}</h4>}
                          {line.type === "date" && <pre><i>{line.line}</i></pre>}
                          {line.type === "break" && <br/>}
                          {line.type === "img" && (
                            <img className={contentStyles.blog_img} src={`images/${line.line}`}></img>
                          )}
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
  );
}
