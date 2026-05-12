import express from 'express';
import loginHandler from '../Fun_End/login.js'; // ← Tu handler corregido
import { loginRateLimiter } from '../../Auth/rateLimit.js'; // ← Tu rateLimit
import DashboardHandler from '../Fun_End/DashboardHandler.js';
import { authenticateJWT } from '../../Auth/midlewareLogin.js'; // ← Tu middleware
import CreditosHandler from '../Fun_End/CreditosHandler.js'; // ← NUEVO
import NuevaSolicitudCreditoHandler from '../Fun_End/NuevaSolicitudCreditoHandler.js';
import AuxiliosHandler from '../Fun_End/AuxiliosHandles.js';// ← NUEVO
import NuevaSolicitudAuxilioHandler from '../Fun_End/NuevaSolicitudAuxilio.js'; // ← NUEVO

const router = express.Router();

// ✅ Pública: Login (con rate limiting)
router.post('/login', loginRateLimiter, loginHandler);

// ✅ Privada: Profile (protegida JWT)

router.get('/dashboard', authenticateJWT, DashboardHandler); // ← Tu handler de dashboard protegido
// ✅ Privada: Logout (invalidar client-side)
router.get('/creditos',  authenticateJWT,  CreditosHandler); // ← NUEVO
router.post('/creditos/nueva-solicitud', authenticateJWT,  NuevaSolicitudCreditoHandler); 
router.get('/auxilios', authenticateJWT,AuxiliosHandler)
router.post('/auxilios/nueva-solicitud', authenticateJWT, NuevaSolicitudAuxilioHandler); // Reutilizamos el mismo handler para simplicidad, pero podrías hacer uno específico para auxilios si quieres
router.post('/logout', (req, res) => {
  res.json({ message: 'Token descartado client-side. Login nuevamente.' });
});

export default router; // ← Export completo
