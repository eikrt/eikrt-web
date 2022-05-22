import { useEffect, useState } from 'react'
import Blogposts from '../components/blogposts.js';
import contentStyles from '../styles/content.module.css';

import Layout from '../components/layout.js';
import axios from 'axios'
export default function About() {
    return(
	    <div>
	<Layout></Layout>
	    <Blogposts blogFile="blogposts/about"/>
	    </div>
    );
}
