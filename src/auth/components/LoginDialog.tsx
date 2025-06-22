import {Dialog} from '@headlessui/react';
import {useForm} from 'react-hook-form';
import {useAuth} from '../AuthContext';
import {useState} from 'react';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

interface LoginDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: () => void; // open RegisterDialog in parent
    onForgot: () => void;   // open ForgotPasswordDialog in parent
}

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export default function LoginDialog({
                                        isOpen,
                                        onClose,
                                        onRegister,
                                        onForgot,
                                    }: LoginDialogProps) {
    const {register, handleSubmit} = useForm<{ email: string; password: string }>();
    const {login} = useAuth();
    const [error, setError] = useState<string | null>(null);

    const submit = async (data: { email: string; password: string }) => {
        try {
            await login(data.email, data.password);
            onClose();
        } catch {
            setError('Invalid credentials');
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true"/>

            {/* Centered panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm space-y-5">
                    <Dialog.Title className="text-xl font-semibold">Sign in</Dialog.Title>

                    <form onSubmit={handleSubmit(submit)} className="space-y-4">
                        <input
                            {...register('email', {required: true})}
                            type="email"
                            placeholder="E‑mail"
                            className="w-full border p-2 rounded"
                        />
                        <input
                            {...register('password', {required: true})}
                            type="password"
                            placeholder="Password"
                            className="w-full border p-2 rounded"
                        />
                        {error && <p className="text-red-600 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="flex justify-between text-sm">
                        <button
                            onClick={() => {
                                onClose();
                                onRegister();
                            }}
                            className="text-blue-600"
                        >
                            Register
                        </button>
                        <button
                            onClick={() => {
                                onClose();
                                onForgot();
                            }}
                            className="text-blue-600"
                        >
                            Forgot password?
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
