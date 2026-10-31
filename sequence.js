// Adaptación educativa propia. El manual original no se publica en el repositorio.
export const sequenceSteps=[
  ['Proyección','Mi propósito','Define qué quieres construir y para qué. Elige una primera meta que dependa de tus acciones.','Escribí mi propósito, una meta y el tiempo que puedo dedicar.','plan','Llevarlo al Plan en acción'],
  ['Planeación','Conozco mis productos','Revisa presentación, ingredientes, precio y uso. Prueba poco a poco la mayor variedad de productos que sea adecuada para ti y según tus posibilidades; no es requisito comprarlos todos para comenzar. Usa los de uso externo según su etiqueta.','Revisé una ficha y distinguí sus datos de mi experiencia personal.','productos','Conocer productos'],
  ['Planeación','Abro una conversación','Escucha y conversa con interés sincero. No necesitas presentar todo de golpe: empieza por comprender qué le interesa a la persona.','Practiqué un abridor y escuché antes de ofrecer información.','guias','Practicar cómo conversar'],
  ['Acción','Hago una invitación clara','Elige producto, negocio o presentación del plan. Explica brevemente el motivo y permite que la persona decida.','Adapté una invitación al interés de la persona y al canal.','videos','Ver capacitación'],
  ['Acción','Presento y respondo','Explica qué es, para quién puede ser interesante y cuáles son los datos disponibles. Pregunta qué duda quedó. No conviertas una experiencia propia en una promesa.','Ensayé una explicación y una respuesta de precio u objeción.','practicar','Ir al simulador'],
  ['Acción','Doy seguimiento','Retoma lo acordado con una razón útil. Acuerden cuándo volver a hablar. Acepta un no sin discutir y evita mensajes repetidos sin respuesta.','Practiqué un seguimiento y cómo cerrar el tema con respeto.','seguimientos','Organizar seguimientos'],
  ['Evolución','Reviso mi avance','Revisa qué hiciste, qué aprendiste y qué cambiarás. Horas de práctica con atención y retroalimentación desarrollan habilidades; sumar horas por sí solo no garantiza resultados.','Registré mi revisión semanal y elegí una mejora.','semana','Abrir mi semana'],
  ['Evolución','Acompaño a otro socio','Escucha sus motivos, revisen una ficha, ensayen juntos y deja que lo haga con sus palabras. Acuerden la próxima revisión.','Ensayé cómo acompañar a un socio sin imponerle mi ritmo.','equipo','Abrir ruta de equipo']
];
const openings=[
  '¿Cómo te ha ido con lo que me contaste la última vez?',
  'Vi que preguntaste por este producto. ¿Qué te gustaría conocer primero?',
  'Estoy aprendiendo a desarrollar mi proyecto con Bio4. ¿Tú en qué proyectos estás trabajando ahora?'
];
const invites={
  'Conocer un producto':[
    'Me comentaste que te interesa [tipo de producto]. Tengo información de [producto Bio4]; ¿te gustaría conocer su presentación y precio?',
    'Estoy conociendo [producto Bio4] y pensé en lo que me preguntaste. ¿Te comparto su ficha para que veas si te interesa?',
    'Voy a mostrar [producto Bio4] en [lugar o medio]. Podemos revisar cómo se usa y su presentación. ¿Te gustaría verlo?'
  ],
  'Conocer el negocio · conversación personal o canal permitido':[
    'Estoy desarrollando un negocio de distribución con Bio4. ¿Te interesaría conocer cómo funciona y qué trabajo implica?',
    'Recordé que buscabas un proyecto adicional. Estoy con Bio4 y puedo explicarte el modelo, sus costos y actividades. ¿Te gustaría conocerlo?',
    'Estoy aprendiendo a desarrollar una red de distribución con Bio4. Si te interesa explorar esa actividad, podemos conversar y revisar la información del negocio.'
  ],
  'Ver el plan · Facebook, en vivo o reunión':[
    'El [día] a las [hora y zona horaria] habrá una presentación del negocio Bio4 en Facebook: [enlace]. Explicarán el modelo y sus actividades. ¿Te interesa verla?',
    'Habrá un en vivo sobre el plan de negocio Bio4 el [día] a las [hora y zona horaria]. ¿Te comparto el enlace para que conozcas cómo funciona?',
    'El [día] a las [hora] tenemos una reunión en [lugar] para presentar el negocio Bio4. Puedes conocer el modelo y hacer preguntas. ¿Te gustaría asistir?'
  ]
};
const followExamples=[
  ['Fecha acordada','Quedamos en hablar hoy sobre [tema]. ¿Te viene bien ahora o prefieres otro momento?','Escribir varias veces el mismo día para obtener una respuesta.'],
  ['Resolver una duda','Retomo la duda que me comentaste sobre [tema]. Ya tengo [dato confirmado]. ¿Te lo comparto?','Repetir “¿ya decidiste?” sin aportar información.'],
  ['No respondió','Te dejo el tema por aquí para no llenarte de mensajes. Si más adelante quieres retomarlo, con gusto.','Cambiar de canal o seguir insistiendo para forzar una respuesta.'],
  ['Ahora no le interesa','Gracias por decírmelo. Dejamos este tema aquí; me dio gusto conversar contigo.','Discutir su decisión o fingir amistad para seguir ofreciendo lo mismo.']
];
export function sequenceCompleted(u){return new Set((Array.isArray(u.sequence?.done)?u.sequence.done:[]).filter(n=>Number.isInteger(n)&&n>=0&&n<sequenceSteps.length));}
export function sequencePage({user,esc,link,copyButton}){
  const s=user().sequence||{},done=sequenceCompleted(user()),percent=Math.round(done.size/sequenceSteps.length*100);
  const field=(name,label,placeholder='')=>`<div class="field"><label for="seq-${name}">${label}</label><textarea id="seq-${name}" data-seq-field="${name}" rows="2" maxlength="500" placeholder="${placeholder}">${esc(s[name]||'')}</textarea></div>`;
  const copies=items=>items.map((text,i)=>`<div class="sequence-example"><p>${esc(text)}</p>${copyButton(text,'response_copied','secuencia-'+i,'Copiar y adaptar')}</div>`).join('');
  return `<div class="page-heading"><span class="eyebrow">PROYECCIÓN · PLANEACIÓN · ACCIÓN · EVOLUCIÓN</span><h1 tabindex="-1">Mi Secuencia Mágica</h1><p class="muted">Tu sistema paso a paso: aprende, practica, actúa y revisa. A tu ritmo.</p></div>
  <section class="card sequence-summary"><span class="eyebrow">TU RUTA PERSONAL</span><h2>${percent}% · ${done.size} de 8 pasos practicados</h2><div class="progress" role="progressbar" aria-label="Avance de Secuencia Mágica" aria-valuenow="${done.size}" aria-valuemin="0" aria-valuemax="8"><span style="width:${percent}%"></span></div><p>El porcentaje corresponde a las ocho actividades que marcas. Llegar al 100% significa completar esta ruta, no alcanzar un nivel de ventas o ingresos.</p><p class="smallprint">Tus notas e imágenes se guardan solo en este navegador. No se sincronizan ni se comparten. Evita datos sensibles o de otras personas.</p></section>
  <nav class="guide-jumps" aria-label="Pasos de la Secuencia">${sequenceSteps.map((x,i)=>`<a class="btn secondary small" href="#secuencia-paso-${i}" data-seq-jump="${i}">${done.has(i)?'✓':i+1} · ${x[1]}</a>`).join('')}</nav>
  <div class="plan-list">${sequenceSteps.map(([stage,title,body,task,route,button],i)=>`<section class="card plan-step ${done.has(i)?'completed':''}" id="secuencia-paso-${i}"><div class="plan-head"><span class="plan-number">${i+1}</span><div><span class="eyebrow">${stage}</span><h2>${title}</h2></div></div><p>${body}</p>
  ${i===0?`${field('purpose','¿Para qué quiero hacer este negocio?')}${field('goal','Mi primera meta de acción','Ej. practicar dos conversaciones esta semana')}${field('time','Tiempo realista que puedo dedicar','Ej. tres sesiones de 20 minutos por semana')}<h3>Mi tablero de visión</h3><p>Elige hasta tres imágenes y escribe qué significan para ti. Acompaña cada sueño con una acción. No hace falta comprar productos para completar este paso.</p><div class="sequence-vision">${[0,1,2].map(n=>`<div class="sequence-dream">${s['image'+n]?`<img src="${esc(s['image'+n])}" alt="Imagen de mi meta ${n+1}">`:''}<label for="seq-image-${n}">Imagen ${n+1} · opcional</label><input id="seq-image-${n}" type="file" accept="image/jpeg,image/png,image/webp" data-seq-image="${n}"><button class="btn ghost small" data-seq-remove="${n}" type="button">Quitar imagen</button>${field('dream'+n,'Mi sueño y una acción para acercarme')}</div>`).join('')}</div>`:''}
  ${i===1?`<p><strong>Aprende desde tu experiencia:</strong> lo ideal es conocer y probar la mayor variedad adecuada para ti, sin obligación de comprar todo. Puedes describir sabor, textura o uso con honestidad. Consulta indicaciones y restricciones de cada producto.</p>${field('experience','Mi bitácora de producto','Producto, qué aprendí de su ficha y qué observé personalmente. Evita registrar datos de salud.')}`:''}
  ${i===2?`<h3>Abridores de plática</h3><p>Úsalos cuando encajen con la relación. Escucha la respuesta antes de ofrecer algo.</p>${copies(openings)}`:''}
  ${i===3?`<p>Completa los datos entre corchetes antes de usar una invitación. Para negocio, elige una conversación personal o un canal que permita esa actividad; WhatsApp restringe la promoción de marketing multinivel. Copiar aquí no autoriza un envío.</p>${Object.entries(invites).map(([title,texts])=>`<details><summary>${title} · 3 ejemplos</summary>${copies(texts)}</details>`).join('')}`:''}
  ${i===5?`<h3>Seguimiento es acompañar, no perseguir</h3><p>Interés sincero, escucha y respeto por el punto de vista del otro: principios de relación que también sirven al vender. No todos los mensajes deben terminar en una oferta. Si la persona pide que no la contactes, detén el contacto.</p><p><strong>¿Cuándo escribir?</strong> En la fecha que acuerden. Si no hay fecha, pregunta cuándo le vendría bien. Si no responde, evita encadenar mensajes; puedes cerrar el tema una vez y dejar la iniciativa de retomarlo. Un no no es una tarea pendiente.</p>${followExamples.map(([title,text,avoid])=>`<details><summary>${title}</summary>${copies([text])}<p class="smallprint"><strong>Evita:</strong> ${avoid}</p></details>`).join('')}`:''}
  ${i===6?`<p><strong>Tus horas de vuelo:</strong> diez horas y mil horas ofrecen experiencias distintas, pero importa cómo practicas. No existe una cifra de 10 mil horas que garantice dominio o éxito. Elige una habilidad, recibe comentarios y vuelve a intentarlo.</p>${field('review','Esta semana: qué hice, qué aprendí y qué mejoraré')}${field('next','Mi siguiente acción y cuándo la haré')}`:''}
  <div class="plan-actions">${link(route,button+' →','btn secondary')}<label><input type="checkbox" class="check" data-seq-done="${i}" ${done.has(i)?'checked':''}> ${task}</label></div></section>`).join('')}</div><p class="smallprint">Adaptación educativa inspirada en el manual Secuencia Mágica del Éxito de Bio4. Se conecta con las herramientas existentes; el plan de 7 pasos conserva sus propias marcas.</p>`;
}
export function bindSequence({user,save,render,toast}){
  const state=()=>user().sequence||(user().sequence={});
  document.addEventListener('input',e=>{const name=e.target.dataset.seqField;if(!name||!user())return;state()[name]=e.target.value.slice(0,500);save();});
  document.addEventListener('change',async e=>{
    if(!user())return;
    if(e.target.dataset.seqDone!==undefined){const i=Number(e.target.dataset.seqDone);if(!Number.isInteger(i)||i<0||i>=sequenceSteps.length)return;const done=sequenceCompleted(user());e.target.checked?done.add(i):done.delete(i);state().done=[...done];save();render();return;}
    if(e.target.dataset.seqImage===undefined)return;
    const n=Number(e.target.dataset.seqImage),file=e.target.files?.[0],owner=user();if(!file||![0,1,2].includes(n))return;
    if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>10*1024*1024){toast('Elige una imagen JPG, PNG o WebP de hasta 10 MB.');return;}
    try{const bitmap=await createImageBitmap(file),canvas=document.createElement('canvas');const scale=Math.min(1,600/Math.max(bitmap.width,bitmap.height));canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();if(user()!==owner)return;state()['image'+n]=canvas.toDataURL('image/jpeg',0.72);save();render();toast('Imagen guardada en este navegador.');}catch{toast('No pudimos abrir esa imagen. Prueba con JPG o PNG.');}
  });
  document.addEventListener('click',e=>{const jump=e.target.closest('[data-seq-jump]');if(jump){e.preventDefault();document.getElementById('secuencia-paso-'+jump.dataset.seqJump)?.scrollIntoView({behavior:'smooth',block:'start'});}const remove=e.target.closest('[data-seq-remove]');if(remove&&user()){const n=Number(remove.dataset.seqRemove);if([0,1,2].includes(n)){delete state()['image'+n];save();render();}}});
}
