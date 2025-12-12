const DataInformacionSolicitante = {
    fields: [
        {
            NameInputNum: 'Primer Nombre',
            type: 'text',
            placeholder: 'Ej: Santiago',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Segundo Nombre',
            type: 'text',
            placeholder: 'Ej: Alejandro',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Primer apelldo',
            type: 'text',
            placeholder: 'Ej: Chavez',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Segundo apelldo',
            type: 'text',
            placeholder: 'Ej: Perez',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Tipo de Documento',
            type: null, // No aplica para selects
            placeholder: null, // No aplica para selects
            initialValue: null,
            isSelect: true
        },
        {
            NameInputNum: 'Numero de Identificación',
            type: 'text',
            placeholder: 'Ej: 1014...',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Fecha de expedición',
            type: 'date',
            placeholder: 'Ej: 2023-01-01',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Pais de expedición',
            type: 'text',
            placeholder: 'Ej: Colombia',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Ciudad de expedición',
            type: 'text',
            placeholder: 'Ej: Bogotá',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Fecha de nacimiento',
            type: 'date',
            placeholder: 'Ej: 2023-01-01',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Lugar de nacimiento',
            type: 'text',
            placeholder: 'Ej: Colombia',
            initialValue: null,
            isSelect: false
        }
    ]
};

export default DataInformacionSolicitante;