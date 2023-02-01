import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Help from "./components/Help";

function App() {
  return (
    <div className="App2">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;

// background a hip green, title a dark blue, paragraph gray.
// input? not sure. Gray? lighter bluish?
