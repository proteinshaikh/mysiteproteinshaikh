import { useState, JSX } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onRegister: () => void;
    onForgot: () => void;
}

export default function LoginDialog({ isOpen, onClose, onRegister, onForgot }: Props): JSX.Element {
    const { register, handleSubmit } = useForm<{ email: string; password: string }>();
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submit = async (data: { email: string; password: string }) => {
        setLoading(true);
        setError(null);
        try {
            await login(data.email, data.password);
            onClose();
        } catch {
            setError('Invalid email or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 12 }}
                    transition={{ duration: 0.22 }}
                >
                    <Dialog.Panel className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7 space-y-5">
                        {/* Header */}
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                            <Dialog.Title className="text-xl font-bold text-gray-900">Welcome back</Dialog.Title>
                            <p className="text-sm text-gray-400 mt-0.5">Sign in to your account</p>
                        </div>

                        <form onSubmit={handleSubmit(submit)} className="space-y-3">
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                placeholder="Email address"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                            />
                            <input
                                {...register('password', { required: true })}
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                            />
                            {error && <p className="text-red-500 text-xs">{error}</p>}
                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
                            >
                                {loading ? 'Signing in…' : 'Sign in'}
                            </motion.button>
                        </form>

                        <div className="flex justify-between text-xs text-indigo-500">
                            <button onClick={() => { onClose(); onRegister(); }} className="hover:text-indigo-700 transition">
                                Create account
                            </button>
                            <button onClick={() => { onClose(); onForgot(); }} className="hover:text-indigo-700 transition">
                                Forgot password?
                            </button>
                        </div>
                    </Dialog.Panel>
                </motion.div>
            </div>
        </Dialog>
    );
}
