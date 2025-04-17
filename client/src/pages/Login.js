import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      setSuccess('');
      return;
    }

    // Simulación de autenticación
    if (email === 'admin@vecindario.com' && password === '123456') {
      setSuccess('Inicio de sesión exitoso.');
      setError('');
    } else {
      setError('Correo o contraseña incorrectos.');
      setSuccess('');
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

        <button className="login-button" type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;