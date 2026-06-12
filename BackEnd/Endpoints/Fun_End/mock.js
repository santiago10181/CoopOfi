const DatosAsociadoMockHandler = (req, res) => {
  // Simulamos un delay de 1.5 segundos para ver el loading
  setTimeout(() => {
    return res.status(200).json({
      data: {
        sol_nombre1: "SANTIAGO",
        sol_nombre2: "ANDRES",
        sol_apellido1: "PEREZ",
        sol_apellido2: "GOMEZ",
        sol_num_doc: "1020304050",
        sol_fecha_exp_doc: "2015-05-20",
        sol_fecha_nac: "1990-08-15",
        sol_estado_civil: "1", 
        sol_celular: "3001234567",
        sol_email: "santiago@correo.com",
        sol_dir_casa: "CLL 100 # 15-20",
        sol_ciudad_casa: "11001", 
        sol_fecha_ing_trabajo: "2021-03-01",
        sol_ciudad_trabajo: "11001",
        sol_dependencia: "SISTEMAS",
        sol_cargo: "DESARROLLADOR",
        sol_tel_oficina: "6015555555",
        sol_ext_tel_oficina: "101",
        sol_email_oficina: "santiago@empresa.com",
        sol_salario: "4500000",
        sol_otros_ingresos: "500000",
        sol_tot_ingresos: "5000000"
      }
    });
  }, 1500);
};

export default DatosAsociadoMockHandler;