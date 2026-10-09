// Guías originales de conversación; no son mensajes para envío automático.
export const conversationGuides=[
  {
    id:'permiso',step:'01',short:'Permiso',title:'Abre la conversación con permiso',
    moment:'Cuando alguien te pregunta o muestra interés en persona o en un canal donde aceptó recibir información.',
    ask:'«¿Te gustaría que te comparta la presentación y el precio para que lo revises?»',
    listen:'Si desea información, qué canal prefiere y si quiere hablar ahora.',
    avoid:'No tomes un número obtenido en otro contexto como permiso para enviar promociones.',
    next:'Si acepta, envía solo lo que pidió y dale espacio para responder.',
    practice:'s01'
  },
  {
    id:'necesidad',step:'02',short:'Necesidad',title:'Entiende qué busca',
    moment:'Antes de recomendar un producto o hablar de beneficios.',
    ask:'«¿Qué te importa más al comparar opciones: ingredientes, presentación o precio?»',
    listen:'Su prioridad, dudas y límites de presupuesto. No pidas detalles médicos.',
    avoid:'No supongas que el mismo producto sirve para todas las personas.',
    next:'Resume lo que entendiste y pregunta si le gustaría conocer una opción pertinente.',
    practice:'s07'
  },
  {
    id:'producto',step:'03',short:'Producto',title:'Explica un producto con claridad',
    moment:'Cuando la persona ya dijo qué información necesita.',
    ask:'«¿Prefieres que empecemos por los ingredientes, la presentación o el precio?»',
    listen:'Qué dato necesita verificar y si quiere ver la etiqueta completa.',
    avoid:'No conviertas ingredientes destacados en promesas de resultados personales.',
    next:'Comparte la ficha exacta y deja que pregunte antes de recomendar.',
    practice:'s18'
  },
  {
    id:'precio',step:'04',short:'Precio',title:'Habla de precio y valor',
    moment:'Cuando pregunta cuánto cuesta o lo compara con otra opción.',
    ask:'«¿Quieres que comparemos la presentación y cuánto contiene cada opción?»',
    listen:'Si necesita entender el producto o si hoy tiene un límite económico.',
    avoid:'No insistas ni sugieras comprometer gastos prioritarios.',
    next:'Da el precio público y la presentación; respeta si decide esperar.',
    practice:'s03'
  },
  {
    id:'avance',step:'05',short:'Siguiente paso',title:'Propón un siguiente paso sin presión',
    moment:'Después de aclarar dudas, cuando la persona muestra interés real.',
    ask:'«¿Quieres que confirme disponibilidad y entrega, o prefieres revisarlo con calma?»',
    listen:'Su decisión y cualquier condición que falte confirmar.',
    avoid:'No des por hecho un pedido ni inventes disponibilidad o costo de envío.',
    next:'Confirma los detalles antes de cerrar; un «no» también se respeta.',
    practice:'s20'
  },
  {
    id:'seguimiento',step:'06',short:'Seguimiento',title:'Acuerda un seguimiento útil',
    moment:'Solo cuando la persona acepta retomar el tema.',
    ask:'«¿Te parece que lo retomemos el día que prefieras? Si no, aquí lo dejamos.»',
    listen:'Fecha, motivo y canal que la persona eligió; también si ya no desea mensajes.',
    avoid:'No mandes recordatorios repetidos a quien pidió tiempo o dijo que no.',
    next:'Anota únicamente lo necesario y cumple el acuerdo.',
    practice:'s09'
  }
];
