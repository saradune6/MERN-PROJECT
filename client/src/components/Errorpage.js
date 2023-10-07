import React from "react";
import Errorpic from "../images/error.png";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div id="not found">
        <div className="error-image">
          <figure>
            
            <Link to="/">
              <img src={Errorpic} alt="signin image" />
            </Link>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
