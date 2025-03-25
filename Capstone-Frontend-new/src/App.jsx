import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import FinancialCheck from "./pages/FinancialCheck";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/financialcheck" element={<FinancialCheck />} />
      </Routes>
    </>
  );
}

export default App;
