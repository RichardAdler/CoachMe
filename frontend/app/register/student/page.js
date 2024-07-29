'use client'
// app/home/pages/register.js
import { useState } from 'react';
import { registerWithEmailAndPassword, signInWithGoogle } from '../../../firebaseConfig/firebase';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerWithEmailAndPassword(email, password, username);
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">Register</h1>
      <form className="flex flex-col gap-4" onSubmit={handleRegister}>
        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Register</button>
      </form>
      <button onClick={signInWithGoogle} className="mt-4 p-2 bg-red-500 text-white rounded">
        Register with Google
      </button>
      <p className="mt-4">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
};

export default Register;
