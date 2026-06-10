import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { HelmetProvider } from "react-helmet-async";
import HomeContainer from "./container/HomeContainer";

function App() {
  useEffect(() => {
    // Delay AOS initialization to allow initial paint and prevent forced reflow
    const timer = setTimeout(() => {
      AOS.init({ 
        duration: 1000, 
        once: true
      });
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HelmetProvider>
        <HomeContainer />
      </HelmetProvider>

    </>
  );
}

export default App;
