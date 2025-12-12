const DataGeneralSolicitud = {
    fields: [
        {
            NameInputNum: 'Monto solicitado',
            type: 'number',
            placeholder: 'Ej: 1.000.000',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Plazo',
            type: 'number',
            placeholder: 'Ej: 12',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Tasa de Interés',
            type: 'number',
            placeholder: 'Ej: 12',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Plazo máximo',
            type: 'number',
            placeholder: 'Ej: 12',
            initialValue: null,
            isSelect: false
        },
        {
            NameInputNum: 'Tipo de Garantía',
            type: null,
            placeholder: null,
            initialValue: null,
            isSelect: true
        },
        {
            NameInputNum: 'Línea de Crédito',
            type: null,
            placeholder: null,
            initialValue: null,
            isSelect: true
        }
    ],
    optionsTipoGarantia: ['Aportes','Fondo de garantias','Pagare'],
    optionsLineaCredito: [
        'Libre inversion','Vehiculo','Aportes','Compra de Cartera','Impuestos',
        'Educativo','Express', 'Anticipo','Polizas y SOAT', 'Optico', 'Tecnología y ELectrodomesticos',
        'Gimnasio'
    ]
};

export default DataGeneralSolicitud;