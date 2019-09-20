import React, { Component } from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 0, message: "Post 1", likesCount: 154 },
        { id: 1, message: "Post 2", likesCount: 124 },
        { id: 2, message: "Post 3", likesCount: 123 }
    ];

    let postDataElements = postData.map( post => <Post message={post.message} likesCount={post.likesCount} />);

  return (
    <div className={style}>
       <h3>My Posts</h3>
        {postDataElements}
    </div>
  )
};

export default MyPosts;