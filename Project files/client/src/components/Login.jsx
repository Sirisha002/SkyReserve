import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Login = ({ setIsLogin }) => {

  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  // ✅ Inline CSS styles
  const styles = {
    form: {
      width: '100%',
      maxWidth: '400px',
      margin: '15vh auto',
      padding: '30px',
      borderRadius: '15px',
      background: '#fff',
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
    button: {
      width: '100%',
      background: 'linear-gradient(90deg,rgb(43, 120, 134),rgb(7, 92, 120))',
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
      <h2 style={styles.heading}>Login</h2>

      <div>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" style={styles.button} onClick={handleLogin}>Sign in</button>

      <p style={styles.linkText}>
        Not registered? <span style={styles.span} onClick={() => setIsLogin(false)}>Register</span>
      </p>
    </form>
  );
};

export default Login;
