const normalized=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().replace(/\s+/g,' ').toLowerCase();
const baseName=s=>String(s||'').replace(/\s*·\s*recuperado(?:\s+\d+)?$/i,'').trim();
export function hasLocalProgress(u,events=[]){
 if(!u)return false;
 if(['lessons','followups','favorites','opportunities','ownScripts','savedShareDrafts','teamSteps','statePrep'].some(k=>Array.isArray(u[k])&&u[k].length))return true;
 if(u.sequence?.done?.length||Object.values(u.sequence||{}).some(x=>typeof x==='string'&&x.trim()))return true;
 if(Object.values(u.story||{}).some(x=>typeof x==='string'&&x.trim())||Object.values(u.actionWeeks||{}).some(w=>w?.tasks?.length||w?.review))return true;
 if(Object.values(u.challengeWeeks||{}).some(w=>Object.values(w||{}).some(x=>x?.done||x?.reflection)))return true;
 if(Object.values(u.weeklyPlan||{}).some(x=>Array.isArray(x)&&x.length)||u.practice||u.exam)return true;
 return events.some(e=>!['product_viewed','product_opened'].includes(e.type));
}
export function matchingLocalProfiles(db,name){
 const key=normalized(name);if(!key)return [];
 return Object.entries(db.users||{}).filter(([,u])=>normalized(u.name)===key||normalized(u.recoveredFromName)===key||normalized(baseName(u.name))===key).map(([id,u])=>({id,name:u.name,recovered:baseName(u.name)!==u.name||!!u.recoveredFromName,hasProgress:hasLocalProgress(u,(db.events||[]).filter(e=>e.user===id))})).sort((a,b)=>Number(b.hasProgress)-Number(a.hasProgress)||Number(b.recovered)-Number(a.recovered));
}
