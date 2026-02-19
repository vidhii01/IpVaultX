
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Whitepaper from './pages/Whitepaper';
import ConnectWallet from './pages/ConnectWallet';
import Contact from './pages/Contact';
import About from './pages/About';
import ProtocolPage from './pages/ProtocolPage';
import TokenomicsPage from './pages/TokenomicsPage';
import NetworkPage from './pages/NetworkPage';
import IntegrationsPage from './pages/IntegrationsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/protocol" element={<ProtocolPage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
