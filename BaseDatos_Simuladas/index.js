import { aportes } from './aportes.js';
import usuarios from './usuarios.js';
import { saldo_cuenta } from './saldo_cuenta.js';
import { prestamos } from './prestamos.js';
import { auxilios } from './auxilio.js';

import { crearSolicitudCredito } from './post/solicituc_credito.js';
import { crearSolicitudAuxilio } from './post/solicitud_auxilio.js';

export const getUserById = (userId) =>
  usuarios.find(u => u.id === parseInt(userId));

export const getUserByEmail = (email) =>
  usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());

export const authenticateUser = ({ email, password }) => {
  const user = getUserByEmail(email);

  if (!user) {
    return { ok: false, error: 'Usuario no encontrado' };
  }

  if (!user.is_active) {
    return { ok: false, error: 'Usuario inactivo' };
  }

  if (user.password_hash !== password) {
    return { ok: false, error: 'Credenciales incorrectas' };
  }

  const safeUser = { ...user };
  delete safeUser.password_hash;

  return {
    ok: true,
    token: `fake-token-${user.id}`,
    user: safeUser,
  };
};

export const getSaldosByUserId = (userId) =>
  saldo_cuenta.find(s => s.usuario_id === parseInt(userId));

export const getAportesByUserId = (userId) =>
  aportes.filter(a => a.usuario_id === parseInt(userId));

export const getPrestamosByUserId = (userId) =>
  prestamos.filter(p => p.usuario_id === parseInt(userId));

export const setNuevoCredito = (credito) => prestamos.push(credito);
export { crearSolicitudCredito };

export const getAuxiliosByUserId = (userId) =>
  auxilios.filter(a => a.usuario_id === parseInt(userId));

export const setNuevoAuxilio = (auxilio) => auxilios.push(auxilio);
export { crearSolicitudAuxilio };