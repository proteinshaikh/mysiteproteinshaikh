import {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {useForm} from 'react-hook-form';
import * as api from '../authApi';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 'EMAIL' | 'RESET';
type EmailForm = { email: string };
type ResetForm = { email: string; otp: string; password: string };

export default function ForgotPasswordDialog({isOpen, onClose}: Props) {
    const [step, setStep] = useState<Step>('EMAIL');
    const [emailForOtp, setEmailForOtp] = useState<string>('');

    const {register, handleSubmit, formState} = useForm<EmailForm>();
    const {
        register: regReset,
        handleSubmit: submitReset,
        formState: resetState,
    } = useForm<ResetForm>({defaultValues: {email: emailForOtp}});

    /** Step 1 request OTP */
    const onEmail = async (data: EmailForm) => {
        try {
            await api.forgot(data.email);
            setEmailForOtp(data.email);
            setStep('RESET');
        } catch (e) {
            alert('Error sending OTP');
        }
    };

    /** Step 2 reset password */
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
            <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-5">
                    <Dialog.Title className="text-xl font-semibold">
                        {step === 'EMAIL' ? 'Forgot password' : 'Reset password'}
                    </Dialog.Title>

                    {step === 'EMAIL' && (
                        <form onSubmit={handleSubmit(onEmail)} className="space-y-4">
                            <input
                                {...register('email', {required: 'E‑mail required'})}
                                type="email"
                                placeholder="E‑mail"
                                className="w-full border p-2 rounded"
                            />
                            {formState.errors.email && (
                                <p className="text-red-600 text-sm">
                                    {formState.errors.email.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                            >
                                Send OTP
                            </button>
                        </form>
                    )}

                    {step === 'RESET' && (
                        <form onSubmit={submitReset(onReset)} className="space-y-4">
                            <input
                                {...regReset('email')}
                                type="email"
                                readOnly
                                className="w-full border p-2 rounded bg-gray-100 text-gray-500"
                            />
                            <input
                                {...regReset('otp', {required: 'OTP required'})}
                                placeholder="OTP"
                                className="w-full border p-2 rounded"
                            />
                            <input
                                {...regReset('password', {required: 'New password required'})}
                                type="password"
                                placeholder="New password"
                                className="w-full border p-2 rounded"
                            />
                            {resetState.errors.password && (
                                <p className="text-red-600 text-sm">
                                    {resetState.errors.password.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                            >
                                Update password
                            </button>
                        </form>
                    )}

                    <button
                        onClick={() => setStep(step === 'EMAIL' ? 'RESET' : 'EMAIL')}
                        className="text-sm text-blue-600"
                    >
                        {step === 'EMAIL' ? 'Already have an OTP?' : 'Back to e‑mail'}
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
