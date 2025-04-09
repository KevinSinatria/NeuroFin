import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "../routes/PrivateRoute";
import LayoutDashboard from "../layouts/LayoutDashboard";

// Pages
import LandingPage from "./pages/LandingPage";
import FinancialCheck from "./pages/FinancialCheck";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsAndConditions from "./pages/TermsAndConditions";

// Dashboard Pages
import Home from "./pages/auth/dashboard/Home";
import SpendingDiary from "./pages/auth/dashboard/SpendingDiary";
import MyAccount from "./pages/auth/dashboard/MyAccount";
import Challenge from "./components/Dashboard/Challenge/ChallengeTable";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/financialcheck" element={<FinancialCheck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

        {/* Private Dashboard Pages */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <LayoutDashboard />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="spendingdiary" element={<SpendingDiary />} />
          <Route path="myaccount" element={<MyAccount />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
