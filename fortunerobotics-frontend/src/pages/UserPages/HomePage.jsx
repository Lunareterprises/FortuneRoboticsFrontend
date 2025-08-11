// HomePage.jsx
import React from 'react';
import Header from '../../components/UserComponents/HeaderComponent/Header';
import Footer from '../../components/UserComponents/FooterComponent/Footer';
import WhoWeAre from '../../components/UserComponents/WhoWeAre/WhoWeAre';
const HomePage = () => {
    return (
        <>
            {/* Header Component */}
            < Header />
            {/* Who We Are Section */}
            < WhoWeAre />
            {/* Footer Component */}
            < Footer />
        </>
    );
};

export default HomePage;
