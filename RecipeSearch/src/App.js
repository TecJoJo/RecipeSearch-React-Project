import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleMeal from "./pages/SingleMeal";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/meal/:id" element={<SingleMeal />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
