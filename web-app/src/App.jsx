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
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes inside Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/manufacturer" replace />} />

            {/* Manufacturer Context */}
            <Route
              path="manufacturer"
              element={
                <ProtectedRoute allowedRoles={['manufacturer']}>
                  <ManufacturerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="supply-chain"
              element={
                <ProtectedRoute allowedRoles={['manufacturer', 'admin']}>
                  <SupplyChainTransfer />
                </ProtectedRoute>
              }
            />

            {/* Admin Context */}
            <Route
              path="user-management"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserRoleManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="ai-suspicious-activity"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AISuspiciousActivity />
                </ProtectedRoute>
              }
            />

            {/* General Context */}
            <Route
              path="scan-history"
              element={
                <ProtectedRoute>
                  <ScanHistorySafetyAlerts />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Standalone Route for Consumer View - Public */}
          <Route path="/recalled" element={<RecalledProductAlert />} />
          <Route path="/counterfeit" element={<CounterfeitAlertResult />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
