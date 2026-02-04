import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './modules/public/LandingPage';
import LoginPage from './modules/auth/LoginPage';
import RegisterPage from './modules/auth/RegisterPage';
import HomeNursingPage from './modules/public/HomeNursingPage';
import HospitalStaffingPage from './modules/public/HospitalStaffingPage';
import ChildCarePage from './modules/public/ChildCarePage';
import ElderlyCarePage from './modules/public/ElderlyCarePage';
import AboutPage from './modules/public/AboutPage';
import WorkersTeamPage from './modules/public/service_team/WorkersTeamPage';
import WorkerRegistrationPage from './modules/public/service_team/WorkerRegistrationPage';
import WorkerDashboardDemo from './modules/public/service_team/WorkerDashboardDemo';
import ClientDashboardDemo from './modules/public/ClientDashboardDemo';
import ClientProfileDemo from './modules/public/ClientProfileDemo';
import ScrollToTop from './components/common/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Module Routes */}
          <Route path="/services/home-nursing" element={<HomeNursingPage />} />
          <Route path="/services/hospital-staffing" element={<HospitalStaffingPage />} />
          <Route path="/services/child-care" element={<ChildCarePage />} />
          <Route path="/services/elderly-care" element={<ElderlyCarePage />} />
          <Route path="/services/join-team" element={<WorkersTeamPage />} />
          <Route path="/services/apply" element={<WorkerRegistrationPage />} />
          <Route path="/services/provider-dashboard" element={<WorkerDashboardDemo />} />
          <Route path="/client/dashboard" element={<ClientDashboardDemo />} />
          <Route path="/client/profile" element={<ClientProfileDemo />} />
          <Route path="/services/*" element={<Navigate to="/" replace />} />
          <Route path="/dashboard" element={<Navigate to="/login" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
