import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Post {
    id: string;
    title: string;
}

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://bibikov-nikita-js25-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
                const postsData = response.data;
                if (postsData) {
                    const postsArray = Object.keys(postsData).map(key => ({
                        id: key,
                        title: postsData[key].title
                    }));
                    setPosts(postsArray);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
