import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import LenisProvider from './layout/LenisProvider';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import WritingPage from './pages/WritingPage';
import AboutPage from './pages/AboutPage';

const variants = {
  initial: { opacity: 0 },
  enter:   { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.2,  ease: 'easeIn'  } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={variants} initial="initial" animate="enter" exit="exit">
        <Routes location={location}>
          <Route path="/"        element={<HomePage />} />
          <Route path="/work"    element={<WorkPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/about"   element={<AboutPage />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <Navbar />
        <AnimatedRoutes />
      </LenisProvider>
    </BrowserRouter>
  );
}
