import express from 'express';
import { authenticateToken } from '../Contollers/MiddlewareToken.js'; // ✅ .js + named

const router = express.Router();


router.get('/', authenticateToken, (req, res) => {
   
  res.json({
    success: true,
    message: 'Perfil privado',
    user: req.user
  });
});

export default router;
