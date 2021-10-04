import React from 'react';
import './Service.css'
const Service = (props) => {
    const {name,img,discription} = props.course;
    return (
        <div>
            <img className="service-img" src={img} alt="" />
            <h2>{name}</h2>
            <p>{discription}</p>
        </div>
    );
};

export default Service;