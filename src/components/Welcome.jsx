import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="title">JrJobHunt.com</h1>
        <div className="bar"></div>
        <p className="mid-title">
          Thank you for confirming your email address.
        </p>
        <p className="info">
          Please consider taking this short survey to help us continue creating
          content that best helps our subscribers in their job search.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jrjobhunt.surveysparrow.com/s/New-Subscriber/tt-rtumTWdBsywgWJwQGvxu4m"
        >
          <button className="survey-button">Take the survey</button>
        </a>
      </div>
      <div className="pages">
        <Link className="link" to={"/"}>
          <span className="tooltiptext">Home</span>
        </Link>
        <Link className="link" to={"/help"}>
          <span className="tooltiptext">FAQ</span>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
