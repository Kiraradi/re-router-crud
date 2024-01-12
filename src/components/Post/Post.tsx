import React, { useEffect, useState } from 'react'
import { IPost } from '../../interfaces/IPost'
import PostServise from '../../services/PostService';
import moment from 'moment'
import { useParams } from 'react-router-dom';
import ChangePost from '../СhangePost/СhangePost';

import './Post.css';
let isChanging = false;

export default function Post() {
  const {pId} = useParams()
  const [post, setPost] = useState({} as IPost);

  async function getPost() {
    const res = await PostServise.getPost(Number(pId));

      if (res) {
        setPost(res);
      }
  }

  useEffect(()=> {
    if (!isChanging) {
      getPost();
    }
  }, [isChanging]);

  const changePost = () => {
    isChanging = !isChanging;
    getPost()
  }

  if (isChanging) {
    return <ChangePost {...post} onClose={changePost} />
  } 

  return (
    <div className='full-post'>
      <h2 className='full-post-title'>Описание поста:</h2>
      <p className='full-post-content'>{post.content}</p>
      <p className='full-post-date'>{moment(post.created).format('HH:mm:ss')}</p>
      <button className='change' onClick={changePost}>Изменить</button>
    </div>
  )
}
