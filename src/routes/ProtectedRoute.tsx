import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import {JSX} from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element; }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/" replace />;
}
