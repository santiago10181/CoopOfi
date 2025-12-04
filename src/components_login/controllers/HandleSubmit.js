import loginUser from "../../apis/FuncLoginCall";

const handleSubmit = async (e,validateForm,setIsLoading,formData,navigate) => {
      e.preventDefault();
      if (!validateForm) return;
      setIsLoading(true);
      console.log('Form submitted',formData);
      try {
        const response = await loginUser(formData.email, formData.password)
        navigate('/CoopOfi/dashboard/');
        return response;
      } catch (error) { 
        console.error('Login failed:', error);
        throw error;
      } 
      finally {
        setIsLoading(false);
      }
};
 export default handleSubmit;
 