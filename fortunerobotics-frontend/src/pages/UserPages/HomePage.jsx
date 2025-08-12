// HomePage.jsx
import React from 'react';
import Header from '../../components/UserComponents/HeaderComponent/Header';
import Footer from '../../components/UserComponents/FooterComponent/Footer';
import WhoWeAre from '../../components/UserComponents/WhoWeAre/WhoWeAre';
import OurProducts from '../../components/UserComponents/OurProductsComponents/OurProducts';
import FlexibleRobotComponent from '../../components/UserComponents/FlexibleRobotComponent/FlexibleRobotComponent';
const HomePage = () => {
    return (
        <>
            {/* Header Component */}
            < Header />
            {/* Who We Are Section */}
            < WhoWeAre />
            {/* our products */}
            < OurProducts />
            {/* flexible Robot component */}
            <FlexibleRobotComponent />
            {/* Footer Component */}
            < Footer />
        </>
    );
};

export default HomePage;
