import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {PageLoader} from "./dashboard/pages/components/PageLoader"
// Páginas Públicas
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./page_login/LoginPage"));

// Módulo Dashboard (Rutas actualizadas a la nueva carpeta)
const DashboardLayout = lazy(() => import("./dashboard/layout/DashboardLayout"));
const ContentHome = lazy(() => import("./dashboard/pages/Home"));
const DashboardChatBot = lazy(() => import("./dashboard/pages/chatbot"));
const DashboardCreditos = lazy(() => import("./dashboard/pages/creditos"));
const RequestCreditPage = lazy(() => import("./dashboard/pages/creditos/solicitud_credito_form"));

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
            <Route index element={<ContentHome />} />
            <Route path="chatbot" element={<DashboardChatBot />} />
            <Route path="creditos" element={<DashboardCreditos />} />
            <Route path="creditos/nueva-solicitud" element={<RequestCreditPage />} />
          </Route>

          {/* Redirección 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;