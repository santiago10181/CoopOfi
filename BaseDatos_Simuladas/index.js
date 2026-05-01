import { aportes }        from './aportes.js';
import usuarios           from './usuarios.js';
import { saldo_cuenta }   from './saldo_cuenta.js';
import { prestamos }      from './prestamos.js';
import { crearSolicitudCredito } from './post/solicituc_credito.js';

export const getUserById = (userId) =>
  usuarios.find(u => u.id === parseInt(userId));

export const getSaldosByUserId = (userId) =>
  saldo_cuenta.find(s => s.usuario_id === parseInt(userId));

export const setNuevoCredito = (credito) => {
  prestamos.push(credito);
  
};

export const getAportesByUserId = (userId) =>
  aportes.filter(a => a.usuario_id === parseInt(userId));

export const getPrestamosByUserId = (userId) => 
  prestamos.filter(p => p.usuario_id === parseInt(userId));

export { crearSolicitudCredito }; // ← Agregado
