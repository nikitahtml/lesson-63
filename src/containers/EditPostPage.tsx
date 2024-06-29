import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<{ title: string, body: string } | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://bibikov-nikita-js25-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
                const postData = response.data;
                if (postData) {
                    setPost({
                        title: postData.title,
                        body: postData.body
                    });
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    const editPost = async (postData: { title: string, body: string }) => {
        try {
            await axios.put(`https://bibikov-nikita-js25-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`, postData);
            window.location.href = `/posts/${id}`; // Redirect to view post after editing
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm initialData={post} onSubmit={editPost} />
        </div>
    );
}

export default EditPostPage;
