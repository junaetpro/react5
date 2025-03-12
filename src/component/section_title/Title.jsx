import React from 'react';
import "./../../component/section_title/Title.css"

const Title = (props) => {
    return (
        <div className='title_text container'>
            <h3>{props.small_title}</h3>
            <h1>{props.big_title}</h1>
        </div>
    );
};

export default Title;