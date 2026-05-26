import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AppNav from './layout/AppNav';
import Footer from './layout/Footer';
import LenisProvider from './layout/LenisProvider';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import WritingPage from './pages/WritingPage';
import AboutPage from './pages/AboutPage';
import { S } from './theme';

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  enter:   { opacity: 1, x: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, x: -16, transition: { duration: 0.18, ease: 'easeIn' } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit">
        <Routes location={location}>
          <Route path="/"        element={<HomePage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/work"    element={<WorkPage />} />
          <Route path="/about"   element={<AboutPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-root" style={{ background: S.bg, color: S.text, fontFamily: S.sans, minHeight: '100svh' }}>
        <LenisProvider>
          <AppNav />
          <div id="app-content">
            <AnimatedRoutes />
            <Footer />
          </div>
        </LenisProvider>
      </div>
    </BrowserRouter>
  );
}
