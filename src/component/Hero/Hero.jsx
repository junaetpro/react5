import React from 'react';
import "./../Hero/Hero.css"
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='container hero'>
            <div className="overlay">
            <h1> We will boost your business{"'"}s</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos magnam impedit perferendis unde saepe, dolor, similique non obcaecati quae consequuntur ad vero, labore sequi sint molestias velit blanditiis enim. Odio.</p>

            <Link to='about' smooth={true} duration={500} offset={0} href="" className='btn'>About More</Link>
            </div>
            
        </div>
    );
};

export default Hero;