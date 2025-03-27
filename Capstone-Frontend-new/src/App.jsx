import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import FinancialCheck from "./pages/FinancialCheck";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/auth/dashboard/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/financialcheck" element={<FinancialCheck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
