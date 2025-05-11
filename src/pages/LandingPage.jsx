import Footer from "../components/Footer.jsx";
import AboutUs from "../components/LandingPage/AboutUs.jsx";
import FinTest from "../components/LandingPage/FinTest.jsx";
import FirstSection from "../components/LandingPage/FirstSection.jsx";
import HowtoUse from "../components/LandingPage/HowtoUse.jsx";
import SecondSection from "../components/LandingPage/SecondSection.jsx";
import Navbar from "../components/Navbar.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <FinTest />
      <AboutUs />
      <HowtoUse />
      <Footer />
    </>
  );
}
