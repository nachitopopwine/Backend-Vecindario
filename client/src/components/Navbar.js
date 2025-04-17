import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de crear este archivo para los estilos

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Vecindario</Link>
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;