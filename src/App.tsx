import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { HelmetProvider } from "react-helmet-async";
import HomeContainer from "./container/HomeContainer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
