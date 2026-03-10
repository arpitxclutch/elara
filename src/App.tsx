import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Story from './pages/Story';
import Promise from './pages/Promise';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ivory text-slate font-sans selection:bg-elara-gold selection:text-midnight">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/promise" element={<Promise />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
