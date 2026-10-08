// Drafts for the webapp. None of these texts is a WhatsApp/Meta approval.
import {reviewedDrafts} from './share-drafts.js?v=etiquetas-20261007';
export const shareProfiles = {
  'B4-SHII-MANOS-01': ['Un detalle para tu rutina de cuidado de manos.', 'Manos suaves: un pequeño detalle en tu rutina diaria.', 'MANOS'],
  'B4-SHII-SEDA-01': ['Un espacio para el cuidado corporal en tu día.', 'Dale un momento de cuidado a tu piel.', 'SEDA'],
  'B4-DIAMANTES-SHAMPOO-01': ['Conoce una opción para tu rutina de lavado del cabello.', 'Tu rutina capilar, con ingredientes que vale la pena conocer.', 'SHAMPOO'],
  'B4-DIAMANTES-ACOND-01': ['Un paso de tu rutina capilar que puedes conocer con calma.', 'Hidratación y cuidado del frizz en tu rutina capilar.', 'ACONDICIONADOR'],
  'B4-SHII-DESMAQUILLANTE-01': ['Tu momento de desmaquillarte también merece atención.', 'El cuidado de tu rostro también está en cómo te desmaquillas.', 'DESMAQUILLANTE'],
  'B4-SHII-TONICO-01': ['Conoce Tónico Shii para tu rutina de cuidado facial.', 'Conoce otra opción para tu momento de limpieza facial.', 'TONICO'],
  'B4-EXFOLIANTE-01': ['Conoce la presentación de Exfoliante té verde.', 'Un momento para conocer tu siguiente opción de exfoliación.', 'EXFOLIANTE'],
  'B4-COLAGENO-FACIAL-01': ['Un momento para conocer tu próxima opción de cuidado facial.', 'La humectación tiene un lugar en tu rutina facial.', 'FACIAL'],
  'B4-GANOSOAP-01': ['Conoce Gano Soap en su presentación de tres barras.', 'Tu rutina de limpieza, con ganoderma y glicerina.', 'JABON']
};
export const shareStages = [
  ['catalogo','Catálogo WhatsApp','Descripción estable: presentación, ingredientes confirmados y precio.'],
  ['interes','Estado de WhatsApp','Breve, claro y con una sola invitación a responder.'],
  ['informacion','Chat de WhatsApp','Para responder a alguien que pidió información.'],
  ['precio','Responder precio','Da el precio con claridad; confirma entrega y total aparte.'],
  ['pedido','Avanzar al pedido','Solo cuando la persona ya mostró interés en comprar.'],
  ['seguimiento','Retomar con permiso','Úsalo únicamente si acordaron este seguimiento.']
];
// Conservative cosmetic benefits paraphrased from the manufacturer's catalog in
// the master (F2). No ingredient research is presented as a finished-product trial.
export const cosmeticFacts = {
  'B4-SHII-MANOS-01': {benefit:'Hidratación y suavidad para las manos.',ingredients:['Shiitake','Vitamina E','Manzanilla']},
  'B4-SHII-SEDA-01': {benefit:'Hidratación para el cuidado de la piel.',ingredients:['Ganoderma lucidum','Shiitake','Baba de caracol']},
  'B4-DIAMANTES-SHAMPOO-01': {benefit:'Hidratación para tu rutina capilar.',ingredients:['Ganoderma lucidum','Shiitake','Aceite de argán']},
  'B4-DIAMANTES-ACOND-01': {benefit:'Hidratación y cuidado del frizz.',ingredients:['Ganoderma lucidum','Shiitake','Baba de caracol']},
  'B4-SHII-DESMAQUILLANTE-01': {benefit:'Limpieza y sensación de suavidad.',ingredients:['Ganoderma lucidum','Shiitake']},
  'B4-SHII-TONICO-01': {benefit:'Limpieza para el cuidado facial.',ingredients:[]},
  'B4-EXFOLIANTE-01': {benefit:'Exfoliación y limpieza de la piel.',ingredients:[]},
  'B4-COLAGENO-FACIAL-01': {benefit:'Humectación para el cuidado facial.',ingredients:['Colágeno hidrolizado','Ganoderma lucidum','Ácido hialurónico']},
  'B4-GANOSOAP-01': {benefit:'Limpieza y humectación.',ingredients:['Ganoderma lucidum','Glicerina']}
};
// Copy-ready highlights are limited to descriptive facts and modest everyday
// uses already present in the public catalog. Health claims are not inferred
// from an ingredient or from a product's name.
const everydayHighlights = {
  'B4-BIOLYBER-01':'Mezcla botánica con boldo, silimarina, alcachofa y rhodiola.',
  'B4-BIOMIEL-01':'Jarabe de miel con propóleo y extractos herbales.',
  'B4-4DXT-XTI-01':'Fórmula con espirulina, L-carnitina y vitaminas B3 y B6.',
  'B4-GANODENT-01':'Una opción para tu rutina de limpieza bucal.',
  'B4-LADOUCHE-01':'Limpieza y cuidado diario de la piel.',
  'B4-LADOUCHE-02':'Limpieza confortable para el cuidado íntimo.',
  'B4-4BELLE-01':'Hidratación para tu rutina de cuidado facial.',
  'B4-GANOSUN-01':'Una opción para tu rutina de cuidado de la piel.',
  'B4-GANOSUN-02':'Una presentación en sobres para conocer Gano Sun.',
  'B4-SHII-TOMILLO-01':'Una opción para acompañar tu rutina de masaje.',
  'B4-4DXT-KUUL-01':'Sensación refrescante al aplicar.',
  'B4-MINICABINA-01':'Varios productos Bio4 reunidos en un estuche.',
  'B4-BIOCRISTAL-01':'Elaborado con cristal mineral de origen natural.',
  'B4-BIOCRISTAL-02':'Repuesto de 250 ml para Bio Cristal.',
  'B4-BIOCLEAN-01':'Una opción para la limpieza de manchas difíciles.',
  'B4-4SAVE-01':'Diseño compacto para uso doméstico.',
  'B4-AHORRADOR-GASOLINA-01':'Fácil instalación.',
  'B4-COSMETIQUERA-01':'Organiza y transporta tus productos Bio4.',
  'B4-KIT-INICIO-01':'Materiales para dar tus primeros pasos como socio.',
  'B4-CATALOGO-01':'Muestra los productos y presentaciones de Bio4.',
  'B4-REVISTA-01':'Información técnica para consultar con calma.',
  'B4-FICHAS-01':'Datos de productos para consulta rápida.',
  'B4-PEDIDOS-01':'Organiza tus pedidos en un solo lugar.',
  'B4-NOTAS-VENTA-01':'Registra los datos de cada venta.',
  'B4-MANUAL-SECUENCIA-01':'Una guía para preparar tus conversaciones.',
  'B4-BOLSA-ECO-01':'Bolsa reutilizable para tus entregas.',
  'B4-BOLSA-ECO-02':'Bolsa reutilizable para pedidos más grandes.',
  'B4-SHAKER-BIO4-01':'Prepara tus productos Bio4 donde estés.',
  'B4-SHAKER-4DXT-01':'Un shaker para tu rutina con la línea 4DXT.',
  'B4-VASO-KENKO-01':'Un vaso para disfrutar Kenko Café.',
  'B4-PROTECTOR-VASO-01':'Protege la mano del calor del vaso.'
};
export function shareSpotlight(p) {
  const cosmetic=cosmeticFacts[p.id];
  if(cosmetic)return {label:'Beneficio de uso',text:cosmetic.benefit.replace(/\.$/,'')};
  if(everydayHighlights[p.id])return {label:'Lo que destaca',text:everydayHighlights[p.id].replace(/\.$/,'')};
  const reviewed=reviewedDrafts[p.id]?.catalogo?.B||'';
  const match=reviewed.match(/🔎 Ingredientes destacados(?: del catálogo)?:\s*([^\n]+)/);
  if(match)return {label:'Ingredientes destacados',text:match[1].replace(/\.$/,'')};
  return {label:'Presentación',text:p.presentation};
}
function addSpotlight(copy,p,stage,variant) {
  if(!['catalogo','interes','informacion'].includes(stage))return copy;
  // These B variants already contain their package-verified ingredient hook.
  if(variant==='B'&&['B4-BIOLYBER-01','B4-BIOMIEL-01','B4-4DXT-XTI-01'].includes(p.id))return copy;
  const {label,text}=shareSpotlight(p);
  // Detailed B drafts already name the ingredients. Keep them intact unless
  // there is a distinct everyday benefit to show.
  if(variant==='B'&&label==='Ingredientes destacados')return copy;
  if(copy.toLocaleLowerCase('es-MX').includes(text.toLocaleLowerCase('es-MX')))return copy;
  const lines=copy.split('\n');
  lines.splice(1,0,`🌟 ${label}: ${text}.`);
  return lines.join('\n');
}
export function shareFacts(p){const f=cosmeticFacts[p.id];if(!sharingEligibility(p).enabled||!f)return '';return `✨ Según el catálogo del fabricante: ${f.benefit}${f.ingredients.length?'\n🔎 Ingredientes destacados: '+f.ingredients.join(', ')+'.':''}`;}
export function sharingEligibility(p) {
  if (p?.category === 'CUIDADO PERSONAL' && shareProfiles[p.id]) return {enabled:true,reason:'Borrador de uso cosmético. Revisa la etiqueta y las reglas aplicables antes de publicar; esto no representa una aprobación de WhatsApp.'};
  if (p?.id && reviewedDrafts[p.id]) return {enabled:true,reason:'Borrador informativo para socios. No acredita que el producto ni la actividad de la cuenta estén permitidos en WhatsApp Business. Confirma las reglas aplicables antes de publicar o enviar.'};
  return {enabled:false,reason:'No hay texto preparado para este producto. Consulta su ficha antes de compartir.'};
}
function baseShareCopy(p,stage='interes',variant='A') {
  if (!sharingEligibility(p).enabled) return '';
  if (reviewedDrafts[p.id]?.[stage]?.[variant]) return reviewedDrafts[p.id][stage][variant];
  const profile=shareProfiles[p.id];
  const identity=`${p.name} · ${p.presentation}`;
  const price=p.price===null?'Precio de esta presentación por confirmar.':`Precio público: ${new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(p.price)} MXN.`;
  const invitation=variant==='B'?'¿Prefieres conocer los ingredientes o las opciones de entrega?':`Responde ${profile?.[2]||'INFO'} y revisamos la información del producto.`;
  if(stage==='catalogo'&&variant==='A')return `🧴 ${identity}\n✨ ${cosmeticFacts[p.id].benefit}\n💰 ${price}\nConsulta la etiqueta para conocer los ingredientes y las indicaciones. Disponibilidad y entrega por confirmar.`;
  if(stage==='catalogo'&&variant==='B')return `🧴 ${identity}\n${shareFacts(p)}\n💰 ${price}\nConsulta la etiqueta para la composición completa. Disponibilidad y entrega por confirmar.`;
  if(stage==='interes'&&variant==='A')return `✨ ${identity}\n💰 ${price}\n💬 ¿Te gustaría conocerlo? Escríbeme y revisamos la información, sin compromiso.`;
  if(stage==='informacion'&&variant==='A')return `✨ Te comparto la información de ${p.name}.\n📦 Presentación: ${p.presentation}.\n💰 ${price}\n💬 ¿Quieres que revisemos los detalles para ver si se ajusta a lo que buscas? Antes de pedir, confirmamos el total y las condiciones.`;
  if(stage==='interes')return `${profile[variant==='B'?1:0]}\n\n${identity}\n${shareFacts(p)}\n💰 ${price}\n\n💬 ${invitation}`;
  if(stage==='informacion')return `Te comparto los datos de ${p.name}.\n📦 Presentación: ${p.presentation}.\n${shareFacts(p)}\n💰 ${price}\nConsulta la etiqueta para la lista completa y las indicaciones.\n\n💬 ${variant==='B'?'¿Qué te gustaría revisar primero: la etiqueta o la entrega?':'¿Quieres que te comparta la etiqueta para revisar sus ingredientes?'} Antes de pedir, confirmamos disponibilidad y condiciones.`;
  if(stage==='precio')return `${identity}\n💰 ${price}\nEl costo de entrega, la disponibilidad y el total se confirman antes de acordar el pedido.\n\n💬 ${variant==='B'?'¿Quieres que revise las opciones de entrega en tu localidad?':'¿Quieres que confirme cuánto sería en total con entrega?'} No hace falta compartir tu dirección completa todavía.`;
  if(stage==='pedido')return `📦 ${identity}\n💰 ${price}\n\n💬 ${variant==='B'?'¿Revisamos disponibilidad y entrega antes de que decidas?':'¿Quieres que confirme disponibilidad, entrega y total para esta presentación?'} Te comparto los detalles antes de que confirmes. Si prefieres esperar, está bien.`;
  if(stage==='seguimiento')return `👋 Hola, retomo lo de ${p.name}, como acordamos.\n💬 ${variant==='B'?'¿Quedó alguna duda sobre la presentación o la entrega?':'¿Quieres revisar la información o prefieres dejarlo por ahora?'}\nSi ya no quieres seguimiento, dime y lo dejamos aquí.`;
  return '';
}
export function makeShareCopy(p,stage='interes',variant='A') {
  const copy=baseShareCopy(p,stage,variant);
  return copy?addSpotlight(copy,p,stage,variant):'';
}
export function shareTextIssues(text) {
  const n=text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const issues=[];
  if(!text.trim())issues.push('Escribe un mensaje antes de copiar.');
  if(/\b(cura|curar|trata|tratar|previene|prevenir|diabetes|cancer|artritis|regeneracion|regenera|hormonal|metabolic[oa]|detox|adelgaza|baja de peso|adaptogen[oa]s?)\b/.test(n))issues.push('Revisa las afirmaciones de salud: usa datos de etiqueta y evita promesas terapéuticas. No atribuyas efectos adaptógenos a una fórmula por contener hongos.');
  if(/garantiz|sin riesgo|100\s*%|milagro|ultimas piezas|solo hoy|resultado.*asegur|ingreso.*asegur/.test(n))issues.push('Revisa las garantías y la urgencia: no publiques resultados o escasez sin respaldo.');
  if(/\b(100\s*%\s*natural|producto\s+natural|origen\s+natural|ecologic[oa]|biodegradable)\b/.test(n))issues.push('Comprueba cualquier afirmación ambiental o de origen en la documentación del producto.');
  return issues;
}
export function summarizeShareResults(events,productId,now=Date.now()) {
  const result={A:{response:0,inquiry:0,order:0},B:{response:0,inquiry:0,order:0}};
  for(const e of events){const at=Date.parse(e.at);if(e.type==='share_outcome'&&e.item===productId&&at>=now-7*86400000&&at<=now&&result[e.variant]&&Object.hasOwn(result[e.variant],e.outcome))result[e.variant][e.outcome]++;}
  return result;
}
