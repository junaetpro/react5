import React from 'react';
import Title from '../section_title/Title';
import "./About.css"
import img1 from "./../../assets/about1.jpg"

const About = () => {
    return (
        <div className='container about'>
            <Title small_title="Creative Agency" big_title="Welcome To Biznez"/>

            <div className="top">
                <div className="box">
                    <div className="title_area">
                        <i className="ri-user-line"></i>
                        <h3>Full Support</h3>
                    </div>
                    <div className="paragraph_area">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius corrupti ducimus labore neque magni.
                    </div>
                </div>
                <div className="box">
                    <div className="title_area">
                        <i className="ri-settings-2-line"></i>
                        <h3>Full Support</h3>
                    </div>
                    <div className="paragraph_area">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius corrupti ducimus labore neque magni.
                    </div>
                </div>
                <div className="box">
                    <div className="title_area">
                        <i className="ri-book-2-fill"></i>
                        <h3>Full Support</h3>
                    </div>
                    <div className="paragraph_area">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius corrupti ducimus labore neque magni.
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src={img1} alt="" />
                </div>
                <div className="right">
                    <h2>Awesome Business Landingpage</h2>
                    <p className='title_para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quas voluptatum aperiam, rerum officiis hic ducimus placeat necessitatibus ea fugit?</p>
                    <div className="right_bottom">
                        <div className="info">
                            <i className="ri-lightbulb-line"></i>
                            <p><span>Expert Advisors :</span> dolor sit amet consectetur adipisicing elit. Harum nemo libero, dignissimos placeat ab culpa.</p>
                        </div>
                        <div className="info">
                            <i className="ri-settings-2-line"></i>
                            <p><span>Expert Advisors :</span> dolor sit amet consectetur adipisicing elit. Harum nemo libero, dignissimos placeat ab culpa.</p>
                        </div>
                        <div className="info">
                            <i className="ri-book-line"></i>
                            <p><span>Expert Advisors :</span> dolor sit amet consectetur adipisicing elit. Harum nemo libero, dignissimos placeat ab culpa.</p>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default About;