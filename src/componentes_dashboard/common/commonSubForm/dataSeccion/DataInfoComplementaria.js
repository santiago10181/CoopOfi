const InfoComplementaria = {
fields:[
    {
        NameInputNum:"Direccion de residencia",
        type:"text",
        placeholder:"calle 1 # 102 ...",
        select:false
    },
    {
        NameInputNum:"Ciudad de residencia",
        type:"text",
        placeholder:"Bogotá",
        select:false
    },
    {
        NameInputNum:"Estado civil",
        select:true,
        option: [['Soltero', 'Casado', 'Divorciado', 'Viudo']] // Cambié 'Option' a 'option' y envolví el array en otro array para que coincida con el uso en el componente SelectOptions
    },
    {
        NameInputNum:"Numero de hijos",
        type:"number",
        placeholder:"2",
        select:false
    },
    {
        NameInputNum:"Personas a cargo",
        type:"number",
        placeholder:"1",
        select:false
    },
    {
        NameInputNum:"Teléfono",
        type:"number",
        placeholder:"601 227...",
        select:false
    },
    {
        NameInputNum:"Tipo de vivienda",
        select:true,
        option:[['propia', 'arrendada','familiar']] // Envolví el array en otro array para que coincida con el uso en el componente SelectOptions
    },
    {
        NameInputNum:"Estrato",
        type:"number",
        placeholder:"3",
        select:false
    },
    {
        NameInputNum:"Celular",
        type:"number",
        placeholder:"319 502...",
        select:false
    },
    {
        NameInputNum:"Correo electronico personal",
        type:"email",
        placeholder:"abc@gmail.com",
        select:false
    }
]
}
export default InfoComplementaria;