import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AIChatWidget from "./components/AIChatWidget";
import AppFooter from "./components/site/AppFooter";
import AppNavbar from "./components/site/AppNavbar";
import ContactSection from "./components/site/ContactSection";
import CoverHero from "./components/site/CoverHero";
import PageVideoShell from "./components/site/PageVideoShell";
import PortfolioAboutSection from "./components/site/PortfolioAboutSection";
import PortfolioExperienceSection from "./components/site/PortfolioExperienceSection";
import PortfolioPageIntro from "./components/site/PortfolioPageIntro";
import PortfolioProficiencySection from "./components/site/PortfolioProficiencySection";
import PortfolioProjectsSection from "./components/site/PortfolioProjectsSection";
import PortfolioServicesSection from "./components/site/PortfolioServicesSection";
import PortfolioStackSection from "./components/site/PortfolioStackSection";
import ScrollEffects from "./components/site/ScrollEffects";

const HomePage = () => (
  <>
    <CoverHero />
    <PageVideoShell>
      <PortfolioAboutSection />
      <PortfolioProficiencySection />
      <PortfolioProjectsSection />
      <PortfolioServicesSection />
      <PortfolioExperienceSection />
      <ContactSection />
    </PageVideoShell>
  </>
);

const AboutPage = () => (
  <PageVideoShell>
    <PortfolioPageIntro
      kicker="About Page"
      title="The story, mindset, and growth path behind Muzamil’s portfolio."
      body="This page focuses only on the person behind the work, so the content stays clean and separate from skills, projects, and contact."
    />
    <PortfolioAboutSection />
    <PortfolioExperienceSection />
  </PageVideoShell>
);

const SkillsPage = () => (
  <PageVideoShell>
    <PortfolioPageIntro
      kicker="Skills Page"
      title="A focused page for technical strengths, workflows, and the tools Muzamil works with most."
      body="This page keeps the spotlight on capability, stack confidence, and the type of frontend and full-stack work Muzamil is building toward."
    />
    <PortfolioProficiencySection />
    <PortfolioStackSection />
  </PageVideoShell>
);

const ProjectsPage = () => (
  <PageVideoShell>
    <PortfolioPageIntro
      kicker="Projects Page"
      title="A separate page for selected builds, practical experiments, and portfolio work."
      body="This page is dedicated to project highlights only, so visitors can understand the kind of interfaces, apps, and product ideas Muzamil has been working on."
    />
    <PortfolioProjectsSection />
    <PortfolioServicesSection />
  </PageVideoShell>
);

const ContactPage = () => (
  <PageVideoShell>
    <PortfolioPageIntro
      kicker="Contact Page"
      title="A simple place to connect for work, internships, collaboration, or project discussions."
      body="This page stays focused on contact details only, so someone visiting the site can reach out without distraction."
    />
    <ContactSection />
  </PageVideoShell>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollEffects />
      <div className="app-shell text-foreground selection:bg-primary selection:text-black">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <AppFooter />
        <AIChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
