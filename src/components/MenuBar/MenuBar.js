
import "./MenuBar.css";

import { Link } from "react-router-dom";


const MenuBar = () => {


  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo-img">
              <h1>Music Fusi<span className="color-cng">O</span>n</h1>
            </div>
          </div>
          <div className="col-md-8">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/teamMember" className="items">
                  <li>Musicians</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;