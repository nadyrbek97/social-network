import React, { Component } from "react";
import MyPosts from './MyPosts/MyPosts';
import "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {

    return (
        <div className="content">

              <ProfileInfo/>

              <MyPosts posts={props.state.posts}
                       newPostText={props.state.newPostText}
                       dispatch={props.dispatch}
              />

        </div>
    );
};

export default Profile;
