import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./Components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
