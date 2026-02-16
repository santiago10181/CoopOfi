import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './Endpoints/routes/routes.js'; // ← Tu router corregido
import { errorHandler } from './Auth/errorHandler.js'; // ← Tu errorHandler
import { config } from './config.js'; // ← Tu config

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🛡️ MIDDLEWARES DE SEGURIDAD (orden crítico)
app.use(helmet()); // Headers seguridad
app.use(cors({ 
  origin: config.corsOrigin, 
  credentials: true 
})); // Tu Vite/React
app.use(morgan('combined')); // Logs pro
app.use(express.json({ limit: '10kb' })); // Body parser seguro

// 📡 RUTAS (públicas primero, protegidas después)
// LoginRoute ya tiene sus propias rutas protegidas
app.use('/api/auth', routes);

// ✅ Ruta de prueba (pública)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    authEndpoints: ['/api/auth/login', '/api/auth/profile']
  });
});

// 🚫 404 Handler
app.use((req, res, next) => {
  if (!res.headersSent) {
    res.status(404).json({ error: 'Endpoint no encontrado' });
  }
});

// 💥 Error Handler (último siempre)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
  console.log(`📱 Login: POST /api/auth/login`);
  console.log(`🔒 Profile: GET /api/auth/profile (Bearer token)`);
  console.log(`❤️ Health: GET /health`);
});
