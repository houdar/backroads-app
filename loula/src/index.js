import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Nav from "./components/Nav";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
