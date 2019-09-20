import React, { Component } from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 0, message: "Post 1", likesCount: 12 },
        { id: 1, message: "Post 1", likesCount: 12 },
        { id: 2, message: "Post 1", likesCount: 12 }
    ];

  return (
    <div className={style}>
       <h3>My Posts</h3>

        <Post bessage={postData[0].message} likeAmount={postData[0].likesCount}/>
        <Post bessage={postData[1].message} likeAmount={postData[1].likesCount}/>
        <Post bessage={postData[2].message} likeAmount={postData[2].likesCount}/>


    </div>
  )
};

export default MyPosts;