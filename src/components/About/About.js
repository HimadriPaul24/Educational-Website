import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';
import '../About.css'

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
                        <p>Students have individual learning paths in “folders”. When a student works on a folder, they engage in instruction through video, audio, animation, and interaction writing tools.</p> <p> myON is an online library of more than 10,000 enhanced digital books with multimedia supports, real-time reporting and assessments and embedded close reading tools. Students receive book recommendations based on their interests and reading abilities</p>
                        <p>Students have access to over 400 eBooks in English and Spanish. Each book has a corresponding quiz to monitor student’s comprehension.</p>

                    </div>
                </div>
                <div className="col-md-6">
                    <img className="about-image" src={'https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/102296356_2407832699516625_8003859959131406336_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=HvmIql3bRjsAX_Rq26b&_nc_ht=scontent.fdac116-1.fna&oh=acd308a422218df6b6920e180d2aa6ad&oe=61822930'} alt=""/>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;