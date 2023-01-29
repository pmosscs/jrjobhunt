import React, { useState } from "react";

function Form() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {!submitted ? (
        <form>
          <input
            className="input-bar"
            type="email"
            placeholder="Your Email Here"
          />
          <button
            className="button-bar"
            onClick={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            Submit
          </button>
          <p className="disclaimer">
            Only 1 email a week, unsubscribe anytime.
          </p>
        </form>
      ) : (
        <div className="submitted-div">
          {/* <div className="bar"></div> */}
          <p className="thank-you-message">
            Thank you for signing up. Please check for a welcome message in your
            inbox and consider taking the short survey to help us continue
            creating content specific to your needs.
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;
