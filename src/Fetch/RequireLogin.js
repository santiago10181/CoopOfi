import axios from "axios";

export const requestLogin = async (credentials) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",
      credentials
    );

    // Ajusta la propiedad según lo que devuelva tu backend
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
};



// RequireLogin.js
// import axios from "axios";

// axios.defaults.withCredentials = true;  // ← Línea mágica (o usa axios.create)

// const pruebaPOst = async () => {
//   try {
//     const res = await axios.get('http://localhost:3000/private');
//     console.log("Ruta privada OK:", res.data);
//   } catch (err) {
//     console.log("Error:", err.response?.data);
//   }
// };

// export default pruebaPOst;