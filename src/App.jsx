  // src/App.jsx
  import { lazy, Suspense } from "react";
  import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";

  import { AuthProvider } from "./global_hooks/UserContext";
  import { ProtectedRoute } from "./global_hooks/ProtectedRouteLogin";
  import { PageLoader } from "./dashboard/pages/components/PageLoader";

  // Layout del módulo administrativo
  const AdminLayout = lazy(() =>
    import("./dashboard/layout/admin/AdminLayout")
  );

  // Carga diferida: cada módulo se descarga solo cuando el usuario navega a él.
  const LoginPage = lazy(() => import("./page_login/LoginPage"));

  const DashboardLayout = lazy(() =>
    import("./dashboard/layout/DashboardLayout")
  );

  const ContentHome = lazy(() => import("./dashboard/pages/Home"));
  const DashboardChatBot = lazy(() =>
    import("./dashboard/pages/chatbot")
  );

  const DashboardCreditos = lazy(() =>
    import("./dashboard/pages/creditos")
  );

  const RequestCreditPage = lazy(() =>
    import("./dashboard/pages/creditos/solicitud_credito_form")
  );

  const DashboardAuxConvs = lazy(() =>
    import("./dashboard/pages/aux_conv")
  );

  const DashboardEstadoCuenta = lazy(() =>
    import("./dashboard/pages/estado_cuenta")
  );

  const DashboardCertificadoRenta = lazy(() =>
    import("./dashboard/pages/certificado_renta/Index")
  );

  /**
   * Define la navegación principal de la Oficina Virtual.
   *
   * AuthProvider envuelve Router porque las pantallas y guardas de ruta
   * necesitan acceder al estado global de autenticación.
   */
  const App = () => {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/CoopOfi/" element={<LoginPage />} />
              
              {/* 
                Área privada exclusiva para administradores.
                
                Por ahora solo renderizamos un placeholder ("Hola Mundo") 
                como ruta índice para validar que el AdminLayout y su sidebar
                funcionen correctamente antes de construir las páginas reales.
                
                Las rutas adicionales (solicitudes, asociados, etc.) se 
                activarán progresivamente conforme se desarrollen sus componentes.
              */}
              <Route
                path="/CoopOfi/admin/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <div className="flex items-center justify-center h-64">
                      <h1 className="text-3xl font-bold text-gray-700">
                        Hola Mundo - Admin
                      </h1>
                    </div>
                  }
                />
              </Route>

              {/* Área privada exclusiva para asociados. */}
              <Route
                path="/CoopOfi/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["asociado"]}>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<ContentHome />} />
                <Route path="chatbot" element={<DashboardChatBot />} />
                <Route path="creditos" element={<DashboardCreditos />} />
                <Route
                  path="creditos/nueva-solicitud"
                  element={<RequestCreditPage />}
                />
                <Route
                  path="auxilios-convenios"
                  element={<DashboardAuxConvs />}
                />
                <Route
                  path="estado-cuenta"
                  element={<DashboardEstadoCuenta />}
                />
                <Route
                  path="certificado-renta"
                  element={<DashboardCertificadoRenta />}
                />
              </Route>

              {/* Ruta temporal para accesos con rol insuficiente. */}
              <Route
                path="/CoopOfi/sin-autorizacion"
                element={
                  <section className="grid min-h-screen place-items-center p-6 text-center">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Acceso no autorizado
                      </h1>
                      <p className="mt-2 text-gray-600">
                        No tienes permisos para acceder a esta sección.
                      </p>
                    </div>
                  </section>
                }
              />

              {/* Cualquier URL no registrada vuelve al punto de entrada. */}
              <Route
                path="*"
                element={<Navigate to="/CoopOfi/" replace />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    );
  };

  export default App;