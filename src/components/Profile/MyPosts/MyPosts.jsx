import React, { Component } from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'


const MyPosts = (props) => {

    debugger;
    let postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    // we are getting info from textarea using React Ref
    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    };

    return (
    <div className={style}>
       <h3>My Posts</h3>

        <div className='container-fluid mb-2'>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost} className='btn btn-sm btn-info' >
                    Add post
                </button>
            </div>
        </div>

        {postElements}
    </div>
    )
};



export default MyPosts;