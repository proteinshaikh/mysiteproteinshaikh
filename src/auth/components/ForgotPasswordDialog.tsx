import { useState, JSX } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import * as api from '../authApi';

interface Props { isOpen: boolean; onClose: () => void; }
type Step = 'EMAIL' | 'RESET';
type EmailForm = { email: string };
type ResetForm = { email: string; otp: string; password: string };

export default function ForgotPasswordDialog({ isOpen, onClose }: Props): JSX.Element {
    const [step, setStep] = useState<Step>('EMAIL');
    const [emailForOtp, setEmailForOtp] = useState('');

    const { register, handleSubmit, formState } = useForm<EmailForm>();
    const { register: regReset, handleSubmit: submitReset, formState: resetState } = useForm<ResetForm>({ defaultValues: { email: emailForOtp } });

    const onEmail = async (data: EmailForm) => {
        try {
            await api.forgot(data.email);
            setEmailForOtp(data.email);
            setStep('RESET');
        } catch {
            alert('Error sending OTP');
        }
    };

    const onReset = async (data: ResetForm) => {
        try {
            await api.resetPwd(data.email, data.otp, data.password);
            alert('Password updated. You can now log in.');
            onClose();
        } catch {
            alert('Invalid OTP or other error');
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                                </svg>
                            </div>
                            <Dialog.Title className="text-xl font-bold text-gray-900">
                                {step === 'EMAIL' ? 'Forgot password' : 'Reset password'}
                            </Dialog.Title>
                            <p className="text-sm text-gray-400 mt-0.5">
                                {step === 'EMAIL' ? "We'll send an OTP to your email" : `Enter the OTP sent to ${emailForOtp}`}
                            </p>
                        </div>

                        {/* Step indicator */}
                        <div className="flex gap-2">
                            {(['EMAIL', 'RESET'] as Step[]).map(s => (
                                <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${step === s || (s === 'EMAIL' && step === 'RESET') ? 'bg-indigo-500' : 'bg-gray-200'}`} />
                            ))}
                        </div>

                        {step === 'EMAIL' && (
                            <form onSubmit={handleSubmit(onEmail)} className="space-y-3">
                                <input
                                    {...register('email', { required: true })}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                                />
                                {formState.errors.email && <p className="text-red-500 text-xs">{formState.errors.email.message}</p>}
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">
                                    Send OTP
                                </motion.button>
                            </form>
                        )}

                        {step === 'RESET' && (
                            <form onSubmit={submitReset(onReset)} className="space-y-3">
                                <input {...regReset('email')} type="email" readOnly
                                    className="w-full border border-gray-100 rounded-xl px-4 py-2.5 text-sm bg-gray-50 text-gray-400" />
                                <input
                                    {...regReset('otp', { required: true })}
                                    placeholder="6-digit OTP"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition tracking-widest text-center text-lg"
                                />
                                <input
                                    {...regReset('password', { required: true })}
                                    type="password"
                                    placeholder="New password"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                                />
                                {resetState.errors.password && <p className="text-red-500 text-xs">{resetState.errors.password.message}</p>}
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">
                                    Update password
                                </motion.button>
                            </form>
                        )}

                        <button onClick={() => setStep(step === 'EMAIL' ? 'RESET' : 'EMAIL')}
                            className="text-xs text-indigo-400 hover:text-indigo-600 transition">
                            {step === 'EMAIL' ? 'Already have an OTP?' : '← Back to email'}
                        </button>
                    </Dialog.Panel>
                </motion.div>
            </div>
        </Dialog>
    );
}
