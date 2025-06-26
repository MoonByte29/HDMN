import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/ui/Loader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
// import Services from "./components/sections/Services";
import Workflow from "./components/sections/Workflow";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import CTA from "./components/sections/CTA";
import PartnerLogos from "./components/sections/PartnersLogo";
import ServicePage from "./components/pages/ServicePage";
import Features from "./components/sections/Features";
import Client from "./components/sections/Client";
import AboutPage from "./components/pages/AboutPage";
import Hero2 from "./components/sections/Hero2";
import OurServices from "./components/sections/OurServices";
import OurFeatures from "./components/sections/OurFeatures";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "HD Media Network | Web Development & Digital Marketing";
  }, []);

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (appLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>HD Media Network | Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="HD Media Network provides innovative IT solutions including web development, app development, and digital marketing services to help businesses thrive in the digital landscape."
        />
        <meta
          name="keywords"
          content="web development, app development, digital marketing, SEO, social media marketing, IT solutions"
        />
        <meta
          property="og:title"
          content="HD Media Network | Web Development & Digital Marketing"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with our innovative IT solutions and expert services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hdmedianetwork.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HD Media Network | Web Development & Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Transform your digital presence with our innovative IT solutions and expert services."
        />
        <link rel="canonical" href="https://hdmedianetwork.com" />
      </Helmet>

      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <Hero2 />
                  {/* <PartnerLogos /> */}
                  <About />
                  <OurServices />
                  <Workflow />
                  <OurFeatures />
                  {/* <Portfolio /> */}
                  <Client />
                  <Testimonials />
                  <CTA />
                  <Contact />
                </main>
              </>
            }
          />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
