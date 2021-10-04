import React from 'react';
import './SingleService.css'

const SingleService = (props) => {
    const { name, img, email, phone, region, postalZip } = props.user;
    return (
        <div className="card2">
            <div className="mx-auto">
                <img className=" my-size-image" src={img} alt="" />
            </div>
            <h4>Name : {name}</h4>
            <p>E-mail : {email}</p>
            <p>Phone : {phone}</p>
            <p>Region : {region}</p>
            <p>Zip-Code : {postalZip}</p>

        </div>
    );
};

export default SingleService;