import dotenv from 'dotenv';
dotenv.config();

 export const JWT_CONFIG = {
  secret: process.env.JWT_TOKEN, // ← CAMBIA esto en prod
  expiresIn: '1h' // 7 días
};

