import { requestLogin } from "../../Fetch/RequireLogin";
import { useAuth } from "../../PrivateRoutes/AuthContext";

// Versión HOOK para usar en el componente
export const useHandleSubmit = (setIsLoading, formData, validateForm, setErrors) => {
  const { login } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm(formData, setErrors);
    if (!isValid) return;

    setIsLoading(true);

    try {
      const data = await requestLogin({
        username: formData.email,
        password: formData.password,
      });

      // Ajusta según la respuesta de tu backend
      login(data.user);
      return data;
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return onSubmit;
};
