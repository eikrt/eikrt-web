import { useEffect, useState } from 'react'
import Blogposts from '../components/blogposts.js';
import contentStyles from '../styles/content.module.css';
import axios from 'axios'
export default function MusicReviews() {
    return(
	    <div>
	    <Blogposts blogFile="music_reviews"/>
	    </div>
    );
}