import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LenisProvider from './layout/LenisProvider';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import WritingPage from './pages/WritingPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#060606', color: '#edebe6', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
        <LenisProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </LenisProvider>
      </div>
    </BrowserRouter>
  );
}
