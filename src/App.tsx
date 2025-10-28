import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import P2PTransfer from './pages/P2PTransfer';
import LoanApplication from './pages/LoanApplication';
import ServicePayment from './pages/ServicePayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p2p" element={<P2PTransfer />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/service/:serviceId" element={<ServicePayment />} />
      </Routes>
    </Router>
  );
}

export default App;
