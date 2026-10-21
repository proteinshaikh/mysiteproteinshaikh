import { useState, JSX } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import * as api from '../authApi';

interface Props { isOpen: boolean; onClose: () => void; }
type Step = 'FORM' | 'OTP';
type RegisterForm = { email: string; password: string; name: string };
type OtpForm = { email: string; otp: string };

export default function RegisterDialog({ isOpen, onClose }: Props): JSX.Element {
    const [step, setStep] = useState<Step>('FORM');
    const [emailForOtp, setEmailForOtp] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
    const { register: regOtp, handleSubmit: submitOtp, formState: { errors: otpErrors }, setValue } = useForm<OtpForm>();

    const onRegister = async (data: RegisterForm) => {
        try {
            await api.register(data);
            setEmailForOtp(data.email);
            setValue('email', data.email);
            setStep('OTP');
        } catch (e) {
            alert('Registration failed: ' + (e as Error).message);
        }
    };

    const onVerify = async (data: OtpForm) => {
        try {
            await api.verifyOtp(emailForOtp, data.otp);
            alert('Account verified! You can now log in.');
            onClose();
        } catch {
            alert('Invalid or expired OTP');
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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                </svg>
                            </div>
                            <Dialog.Title className="text-xl font-bold text-gray-900">
                                {step === 'FORM' ? 'Create account' : 'Verify email'}
                            </Dialog.Title>
                            <p className="text-sm text-gray-400 mt-0.5">
                                {step === 'FORM' ? 'Fill in your details to get started' : `Enter the OTP sent to ${emailForOtp}`}
                            </p>
                        </div>

                        {/* Step indicator */}
                        <div className="flex gap-2">
                            {(['FORM', 'OTP'] as Step[]).map((s, i) => (
                                <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${step === s || (s === 'FORM' && step === 'OTP') ? 'bg-indigo-500' : 'bg-gray-200'}`} />
                            ))}
                        </div>

                        {step === 'FORM' && (
                            <form onSubmit={handleSubmit(onRegister)} className="space-y-3">
                                <input
                                    {...register('name', { required: true })}
                                    placeholder="Full name"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                                />
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
                                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">
                                    Continue
                                </motion.button>
                            </form>
                        )}

                        {step === 'OTP' && (
                            <form onSubmit={submitOtp(onVerify)} className="space-y-3">
                                <input value={emailForOtp} readOnly
                                    className="w-full border border-gray-100 rounded-xl px-4 py-2.5 text-sm bg-gray-50 text-gray-400" />
                                <input type="hidden" {...regOtp('email')} />
                                <input
                                    {...regOtp('otp', { required: true })}
                                    placeholder="6-digit OTP"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition tracking-widest text-center text-lg"
                                />
                                {otpErrors.otp && <p className="text-red-500 text-xs">{otpErrors.otp.message}</p>}
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition">
                                    Verify & activate
                                </motion.button>
                            </form>
                        )}

                        <button onClick={() => setStep(step === 'FORM' ? 'OTP' : 'FORM')}
                            className="text-xs text-indigo-400 hover:text-indigo-600 transition">
                            {step === 'FORM' ? 'Already have an OTP?' : '← Back to form'}
                        </button>
                    </Dialog.Panel>
                </motion.div>
            </div>
        </Dialog>
    );
}
