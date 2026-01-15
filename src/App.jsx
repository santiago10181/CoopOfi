import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Páginas Públicas
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./page_login/LoginPage"));

// Módulo Dashboard (Rutas actualizadas a la nueva carpeta)
const DashboardLayout = lazy(() => import("./dashboard/layout/DashboardLayout"));
const DashboardHome = lazy(() => import("./dashboard/pages/DashboardHome"));

// Loader simple
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-yellow-500"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas Privadas */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
          </Route>

          {/* Redirección 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;