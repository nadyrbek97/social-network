import React, { Component } from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style}>
       <h3>My Posts</h3>
       

      <Post 
        message="I am learning React"
        likeAmount="24"  
      />
      <Post 
        message="Me Docker"
        likeAmount="54"  
      />
      <Post 
        message="Me Django"
        likeAmount="234"  
      />
    </div>
  )
};

export default MyPosts;