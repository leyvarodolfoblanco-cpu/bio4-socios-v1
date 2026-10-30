// Revisión orientativa de un borrador. No sustituye la revisión humana ni valida afirmaciones.
const plain=text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

export function reviewMessageDraft(raw,context){
  const text=String(raw||'').trim();
  if(!text)return {intro:'Escribe primero el mensaje que quieres revisar.',checks:[],next:''};
  if(context==='sin_acuerdo')return {
    intro:'Antes de preparar un mensaje comercial, confirma si esa persona quiere recibir información.',
    checks:[{kind:'review',title:'Permiso para contactar',body:'Tener su número o haber visto su Estado no demuestra que aceptó mensajes promocionales.'}],
    next:'Si coinciden en persona o en un canal apropiado, pregunta si desea conocer el producto. Respeta su respuesta.'
  };
  const normalized=plain(text);
  const hasQuestion=/[?¿]/.test(text);
  const questionCount=(text.match(/\?/g)||[]).length;
  const pressure=/\b(compra ya|compralo ya|ultima oportunidad|no te lo pierdas|tienes que comprar|debes comprar|si no compras|solo hoy|oferta irrepetible)\b/.test(normalized);
  const strongClaim=/\b(cura|curar|previene|prevenir|trata|tratar|elimina|eliminar)\b|\b(garantiza|garantizado|100% efectivo|resultados asegurados|ingresos garantizados)\b/.test(normalized);
  const checks=[
    text.length>500
      ?{kind:'review',title:'Extensión',body:'Es largo para un primer mensaje. Prueba una idea central y deja los detalles para cuando la persona los pida.'}
      :{kind:'good',title:'Extensión',body:'La longitud permite leerlo sin una explicación extensa.'},
    !hasQuestion
      ?{kind:'review',title:'Conversación',body:'Añade una pregunta breve sobre qué información le interesa, sin dar por hecho un pedido.'}
      :questionCount>2
        ?{kind:'review',title:'Conversación',body:'Hay varias preguntas. Elige la más útil para que responder sea fácil.'}
        :{kind:'good',title:'Conversación',body:'Incluyes una pregunta que puede abrir diálogo.'},
    pressure
      ?{kind:'review',title:'Presión',body:'Revisa expresiones de urgencia o compra obligada. Ofrece opciones y espacio para decidir.'}
      :{kind:'good',title:'Presión',body:'No aparecen las expresiones de presión más comunes que esta herramienta reconoce.'},
    strongClaim
      ?{kind:'review',title:'Afirmaciones',body:'Revisa esta frase con tu líder y utiliza la explicación del producto que aparece en su ficha Bio4.'}
      :null
  ].filter(Boolean);
  return {
    intro:'Vamos a hacer tu mensaje más claro y fácil de responder.',
    checks,
    next:context==='acordado'
      ?'Ajusta el mensaje a lo que la persona pidió y a la fecha acordada. Si ya no desea seguir, detén el contacto.'
      :'Responde solo a la consulta recibida. Confirma los datos del producto y deja una pregunta sencilla para continuar.'
  };
}
