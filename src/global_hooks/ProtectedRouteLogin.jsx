import { Navigate } from 'react-router-dom';
import { useAuth } from '../page_login/hooks/useAuth';
import {PageLoader} from '../dashboard/pages/components/PageLoader';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // 1. Loading inicial (chequeo token)
  if (loading) {
    return (
      <PageLoader />
    );
  }

  // 2. Lógica de protección
  if (isAuthenticated) {
    return children;  // ✅ Muestra página protegida
  } else {
    return <Navigate to="/login" replace />;  // ❌ Redirige login
  }
};
