import React, { useState } from 'react';

interface PostFormProps {
    initialData?: { title: string, body: string };
    onSubmit: (postData: { title: string, body: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ initialData, onSubmit }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [body, setBody] = useState(initialData?.body || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, body });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostForm;