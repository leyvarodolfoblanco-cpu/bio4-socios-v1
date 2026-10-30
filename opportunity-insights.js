import {localDate,weekDates} from './my-week.js?v=20261029';

export function attentionItems(items,now=new Date()){
 const today=localDate(now);
 return items.filter(o=>o.outcome!=='no').map(o=>{
  if(o.permission&&o.next&&o.date&&o.date<=today)return {item:o,reason:o.date===today?'Fecha acordada para hoy':'Fecha acordada anterior a hoy',kind:'agenda'};
  if(o.outcome!=='abierta')return null;
  if(!o.next)return {item:o,reason:'Sin siguiente paso registrado',kind:'acuerdo'};
  if(!o.permission)return {item:o,reason:'Sin permiso de seguimiento registrado; no se agenda',kind:'permiso'};
  if(!o.date)return {item:o,reason:'Sin fecha acordada registrada',kind:'fecha'};
  return null;
 }).filter(Boolean).sort((a,b)=>(a.kind==='agenda'?0:1)-(b.kind==='agenda'?0:1)||(a.item.date||'9999').localeCompare(b.item.date||'9999'));
}
export function weeklyOpportunityStats(items,now=new Date()){
 const {key,end}=weekDates(now),today=localDate(now),inWeek=value=>{const date=new Date(value);if(!value||!Number.isFinite(date.getTime())||date>now)return false;const day=localDate(date);return day>=key&&day<=today;};
 const created=items.filter(o=>inWeek(o.createdAt));
 return {key,end,created:created.length,updated:items.filter(o=>inWeek(o.updatedAt)).length,product:created.filter(o=>o.type==='producto').length,business:created.filter(o=>o.type==='negocio').length,withOrder:created.filter(o=>o.facts.order).length,withPresentation:created.filter(o=>o.facts.presentation).length,withStart:created.filter(o=>o.facts.started).length};
}
export function opportunityAttention({items,esc,link,compact=false,now=new Date()}){
 const attention=attentionItems(items,now);
 if(compact)return `<section class="card daily-followups"><span class="eyebrow">MIS OPORTUNIDADES</span><h2>${attention.length?'Revisa '+attention.length+' oportunidad'+(attention.length===1?'':'es'):'Tu próximo paso comercial'}</h2><p>${attention.length?'Hay fechas acordadas por revisar o información pendiente de registrar.':'Registra intereses reales y acuerda el siguiente paso de cada conversación.'}</p>${link('oportunidades','Abrir Mis oportunidades →','btn secondary')}</section>`;
 return `<section class="card opportunity-section"><h2>Qué necesita tu atención</h2><p>Revisa tus registros antes de actuar. Que falte un dato no significa que debas volver a contactar: respeta el permiso y lo que acordaron.</p>${attention.slice(0,5).map(({item,reason})=>`<div class="daily-follow-row"><h3>${esc(item.alias)}</h3><p>${esc(reason)}${item.date?' · '+esc(item.date):''}</p>${link('oportunidades/'+item.id,'Revisar registro','btn secondary')}</div>`).join('')||'<p>No hay registros con fecha vencida o para hoy, ni conversaciones abiertas sin paso, permiso o fecha registrados.</p>'}${attention.length>5?`<p>Mostrando 5 de ${attention.length}. Abajo puedes revisar todos los registros.</p>`:''}<p class="smallprint">«Decidió no continuar» queda fuera de esta lista. Las pausas sin fecha se respetan. Las fechas acordadas se atienden en la agenda existente.</p>${link('seguimientos','Abrir Seguimientos','btn ghost')}</section>`;
}
export function weeklyOpportunityReview({items,link,now=new Date()}){const s=weeklyOpportunityStats(items,now);return `<section class="card opportunity-section"><span class="eyebrow">OBSERVA · APRENDE · AJUSTA</span><h2>Mis oportunidades de esta semana</h2><p>Del ${s.key} al ${s.end}, hasta ahora.</p><div class="stat-grid">${[['Registros creados',s.created],['De producto',s.product],['De negocio',s.business],['Registros guardados o actualizados',s.updated]].map(([label,n])=>`<div><strong class="metric">${n}</strong><p>${label}</p></div>`).join('')}</div><p>Entre los registros creados esta semana, actualmente marcaste: <strong>${s.withOrder}</strong> con pedido confirmado, <strong>${s.withPresentation}</strong> con presentación realizada y <strong>${s.withStart}</strong> con inicio como socio.</p><p class="smallprint">Son registros locales y marcas manuales actuales de ese grupo. No indican cuántos pedidos o presentaciones ocurrieron esta semana, ni ventas cobradas o ingresos. Los resultados de contactos anteriores siguen visibles en Mis oportunidades.</p><p>Para tu revisión: ¿qué acción generó conversaciones? ¿Qué información faltó? Elige un ajuste pequeño para la próxima semana y escríbelo en tu revisión.</p>${link('oportunidades','Revisar oportunidades','btn secondary')}</section>`;}
