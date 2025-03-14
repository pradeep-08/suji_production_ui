import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./src/App";
import { HelmetProvider } from "react-helmet-async";

function AppRouter() {
  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    
  );
}

export default AppRouter;
