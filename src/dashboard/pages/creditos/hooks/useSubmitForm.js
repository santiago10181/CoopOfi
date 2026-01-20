export const useSubmitForm = (data) => {
    console.log("Datos del formulario:", data);
    // Aquí iría la llamada a tu API...
    
    // Simulación de espera para ver el estado de carga
    return new Promise(resolve => setTimeout(resolve, 2000));
};