import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ManufacturerDashboard from './pages/ManufacturerDashboard';
import SupplyChainTransfer from './pages/SupplyChainTransfer';
import UserRoleManagement from './pages/UserRoleManagement';
import ScanHistorySafetyAlerts from './pages/ScanHistorySafetyAlerts';
import AISuspiciousActivity from './pages/AISuspiciousActivity';
import RecalledProductAlert from './pages/RecalledProductAlert';
import CounterfeitAlertResult from './pages/CounterfeitAlertResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/manufacturer" replace />} />
          <Route path="manufacturer" element={<ManufacturerDashboard />} />
          <Route path="supply-chain" element={<SupplyChainTransfer />} />
          <Route path="user-management" element={<UserRoleManagement />} />
          <Route path="scan-history" element={<ScanHistorySafetyAlerts />} />
          <Route path="ai-suspicious-activity" element={<AISuspiciousActivity />} />
        </Route>
        {/* Standalone Route for Consumer View */}
        <Route path="/recalled" element={<RecalledProductAlert />} />
        <Route path="/counterfeit" element={<CounterfeitAlertResult />} />
      </Routes>
    </Router>
  );
}

export default App;
