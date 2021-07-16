import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Index";
import Hero from "./components/Hero/Index";
import Service from "./components/Service/Index";
import { ServiceObjOne } from "./components/Service/ServiceData";
import Dedicated from "./components/Dedicated/Index";
import How from "./components/HowCard/Index";
import Testimonial from "./components/Testimonial/Index";
import Contact from "./components/Contact/Index";
import Footer from "./components/Footer/Index";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Service {...ServiceObjOne} />
      <Dedicated />
      <How />
      <Testimonial />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
