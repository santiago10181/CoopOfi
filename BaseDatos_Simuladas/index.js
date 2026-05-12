// src/BaseDatos_Simuladas/index.js
import { aportes } from './aportes.js';
import usuarios from './usuarios.js';
import { saldo_cuenta } from './saldo_cuenta.js';
import { prestamos } from './prestamos.js';
import { auxilios } from './auxilio.js';

import { crearSolicitudCredito } from './post/solicituc_credito.js';
import { crearSolicitudAuxilio } from './post/solicitud_auxilio.js'; // ← NUEVO

export const getUserById = (userId) => usuarios.find(u => u.id === parseInt(userId));
export const getSaldosByUserId = (userId) => saldo_cuenta.find(s => s.usuario_id === parseInt(userId));
export const getAportesByUserId = (userId) => aportes.filter(a => a.usuario_id === parseInt(userId));

// Créditos
export const getPrestamosByUserId = (userId) => prestamos.filter(p => p.usuario_id === parseInt(userId));
export const setNuevoCredito = (credito) => prestamos.push(credito);
export { crearSolicitudCredito };

// Auxilios
export const getAuxiliosByUserId = (userId) => auxilios.filter(a => a.usuario_id === parseInt(userId));
export const setNuevoAuxilio = (auxilio) => auxilios.push(auxilio); // ← NUEVO
export { crearSolicitudAuxilio }; // ← NUEVO 