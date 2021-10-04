import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div>
            <MenuBar
            />
            <div className="row d-flex justify-content-center align-items-center">
                <h1 className="text-center p-4 bg-secondary text-white">About</h1>
                <div className="col-md-6">
                    <div className="div">
                        <h2 className="text-primary fw-bold">About Us</h2>
                        <p>Students we call them as musicians,they have individual learning paths in musics. When a musician works on a tone, they engage in instructions through many intructors , instruments animation, and interaction with the experts.</p> <p> Music Fusion is an online and offline library of more than 50 music with multimedia supports, real-time reporting and assessments and embedded close reading tools. Students receive book recommendations based on their interests and  abilities</p>
                        <p>Students have access to over 400 eBooks in Classical and Rock musics. Each book has a corresponding quiz to monitor student’s comprehension.</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <img className="about-image" src={'https://cdn3.vectorstock.com/i/1000x1000/20/47/horizontal-music-banner-bright-purple-futuristic-vector-25212047.jpg'} alt="" />


                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;