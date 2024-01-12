import { IPost } from "../interfaces/IPost";

export default class PostServise {

    static async getPosts() {
        const response = await fetch('http://localhost:7070/posts');
        
        if (response.ok) {
            const posts = await response.json();
            return posts
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    static async createPost(post:IPost) {
        const response = await fetch('http://localhost:7070/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            return response
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    static async changePost(post:IPost) {
        const response = await fetch(`http://localhost:7070/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            return response
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    static async getPost(id:number) {
        const response = await fetch(`http://localhost:7070/posts/${id}`);
        
        if (response.ok) {
            const post = await response.json();
            return post.post
        } else {
            console.log("Ошибка HTTP: " + response.status);
        } 
    }

    static async deletePost(id:number) {
        const response = await fetch(`http://localhost:7070/posts/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            return response
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
}