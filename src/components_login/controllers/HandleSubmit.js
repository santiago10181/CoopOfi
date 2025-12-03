import pruebaPOst from "../../Fetch/RequireLogin";

const handleSubmit = async (e, validateForm, setIsLoading) => {
      e.preventDefault();
      if (!validateForm) return;
      setIsLoading(true);
    await pruebaPOst();
    setIsLoading(false);
  };
 export default handleSubmit;