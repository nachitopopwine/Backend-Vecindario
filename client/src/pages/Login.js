import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Usuarios predefinidos
  const users = [
    { email: "admin@admin.com", password: "admin", role: "admin" },
    { email: "locatario@user.com", password: "locatario", role: "locatario" },
    { email: "comprador@user.com", password: "comprador", role: "comprador" },
    { email: "repartidor@user.com", password: "repartidor", role: "repartidor" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar credenciales
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setSuccess("Inicio de sesión exitoso.");
      setError("");
      console.log(`Usuario autenticado correctamente: ${user.role}`);

      // Redirigir al menú correspondiente
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "locatario":
          navigate("/locatario");
          break;
        case "comprador":
          navigate("/comprador");
          break;
        case "repartidor":
          navigate("/repartidor");
          break;
        default:
          navigate("/");
      }
    } else {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
      setSuccess("");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;