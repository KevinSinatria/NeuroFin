import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "../contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
  </StrictMode>
);