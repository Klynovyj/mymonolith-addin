import{t as s,b as W,l as R,a as te,d as se,c as ne}from"./i18n-B-dqTxMC.js";import{a as ae,w as ie}from"./theme-Cd0VMsDV.js";import{o as B,b as i,L as J,J as re}from"./util-C6SLhMZ3.js";import{B as le,t as T,c as oe,n as z,i as ce}from"./notifybot-4Lq_c9iT.js";import{g as de}from"./graph-ZBqDgedo.js";import"./preload-helper-DmqPR1C2.js";async function w(e,t={},n=!1){const a=await de(n,["User.Read"]),r=await fetch(le.replace(/\/$/,"")+e,{method:t.method??(t.json||t.form?"POST":"GET"),headers:{Authorization:`Bearer ${a}`,...t.json?{"Content-Type":"application/json"}:{}},body:t.form??(t.json?JSON.stringify(t.json):void 0)}),l=await r.json().catch(()=>({}));if(!r.ok)throw Object.assign(new Error((l==null?void 0:l.error)||`HTTP ${r.status}`),{status:r.status});return l}const ue=(e=!1)=>w("/app/t/me",{},e),pe=()=>w("/app/t/meta"),me=e=>w(`/app/t/list?view=${e}`),he=e=>w(`/app/t/ticket/${e}`),ke=(e,t)=>w(`/app/t/ticket/${e}`,{method:"PUT",json:t});function be(e,t,n,a=[]){if(!a.length)return w(`/app/t/ticket/${e}/${t}`,{json:{body:n}});const r=new FormData;r.append("body",n);for(const l of a)r.append("attachments[]",l,l.name);return w(`/app/t/ticket/${e}/${t}`,{form:r})}function ge(e,t=[]){const n=new FormData;for(const[a,r]of Object.entries(e))r!==void 0&&r!==""&&n.append(a,String(r));for(const a of t)n.append("attachments[]",a,a.name);return w("/app/t/create",{form:n})}const fe=e=>w("/app/t/agent-key",{json:{key:e}}),$e=Date.now(),b=e=>new Date($e-e*6e4).toISOString();b(300),b(12),b(-240),b(3e3),b(180),b(-2e3),b(5e3),b(60),b(30),b(2e4),b(15e3);b(200),b(100),b(12);ae();ie();const g=document.getElementById("app"),_="mm-tk-view";let o=null,d=null,h=!1,I="open",L=[],P="",q=null,f=null,H=!1;const K={1:["Niedrig","p1"],2:["Mittel","p2"],3:["Hoch","p3"],4:["Dringend","p4"]},j=e=>{var t;return s(((t=K[e])==null?void 0:t[0])??"–")},E=e=>{var t;return((t=d==null?void 0:d.statuses.find(n=>n.id===e))==null?void 0:t.name)??String(e)},Y=e=>e===2?"st-open":e===3?"st-wait":e>=4?"st-done":"st-other",ve=e=>{var t,n;return e?((n=(t=d==null?void 0:d.agents)==null?void 0:t.find(a=>a.id===e))==null?void 0:n.name)??`#${e}`:s("Nicht zugewiesen")},Z=e=>e.split(/[\s.@]+/).filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join("")||"?";function ye(e){const t=new Date(e),n=Math.round((Date.now()-t.getTime())/6e4);return n<1?s("gerade eben"):n<60?s("vor {n} Min.",{n}):n<1440?s("vor {n} Std.",{n:Math.round(n/60)}):n<10080?W(Math.round(n/1440),"vor {n} Tag|vor {n} Tagen"):t.toLocaleDateString(ne(),{day:"2-digit",month:"2-digit",year:"2-digit"})}async function F(e=!1){var a;g.innerHTML=`<div class="tk-center"><p class="hint">⏳ ${s("IT-Tickets werden geladen …")}</p></div>`;try{o=await ue(e)}catch(r){const l=r.status;g.innerHTML=`<div class="tk-center">
      <h2>🎫 ${s("IT-Tickets")}</h2>
      <p>${l===401||!l?s("Bitte mit Ihrem Microsoft-Konto anmelden."):i(r.message)}</p>
      <button type="button" class="primary" id="tk-login">${s("Anmelden")}</button>
    </div>`,(a=g.querySelector("#tk-login"))==null||a.addEventListener("click",()=>void F(!0));return}if(o.access==="none"){g.innerHTML=`<div class="tk-center">
      <h2>🎫 ${s("IT-Tickets")}</h2>
      <p>${s("Für {email} ist das IT-Ticketsystem nicht freigeschaltet.",{email:`<b>${i(o.email)}</b>`})}</p>
      <p class="hint">${s("Freigeschaltet ist, wer im Ticketsystem als Kontakt oder IT-Mitarbeiter eingetragen ist. Bitte bei der IT melden.")}</p>
    </div>`;return}h=o.access==="agent"&&o.agentKeySet;try{I=localStorage.getItem(_)||"open"}catch{}x().some(r=>r.id===I)||(I="open"),d=await pe().catch(()=>({statuses:[],priorities:[1,2,3,4]})),we();const t=new URLSearchParams(location.search),n=Number(t.get("ticket"));await A(),n?N(n):t.get("new")==="1"&&Q()}function x(){return h?[{id:"open",label:s("Offen")},{id:"mine",label:s("Meine")},{id:"unassigned",label:s("Nicht zugewiesen")},{id:"resolved",label:s("Erledigt")},{id:"mine-requests",label:s("Eigene Anfragen")}]:[{id:"open",label:s("Offen")},{id:"all",label:s("Alle")}]}function we(){const e=(o==null?void 0:o.access)==="agent"&&!o.agentKeySet?`<div class="tk-banner">🔑 ${s("Sie sind IT-Mitarbeiter. Hinterlegen Sie einmal Ihren persönlichen Freshdesk-Schlüssel, um alle Tickets zu bearbeiten.")}
          <button type="button" class="small primary" data-act="key">${s("Schlüssel hinterlegen")}</button></div>`:"";g.innerHTML=`
    <div class="tk-wrap">
      <header class="tk-head sticky-head">
        <div class="tk-top">
          <h1 class="tk-title">🎫 ${s("IT-Tickets")}</h1>
          <span class="tk-who" title="${i(o==null?void 0:o.email)}">${i(o==null?void 0:o.name)}${h?` · <span class="tk-role">${s("IT")}</span>`:""}</span>
          <button type="button" class="icon-btn" data-act="refresh" title="${i(s("Aktualisieren"))}">⟳</button>
          <button type="button" class="icon-btn" data-act="menu" title="${i(s("Mehr"))}">⋯</button>
          <button type="button" class="primary tk-new" data-act="new">＋ <span>${s("Neues Ticket")}</span></button>
        </div>
        ${e}
        <div class="tk-tools">
          <div class="view-seg tk-views" role="tablist">${x().map(t=>`<button type="button" role="tab" class="${t.id===I?"active":""}" data-view="${t.id}" aria-selected="${t.id===I}">${i(t.label)}</button>`).join("")}</div>
          <input type="search" class="tk-search" placeholder="${i(s("Suchen: Betreff, Nr., Name …"))}" value="${i(P)}" />
        </div>
      </header>
      <div class="tk-split">
        <section class="tk-list" id="tk-list" aria-label="${i(s("Tickets"))}"></section>
        <section class="tk-detail" id="tk-detail" aria-live="polite"></section>
      </div>
    </div>`,D()}g.addEventListener("click",e=>{var m,$;const t=e.target,n=(m=t.closest("[data-act]"))==null?void 0:m.dataset.act;n==="refresh"?(A(),q&&N(q,!0)):n==="new"?Q():n==="key"?X():n==="menu"?Ae():n==="back"?Te():n==="web"&&f&&B(f.ticket.url);const a=($=t.closest("[data-view]"))==null?void 0:$.dataset.view;if(a&&a!==I){I=a;try{localStorage.setItem(_,a)}catch{}g.querySelectorAll("[data-view]").forEach(v=>{v.classList.toggle("active",v.dataset.view===a),v.setAttribute("aria-selected",String(v.dataset.view===a))}),A()}const r=t.closest("[data-tk]");r&&N(Number(r.dataset.tk));const l=t.closest("a[href]");l&&/^https?:/i.test(l.getAttribute("href")??"")&&(e.preventDefault(),B(l.href))});g.addEventListener("input",e=>{const t=e.target;t.classList.contains("tk-search")&&(P=t.value,O())});async function A(){if(H)return;H=!0;const e=g.querySelector("#tk-list");e&&!L.length&&(e.innerHTML=`<p class="hint tk-pad">⏳ ${s("Lade …")}</p>`);try{L=(await me(I)).tickets.sort((n,a)=>a.updatedAt.localeCompare(n.updatedAt)),O()}catch(t){e&&(e.innerHTML=`<div class="error tk-pad">${i(t.message)}</div>`)}finally{H=!1}}function O(){const e=g.querySelector("#tk-list");if(!e)return;const t=P.trim().toLowerCase(),n=t?L.filter(a=>{var r,l;return`#${a.id} ${a.id} ${a.subject} ${((r=a.requester)==null?void 0:r.name)??""} ${((l=a.requester)==null?void 0:l.email)??""} ${E(a.status)}`.toLowerCase().includes(t)}):L;if(!n.length){e.innerHTML=`<div class="tk-empty"><div class="tk-empty-ico">🎉</div><p>${t?s("Keine Treffer."):s("Keine Tickets in dieser Ansicht.")}</p>
      ${h?"":`<button type="button" class="primary" data-act="new">＋ ${s("Neues Ticket")}</button>`}</div>`;return}e.innerHTML=`<div class="tk-count hint">${W(n.length,"{n} Ticket|{n} Tickets")}</div>${n.map(Se).join("")}`}function Se(e){var a,r,l,m;const t=e.dueBy&&e.status<4&&new Date(e.dueBy).getTime()<Date.now(),n=h?((a=e.requester)==null?void 0:a.name)??((r=e.requester)==null?void 0:r.email)??"":E(e.status);return`<button type="button" class="tk-row${e.id===q?" active":""}" data-tk="${e.id}">
      <span class="tk-av" aria-hidden="true">${i(Z(((l=e.requester)==null?void 0:l.name)??(o==null?void 0:o.name)??"?"))}</span>
      <span class="tk-row-main">
        <span class="tk-row-top"><span class="tk-num">#${e.id}</span><span class="tk-subj">${i(e.subject)}</span></span>
        <span class="tk-row-sub">
          <span class="tk-st ${Y(e.status)}">${i(E(e.status))}</span>
          ${e.priority>=3?`<span class="tk-prio ${(m=K[e.priority])==null?void 0:m[1]}">${i(j(e.priority))}</span>`:""}
          ${t?`<span class="tk-prio p4">${s("überfällig")}</span>`:""}
          ${h?`<span class="tk-meta">${i(n)}${e.responderId?` → ${i(ve(e.responderId))}`:""}</span>`:""}
        </span>
      </span>
      <span class="tk-when">${i(ye(e.updatedAt))}</span>
    </button>`}function Te(){q=null,f=null,document.body.classList.remove("tk-open"),g.querySelectorAll(".tk-row.active").forEach(e=>e.classList.remove("active")),D()}async function N(e,t=!1){q=e,g.querySelectorAll(".tk-row").forEach(a=>a.classList.toggle("active",Number(a.dataset.tk)===e)),document.body.classList.add("tk-open");const n=g.querySelector("#tk-detail");n&&!t&&(n.innerHTML=`<p class="hint tk-pad">⏳ ${s("Lade Ticket #{n} …",{n:e})}</p>`);try{const a=await he(e);if(q!==e)return;f={ticket:a.ticket,conversations:a.conversations},D()}catch(a){n&&(n.innerHTML=`<div class="tk-dhead"><button type="button" class="tk-back" data-act="back"><b>‹</b> ${s("Tickets")}</button></div><div class="error tk-pad">${i(a.message)}</div>`)}}function Ie(e){return/^image\//.test(e.type)?`<a class="tk-img" href="${i(e.url)}" title="${i(e.name)}"><img src="${i(e.url)}" alt="${i(e.name)}" loading="lazy" /></a>`:`<a class="file-chip" href="${i(e.url)}">📎 ${i(e.name)} <span class="hint">${Math.max(1,Math.round(e.size/1024))} KB</span></a>`}function G(e){return`<div class="tk-msg${e.mine?" mine":""}${e.private?" note":""}">
      <span class="tk-av sm" aria-hidden="true">${i(Z(e.author))}</span>
      <div class="tk-bubble">
        <div class="tk-mhead"><b>${i(e.author)}</b>${e.private?` <span class="tk-note-tag">🔒 ${s("Interne Notiz")}</span>`:""}<span class="hint">${i(J(new Date(e.createdAt)))}</span></div>
        <div class="tk-mbody">${re(e.html)}</div>
        ${e.attachments.length?`<div class="tk-files">${e.attachments.map(Ie).join("")}</div>`:""}
      </div>
    </div>`}function D(){var M,u;const e=g.querySelector("#tk-detail");if(!e)return;if(!f){e.innerHTML=`<div class="tk-placeholder hint">${s("Ticket links auswählen.")}</div>`;return}const t=f.ticket,n=((M=t.requester)==null?void 0:M.name)??(o==null?void 0:o.name)??"",a=c=>{var p,k;return c.incoming||c.userId===t.requesterId?c.userId===t.requesterId?n:c.fromEmail??s("Kollege"):((k=(p=d==null?void 0:d.agents)==null?void 0:p.find(y=>y.id===c.userId))==null?void 0:k.name)??s("IT-Support")},r=c=>h?!c.incoming&&c.userId===(d==null?void 0:d.myAgentId):c.incoming||c.userId===t.requesterId,l=(c,p,k,y)=>`<select class="tk-sel" data-field="${c}">${y!==void 0?`<option value="">${i(y)}</option>`:""}${k.map(S=>`<option value="${S.id}"${S.id===p?" selected":""}>${i(S.name)}</option>`).join("")}</select>`,m=h?`<div class="tk-props">
        <label>${s("Status")}${l("status",t.status,(d==null?void 0:d.statuses)??[])}</label>
        <label>${s("Priorität")}${l("priority",t.priority,[1,2,3,4].map(c=>({id:c,name:j(c)})))}</label>
        <label>${s("Zuständig")}${l("responderId",t.responderId,(d==null?void 0:d.agents)??[],s("Nicht zugewiesen"))}</label>
        <label>${s("Gruppe")}${l("groupId",t.groupId,(d==null?void 0:d.groups)??[],"–")}</label>
        ${t.responderId!==(d==null?void 0:d.myAgentId)&&(d!=null&&d.myAgentId)?`<button type="button" class="small" data-take>🙋 ${s("Übernehmen")}</button>`:""}
      </div>`:`<div class="tk-props ro">
        <span class="tk-st ${Y(t.status)}">${i(E(t.status))}</span>
        <span class="tk-prio ${(u=K[t.priority])==null?void 0:u[1]}">${s("Priorität")}: ${i(j(t.priority))}</span>
        <span class="hint">${s("Erstellt")}: ${i(J(new Date(t.createdAt)))}</span>
      </div>`,$={html:t.descriptionHtml??"",createdAt:t.createdAt,attachments:t.attachments,author:n,mine:!h};e.innerHTML=`
    <div class="tk-dhead">
      <button type="button" class="tk-back" data-act="back"><b>‹</b> ${s("Tickets")}</button>
      <div class="tk-dtitle"><span class="tk-num">#${t.id}</span> ${i(t.subject)}</div>
      <button type="button" class="icon-btn" data-act="web" title="${i(s("Im Browser öffnen"))}">↗</button>
    </div>
    ${m}
    ${h&&t.requester?`<div class="tk-req hint">${s("Von")}: <b>${i(t.requester.name)}</b> &lt;${i(t.requester.email)}&gt;</div>`:""}
    <div class="tk-thread" id="tk-thread">
      ${G($)}
      ${f.conversations.map(c=>G({...c,author:a(c),mine:r(c)})).join("")}
    </div>
    ${Le(t)}`,qe(e,t);const v=e.querySelector("#tk-thread");setTimeout(()=>{var c;return(c=v==null?void 0:v.lastElementChild)==null?void 0:c.scrollIntoView({block:"end"})},0)}function Le(e){const t=e.status>=4;return`<form class="tk-composer" id="tk-composer">
      ${h?`<div class="tk-kind view-seg" role="tablist">
        <button type="button" class="active" data-kind="reply">💬 ${s("Antwort an Anfragenden")}</button>
        <button type="button" data-kind="note">🔒 ${s("Interne Notiz")}</button></div>`:""}
      ${t&&!h?`<p class="hint">${s("Das Ticket ist erledigt. Mit einer Nachricht wird es wieder geöffnet.")}</p>`:""}
      <div class="tk-files-sel" hidden></div>
      <div class="tk-cbar">
        <label class="icon-btn tk-attach" title="${i(s("Datei anhängen"))}">📎<input type="file" multiple hidden /></label>
        <textarea rows="2" spellcheck="true" lang="${R()}" placeholder="${i(h?s("Antwort schreiben …"):s("Nachricht an die IT …"))}"></textarea>
        <button type="submit" class="primary tk-send" title="${i(s("Senden (Strg+Enter)"))}">➤</button>
      </div>
    </form>`}function qe(e,t){var M;let n="reply",a=[];const r=e.querySelector("#tk-composer"),l=r.querySelector("textarea"),m=r.querySelector(".tk-files-sel"),$=()=>{m.hidden=!a.length,m.innerHTML=a.map((u,c)=>`<span class="file-chip">📎 ${i(u.name)} <button type="button" class="link small" data-rm="${c}">✕</button></span>`).join("")};r.addEventListener("click",u=>{var y,S;const c=u.target,p=(y=c.closest("[data-kind]"))==null?void 0:y.dataset.kind;p&&(n=p,r.querySelectorAll("[data-kind]").forEach(C=>C.classList.toggle("active",C.dataset.kind===p)),r.classList.toggle("is-note",p==="note"),l.placeholder=p==="note"?s("Interne Notiz (nur für die IT sichtbar) …"):s("Antwort schreiben …"));const k=(S=c.closest("[data-rm]"))==null?void 0:S.dataset.rm;k!==void 0&&(a.splice(Number(k),1),$())}),r.querySelector("input[type=file]").addEventListener("change",u=>{const c=u.target;a.push(...Array.from(c.files??[])),c.value="",$()}),l.addEventListener("input",()=>{l.style.height="auto",l.style.height=`${Math.min(220,l.scrollHeight)}px`}),l.addEventListener("keydown",u=>{u.key==="Enter"&&(u.ctrlKey||u.metaKey)&&(u.preventDefault(),r.requestSubmit())}),l.addEventListener("focus",()=>setTimeout(()=>{var u,c;return(c=(u=e.querySelector("#tk-thread"))==null?void 0:u.lastElementChild)==null?void 0:c.scrollIntoView({block:"end"})},300)),r.addEventListener("submit",async u=>{u.preventDefault();const c=l.value.trim();if(!c&&!a.length)return;const p=r.querySelector(".tk-send");p.disabled=!0;try{const k=c.split(/\n{2,}/).map(S=>`<p>${i(S).replace(/\n/g,"<br>")}</p>`).join(""),y=await be(t.id,n,k,a);f==null||f.conversations.push(y.conversation),l.value="",a=[],T(n==="note"?s("Notiz gespeichert."):s("Gesendet.")),N(t.id,!0),A()}catch(k){T(`${s("Nicht gesendet")}: ${k.message}`,!0)}finally{p.disabled=!1}});const v=async(u,c)=>{try{const p=await ke(t.id,u);f&&(f.ticket={...f.ticket,...p.ticket}),L=L.map(k=>k.id===t.id?{...k,...p.ticket}:k),O(),D(),T(c)}catch(p){T(`${s("Nicht gespeichert")}: ${p.message}`,!0),D()}};e.querySelectorAll(".tk-sel").forEach(u=>u.addEventListener("change",async()=>{const c=u.dataset.field,p=u.value===""?null:Number(u.value);if(c==="status"&&p!==null&&p>=4&&!await oe(`${s("Ticket #{n} auf „{s}“ setzen?",{n:t.id,s:i(E(p))})}`)){u.value=String(t.status);return}v({[c]:p},s("Gespeichert."))})),(M=e.querySelector("[data-take]"))==null||M.addEventListener("click",()=>void v({responderId:(d==null?void 0:d.myAgentId)??null},s("Ticket übernommen.")))}function Q(){var t;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    ${h?`<label>${s("Für (E-Mail des Kollegen, leer = ich)")}<input type="email" name="email" placeholder="${i(o==null?void 0:o.email)}" /></label>`:""}
    <label>${s("Betreff")}<input name="subject" required maxlength="250" placeholder="${i(s("z. B. Drucker im 2. OG druckt nicht"))}" /></label>
    <label>${s("Beschreibung")}<textarea name="description" rows="6" spellcheck="true" lang="${R()}" placeholder="${i(s("Was ist passiert? Seit wann? Fehlermeldung?"))}"></textarea></label>
    <div class="tk-row2">
      <label>${s("Priorität")}<select name="priority">${[1,2,3,4].map(n=>`<option value="${n}"${n===2?" selected":""}>${i(j(n))}</option>`).join("")}</select></label>
      ${h&&((t=d==null?void 0:d.groups)!=null&&t.length)?`<label>${s("Gruppe")}<select name="groupId"><option value="">–</option>${d.groups.map(n=>`<option value="${n.id}">${i(n.name)}</option>`).join("")}</select></label>`:""}
    </div>
    <label class="tk-attach-new">📎 ${s("Dateien / Screenshots anhängen")}<input type="file" name="files" multiple /></label>
    <div class="tk-actions"><button type="submit" class="primary">${s("Ticket senden")}</button></div>`,z(`🎫 ${s("Neues IT-Ticket")}`,[e]),setTimeout(()=>{var n;return(n=e.querySelector("[name=subject]"))==null?void 0:n.focus()},50),e.addEventListener("submit",async n=>{var l;n.preventDefault();const a=new FormData(e),r=e.querySelector("[type=submit]");r.disabled=!0,r.textContent=s("Wird gesendet …");try{const m=await ge({subject:String(a.get("subject")??""),description:i(String(a.get("description")??"")).replace(/\n/g,"<br>"),priority:Number(a.get("priority"))||2,email:String(a.get("email")??"")||void 0,groupId:Number(a.get("groupId"))||void 0},a.getAll("files").filter($=>$.size));(l=document.querySelector(".m-sheet [data-close]"))==null||l.click(),T(s("Ticket #{n} erstellt.",{n:m.ticket.id})),await A(),N(m.ticket.id)}catch(m){T(`${s("Nicht gesendet")}: ${m.message}`,!0),r.disabled=!1,r.textContent=s("Ticket senden")}})}function X(){var n;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    <p>${s("So finden Sie Ihren Schlüssel:")}</p>
    <ol class="tk-steps">
      <li>${s("Freshdesk öffnen und anmelden")}: <a href="https://${i(o==null?void 0:o.domain)}/a/profile/settings">${i(o==null?void 0:o.domain)}</a></li>
      <li>${s("Oben rechts auf Ihr Bild → „Profileinstellungen“")}</li>
      <li>${s("Rechts „API-Schlüssel anzeigen“ → kopieren")}</li>
    </ol>
    <label>${s("Persönlicher API-Schlüssel")}<input name="key" autocomplete="off" spellcheck="false" required /></label>
    <p class="hint">${s("Der Schlüssel wird nur verschlüsselt im MyMonolith-Dienst gespeichert und nie angezeigt. Er wird gegen Ihre E-Mail geprüft.")}</p>
    <div class="tk-actions">
      ${o!=null&&o.agentKeySet?`<button type="button" class="small" data-remove>${s("Schlüssel entfernen")}</button>`:""}
      <button type="submit" class="primary">${s("Speichern")}</button>
    </div>`,z(`🔑 ${s("Freshdesk-Schlüssel")}`,[e]);const t=async a=>{var r;try{const l=await fe(a);(r=document.querySelector(".m-sheet [data-close]"))==null||r.click(),T(l.agentKeySet?s("Schlüssel gespeichert – Sie sehen jetzt alle Tickets."):s("Schlüssel entfernt.")),F()}catch(l){T(l.message,!0)}};e.addEventListener("submit",a=>{a.preventDefault(),t(String(new FormData(e).get("key")??"").trim())}),(n=e.querySelector("[data-remove]"))==null||n.addEventListener("click",()=>void t(""))}function Ae(){const e=document.createElement("div");e.className="tk-menu",e.innerHTML=`
    ${(o==null?void 0:o.access)==="agent"?`<button type="button" class="menu-item" data-m="key"><span class="mi-icon">🔑</span><span class="mi-label">${o.agentKeySet?s("Freshdesk-Schlüssel ändern"):s("Freshdesk-Schlüssel hinterlegen")}</span></button>`:""}
    <button type="button" class="menu-item" data-m="web"><span class="mi-icon">↗</span><span class="mi-label">${s("Freshdesk im Browser öffnen")}</span></button>
    <div class="tk-lang">${te()}</div>`,z(s("Mehr"),[e]),e.addEventListener("click",t=>{var l,m,$;const n=t.target,a=(l=n.closest("[data-m]"))==null?void 0:l.dataset.m,r=(m=n.closest("[data-lang]"))==null?void 0:m.dataset.lang;if(r)return se(r);a&&(($=document.querySelector(".m-sheet [data-close]"))==null||$.click(),a==="key"&&X(),a==="web"&&B(`https://${o==null?void 0:o.domain}/${h?"a/tickets":"support/tickets"}`))})}const ee=()=>document.body.classList.toggle("phone",ce());ee();var V,U;(U=(V=matchMedia("(max-width: 600px)")).addEventListener)==null||U.call(V,"change",ee);setInterval(()=>{document.visibilityState==="visible"&&o&&o.access!=="none"&&A()},6e4);F();
