import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

document.documentElement.setAttribute('data-theme', 'american');

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ''}>
            <AuthProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>,
);

reportWebVitals();
