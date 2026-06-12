import { useEffect, useState } from "react";

export const useSolicitudAutofill = () => {
  // Agregamos un estado para guardar la data y poder verla
  const [data, setData] = useState(null);
  const [loadingAutofill, setLoadingAutofill] = useState(true);
  const [errorAutofill, setErrorAutofill] = useState(null);

  useEffect(() => {
    const fetchDatosAsociado = async () => {
      try {
        setLoadingAutofill(true);
        const token = localStorage.getItem("token"); // Si usas token
        
        // Llamamos al endpoint mock
        const response = await fetch("http://localhost:3000/api/data-creditos", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        const result = await response.json();

        if (response.ok && result.data) {
          // ¡Aquí probamos! Solo imprimimos en consola y guardamos en el estado
          console.log("✅ Datos recibidos del mock:", result.data);
          setData(result.data);
        } else {
          setErrorAutofill("No se pudo cargar la info");
        }
      } catch (error) {
        console.error("❌ Error en el fetch:", error);
        setErrorAutofill("Error de red");
      } finally {
        setLoadingAutofill(false);
      }
    };

    fetchDatosAsociado();
  }, []); // Sin dependencias, se ejecuta solo al montar

  return { data, loadingAutofill, errorAutofill };
};