// BackEnd/Endpoints/routes/routes.js
import express from "express";

import { authenticateJWT, authorizeRoles } from "../../Auth/midlewareLogin.js";
import { loginRateLimiter } from "../../Auth/rateLimit.js";

import loginHandler from "../Fun_End/login.js";
import DashboardHandler from "../Fun_End/DashboardHandler.js";
import CreditosHandler from "../Fun_End/CreditosHandler.js";
import NuevaSolicitudCreditoHandler from "../Fun_End/NuevaSolicitudCreditoHandler.js";
import DataUserCreditHandler from "../Fun_End/DataUserCredit.js";
import AuxiliosHandler from "../Fun_End/AuxiliosHandles.js";
import NuevaSolicitudAuxilioHandler from "../Fun_End/NuevaSolicitudAuxilio.js";
import ConveniosDisponiblesHandler from "../Fun_End/ConveniosDisponibles.js";

import AdminDashboardHandler from '../Fun_End/AdminDashboardHandler.js';

const router = express.Router();

/**
 * Ruta pública: establece la sesión JWT para cualquier rol autorizado.
 */
router.post("/login", loginRateLimiter, loginHandler);

/**
 * Rutas exclusivas del asociado.
 *
 * authenticateJWT confirma identidad.
 * authorizeRoles evita que un admin consuma accidentalmente endpoints
 * diseñados para datos personales de un asociado.
 */
router.get(
  "/dashboard",
  authenticateJWT,
  authorizeRoles("asociado"),
  DashboardHandler
);

router.get(
  "/creditos",
  authenticateJWT,
  authorizeRoles("asociado"),
  CreditosHandler
);

router.post(
  "/creditos/nueva-solicitud",
  authenticateJWT,
  authorizeRoles("asociado"),
  NuevaSolicitudCreditoHandler
);

router.get(
  "/creditos/data-user",
  authenticateJWT,
  authorizeRoles("asociado"),
  DataUserCreditHandler
);

router.get(
  "/auxilios",
  authenticateJWT,
  authorizeRoles("asociado"),
  AuxiliosHandler
);

router.get(
  "/auxilios/convenios-disponibles",
  authenticateJWT,
  authorizeRoles("asociado"),
  ConveniosDisponiblesHandler
);

router.post(
  "/auxilios/nueva-solicitud",
  authenticateJWT,
  authorizeRoles("asociado"),
  NuevaSolicitudAuxilioHandler
);

/**
 * Rutas administrativas futuras.
 *
 * Se activarán cuando existan los handlers y las pantallas correspondientes.
 */
router.get(
  "/admin/dashboard",
  authenticateJWT,
  authorizeRoles("admin"),
  AdminDashboardHandler
);

// router.get(
//   "/admin/solicitudes/credito",
//   authenticateJWT,
//   authorizeRoles("admin"),
//   ListarSolicitudesCreditoHandler
// );

// router.patch(
//   "/admin/solicitudes/credito/:id/estado",
//   authenticateJWT,
//   authorizeRoles("admin"),
//   ActualizarEstadoSolicitudCreditoHandler
// );

// router.get(
//   "/admin/solicitudes/convenio",
//   authenticateJWT,
//   authorizeRoles("admin"),
//   ListarSolicitudesConvenioHandler
// );

/**
 * Con JWT stateless, cerrar sesión significa eliminar el token del cliente.
 * Más adelante podríamos implementar revocación si el negocio la necesita.
 */
router.post("/logout", (req, res) => {
  return res.status(200).json({
    message: "Sesión cerrada en el cliente.",
  });
});

export default router;