import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8080',
});

export const login   = (email: string, password: string) =>
  http.post('/api/auth/login',   { email, password });

export const register = (payload: {
  email: string; password: string; name: string;
}) => http.post('/api/auth/register', payload);

export const verifyOtp = (email: string, otp: string) =>
  http.post('/api/auth/verify-email', { email, otp });

export const forgot   = (email: string) =>
  http.post('/api/auth/forgot-password', { email });

export const resetPwd = (email: string, otp: string, password: string) =>
  http.post('/api/auth/reset-password', { email, otp, password });

export const refresh  = () => http.post('/api/auth/refresh-token');
