import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import IndustriesPage from './pages/IndustriesPage';
import InsightsPage from './pages/InsightsPage';
import InsightArticlePage from './pages/InsightArticlePage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

// Dynamic Subpage View
import SubpageView from './pages/SubpageView';
import LeadershipPage from './pages/LeadershipPage';
import LeaderProfilePage from './pages/LeaderProfilePage';

// Backward-compatible pages
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import TechStackPage from './pages/TechStackPage';
import WorkPage from './pages/WorkPage';

function App() {
  const handleOpenModal = () => {
    window.location.assign('/contact');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container min-h-screen flex flex-col justify-between">
        <Navbar onOpenModal={handleOpenModal} />

        <main className="flex-1">
          <Routes>
            {/* Primary Navigation Hubs */}
            <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />
            <Route path="/about" element={<AboutPage onOpenModal={handleOpenModal} />} />
            <Route path="/capabilities" element={<CapabilitiesPage onOpenModal={handleOpenModal} />} />
            <Route path="/industries" element={<IndustriesPage onOpenModal={handleOpenModal} />} />
            <Route path="/insights" element={<InsightsPage onOpenModal={handleOpenModal} />} />
            <Route path="/careers" element={<CareersPage onOpenModal={handleOpenModal} />} />
            <Route path="/contact" element={<ContactPage onOpenModal={handleOpenModal} />} />

            {/* Dedicated Leadership Page & Individual Profiles */}
            <Route path="/about/leadership" element={<LeadershipPage onOpenModal={handleOpenModal} />} />
            <Route path="/about/leadership/:id" element={<LeaderProfilePage onOpenModal={handleOpenModal} />} />
            <Route path="/leadership" element={<LeadershipPage onOpenModal={handleOpenModal} />} />
            <Route path="/leadership/:id" element={<LeaderProfilePage onOpenModal={handleOpenModal} />} />

            {/* Dynamic Subpages (All Navbar Dropdown links) */}
            <Route path="/about/:slug" element={<SubpageView category="about" onOpenModal={handleOpenModal} />} />
            <Route path="/capabilities/:slug" element={<SubpageView category="capabilities" onOpenModal={handleOpenModal} />} />
            <Route path="/industries/:slug" element={<SubpageView category="industries" onOpenModal={handleOpenModal} />} />
            <Route path="/insights/:slug" element={<InsightArticlePage onOpenModal={handleOpenModal} />} />

            {/* Additional / Backward-compatible Routes */}
            <Route path="/solutions" element={<CapabilitiesPage onOpenModal={handleOpenModal} />} />
            <Route path="/services" element={<ServicesPage onOpenModal={handleOpenModal} />} />
            <Route path="/process" element={<ProcessPage onOpenModal={handleOpenModal} />} />
            <Route path="/tech-stack" element={<TechStackPage onOpenModal={handleOpenModal} />} />
            <Route path="/work" element={<WorkPage onOpenModal={handleOpenModal} />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer onOpenModal={handleOpenModal} />
      </div>
    </Router>
  );
}

export default App;
