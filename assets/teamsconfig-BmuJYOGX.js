import{s as b,t as i}from"./i18n-TrzspG2o.js";import{s as y,a as k,b as g}from"./theme-BeYxN3Xi.js";import{b as r,d as v,s as w,i as L,l as M,a as T,e as f}from"./util-BBj-ER57.js";import{A,U as S,S as E,V as H,d as U,y as u}from"./childCommunication-dW7WDoVy.js";y("Teams");k();const l=document.getElementById("app"),m=new URL(".",location.href).href;let n=null,c=[],d="";function p(){const s=d.trim().toLowerCase(),a=(s?c.filter(e=>e.title.toLowerCase().includes(s)||String(e.number).includes(s.replace(/^#/,""))):c).slice(0,50),t=e=>(n==null?void 0:n.kind)==="task"&&n.task.id===e.id;l.innerHTML=`
    <div class="compose-pane pad">
      <h2 class="compose-title">${i("MyMonolith als Reiter hinzufügen")}</h2>
      <p class="hint">${i("Jeder im Chat sieht den Reiter mit seiner eigenen MyMonolith-Anmeldung.")}</p>
      <button type="button" class="task-row card${(n==null?void 0:n.kind)==="list"?" is-selected":""}" data-list>
        <span class="pick-box" aria-hidden="true">${(n==null?void 0:n.kind)==="list"?"✓":""}</span>
        <span class="task-main"><span class="task-name">📋 ${i("Meine Aufgabenliste")}</span>
        <span class="task-meta hint">${i("Alle eigenen Aufgaben mit Filtern")}</span></span>
      </button>
      <h3 class="compose-sub">${i("… oder eine bestimmte Aufgabe")}</h3>
      <input id="search" type="search" placeholder="${i("Suchen nach Titel oder Nummer")}" value="${r(d)}">
      <div class="compose-list">
        ${a.map(e=>{const o=v(e.due);return`<button type="button" class="task-row card due-${o.level}${t(e)?" is-selected":""}" data-pick="${r(e.id)}">
              <span class="pick-box" aria-hidden="true">${t(e)?"✓":""}</span>
              <span class="task-main">
                <span class="task-name">${r(e.title)}</span>
                <span class="task-meta"><span class="num">#${e.number}</span>
                  <span class="badge due-${o.level}">${r(o.text)}</span>
                  ${e.status?`<span class="badge ${w(e.status)}">${r(e.status)}</span>`:""}</span>
              </span>
            </button>`}).join("")||`<p class="hint">${i("Keine passende Aufgabe.")}</p>`}
      </div>
    </div>`}function h(s){n=s;try{U(!0)}catch{}p()}l.addEventListener("click",s=>{const a=s.target;if(a.closest("[data-list]"))return h({kind:"list"});const t=a.closest("[data-pick]"),e=t&&c.find(o=>o.id===t.dataset.pick);e&&h({kind:"task",task:e})});l.addEventListener("input",s=>{const a=s.target;if(a.id!=="search")return;d=a.value;const t=a.selectionStart;p();const e=l.querySelector("#search");e.focus(),e.setSelectionRange(t,t)});async function $(){if(!L()){l.innerHTML=`<div class="pad">
      <p>${i("Bitte zuerst einmal die App <b>MyMonolith Aufgaben</b> in der linken Teams-Leiste öffnen und anmelden.")}</p>
      <button class="primary" id="retry">${i("Erneut prüfen")}</button></div>`,l.querySelector("#retry").addEventListener("click",()=>void $());return}l.innerHTML=`<p class="hint pad">${i("Aufgaben werden geladen …")}</p>`;try{c=(await M()).filter(s=>!T(s)),p()}catch(s){l.innerHTML=`<div class="pad"><div class="error">${r(f(s))}</div></div>`}}(async()=>{let s=!1;try{await Promise.race([A(),new Promise((t,e)=>setTimeout(()=>e(new Error("kein Teams")),3e3))]),s=!0;const a=await S().catch(()=>null);a&&(b(a.app.locale),g(a.app.theme!=="default"))}catch{}$(),s&&(E(async a=>{try{if(!n)throw new Error(i("Nichts ausgewählt"));if(n.kind==="list")await u({entityId:"mm-list",contentUrl:`${m}teams.html`,websiteUrl:"https://new.my-monolith.com/",suggestedDisplayName:"MyMonolith"});else{const t=n.task;await u({entityId:`mm-task-${t.id}`,contentUrl:`${m}teams.html?task=${encodeURIComponent(t.id)}`,websiteUrl:t.url,suggestedDisplayName:`#${t.number} ${t.title}`.slice(0,40)})}a.notifySuccess()}catch(t){a.notifyFailure(f(t))}}),H())})();
