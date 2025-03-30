import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import FinancialCheck from "./pages/FinancialCheck";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/auth/dashboard/Home";
import Challenge from "./pages/auth/dashboard/Challenge";
import SpendingDiary from "./pages/auth/dashboard/SpendingDiary";
import Leaderboards from "./pages/auth/dashboard/Leaderboards";
import MyAccount from "./pages/auth/dashboard/MyAccount";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/financialcheck" element={<FinancialCheck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/challenge" element={<Challenge />} />
        <Route path="/dashboard/spendingdiary" element={<SpendingDiary />} />
        <Route path="/dashboard/leaderboards" element={<Leaderboards />} />
        <Route path="/dashboard/myaccount" element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;
