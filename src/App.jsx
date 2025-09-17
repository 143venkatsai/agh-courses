// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseItem from "./components/CourseItem";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course/:id" element={<CourseItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
