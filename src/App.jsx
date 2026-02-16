import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {ProtectedRoute} from "./global_hooks/ProtectedRouteLogin";
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
const DashboardAuxConvs = lazy(()=> import ("./dashboard/pages/aux_conv"))
const DashboardEstadoCuenta = lazy(()=> import ("./dashboard/pages/estado_cuenta"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/CoopOfi/login" element={<LandingPage />} />
          <Route path="/CoopOfi/login" element={<LoginPage />} />

          {/* Rutas Privadas */}
          <Route path="/CoopOfi/dashboard" element= {<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<ContentHome />} />
            <Route path="chatbot" element={<DashboardChatBot />} />
            <Route path="creditos" element={<DashboardCreditos />} />
            <Route path="creditos/nueva-solicitud" element={<RequestCreditPage />} />
            <Route path="auxilios-convenios" element={<DashboardAuxConvs />} />
            <Route path="estado-cuenta" element={<DashboardEstadoCuenta />} />
          </Route>

          {/* Redirección 404 */}
          <Route path="*" element={<Navigate to="/CoopOfi/login" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;