"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password') {
      router.push('/dashboard'); 
    } else {
      setError('Email or password incorrect');
    }
  };

  return (
    <div className="flex flex-col items-center pt-28">
      <form onSubmit={handleSubmit} className="form">
        {error && <p className="error">{error}</p>}
        <div className='pb-5'>
            <h1 className='text-center text-4xl font-bold pb-5'>Inicia sesión</h1>
          <input
            type="email"
            className='w-full p-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo" 
            required
          />
        </div>
        <div className='pb-5'>
          <input
            type="password"
            className='w-full p-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña" 
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white 
        font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;