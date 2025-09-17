// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";
import CourseItem from "./components/CourseItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Courses />} />
        <Route exact path="/course/:id" element={<CourseItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
