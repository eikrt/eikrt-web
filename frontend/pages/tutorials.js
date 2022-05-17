import Layout from '../components/layout.js';
import contentStyles from '../styles/content.module.css';
import Blogposts from '../components/blogposts.js';


export default function Tutorials() {
    return(
	    <div>
	    <Blogposts blogFile="tutorials"/>
	    </div>
    );
}
