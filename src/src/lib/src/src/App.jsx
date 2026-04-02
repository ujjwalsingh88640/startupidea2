// filepath: src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import AIPlanner from './pages/AIPlanner';
import Vendors from './pages/Vendors';
import Budget from './pages/Budget';

export default function App() {
  // Mock auth state for UI demonstration
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {isAuthenticated ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="ai-planner" element={<AIPlanner />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="budget" element={<Budget />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/auth" replace />} />
        )}
      </Routes>
    </Router>
  );
}
