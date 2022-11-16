import React, { useState, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { useAuth, AuthProvider } from '../contexts/authContext';

const SignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signup } = useAuth();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value;
    const inputType = (e.target as HTMLInputElement).name;

    if (inputType === 'username') {
      setUsername(val);
    } else if (inputType === 'password') {
      setPassword(val);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signup(username, password);
    console.log('submitted');
  };

  return (
    // <AuthProvider>
    <form onSubmit={handleSubmit}>
      <h4>Sign Up</h4>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="email"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Create Account</button>
      <div>
        <p>Already have an account?</p>
        <Link href="/login">
          <button>Click Here</button>
        </Link>
      </div>
    </form>
    // </AuthProvider>
  );
};

export default SignUp;
