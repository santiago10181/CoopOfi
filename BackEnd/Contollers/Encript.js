import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

async function encriptar(password) {
    if (typeof password !== 'string' || password.length === 0) {
        throw new Error('Password is required and must be a non-empty string');
    }
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return bcrypt.hash(password, salt);
}


async function comparar(password, hash) {
    if (typeof password !== 'string' || typeof hash !== 'string') {
        return false;
    }
    return bcrypt.compare(password, hash);
}

export { encriptar, comparar };