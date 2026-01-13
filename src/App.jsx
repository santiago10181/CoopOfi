// src/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🚀 IMPORTS DINÁMICOS (Lazy Loading)
// Estos componentes solo se cargarán cuando el usuario navegue a la ruta
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./page_login/LoginPage"));

// Componente de carga elegante (Skeleton o Spinner)
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="w-10 h-10 border-4 border-gray-200 border-t-[#FFD500] rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      {/* Suspense atrapa los componentes que aún no se han cargado */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route 
            path="/dashboard" 
            element={
              <div className="flex h-screen items-center justify-center font-bold text-2xl">
                Panel de Control
              </div>
            } 
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;