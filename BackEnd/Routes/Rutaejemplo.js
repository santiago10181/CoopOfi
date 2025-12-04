import express from 'express';
import { authenticateToken } from '../Contollers/MiddlewareToken.js'; // ✅ .js + named

const router = express.Router();


router.get('/', authenticateToken, (req, res) => {

  const token = req.headers['authorization'];
  console.log('Token recibido:', token);
   
  res.json({
    success: true,
    message: 'Perfil privado',
    user: req.user
  });
});

export default router;
