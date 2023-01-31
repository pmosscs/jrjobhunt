import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const body = {
      email: input,
    };
    axios
      .post("http://localhost:4000/adduser", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {!submitted ? (
        <form>
          <input
            className="input-bar"
            type="email"
            placeholder="Your Email Here"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button-bar" onClick={submitHandler}>
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
