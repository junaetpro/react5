import React from 'react';
import Title from '../section_title/Title';
import "./Portfolio.css"
import img1 from "./../../assets/image.png"

const Portfolio = () => {
    return (
        <div className='container Portfolio'>
            <Title small_title="My Latest work" big_title="Our Portfolio"/>
            <div className="content ">
                <div className="left">
                    <a href=""> <i className="ri-arrow-right-s-line"></i> All Works</a>
                    <a href=""> <i className="ri-arrow-right-s-line"></i> Graphic Design</a>
                    <a href=""> <i className="ri-arrow-right-s-line"></i>  Programing</a>
                    <a href=""> <i className="ri-arrow-right-s-line"></i> Web Design</a>
                    <a href=""> <i className="ri-arrow-right-s-line"></i> Video Edit</a>
                </div>
                <div className="right">
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="overlay">
                            <h3>Web Development</h3>
                            <p>react</p>
                            <i className="ri-add-circle-line"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="overlay">
                            <h3>Web Development</h3>
                            <p>react</p>
                            <i className="ri-add-circle-line"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="overlay">
                            <h3>Web Development</h3>
                            <p>react</p>
                            <i className="ri-add-circle-line"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="overlay">
                            <h3>Web Development</h3>
                            <p>react</p>
                            <i className="ri-add-circle-line"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="overlay">
                            <h3>Web Development</h3>
                            <p>react</p>
                            <i className="ri-add-circle-line"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="overlay">
                            <h3>Web Development</h3>
                            <p>react</p>
                            <i className="ri-add-circle-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro_btn">
            <a href="" className='btn'>More Work</a>
            </div>
            
        </div>
    );
};

export default Portfolio;