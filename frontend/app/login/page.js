'use client'
// app/home/pages/login.js
import { useState } from 'react';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../firebaseConfig/firebase';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc'; // Importing the Google icon

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await logInWithEmailAndPassword(email, password);
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-700">Coach</span>
            <span className="text-2xl font-bold text-orange-500">Me</span>
          </div>
        </div>
        <h2 className="text-center text-xl font-bold mb-6">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            className="p-2 border rounded"
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="p-2 border rounded"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/forgot-password" className="text-blue-500 text-sm text-right">Forgot password ?</a>
          <button type="submit" className="p-2 bg-orange-500 text-white rounded">Continue with email</button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <p>Don't have an account? <a href="/register" className="text-blue-500">Sign up</a></p>
          <p className="my-2">OR</p>
          <button onClick={signInWithGoogle} className="p-2 bg-white border rounded shadow-sm flex items-center">
            <FcGoogle className="w-6 h-6 mr-2" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
