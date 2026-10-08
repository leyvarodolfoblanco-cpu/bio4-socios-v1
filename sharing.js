// Drafts for the webapp. None of these texts is a WhatsApp/Meta approval.
import {reviewedDrafts} from './share-drafts.js?v=compartir-20261007g';
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
// Lead with a supported customer-facing use, then let the existing copy explain
// the ingredients, presentation and price. Variant B remains ingredient-led.
const benefitOpeners = {
  'B4-GANOCONGRUENCIA-01':'🌿 Cuatro líneas Bio4 reunidas en sobres para una rutina sencilla.',
  'B4-GANOCONGRUENCIA-02':'🌿 Cuatro líneas Bio4 reunidas en una sola presentación para el hogar.',
  'B4-BIOCON-01':'🌾 Suma linaza, inulina y amaranto a tu rutina con sabor tamarindo.',
  'B4-BIOCON-02':'🌾 Suma linaza, inulina y amaranto a tu rutina con sabor ciruela.',
  'B4-BIOGRU-01':'🌿 Calcio de coral y chlorella reunidos en cápsulas.',
  'B4-BIOEN-01':'🌿 Ganoderma y wild yam en una sola presentación.',
  'B4-BIOCIA-01':'🌿 Tila, valeriana y complejo B reunidos en cápsulas.',
  'B4-BIOFLEX-01':'🌿 Glucosamina, condroitina y colágeno en una sola presentación.',
  'B4-ETERNAL-01':'🌿 NAD+, NMN y resveratrol reunidos en cápsulas.',
  'B4-BIOFORCE-01':'🌿 Noni, ginseng y jalea real en una sola fórmula.',
  'B4-BIOLYBER-01':'🌿 Boldo, alcachofa y silimarina reunidos en cápsulas.',
  'B4-TODAY-01':'🌿 Ginseng, Ganoderma y extractos botánicos en una presentación.',
  'B4-SUPERBIO-01':'🌿 Vitaminas B, C, D3 y E junto con minerales en tabletas.',
  'B4-BIOMIEL-01':'🍯 Miel, propóleo y extractos herbales en un solo frasco.',
  'B4-BIOFIT-01':'🌿 Dale un toque de hierbabuena y menta a tu rutina.',
  'B4-4DXT-XTI-01':'🌿 Alcachofa, espirulina y vitaminas en cápsulas.',
  'B4-4DXT-ANTIOX-01':'🌿 Ganoderma, té verde y aminoácidos en sobres.',
  'B4-COLAGENO-GEL-01':'🥤 Colágeno, moringa y mora azul en sobres individuales.',
  'B4-GANOHE-01':'🍄 Ganoderma y melena de león en una presentación compacta.',
  'B4-BIOPROPOLEO-01':'🌿 Propóleo, Ganoderma y menta reunidos en 22 ml.',
  'B4-KENKO-TODAY-01':'☕ Disfruta la mezcla Kenko Today en formato Biopack.',
  'B4-KENKO-TODAY-02':'☕ Disfruta Kenko Today en sobres individuales.',
  'B4-SATTVA-01':'🥤 Proteínas, colágeno y hongos reunidos en sobres.',
  'B4-KENKO-CAFE-01':'☕ Disfruta café con Ganoderma en sobres fáciles de llevar.',
  'B4-KENKO-CAFE-02':'☕ Disfruta café con Ganoderma en presentación de frasco.',
  'B4-KENKO-CAFE-03':'☕ Disfruta café con Ganoderma en la presentación Biopack.',
  'B4-KENKO-OLLA-01':'☕ Disfruta el sabor de café de olla con canela y Ganoderma.',
  'B4-BIOFLAX-01':'🌾 Agrega linaza canadiense molida a tus preparaciones.',
  'B4-BIOFLAX-02':'🌾 Agrega linaza y chía a tus preparaciones.',
  'B4-GANODENT-01':'🪥 Incluye menta y manzanilla en tu rutina de limpieza bucal.',
  'B4-LADOUCHE-01':'🧴 Un momento de limpieza y cuidado diario para tu piel.',
  'B4-LADOUCHE-02':'🧴 Limpieza confortable para tu rutina de cuidado íntimo.',
  'B4-GANOSOAP-01':'🧼 Limpieza y humectación en una presentación de tres barras.',
  'B4-4BELLE-01':'🧴 Dale hidratación a tu rutina de cuidado facial.',
  'B4-COLAGENO-FACIAL-01':'🧴 Suma humectación a tu rutina de cuidado facial.',
  'B4-GANOSUN-01':'🧴 Conoce una opción de cuidado diario para la piel.',
  'B4-DIAMANTES-SHAMPOO-01':'🧴 Dale hidratación a tu rutina de lavado del cabello.',
  'B4-DIAMANTES-ACOND-01':'🧴 Hidratación y cuidado del frizz en tu rutina capilar.',
  'B4-SHII-DESMAQUILLANTE-01':'🧴 Retira el maquillaje con una sensación de suavidad.',
  'B4-SHII-TONICO-01':'🧴 Completa tu rutina de limpieza facial con Tónico Shii.',
  'B4-EXFOLIANTE-01':'🧴 Dale espacio a la exfoliación en tu rutina de cuidado.',
  'B4-SHII-MANOS-01':'🧴 Dale a tus manos un momento de hidratación y suavidad.',
  'B4-SHII-SEDA-01':'🧴 Un momento de hidratación para el cuidado de tu piel.',
  'B4-SHII-TOMILLO-01':'🧴 Acompaña tu rutina de masaje con Shii Tomillo.',
  'B4-4DXT-KUUL-01':'🧴 Disfruta una sensación refrescante al aplicar 4DXT Ku’ul.',
  'B4-MINICABINA-01':'🧴 Reúne varios productos Bio4 en un estuche para tu rutina.',
  'B4-BIOCRISTAL-01':'✨ Conoce Bio Cristal en presentación de 250 ml.',
  'B4-BIOCRISTAL-02':'✨ Repón tu Bio Cristal con esta presentación de 250 ml.',
  'B4-BIOCLEAN-01':'🧽 Una opción para limpiar manchas difíciles en casa.',
  'B4-4SAVE-01':'🏠 Conoce una esfera compacta para uso doméstico.',
  'B4-AHORRADOR-GASOLINA-01':'🚗 Conoce un dispositivo de instalación sencilla.',
  'B4-COSMETIQUERA-01':'👜 Organiza y lleva tus productos Bio4 en una cosmetiquera.',
  'B4-KIT-INICIO-01':'📚 Reúne materiales para empezar como socio Bio4.',
  'B4-CATALOGO-01':'📖 Muestra las presentaciones Bio4 en un solo catálogo.',
  'B4-REVISTA-01':'📖 Consulta información técnica a tu ritmo.',
  'B4-FICHAS-01':'📚 Encuentra datos de producto para responder con claridad.',
  'B4-PEDIDOS-01':'📝 Lleva tus pedidos organizados en un block.',
  'B4-NOTAS-VENTA-01':'📝 Registra los datos de tus ventas en un solo lugar.',
  'B4-MANUAL-SECUENCIA-01':'📚 Prepara tus conversaciones con una guía a mano.',
  'B4-BOLSA-ECO-01':'🛍️ Entrega tus productos en una bolsa reutilizable chica.',
  'B4-BOLSA-ECO-02':'🛍️ Lleva pedidos más grandes en una bolsa reutilizable.',
  'B4-SHAKER-BIO4-01':'🥤 Prepara tus productos Bio4 donde estés.',
  'B4-SHAKER-4DXT-01':'🥤 Ten un shaker para tu rutina con la línea 4DXT.',
  'B4-VASO-KENKO-01':'☕ Disfruta Kenko Café en su vaso de la marca.',
  'B4-PROTECTOR-VASO-01':'☕ Sujeta el vaso de Kenko Café con su protector de calor.',
  'B4-CEUTICA4-01':'🥤 Tres fuentes de proteína reunidas en Ceutica4 Natural.',
  'B4-GANOSUN-02':'🧴 Conoce Gano Sun en sobres individuales.'
};
// Copy-ready highlights are limited to descriptive facts and modest everyday
// uses already present in the public catalog. Health claims are not inferred
// from an ingredient or from a product's name.
const everydayHighlights = {
  'B4-GANOCONGRUENCIA-01':'Según el catálogo Bio4, combina linaza e inulina con Ganoderma y melena de león en sobres.',
  'B4-BIOCON-01':'El catálogo Bio4 destaca linaza, inulina, amaranto y nopal.',
  'B4-BIOCON-02':'El catálogo Bio4 destaca linaza, inulina, amaranto y nopal.',
  'B4-BIOGRU-01':'El catálogo Bio4 destaca calcio de coral y alga chlorella.',
  'B4-BIOEN-01':'El catálogo Bio4 destaca Ganoderma lucidum y wild yam.',
  'B4-BIOCIA-01':'El catálogo Bio4 reúne tila, valeriana, rhodiola y complejo B.',
  'B4-BIOFLEX-01':'El catálogo Bio4 destaca glucosamina, condroitina y colágeno hidrolizado.',
  'B4-ETERNAL-01':'El catálogo Bio4 enumera NAD+, NMN, resveratrol y coenzima Q10.',
  'B4-BIOFORCE-01':'El catálogo Bio4 destaca noni, equinácea, ginseng y jalea real.',
  'B4-BIOLYBER-01':'El envase de 60 cápsulas reúne boldo, alcachofa, silimarina y rhodiola.',
  'B4-TODAY-01':'El catálogo Bio4 reúne saw palmetto, ginseng, Ganoderma y ginkgo biloba.',
  'B4-SUPERBIO-01':'El catálogo Bio4 destaca vitaminas B, C, D3 y E, además de zinc y magnesio.',
  'B4-BIOMIEL-01':'El frasco de 420 ml combina miel, propóleo y extractos herbales.',
  'B4-BIOFIT-01':'El catálogo Bio4 destaca clorofila, hierbabuena y menta piperita.',
  'B4-4DXT-XTI-01':'El envase de 90 cápsulas incluye alcachofa, espirulina, L-carnitina y vitaminas B3 y B6.',
  'B4-4DXT-ANTIOX-01':'El catálogo Bio4 destaca Ganoderma, té verde, guaraná y aminoácidos.',
  'B4-COLAGENO-GEL-01':'El catálogo Bio4 reúne colágeno hidrolizado, moringa, mora azul y vitamina E.',
  'B4-GANOHE-01':'El catálogo Bio4 destaca Ganoderma y melena de león.',
  'B4-BIOPROPOLEO-01':'El catálogo Bio4 destaca propóleo, Ganoderma y menta.',
  'B4-CEUTICA4-01':'La ficha Bio4 reúne proteínas de suero de leche, soya y huevo.',
  'B4-KENKO-TODAY-01':'La ficha Bio4 presenta café con Ganoderma, ginseng y tongkat ali.',
  'B4-KENKO-TODAY-02':'La presentación de 25 sobres destaca Ganoderma, ginseng y tongkat ali según la tarjeta Bio4.',
  'B4-SATTVA-01':'El catálogo Bio4 destaca suero de leche, colágeno y hongos.',
  'B4-KENKO-CAFE-01':'Café de altura y Ganoderma lucidum.',
  'B4-KENKO-CAFE-02':'Café de altura y Ganoderma lucidum.',
  'B4-KENKO-OLLA-01':'Café de altura, canela y Ganoderma lucidum.',
  'B4-BIOFLAX-01':'Linaza molida en presentación de 600 g.',
  'B4-BIOFLAX-02':'El catálogo Bio4 reúne linaza y chía.',
  'B4-GANODENT-01':'Una opción para tu rutina de limpieza bucal.',
  'B4-LADOUCHE-01':'Limpieza y cuidado diario de la piel.',
  'B4-LADOUCHE-02':'Limpieza confortable para el cuidado íntimo.',
  'B4-4BELLE-01':'Hidratación para tu rutina de cuidado facial.',
  'B4-GANOSUN-01':'Una opción para tu rutina de cuidado de la piel.',
  'B4-GANOSUN-02':'Una presentación en sobres para conocer Gano Sun.',
  'B4-SHII-TOMILLO-01':'Una opción para acompañar tu rutina de masaje.',
  'B4-4DXT-KUUL-01':'Sensación refrescante al aplicar.',
  'B4-MINICABINA-01':'Varios productos Bio4 reunidos en un estuche.',
  'B4-BIOCRISTAL-01':'Contiene cristal mineral.',
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
const ingredientHighlights = {
  'B4-GANODENT-01':'Sábila, caléndula, manzanilla y Ganoderma lucidum',
  'B4-LADOUCHE-01':'Ganoderma lucidum, wild yam y ginseng',
  'B4-LADOUCHE-02':'Ganoderma lucidum, hamamelis y romero',
  'B4-4BELLE-01':'Rosa mosqueta, ácido hialurónico, colágeno y vitamina E',
  'B4-GANOSUN-01':'Ganoderma lucidum',
  'B4-SHII-TOMILLO-01':'Shiitake, tomillo y árnica',
  'B4-4DXT-KUUL-01':'Mentol, eucalipto, árnica y aloe vera',
  'B4-BIOCRISTAL-01':'Cristal mineral',
  'B4-BIOCLEAN-01':'Amida de coco, hidróxido de sodio y sulfato de amonio',
  'B4-4SAVE-01':'Zeolitas e imanes'
};
export function shareSpotlight(p) {
  const cosmetic=cosmeticFacts[p.id];
  if(cosmetic?.ingredients.length)return {label:'Ingredientes del catálogo',text:cosmetic.ingredients.join(', ')};
  if(ingredientHighlights[p.id])return {label:p.id==='B4-4SAVE-01'?'Componentes del catálogo':'Ingredientes del catálogo',text:ingredientHighlights[p.id]};
  if(cosmetic)return {label:'Beneficio de uso',text:cosmetic.benefit.replace(/\.$/,'')};
  if(everydayHighlights[p.id])return {label:'Lo que destaca',text:everydayHighlights[p.id].replace(/\.$/,'')};
  const reviewed=reviewedDrafts[p.id]?.catalogo?.B||'';
  const match=reviewed.match(/🔎 Ingredientes destacados(?: del catálogo)?:\s*([^\n]+)/);
  if(match)return {label:'Ingredientes según el catálogo',text:match[1].replace(/\.$/,'')};
  return {label:'Presentación',text:p.presentation};
}
function questionFor(p,stage) {
  if(stage==='interes') {
    if(p.category==='CUIDADO PERSONAL')return p.ingredients||cosmeticFacts[p.id]?.ingredients.length?'¿Quieres ver sus ingredientes y cómo viene? Escríbeme.':'¿Quieres que confirme sus ingredientes y cómo se usa? Escríbeme.';
    if(p.category==='ECOLOGÍA')return '¿Quieres conocer sus componentes y cómo se usa? Escríbeme.';
    if(p.category==='HERRAMIENTAS'||p.category==='PUBLICITARIOS')return '¿Quieres ver para qué sirve y cómo viene? Escríbeme.';
    if(!p.ingredients)return '¿Quieres que confirme los ingredientes de esta presentación? Escríbeme.';
    return '¿Quieres conocer sus ingredientes y presentación? Escríbeme.';
  }
  if(p.category==='CUIDADO PERSONAL')return '¿Te comparto la etiqueta o revisamos la entrega?';
  if(p.category==='ECOLOGÍA')return '¿Te comparto sus componentes o revisamos la entrega?';
  if(p.category==='HERRAMIENTAS'||p.category==='PUBLICITARIOS')return '¿Te muestro la presentación o revisamos la entrega?';
  return '¿Te comparto la etiqueta o revisamos la entrega?';
}
function addSpotlight(copy,p,stage,variant) {
  if(!['catalogo','interes','informacion'].includes(stage))return copy;
  if(variant==='A'&&benefitOpeners[p.id]&&['HERRAMIENTAS','PUBLICITARIOS'].includes(p.category))return copy;
  // These drafts already place their documented ingredients and format clearly.
  if(['B4-GANOCONGRUENCIA-02','B4-KENKO-CAFE-03','B4-CEUTICA4-01'].includes(p.id))return copy;
  // These B variants already contain a source-attributed ingredient hook.
  if(variant==='B'&&['B4-GANOCONGRUENCIA-01','B4-BIOLYBER-01','B4-BIOMIEL-01','B4-4DXT-XTI-01','B4-KENKO-TODAY-01'].includes(p.id))return copy;
  const {label,text}=shareSpotlight(p);
  if(label==='Presentación')return copy;
  // Detailed B drafts already name the ingredients. Keep them intact unless
  // there is a distinct everyday benefit to show.
  if(variant==='B'&&((label.startsWith('Ingredientes')&&copy.includes('🔎 Ingredientes destacados'))||label==='Ingredientes según el catálogo'||(label==='Lo que destaca'&&copy.includes('🔎 Ingredientes destacados'))))return copy;
  if(copy.toLocaleLowerCase('es-MX').includes(text.toLocaleLowerCase('es-MX')))return copy;
  const lines=copy.split('\n');
  lines.splice(1,0,label.startsWith('Ingredientes')||label==='Componentes del catálogo'?`🔎 ${label}: ${text}.`:`🌟 ${text}.`);
  if(variant==='A'&&stage!=='catalogo'&&cosmeticFacts[p.id]?.ingredients.length)lines.splice(2,0,`✨ ${cosmeticFacts[p.id].benefit}`);
  return lines.join('\n');
}
export function shareFacts(p){const f=cosmeticFacts[p.id];if(!sharingEligibility(p).enabled||!f)return '';return `${f.ingredients.length?'🔎 Ingredientes destacados del catálogo: '+f.ingredients.join(', ')+'.\n':''}✨ Según el catálogo del fabricante: ${f.benefit}`;}
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
  if(stage==='interes'&&variant==='B'&&cosmeticFacts[p.id])return `🧴 ${identity}\n${cosmeticFacts[p.id].ingredients.length?'🔎 Ingredientes destacados del catálogo: '+cosmeticFacts[p.id].ingredients.join(', ')+'.\n':''}✨ ${cosmeticFacts[p.id].benefit}\n💬 ¿Quieres que te pase el precio y la información de la etiqueta?`;
  if(stage==='interes')return `${profile[variant==='B'?1:0]}\n\n${identity}\n${shareFacts(p)}\n💰 ${price}\n\n💬 ${invitation}`;
  if(stage==='informacion')return `Te comparto los datos de ${p.name}.\n📦 Presentación: ${p.presentation}.\n${shareFacts(p)}\n💰 ${price}\nConsulta la etiqueta para la lista completa y las indicaciones.\n\n💬 ${variant==='B'?'¿Qué te gustaría revisar primero: la etiqueta o la entrega?':'¿Quieres que te comparta la etiqueta para revisar sus ingredientes?'} Antes de pedir, confirmamos disponibilidad y condiciones.`;
  if(stage==='precio')return `${identity}\n💰 ${price}\nEl costo de entrega, la disponibilidad y el total se confirman antes de acordar el pedido.\n\n💬 ${variant==='B'?'¿Quieres que revise las opciones de entrega en tu localidad?':'¿Quieres que confirme cuánto sería en total con entrega?'} No hace falta compartir tu dirección completa todavía.`;
  if(stage==='pedido')return `📦 ${identity}\n💰 ${price}\n\n💬 ${variant==='B'?'¿Revisamos disponibilidad y entrega antes de que decidas?':'¿Quieres que confirme disponibilidad, entrega y total para esta presentación?'} Te comparto los detalles antes de que confirmes. Si prefieres esperar, está bien.`;
  if(stage==='seguimiento')return `👋 Hola, retomo lo de ${p.name}, como acordamos.\n💬 ${variant==='B'?'¿Quedó alguna duda sobre la presentación o la entrega?':'¿Quieres revisar la información o prefieres dejarlo por ahora?'}\nSi ya no quieres seguimiento, dime y lo dejamos aquí.`;
  return '';
}
export function makeShareCopy(p,stage='interes',variant='A') {
  let copy=baseShareCopy(p,stage,variant);
  if(!copy)return '';
  if(variant==='A'&&stage==='interes'&&benefitOpeners[p.id]) {
    const price=p.price===null?'Precio por confirmar.':`$${new Intl.NumberFormat('es-MX').format(p.price)} MXN al público.`;
    const spotlight=shareSpotlight(p);
    const detail=spotlight.text.replace(/\.$/,'');
    const repeatUse=['HERRAMIENTAS','PUBLICITARIOS'].includes(p.category)||spotlight.label==='Presentación'||spotlight.label==='Beneficio de uso';
    const detailLine=repeatUse?'':`\n🔎 ${detail.charAt(0).toLocaleUpperCase('es-MX')+detail.slice(1)}.`;
    return `${benefitOpeners[p.id]}\n📦 ${p.name} · ${p.presentation}${detailLine}\n💰 ${price}\n💬 ¿Te comparto los detalles? Escríbeme.`;
  }
  copy=addSpotlight(copy,p,stage,variant);
  if(variant==='A'&&['catalogo','informacion'].includes(stage)&&cosmeticFacts[p.id])copy=copy.replace(`✨ ${cosmeticFacts[p.id].benefit}\n`,'');
  if(variant==='A'&&stage==='interes')copy=copy.replace('¿Te gustaría conocerlo? Escríbeme y revisamos la información, sin compromiso.',questionFor(p,stage));
  if(variant==='A'&&stage==='informacion')copy=copy.replace('¿Quieres que revisemos los detalles para ver si se ajusta a lo que buscas? Antes de pedir, confirmamos el total y las condiciones.',`${questionFor(p,stage)} Antes de pedir, confirmamos disponibilidad y total.`);
  if(variant==='A'&&['catalogo','interes','informacion'].includes(stage)&&benefitOpeners[p.id])copy=`${benefitOpeners[p.id]}\n${copy}`;
  return copy;
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
