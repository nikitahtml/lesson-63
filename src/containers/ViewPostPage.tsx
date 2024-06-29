import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PostDetail from '../components/PostDetail';

const ViewPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<{ title: string, createdAt: string, body: string } | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://bibikov-nikita-js25-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
                const postData = response.data;
                if (postData) {
                    setPost({
                        title: postData.title,
                        createdAt: postData.createdAt,
                        body: postData.body
                    });
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://bibikov-nikita-js25-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`);
            window.location.href = '/'; // Redirect to home after successful deletion
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <PostDetail title={post.title} createdAt={post.createdAt} body={post.body} />
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/posts/${id}/edit`}>Edit</Link>
        </div>
    );
}

export default ViewPostPage;