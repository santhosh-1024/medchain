import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/manufacturer'); // Default redirect, ProtectedRoute will handle role-based logic later
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
            console.error(err);
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-background-soft flex items-center justify-center p-6 font-body">
            <div className="max-w-[450px] w-full space-y-8">
                <div className="text-center space-y-2">
                    <div className="flex justify-center mb-6">
                        <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                            <span className="material-symbols-outlined text-[40px] font-bold">shield_health</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-black text-text-main tracking-tighter uppercase">Protocol Access</h2>
                    <p className="text-text-muted font-medium">Identify your credentials to access the MedChain Intelligence Layer.</p>
                </div>

                <div className="medical-card p-10 bg-white">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-bold animate-shake">
                            <span className="material-symbols-outlined">error</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Network Identity (Email)</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">alternate_email</span>
                                <input
                                    type="email"
                                    required
                                    className="input-field pl-12 pr-4 py-3.5 w-full bg-slate-50 border-slate-100 focus:bg-white"
                                    placeholder="name@provider.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Access Token (Password)</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">key</span>
                                <input
                                    type="password"
                                    required
                                    className="input-field pl-12 pr-4 py-3.5 w-full bg-slate-50 border-slate-100 focus:bg-white"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="btn-primary w-full py-4 text-sm font-black shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4"
                        >
                            {loading ? 'VERIFYING...' : 'INITIALIZE SESSION'}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                        <p className="text-[11px] text-text-muted font-bold uppercase tracking-widest">
                            Secure Authentication • AES-256 Encryption
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.3em] opacity-50">
                        © 2024 MEDCHAIN INTELLIGENCE UNIT
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
