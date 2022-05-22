import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
import Blogposts from '../components/blogposts.js';
export default function GameProjects() {
    return(
	    <div>
      <Layout></Layout>
	    <Blogposts blogFile="blogposts/game_projects"/>
	    </div>
    );
}
