import {
    createContext, useContext, useEffect, useState, ReactNode,
} from 'react';
import * as api from './authApi';

interface AuthContextType {
    user: string | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    loginWithGoogle: (email: string, name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(
        () => localStorage.getItem('token'),
    );
    const [user, setUser] = useState<string | null>(
        () => localStorage.getItem('user'),
    );

    const login = async (email: string, password: string) => {
        const {data} = await api.login(email, password);
        setToken(data.token);
        setUser(data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.email);
    };

    const loginWithGoogle = (email: string, name: string) => {
        const fakeToken = `google_${Date.now()}`;
        setToken(fakeToken);
        setUser(email);
        localStorage.setItem('token', fakeToken);
        localStorage.setItem('user', email);
        localStorage.setItem('userName', name);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    useEffect(() => {
        if (!token) return;
        const id = setInterval(api.refresh, 10 * 60 * 1000);
        return () => clearInterval(id);
    }, [token]);

    return (
        <AuthContext.Provider value={{user, token, login, loginWithGoogle, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
    return ctx;
};
