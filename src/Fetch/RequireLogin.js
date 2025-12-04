// import axios from "axios";

// // 1. GET básico
// const nuevoUsuario = {
//   username: 'asd@gmail.com',
//   password: '1234567'
// };

// const pruebaPOst = async ()=>{
//     axios.post('http://localhost:3000/auth/login', nuevoUsuario)
//     .then(response => {
//     console.log(response.data); // Los datos de la respuesta
//     const data = response.data;
//     localStorage.setItem('token', data.token);

//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// } 
// export default pruebaPOst;

// RequireLogin.js
import axios from "axios";

axios.defaults.withCredentials = true;  // ← Línea mágica (o usa axios.create)

const pruebaPOst = async () => {
  try {
    const res = await axios.get('http://localhost:3000/private');
    console.log("Ruta privada OK:", res.data);
  } catch (err) {
    console.log("Error:", err.response?.data);
  }
};

export default pruebaPOst;