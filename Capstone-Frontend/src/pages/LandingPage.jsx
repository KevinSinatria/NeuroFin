import "../css/output.css";
import Navbar from "../components/Navbar.jsx";
import FirstSection from "../components/LandingPage/FirstSection.jsx";
import SecondSection from "../components/LandingPage/SecondSection.jsx";
import FinTest from "../components/LandingPage/FinTest.jsx";
import AboutUs from "../components/LandingPage/AboutUs.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <FinTest />
      <AboutUs />
    </>
  );
}
