import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./sidebar.module.css";

export default function Sidebar() {
  return (
      <Menu>
      <a id="home" className="menu_item" href="/">Home</a>
      <a id="game_projects" className="menu_item" href="/game_projects">Game projects</a>
      <a id="programming_projects" className="menu_item" href="/programming_projects">Programming projects</a>
      <a id="other_projects" className="menu_item" href="/other_projects">Other projects</a>
      <a id="movie_reviews" className="menu_item" href="/movie_reviews">Movie reviews</a>
      <a id="music_reviews" className="menu_item" href="/music_reviews">Music reviews</a>
      <a id="game_reviews" className="menu_item" href="/game_reviews">Game reviews</a>
      <a id="tutorials" className="menu_item" href="/tutorials">Tutorials</a>
      <a id="about" className="menu_item" href="/about">About</a>
      </Menu>
  );
};
