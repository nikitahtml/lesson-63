import React from 'react';

interface PostDetailProps {
    title: string;
    createdAt: string;
    body: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ title, createdAt, body }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Created at: {createdAt}</p>
            <p>{body}</p>
        </div>
    );
}

export default PostDetail;