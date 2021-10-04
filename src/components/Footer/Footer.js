import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Music Fusi<span className="color-cng">O</span>n</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div className="icon">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div className="icon">
                    <i class="fab fa-youtube"></i>
                  </div>
                  <div className="icon">
                    <i class="fab fa-facebook"></i>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    International music lovers  bring their voices and experiences to our stages. That amages and soothing to all.

                  </small>
                </p>

                <p className="mt-5">
                  <small>hima © . All rights reserved.2021</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">

            </div>
            <div className="col-md-5">
              <div className="right-footer-container">

                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div>
                    <h5>+88 01945876477</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">

                  </div>
                  <div>
                    <p>
                      Musical Education Board
                      Address: 12,Bangladesh Shilpokola Academy,<br /> Segunbagicha, Dhaka-1205 <br />
                      Email : shilpokola@gmail.com
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Footer;