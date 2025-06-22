import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import * as api from '../authApi';

/* ------------------------------------------------------------------ */
/* Types & props                                                      */
/* ------------------------------------------------------------------ */

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'FORM' | 'OTP';

type RegisterForm = { email: string; password: string; name: string };
type OtpForm = { email: string; otp: string };

/* ------------------------------------------------------------------ */
/* Component                                                          */
/* ------------------------------------------------------------------ */

export default function RegisterDialog({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<Step>('FORM');
  const [emailForOtp, setEmailForOtp] = useState<string>('');

  /* -------- step 1: user details -------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  /* -------- step 2: otp -------- */
  const {
    register: regOtp,
    handleSubmit: submitOtp,
    formState: { errors: otpErrors },
    setValue,                    // <── sync hidden e‑mail field
  } = useForm<OtpForm>();

  /* on STEP 1 submit */
  const onRegister = async (data: RegisterForm) => {
    try {
      await api.register(data);
      setEmailForOtp(data.email);
      setValue('email', data.email);      // <── keeps otp form in sync
      setStep('OTP');
    } catch (e) {
      alert('Registration failed: ' + (e as Error).message);
    }
  };

  /* on STEP 2 submit */
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
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-5">
          <Dialog.Title className="text-xl font-semibold">
            {step === 'FORM' ? 'Create account' : 'Verify e‑mail'}
          </Dialog.Title>

          {/* ------------- STEP 1 ------------- */}
          {step === 'FORM' && (
            <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
              <input
                {...register('name', { required: 'Name required' })}
                placeholder="Full name"
                className="w-full border p-2 rounded"
              />
              <input
                {...register('email', { required: 'E‑mail required' })}
                type="email"
                placeholder="E‑mail"
                className="w-full border p-2 rounded"
              />
              <input
                {...register('password', { required: 'Password required' })}
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
              >
                Register
              </button>
            </form>
          )}

          {/* ------------- STEP 2 ------------- */}
          {step === 'OTP' && (
            <form onSubmit={submitOtp(onVerify)} className="space-y-4">
              {/* read‑only e‑mail field for clarity */}
              <input
                value={emailForOtp}
                readOnly
                className="w-full border p-2 rounded bg-gray-100 text-gray-500"
              />

              {/* hidden e‑mail sent to backend (kept in sync via setValue) */}
              <input type="hidden" {...regOtp('email')} />

              <input
                {...regOtp('otp', { required: 'OTP required' })}
                placeholder="6‑digit OTP"
                className="w-full border p-2 rounded"
              />
              {otpErrors.otp && (
                <p className="text-red-600 text-sm">{otpErrors.otp.message}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
              >
                Verify
              </button>
            </form>
          )}

          <button
            onClick={() => setStep(step === 'FORM' ? 'OTP' : 'FORM')}
            className="text-sm text-blue-600"
          >
            {step === 'FORM' ? 'Already have an OTP?' : 'Back to form'}
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
