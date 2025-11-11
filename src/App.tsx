import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import P2PTransfer from './pages/P2PTransfer';
import LoanApplication from './pages/LoanApplication';
import ServicePayment from './pages/ServicePayment';
import Cabinet from './pages/Cabinet';

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const handleLogin = (email: string) => {
    setUserEmail(email);
    localStorage.setItem('userEmail', email);
  };

  const handleLogout = () => {
    setUserEmail(null);
    localStorage.removeItem('userEmail');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userEmail={userEmail} onLogin={handleLogin} onLogout={handleLogout} />} />
        <Route path="/p2p" element={<P2PTransfer />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/service/:serviceId" element={<ServicePayment />} />
        <Route path="/cabinet" element={userEmail ? <Cabinet email={userEmail} onLogout={handleLogout} /> : <Home userEmail={null} onLogin={handleLogin} onLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
