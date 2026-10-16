import{t,b as D,l as F,a as qe,d as Ae,c as Ee}from"./i18n-BbqtDcfB.js";import{a as Ne,w as ze}from"./theme-BRhx6iFI.js";import{b as n,o as X,L as pe,J as He}from"./util-u3XmllbH.js";import{G as W,H as he,I as be,J as De,K as Be,L as Ce,t as N,c as je,n as Z,M as Ke,N as Pe,O as Fe,P as Oe,Q as Re,i as Ue,R as Ge,k as me,S as We,E as Ve,T as oe,U as Ze}from"./ticketswitch-C5YEq-vE.js";import{o as xe}from"./wizard-fEIkMbYN.js";import"./preload-helper-DmqPR1C2.js";function Je(e){const{root:s,close:a}=xe(t("Aufholen"));s.classList.add("cu-panel","tk-cu");let i=[],r=0,c=0,d=0,p=!1,b="",T="",m="",u="reply",$="loading";const y=()=>{a(),document.removeEventListener("keydown",le),e.onClose(p)};async function A(){try{i=(await be(!0)).items}catch(l){T=l.message}$=i.length?"card":"done",z()}function M(){const l=i.length-r;return`<header class="wz-head cu-head">
        <button class="wz-close" data-close title="${n(t("Schließen"))}" aria-label="${n(t("Schließen"))}">✕</button>
        <span class="wz-title">☕ ${n($==="card"?D(l,"{n} verbleibend|{n} verbleibend"):t("Aufholen"))}</span>
      </header>
      <div class="cu-progress"><span style="width:${i.length?r/i.length*100:100}%"></span></div>`}function U(l){const k=l.conversations.length-l.newCount,v=l.conversations.slice(0,k),g=l.conversations.slice(k);return`<article class="cu-card" data-card>
        <div class="cu-swipe cu-swipe-read">✓ ${n(t("Gelesen"))}</div>
        <div class="cu-swipe cu-swipe-later">${n(t("Später"))}</div>
        <div class="cu-task">
          <div class="cu-task-title">${n(l.ticket.subject)}</div>
          <div class="cu-task-meta"><span class="num">#${l.ticket.id}</span>
            ${e.statusBadge(l.ticket)}
            ${e.asAgent&&l.ticket.requester?`<span class="hint">${n(l.ticket.requester.name)}</span>`:""}
            <span class="badge unread">${n(D(l.newCount,"{n} neu|{n} neu"))}</span></div>
        </div>
        <div class="thread cu-thread tk-thread">
          ${v.map(L=>`<div class="cu-item">${e.bubble(L,l.ticket)}</div>`).join("")}
          ${v.length?`<div class="cu-divider"><span>${n(t("Zuletzt gelesen"))}</span></div>`:""}
          ${g.map(L=>`<div class="cu-item cu-new">${e.bubble(L,l.ticket)}</div>`).join("")}
        </div>
      </article>`}function Le(){const l=i[r],k=e.asAgent&&!l.ownRequest;return`<footer class="wz-foot cu-foot">
        <div class="cu-compose">
          ${k?`<div class="tk-kind view-seg" role="tablist">
            <button type="button" class="${u==="reply"?"active":""}" data-kind="reply">💬 ${t("Antwort an Anfragenden")}</button>
            <button type="button" class="${u==="note"?"active":""}" data-kind="note">🔒 ${t("Interne Notiz")}</button></div>`:""}
          <div class="cu-compose-row">
            <textarea id="cu-text" rows="1" spellcheck="true" placeholder="${n(k?u==="note"?t("Interne Notiz (nur für die IT sichtbar) …"):t("Antwort schreiben …"):t("Nachricht an die IT …"))}">${n(m)}</textarea>
            <button type="button" class="primary cu-send" data-send${m.trim()&&!b?"":" disabled"} title="${n(t("Senden (Strg+Enter)"))}">➤</button>
          </div>
        </div>
        <div class="cu-actions">
          <button type="button" class="cu-later" data-later${b?" disabled":""}>${n(t("Ungelesen lassen"))}</button>
          <button type="button" class="cu-open" data-open${b?" disabled":""} title="${n(t("Ticket öffnen"))}">↗<span class="lbl"> ${n(t("Öffnen"))}</span></button>
          <button type="button" class="primary cu-read" data-read${b?" disabled":""}>✓ ${n(t("Als gelesen"))}</button>
        </div>
      </footer>`}function z(){var k;let l;$==="loading"?l=`<div class="wz-empty"><div class="wz-spinner"></div><p class="hint">${n(t("Neue Nachrichten werden geladen …"))}</p></div>`:$==="done"?l=`<div class="wz-empty cu-done">
          <div class="cu-done-icon">✓</div>
          <h2>${n(t("Alles durchgesehen"))}</h2>
          <p class="hint">${n(i.length?t("Sie haben alle neuen Nachrichten durchgesehen."):t("Keine neuen Nachrichten – alles gelesen."))}</p>
          ${i.length?`<p class="hint">${n(D(c,"{n} als gelesen|{n} als gelesen"))} · ${n(D(d,"{n} für später|{n} für später"))}</p>`:""}
          <button type="button" class="primary" data-close>${n(t("Zurück zur Liste"))}</button>
        </div>`:l=U(i[r]),s.innerHTML=`${M()}
      ${T?`<div class="error wz-error">${n(T)}</div>`:""}
      ${b?'<div class="wz-loading-line"></div>':""}
      <div class="wz-body cu-body">${l}</div>
      ${$==="card"?Le():""}`,$==="card"&&((k=s.querySelector(".cu-divider")??s.querySelector(".cu-new"))==null||k.scrollIntoView({block:"start"}),Me(),ne())}const ne=()=>{const l=s.querySelector("#cu-text");l&&(l.style.height="auto",l.style.height=`${Math.min(l.scrollHeight,140)}px`)};function G(l,k=!0){l==="read"?c++:d++,m="",T="",u="reply";const v=()=>{r++,$=r>=i.length?"done":"card",z()},g=s.querySelector("[data-card]");k&&g?(g.classList.add(l==="read"?"fly-right":"fly-left"),setTimeout(v,180)):v()}async function ae(l=!0){b="…",z();try{await W([i[r].ticket.id]),p=!0,b="",G("read",l)}catch(k){b="",T=k.message,z()}}async function ie(){const l=m.trim();if(!l||b)return;const k=i[r];b=t("Wird gesendet …"),z();try{const v=l.split(/\n{2,}/).map(g=>`<p>${n(g).replace(/\n/g,"<br>")}</p>`).join("");await he(k.ticket.id,e.asAgent&&!k.ownRequest?u:"reply",v),await W([k.ticket.id]).catch(()=>{}),p=!0,b="",G("read")}catch(v){b="",T=v.message,z()}}function Me(){const l=s.querySelector("[data-card]");if(!l)return;let k=0,v=0,g=0,L=!1,E=null;l.addEventListener("pointerdown",H=>{H.pointerType==="mouse"||H.target.closest("a, button, textarea, input")||(k=H.clientX,v=H.clientY,g=0,L=!0,E=null)}),l.addEventListener("pointermove",H=>{if(!L)return;const x=H.clientX-k,ce=H.clientY-v;E===null&&Math.abs(x)+Math.abs(ce)>10&&(E=Math.abs(x)>Math.abs(ce)*1.3,E&&l.setPointerCapture(H.pointerId)),E&&(g=x,l.style.transform=`translateX(${g}px) rotate(${g/40}deg)`,l.style.setProperty("--read",String(Math.max(0,Math.min(1,g/110)))),l.style.setProperty("--later",String(Math.max(0,Math.min(1,-g/110)))))});const re=()=>{if(L){if(L=!1,E&&g>110)return void ae();if(E&&g<-110)return G("later");l.style.transition="transform 0.18s ease",l.style.transform="",l.style.setProperty("--read","0"),l.style.setProperty("--later","0"),setTimeout(()=>l.style.transition="",200)}};l.addEventListener("pointerup",re),l.addEventListener("pointercancel",re)}s.addEventListener("click",l=>{var g,L;const k=l.target;if(k.closest("[data-close]"))return y();if(k.closest("[data-read]"))return void ae();if(k.closest("[data-later]"))return G("later");if(k.closest("[data-send]"))return void ie();if(k.closest("[data-open]")){const E=i[r].ticket.id;return p=!0,y(),e.open(E)}const v=(g=k.closest("[data-kind]"))==null?void 0:g.dataset.kind;v&&(u=v,z(),(L=s.querySelector("#cu-text"))==null||L.focus())}),s.addEventListener("input",l=>{var v;const k=l.target;k.id==="cu-text"&&(m=k.value,(v=s.querySelector("[data-send]"))==null||v.toggleAttribute("disabled",!m.trim()||!!b),ne())});const le=l=>{var v;((v=l.target)==null?void 0:v.id)==="cu-text"&&l.key==="Enter"&&(l.ctrlKey||l.metaKey)?(l.preventDefault(),ie()):l.key==="Escape"&&y()};document.addEventListener("keydown",le),z(),A()}Ne();ze();const w=document.getElementById("app"),_=new URLSearchParams(location.search).get("from")??"",ke="mm-tk-view";let o=null,h=null,f=!1,B="open",j=[],Q="",q=null,S=null,J=!1;const ee={1:["Niedrig","p1"],2:["Mittel","p2"],3:["Hoch","p3"],4:["Dringend","p4"]},V=e=>{var s;return t(((s=ee[e])==null?void 0:s[0])??"–")},K=e=>{var s;return((s=h==null?void 0:h.statuses.find(a=>a.id===e))==null?void 0:s.name)??String(e)},te=e=>e===2?"st-open":e===3?"st-wait":e>=4?"st-done":"st-other",Xe=e=>{var s,a;return e?((a=(s=h==null?void 0:h.agents)==null?void 0:s.find(i=>i.id===e))==null?void 0:a.name)??`#${e}`:t("Nicht zugewiesen")},$e=e=>e.split(/[\s.@]+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?";function Ye(e){const s=new Date(e),a=Math.round((Date.now()-s.getTime())/6e4);return a<1?t("gerade eben"):a<60?t("vor {n} Min.",{n:a}):a<1440?t("vor {n} Std.",{n:Math.round(a/60)}):a<10080?D(Math.round(a/1440),"vor {n} Tag|vor {n} Tagen"):s.toLocaleDateString(Ee(),{day:"2-digit",month:"2-digit",year:"2-digit"})}async function se(e=!1){var i;w.innerHTML=`<div class="tk-center"><p class="hint">⏳ ${t("IT-Tickets werden geladen …")}</p></div>`;try{o=await Ge(e)}catch(r){const c=r.status;w.innerHTML=`<div class="tk-center">
      <h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${c===401||!c?t("Bitte mit Ihrem Microsoft-Konto anmelden."):n(r.message)}</p>
      <button type="button" class="primary" id="tk-login">${t("Anmelden")}</button>
    </div>`,(i=w.querySelector("#tk-login"))==null||i.addEventListener("click",()=>void se(!0));return}if(o.access==="none"){w.innerHTML=`<div class="tk-center">
      ${_?`<p>${me("tickets")}</p>`:""}<h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${t("Für {email} ist das IT-Ticketsystem nicht freigeschaltet.",{email:`<b>${n(o.email)}</b>`})}</p>
      <p class="hint">${t("Freigeschaltet ist, wer im Ticketsystem als Kontakt oder IT-Mitarbeiter eingetragen ist. Bitte bei der IT melden.")}</p>
    </div>`;return}f=o.access==="agent"&&o.agentKeySet;try{B=localStorage.getItem(ke)||"open"}catch{}ve().some(r=>r.id===B)||(B="open"),h=await We().catch(()=>({statuses:[],priorities:[1,2,3,4]})),_e();const s=new URLSearchParams(location.search),a=Number(s.get("ticket"));await C(),a?P(a):s.get("new")==="1"&&Se()}function ve(){return f?[{id:"open",label:t("Offen")},{id:"mine",label:t("Meine")},{id:"unassigned",label:t("Nicht zugewiesen")},{id:"resolved",label:t("Erledigt")},{id:"mine-requests",label:t("Eigene Anfragen")}]:[{id:"open",label:t("Offen")},{id:"all",label:t("Alle")}]}function _e(){const e=(o==null?void 0:o.access)==="agent"&&!o.agentKeySet?`<div class="tk-banner">🔑 ${t("Sie sind IT-Mitarbeiter. Hinterlegen Sie einmal Ihren persönlichen Freshdesk-Schlüssel, um alle Tickets zu bearbeiten.")}
          <button type="button" class="small primary" data-act="key">${t("Schlüssel hinterlegen")}</button></div>`:"";w.innerHTML=`
    <div class="split-shell tk-shell">
      <div id="split-head" class="split-head">
        <div class="tk-head">
          <div class="hdr-top">
            ${_?`<span class="hdr-area">${me("tickets")}</span>`:`<strong class="hdr-title">🎫 ${t("IT-Tickets")}</strong>`}
            <input id="search" type="search" class="tk-search" placeholder="🔎 ${n(t("Suchen: Betreff, Nr., Name …"))}" value="${n(Q)}" />
            <div class="hdr-views">
              <span class="seg view-seg tk-views" role="tablist" aria-label="${n(t("Ansicht"))}">${ve().map(s=>`<button type="button" class="seg-btn${s.id===B?" active":""}" data-view="${s.id}" aria-pressed="${s.id===B}">${n(s.label)}</button>`).join("")}</span>
            </div>
            <span class="tk-who" title="${n(o==null?void 0:o.email)}">${n(o==null?void 0:o.name)}${f?` <span class="tk-role">${t("IT")}</span>`:""}</span>
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
    </div>`,Ve(w.querySelector(".split"),"mm-tk-split"),O()}w.addEventListener("click",e=>{var d,p;const s=e.target,a=(d=s.closest("[data-act]"))==null?void 0:d.dataset.act;a==="refresh"?(C(),q&&P(q,!0)):a==="new"?Se():a==="catchup"?Qe():a==="key"?Te():a==="menu"?ct():a==="back"&&tt(),s.closest('[data-area="tasks"]')?location.href=De(_):a==="web"&&S&&X(S.ticket.url);const i=(p=s.closest("[data-view]"))==null?void 0:p.dataset.view;if(i&&i!==B){B=i;try{localStorage.setItem(ke,i)}catch{}w.querySelectorAll("[data-view]").forEach(b=>{b.classList.toggle("active",b.dataset.view===i),b.setAttribute("aria-selected",String(b.dataset.view===i))}),C()}const r=s.closest("[data-tk]");r&&P(Number(r.dataset.tk));const c=s.closest("a[href]");c&&/^https?:/i.test(c.getAttribute("href")??"")&&(e.preventDefault(),X(c.href))});w.addEventListener("input",e=>{const s=e.target;s.classList.contains("tk-search")&&(Q=s.value,R())});let I=new Map;async function ge(e=!1){try{const s=await be(e);I=new Map(s.items.map(a=>[a.ticket.id,a.newCount])),q&&I.has(q)&&(I.delete(q),W([q]).catch(()=>{}))}catch{return}R(),fe()}function fe(){const e=w.querySelector("#tk-catchup");e&&(e.hidden=!I.size,e.querySelector(".cu-count").textContent=String(I.size))}function Qe(){Je({asAgent:f,bubble:nt,statusBadge:e=>`<span class="tk-st ${te(e.status)}">${n(K(e.status))}</span>`,open:e=>void P(e),onClose:e=>{e&&(C(),ge(!0))}})}async function C(){if(J)return;J=!0;const e=w.querySelector("#tk-list");e&&!j.length&&(e.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade …")}</p>`);try{j=(await Be(B)).tickets.sort((a,i)=>i.updatedAt.localeCompare(a.updatedAt)),R(),ge()}catch(s){e&&(e.innerHTML=`<div class="error tk-pad">${n(s.message)}</div>`)}finally{J=!1}}function R(){const e=w.querySelector("#tk-list");if(!e)return;const s=Q.trim().toLowerCase(),a=s?j.filter(r=>{var c,d;return`#${r.id} ${r.id} ${r.subject} ${((c=r.requester)==null?void 0:c.name)??""} ${((d=r.requester)==null?void 0:d.email)??""} ${K(r.status)}`.toLowerCase().includes(s)}):j;if(!a.length){e.innerHTML=`<div class="tk-empty"><div class="tk-empty-ico">🎉</div><p>${s?t("Keine Treffer."):t("Keine Tickets in dieser Ansicht.")}</p>
      ${f?"":`<button type="button" class="primary" data-act="new">＋ ${t("Neues Ticket")}</button>`}</div>`;return}const i=I.size?`<div class="catchup-bar"><span class="catchup-bar-icon">☕</span><span class="grow">${D(I.size,"<b>{n}</b> Ticket mit neuen Nachrichten|<b>{n}</b> Tickets mit neuen Nachrichten")}</span>
        <button type="button" class="primary small" data-act="catchup">${t("Jetzt aufholen")} →</button></div>`:"";e.innerHTML=`${i}<div class="tk-count hint">${D(a.length,"{n} Ticket|{n} Tickets")}</div>${a.map(et).join("")}`}function et(e){var c,d,p,b;const s=e.dueBy&&e.status<4&&new Date(e.dueBy).getTime()<Date.now(),a=f?((c=e.requester)==null?void 0:c.name)??((d=e.requester)==null?void 0:d.email)??"":K(e.status),i=I.has(e.id);return`<button type="button" class="tk-row${e.status>=4?"":s||e.priority>=4?" b-urgent":e.status===3?" b-wait":" b-open"}${i?" is-new":""}${e.id===q?" active":""}" data-tk="${e.id}">
      <span class="tk-av" aria-hidden="true">${n($e(((p=e.requester)==null?void 0:p.name)??(o==null?void 0:o.name)??"?"))}</span>
      <span class="tk-row-main">
        <span class="tk-row-top"><span class="tk-num">#${e.id}</span><span class="tk-subj">${n(e.subject)}</span></span>
        <span class="tk-row-sub">
          <span class="tk-st ${te(e.status)}">${n(K(e.status))}</span>
          ${e.priority>=3?`<span class="tk-prio ${(b=ee[e.priority])==null?void 0:b[1]}">${n(V(e.priority))}</span>`:""}
          ${s?`<span class="tk-prio p4">${t("überfällig")}</span>`:""}
          ${f?`<span class="tk-meta">${n(a)}${e.responderId?` → ${n(Xe(e.responderId))}`:""}</span>`:""}
        </span>
      </span>
      <span class="tk-when">${n(Ye(e.updatedAt))}${I.get(e.id)?`<span class="unread-dot" title="${n(D(I.get(e.id),"{n} ungelesene Nachricht|{n} ungelesene Nachrichten"))}">${I.get(e.id)}</span>`:""}</span>
    </button>`}function tt(){q=null,S=null,document.body.classList.remove("tk-open"),w.querySelectorAll(".tk-row.active").forEach(e=>e.classList.remove("active")),O()}async function P(e,s=!1){q=e,w.querySelectorAll(".tk-row").forEach(i=>i.classList.toggle("active",Number(i.dataset.tk)===e)),document.body.classList.add("tk-open");const a=w.querySelector("#tk-detail");a&&!s&&(a.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade Ticket #{n} …",{n:e})}</p>`);try{const i=await Ce(e);if(q!==e)return;I.delete(e)&&(W([e]).catch(()=>{}),R(),fe()),S={ticket:i.ticket,conversations:i.conversations},O()}catch(i){a&&(a.innerHTML=`<div class="tk-dhead"><button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button></div><div class="error tk-pad">${n(i.message)}</div>`)}}function st(e){return/^image\//.test(e.type)?`<a class="tk-img" href="${n(e.url)}" title="${n(e.name)}"><img src="${n(e.url)}" alt="${n(e.name)}" loading="lazy" /></a>`:`<a class="file-chip" href="${n(e.url)}">📎 ${n(e.name)} <span class="hint">${Math.max(1,Math.round(e.size/1024))} KB</span></a>`}function Y(e){return`<div class="tk-msg${e.mine?" mine":""}${e.private?" note":""}">
      <span class="tk-av sm" aria-hidden="true">${n($e(e.author))}</span>
      <div class="tk-bubble">
        <div class="tk-mhead"><b>${n(e.author)}</b>${e.private?` <span class="tk-note-tag">🔒 ${t("Interne Notiz")}</span>`:""}<span class="hint">${n(pe(new Date(e.createdAt)))}</span></div>
        <div class="tk-mbody">${He(e.html)}</div>
        ${e.attachments.length?`<div class="tk-files">${e.attachments.map(st).join("")}</div>`:""}
      </div>
    </div>`}function ye(e,s){var a,i,r;return e.incoming||e.userId===s.requesterId?e.userId===s.requesterId?((a=s.requester)==null?void 0:a.name)??(o==null?void 0:o.name)??"":e.fromEmail??t("Kollege"):((r=(i=h==null?void 0:h.agents)==null?void 0:i.find(c=>c.id===e.userId))==null?void 0:r.name)??t("IT-Support")}const we=(e,s)=>f?!e.incoming&&e.userId===(h==null?void 0:h.myAgentId):e.incoming||e.userId===s.requesterId,nt=(e,s)=>Y({...e,author:ye(e,s),mine:we(e,s)});function O(){var T,m;const e=w.querySelector("#tk-detail");if(!e)return;if(!S){e.innerHTML=`<div class="pane-empty"><div>🎫</div><p>${t("Ticket links auswählen.")}</p></div>`;return}const s=S.ticket,a=((T=s.requester)==null?void 0:T.name)??(o==null?void 0:o.name)??"",i=u=>ye(u,s),r=u=>we(u,s),c=(u,$,y,A)=>`<select class="tk-sel" data-field="${u}">${A!==void 0?`<option value="">${n(A)}</option>`:""}${y.map(M=>`<option value="${M.id}"${M.id===$?" selected":""}>${n(M.name)}</option>`).join("")}</select>`,d=f?`<div class="tk-props">
        <label>${t("Status")}${c("status",s.status,(h==null?void 0:h.statuses)??[])}</label>
        <label>${t("Priorität")}${c("priority",s.priority,[1,2,3,4].map(u=>({id:u,name:V(u)})))}</label>
        <label>${t("Zuständig")}${c("responderId",s.responderId,(h==null?void 0:h.agents)??[],t("Nicht zugewiesen"))}</label>
        <label>${t("Gruppe")}${c("groupId",s.groupId,(h==null?void 0:h.groups)??[],"–")}</label>
        ${s.responderId!==(h==null?void 0:h.myAgentId)&&(h!=null&&h.myAgentId)?`<button type="button" class="small" data-take>🙋 ${t("Übernehmen")}</button>`:""}
      </div>`:`<div class="tk-props ro">
        <span class="tk-st ${te(s.status)}">${n(K(s.status))}</span>
        <span class="tk-prio ${(m=ee[s.priority])==null?void 0:m[1]}">${t("Priorität")}: ${n(V(s.priority))}</span>
        <span class="hint">${t("Erstellt")}: ${n(pe(new Date(s.createdAt)))}</span>
      </div>`,p={html:s.descriptionHtml??"",createdAt:s.createdAt,attachments:s.attachments,author:a,mine:!f};e.innerHTML=`
    <div class="tk-dhead">
      <button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button>
      <div class="tk-dtitle"><span class="tk-num">#${s.id}</span> ${n(s.subject)}</div>
      <button type="button" class="icon-btn" data-act="web" title="${n(t("Im Browser öffnen"))}">↗</button>
    </div>
    ${d}
    ${f&&s.requester?`<div class="tk-req hint">${t("Von")}: <b>${n(s.requester.name)}</b> &lt;${n(s.requester.email)}&gt;</div>`:""}
    <div class="tk-thread" id="tk-thread">
      ${Y(p)}
      ${S.conversations.map(u=>Y({...u,author:i(u),mine:r(u)})).join("")}
    </div>
    ${at(s)}`,it(e,s);const b=e.querySelector("#tk-thread");setTimeout(()=>{var u;return(u=b==null?void 0:b.lastElementChild)==null?void 0:u.scrollIntoView({block:"end"})},0)}function at(e){const s=e.status>=4;return`<form class="tk-composer" id="tk-composer">
      ${f?`<div class="tk-kind view-seg" role="tablist">
        <button type="button" class="active" data-kind="reply">💬 ${t("Antwort an Anfragenden")}</button>
        <button type="button" data-kind="note">🔒 ${t("Interne Notiz")}</button></div>`:""}
      ${s&&!f?`<p class="hint">${t("Das Ticket ist erledigt. Mit einer Nachricht wird es wieder geöffnet.")}</p>`:""}
      <div class="tk-files-sel" hidden></div>
      <div class="tk-cbar">
        <label class="icon-btn tk-attach" title="${n(t("Datei anhängen"))}">📎<input type="file" multiple hidden /></label>
        <textarea rows="2" spellcheck="true" lang="${F()}" placeholder="${n(f?t("Antwort schreiben …"):t("Nachricht an die IT …"))}"></textarea>
        <button type="submit" class="primary tk-send" title="${n(t("Senden (Strg+Enter)"))}">➤</button>
      </div>
    </form>`}function it(e,s){var T;let a="reply",i=[];const r=e.querySelector("#tk-composer"),c=r.querySelector("textarea"),d=r.querySelector(".tk-files-sel"),p=()=>{d.hidden=!i.length,d.innerHTML=i.map((m,u)=>`<span class="file-chip">📎 ${n(m.name)} <button type="button" class="link small" data-rm="${u}">✕</button></span>`).join("")};r.addEventListener("click",m=>{var A,M;const u=m.target,$=(A=u.closest("[data-kind]"))==null?void 0:A.dataset.kind;$&&(a=$,r.querySelectorAll("[data-kind]").forEach(U=>U.classList.toggle("active",U.dataset.kind===$)),r.classList.toggle("is-note",$==="note"),c.placeholder=$==="note"?t("Interne Notiz (nur für die IT sichtbar) …"):t("Antwort schreiben …"));const y=(M=u.closest("[data-rm]"))==null?void 0:M.dataset.rm;y!==void 0&&(i.splice(Number(y),1),p())}),r.querySelector("input[type=file]").addEventListener("change",m=>{const u=m.target;i.push(...Array.from(u.files??[])),u.value="",p()}),c.addEventListener("input",()=>{c.style.height="auto",c.style.height=`${Math.min(220,c.scrollHeight)}px`}),c.addEventListener("keydown",m=>{m.key==="Enter"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),r.requestSubmit())}),c.addEventListener("focus",()=>setTimeout(()=>{var m,u;return(u=(m=e.querySelector("#tk-thread"))==null?void 0:m.lastElementChild)==null?void 0:u.scrollIntoView({block:"end"})},300)),r.addEventListener("submit",async m=>{m.preventDefault();const u=c.value.trim();if(!u&&!i.length)return;const $=r.querySelector(".tk-send");$.disabled=!0;try{const y=u.split(/\n{2,}/).map(M=>`<p>${n(M).replace(/\n/g,"<br>")}</p>`).join(""),A=await he(s.id,a,y,i);S==null||S.conversations.push(A.conversation),c.value="",i=[],N(a==="note"?t("Notiz gespeichert."):t("Gesendet.")),P(s.id,!0),C()}catch(y){N(`${t("Nicht gesendet")}: ${y.message}`,!0)}finally{$.disabled=!1}});const b=async(m,u)=>{try{const $=await Fe(s.id,m);S&&(S.ticket={...S.ticket,...$.ticket}),j=j.map(y=>y.id===s.id?{...y,...$.ticket}:y),R(),O(),N(u)}catch($){N(`${t("Nicht gespeichert")}: ${$.message}`,!0),O()}};e.querySelectorAll(".tk-sel").forEach(m=>m.addEventListener("change",async()=>{const u=m.dataset.field,$=m.value===""?null:Number(m.value);if(u==="status"&&$!==null&&$>=4&&!await je(`${t("Ticket #{n} auf „{s}“ setzen?",{n:s.id,s:n(K($))})}`)){m.value=String(s.status);return}b({[u]:$},t("Gespeichert."))})),(T=e.querySelector("[data-take]"))==null||T.addEventListener("click",()=>void b({responderId:(h==null?void 0:h.myAgentId)??null},t("Ticket übernommen.")))}function Se(){var s;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    ${f?`<label>${t("Für (E-Mail des Kollegen, leer = ich)")}<input type="email" name="email" placeholder="${n(o==null?void 0:o.email)}" /></label>`:""}
    <label>${t("Betreff")}<input name="subject" required maxlength="250" placeholder="${n(t("z. B. Drucker im 2. OG druckt nicht"))}" /></label>
    <label>${t("Beschreibung")}<textarea name="description" rows="6" spellcheck="true" lang="${F()}" placeholder="${n(t("Was ist passiert? Seit wann? Fehlermeldung?"))}"></textarea></label>
    <div class="tk-row2">
      <label>${t("Priorität")}<select name="priority">${[1,2,3,4].map(a=>`<option value="${a}"${a===2?" selected":""}>${n(V(a))}</option>`).join("")}</select></label>
      ${f&&((s=h==null?void 0:h.groups)!=null&&s.length)?`<label>${t("Gruppe")}<select name="groupId"><option value="">–</option>${h.groups.map(a=>`<option value="${a.id}">${n(a.name)}</option>`).join("")}</select></label>`:""}
    </div>
    <label class="tk-attach-new">📎 ${t("Dateien / Screenshots anhängen")}<input type="file" name="files" multiple /></label>
    <div class="tk-actions"><button type="submit" class="primary">${t("Ticket senden")}</button></div>`,Z(`🎫 ${t("Neues IT-Ticket")}`,[e]),setTimeout(()=>{var a;return(a=e.querySelector("[name=subject]"))==null?void 0:a.focus()},50),e.addEventListener("submit",async a=>{var c;a.preventDefault();const i=new FormData(e),r=e.querySelector("[type=submit]");r.disabled=!0,r.textContent=t("Wird gesendet …");try{const d=await Ke({subject:String(i.get("subject")??""),description:n(String(i.get("description")??"")).replace(/\n/g,"<br>"),priority:Number(i.get("priority"))||2,email:String(i.get("email")??"")||void 0,groupId:Number(i.get("groupId"))||void 0},i.getAll("files").filter(p=>p.size));(c=document.querySelector(".m-sheet [data-close]"))==null||c.click(),N(t("Ticket #{n} erstellt.",{n:d.ticket.id})),await C(),P(d.ticket.id)}catch(d){N(`${t("Nicht gesendet")}: ${d.message}`,!0),r.disabled=!1,r.textContent=t("Ticket senden")}})}function Te(){var a;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    <p>${t("So finden Sie Ihren Schlüssel:")}</p>
    <ol class="tk-steps">
      <li>${t("Freshdesk öffnen und anmelden")}: <a href="https://${n(o==null?void 0:o.domain)}/a/profile/settings">${n(o==null?void 0:o.domain)}</a></li>
      <li>${t("Oben rechts auf Ihr Bild → „Profileinstellungen“")}</li>
      <li>${t("Rechts „API-Schlüssel anzeigen“ → kopieren")}</li>
    </ol>
    <label>${t("Persönlicher API-Schlüssel")}<input name="key" autocomplete="off" spellcheck="false" required /></label>
    <p class="hint">${t("Der Schlüssel wird nur verschlüsselt im MyMonolith-Dienst gespeichert und nie angezeigt. Er wird gegen Ihre E-Mail geprüft.")}</p>
    <div class="tk-actions">
      ${o!=null&&o.agentKeySet?`<button type="button" class="small" data-remove>${t("Schlüssel entfernen")}</button>`:""}
      <button type="submit" class="primary">${t("Speichern")}</button>
    </div>`,Z(`🔑 ${t("Freshdesk-Schlüssel")}`,[e]);const s=async i=>{var r;try{const c=await Pe(i);(r=document.querySelector(".m-sheet [data-close]"))==null||r.click(),N(c.agentKeySet?t("Schlüssel gespeichert – Sie sehen jetzt alle Tickets."):t("Schlüssel entfernt.")),se()}catch(c){N(c.message,!0)}};e.addEventListener("submit",i=>{i.preventDefault(),s(String(new FormData(e).get("key")??"").trim())}),(a=e.querySelector("[data-remove]"))==null||a.addEventListener("click",()=>void s(""))}const lt="d4d4de19-d722-4490-a22a-712b006220b0";function rt(){const e=document.createElement("div");e.className="tk-newform tk-bot",Z(`🔔 ${t("Teams-Benachrichtigungen")}`,[e]);let s=null,a=!1;const i=(d,p,b)=>`<label class="nb-sw"><input type="checkbox" data-tb-set="${d}"${s!=null&&s.settings[d]?" checked":""}${a?" disabled":""}><span class="nb-sw-main"><b>${n(p)}</b><span class="hint">${n(b)}</span></span></label>`,r=(d="")=>{if(!s){e.innerHTML=d?`<div class="error">${n(d)}</div>`:`<p class="hint">⏳ ${t("Lade …")}</p>`;return}e.innerHTML=`
      <p class="hint">${t("Neues zu Ihren IT-Tickets kommt als Nachricht vom Bot „MyMonolith Aufgaben“ in Teams – im selben Chat wie die Aufgaben, mit Zahl am Chat-Symbol und Push aufs Handy. Antworten geht direkt aus der Karte.")}</p>
      <label class="nb-sw tk-bot-main"><input type="checkbox" data-tb-on${s.on?" checked":""}${a?" disabled":""}><span class="nb-sw-main"><b>${t("IT-Tickets im Teams-Chat")}</b><span class="hint">${s.on?t("Eingeschaltet"):t("Ausgeschaltet")}</span></span></label>
      ${s.on?`<div class="nb-sws">
        ${i("replies",t("Neue Antworten"),f?t("Antworten in meinen Tickets und eigenen Anfragen"):t("Wenn die IT auf Ihr Ticket antwortet"))}
        ${i("status",t("Status geändert"),t("z. B. „Gelöst“ oder „Wartet auf Ihre Antwort“ bei eigenen Anfragen"))}
        ${s.agent?i("assigned",t("Mir zugewiesen"),t("Wenn Ihnen ein Ticket zugewiesen wird")):""}
        ${s.agent?i("unassigned",t("Neue, nicht zugewiesene Tickets"),t("Damit nichts liegen bleibt")):""}
      </div>
      <div class="tk-actions">
        <button type="button" class="small" data-tb-chat>💬 ${t("Bot-Chat öffnen")}</button>
        <button type="button" class="small" data-tb-test>${t("Testnachricht")}</button>
      </div>
      <p class="hint">${t("Im Chat: „tickets“ zeigt Ihre offenen Tickets, „ticket: Betreff“ legt ein neues an.")}</p>`:""}
      ${d?`<div class="error">${n(d)}</div>`:""}`},c=async d=>{a=!0,r();try{const p=await d();p&&(s=p),a=!1,r()}catch(p){a=!1,r(p.message)}};e.addEventListener("change",d=>{const p=d.target;p.hasAttribute("data-tb-on")&&c(()=>oe({on:p.checked},F()));const b=p.dataset.tbSet;b&&c(()=>oe({settings:{[b]:p.checked}},F()))}),e.addEventListener("click",d=>{const p=d.target;p.closest("[data-tb-test]")&&c(async()=>{await Ze(F()),N(t("Testnachricht gesendet – bitte im Teams-Chat nachsehen."))}),p.closest("[data-tb-chat]")&&Oe(`https://teams.microsoft.com/l/chat/0/0?users=28:${lt}`)}),r(),Re().then(d=>{s=d,r()},d=>r(d.message))}function ct(){const e=document.createElement("div");e.className="tk-menu",e.innerHTML=`
    ${(o==null?void 0:o.access)==="agent"?`<button type="button" class="menu-item" data-m="key"><span class="mi-icon">🔑</span><span class="mi-label">${o.agentKeySet?t("Freshdesk-Schlüssel ändern"):t("Freshdesk-Schlüssel hinterlegen")}</span></button>`:""}
    <button type="button" class="menu-item" data-m="bot"><span class="mi-icon">🔔</span><span class="mi-label">${t("Teams-Benachrichtigungen")}</span></button>
    <button type="button" class="menu-item" data-m="web"><span class="mi-icon">↗</span><span class="mi-label">${t("Freshdesk im Browser öffnen")}</span></button>
    <div class="tk-lang">${qe()}</div>`,Z(t("Mehr"),[e]),e.addEventListener("click",s=>{var c,d,p;const a=s.target,i=(c=a.closest("[data-m]"))==null?void 0:c.dataset.m,r=(d=a.closest("[data-lang]"))==null?void 0:d.dataset.lang;if(r)return Ae(r);i&&((p=document.querySelector(".m-sheet [data-close]"))==null||p.click(),i==="key"&&Te(),i==="bot"&&rt(),i==="web"&&X(`https://${o==null?void 0:o.domain}/${f?"a/tickets":"support/tickets"}`))})}const Ie=()=>document.body.classList.toggle("phone",Ue());Ie();var de,ue;(ue=(de=matchMedia("(max-width: 600px)")).addEventListener)==null||ue.call(de,"change",Ie);setInterval(()=>{document.visibilityState==="visible"&&o&&o.access!=="none"&&C()},6e4);{const e=document.getElementById("version");e&&(e.textContent=`${t("Monolith IT-Tickets")} 1.9.0`)}se();
