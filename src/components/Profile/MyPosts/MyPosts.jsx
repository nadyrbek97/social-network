import React, { Component } from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

    // we are getting info from textarea using React Ref
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        newPostElement.current.value = '';
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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