import React from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';

const AddPostPage: React.FC = () => {
    const addPost = async (postData: { title: string, body: string }) => {
        try {
            await axios.post('https://bibikov-nikita-js25-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
                ...postData,
                createdAt: new Date().toISOString()
            });
            window.location.href = '/'; // Redirect to home after successful addition
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div>
            <h1>Add New Post</h1>
            <PostForm onSubmit={addPost} />
        </div>
    );
}

export default AddPostPage;