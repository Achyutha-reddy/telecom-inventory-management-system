import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProductManagement from './components/ProductManagement/ProductManagement';
import SupplierManagement from './components/SupplierManagement/SupplierManagement';
import AlertsNotifications from './components/AlertsNotifications/AlertsNotifications';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is placed here, so it appears on all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/supplier-management" element={<SupplierManagement />} />
          <Route path="/alerts-notifications" element={<AlertsNotifications />} />
        </Routes>
      </div>
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;
