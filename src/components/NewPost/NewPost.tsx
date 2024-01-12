import React, { useState } from 'react';
import { IPost } from '../../interfaces/IPost';
import PostServise from '../../services/PostService';
import { useNavigate } from "react-router-dom";

import "./NewPost.css";

export default function NewPost() {
  const navigate = useNavigate();
  
  const initNewPost: IPost = {
    id:0,
    content: ''
  }

  const [newPost, setNewPost] = useState(initNewPost);

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPost({...newPost, [name]: value});
  };

  const createPost = async (event: React.MouseEvent) => {
    event.preventDefault();
    const response = await PostServise.createPost(newPost);

    if (response) {
      navigate("/");
    }
  }


  return (
    <div className='new-post'>
      <form className='new-post-form'>
        <input 
          className='new-post-input'
          type="text" 
          name='content'
          value={newPost.content}
          required
          onChange={handlerChange}
           />
        <button className='new-post-button' onClick={createPost}>Send new post </button>
      </form>
    </div>
  )
}
