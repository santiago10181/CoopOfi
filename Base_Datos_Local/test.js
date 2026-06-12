// test-db.js
import { pool } from './index.js';

const [rows] = await pool.query('SELECT * FROM usuarios LIMIT 10');
console.log(rows);
