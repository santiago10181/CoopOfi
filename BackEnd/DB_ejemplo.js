import { encriptar } from "./Contollers/Encript.js";
const usuarios = [
    { id: 1, username: 'juan@gmail.com',  password: 'password123' },
    { id: 2, username: 'maria@gmail.com', password: 'qwerty' },
    { id: 3, username: 'pedro@gmail.com',  password: '123456' },
    { id: 4, username: 'ana@gmail.com',   password: 'abc123' },
    { id: 5, username: 'luis@gmail.com',  password: 'secret' }
];
// Encriptar las contraseñas antes de exportar el arreglo
async function encriptarUsuarios() {
    for (let usuario of usuarios) {
        usuario.password = await encriptar(usuario.password);
    }
}
encriptarUsuarios();
export default usuarios;