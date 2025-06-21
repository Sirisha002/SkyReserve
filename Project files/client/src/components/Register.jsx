import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Register = ({ setIsLogin }) => {

  const { setUsername, setEmail, setPassword, setUsertype, register } = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  };

  const styles = {
    form: {
      width: '100%',
      maxWidth: '420px',
      margin: '15vh auto',
      padding: '30px',
      borderRadius: '15px',
      background: '#ffffff',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Montserrat, sans-serif',
      transition: '0.3s ease-in-out'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '25px',
      color: '#2c5364',
      fontWeight: '600'
    },
    input: {
      height: '45px',
      borderRadius: '8px',
      fontSize: '0.95rem',
      border: '1px solid #ccc',
      marginBottom: '20px',
      padding: '0 10px',
      width: '100%'
    },
    select: {
      height: '45px',
      borderRadius: '8px',
      fontSize: '0.95rem',
      marginBottom: '20px',
      width: '100%',
      border: '1px solid #ccc',
      padding: '0 10px'
    },
    button: {
      width: '100%',
      background: 'linear-gradient(90deg,rgb(55, 128, 145),rgb(7, 97, 117))',
      border: 'none',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      cursor: 'pointer'
    },
    linkText: {
      marginTop: '20px',
      textAlign: 'center',
      color: '#444',
      fontSize: '0.9rem'
    },
    span: {
      color: '#2575fc',
      fontWeight: '500',
      cursor: 'pointer'
    }
  };

  return (
    <form style={styles.form}>
      <h2 style={styles.heading}>Register</h2>

      <input
        type="text"
        placeholder="Username"
        style={styles.input}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email address"
        style={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select style={styles.select} onChange={(e) => setUsertype(e.target.value)}>
        <option value="">User type</option>
        <option value="admin">Admin</option>
        <option value="customer">Customer</option>
        <option value="flight-operator">Flight Operator</option>
      </select>

      <button type="submit" style={styles.button} onClick={handleRegister}>Sign up</button>

      <p style={styles.linkText}>
        Already registered? <span style={styles.span} onClick={() => setIsLogin(true)}>Login</span>
      </p>
    </form>
  );
};

export default Register;
