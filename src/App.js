import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
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
    </div>
  );
}

export default App;

// background a hip green, title a dark blue, paragraph gray.
// input? not sure. Gray? lighter bluish?
