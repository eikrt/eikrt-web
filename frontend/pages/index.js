import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
import Blogposts from '../components/blogposts.js';
export default function Home() {
    return(
	<div>
      <Layout></Layout>
	<Blogposts blogFile="blogposts/index"/>
	<div className={contentStyles.blog_entry}>
	<h2>Latest posts:</h2>
	</div>
	<Blogposts blogFile="latestposts/all"/>
	</div>
    );
}
