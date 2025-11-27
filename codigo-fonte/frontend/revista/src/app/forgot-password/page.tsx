'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import useAuth from '@/hooks/useAuth';
import { USER_API_BASE } from '@/lib/fetcher';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation States
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');

  const validateEmail = (val: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setEmailError('Por favor, insira um endereço de e-mail válido.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) return;

    setLoading(true);

    try {
      const res = await fetch(`${USER_API_BASE}/Authenticate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        let msg = 'Credenciais inválidas';
        try {
          const data = await res.json();
          if (data.message) msg = data.message;
        } catch { }
        throw new Error(msg);
      }

      const authData = await res.json();

      if (!authData.jwtToken || !authData.id) {
        throw new Error("Resposta do servidor inválida (Token ausente).");
      }

      await login({
        id: authData.id,
        jwtToken: authData.jwtToken,
      });

      toast.success('Login realizado com sucesso!');
      router.push('/');
      router.refresh();

    } catch (err: any) {
      console.error(err);
      const msg = err.message || 'Falha no login';
      setLoginError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl transition-all duration-300 transform hover:shadow-3xl">
        
        {/* Área da Logo*/}
        <div className="flex justify-center mb-2">
          <img
            src="/faviccon.png"
            alt="Logo RBEB"
            className="h-[100px] w-[100px] object-contain rounded-full shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/100x100/ffffff/2c3e50?text=RBEB";
              target.onerror = null;
            }}
          />
        </div>

        {/* Cabeçalho */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Bem-vindo de volta!
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Faça login para acessar sua conta
          </p>
        </div>

        {/* Exibição de Erros */}
        {loginError && (
          <div className="p-4 text-sm font-medium text-red-700 bg-red-100 border border-red-300 rounded-lg flex items-center gap-2">
            <AlertCircle size={18} />
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input de Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) validateEmail(e.target.value);
                }}
                onBlur={() => validateEmail(email)}
                className={`block w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${
                  emailError
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500 placeholder-red-300'
                    : 'border-gray-300 placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500'
                }`}
                placeholder="seu@email.com"
                required
                disabled={loading}
              />
            </div>
            {emailError && <p className="mt-1 text-xs text-red-600">{emailError}</p>}
          </div>

          {/* Input de Senha */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 ease-in-out"
                placeholder="••••••••"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            {/* Esqueceu a senha*/}
            <div className="flex justify-end mt-2">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-500 transition duration-150 ease-in-out"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </div>

          {/*Botão de Login*/}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium transition duration-200 ease-in-out transform ${
              loading
                ? 'bg-emerald-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 hover:scale-[1.01]'
            } text-white`}
          >
            {loading ? (
              <>
                 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
                 <span>Entrando...</span>
              </>
            ) : (
              <>
                Entrar <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Rodapé do Card */}
        <div className="text-sm text-center pt-2">
          <p className="text-gray-600">
            Não tem uma conta?{' '}
            <Link 
              href="/register" 
              className="font-medium text-emerald-600 hover:text-emerald-500 transition duration-150 ease-in-out"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}