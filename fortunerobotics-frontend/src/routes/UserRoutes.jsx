// UserRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/UserPages/HomePage';

const UserRoutes = () => {
    return (
        <Routes>
            {/* Main Homepage Route */}
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};

export default UserRoutes;
