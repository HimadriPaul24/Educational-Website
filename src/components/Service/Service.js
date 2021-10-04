import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, img, description, duration, cost } = props.course;
    return (
        // <div>
        //     <img className="service-img" src={img} alt="" />
        //     <h2>{name}</h2>
        //     <h3>{description}</h3>
        //     <h4>{duration}</h4>
        //     <p>{cost}</p>
        // </div>

        <div className="container">
            <div className="card bg-secondary">
                <div className="mx-auto">
                    <img src={img} className="service-img img-fluid" alt="" />
                </div>
                <div className="card-body">
                    <h2>Name : {name}</h2>
                    <p>Description : {description}</p>
                    <p>Duration : {duration}</p>
                    <p>Cost : {cost}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;