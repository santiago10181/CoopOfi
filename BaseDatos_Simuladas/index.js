import {aportes} from './aportes.js';
import usuarios from './usuarios.js';
import {saldo_cuenta} from './saldo_cuenta.js';
import {prestamos} from './prestamos.js';

export const getUserById = (userId) => {
  return usuarios.find(u => u.id === parseInt(userId));
};

export const getSaldosByUserId = (userId) => {
  return saldo_cuenta.find(s => s.usuario_id === parseInt(userId));
};
export const getAportesByUserId = (userId) => {
  return aportes.filter(a => a.usuario_id === parseInt(userId));
}
export const getPrestamosByUserId = (userId) => {
  return prestamos.filter(p => p.usuario_id === parseInt(userId));
}