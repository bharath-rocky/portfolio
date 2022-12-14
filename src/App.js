import React from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { MetricBox } from "./components/MetricBox";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <About />
      <MetricBox />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
