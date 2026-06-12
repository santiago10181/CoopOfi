import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'olasanty',        // si no tienes contraseña, deja el string vacío
  database: 'coopofi_v2',
  waitForConnections: true,
  connectionLimit: 10,
}); 