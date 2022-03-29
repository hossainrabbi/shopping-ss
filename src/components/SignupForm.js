import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const { signIn } = useContextAuth();

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Password does not match!');
    }

    if (username && email && password && agree) {
      try {
        setLoading(true);
        await signIn(username, email, password);
        setError('');
        setLoading(false);
        navigate('/');
      } catch {
        setLoading(false);
        setError('Fail to Create an Account!');
      }
    }
  }

  return (
    <form className="px-10 md:px-2 lg:px-16" onSubmit={handleFormSubmit}>
      <input
        className="input_box"
        type="text"
        placeholder="Username*"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <input
        className="input_box"
        type="password"
        placeholder="Confirm Password*"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex items-center mb-3">
        <input
          id="agree"
          type="checkbox"
          className="h-4 w-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500"
          required
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree" className="ml-3 min-w-0 flex-1 text-gray-500">
          Agree Trams & Conditions
        </label>
      </div>
      <button
        disabled={loading}
        className="btn w-full rounded-md"
        type="submit"
      >
        {loading ? 'Loading...' : 'Signup'}
      </button>
      {error && (
        <span className="block text-sm text-red-500 text-center font-medium mt-4 p-2 bg-gray-100 rounded-md">
          {error}
        </span>
      )}
    </form>
  );
}
