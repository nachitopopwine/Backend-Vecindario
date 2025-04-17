import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import LocatarioDashboard from "./pages/LocatarioDashboard";
import CompradorDashboard from "./pages/CompradorDashboard";
import RepartidorDashboard from "./pages/RepartidorDashboard";
import Forbidden403 from "./pages/Forbidden403";
import NotFound404 from "./pages/NotFound404";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/locatario" element={<LocatarioDashboard />} />
        <Route path="/comprador" element={<CompradorDashboard />} />
        <Route path="/repartidor" element={<RepartidorDashboard />} />
        <Route path="/403" element={<Forbidden403 />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;