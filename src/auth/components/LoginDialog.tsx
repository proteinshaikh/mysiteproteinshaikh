import { useState, JSX } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../AuthContext';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onRegister: () => void;
    onForgot: () => void;
}

function GoogleIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
    );
}

export default function LoginDialog({ isOpen, onClose, onRegister, onForgot }: Props): JSX.Element {
    const { register, handleSubmit } = useForm<{ email: string; password: string }>();
    const { login, loginWithGoogle } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [gLoading, setGLoading] = useState(false);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setGLoading(true);
            try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });
                const profile = await res.json();
                loginWithGoogle(profile.email, profile.name ?? profile.email);
                onClose();
            } catch {
                setError('Google sign-in failed. Try again.');
            } finally {
                setGLoading(false);
            }
        },
        onError: () => setError('Google sign-in was cancelled.'),
    });

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
                        <div>
                            <Dialog.Title className="text-xl font-bold text-gray-900">Sign in</Dialog.Title>
                            <p className="text-sm text-gray-400 mt-0.5">to send a message or access your account</p>
                        </div>

                        {/* Google — primary */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => googleLogin()}
                            disabled={gLoading}
                            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition disabled:opacity-60"
                        >
                            <GoogleIcon />
                            {gLoading ? 'Signing in…' : 'Continue with Google'}
                        </motion.button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-100" />
                            <span className="text-xs text-gray-300 font-medium">or</span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        {/* Email / password */}
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
                                {loading ? 'Signing in…' : 'Sign in with email'}
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
