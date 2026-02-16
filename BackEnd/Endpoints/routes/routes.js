import express from 'express';
import loginHandler from '../Fun_End/login.js'; // ← Tu handler corregido
import { loginRateLimiter } from '../../Auth/rateLimit.js'; // ← Tu rateLimit
import DashboardHandler from '../Fun_End/DashboardHandler.js';
import { authenticateJWT } from '../../Auth/midlewareLogin.js'; // ← Tu middleware

const router = express.Router();

// ✅ Pública: Login (con rate limiting)
router.post('/login', loginRateLimiter, loginHandler);

// ✅ Privada: Profile (protegida JWT)

router.get('/dashboard', authenticateJWT, DashboardHandler); // ← Tu handler de dashboard protegido
// ✅ Privada: Logout (invalidar client-side)
router.post('/logout', (req, res) => {
  res.json({ message: 'Token descartado client-side. Login nuevamente.' });
});

export default router; // ← Export completo
