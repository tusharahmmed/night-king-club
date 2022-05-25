import React from 'react';
import { AboutSection, HeroSection, TeamVision, Testimonial } from '../components/home';
import { Header } from '../components/shared';

const Homepage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <TeamVision />
            <AboutSection />
            <Testimonial />
        </>
    );
};

export default Homepage;