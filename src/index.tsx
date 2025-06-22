// src/index.tsx
import React from 'react';
import './i18n';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from './auth/AuthContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>               {/* 🔑 provides useAuth() */}
            <BrowserRouter>            {/* remove if App already contains a Router */}
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
);

reportWebVitals();
