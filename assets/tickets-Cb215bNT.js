import{t as e,b as j,l as R,a as At,d as zt,c as Dt}from"./i18n-BqJl65eI.js";import{a as Bt,w as Ht}from"./theme-UTmHLXj_.js";import{b as a,o as it,L as K,J as Ct}from"./util-OTHcoAhY.js";import{H as et,I as lt,J as vt,K as jt,L as Kt,M as Ft,t as q,N as Pt,c as gt,n as Z,O as Ot,d as Wt,P as Gt,Q as Zt,R as Rt,S as Ut,T as Vt,i as Jt,U as Xt,m as yt,W as Yt,F as _t,X as $t,Y as Qt}from"./ticketswitch-BS60lhBT.js";import{o as xt}from"./wizard-BXsRGRDh.js";import"./preload-helper-DmqPR1C2.js";function te(t){const{root:s,close:n}=xt(e("Aufholen"));s.classList.add("cu-panel","tk-cu");let i=[],r=0,c=0,o=0,u=!1,l="",p="",m="",T="reply",$="loading";const M=()=>{n(),document.removeEventListener("keydown",x),t.onClose(u)};async function D(){try{i=(await vt(!0)).items}catch(d){p=d.message}$=i.length?"card":"done",A()}function Y(){const d=i.length-r;return`<header class="wz-head cu-head">
        <button class="wz-close" data-close title="${a(e("Schließen"))}" aria-label="${a(e("Schließen"))}">✕</button>
        <span class="wz-title">☕ ${a($==="card"?j(d,"{n} verbleibend|{n} verbleibend"):e("Aufholen"))}</span>
      </header>
      <div class="cu-progress"><span style="width:${i.length?r/i.length*100:100}%"></span></div>`}function _(d){const v=d.conversations.length-d.newCount,I=d.conversations.slice(0,v),L=d.conversations.slice(v);return`<article class="cu-card" data-card>
        <div class="cu-swipe cu-swipe-read">✓ ${a(e("Gelesen"))}</div>
        <div class="cu-swipe cu-swipe-later">${a(e("Später"))}</div>
        <div class="cu-task">
          <div class="cu-task-title">${a(d.ticket.subject)}</div>
          <div class="cu-task-meta"><span class="num">#${d.ticket.id}</span>
            ${t.statusBadge(d.ticket)}
            ${t.asAgent&&d.ticket.requester?`<span class="hint">${a(d.ticket.requester.name)}</span>`:""}
            <span class="badge unread">${a(j(d.newCount,"{n} neu|{n} neu"))}</span></div>
        </div>
        <div class="thread cu-thread tk-thread">
          ${I.map(z=>`<div class="cu-item">${t.bubble(z,d.ticket)}</div>`).join("")}
          ${I.length?`<div class="cu-divider"><span>${a(e("Zuletzt gelesen"))}</span></div>`:""}
          ${L.map(z=>`<div class="cu-item cu-new">${t.bubble(z,d.ticket)}</div>`).join("")}
        </div>
      </article>`}function Q(){const d=i[r],v=t.asAgent&&!d.ownRequest;return`<footer class="wz-foot cu-foot">
        <div class="cu-compose">
          ${v?`<div class="tk-kind view-seg" role="tablist">
            <button type="button" class="${T==="reply"?"active":""}" data-kind="reply">💬 ${e("Antwort an Anfragenden")}</button>
            <button type="button" class="${T==="note"?"active":""}" data-kind="note">🔒 ${e("Interne Notiz")}</button></div>`:""}
          <div class="cu-compose-row">
            <textarea id="cu-text" rows="1" spellcheck="true" placeholder="${a(v?T==="note"?e("Interne Notiz (nur für die IT sichtbar) …"):e("Antwort schreiben …"):e("Nachricht an die IT …"))}">${a(m)}</textarea>
            <button type="button" class="primary cu-send" data-send${m.trim()&&!l?"":" disabled"} title="${a(e("Senden (Strg+Enter)"))}">➤</button>
          </div>
        </div>
        <div class="cu-actions">
          <button type="button" class="cu-later" data-later${l?" disabled":""}>${a(e("Ungelesen lassen"))}</button>
          <button type="button" class="cu-open" data-open${l?" disabled":""} title="${a(e("Ticket öffnen"))}">↗<span class="lbl"> ${a(e("Öffnen"))}</span></button>
          <button type="button" class="primary cu-read" data-read${l?" disabled":""}>✓ ${a(e("Als gelesen"))}</button>
        </div>
      </footer>`}function A(){var v;let d;$==="loading"?d=`<div class="wz-empty"><div class="wz-spinner"></div><p class="hint">${a(e("Neue Nachrichten werden geladen …"))}</p></div>`:$==="done"?d=`<div class="wz-empty cu-done">
          <div class="cu-done-icon">✓</div>
          <h2>${a(e("Alles durchgesehen"))}</h2>
          <p class="hint">${a(i.length?e("Sie haben alle neuen Nachrichten durchgesehen."):e("Keine neuen Nachrichten – alles gelesen."))}</p>
          ${i.length?`<p class="hint">${a(j(c,"{n} als gelesen|{n} als gelesen"))} · ${a(j(o,"{n} für später|{n} für später"))}</p>`:""}
          <button type="button" class="primary" data-close>${a(e("Zurück zur Liste"))}</button>
        </div>`:d=_(i[r]),s.innerHTML=`${Y()}
      ${p?`<div class="error wz-error">${a(p)}</div>`:""}
      ${l?'<div class="wz-loading-line"></div>':""}
      <div class="wz-body cu-body">${d}</div>
      ${$==="card"?Q():""}`,$==="card"&&((v=s.querySelector(".cu-divider")??s.querySelector(".cu-new"))==null||v.scrollIntoView({block:"start"}),W(),f())}const f=()=>{const d=s.querySelector("#cu-text");d&&(d.style.height="auto",d.style.height=`${Math.min(d.scrollHeight,140)}px`)};function g(d,v=!0){d==="read"?c++:o++,m="",p="",T="reply";const I=()=>{r++,$=r>=i.length?"done":"card",A()},L=s.querySelector("[data-card]");v&&L?(L.classList.add(d==="read"?"fly-right":"fly-left"),setTimeout(I,180)):I()}async function k(d=!0){l="…",A();try{await et([i[r].ticket.id]),u=!0,l="",g("read",d)}catch(v){l="",p=v.message,A()}}async function S(){const d=m.trim();if(!d||l)return;const v=i[r];l=e("Wird gesendet …"),A();try{const I=d.split(/\n{2,}/).map(L=>`<p>${a(L).replace(/\n/g,"<br>")}</p>`).join("");await lt(v.ticket.id,t.asAgent&&!v.ownRequest?T:"reply",I),await et([v.ticket.id]).catch(()=>{}),u=!0,l="",g("read")}catch(I){l="",p=I.message,A()}}function W(){const d=s.querySelector("[data-card]");if(!d)return;let v=0,I=0,L=0,z=!1,C=null;d.addEventListener("pointerdown",F=>{F.pointerType==="mouse"||F.target.closest("a, button, textarea, input")||(v=F.clientX,I=F.clientY,L=0,z=!0,C=null)}),d.addEventListener("pointermove",F=>{if(!z)return;const at=F.clientX-v,bt=F.clientY-I;C===null&&Math.abs(at)+Math.abs(bt)>10&&(C=Math.abs(at)>Math.abs(bt)*1.3,C&&d.setPointerCapture(F.pointerId)),C&&(L=at,d.style.transform=`translateX(${L}px) rotate(${L/40}deg)`,d.style.setProperty("--read",String(Math.max(0,Math.min(1,L/110)))),d.style.setProperty("--later",String(Math.max(0,Math.min(1,-L/110)))))});const mt=()=>{if(z){if(z=!1,C&&L>110)return void k();if(C&&L<-110)return g("later");d.style.transition="transform 0.18s ease",d.style.transform="",d.style.setProperty("--read","0"),d.style.setProperty("--later","0"),setTimeout(()=>d.style.transition="",200)}};d.addEventListener("pointerup",mt),d.addEventListener("pointercancel",mt)}s.addEventListener("click",d=>{var L,z;const v=d.target;if(v.closest("[data-close]"))return M();if(v.closest("[data-read]"))return void k();if(v.closest("[data-later]"))return g("later");if(v.closest("[data-send]"))return void S();if(v.closest("[data-open]")){const C=i[r].ticket.id;return u=!0,M(),t.open(C)}const I=(L=v.closest("[data-kind]"))==null?void 0:L.dataset.kind;I&&(T=I,A(),(z=s.querySelector("#cu-text"))==null||z.focus())}),s.addEventListener("input",d=>{var I;const v=d.target;v.id==="cu-text"&&(m=v.value,(I=s.querySelector("[data-send]"))==null||I.toggleAttribute("disabled",!m.trim()||!!l),f())});const x=d=>{var I;((I=d.target)==null?void 0:I.id)==="cu-text"&&d.key==="Enter"&&(d.ctrlKey||d.metaKey)?(d.preventDefault(),S()):d.key==="Escape"&&M()};document.addEventListener("keydown",x),A(),D()}Bt();Ht();const E=document.getElementById("app"),ct=new URLSearchParams(location.search).get("from")??"",wt="mm-tk-view";let b=null,h=null,y=!1,P="open",U=[],ot="",B=null,w=null,nt=!1;const V={1:["Niedrig","p1"],2:["Mittel","p2"],3:["Hoch","p3"],4:["Dringend","p4"]},st=t=>{var s;return e(((s=V[t])==null?void 0:s[0])??"–")},H=t=>{var s;return((s=h==null?void 0:h.statuses.find(n=>n.id===t))==null?void 0:s.name)??String(t)},dt=t=>t===2?"st-open":t===3?"st-wait":t>=4?"st-done":"st-other",ee=t=>{var s,n;return t?((n=(s=h==null?void 0:h.agents)==null?void 0:s.find(i=>i.id===t))==null?void 0:n.name)??`#${t}`:e("Nicht zugewiesen")},se=t=>{var s,n;return t?((n=(s=h==null?void 0:h.groups)==null?void 0:s.find(i=>i.id===t))==null?void 0:n.name)??`#${t}`:"–"},ut=t=>t.split(/[\s.@]+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?";function ae(t){const s=new Date(t),n=Math.round((Date.now()-s.getTime())/6e4);return n<1?e("gerade eben"):n<60?e("vor {n} Min.",{n}):n<1440?e("vor {n} Std.",{n:Math.round(n/60)}):n<10080?j(Math.round(n/1440),"vor {n} Tag|vor {n} Tagen"):s.toLocaleDateString(Dt(),{day:"2-digit",month:"2-digit",year:"2-digit"})}async function pt(t=!1){var i;E.innerHTML=`<div class="tk-center"><p class="hint">⏳ ${e("IT-Tickets werden geladen …")}</p></div>`;try{b=await Xt(t)}catch(r){const c=r.status;E.innerHTML=`<div class="tk-center">
      <h2>🎫 ${e("IT-Tickets")}</h2>
      <p>${c===401||!c?e("Bitte mit Ihrem Microsoft-Konto anmelden."):a(r.message)}</p>
      <button type="button" class="primary" id="tk-login">${e("Anmelden")}</button>
    </div>`,(i=E.querySelector("#tk-login"))==null||i.addEventListener("click",()=>void pt(!0));return}if(b.access==="none"){E.innerHTML=`<div class="tk-center">
      ${ct?`<p>${yt("tickets")}</p>`:""}<h2>🎫 ${e("IT-Tickets")}</h2>
      <p>${e("Für {email} ist das IT-Ticketsystem nicht freigeschaltet.",{email:`<b>${a(b.email)}</b>`})}</p>
      <p class="hint">${e("Freigeschaltet ist, wer im Ticketsystem als Kontakt oder IT-Mitarbeiter eingetragen ist. Bitte bei der IT melden.")}</p>
    </div>`;return}y=b.access==="agent"&&b.agentKeySet;try{P=localStorage.getItem(wt)||"open"}catch{}St().some(r=>r.id===P)||(P="open"),h=await Yt().catch(()=>({statuses:[],priorities:[1,2,3,4]})),ne();const s=new URLSearchParams(location.search),n=Number(s.get("ticket"));await G(),n?O(n):s.get("new")==="1"&&Et()}function St(){return y?[{id:"open",label:e("Offen")},{id:"mine",label:e("Meine")},{id:"unassigned",label:e("Nicht zugewiesen")},{id:"resolved",label:e("Erledigt")},{id:"watched",label:`☆ ${e("Beobachtet")}`},{id:"mine-requests",label:e("Eigene Anfragen")}]:[{id:"open",label:e("Offen")},{id:"all",label:e("Alle")}]}function ne(){const t=(b==null?void 0:b.access)==="agent"&&!b.agentKeySet?`<div class="tk-banner">🔑 ${e("Sie sind IT-Mitarbeiter. Hinterlegen Sie einmal Ihren persönlichen Freshdesk-Schlüssel, um alle Tickets zu bearbeiten.")}
          <button type="button" class="small primary" data-act="key">${e("Schlüssel hinterlegen")}</button></div>`:"";E.innerHTML=`
    <div class="split-shell tk-shell">
      <div id="split-head" class="split-head">
        <div class="tk-head">
          <div class="hdr-top">
            ${ct?`<span class="hdr-area">${yt("tickets")}</span>`:`<strong class="hdr-title">🎫 ${e("IT-Tickets")}</strong>`}
            <input id="search" type="search" class="tk-search" placeholder="🔎 ${a(e("Suchen: Betreff, Nr., Name …"))}" value="${a(ot)}" />
            <div class="hdr-views">
              <span class="seg view-seg tk-views" role="tablist" aria-label="${a(e("Ansicht"))}">${St().map(s=>`<button type="button" class="seg-btn${s.id===P?" active":""}" data-view="${s.id}" aria-pressed="${s.id===P}">${a(s.label)}</button>`).join("")}</span>
            </div>
            <span class="tk-who" title="${a(b==null?void 0:b.email)}">${a(b==null?void 0:b.name)}${y?` <span class="tk-role">${e("IT")}</span>`:""}</span>
            <button type="button" class="icon-tool" data-act="refresh" title="${a(e("Aktualisieren"))}">⟳</button>
            <button type="button" class="action hdr-catchup" id="tk-catchup" data-act="catchup" hidden title="${a(e("Alle neuen Nachrichten nacheinander durchsehen"))}">☕<span class="lbl"> ${e("Aufholen")}</span> <span class="cu-count"></span></button>
            <button type="button" class="action primary hdr-new" data-act="new">＋<span class="lbl"> ${e("Neues Ticket")}</span></button>
            <button type="button" class="icon-tool hdr-more" data-act="menu" title="${a(e("Mehr"))}">⋯</button>
          </div>
        </div>
        ${t}
      </div>
      <div class="split">
        <div id="pane-list" class="pane pane-list"><div class="view"><section class="tk-list" id="tk-list" aria-label="${a(e("Tickets"))}"></section></div></div>
        <div class="split-handle" role="separator" aria-orientation="vertical" tabindex="0" title="${a(e("Ziehen ändert die Breite · Doppelklick: Standard"))}"></div>
        <div id="pane-detail" class="pane pane-detail"><section class="tk-detail" id="tk-detail" aria-live="polite"></section></div>
      </div>
    </div>`,_t(E.querySelector(".split"),"mm-tk-split"),J()}E.addEventListener("click",t=>{var o,u;const s=t.target,n=(o=s.closest("[data-act]"))==null?void 0:o.dataset.act;n==="refresh"?(G(),B&&O(B,!0)):n==="new"?Et():n==="catchup"?ie():n==="key"?Mt():n==="menu"?ve():n==="back"&&le(),s.closest('[data-area="tasks"]')?location.href=jt(ct):n==="web"&&w&&it(w.ticket.url);const i=(u=s.closest("[data-view]"))==null?void 0:u.dataset.view;if(i&&i!==P){P=i;try{localStorage.setItem(wt,i)}catch{}E.querySelectorAll("[data-view]").forEach(l=>{l.classList.toggle("active",l.dataset.view===i),l.setAttribute("aria-selected",String(l.dataset.view===i))}),G()}const r=s.closest("[data-tk]");r&&O(Number(r.dataset.tk));const c=s.closest("a[href]");c&&/^https?:/i.test(c.getAttribute("href")??"")&&(t.preventDefault(),it(c.href))});E.addEventListener("input",t=>{const s=t.target;s.classList.contains("tk-search")&&(ot=s.value,X())});let N=new Map;async function Tt(t=!1){try{const s=await vt(t);N=new Map(s.items.map(n=>[n.ticket.id,n.newCount])),B&&N.has(B)&&(N.delete(B),et([B]).catch(()=>{}))}catch{return}X(),It()}function It(){const t=E.querySelector("#tk-catchup");t&&(t.hidden=!N.size,t.querySelector(".cu-count").textContent=String(N.size))}function ie(){te({asAgent:y,bubble:oe,statusBadge:t=>`<span class="tk-st ${dt(t.status)}">${a(H(t.status))}</span>`,open:t=>void O(t),onClose:t=>{t&&(G(),Tt(!0))}})}async function G(){if(nt)return;nt=!0;const t=E.querySelector("#tk-list");t&&!U.length&&(t.innerHTML=`<p class="hint tk-pad">⏳ ${e("Lade …")}</p>`);try{U=(await Kt(P)).tickets.sort((n,i)=>i.updatedAt.localeCompare(n.updatedAt)),X(),Tt()}catch(s){t&&(t.innerHTML=`<div class="error tk-pad">${a(s.message)}</div>`)}finally{nt=!1}}function X(){const t=E.querySelector("#tk-list");if(!t)return;const s=ot.trim().toLowerCase(),n=s?U.filter(r=>{var c,o;return`#${r.id} ${r.id} ${r.subject} ${((c=r.requester)==null?void 0:c.name)??""} ${((o=r.requester)==null?void 0:o.email)??""} ${H(r.status)}`.toLowerCase().includes(s)}):U;if(!n.length){t.innerHTML=`<div class="tk-empty"><div class="tk-empty-ico">🎉</div><p>${s?e("Keine Treffer."):e("Keine Tickets in dieser Ansicht.")}</p>
      ${y?"":`<button type="button" class="primary" data-act="new">＋ ${e("Neues Ticket")}</button>`}</div>`;return}const i=N.size?`<div class="catchup-bar"><span class="catchup-bar-icon">☕</span><span class="grow">${j(N.size,"<b>{n}</b> Ticket mit neuen Nachrichten|<b>{n}</b> Tickets mit neuen Nachrichten")}</span>
        <button type="button" class="primary small" data-act="catchup">${e("Jetzt aufholen")} →</button></div>`:"";t.innerHTML=`${i}<div class="tk-count hint">${j(n.length,"{n} Ticket|{n} Tickets")}</div>${n.map(re).join("")}`}function re(t){var c,o,u,l;const s=t.dueBy&&t.status<4&&new Date(t.dueBy).getTime()<Date.now(),n=y?((c=t.requester)==null?void 0:c.name)??((o=t.requester)==null?void 0:o.email)??"":H(t.status),i=N.has(t.id);return`<button type="button" class="tk-row${t.status>=4?"":s||t.priority>=4?" b-urgent":t.status===3?" b-wait":" b-open"}${i?" is-new":""}${t.id===B?" active":""}" data-tk="${t.id}">
      <span class="tk-av" aria-hidden="true">${a(ut(((u=t.requester)==null?void 0:u.name)??(b==null?void 0:b.name)??"?"))}</span>
      <span class="tk-row-main">
        <span class="tk-row-top"><span class="tk-num">#${t.id}</span><span class="tk-subj">${a(t.subject)}</span></span>
        <span class="tk-row-sub">
          <span class="tk-st ${dt(t.status)}">${a(H(t.status))}</span>
          ${t.priority>=3?`<span class="tk-prio ${(l=V[t.priority])==null?void 0:l[1]}">${a(st(t.priority))}</span>`:""}
          ${s?`<span class="tk-prio p4">${e("überfällig")}</span>`:""}
          ${y?`<span class="tk-meta">${a(n)}${t.responderId?` → ${a(ee(t.responderId))}`:""}</span>`:""}
        </span>
      </span>
      <span class="tk-when">${a(ae(t.updatedAt))}${N.get(t.id)?`<span class="unread-dot" title="${a(j(N.get(t.id),"{n} ungelesene Nachricht|{n} ungelesene Nachrichten"))}">${N.get(t.id)}</span>`:""}</span>
    </button>`}function le(){B=null,w=null,document.body.classList.remove("tk-open"),E.querySelectorAll(".tk-row.active").forEach(t=>t.classList.remove("active")),J()}async function O(t,s=!1){B=t,E.querySelectorAll(".tk-row").forEach(i=>i.classList.toggle("active",Number(i.dataset.tk)===t)),document.body.classList.add("tk-open");const n=E.querySelector("#tk-detail");n&&!s&&(n.innerHTML=`<p class="hint tk-pad">⏳ ${e("Lade Ticket #{n} …",{n:t})}</p>`);try{const i=await Ft(t);if(B!==t)return;N.delete(t)&&(et([t]).catch(()=>{}),X(),It()),w={ticket:i.ticket,conversations:i.conversations,watched:i.watched,recent:i.recent},J()}catch(i){n&&(n.innerHTML=`<div class="tk-dhead"><button type="button" class="tk-back" data-act="back"><b>‹</b> ${e("Tickets")}</button></div><div class="error tk-pad">${a(i.message)}</div>`)}}function ce(t){return/^image\//.test(t.type)?`<a class="tk-img" href="${a(t.url)}" title="${a(t.name)}"><img src="${a(t.url)}" alt="${a(t.name)}" loading="lazy" /></a>`:`<a class="file-chip" href="${a(t.url)}">📎 ${a(t.name)} <span class="hint">${Math.max(1,Math.round(t.size/1024))} KB</span></a>`}function rt(t){return`<div class="tk-msg${t.mine?" mine":""}${t.private?" note":""}">
      <span class="tk-av sm" aria-hidden="true">${a(ut(t.author))}</span>
      <div class="tk-bubble">
        <div class="tk-mhead"><b>${a(t.author)}</b>${t.private?` <span class="tk-note-tag">🔒 ${e("Interne Notiz")}</span>`:""}<span class="hint">${a(K(new Date(t.createdAt)))}</span></div>
        <div class="tk-mbody">${Ct(t.html)}</div>
        ${t.attachments.length?`<div class="tk-files">${t.attachments.map(ce).join("")}</div>`:""}
      </div>
    </div>`}function ht(t,s){var n,i,r;return t.incoming||t.userId===s.requesterId?t.userId===s.requesterId?((n=s.requester)==null?void 0:n.name)??(b==null?void 0:b.name)??"":t.fromEmail??e("Kollege"):((r=(i=h==null?void 0:h.agents)==null?void 0:i.find(c=>c.id===t.userId))==null?void 0:r.name)??e("IT-Support")}const Lt=(t,s)=>y?!t.incoming&&t.userId===(h==null?void 0:h.myAgentId):t.incoming||t.userId===s.requesterId,oe=(t,s)=>rt({...t,author:ht(t,s),mine:Lt(t,s)});function de(t){const s=new Date(t).getTime()-Date.now(),n=Math.abs(s)/6e4,i=n<60?e("{n} Min.",{n:Math.max(1,Math.round(n))}):n<2880?e("{n} Std.",{n:Math.round(n/60)}):j(Math.round(n/1440),"{n} Tag|{n} Tagen");return s>=0?{text:e("in {span}",{span:i}),late:!1}:{text:e("seit {span} überfällig",{span:i}),late:!0}}function tt(t,s,n){const i=s===""||t.some(r=>r.value===s);return`${n!==void 0?`<option value="">${a(n)}</option>`:""}${i?"":`<option value="${a(s)}" selected>${a(s)}</option>`}${t.map(r=>`<option value="${a(r.value)}"${r.value===s?" selected":""}>${a(r.label)}</option>`).join("")}`}function ue(t){var m,T;const n=[t.frDueBy&&t.status<4?{label:e("Erste Antwort fällig"),iso:t.frDueBy,icon:"↩"}:null,t.dueBy&&t.status<4?{label:e("Lösung fällig"),iso:t.dueBy,icon:"⏱"}:null].filter(Boolean).map($=>{const M=de($.iso);return`<div class="tk-due${M.late?" late":""}"><span class="tk-due-ico">${$.icon}</span><span><span class="hint">${a($.label)} ${a(M.text)}</span><br><b>${a(K(new Date($.iso)))}</b></span></div>`}).join(""),i=`<div class="tk-side-status"><span class="tk-side-st ${dt(t.status)}">${a(H(t.status))}</span></div>${n}`;if(!y)return`<section class="tk-card tk-propcard">${i}
        <div class="tk-ro">
          <div><span class="hint">${e("Priorität")}</span><b><span class="tk-pdot ${(m=V[t.priority])==null?void 0:m[1]}"></span>${a(st(t.priority))}</b></div>
          <div><span class="hint">${e("Erstellt")}</span><b>${a(K(new Date(t.createdAt)))}</b></div>
          <div><span class="hint">${e("Zuletzt geändert")}</span><b>${a(K(new Date(t.updatedAt)))}</b></div>
        </div>
      </section>`;const r=(h==null?void 0:h.required)??{},c=$=>$?` <span class="tk-req-star" title="${a(e("Pflichtfeld"))}">*</span>`:"",o=((h==null?void 0:h.statuses)??[]).map($=>({value:String($.id),label:$.name})),u=[1,2,3,4].map($=>({value:String($),label:st($)})),l=((h==null?void 0:h.types)??[]).map($=>({value:$,label:$})),p=((h==null?void 0:h.groups)??[]).map($=>({value:String($.id),label:$.name}));return`<section class="tk-card tk-propcard">${i}
      <form class="tk-props-form" id="tk-props" autocomplete="off">
        <div class="tk-props-title">${e("Eigenschaften")}</div>
        <label>${e("Tags")}
          <div class="tk-tags" data-tags>${t.tags.map($=>`<span class="tk-tag" data-tag="${a($)}">${a($)}<button type="button" data-tag-rm aria-label="${a(e("Entfernen"))}">✕</button></span>`).join("")}<input type="text" class="tk-tag-in" placeholder="${a(e("Tag hinzufügen …"))}" /></div>
        </label>
        <label><span>${e("Typ")}${c(r.type)}</span><select name="type">${tt(l,t.type??"","–")}</select></label>
        <label><span>${e("Status")}${c(!0)}</span><select name="status" required>${tt(o,String(t.status))}</select></label>
        <label>${e("Priorität")}<span class="tk-sel-wrap"><span class="tk-pdot ${(T=V[t.priority])==null?void 0:T[1]}" data-pdot></span><select name="priority">${tt(u,String(t.priority))}</select></span></label>
        <label><span>${e("Gruppe")}${c(r.group)}</span><select name="groupId">${tt(p,t.groupId?String(t.groupId):"","–")}</select></label>
        <label><span>${e("Zuständig")}${c(r.agent)}</span><span class="tk-sel-row"><select name="responderId">${qt(t.groupId,t.responderId)}</select>${h!=null&&h.myAgentId&&t.responderId!==h.myAgentId?`<button type="button" class="tk-me" data-take title="${a(e("Mir zuweisen"))}">🙋</button>`:""}</span></label>
        <div class="tk-props-msg" aria-live="polite"></div>
        <button type="submit" class="primary tk-update" disabled>${e("Aktualisieren")}</button>
      </form>
    </section>`}function qt(t,s){var l,p;const n=(h==null?void 0:h.agents)??[],i=new Set(((p=(l=h==null?void 0:h.groups)==null?void 0:l.find(m=>m.id===t))==null?void 0:p.agentIds)??[]),r=m=>`<option value="${m.id}"${m.id===s?" selected":""}>${a(m.name)}</option>`,c=n.filter(m=>i.has(m.id)),o=n.filter(m=>!i.has(m.id)),u=s&&!n.some(m=>m.id===s)?`<option value="${s}" selected>#${s}</option>`:"";return`<option value="">${a(e("Nicht zugewiesen"))}</option>${u}${c.length?`<optgroup label="${a(se(t))}">${c.map(r).join("")}</optgroup><optgroup label="${a(e("Alle"))}">${o.map(r).join("")}</optgroup>`:o.map(r).join("")}`}function pe(t){var i;if(!y||!t.requester)return"";const s=t.requester,n=(w==null?void 0:w.recent)??[];return`<section class="tk-card tk-contact">
      <div class="tk-card-title">👤 ${e("Kontakt")}</div>
      <div class="tk-contact-head"><span class="tk-av">${a(ut(s.name||s.email))}</span><b>${a(s.name)}</b></div>
      <div class="tk-kv"><span class="hint">${e("E-Mail")}</span><span class="tk-copyline"><a href="mailto:${a(s.email)}">${a(s.email)}</a><button type="button" class="tk-copy" data-copy="${a(s.email)}" title="${a(e("Kopieren"))}">⧉</button></span></div>
      ${s.phone?`<div class="tk-kv"><span class="hint">${e("Telefon")}</span><a href="tel:${a(s.phone)}">${a(s.phone)}</a></div>`:""}
      ${(i=t.ccEmails)!=null&&i.length?`<div class="tk-kv"><span class="hint">CC</span><span>${t.ccEmails.map(a).join(", ")}</span></div>`:""}
    </section>
    <section class="tk-card tk-timeline">
      <div class="tk-card-title">🕘 ${e("Letzte Tickets")}</div>
      <div class="tk-tl-item cur"><span class="tk-tl-dot"></span><span><b>${a(t.subject)}</b><br><span class="hint">#${t.id} · ${a(K(new Date(t.createdAt)))} · ${a(H(t.status))}</span></span></div>
      ${n.map(r=>`<button type="button" class="tk-tl-item" data-tk="${r.id}"><span class="tk-tl-dot"></span><span><b>${a(r.subject)}</b><br><span class="hint">#${r.id} · ${a(K(new Date(r.createdAt)))} · ${a(H(r.status))}</span></span></button>`).join("")}
      ${n.length?"":`<p class="hint">${e("Keine weiteren Tickets.")}</p>`}
    </section>`}function J(){var l;const t=E.querySelector("#tk-detail");if(!t)return;if(!w){t.innerHTML=`<div class="pane-empty"><div>🎫</div><p>${e("Ticket links auswählen.")}</p></div>`;return}const s=w.ticket,n=((l=s.requester)==null?void 0:l.name)??(b==null?void 0:b.name)??"",i=p=>ht(p,s),r=p=>Lt(p,s),c={html:s.descriptionHtml??"",createdAt:s.createdAt,attachments:s.attachments,author:n,mine:!y},o=(p,m,T,$="")=>`<button type="button" class="tk-tool${$}" data-dact="${p}" title="${a(T)}">${m}<span class="lbl"> ${a(T)}</span></button>`;t.innerHTML=`
    <div class="tk-dhead">
      <button type="button" class="tk-back" data-act="back"><b>‹</b> ${e("Tickets")}</button>
      <div class="tk-dbar">
        ${y?o("watch",w.watched?"★":"☆",w.watched?e("Beobachtet"):e("Beobachten"),w.watched?" on":""):""}
        ${y&&s.status<4?o("resolve","✓",e("Gelöst")):""}
        ${y&&s.status!==5?o("close","🔒",e("Schließen")):""}
        ${y?o("forward","↪",e("Weiterleiten")):""}
        ${o("summary","✨",e("Zusammenfassung"))}
        <span class="grow"></span>
        ${o("props","⚙",e("Eigenschaften")," tk-props-btn")}
        <button type="button" class="tk-tool" data-act="web" title="${a(e("Im Browser öffnen"))}">↗</button>
      </div>
    </div>
    <div class="tk-dgrid${y?" has-contact":""}">
      <div class="tk-dmain">
        <div class="tk-dtitlebox">
          <h2 class="tk-dtitle2"><span class="tk-num">#${s.id}</span> ${a(s.subject)}</h2>
          <div class="hint">${s.requester?`<b>${a(s.requester.name)}</b> &lt;${a(s.requester.email)}&gt; · `:""}${a(K(new Date(s.createdAt)))}</div>
        </div>
        <div class="tk-thread" id="tk-thread">
          ${rt(c)}
          ${w.conversations.map(p=>rt({...p,author:i(p),mine:r(p)})).join("")}
        </div>
        ${he(s)}
      </div>
      <div class="tk-sidecol">
        <aside class="tk-side" id="tk-side">${ue(s)}</aside>
        ${y?`<aside class="tk-side2" id="tk-side2">${pe(s)}</aside>`:""}
      </div>
    </div>`,me(t,s),be(t,s);const u=t.querySelector("#tk-thread");setTimeout(()=>{var p;return(p=u==null?void 0:u.lastElementChild)==null?void 0:p.scrollIntoView({block:"end"})},0)}function he(t){const s=t.status>=4;return`<form class="tk-composer" id="tk-composer">
      ${y?`<div class="tk-kind view-seg" role="tablist">
        <button type="button" class="active" data-kind="reply">💬 ${e("Antwort an Anfragenden")}</button>
        <button type="button" data-kind="note">🔒 ${e("Interne Notiz")}</button></div>`:""}
      ${s&&!y?`<p class="hint">${e("Das Ticket ist erledigt. Mit einer Nachricht wird es wieder geöffnet.")}</p>`:""}
      <div class="tk-files-sel" hidden></div>
      <div class="tk-cbar">
        <label class="icon-btn tk-attach" title="${a(e("Datei anhängen"))}">📎<input type="file" multiple hidden /></label>
        <textarea rows="2" spellcheck="true" lang="${R()}" placeholder="${a(y?e("Antwort schreiben …"):e("Nachricht an die IT …"))}"></textarea>
        <button type="submit" class="primary tk-send" title="${a(e("Senden (Strg+Enter)"))}">➤</button>
      </div>
    </form>`}function me(t,s){let n="reply",i=[];const r=t.querySelector("#tk-composer"),c=r.querySelector("textarea"),o=r.querySelector(".tk-files-sel"),u=()=>{o.hidden=!i.length,o.innerHTML=i.map((l,p)=>`<span class="file-chip">📎 ${a(l.name)} <button type="button" class="link small" data-rm="${p}">✕</button></span>`).join("")};r.addEventListener("click",l=>{var $,M;const p=l.target,m=($=p.closest("[data-kind]"))==null?void 0:$.dataset.kind;m&&(n=m,r.querySelectorAll("[data-kind]").forEach(D=>D.classList.toggle("active",D.dataset.kind===m)),r.classList.toggle("is-note",m==="note"),c.placeholder=m==="note"?e("Interne Notiz (nur für die IT sichtbar) …"):e("Antwort schreiben …"));const T=(M=p.closest("[data-rm]"))==null?void 0:M.dataset.rm;T!==void 0&&(i.splice(Number(T),1),u())}),r.querySelector("input[type=file]").addEventListener("change",l=>{const p=l.target;i.push(...Array.from(p.files??[])),p.value="",u()}),c.addEventListener("input",()=>{c.style.height="auto",c.style.height=`${Math.min(220,c.scrollHeight)}px`}),c.addEventListener("keydown",l=>{l.key==="Enter"&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),r.requestSubmit())}),c.addEventListener("focus",()=>setTimeout(()=>{var l,p;return(p=(l=t.querySelector("#tk-thread"))==null?void 0:l.lastElementChild)==null?void 0:p.scrollIntoView({block:"end"})},300)),r.addEventListener("submit",async l=>{l.preventDefault();const p=c.value.trim();if(!p&&!i.length)return;const m=r.querySelector(".tk-send");m.disabled=!0;try{const T=p.split(/\n{2,}/).map(M=>`<p>${a(M).replace(/\n/g,"<br>")}</p>`).join(""),$=await lt(s.id,n,T,i);w==null||w.conversations.push($.conversation),c.value="",i=[],q(n==="note"?e("Notiz gespeichert."):e("Gesendet.")),O(s.id,!0),G()}catch(T){q(`${e("Nicht gesendet")}: ${T.message}`,!0)}finally{m.disabled=!1}})}function be(t,s){var _,Q,A;const n=async(f,g)=>{const k=await Rt(s.id,f);w&&(w.ticket={...w.ticket,...k.ticket}),U=U.map(S=>S.id===s.id?{...S,...k.ticket}:S),X(),J(),q(g)};(_=t.querySelector(".tk-dbar"))==null||_.addEventListener("click",async f=>{var k;const g=(k=f.target.closest("[data-dact]"))==null?void 0:k.dataset.dact;if(g)try{if(g==="watch"&&w){const S=await Pt(s.id,!w.watched);w.watched=S.watched,J(),q(S.watched?e("Wird beobachtet – Ansicht „Beobachtet“."):e("Nicht mehr beobachtet."))}else if(g==="resolve"||g==="close"){const S=g==="resolve"?4:5;if(!await gt(e("Ticket #{n} auf „{s}“ setzen?",{n:s.id,s:a(H(S))})))return;await n({status:S},e("Gespeichert."))}else if(g==="forward")ge(s);else if(g==="summary")$e();else if(g==="props"){const S=t.querySelector("#tk-side"),W=t.querySelector("#tk-side2");S&&Z(`⚙ ${e("Eigenschaften")} · #${s.id}`,[S,...W?[W]:[]])}}catch(S){q(`${e("Nicht gespeichert")}: ${S.message}`,!0)}}),(Q=t.querySelector("#tk-side2"))==null||Q.addEventListener("click",async f=>{var k;const g=(k=f.target.closest("[data-copy]"))==null?void 0:k.dataset.copy;if(g)try{await navigator.clipboard.writeText(g),q(e("Kopiert."))}catch{}});const i=t.querySelector("#tk-props");if(!i)return;const r=i.querySelector(".tk-update"),c=i.querySelector(".tk-props-msg"),o=i.querySelector("[data-tags]"),u=o.querySelector(".tk-tag-in"),l=()=>[...o.querySelectorAll("[data-tag]")].map(f=>f.dataset.tag),p=f=>i.elements.namedItem(f),m=f=>p(f).value,T=()=>({status:Number(m("status")),priority:Number(m("priority")),groupId:m("groupId")?Number(m("groupId")):null,responderId:m("responderId")?Number(m("responderId")):null,type:m("type")||null,tags:l()}),$={status:s.status,priority:s.priority,groupId:s.groupId,responderId:s.responderId,type:s.type||null,tags:[...s.tags]},M=()=>{const f=T(),g={};for(const k of Object.keys(f))JSON.stringify(f[k])!==JSON.stringify($[k])&&(g[k]=f[k]);return g},D=()=>{var k;const f=M();for(const S of["status","priority","groupId","responderId","type"])p(S).classList.toggle("dirty",S in f);o.classList.toggle("dirty","tags"in f),r.disabled=!Object.keys(f).length,c.textContent="",c.className="tk-props-msg";const g=i.querySelector("[data-pdot]");g&&(g.className=`tk-pdot ${((k=V[Number(m("priority"))])==null?void 0:k[1])??""}`)},Y=f=>{for(const g of f.split(/[,;]/).map(k=>k.trim()).filter(Boolean)){if(l().includes(g))continue;const k=document.createElement("span");k.className="tk-tag",k.dataset.tag=g,k.innerHTML=`${a(g)}<button type="button" data-tag-rm aria-label="${a(e("Entfernen"))}">✕</button>`,o.insertBefore(k,u)}u.value="",D()};u.addEventListener("keydown",f=>{var g;if(f.key==="Enter"||f.key===",")f.preventDefault(),Y(u.value);else if(f.key==="Backspace"&&!u.value){const k=o.querySelectorAll("[data-tag]");(g=k[k.length-1])==null||g.remove(),D()}}),u.addEventListener("blur",()=>{u.value.trim()&&Y(u.value)}),o.addEventListener("click",f=>{var k;const g=f.target.closest("[data-tag-rm]");g?(f.preventDefault(),(k=g.closest("[data-tag]"))==null||k.remove(),D()):u.focus()}),i.addEventListener("change",f=>{if(f.target.getAttribute("name")==="groupId"){const g=p("responderId"),k=g.value?Number(g.value):null;g.innerHTML=qt(m("groupId")?Number(m("groupId")):null,k)}D()}),(A=i.querySelector("[data-take]"))==null||A.addEventListener("click",()=>{p("responderId").value=String((h==null?void 0:h.myAgentId)??""),D()}),i.addEventListener("submit",async f=>{f.preventDefault();const g=M();if(!Object.keys(g).length)return;const k=(h==null?void 0:h.required)??{},S=T(),W=[k.group&&!S.groupId?e("Gruppe"):"",k.type&&!S.type?e("Typ"):"",k.agent&&!S.responderId?e("Zuständig"):""].filter(Boolean);if(W.length){c.textContent=e("Bitte ausfüllen: {f}",{f:W.join(", ")}),c.className="tk-props-msg error";return}if(!(g.status&&g.status>=4&&!await gt(e("Ticket #{n} auf „{s}“ setzen?",{n:s.id,s:a(H(g.status))})))){r.disabled=!0,r.textContent=e("Wird gespeichert …");try{await n(g,e("Gespeichert."))}catch(x){c.textContent=`${e("Nicht gespeichert")}: ${x.message}`,c.className="tk-props-msg error",r.disabled=!1,r.textContent=e("Aktualisieren")}}})}function ge(t){const s=document.createElement("form");s.className="tk-newform",s.innerHTML=`
    <label>${e("An (E-Mail, mehrere mit Komma)")}<input type="text" name="to" required placeholder="name@firma.de" /></label>
    <label>${e("Nachricht (optional)")}<textarea name="body" rows="4" spellcheck="true" lang="${R()}"></textarea></label>
    <p class="hint">${e("Freshdesk schickt das Ticket mit dem bisherigen Verlauf an diese Adresse.")}</p>
    <div class="tk-actions"><button type="submit" class="primary">↪ ${e("Weiterleiten")}</button></div>`,Z(`↪ ${e("Weiterleiten")} · #${t.id}`,[s]),setTimeout(()=>{var n;return(n=s.querySelector("[name=to]"))==null?void 0:n.focus()},50),s.addEventListener("submit",async n=>{var c;n.preventDefault();const i=new FormData(s),r=s.querySelector("[type=submit]");r.disabled=!0;try{await Ot(t.id,String(i.get("to")??""),a(String(i.get("body")??"")).replace(/\n/g,"<br>")),(c=document.querySelector(".m-sheet [data-close]"))==null||c.click(),q(e("Weitergeleitet.")),O(t.id,!0)}catch(o){q(`${e("Nicht gesendet")}: ${o.message}`,!0),r.disabled=!1}})}async function $e(){var c,o,u;if(!w)return;const t=w.ticket,s=document.createElement("div");s.className="sum-box",s.innerHTML=`<p class="hint">⏳ ${e("Copilot fasst den Verlauf zusammen …")}</p>`,Z(`✨ ${e("Zusammenfassung")} · #${t.id}`,[s]);const n=l=>l.replace(/<blockquote[\s\S]*?<\/blockquote>/gi,"").replace(/<br\s*\/?>/gi,`
`).replace(/<\/p>/gi,`
`).replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\n{3,}/g,`

`).trim(),i=[`${((c=t.requester)==null?void 0:c.name)??""} (${K(new Date(t.createdAt))}): ${n(t.descriptionHtml??"")}`,...w.conversations.map(l=>`${ht(l,t)}${l.private?" [intern]":""} (${K(new Date(l.createdAt))}): ${n(l.html)}`)];let r=`${e("IT-Ticket")} #${t.id}: ${t.subject}
${e("Status")}: ${H(t.status)}

${i.join(`

`)}`;r.length>12e3&&(r=`…${r.slice(-12e3)}`);try{const l=await Wt(r,"summary");s.innerHTML=`<div class="sum-text">${a(l).replace(/\n/g,"<br>")}</div>
      <div class="cp-acts"><button type="button" class="small" data-sum-copy>📋 ${e("Kopieren")}</button>
        ${y?`<button type="button" class="small" data-sum-note>🔒 ${e("Als interne Notiz")}</button>`:""}</div>`,(o=s.querySelector("[data-sum-copy]"))==null||o.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l),q(e("Kopiert."))}catch{}}),(u=s.querySelector("[data-sum-note]"))==null||u.addEventListener("click",async()=>{var p;try{await lt(t.id,"note",`<p><b>✨ ${a(e("Zusammenfassung"))}</b></p><p>${a(l).replace(/\n/g,"<br>")}</p>`),(p=document.querySelector(".m-sheet [data-close]"))==null||p.click(),q(e("Notiz gespeichert.")),O(t.id,!0)}catch(m){q(m.message,!0)}})}catch(l){const p=l;s.innerHTML=`<div class="error">${a((p==null?void 0:p.kind)==="consent"?e("Die Copilot-Schnittstelle ist noch nicht freigegeben – die EDV muss die Berechtigungen einmal bestätigen."):(p==null?void 0:p.kind)==="license"?e("Für diese Funktion ist eine Microsoft-365-Copilot-Lizenz nötig."):`${e("Copilot hat nicht geantwortet")}: ${l.message}`)}</div>`}}function Et(){var s;const t=document.createElement("form");t.className="tk-newform",t.innerHTML=`
    ${y?`<label>${e("Für (E-Mail des Kollegen, leer = ich)")}<input type="email" name="email" placeholder="${a(b==null?void 0:b.email)}" /></label>`:""}
    <label>${e("Betreff")}<input name="subject" required maxlength="250" placeholder="${a(e("z. B. Drucker im 2. OG druckt nicht"))}" /></label>
    <label>${e("Beschreibung")}<textarea name="description" rows="6" spellcheck="true" lang="${R()}" placeholder="${a(e("Was ist passiert? Seit wann? Fehlermeldung?"))}"></textarea></label>
    <div class="tk-row2">
      <label>${e("Priorität")}<select name="priority">${[1,2,3,4].map(n=>`<option value="${n}"${n===2?" selected":""}>${a(st(n))}</option>`).join("")}</select></label>
      ${y&&((s=h==null?void 0:h.groups)!=null&&s.length)?`<label>${e("Gruppe")}<select name="groupId"><option value="">–</option>${h.groups.map(n=>`<option value="${n.id}">${a(n.name)}</option>`).join("")}</select></label>`:""}
    </div>
    <label class="tk-attach-new">📎 ${e("Dateien / Screenshots anhängen")}<input type="file" name="files" multiple /></label>
    <div class="tk-actions"><button type="submit" class="primary">${e("Ticket senden")}</button></div>`,Z(`🎫 ${e("Neues IT-Ticket")}`,[t]),setTimeout(()=>{var n;return(n=t.querySelector("[name=subject]"))==null?void 0:n.focus()},50),t.addEventListener("submit",async n=>{var c;n.preventDefault();const i=new FormData(t),r=t.querySelector("[type=submit]");r.disabled=!0,r.textContent=e("Wird gesendet …");try{const o=await Gt({subject:String(i.get("subject")??""),description:a(String(i.get("description")??"")).replace(/\n/g,"<br>"),priority:Number(i.get("priority"))||2,email:String(i.get("email")??"")||void 0,groupId:Number(i.get("groupId"))||void 0},i.getAll("files").filter(u=>u.size));(c=document.querySelector(".m-sheet [data-close]"))==null||c.click(),q(e("Ticket #{n} erstellt.",{n:o.ticket.id})),await G(),O(o.ticket.id)}catch(o){q(`${e("Nicht gesendet")}: ${o.message}`,!0),r.disabled=!1,r.textContent=e("Ticket senden")}})}function Mt(){var n;const t=document.createElement("form");t.className="tk-newform",t.innerHTML=`
    <p>${e("So finden Sie Ihren Schlüssel:")}</p>
    <ol class="tk-steps">
      <li>${e("Freshdesk öffnen und anmelden")}: <a href="https://${a(b==null?void 0:b.domain)}/a/profile/settings">${a(b==null?void 0:b.domain)}</a></li>
      <li>${e("Oben rechts auf Ihr Bild → „Profileinstellungen“")}</li>
      <li>${e("Rechts „API-Schlüssel anzeigen“ → kopieren")}</li>
    </ol>
    <label>${e("Persönlicher API-Schlüssel")}<input name="key" autocomplete="off" spellcheck="false" required /></label>
    <p class="hint">${e("Der Schlüssel wird nur verschlüsselt im MyMonolith-Dienst gespeichert und nie angezeigt. Er wird gegen Ihre E-Mail geprüft.")}</p>
    <div class="tk-actions">
      ${b!=null&&b.agentKeySet?`<button type="button" class="small" data-remove>${e("Schlüssel entfernen")}</button>`:""}
      <button type="submit" class="primary">${e("Speichern")}</button>
    </div>`,Z(`🔑 ${e("Freshdesk-Schlüssel")}`,[t]);const s=async i=>{var r;try{const c=await Zt(i);(r=document.querySelector(".m-sheet [data-close]"))==null||r.click(),q(c.agentKeySet?e("Schlüssel gespeichert – Sie sehen jetzt alle Tickets."):e("Schlüssel entfernt.")),pt()}catch(c){q(c.message,!0)}};t.addEventListener("submit",i=>{i.preventDefault(),s(String(new FormData(t).get("key")??"").trim())}),(n=t.querySelector("[data-remove]"))==null||n.addEventListener("click",()=>void s(""))}const ke="d4d4de19-d722-4490-a22a-712b006220b0";function fe(){const t=document.createElement("div");t.className="tk-newform tk-bot",Z(`🔔 ${e("Teams-Benachrichtigungen")}`,[t]);let s=null,n=!1;const i=(o,u,l)=>`<label class="nb-sw"><input type="checkbox" data-tb-set="${o}"${s!=null&&s.settings[o]?" checked":""}${n?" disabled":""}><span class="nb-sw-main"><b>${a(u)}</b><span class="hint">${a(l)}</span></span></label>`,r=(o="")=>{if(!s){t.innerHTML=o?`<div class="error">${a(o)}</div>`:`<p class="hint">⏳ ${e("Lade …")}</p>`;return}t.innerHTML=`
      <p class="hint">${e("Neues zu Ihren IT-Tickets kommt als Nachricht vom Bot „MyMonolith Aufgaben“ in Teams – im selben Chat wie die Aufgaben, mit Zahl am Chat-Symbol und Push aufs Handy. Antworten geht direkt aus der Karte.")}</p>
      <label class="nb-sw tk-bot-main"><input type="checkbox" data-tb-on${s.on?" checked":""}${n?" disabled":""}><span class="nb-sw-main"><b>${e("IT-Tickets im Teams-Chat")}</b><span class="hint">${s.on?e("Eingeschaltet"):e("Ausgeschaltet")}</span></span></label>
      ${s.on?`<div class="nb-sws">
        ${i("replies",e("Neue Antworten"),y?e("Antworten in meinen Tickets und eigenen Anfragen"):e("Wenn die IT auf Ihr Ticket antwortet"))}
        ${i("status",e("Status geändert"),e("z. B. „Gelöst“ oder „Wartet auf Ihre Antwort“ bei eigenen Anfragen"))}
        ${s.agent?i("assigned",e("Mir zugewiesen"),e("Wenn Ihnen ein Ticket zugewiesen wird")):""}
        ${s.agent?i("unassigned",e("Neue, nicht zugewiesene Tickets"),e("Damit nichts liegen bleibt")):""}
      </div>
      <div class="tk-actions">
        <button type="button" class="small" data-tb-chat>💬 ${e("Bot-Chat öffnen")}</button>
        <button type="button" class="small" data-tb-test>${e("Testnachricht")}</button>
      </div>
      <p class="hint">${e("Im Chat: „tickets“ zeigt Ihre offenen Tickets, „ticket: Betreff“ legt ein neues an.")}</p>`:""}
      ${o?`<div class="error">${a(o)}</div>`:""}`},c=async o=>{n=!0,r();try{const u=await o();u&&(s=u),n=!1,r()}catch(u){n=!1,r(u.message)}};t.addEventListener("change",o=>{const u=o.target;u.hasAttribute("data-tb-on")&&c(()=>$t({on:u.checked},R()));const l=u.dataset.tbSet;l&&c(()=>$t({settings:{[l]:u.checked}},R()))}),t.addEventListener("click",o=>{const u=o.target;u.closest("[data-tb-test]")&&c(async()=>{await Qt(R()),q(e("Testnachricht gesendet – bitte im Teams-Chat nachsehen."))}),u.closest("[data-tb-chat]")&&Ut(`https://teams.microsoft.com/l/chat/0/0?users=28:${ke}`)}),r(),Vt().then(o=>{s=o,r()},o=>r(o.message))}function ve(){const t=document.createElement("div");t.className="tk-menu",t.innerHTML=`
    ${(b==null?void 0:b.access)==="agent"?`<button type="button" class="menu-item" data-m="key"><span class="mi-icon">🔑</span><span class="mi-label">${b.agentKeySet?e("Freshdesk-Schlüssel ändern"):e("Freshdesk-Schlüssel hinterlegen")}</span></button>`:""}
    <button type="button" class="menu-item" data-m="bot"><span class="mi-icon">🔔</span><span class="mi-label">${e("Teams-Benachrichtigungen")}</span></button>
    <button type="button" class="menu-item" data-m="web"><span class="mi-icon">↗</span><span class="mi-label">${e("Freshdesk im Browser öffnen")}</span></button>
    <div class="tk-lang">${At()}</div>`,Z(e("Mehr"),[t]),t.addEventListener("click",s=>{var c,o,u;const n=s.target,i=(c=n.closest("[data-m]"))==null?void 0:c.dataset.m,r=(o=n.closest("[data-lang]"))==null?void 0:o.dataset.lang;if(r)return zt(r);i&&((u=document.querySelector(".m-sheet [data-close]"))==null||u.click(),i==="key"&&Mt(),i==="bot"&&fe(),i==="web"&&it(`https://${b==null?void 0:b.domain}/${y?"a/tickets":"support/tickets"}`))})}const Nt=()=>document.body.classList.toggle("phone",Jt());Nt();var kt,ft;(ft=(kt=matchMedia("(max-width: 600px)")).addEventListener)==null||ft.call(kt,"change",Nt);setInterval(()=>{document.visibilityState==="visible"&&b&&b.access!=="none"&&G()},6e4);{const t=document.getElementById("version");t&&(t.textContent=`${e("Monolith IT-Tickets")} 1.9.0`)}pt();
