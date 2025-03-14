
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "./components/footer";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
  <HelmetProvider>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
  </HelmetProvider>

    </>
  );
}

export default App;
