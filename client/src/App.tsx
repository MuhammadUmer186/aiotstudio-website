import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import IoTDashboard from "./pages/IoTDashboard";
import Docs from "./pages/Docs";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<IoTDashboard />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/services" element={<Navigate to="/#features" replace />} />
        <Route path="/industries" element={<Navigate to="/#use-cases" replace />} />
        <Route path="/pricing" element={<Navigate to="/#cta" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Navigate to="/#cta" replace />} />
        <Route path="/demo/ai" element={<Navigate to="/dashboard" replace />} />
        <Route path="/demo/iot" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
