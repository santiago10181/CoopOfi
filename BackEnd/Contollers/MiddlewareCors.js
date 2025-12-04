// MiddlewareCors.js
const WhitelistedOrigins = [
  'http://localhost:5173',  // Vite
  'http://localhost:3000'   // si probás desde otro puerto (raro)
];

export const corsOptions = {
  origin: function (origin, callback) {
    // Permite peticiones sin origin (Postman, ThunderClient, etc.)
    if (!origin || WhitelistedOrigins.includes(origin)) {
      callback(null, origin);  // ← DEVUELVE EL ORIGEN EXACTO, NUNCA "true"
    } else {
      callback(new Error('Bloqueado por CORS'));
    }
  },
  credentials: true,                    // ← obligatorio para cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
};