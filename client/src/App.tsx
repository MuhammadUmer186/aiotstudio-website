import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AIDemo from "./pages/AIDemo";
import IoTDashboard from "./pages/IoTDashboard";
import About from "./pages/About";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo/ai" element={<AIDemo />} />
        <Route path="/demo/iot" element={<IoTDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
