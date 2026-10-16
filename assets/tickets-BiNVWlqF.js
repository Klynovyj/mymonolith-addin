import{t,b as U,l as V,a as te,d as se,c as ne}from"./i18n-BfY8Oosw.js";import{a as ae,w as ie}from"./theme-CnIAo_iW.js";import{o as D,b as i,L as W,J as le}from"./util-Ds4fDLj9.js";import{E as re,F as ce,G as oe,H as de,t as w,c as ue,n as j,I as pe,J as me,K as he,i as ke,L as be,k as J,M as $e}from"./ticketswitch-6ZK6FUWW.js";import"./graph-eWkbxrKJ.js";import"./preload-helper-DmqPR1C2.js";ae();ie();const b=document.getElementById("app"),K=new URLSearchParams(location.search).get("from")??"",Y="mm-tk-view";let l=null,d=null,h=!1,S="open",T=[],z="",I=null,$=null,H=!1;const B={1:["Niedrig","p1"],2:["Mittel","p2"],3:["Hoch","p3"],4:["Dringend","p4"]},N=e=>{var s;return t(((s=B[e])==null?void 0:s[0])??"–")},M=e=>{var s;return((s=d==null?void 0:d.statuses.find(n=>n.id===e))==null?void 0:s.name)??String(e)},Z=e=>e===2?"st-open":e===3?"st-wait":e>=4?"st-done":"st-other",ge=e=>{var s,n;return e?((n=(s=d==null?void 0:d.agents)==null?void 0:s.find(a=>a.id===e))==null?void 0:n.name)??`#${e}`:t("Nicht zugewiesen")},_=e=>e.split(/[\s.@]+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?";function ve(e){const s=new Date(e),n=Math.round((Date.now()-s.getTime())/6e4);return n<1?t("gerade eben"):n<60?t("vor {n} Min.",{n}):n<1440?t("vor {n} Std.",{n:Math.round(n/60)}):n<10080?U(Math.round(n/1440),"vor {n} Tag|vor {n} Tagen"):s.toLocaleDateString(ne(),{day:"2-digit",month:"2-digit",year:"2-digit"})}async function F(e=!1){var a;b.innerHTML=`<div class="tk-center"><p class="hint">⏳ ${t("IT-Tickets werden geladen …")}</p></div>`;try{l=await be(e)}catch(o){const c=o.status;b.innerHTML=`<div class="tk-center">
      <h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${c===401||!c?t("Bitte mit Ihrem Microsoft-Konto anmelden."):i(o.message)}</p>
      <button type="button" class="primary" id="tk-login">${t("Anmelden")}</button>
    </div>`,(a=b.querySelector("#tk-login"))==null||a.addEventListener("click",()=>void F(!0));return}if(l.access==="none"){b.innerHTML=`<div class="tk-center">
      ${K?`<p>${J("tickets")}</p>`:""}<h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${t("Für {email} ist das IT-Ticketsystem nicht freigeschaltet.",{email:`<b>${i(l.email)}</b>`})}</p>
      <p class="hint">${t("Freigeschaltet ist, wer im Ticketsystem als Kontakt oder IT-Mitarbeiter eingetragen ist. Bitte bei der IT melden.")}</p>
    </div>`;return}h=l.access==="agent"&&l.agentKeySet;try{S=localStorage.getItem(Y)||"open"}catch{}Q().some(o=>o.id===S)||(S="open"),d=await $e().catch(()=>({statuses:[],priorities:[1,2,3,4]})),fe();const s=new URLSearchParams(location.search),n=Number(s.get("ticket"));await L(),n?E(n):s.get("new")==="1"&&X()}function Q(){return h?[{id:"open",label:t("Offen")},{id:"mine",label:t("Meine")},{id:"unassigned",label:t("Nicht zugewiesen")},{id:"resolved",label:t("Erledigt")},{id:"mine-requests",label:t("Eigene Anfragen")}]:[{id:"open",label:t("Offen")},{id:"all",label:t("Alle")}]}function fe(){const e=(l==null?void 0:l.access)==="agent"&&!l.agentKeySet?`<div class="tk-banner">🔑 ${t("Sie sind IT-Mitarbeiter. Hinterlegen Sie einmal Ihren persönlichen Freshdesk-Schlüssel, um alle Tickets zu bearbeiten.")}
          <button type="button" class="small primary" data-act="key">${t("Schlüssel hinterlegen")}</button></div>`:"";b.innerHTML=`
    <div class="tk-wrap">
      <header class="tk-head sticky-head">
        <div class="tk-top">
          ${K?J("tickets"):`<h1 class="tk-title">🎫 ${t("IT-Tickets")}</h1>`}
          <span class="tk-who" title="${i(l==null?void 0:l.email)}">${i(l==null?void 0:l.name)}${h?` · <span class="tk-role">${t("IT")}</span>`:""}</span>
          <button type="button" class="icon-btn" data-act="refresh" title="${i(t("Aktualisieren"))}">⟳</button>
          <button type="button" class="icon-btn" data-act="menu" title="${i(t("Mehr"))}">⋯</button>
          <button type="button" class="primary tk-new" data-act="new">＋ <span>${t("Neues Ticket")}</span></button>
        </div>
        ${e}
        <div class="tk-tools">
          <div class="view-seg tk-views" role="tablist">${Q().map(s=>`<button type="button" role="tab" class="${s.id===S?"active":""}" data-view="${s.id}" aria-selected="${s.id===S}">${i(s.label)}</button>`).join("")}</div>
          <input type="search" class="tk-search" placeholder="${i(t("Suchen: Betreff, Nr., Name …"))}" value="${i(z)}" />
        </div>
      </header>
      <div class="tk-split">
        <section class="tk-list" id="tk-list" aria-label="${i(t("Tickets"))}"></section>
        <section class="tk-detail" id="tk-detail" aria-live="polite"></section>
      </div>
    </div>`,A()}b.addEventListener("click",e=>{var m,g;const s=e.target,n=(m=s.closest("[data-act]"))==null?void 0:m.dataset.act;n==="refresh"?(L(),I&&E(I,!0)):n==="new"?X():n==="key"?x():n==="menu"?Le():n==="back"&&we(),s.closest('[data-area="tasks"]')?location.href=re(K):n==="web"&&$&&D($.ticket.url);const a=(g=s.closest("[data-view]"))==null?void 0:g.dataset.view;if(a&&a!==S){S=a;try{localStorage.setItem(Y,a)}catch{}b.querySelectorAll("[data-view]").forEach(v=>{v.classList.toggle("active",v.dataset.view===a),v.setAttribute("aria-selected",String(v.dataset.view===a))}),L()}const o=s.closest("[data-tk]");o&&E(Number(o.dataset.tk));const c=s.closest("a[href]");c&&/^https?:/i.test(c.getAttribute("href")??"")&&(e.preventDefault(),D(c.href))});b.addEventListener("input",e=>{const s=e.target;s.classList.contains("tk-search")&&(z=s.value,P())});async function L(){if(H)return;H=!0;const e=b.querySelector("#tk-list");e&&!T.length&&(e.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade …")}</p>`);try{T=(await ce(S)).tickets.sort((n,a)=>a.updatedAt.localeCompare(n.updatedAt)),P()}catch(s){e&&(e.innerHTML=`<div class="error tk-pad">${i(s.message)}</div>`)}finally{H=!1}}function P(){const e=b.querySelector("#tk-list");if(!e)return;const s=z.trim().toLowerCase(),n=s?T.filter(a=>{var o,c;return`#${a.id} ${a.id} ${a.subject} ${((o=a.requester)==null?void 0:o.name)??""} ${((c=a.requester)==null?void 0:c.email)??""} ${M(a.status)}`.toLowerCase().includes(s)}):T;if(!n.length){e.innerHTML=`<div class="tk-empty"><div class="tk-empty-ico">🎉</div><p>${s?t("Keine Treffer."):t("Keine Tickets in dieser Ansicht.")}</p>
      ${h?"":`<button type="button" class="primary" data-act="new">＋ ${t("Neues Ticket")}</button>`}</div>`;return}e.innerHTML=`<div class="tk-count hint">${U(n.length,"{n} Ticket|{n} Tickets")}</div>${n.map(ye).join("")}`}function ye(e){var a,o,c,m;const s=e.dueBy&&e.status<4&&new Date(e.dueBy).getTime()<Date.now(),n=h?((a=e.requester)==null?void 0:a.name)??((o=e.requester)==null?void 0:o.email)??"":M(e.status);return`<button type="button" class="tk-row${e.id===I?" active":""}" data-tk="${e.id}">
      <span class="tk-av" aria-hidden="true">${i(_(((c=e.requester)==null?void 0:c.name)??(l==null?void 0:l.name)??"?"))}</span>
      <span class="tk-row-main">
        <span class="tk-row-top"><span class="tk-num">#${e.id}</span><span class="tk-subj">${i(e.subject)}</span></span>
        <span class="tk-row-sub">
          <span class="tk-st ${Z(e.status)}">${i(M(e.status))}</span>
          ${e.priority>=3?`<span class="tk-prio ${(m=B[e.priority])==null?void 0:m[1]}">${i(N(e.priority))}</span>`:""}
          ${s?`<span class="tk-prio p4">${t("überfällig")}</span>`:""}
          ${h?`<span class="tk-meta">${i(n)}${e.responderId?` → ${i(ge(e.responderId))}`:""}</span>`:""}
        </span>
      </span>
      <span class="tk-when">${i(ve(e.updatedAt))}</span>
    </button>`}function we(){I=null,$=null,document.body.classList.remove("tk-open"),b.querySelectorAll(".tk-row.active").forEach(e=>e.classList.remove("active")),A()}async function E(e,s=!1){I=e,b.querySelectorAll(".tk-row").forEach(a=>a.classList.toggle("active",Number(a.dataset.tk)===e)),document.body.classList.add("tk-open");const n=b.querySelector("#tk-detail");n&&!s&&(n.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade Ticket #{n} …",{n:e})}</p>`);try{const a=await oe(e);if(I!==e)return;$={ticket:a.ticket,conversations:a.conversations},A()}catch(a){n&&(n.innerHTML=`<div class="tk-dhead"><button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button></div><div class="error tk-pad">${i(a.message)}</div>`)}}function Se(e){return/^image\//.test(e.type)?`<a class="tk-img" href="${i(e.url)}" title="${i(e.name)}"><img src="${i(e.url)}" alt="${i(e.name)}" loading="lazy" /></a>`:`<a class="file-chip" href="${i(e.url)}">📎 ${i(e.name)} <span class="hint">${Math.max(1,Math.round(e.size/1024))} KB</span></a>`}function O(e){return`<div class="tk-msg${e.mine?" mine":""}${e.private?" note":""}">
      <span class="tk-av sm" aria-hidden="true">${i(_(e.author))}</span>
      <div class="tk-bubble">
        <div class="tk-mhead"><b>${i(e.author)}</b>${e.private?` <span class="tk-note-tag">🔒 ${t("Interne Notiz")}</span>`:""}<span class="hint">${i(W(new Date(e.createdAt)))}</span></div>
        <div class="tk-mbody">${le(e.html)}</div>
        ${e.attachments.length?`<div class="tk-files">${e.attachments.map(Se).join("")}</div>`:""}
      </div>
    </div>`}function A(){var q,u;const e=b.querySelector("#tk-detail");if(!e)return;if(!$){e.innerHTML=`<div class="tk-placeholder hint">${t("Ticket links auswählen.")}</div>`;return}const s=$.ticket,n=((q=s.requester)==null?void 0:q.name)??(l==null?void 0:l.name)??"",a=r=>{var p,k;return r.incoming||r.userId===s.requesterId?r.userId===s.requesterId?n:r.fromEmail??t("Kollege"):((k=(p=d==null?void 0:d.agents)==null?void 0:p.find(f=>f.id===r.userId))==null?void 0:k.name)??t("IT-Support")},o=r=>h?!r.incoming&&r.userId===(d==null?void 0:d.myAgentId):r.incoming||r.userId===s.requesterId,c=(r,p,k,f)=>`<select class="tk-sel" data-field="${r}">${f!==void 0?`<option value="">${i(f)}</option>`:""}${k.map(y=>`<option value="${y.id}"${y.id===p?" selected":""}>${i(y.name)}</option>`).join("")}</select>`,m=h?`<div class="tk-props">
        <label>${t("Status")}${c("status",s.status,(d==null?void 0:d.statuses)??[])}</label>
        <label>${t("Priorität")}${c("priority",s.priority,[1,2,3,4].map(r=>({id:r,name:N(r)})))}</label>
        <label>${t("Zuständig")}${c("responderId",s.responderId,(d==null?void 0:d.agents)??[],t("Nicht zugewiesen"))}</label>
        <label>${t("Gruppe")}${c("groupId",s.groupId,(d==null?void 0:d.groups)??[],"–")}</label>
        ${s.responderId!==(d==null?void 0:d.myAgentId)&&(d!=null&&d.myAgentId)?`<button type="button" class="small" data-take>🙋 ${t("Übernehmen")}</button>`:""}
      </div>`:`<div class="tk-props ro">
        <span class="tk-st ${Z(s.status)}">${i(M(s.status))}</span>
        <span class="tk-prio ${(u=B[s.priority])==null?void 0:u[1]}">${t("Priorität")}: ${i(N(s.priority))}</span>
        <span class="hint">${t("Erstellt")}: ${i(W(new Date(s.createdAt)))}</span>
      </div>`,g={html:s.descriptionHtml??"",createdAt:s.createdAt,attachments:s.attachments,author:n,mine:!h};e.innerHTML=`
    <div class="tk-dhead">
      <button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button>
      <div class="tk-dtitle"><span class="tk-num">#${s.id}</span> ${i(s.subject)}</div>
      <button type="button" class="icon-btn" data-act="web" title="${i(t("Im Browser öffnen"))}">↗</button>
    </div>
    ${m}
    ${h&&s.requester?`<div class="tk-req hint">${t("Von")}: <b>${i(s.requester.name)}</b> &lt;${i(s.requester.email)}&gt;</div>`:""}
    <div class="tk-thread" id="tk-thread">
      ${O(g)}
      ${$.conversations.map(r=>O({...r,author:a(r),mine:o(r)})).join("")}
    </div>
    ${Te(s)}`,Ie(e,s);const v=e.querySelector("#tk-thread");setTimeout(()=>{var r;return(r=v==null?void 0:v.lastElementChild)==null?void 0:r.scrollIntoView({block:"end"})},0)}function Te(e){const s=e.status>=4;return`<form class="tk-composer" id="tk-composer">
      ${h?`<div class="tk-kind view-seg" role="tablist">
        <button type="button" class="active" data-kind="reply">💬 ${t("Antwort an Anfragenden")}</button>
        <button type="button" data-kind="note">🔒 ${t("Interne Notiz")}</button></div>`:""}
      ${s&&!h?`<p class="hint">${t("Das Ticket ist erledigt. Mit einer Nachricht wird es wieder geöffnet.")}</p>`:""}
      <div class="tk-files-sel" hidden></div>
      <div class="tk-cbar">
        <label class="icon-btn tk-attach" title="${i(t("Datei anhängen"))}">📎<input type="file" multiple hidden /></label>
        <textarea rows="2" spellcheck="true" lang="${V()}" placeholder="${i(h?t("Antwort schreiben …"):t("Nachricht an die IT …"))}"></textarea>
        <button type="submit" class="primary tk-send" title="${i(t("Senden (Strg+Enter)"))}">➤</button>
      </div>
    </form>`}function Ie(e,s){var q;let n="reply",a=[];const o=e.querySelector("#tk-composer"),c=o.querySelector("textarea"),m=o.querySelector(".tk-files-sel"),g=()=>{m.hidden=!a.length,m.innerHTML=a.map((u,r)=>`<span class="file-chip">📎 ${i(u.name)} <button type="button" class="link small" data-rm="${r}">✕</button></span>`).join("")};o.addEventListener("click",u=>{var f,y;const r=u.target,p=(f=r.closest("[data-kind]"))==null?void 0:f.dataset.kind;p&&(n=p,o.querySelectorAll("[data-kind]").forEach(C=>C.classList.toggle("active",C.dataset.kind===p)),o.classList.toggle("is-note",p==="note"),c.placeholder=p==="note"?t("Interne Notiz (nur für die IT sichtbar) …"):t("Antwort schreiben …"));const k=(y=r.closest("[data-rm]"))==null?void 0:y.dataset.rm;k!==void 0&&(a.splice(Number(k),1),g())}),o.querySelector("input[type=file]").addEventListener("change",u=>{const r=u.target;a.push(...Array.from(r.files??[])),r.value="",g()}),c.addEventListener("input",()=>{c.style.height="auto",c.style.height=`${Math.min(220,c.scrollHeight)}px`}),c.addEventListener("keydown",u=>{u.key==="Enter"&&(u.ctrlKey||u.metaKey)&&(u.preventDefault(),o.requestSubmit())}),c.addEventListener("focus",()=>setTimeout(()=>{var u,r;return(r=(u=e.querySelector("#tk-thread"))==null?void 0:u.lastElementChild)==null?void 0:r.scrollIntoView({block:"end"})},300)),o.addEventListener("submit",async u=>{u.preventDefault();const r=c.value.trim();if(!r&&!a.length)return;const p=o.querySelector(".tk-send");p.disabled=!0;try{const k=r.split(/\n{2,}/).map(y=>`<p>${i(y).replace(/\n/g,"<br>")}</p>`).join(""),f=await de(s.id,n,k,a);$==null||$.conversations.push(f.conversation),c.value="",a=[],w(n==="note"?t("Notiz gespeichert."):t("Gesendet.")),E(s.id,!0),L()}catch(k){w(`${t("Nicht gesendet")}: ${k.message}`,!0)}finally{p.disabled=!1}});const v=async(u,r)=>{try{const p=await he(s.id,u);$&&($.ticket={...$.ticket,...p.ticket}),T=T.map(k=>k.id===s.id?{...k,...p.ticket}:k),P(),A(),w(r)}catch(p){w(`${t("Nicht gespeichert")}: ${p.message}`,!0),A()}};e.querySelectorAll(".tk-sel").forEach(u=>u.addEventListener("change",async()=>{const r=u.dataset.field,p=u.value===""?null:Number(u.value);if(r==="status"&&p!==null&&p>=4&&!await ue(`${t("Ticket #{n} auf „{s}“ setzen?",{n:s.id,s:i(M(p))})}`)){u.value=String(s.status);return}v({[r]:p},t("Gespeichert."))})),(q=e.querySelector("[data-take]"))==null||q.addEventListener("click",()=>void v({responderId:(d==null?void 0:d.myAgentId)??null},t("Ticket übernommen.")))}function X(){var s;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    ${h?`<label>${t("Für (E-Mail des Kollegen, leer = ich)")}<input type="email" name="email" placeholder="${i(l==null?void 0:l.email)}" /></label>`:""}
    <label>${t("Betreff")}<input name="subject" required maxlength="250" placeholder="${i(t("z. B. Drucker im 2. OG druckt nicht"))}" /></label>
    <label>${t("Beschreibung")}<textarea name="description" rows="6" spellcheck="true" lang="${V()}" placeholder="${i(t("Was ist passiert? Seit wann? Fehlermeldung?"))}"></textarea></label>
    <div class="tk-row2">
      <label>${t("Priorität")}<select name="priority">${[1,2,3,4].map(n=>`<option value="${n}"${n===2?" selected":""}>${i(N(n))}</option>`).join("")}</select></label>
      ${h&&((s=d==null?void 0:d.groups)!=null&&s.length)?`<label>${t("Gruppe")}<select name="groupId"><option value="">–</option>${d.groups.map(n=>`<option value="${n.id}">${i(n.name)}</option>`).join("")}</select></label>`:""}
    </div>
    <label class="tk-attach-new">📎 ${t("Dateien / Screenshots anhängen")}<input type="file" name="files" multiple /></label>
    <div class="tk-actions"><button type="submit" class="primary">${t("Ticket senden")}</button></div>`,j(`🎫 ${t("Neues IT-Ticket")}`,[e]),setTimeout(()=>{var n;return(n=e.querySelector("[name=subject]"))==null?void 0:n.focus()},50),e.addEventListener("submit",async n=>{var c;n.preventDefault();const a=new FormData(e),o=e.querySelector("[type=submit]");o.disabled=!0,o.textContent=t("Wird gesendet …");try{const m=await pe({subject:String(a.get("subject")??""),description:i(String(a.get("description")??"")).replace(/\n/g,"<br>"),priority:Number(a.get("priority"))||2,email:String(a.get("email")??"")||void 0,groupId:Number(a.get("groupId"))||void 0},a.getAll("files").filter(g=>g.size));(c=document.querySelector(".m-sheet [data-close]"))==null||c.click(),w(t("Ticket #{n} erstellt.",{n:m.ticket.id})),await L(),E(m.ticket.id)}catch(m){w(`${t("Nicht gesendet")}: ${m.message}`,!0),o.disabled=!1,o.textContent=t("Ticket senden")}})}function x(){var n;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    <p>${t("So finden Sie Ihren Schlüssel:")}</p>
    <ol class="tk-steps">
      <li>${t("Freshdesk öffnen und anmelden")}: <a href="https://${i(l==null?void 0:l.domain)}/a/profile/settings">${i(l==null?void 0:l.domain)}</a></li>
      <li>${t("Oben rechts auf Ihr Bild → „Profileinstellungen“")}</li>
      <li>${t("Rechts „API-Schlüssel anzeigen“ → kopieren")}</li>
    </ol>
    <label>${t("Persönlicher API-Schlüssel")}<input name="key" autocomplete="off" spellcheck="false" required /></label>
    <p class="hint">${t("Der Schlüssel wird nur verschlüsselt im MyMonolith-Dienst gespeichert und nie angezeigt. Er wird gegen Ihre E-Mail geprüft.")}</p>
    <div class="tk-actions">
      ${l!=null&&l.agentKeySet?`<button type="button" class="small" data-remove>${t("Schlüssel entfernen")}</button>`:""}
      <button type="submit" class="primary">${t("Speichern")}</button>
    </div>`,j(`🔑 ${t("Freshdesk-Schlüssel")}`,[e]);const s=async a=>{var o;try{const c=await me(a);(o=document.querySelector(".m-sheet [data-close]"))==null||o.click(),w(c.agentKeySet?t("Schlüssel gespeichert – Sie sehen jetzt alle Tickets."):t("Schlüssel entfernt.")),F()}catch(c){w(c.message,!0)}};e.addEventListener("submit",a=>{a.preventDefault(),s(String(new FormData(e).get("key")??"").trim())}),(n=e.querySelector("[data-remove]"))==null||n.addEventListener("click",()=>void s(""))}function Le(){const e=document.createElement("div");e.className="tk-menu",e.innerHTML=`
    ${(l==null?void 0:l.access)==="agent"?`<button type="button" class="menu-item" data-m="key"><span class="mi-icon">🔑</span><span class="mi-label">${l.agentKeySet?t("Freshdesk-Schlüssel ändern"):t("Freshdesk-Schlüssel hinterlegen")}</span></button>`:""}
    <button type="button" class="menu-item" data-m="web"><span class="mi-icon">↗</span><span class="mi-label">${t("Freshdesk im Browser öffnen")}</span></button>
    <div class="tk-lang">${te()}</div>`,j(t("Mehr"),[e]),e.addEventListener("click",s=>{var c,m,g;const n=s.target,a=(c=n.closest("[data-m]"))==null?void 0:c.dataset.m,o=(m=n.closest("[data-lang]"))==null?void 0:m.dataset.lang;if(o)return se(o);a&&((g=document.querySelector(".m-sheet [data-close]"))==null||g.click(),a==="key"&&x(),a==="web"&&D(`https://${l==null?void 0:l.domain}/${h?"a/tickets":"support/tickets"}`))})}const ee=()=>document.body.classList.toggle("phone",ke());ee();var G,R;(R=(G=matchMedia("(max-width: 600px)")).addEventListener)==null||R.call(G,"change",ee);setInterval(()=>{document.visibilityState==="visible"&&l&&l.access!=="none"&&L()},6e4);F();
