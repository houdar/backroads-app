import React from "react";

import Nav from "./components/Nav";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
};

export default App;
