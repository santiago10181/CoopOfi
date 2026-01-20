// src/page_solicitud/data/index.js

// 1. Importamos las secciones desde la carpeta "seccion_form"
import { datosGeneralesFields } from './seccions_form/1_datos_generales';
import { infoSolicitanteFields } from './seccions_form/2_informacion_solicitante';
import { infoComplementariaFields } from './seccions_form/3_informacion_complementaria';
import { infoLaboralFields } from './seccions_form/4_informacion_laboral';
import { infoFinancieraFields } from './seccions_form/5_informacion_financiera';
import { patrimonioFields } from './seccions_form/6_patrimonio';
import { referenciasFields } from './seccions_form/7_referencias_y_conyuge';
import { declaracionFields } from './seccions_form/8_declaracion_origen_fondos';

// 2. Exportamos las opciones (Asumiendo que 'options.js' también está dentro de 'seccion_form')
export * from './options/options';

// 3. Array Maestro
export const Index = [
  datosGeneralesFields,
  infoSolicitanteFields,
  infoComplementariaFields,
  infoLaboralFields,
  infoFinancieraFields,
  patrimonioFields,
  referenciasFields,
  declaracionFields
];