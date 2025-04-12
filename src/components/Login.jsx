import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password); // En az 6 karakter, 1 büyük harf, 1 rakam
  const isFormValid = isEmailValid && isPasswordValid && accepted;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/success');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isEmailValid && email && <p>Email geçerli değil.</p>}

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isPasswordValid && password && <p>Şifre güçlü değil.</p>}

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>
      {!accepted && <p>Şartları kabul etmelisin.</p>}

      <button type="submit" disabled={!isFormValid}>
        Giriş Yap
      </button>
    </form>
  );
}
