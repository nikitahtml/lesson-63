// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import AddPostPage from './containers/AddPostPage';
import EditPostPage from './containers/EditPostPage';
import ViewPostPage from './containers/ViewPostPage';


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new-post" element={<AddPostPage />} />
                    <Route path="/posts/:id" element={<ViewPostPage />} />
                    <Route path="/posts/:id/edit" element={<EditPostPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
