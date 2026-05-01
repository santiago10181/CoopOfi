// BackEnd/Endpoints/Fun_End/DashboardHandler.js
import { getUserById, getPrestamosByUserId } from '../../../BaseDatos_Simuladas/index.js';

const DashboardHandler = (req, res) => {
  const userId = req.user.userId;
  const user   = getUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const prestamos = getPrestamosByUserId(userId) ?? [];
  const prestamosRecientes = prestamos
    .sort((a, b) => new Date(b.fecha_solicitud) - new Date(a.fecha_solicitud))
    .slice(0, 3);

  return res.status(200).json({
    message: 'Perfil protegido - JWT OK',
    prestamos: prestamosRecientes,
    user: {
      // ── Para el home (cards de perfil y credencial) ──────
      id:     userId,
      rol:    user.rol,
      activo: user.is_active,
      name:   `${user.nombres} ${user.apellidos}`.trim(),
      email:  user.email,
      cargo:  user.cargo_empresa,

      // ── Para pre-llenar el formulario de crédito ─────────
      cedula:           user.cedula,
      nombres:          user.nombres,          // "Juan Carlos"
      apellidos:        user.apellidos,        // "Pérez Gómez"
      telefono:         String(user.telefono),
      fecha_nacimiento: user.fecha_nacimiento,
      estado_civil:     user.estado_civil,
      salario_base:     user.salario_base,
    },
  });
};

export default DashboardHandler;
