// HomePage.jsx
import React from 'react';
import Header from '../../components/UserComponents/HeaderComponent/Header';
import Footer from '../../components/UserComponents/FooterComponent/Footer';
import Banner from '../../components/UserComponents/BannerComponent/Banner';
import WhoWeAre from '../../components/UserComponents/WhoWeAre/WhoWeAre';
import OurProducts from '../../components/UserComponents/OurProductsComponents/OurProducts';
import FlexibleRobotComponent from '../../components/UserComponents/FlexibleRobotComponent/FlexibleRobotComponent';
import Testimonial from '../../components/UserComponents/TestimonialComponent/Testimonial';
import NewsletterComponent from '../../components/UserComponents/NewsletterComponent/NewsLetter';
const HomePage = () => {
    return (
        <>
            {/* Header Component */}
            < Header />
            {/* banner  */}
            <Banner />
            {/* Who We Are Section */}
            < WhoWeAre />
            {/* our products */}
            < OurProducts />
            {/* flexible Robot component */}
            <FlexibleRobotComponent />
            {/* Testimonial component */}
            <Testimonial />
            {/* Newsletter component */}
            <NewsletterComponent />
            {/* Footer Component */}
            < Footer />
        </>
    );
};

export default HomePage;
