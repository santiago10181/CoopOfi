const DataInfoReferencia = {
    fields : [
        {
        NameInputNum: 'Nombre (Referencia Personal)',
        type: 'text',
        placeholder: 'Ej: Andres Carr...',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Teléfono (Referencia Personal)',
        type: 'number',
        placeholder: 'Ej: 319 662...',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Parentesco (Referencia Personal)',
        type: null,
        placeholder: null,
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Ciudad (Referencia Personal)',
        type: 'text',
        placeholder: 'Ej: Bogotá D.C',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Dirección (Referencia Personal)',
        type: 'text',
        placeholder: 'Ej: Cra 50...',
        initialValue: null,
        isSelect: false
    },
            {
        NameInputNum: 'Nombre (Referencia diferente al cónyuge)',
        type: 'text',
        placeholder: 'Ej: Andres Carr...',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Teléfono (Referencia diferente al cónyuge)',
        type: 'number',
        placeholder: 'Ej: 319 662...',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Parentesco (Referencia diferente al cónyuge)',
        type: null,
        placeholder: null,
        initialValue: null,
        isSelect: true
    },
    {
        NameInputNum: 'Ciudad (Referencia diferente al cónyuge)',
        type: 'text',
        placeholder: 'Ej: Bogotá D.C',
        initialValue: null,
        isSelect: false
    },
    {
        NameInputNum: 'Dirección (Referencia diferente al cónyuge)',
        type: 'text',
        placeholder: 'Ej: Cra 50...',
        initialValue: null,
        isSelect: false
    },
],
    optionsParentesco: [
        'Ninguno','Conyuge','Padre','Madre','Hijo','Hija','Otro'
    ]
}
export default DataInfoReferencia;