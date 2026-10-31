export function journeyNav(route){
 const current=route==='secuencia'?'secuencia':route==='aprender'?'aprender':['plan','semana'].includes(route)?'plan':'';
 if(!current)return '';
 return `<nav class="journey-nav" aria-label="Mi recorrido Bio4">${[['secuencia','1','Secuencia Mágica'],['aprender','2','Aprende y capacítate'],['plan','3','Plan en acción']].map(([r,n,title])=>`<a href="#/${r}" ${r===current?'aria-current="step"':''}><span>${n}</span>${title}</a>`).join('')}</nav>`;
}
