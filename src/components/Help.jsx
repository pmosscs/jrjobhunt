import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div className="help-page">
      <header>
        <h1 className="help-title">
          <Link className="link" to={"/"}>
            <BiLeftArrow className="arrow" />
            Go Back Home
          </Link>
        </h1>
      </header>

      <div className="help-body">
        <h1 className="help-intro">JrJobHunt.com/help - the FAQ's</h1>
        <div className="center-help">
          <div className="section-div">
            <h1 className="help-section">Where is my confirmation email?</h1>
            <div>
              <p className="help-p2">
                Not in your inbox? Try checking your promotion and spam folders,
                then check your spelling and resubmit. If it doesn't show up
                after a few minutes, reach out to us at contact@jrjobhunt.com
              </p>
            </div>
            <h1 className="help-section">Are you accepting advertisers?</h1>
            <div>
              <p className="help-p2">
                Though we are not currently accepting any advertisers, we do
                promote products and tools (books, courses, and more) that we
                feel are benifitial to our subscribers' quest to find a job.
              </p>
            </div>
            <h1 className="help-section">
              Are my coding skills enough to get a job?
            </h1>
            <div>
              <p className="help-p2">
                Sadly, getting that pivotal Jr Development role can take more
                soft skills than most of us in tech like to admit that we have.
                By curating your networking skills, personal profiles (LinkedIn,
                Github, etc), and job search strategy, you greatly increase your
                odds - and speed - at which you can get a job.
              </p>
            </div>
            <h1 className="help-section">Can I share my success story?</h1>
            <div>
              <p className="help-p2">
                Absolutely! Email us a brief description of your employment
                searching journey at contact@jrjobhunt.com. We may ask followup
                questions or let you know which week your story will be included
                in the weekly email.
              </p>
            </div>
            <h1 className="help-section">Will I be spammed with emails?</h1>
            <div>
              <p className="help-p2">Nope. We send one email a week.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
