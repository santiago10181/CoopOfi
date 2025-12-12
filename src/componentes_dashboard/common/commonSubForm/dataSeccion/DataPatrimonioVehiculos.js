const DataPatrimonioVehivulos = {
    fields : [
        {
        NameInputNum: 'Placa',
        type: 'text',
        placeholder: 'Ej: ABC 123',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Tipo',
        type: 'text',
        placeholder: 'Ej: Automovil',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Marca',
        type: 'text',
        placeholder: 'Ej: BMW',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Modelo',
        type: 'number',
        placeholder: 'Ej: 2020',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Pignorado',
        type: null,
        placeholder: null,
        initialValue: null,
        isSelect: true
    },
    {
        NameInputNum: 'Valor Hipoteca',
        type: 'number',
        placeholder: 'Ej: 50.500.000',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Saldo Hipoteca',
        type: 'number',
        placeholder: 'Ej: 20.500.000',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Entidad',
        type: 'text',
        placeholder: 'Ej: Banco...',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Saldo Crédito',
        type: 'number',
        placeholder: 'Ej: 50.000.000',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Cuota Crédito',
        type: 'number',
        placeholder: 'Ej: 1.200.000',
        initialValue: null,
        isSelect: false
    }
],
     optionsPignorado: ['Si','No'],
}
export default DataPatrimonioVehivulos;