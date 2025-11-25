const handleSubmit = async (e, validateForm, setIsLoading) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsLoading(true);
      setTimeout(() => {
      setIsLoading(false);
      alert('Login logic would trigger here. Welcome to CoopOfi!');
      }, 1500);
  };
 export default handleSubmit;