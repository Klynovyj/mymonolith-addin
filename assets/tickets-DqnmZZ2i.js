import{t,b as H,l as de,a as qe,d as Me,c as Ee}from"./i18n-BCihnJRa.js";import{a as Ne,w as Ae}from"./theme-D1NyFA0J.js";import{b as n,o as J,L as ue,J as ze}from"./util-lL5lOJ59.js";import{G,H as pe,I as he,J as He,K as De,L as je,t as D,c as Ce,n as Y,M as Ke,N as Be,O as Pe,i as Fe,P as Oe,k as me,Q as Re,E as Ue}from"./ticketswitch-BKsTtyrK.js";import{o as Ge}from"./wizard-gFzSoW-N.js";import"./preload-helper-DmqPR1C2.js";function Ve(e){const{root:s,close:a}=Ge(t("Aufholen"));s.classList.add("cu-panel","tk-cu");let i=[],r=0,o=0,v=0,$=!1,m="",T="",p="",d="reply",b="loading";const y=()=>{a(),document.removeEventListener("keydown",ie),e.onClose($)};async function E(){try{i=(await he(!0)).items}catch(l){T=l.message}b=i.length?"card":"done",A()}function q(){const l=i.length-r;return`<header class="wz-head cu-head">
        <button class="wz-close" data-close title="${n(t("Schließen"))}" aria-label="${n(t("Schließen"))}">✕</button>
        <span class="wz-title">☕ ${n(b==="card"?H(l,"{n} verbleibend|{n} verbleibend"):t("Aufholen"))}</span>
      </header>
      <div class="cu-progress"><span style="width:${i.length?r/i.length*100:100}%"></span></div>`}function R(l){const h=l.conversations.length-l.newCount,k=l.conversations.slice(0,h),f=l.conversations.slice(h);return`<article class="cu-card" data-card>
        <div class="cu-swipe cu-swipe-read">✓ ${n(t("Gelesen"))}</div>
        <div class="cu-swipe cu-swipe-later">${n(t("Später"))}</div>
        <div class="cu-task">
          <div class="cu-task-title">${n(l.ticket.subject)}</div>
          <div class="cu-task-meta"><span class="num">#${l.ticket.id}</span>
            ${e.statusBadge(l.ticket)}
            ${e.asAgent&&l.ticket.requester?`<span class="hint">${n(l.ticket.requester.name)}</span>`:""}
            <span class="badge unread">${n(H(l.newCount,"{n} neu|{n} neu"))}</span></div>
        </div>
        <div class="thread cu-thread tk-thread">
          ${k.map(I=>`<div class="cu-item">${e.bubble(I,l.ticket)}</div>`).join("")}
          ${k.length?`<div class="cu-divider"><span>${n(t("Zuletzt gelesen"))}</span></div>`:""}
          ${f.map(I=>`<div class="cu-item cu-new">${e.bubble(I,l.ticket)}</div>`).join("")}
        </div>
      </article>`}function Le(){const l=i[r],h=e.asAgent&&!l.ownRequest;return`<footer class="wz-foot cu-foot">
        <div class="cu-compose">
          ${h?`<div class="tk-kind view-seg" role="tablist">
            <button type="button" class="${d==="reply"?"active":""}" data-kind="reply">💬 ${t("Antwort an Anfragenden")}</button>
            <button type="button" class="${d==="note"?"active":""}" data-kind="note">🔒 ${t("Interne Notiz")}</button></div>`:""}
          <div class="cu-compose-row">
            <textarea id="cu-text" rows="1" spellcheck="true" placeholder="${n(h?d==="note"?t("Interne Notiz (nur für die IT sichtbar) …"):t("Antwort schreiben …"):t("Nachricht an die IT …"))}">${n(p)}</textarea>
            <button type="button" class="primary cu-send" data-send${p.trim()&&!m?"":" disabled"} title="${n(t("Senden (Strg+Enter)"))}">➤</button>
          </div>
        </div>
        <div class="cu-actions">
          <button type="button" class="cu-later" data-later${m?" disabled":""}>${n(t("Ungelesen lassen"))}</button>
          <button type="button" class="cu-open" data-open${m?" disabled":""} title="${n(t("Ticket öffnen"))}">↗<span class="lbl"> ${n(t("Öffnen"))}</span></button>
          <button type="button" class="primary cu-read" data-read${m?" disabled":""}>✓ ${n(t("Als gelesen"))}</button>
        </div>
      </footer>`}function A(){var h;let l;b==="loading"?l=`<div class="wz-empty"><div class="wz-spinner"></div><p class="hint">${n(t("Neue Nachrichten werden geladen …"))}</p></div>`:b==="done"?l=`<div class="wz-empty cu-done">
          <div class="cu-done-icon">✓</div>
          <h2>${n(t("Alles durchgesehen"))}</h2>
          <p class="hint">${n(i.length?t("Sie haben alle neuen Nachrichten durchgesehen."):t("Keine neuen Nachrichten – alles gelesen."))}</p>
          ${i.length?`<p class="hint">${n(H(o,"{n} als gelesen|{n} als gelesen"))} · ${n(H(v,"{n} für später|{n} für später"))}</p>`:""}
          <button type="button" class="primary" data-close>${n(t("Zurück zur Liste"))}</button>
        </div>`:l=R(i[r]),s.innerHTML=`${q()}
      ${T?`<div class="error wz-error">${n(T)}</div>`:""}
      ${m?'<div class="wz-loading-line"></div>':""}
      <div class="wz-body cu-body">${l}</div>
      ${b==="card"?Le():""}`,b==="card"&&((h=s.querySelector(".cu-divider")??s.querySelector(".cu-new"))==null||h.scrollIntoView({block:"start"}),Ie(),se())}const se=()=>{const l=s.querySelector("#cu-text");l&&(l.style.height="auto",l.style.height=`${Math.min(l.scrollHeight,140)}px`)};function U(l,h=!0){l==="read"?o++:v++,p="",T="",d="reply";const k=()=>{r++,b=r>=i.length?"done":"card",A()},f=s.querySelector("[data-card]");h&&f?(f.classList.add(l==="read"?"fly-right":"fly-left"),setTimeout(k,180)):k()}async function ne(l=!0){m="…",A();try{await G([i[r].ticket.id]),$=!0,m="",U("read",l)}catch(h){m="",T=h.message,A()}}async function ae(){const l=p.trim();if(!l||m)return;const h=i[r];m=t("Wird gesendet …"),A();try{const k=l.split(/\n{2,}/).map(f=>`<p>${n(f).replace(/\n/g,"<br>")}</p>`).join("");await pe(h.ticket.id,e.asAgent&&!h.ownRequest?d:"reply",k),await G([h.ticket.id]).catch(()=>{}),$=!0,m="",U("read")}catch(k){m="",T=k.message,A()}}function Ie(){const l=s.querySelector("[data-card]");if(!l)return;let h=0,k=0,f=0,I=!1,N=null;l.addEventListener("pointerdown",z=>{z.pointerType==="mouse"||z.target.closest("a, button, textarea, input")||(h=z.clientX,k=z.clientY,f=0,I=!0,N=null)}),l.addEventListener("pointermove",z=>{if(!I)return;const W=z.clientX-h,re=z.clientY-k;N===null&&Math.abs(W)+Math.abs(re)>10&&(N=Math.abs(W)>Math.abs(re)*1.3,N&&l.setPointerCapture(z.pointerId)),N&&(f=W,l.style.transform=`translateX(${f}px) rotate(${f/40}deg)`,l.style.setProperty("--read",String(Math.max(0,Math.min(1,f/110)))),l.style.setProperty("--later",String(Math.max(0,Math.min(1,-f/110)))))});const le=()=>{if(I){if(I=!1,N&&f>110)return void ne();if(N&&f<-110)return U("later");l.style.transition="transform 0.18s ease",l.style.transform="",l.style.setProperty("--read","0"),l.style.setProperty("--later","0"),setTimeout(()=>l.style.transition="",200)}};l.addEventListener("pointerup",le),l.addEventListener("pointercancel",le)}s.addEventListener("click",l=>{var f,I;const h=l.target;if(h.closest("[data-close]"))return y();if(h.closest("[data-read]"))return void ne();if(h.closest("[data-later]"))return U("later");if(h.closest("[data-send]"))return void ae();if(h.closest("[data-open]")){const N=i[r].ticket.id;return $=!0,y(),e.open(N)}const k=(f=h.closest("[data-kind]"))==null?void 0:f.dataset.kind;k&&(d=k,A(),(I=s.querySelector("#cu-text"))==null||I.focus())}),s.addEventListener("input",l=>{var k;const h=l.target;h.id==="cu-text"&&(p=h.value,(k=s.querySelector("[data-send]"))==null||k.toggleAttribute("disabled",!p.trim()||!!m),se())});const ie=l=>{var k;((k=l.target)==null?void 0:k.id)==="cu-text"&&l.key==="Enter"&&(l.ctrlKey||l.metaKey)?(l.preventDefault(),ae()):l.key==="Escape"&&y()};document.addEventListener("keydown",ie),A(),E()}Ne();Ae();const w=document.getElementById("app"),x=new URLSearchParams(location.search).get("from")??"",be="mm-tk-view";let c=null,u=null,g=!1,j="open",K=[],Q="",M=null,S=null,Z=!1;const _={1:["Niedrig","p1"],2:["Mittel","p2"],3:["Hoch","p3"],4:["Dringend","p4"]},V=e=>{var s;return t(((s=_[e])==null?void 0:s[0])??"–")},B=e=>{var s;return((s=u==null?void 0:u.statuses.find(a=>a.id===e))==null?void 0:s.name)??String(e)},ee=e=>e===2?"st-open":e===3?"st-wait":e>=4?"st-done":"st-other",We=e=>{var s,a;return e?((a=(s=u==null?void 0:u.agents)==null?void 0:s.find(i=>i.id===e))==null?void 0:a.name)??`#${e}`:t("Nicht zugewiesen")},ve=e=>e.split(/[\s.@]+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?";function Ze(e){const s=new Date(e),a=Math.round((Date.now()-s.getTime())/6e4);return a<1?t("gerade eben"):a<60?t("vor {n} Min.",{n:a}):a<1440?t("vor {n} Std.",{n:Math.round(a/60)}):a<10080?H(Math.round(a/1440),"vor {n} Tag|vor {n} Tagen"):s.toLocaleDateString(Ee(),{day:"2-digit",month:"2-digit",year:"2-digit"})}async function te(e=!1){var i;w.innerHTML=`<div class="tk-center"><p class="hint">⏳ ${t("IT-Tickets werden geladen …")}</p></div>`;try{c=await Oe(e)}catch(r){const o=r.status;w.innerHTML=`<div class="tk-center">
      <h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${o===401||!o?t("Bitte mit Ihrem Microsoft-Konto anmelden."):n(r.message)}</p>
      <button type="button" class="primary" id="tk-login">${t("Anmelden")}</button>
    </div>`,(i=w.querySelector("#tk-login"))==null||i.addEventListener("click",()=>void te(!0));return}if(c.access==="none"){w.innerHTML=`<div class="tk-center">
      ${x?`<p>${me("tickets")}</p>`:""}<h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${t("Für {email} ist das IT-Ticketsystem nicht freigeschaltet.",{email:`<b>${n(c.email)}</b>`})}</p>
      <p class="hint">${t("Freigeschaltet ist, wer im Ticketsystem als Kontakt oder IT-Mitarbeiter eingetragen ist. Bitte bei der IT melden.")}</p>
    </div>`;return}g=c.access==="agent"&&c.agentKeySet;try{j=localStorage.getItem(be)||"open"}catch{}ke().some(r=>r.id===j)||(j="open"),u=await Re().catch(()=>({statuses:[],priorities:[1,2,3,4]})),Je();const s=new URLSearchParams(location.search),a=Number(s.get("ticket"));await C(),a?P(a):s.get("new")==="1"&&we()}function ke(){return g?[{id:"open",label:t("Offen")},{id:"mine",label:t("Meine")},{id:"unassigned",label:t("Nicht zugewiesen")},{id:"resolved",label:t("Erledigt")},{id:"mine-requests",label:t("Eigene Anfragen")}]:[{id:"open",label:t("Offen")},{id:"all",label:t("Alle")}]}function Je(){const e=(c==null?void 0:c.access)==="agent"&&!c.agentKeySet?`<div class="tk-banner">🔑 ${t("Sie sind IT-Mitarbeiter. Hinterlegen Sie einmal Ihren persönlichen Freshdesk-Schlüssel, um alle Tickets zu bearbeiten.")}
          <button type="button" class="small primary" data-act="key">${t("Schlüssel hinterlegen")}</button></div>`:"";w.innerHTML=`
    <div class="split-shell tk-shell">
      <div id="split-head" class="split-head">
        <div class="tk-head">
          <div class="hdr-top">
            ${x?`<span class="hdr-area">${me("tickets")}</span>`:`<strong class="hdr-title">🎫 ${t("IT-Tickets")}</strong>`}
            <input id="search" type="search" class="tk-search" placeholder="🔎 ${n(t("Suchen: Betreff, Nr., Name …"))}" value="${n(Q)}" />
            <div class="hdr-views">
              <span class="seg view-seg tk-views" role="tablist" aria-label="${n(t("Ansicht"))}">${ke().map(s=>`<button type="button" class="seg-btn${s.id===j?" active":""}" data-view="${s.id}" aria-pressed="${s.id===j}">${n(s.label)}</button>`).join("")}</span>
            </div>
            <span class="tk-who" title="${n(c==null?void 0:c.email)}">${n(c==null?void 0:c.name)}${g?` <span class="tk-role">${t("IT")}</span>`:""}</span>
            <button type="button" class="icon-tool" data-act="refresh" title="${n(t("Aktualisieren"))}">⟳</button>
            <button type="button" class="action hdr-catchup" id="tk-catchup" data-act="catchup" hidden title="${n(t("Alle neuen Nachrichten nacheinander durchsehen"))}">☕<span class="lbl"> ${t("Aufholen")}</span> <span class="cu-count"></span></button>
            <button type="button" class="action primary hdr-new" data-act="new">＋<span class="lbl"> ${t("Neues Ticket")}</span></button>
            <button type="button" class="icon-tool hdr-more" data-act="menu" title="${n(t("Mehr"))}">⋯</button>
          </div>
        </div>
        ${e}
      </div>
      <div class="split">
        <div id="pane-list" class="pane pane-list"><div class="view"><section class="tk-list" id="tk-list" aria-label="${n(t("Tickets"))}"></section></div></div>
        <div class="split-handle" role="separator" aria-orientation="vertical" tabindex="0" title="${n(t("Ziehen ändert die Breite · Doppelklick: Standard"))}"></div>
        <div id="pane-detail" class="pane pane-detail"><section class="tk-detail" id="tk-detail" aria-live="polite"></section></div>
      </div>
    </div>`,Ue(w.querySelector(".split"),"mm-tk-split"),F()}w.addEventListener("click",e=>{var v,$;const s=e.target,a=(v=s.closest("[data-act]"))==null?void 0:v.dataset.act;a==="refresh"?(C(),M&&P(M,!0)):a==="new"?we():a==="catchup"?Xe():a==="key"?Se():a==="menu"?st():a==="back"&&xe(),s.closest('[data-area="tasks"]')?location.href=He(x):a==="web"&&S&&J(S.ticket.url);const i=($=s.closest("[data-view]"))==null?void 0:$.dataset.view;if(i&&i!==j){j=i;try{localStorage.setItem(be,i)}catch{}w.querySelectorAll("[data-view]").forEach(m=>{m.classList.toggle("active",m.dataset.view===i),m.setAttribute("aria-selected",String(m.dataset.view===i))}),C()}const r=s.closest("[data-tk]");r&&P(Number(r.dataset.tk));const o=s.closest("a[href]");o&&/^https?:/i.test(o.getAttribute("href")??"")&&(e.preventDefault(),J(o.href))});w.addEventListener("input",e=>{const s=e.target;s.classList.contains("tk-search")&&(Q=s.value,O())});let L=new Map;async function $e(e=!1){try{const s=await he(e);L=new Map(s.items.map(a=>[a.ticket.id,a.newCount])),M&&L.has(M)&&(L.delete(M),G([M]).catch(()=>{}))}catch{return}O(),fe()}function fe(){const e=w.querySelector("#tk-catchup");e&&(e.hidden=!L.size,e.querySelector(".cu-count").textContent=String(L.size))}function Xe(){Ve({asAgent:g,bubble:_e,statusBadge:e=>`<span class="tk-st ${ee(e.status)}">${n(B(e.status))}</span>`,open:e=>void P(e),onClose:e=>{e&&(C(),$e(!0))}})}async function C(){if(Z)return;Z=!0;const e=w.querySelector("#tk-list");e&&!K.length&&(e.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade …")}</p>`);try{K=(await De(j)).tickets.sort((a,i)=>i.updatedAt.localeCompare(a.updatedAt)),O(),$e()}catch(s){e&&(e.innerHTML=`<div class="error tk-pad">${n(s.message)}</div>`)}finally{Z=!1}}function O(){const e=w.querySelector("#tk-list");if(!e)return;const s=Q.trim().toLowerCase(),a=s?K.filter(r=>{var o,v;return`#${r.id} ${r.id} ${r.subject} ${((o=r.requester)==null?void 0:o.name)??""} ${((v=r.requester)==null?void 0:v.email)??""} ${B(r.status)}`.toLowerCase().includes(s)}):K;if(!a.length){e.innerHTML=`<div class="tk-empty"><div class="tk-empty-ico">🎉</div><p>${s?t("Keine Treffer."):t("Keine Tickets in dieser Ansicht.")}</p>
      ${g?"":`<button type="button" class="primary" data-act="new">＋ ${t("Neues Ticket")}</button>`}</div>`;return}const i=L.size?`<div class="catchup-bar"><span class="catchup-bar-icon">☕</span><span class="grow">${H(L.size,"<b>{n}</b> Ticket mit neuen Nachrichten|<b>{n}</b> Tickets mit neuen Nachrichten")}</span>
        <button type="button" class="primary small" data-act="catchup">${t("Jetzt aufholen")} →</button></div>`:"";e.innerHTML=`${i}<div class="tk-count hint">${H(a.length,"{n} Ticket|{n} Tickets")}</div>${a.map(Ye).join("")}`}function Ye(e){var o,v,$,m;const s=e.dueBy&&e.status<4&&new Date(e.dueBy).getTime()<Date.now(),a=g?((o=e.requester)==null?void 0:o.name)??((v=e.requester)==null?void 0:v.email)??"":B(e.status),i=L.has(e.id);return`<button type="button" class="tk-row${e.status>=4?"":s||e.priority>=4?" b-urgent":e.status===3?" b-wait":" b-open"}${i?" is-new":""}${e.id===M?" active":""}" data-tk="${e.id}">
      <span class="tk-av" aria-hidden="true">${n(ve((($=e.requester)==null?void 0:$.name)??(c==null?void 0:c.name)??"?"))}</span>
      <span class="tk-row-main">
        <span class="tk-row-top"><span class="tk-num">#${e.id}</span><span class="tk-subj">${n(e.subject)}</span></span>
        <span class="tk-row-sub">
          <span class="tk-st ${ee(e.status)}">${n(B(e.status))}</span>
          ${e.priority>=3?`<span class="tk-prio ${(m=_[e.priority])==null?void 0:m[1]}">${n(V(e.priority))}</span>`:""}
          ${s?`<span class="tk-prio p4">${t("überfällig")}</span>`:""}
          ${g?`<span class="tk-meta">${n(a)}${e.responderId?` → ${n(We(e.responderId))}`:""}</span>`:""}
        </span>
      </span>
      <span class="tk-when">${n(Ze(e.updatedAt))}${L.get(e.id)?`<span class="unread-dot" title="${n(H(L.get(e.id),"{n} ungelesene Nachricht|{n} ungelesene Nachrichten"))}">${L.get(e.id)}</span>`:""}</span>
    </button>`}function xe(){M=null,S=null,document.body.classList.remove("tk-open"),w.querySelectorAll(".tk-row.active").forEach(e=>e.classList.remove("active")),F()}async function P(e,s=!1){M=e,w.querySelectorAll(".tk-row").forEach(i=>i.classList.toggle("active",Number(i.dataset.tk)===e)),document.body.classList.add("tk-open");const a=w.querySelector("#tk-detail");a&&!s&&(a.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade Ticket #{n} …",{n:e})}</p>`);try{const i=await je(e);if(M!==e)return;L.delete(e)&&(G([e]).catch(()=>{}),O(),fe()),S={ticket:i.ticket,conversations:i.conversations},F()}catch(i){a&&(a.innerHTML=`<div class="tk-dhead"><button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button></div><div class="error tk-pad">${n(i.message)}</div>`)}}function Qe(e){return/^image\//.test(e.type)?`<a class="tk-img" href="${n(e.url)}" title="${n(e.name)}"><img src="${n(e.url)}" alt="${n(e.name)}" loading="lazy" /></a>`:`<a class="file-chip" href="${n(e.url)}">📎 ${n(e.name)} <span class="hint">${Math.max(1,Math.round(e.size/1024))} KB</span></a>`}function X(e){return`<div class="tk-msg${e.mine?" mine":""}${e.private?" note":""}">
      <span class="tk-av sm" aria-hidden="true">${n(ve(e.author))}</span>
      <div class="tk-bubble">
        <div class="tk-mhead"><b>${n(e.author)}</b>${e.private?` <span class="tk-note-tag">🔒 ${t("Interne Notiz")}</span>`:""}<span class="hint">${n(ue(new Date(e.createdAt)))}</span></div>
        <div class="tk-mbody">${ze(e.html)}</div>
        ${e.attachments.length?`<div class="tk-files">${e.attachments.map(Qe).join("")}</div>`:""}
      </div>
    </div>`}function ge(e,s){var a,i,r;return e.incoming||e.userId===s.requesterId?e.userId===s.requesterId?((a=s.requester)==null?void 0:a.name)??(c==null?void 0:c.name)??"":e.fromEmail??t("Kollege"):((r=(i=u==null?void 0:u.agents)==null?void 0:i.find(o=>o.id===e.userId))==null?void 0:r.name)??t("IT-Support")}const ye=(e,s)=>g?!e.incoming&&e.userId===(u==null?void 0:u.myAgentId):e.incoming||e.userId===s.requesterId,_e=(e,s)=>X({...e,author:ge(e,s),mine:ye(e,s)});function F(){var T,p;const e=w.querySelector("#tk-detail");if(!e)return;if(!S){e.innerHTML=`<div class="pane-empty"><div>🎫</div><p>${t("Ticket links auswählen.")}</p></div>`;return}const s=S.ticket,a=((T=s.requester)==null?void 0:T.name)??(c==null?void 0:c.name)??"",i=d=>ge(d,s),r=d=>ye(d,s),o=(d,b,y,E)=>`<select class="tk-sel" data-field="${d}">${E!==void 0?`<option value="">${n(E)}</option>`:""}${y.map(q=>`<option value="${q.id}"${q.id===b?" selected":""}>${n(q.name)}</option>`).join("")}</select>`,v=g?`<div class="tk-props">
        <label>${t("Status")}${o("status",s.status,(u==null?void 0:u.statuses)??[])}</label>
        <label>${t("Priorität")}${o("priority",s.priority,[1,2,3,4].map(d=>({id:d,name:V(d)})))}</label>
        <label>${t("Zuständig")}${o("responderId",s.responderId,(u==null?void 0:u.agents)??[],t("Nicht zugewiesen"))}</label>
        <label>${t("Gruppe")}${o("groupId",s.groupId,(u==null?void 0:u.groups)??[],"–")}</label>
        ${s.responderId!==(u==null?void 0:u.myAgentId)&&(u!=null&&u.myAgentId)?`<button type="button" class="small" data-take>🙋 ${t("Übernehmen")}</button>`:""}
      </div>`:`<div class="tk-props ro">
        <span class="tk-st ${ee(s.status)}">${n(B(s.status))}</span>
        <span class="tk-prio ${(p=_[s.priority])==null?void 0:p[1]}">${t("Priorität")}: ${n(V(s.priority))}</span>
        <span class="hint">${t("Erstellt")}: ${n(ue(new Date(s.createdAt)))}</span>
      </div>`,$={html:s.descriptionHtml??"",createdAt:s.createdAt,attachments:s.attachments,author:a,mine:!g};e.innerHTML=`
    <div class="tk-dhead">
      <button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button>
      <div class="tk-dtitle"><span class="tk-num">#${s.id}</span> ${n(s.subject)}</div>
      <button type="button" class="icon-btn" data-act="web" title="${n(t("Im Browser öffnen"))}">↗</button>
    </div>
    ${v}
    ${g&&s.requester?`<div class="tk-req hint">${t("Von")}: <b>${n(s.requester.name)}</b> &lt;${n(s.requester.email)}&gt;</div>`:""}
    <div class="tk-thread" id="tk-thread">
      ${X($)}
      ${S.conversations.map(d=>X({...d,author:i(d),mine:r(d)})).join("")}
    </div>
    ${et(s)}`,tt(e,s);const m=e.querySelector("#tk-thread");setTimeout(()=>{var d;return(d=m==null?void 0:m.lastElementChild)==null?void 0:d.scrollIntoView({block:"end"})},0)}function et(e){const s=e.status>=4;return`<form class="tk-composer" id="tk-composer">
      ${g?`<div class="tk-kind view-seg" role="tablist">
        <button type="button" class="active" data-kind="reply">💬 ${t("Antwort an Anfragenden")}</button>
        <button type="button" data-kind="note">🔒 ${t("Interne Notiz")}</button></div>`:""}
      ${s&&!g?`<p class="hint">${t("Das Ticket ist erledigt. Mit einer Nachricht wird es wieder geöffnet.")}</p>`:""}
      <div class="tk-files-sel" hidden></div>
      <div class="tk-cbar">
        <label class="icon-btn tk-attach" title="${n(t("Datei anhängen"))}">📎<input type="file" multiple hidden /></label>
        <textarea rows="2" spellcheck="true" lang="${de()}" placeholder="${n(g?t("Antwort schreiben …"):t("Nachricht an die IT …"))}"></textarea>
        <button type="submit" class="primary tk-send" title="${n(t("Senden (Strg+Enter)"))}">➤</button>
      </div>
    </form>`}function tt(e,s){var T;let a="reply",i=[];const r=e.querySelector("#tk-composer"),o=r.querySelector("textarea"),v=r.querySelector(".tk-files-sel"),$=()=>{v.hidden=!i.length,v.innerHTML=i.map((p,d)=>`<span class="file-chip">📎 ${n(p.name)} <button type="button" class="link small" data-rm="${d}">✕</button></span>`).join("")};r.addEventListener("click",p=>{var E,q;const d=p.target,b=(E=d.closest("[data-kind]"))==null?void 0:E.dataset.kind;b&&(a=b,r.querySelectorAll("[data-kind]").forEach(R=>R.classList.toggle("active",R.dataset.kind===b)),r.classList.toggle("is-note",b==="note"),o.placeholder=b==="note"?t("Interne Notiz (nur für die IT sichtbar) …"):t("Antwort schreiben …"));const y=(q=d.closest("[data-rm]"))==null?void 0:q.dataset.rm;y!==void 0&&(i.splice(Number(y),1),$())}),r.querySelector("input[type=file]").addEventListener("change",p=>{const d=p.target;i.push(...Array.from(d.files??[])),d.value="",$()}),o.addEventListener("input",()=>{o.style.height="auto",o.style.height=`${Math.min(220,o.scrollHeight)}px`}),o.addEventListener("keydown",p=>{p.key==="Enter"&&(p.ctrlKey||p.metaKey)&&(p.preventDefault(),r.requestSubmit())}),o.addEventListener("focus",()=>setTimeout(()=>{var p,d;return(d=(p=e.querySelector("#tk-thread"))==null?void 0:p.lastElementChild)==null?void 0:d.scrollIntoView({block:"end"})},300)),r.addEventListener("submit",async p=>{p.preventDefault();const d=o.value.trim();if(!d&&!i.length)return;const b=r.querySelector(".tk-send");b.disabled=!0;try{const y=d.split(/\n{2,}/).map(q=>`<p>${n(q).replace(/\n/g,"<br>")}</p>`).join(""),E=await pe(s.id,a,y,i);S==null||S.conversations.push(E.conversation),o.value="",i=[],D(a==="note"?t("Notiz gespeichert."):t("Gesendet.")),P(s.id,!0),C()}catch(y){D(`${t("Nicht gesendet")}: ${y.message}`,!0)}finally{b.disabled=!1}});const m=async(p,d)=>{try{const b=await Pe(s.id,p);S&&(S.ticket={...S.ticket,...b.ticket}),K=K.map(y=>y.id===s.id?{...y,...b.ticket}:y),O(),F(),D(d)}catch(b){D(`${t("Nicht gespeichert")}: ${b.message}`,!0),F()}};e.querySelectorAll(".tk-sel").forEach(p=>p.addEventListener("change",async()=>{const d=p.dataset.field,b=p.value===""?null:Number(p.value);if(d==="status"&&b!==null&&b>=4&&!await Ce(`${t("Ticket #{n} auf „{s}“ setzen?",{n:s.id,s:n(B(b))})}`)){p.value=String(s.status);return}m({[d]:b},t("Gespeichert."))})),(T=e.querySelector("[data-take]"))==null||T.addEventListener("click",()=>void m({responderId:(u==null?void 0:u.myAgentId)??null},t("Ticket übernommen.")))}function we(){var s;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    ${g?`<label>${t("Für (E-Mail des Kollegen, leer = ich)")}<input type="email" name="email" placeholder="${n(c==null?void 0:c.email)}" /></label>`:""}
    <label>${t("Betreff")}<input name="subject" required maxlength="250" placeholder="${n(t("z. B. Drucker im 2. OG druckt nicht"))}" /></label>
    <label>${t("Beschreibung")}<textarea name="description" rows="6" spellcheck="true" lang="${de()}" placeholder="${n(t("Was ist passiert? Seit wann? Fehlermeldung?"))}"></textarea></label>
    <div class="tk-row2">
      <label>${t("Priorität")}<select name="priority">${[1,2,3,4].map(a=>`<option value="${a}"${a===2?" selected":""}>${n(V(a))}</option>`).join("")}</select></label>
      ${g&&((s=u==null?void 0:u.groups)!=null&&s.length)?`<label>${t("Gruppe")}<select name="groupId"><option value="">–</option>${u.groups.map(a=>`<option value="${a.id}">${n(a.name)}</option>`).join("")}</select></label>`:""}
    </div>
    <label class="tk-attach-new">📎 ${t("Dateien / Screenshots anhängen")}<input type="file" name="files" multiple /></label>
    <div class="tk-actions"><button type="submit" class="primary">${t("Ticket senden")}</button></div>`,Y(`🎫 ${t("Neues IT-Ticket")}`,[e]),setTimeout(()=>{var a;return(a=e.querySelector("[name=subject]"))==null?void 0:a.focus()},50),e.addEventListener("submit",async a=>{var o;a.preventDefault();const i=new FormData(e),r=e.querySelector("[type=submit]");r.disabled=!0,r.textContent=t("Wird gesendet …");try{const v=await Ke({subject:String(i.get("subject")??""),description:n(String(i.get("description")??"")).replace(/\n/g,"<br>"),priority:Number(i.get("priority"))||2,email:String(i.get("email")??"")||void 0,groupId:Number(i.get("groupId"))||void 0},i.getAll("files").filter($=>$.size));(o=document.querySelector(".m-sheet [data-close]"))==null||o.click(),D(t("Ticket #{n} erstellt.",{n:v.ticket.id})),await C(),P(v.ticket.id)}catch(v){D(`${t("Nicht gesendet")}: ${v.message}`,!0),r.disabled=!1,r.textContent=t("Ticket senden")}})}function Se(){var a;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    <p>${t("So finden Sie Ihren Schlüssel:")}</p>
    <ol class="tk-steps">
      <li>${t("Freshdesk öffnen und anmelden")}: <a href="https://${n(c==null?void 0:c.domain)}/a/profile/settings">${n(c==null?void 0:c.domain)}</a></li>
      <li>${t("Oben rechts auf Ihr Bild → „Profileinstellungen“")}</li>
      <li>${t("Rechts „API-Schlüssel anzeigen“ → kopieren")}</li>
    </ol>
    <label>${t("Persönlicher API-Schlüssel")}<input name="key" autocomplete="off" spellcheck="false" required /></label>
    <p class="hint">${t("Der Schlüssel wird nur verschlüsselt im MyMonolith-Dienst gespeichert und nie angezeigt. Er wird gegen Ihre E-Mail geprüft.")}</p>
    <div class="tk-actions">
      ${c!=null&&c.agentKeySet?`<button type="button" class="small" data-remove>${t("Schlüssel entfernen")}</button>`:""}
      <button type="submit" class="primary">${t("Speichern")}</button>
    </div>`,Y(`🔑 ${t("Freshdesk-Schlüssel")}`,[e]);const s=async i=>{var r;try{const o=await Be(i);(r=document.querySelector(".m-sheet [data-close]"))==null||r.click(),D(o.agentKeySet?t("Schlüssel gespeichert – Sie sehen jetzt alle Tickets."):t("Schlüssel entfernt.")),te()}catch(o){D(o.message,!0)}};e.addEventListener("submit",i=>{i.preventDefault(),s(String(new FormData(e).get("key")??"").trim())}),(a=e.querySelector("[data-remove]"))==null||a.addEventListener("click",()=>void s(""))}function st(){const e=document.createElement("div");e.className="tk-menu",e.innerHTML=`
    ${(c==null?void 0:c.access)==="agent"?`<button type="button" class="menu-item" data-m="key"><span class="mi-icon">🔑</span><span class="mi-label">${c.agentKeySet?t("Freshdesk-Schlüssel ändern"):t("Freshdesk-Schlüssel hinterlegen")}</span></button>`:""}
    <button type="button" class="menu-item" data-m="web"><span class="mi-icon">↗</span><span class="mi-label">${t("Freshdesk im Browser öffnen")}</span></button>
    <div class="tk-lang">${qe()}</div>`,Y(t("Mehr"),[e]),e.addEventListener("click",s=>{var o,v,$;const a=s.target,i=(o=a.closest("[data-m]"))==null?void 0:o.dataset.m,r=(v=a.closest("[data-lang]"))==null?void 0:v.dataset.lang;if(r)return Me(r);i&&(($=document.querySelector(".m-sheet [data-close]"))==null||$.click(),i==="key"&&Se(),i==="web"&&J(`https://${c==null?void 0:c.domain}/${g?"a/tickets":"support/tickets"}`))})}const Te=()=>document.body.classList.toggle("phone",Fe());Te();var ce,oe;(oe=(ce=matchMedia("(max-width: 600px)")).addEventListener)==null||oe.call(ce,"change",Te);setInterval(()=>{document.visibilityState==="visible"&&c&&c.access!=="none"&&C()},6e4);{const e=document.getElementById("version");e&&(e.textContent=`${t("Monolith IT-Tickets")} 1.9.0`)}te();
