import React, { useState } from 'react';
import { IChangePost } from '../../interfaces/IChangePost';
import PostServise from '../../services/PostService';
import { useNavigate } from "react-router-dom";

import './СhangePost.css';


export default function ChangePost(props:IChangePost) {
    const navigate = useNavigate();

    const changeablePost = {...props}

    const [сhangePost, setСhangePost] = useState(changeablePost);

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setСhangePost({...сhangePost, [name]: value});
    };

    const saveChange = async (event: React.MouseEvent) => {
        event.preventDefault();
        const response = await PostServise.changePost(сhangePost);

        if (response) {
            navigate('/');
        }
    }

    return (
        <div className='сhange-post'>
            <h2 className='сhange-post-title'>Изменить пост:</h2>
            <form className='сhange-post-form'>
                <input 
                className='сhange-post-input'
                type="text" 
                name='content'
                value={сhangePost.content}
                required
                onChange={handlerChange}
                />
                <button className='сhange-post-button' onClick={saveChange}>Сохранить </button>
                <span className="material-symbols-outlined close-сhange-post-button" onClick={props.onClose}>close</span>
            </form>
        </div>
    )
}
