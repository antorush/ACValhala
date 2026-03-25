import { useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Subscribe from "./components/Subscribe/Subscribe";
import SystemRequir from "./components/System Requirements/System";
import { FeaturesList, SystemRequirements } from "./data/data";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features list={FeaturesList} />
      <SystemRequir system={SystemRequirements} />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
