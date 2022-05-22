import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
import Blogposts from '../components/blogposts.js';

export default function Projects() {
    return(
	    <div>
      <Layout></Layout>
	    <Blogposts blogFile="blogposts/projects"/>
	    </div>
    );
}
