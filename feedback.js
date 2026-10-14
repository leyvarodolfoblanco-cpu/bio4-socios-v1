// El reporte se prepara en el navegador; el socio decide si lo envía.
export const feedbackKinds={mejora:'Idea para mejorar',problema:'Algo no funcionó',dato:'Dato de producto por revisar',experiencia:'Algo que pasó al usar la app'};
export const feedbackAreas={compartir:'Compartir',productos:'Productos e imágenes',estados:'Mi primer Estado',guias:'Guías y respuestas',practicar:'Prácticas',seguimientos:'Seguimientos',otra:'Otra sección'};

export function feedbackMessage({kind,area,description,expected='',device=''}){
  if(!Object.hasOwn(feedbackKinds,kind)||!Object.hasOwn(feedbackAreas,area))throw new Error('Selecciona el tipo y la sección.');
  const detail=String(description).trim(),wanted=String(expected).trim(),platform=String(device).trim();
  if(detail.length<10||detail.length>800||wanted.length>300||platform.length>80)throw new Error('Describe lo ocurrido en 10 a 800 caracteres.');
  return [
    'Hola Ángel, quiero compartir un reporte de Bio4 Socios V1.',
    `Tipo: ${feedbackKinds[kind]}`,
    `Sección: ${feedbackAreas[area]}`,
    `Detalle: ${detail}`,
    wanted?`Esperaba o propongo: ${wanted}`:null,
    platform?`Equipo/navegador: ${platform}`:null,
    'Lo preparé en el buzón de la webapp.'
  ].filter(Boolean).join('\n');
}
