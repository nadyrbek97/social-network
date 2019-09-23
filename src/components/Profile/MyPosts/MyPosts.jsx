import React, { Component } from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
    <div className={style}>
       <h3>My Posts</h3>
        {postElements}
    </div>
    )
};

export default MyPosts;