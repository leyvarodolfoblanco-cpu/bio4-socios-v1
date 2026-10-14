// Ruta de preparación manual. Marcar un paso no demuestra que se publicó un Estado.
export const stateSteps=[
  {
    title:'Elige una ficha que conozcas',
    body:'Empieza con un producto que puedas explicar en una frase. Revisa presentación, precio público e ingredientes disponibles; si un dato falta, no lo completes de memoria.',
    check:'Elegí y revisé la ficha exacta.',
    route:'productos',button:'Explorar productos',
    care:'No atribuyas al producto un resultado que solo viste mencionado para un ingrediente.'
  },
  {
    title:'Prepara el texto para Estado',
    body:'En Compartir, selecciona Estado y compara A y B. Quédate con una idea cotidiana y una pregunta breve. Puedes editar el texto antes de copiarlo.',
    check:'Revisé un texto para Estado.',
    route:'compartir',button:'Elegir texto para Estado',
    care:'No confundas el texto de Catálogo, pensado para explicar, con el de Estado, pensado para despertar una pregunta.'
  },
  {
    title:'Comprueba la imagen',
    body:'En la ficha del producto, abre «Fotos / compartir» si hay tarjeta visual. Lee lo que dice la imagen: las tarjetas originales pueden mostrar otra presentación o afirmaciones distintas.',
    check:'Comprobé la imagen o decidí publicar solo texto.',
    route:'productos',button:'Ver imágenes',
    care:'En iPhone, la hoja de compartir puede ofrecer «Guardar imagen» en Fotos. Confirma que guardaste la tarjeta correcta.'
  },
  {
    title:'Publica tú y deja espacio para responder',
    body:'Pega el texto y agrega la imagen en WhatsApp Business desde tu teléfono. Antes de publicar, vuelve a leerlos juntos. Si alguien pregunta, escucha qué necesita y usa la guía de conversación.',
    check:'Preparé cómo responder a una pregunta.',
    route:'guias',button:'Abrir guías de conversación',
    care:'Ver un Estado no equivale a pedir mensajes individuales. Responde a quien te escriba y respeta si no quiere continuar.'
  }
];
