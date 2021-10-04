import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div>
            <div class="container my-5 text-center p-5">

                <h1 class="title">What we do?</h1>

                <div class="row text-center">

                    <div class="col-md-4 services">
                        <div className="icon mx-auto">
                            <i class="fab fa-accessible-icon"></i>
                        </div>
                        <h4>Physics</h4>
                        <p>Physics is the basic physical science. Until rather recent times physics and natural philosophy were used interchangeably for the science whose aim is the discovery and</p>
                    </div>

                    <div class="col-md-4 services">
                        <div className="icon mx-auto">
                            <i class="fab fa-accusoft"></i>
                        </div>
                        <h4>Biology</h4>
                        <p>Biology is a branch of science that deals with living organisms and their vital processes. Biology encompasses diverse fields, including botany, conservation, ecology.</p>
                    </div>

                    <div class="col-md-4 services">
                        <div className="icon mx-auto">
                            <i class="fab fa-android"></i>
                        </div>
                        <h4>Higher math</h4>
                        <p>So that you can create a solution or answer for your SSC Advanced Mathematics Assignment by looking at our sample answer sheet. But the solution of the assignment cannot be written by looking </p>
                    </div>

                </div>

                <button type="button" class="btn btn-primary">All Services</button>

            </div>
        </div>
    );
};

export default Body;