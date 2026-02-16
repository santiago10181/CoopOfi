import {hashPassword} from '../BackEnd/Auth/HashUse.js';
const usuarios = [
  {
    id: 1,
    rol:"usuario",
    cedula: "1098765432",
    nombres: "Juan Carlos",
    apellidos: "Pérez Gómez",
    email: "juan.perez@empresa.co",
    telefono: "3001234567",
    fecha_nacimiento: "1985-03-15",
    fecha_afiliacion: "2023-01-10",
    estado_civil: "casado",
    cargo_empresa: "Analista Senior",
    salario_base: 3500000,
    password_hash: "12345678", // 123456
    is_active: true
  },
  {
    id: 2,
    rol:"usuario",
    cedula: "1987654321",
    nombres: "María Fernanda",
    apellidos: "López Rodríguez",
    email: "maria.lopez@empresa.co",
    telefono: "3109876543",
    fecha_nacimiento: "1990-07-22",
    fecha_afiliacion: "2022-06-05",
    estado_civil: "soltera",
    cargo_empresa: "Coordinadora TI",
    salario_base: 4200000,
    password_hash: "123456789", // 123456
    is_active: true
  },
  {
    id: 3,
    rol:"usuario",
    cedula: "1122334455",
    nombres: "Carlos Andrés",
    apellidos: "Martínez Torres",
    email: "carlos.martinez@empresa.co",
    telefono: "3011122334",
    fecha_nacimiento: "1988-11-30",
    fecha_afiliacion: "2024-02-01",
    estado_civil: "divorciado",
    cargo_empresa: "Desarrollador Fullstack",
    salario_base: 3800000,
    password_hash: "1234567890", // 123456
    is_active: true
  }
];

usuarios.forEach(async (user) => {
  user.password_hash = await hashPassword(user.password_hash);
});

export default usuarios;
//