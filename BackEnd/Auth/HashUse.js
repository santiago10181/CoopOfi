import bcrypt from 'bcrypt';


const SALT_ROUNDS = 12; // Más seguro que 10

export const hashPassword = async (password) => {
  if (!password || password.length < 8) {
    throw new Error('Contraseña debe tener al menos 8 caracteres');
  }
  return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

console.log(await hashPassword('12345678'))
//
