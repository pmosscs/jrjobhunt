import React from "react";
import Form from "./Form";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="title">JrJobHunt.com</h1>
        <div className="bar"></div>
        <p className="mid-title">Breaking into the tech field?</p>
        <p className="info">
          Get weekly job market updates, data, success stories, and job search
          optimization tips designed for aspiring Jr Developers.
        </p>
        <Form />
      </div>
      <div className="help-div">
        <div className="tooltip">
          <p className="help-p">
            <Link className="link" to={"/help"}>
              <BiHelpCircle className="help" />
            </Link>
          </p>
          <span className="tooltiptext">Help?</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
