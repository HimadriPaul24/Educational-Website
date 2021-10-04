import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">

            <div className="col-md-6">
              <h1 className="title">
                Let’s Start Your <br /> <span className="text-danger">MusicFusion!.....</span>
              </h1>
              <p className="text-black  mt-3">
                We offer a brand new approach to the most beautiful musics. <br />
                The wide range of learning options allows our musicians to select <br /> the most convenient and effective course!
              </p>
              <button className="mt-3 about-btn">Enroll Now</button>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;