import { useEffect, useState } from "react";
import PostServise from "../../services/PostService";
import { IPost } from "../../interfaces/IPost";
import { useNavigate } from "react-router-dom";

import './Posts.css';

import React from 'react'

export default function Posts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([] as IPost[]);

    async function getPosts() {
        const res = await PostServise.getPosts();

        if (res) {
        setPosts(res);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    async function deletePost(id: number) {
        const res = await PostServise.deletePost(id);

        if (res) {
            getPosts();
        }
    }

    const openPost = (id: number) => {
        navigate(`posts/${id}`);
    } 

    return (
        <ul className="posts">
            {
                posts.map(post => {
                    return <li className="posts-item" key={post.id}>
                        <p className="posts-item-content">{post.content}</p>
                        <button className="button-open-post" onClick={() => {openPost(post.id)}}>Подробнее...</button>
                        <span className="material-symbols-outlined posts-item-button" onClick={() => {deletePost(post.id)}}>close</span>
                    </li>
                })
            }
        </ul>
    )
}
