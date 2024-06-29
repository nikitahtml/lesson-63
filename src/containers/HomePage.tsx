import React from 'react';
import PostList from '../components/PostList';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <PostList />
        </div>
    );
}

export default HomePage;
