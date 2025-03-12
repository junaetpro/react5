import React from 'react';
import Hero from './../component/Hero/Hero'
import About from './../component/About/About'
import Shortsection from './../component/ShortSectionWordpressBootstrap/Shortsection'
import Service from './../component/Service/Service'
import Portfolio from './../component/Portfolio/Portfolio'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Shortsection/>
            <Service/>
            <Portfolio/>
        </div>
    );
};

export default Home;