import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {




        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <MenuBar />
            <h1 className="text-center p-4 bg-primary text-white">Services</h1>
            <div className="card-container">
                {
                    courses.map(course => <Service course={course}></Service>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;