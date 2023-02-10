import axios from "axios";
import React, { useState } from "react";
import { emailSchema } from "./validation/EmailValidation";
// import ReCAPTCHA from "react-google-recaptcha";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");
  const [invalidClass, setInvalidClass] = useState(false);

  // console.log("Captcha value:", value)

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      email: input,
    };
    const isValid = await emailSchema.isValid(body);
    if (isValid) {
      setSubmitted(true);
      axios
        .post("http://localhost:4000/adduser", body)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    } else {
      setInvalidClass(true);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form>
          <p className={`${!invalidClass ? "hidden" : "visible"}`}>
            Please enter a valid email address
          </p>
          <input
            className={`input-bar ${!invalidClass ? " " : "invalid-class"}`}
            type="email"
            placeholder="Your Email Here"
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <ReCAPTCHA
            sitekey="6LebeWUkAAAAAG9Hi6Y1sUXlSrHtxhHQE_4nKG2_"
            onChange={onChange}
          /> */}
          <button className="button-bar" onClick={submitHandler}>
            Submit
          </button>
          <p className="disclaimer">One email a week, unsubscribe anytime.</p>
        </form>
      ) : (
        <div className="submitted-div">
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
