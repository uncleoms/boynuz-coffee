import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen overflow-x-hidden bg-[#FAF7F2] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
