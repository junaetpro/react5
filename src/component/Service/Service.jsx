import React, { useState } from 'react';
import Title from '../section_title/Title';
import "./Service.css"



const Service = () => {
    var [service]=useState({
        s1:{
            icon:<i className='ri-settings-3-line'></i>,
            title:"Mobile Design",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum facere a voluptatem placeat earum voluptas fugit corrupti sapiente dicta?"
        },
        s2:{
            icon:<i className='ri-settings-3-line'></i>,
            title:"Mobile Design",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum facere a voluptatem placeat earum voluptas fugit corrupti sapiente dicta?"
        },
        s3:{
            icon:<i className='ri-settings-3-line'></i>,
            title:"Mobile Design",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum facere a voluptatem placeat earum voluptas fugit corrupti sapiente dicta?"
        },
        s4:{
            icon:<i className='ri-settings-3-line'></i>,
            title:"Digital Marketing",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum facere a voluptatem placeat earum voluptas fugit corrupti sapiente dicta?"
        },
        s5:{
            icon:<i className='ri-settings-3-line'></i>,
            title:"Graphic Design",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum facere a voluptatem placeat earum voluptas fugit corrupti sapiente dicta?"
        },
        s6:{
            icon:<i className='ri-settings-3-line'></i>,
            title:"customer support",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum facere a voluptatem placeat earum voluptas fugit corrupti sapiente dicta?"
        },
    })
    return (
        <div className='container service'>
            <Title small_title="What We Do" big_title="Our services"/>
            <div className="service_boxs">
                <div className="box">
                    <div className="title_area">
                        {service.s1.icon}
                        <h3>{service.s1.title}</h3>
                    </div>
                    <p>{service.s1.text}</p>
                </div>
                <div className="box">
                    <div className="title_area">
                        {service.s2.icon}
                        <h3>{service.s2.title}</h3>
                    </div>
                    <p>{service.s2.text}</p>
                </div>
                <div className="box">
                    <div className="title_area">
                        {service.s3.icon}
                        <h3>{service.s3.title}</h3>
                    </div>
                    <p>{service.s3.text}</p>
                </div>
                <div className="box">
                    <div className="title_area">
                        {service.s4.icon}
                        <h3>{service.s4.title}</h3>
                    </div>
                    <p>{service.s4.text}</p>
                </div>
                <div className="box">
                    <div className="title_area">
                        {service.s5.icon}
                        <h3>{service.s5.title}</h3>
                    </div>
                    <p>{service.s5.text}</p>
                </div>
                <div className="box">
                    <div className="title_area">
                        {service.s6.icon}
                        <h3>{service.s6.title}</h3>
                    </div>
                    <p>{service.s6.text}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Service;