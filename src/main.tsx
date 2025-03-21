import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider> {/* Wrap everything inside HelmetProvider */}
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);
