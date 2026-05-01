// dashboard/hooks/useAutoFillFormFromUser.js
import { useEffect } from "react";
import { useDashboardContext } from "../../../../global_hooks/UserContext";

export const useAutoFillFormFromUser = (reset, index) => {
  const { userData } = useDashboardContext();

  useEffect(() => {
    // Si no hay userData, no llenamos el formulario
    if (!userData || !reset || !index) return;

    const allFields = index.flatMap((section) => section.fields);
    const userDataValues = {};

    allFields.forEach((field) => {
      const name = field.name;

      switch (name) {
        case "sol_nombre1":
          userDataValues[name] = userData.nombres
            ? userData.nombres.split(" ")[0]
            : "";
          break;
        case "sol_nombre2":
          userDataValues[name] = userData.nombres
            ? userData.nombres.split(" ").slice(1).join(" ")
            : "";
          break;
        case "sol_apellido1":
          userDataValues[name] = userData.apellidos
            ? userData.apellidos.split(" ")[0]
            : "";
          break;
        case "sol_apellido2":
          userDataValues[name] = userData.apellidos
            ? userData.apellidos.split(" ").slice(1).join(" ")
            : "";
          break;

        case "sol_num_doc":
          userDataValues[name] = String(userData.cedula || "");
          break;

        case "sol_celular":
          userDataValues[name] = String(userData.telefono || "");
          break;

        case "sol_email":
          userDataValues[name] = userData.email || "";
          break;

        case "sol_fecha_nac":
          userDataValues[name] = userData.fecha_nacimiento || "";
          break;
        default:
          // Si no mapea con userData, no cambia el valor
          break;
      }
    });

    // 🚀 Llena el formulario con los datos del usuario
    reset(userDataValues);
  }, [userData, index, reset]);
};
