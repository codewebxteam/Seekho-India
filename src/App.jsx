import React from "react";
import { Routes, Route } from "react-router-dom"; // Routing Import

// Import All Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseOverview from "./components/CourseOverview";
import Cards from "./components/Cards";
import LearningPath from "./components/LearningPath";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Transformation from "./components/Transformation";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

// --- NEW IMPORTS (Policy Pages) ---
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";

// --- LANDING PAGE COMPONENT ---
// Yeh saare purane components ko ek saath wrap karta hai
const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      <Navbar />
      <Hero />
      <CourseOverview />
      <Cards />
      <LearningPath />
      <ProjectsShowcase />
      <Transformation />
      <Testimonials />
      <Reviews />
      <FAQ />
      <Offer />
      <Footer />
    </div>
  );
};

// --- MAIN APP COMPONENT ---
// Yahan hum decide karte hain ki kaunsa URL khulne par kya dikhana hai
const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Thank You Page (After Payment) */}
      <Route path="/thank-you" element={<ThankYou />} />

      {/* --- NEW ROUTES FOR POLICIES --- */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
    </Routes>
  );
};

export default App;
