import"./modulepreload-polyfill-B5Qt9EMX.js";import{s as b,a as y,b as k}from"./theme-85ZEqNDS.js";import{b as l,d as g,s as $,i as v,l as w,a as M,e as h}from"./util-Che3AZwU.js";import{A as L,U as A,S as T,V as S,d as E,y as p}from"./childCommunication-dW7WDoVy.js";b("Teams");y();const i=document.getElementById("app"),u=new URL(".",location.href).href;let a=null,c=[],r="";function d(){const s=r.trim().toLowerCase(),n=(s?c.filter(e=>e.title.toLowerCase().includes(s)||String(e.number).includes(s.replace(/^#/,""))):c).slice(0,50),t=e=>(a==null?void 0:a.kind)==="task"&&a.task.id===e.id;i.innerHTML=`
    <div class="compose-pane pad">
      <h2 class="compose-title">MyMonolith als Reiter hinzufügen</h2>
      <p class="hint">Jeder im Chat sieht den Reiter mit seiner eigenen MyMonolith-Anmeldung.</p>
      <button type="button" class="task-row card${(a==null?void 0:a.kind)==="list"?" is-selected":""}" data-list>
        <span class="pick-box" aria-hidden="true">${(a==null?void 0:a.kind)==="list"?"✓":""}</span>
        <span class="task-main"><span class="task-name">📋 Meine Aufgabenliste</span>
        <span class="task-meta hint">Alle eigenen Aufgaben mit Filtern</span></span>
      </button>
      <h3 class="compose-sub">… oder eine bestimmte Aufgabe</h3>
      <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${l(r)}">
      <div class="compose-list">
        ${n.map(e=>{const o=g(e.due);return`<button type="button" class="task-row card due-${o.level}${t(e)?" is-selected":""}" data-pick="${l(e.id)}">
              <span class="pick-box" aria-hidden="true">${t(e)?"✓":""}</span>
              <span class="task-main">
                <span class="task-name">${l(e.title)}</span>
                <span class="task-meta"><span class="num">#${e.number}</span>
                  <span class="badge due-${o.level}">${l(o.text)}</span>
                  ${e.status?`<span class="badge ${$(e.status)}">${l(e.status)}</span>`:""}</span>
              </span>
            </button>`}).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}
      </div>
    </div>`}function m(s){a=s;try{E(!0)}catch{}d()}i.addEventListener("click",s=>{const n=s.target;if(n.closest("[data-list]"))return m({kind:"list"});const t=n.closest("[data-pick]"),e=t&&c.find(o=>o.id===t.dataset.pick);e&&m({kind:"task",task:e})});i.addEventListener("input",s=>{const n=s.target;if(n.id!=="search")return;r=n.value;const t=n.selectionStart;d();const e=i.querySelector("#search");e.focus(),e.setSelectionRange(t,t)});async function f(){if(!v()){i.innerHTML=`<div class="pad">
      <p>Bitte zuerst einmal die App <b>MyMonolith Aufgaben</b> in der linken Teams-Leiste öffnen und anmelden.</p>
      <button class="primary" id="retry">Erneut prüfen</button></div>`,i.querySelector("#retry").addEventListener("click",()=>void f());return}i.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>';try{c=(await w()).filter(s=>!M(s)),d()}catch(s){i.innerHTML=`<div class="pad"><div class="error">${l(h(s))}</div></div>`}}f();(async()=>{await L();const s=await A().catch(()=>null);s&&k(s.app.theme!=="default"),T(async n=>{try{if(!a)throw new Error("Nichts ausgewählt");if(a.kind==="list")await p({entityId:"mm-list",contentUrl:`${u}teams.html`,websiteUrl:"https://new.my-monolith.com/",suggestedDisplayName:"MyMonolith"});else{const t=a.task;await p({entityId:`mm-task-${t.id}`,contentUrl:`${u}teams.html?task=${encodeURIComponent(t.id)}`,websiteUrl:t.url,suggestedDisplayName:`#${t.number} ${t.title}`.slice(0,40)})}n.notifySuccess()}catch(t){n.notifyFailure(h(t))}}),S()})();
