// Objetivos y ejemplos originales para aprender; no son textos de envío automático.
const goals={
  precio:'Aclara qué necesita entender del precio antes de explicar el valor.',
  dinero:'Respeta el límite de presupuesto sin sugerir deuda ni urgencia.',
  comparacion:'Compara datos equivalentes sin descalificar otra opción.',
  pensarlo:'Da espacio para decidir y averigua si queda una duda, sin insistir.',
  familia:'Facilita información clara para una decisión compartida.',
  producto:'Explica datos comprobables y pregunta qué información falta.',
  seguimiento:'Confirma si desea retomar el tema y respeta su respuesta.',
  cierre:'Propón un paso posible sin dar por hecha la compra.',
  negocio:'Aclara qué quiere conocer y remite al material oficial vigente, sin prometer ingresos.'
};

const suggestions=[
  {action:'Empieza por entender su prioridad antes de explicar.',example:'«¿Qué te gustaría aclarar antes de decidir?»'},
  {action:'Haz una pregunta abierta y deja espacio para la respuesta.',example:'«¿Qué parte te hace dudar?»'},
  {action:'Añade un dato verificable del producto o del plan oficial, según el caso.',example:'«Puedo mostrarte la presentación y el precio público vigentes para que los revises.»'},
  {action:'Deja claro que puede esperar o rechazar la propuesta.',example:'«Puedes revisarlo con calma; está bien si decides no seguir.»'},
  {action:'Ofrece un siguiente paso que requiera su acuerdo.',example:'«¿Prefieres que te comparta la ficha o dejamos el tema aquí?»'}
];

export function practiceGoal(scenario){
  if(['s26','s29'].includes(scenario.id))return 'Reconoce su decisión y cierra la conversación sin insistir.';
  return goals[scenario.topic]||'Escucha, aclara y acuerda un siguiente paso sin presión.';
}

export function nextPracticeStep(result,scenario){
  if(result.pressure)return {action:'Reformula cualquier urgencia, promesa o presión antes de intentar de nuevo.',example:'«Puedes revisar la información con calma; no tienes que decidir ahora.»'};
  if(['s26','s29'].includes(scenario.id))return result.scores[3]>=50
    ?{action:'Ensaya otra forma breve de respetar el cierre, sin volver a vender.',example:'«Gracias por decirme. Respeto tu decisión y dejamos el tema aquí.»'}
    :{action:'Acepta el límite explícito y termina la conversación.',example:'«Entiendo. No te insistiré. Gracias por tu tiempo.»'};
  if(result.scores.every(score=>score>=80))return {action:'Detectamos señales en las cinco áreas. Prueba una respuesta más breve y natural.',example:'«¿Qué dato te ayudaría más? Puedo compartirlo y tú decides con calma.»'};
  const weakest=result.scores.indexOf(Math.min(...result.scores));
  if(scenario.topic==='negocio'&&weakest===2)return {action:'Usa el plan oficial vigente para explicar requisitos o comisiones; evita cifras no verificadas.',example:'«Revisemos juntos el plan oficial para confirmar ese dato.»'};
  return suggestions[weakest];
}
