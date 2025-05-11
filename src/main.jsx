<<<<<<< HEAD
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
=======
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
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
