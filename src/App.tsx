import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from 'aos';

function App() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} SujiHairAndMakeup. All rights
            reserved.{" "}
            <li className="list-none animate-blinkWave">
              <a href="https://naveen-767.github.io/Portfolio-Naveen/" target="_blank">
                Contact Developer
              </a>
            </li>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
