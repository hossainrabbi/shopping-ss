import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useContextAuth();

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (email && password) {
      try {
        setLoading(true);
        await login(email, password);
        setError('');
        setLoading(false);
        navigate('/');
      } catch {
        setLoading(false);
        setError('Fail to Login an Account!');
      }
    }
  }

  return (
    <form className="px-10 md:px-2 lg:px-16" onSubmit={handleFormSubmit}>
      <input
        className="input_box"
        type="email"
        placeholder="Email*"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input_box"
        type="password"
        placeholder="Password*"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading} className="btn w-full rounded-md">
        {loading ? 'Loading...' : 'Login'}
      </button>
      {error && (
        <span className="block text-sm text-red-500 text-center font-medium mt-4 p-2 bg-gray-100 rounded-md">
          {error}
        </span>
      )}
    </form>
  );
}
