import{t,b as U,l as V,a as te,d as se,c as ae}from"./i18n-F4SkutFC.js";import{a as ne,w as ie}from"./theme-B149vYBV.js";import{o as D,b as i,L as W,J as le}from"./util-mgqNoOPl.js";import{F as re,G as oe,H as ce,I as de,t as w,c as ue,n as j,J as pe,K as me,L as he,i as ke,M as be,k as J,N as $e,D as ve}from"./ticketswitch-BkAQkwV5.js";import"./graph-kXCK5PvR.js";import"./preload-helper-DmqPR1C2.js";ne();ie();const $=document.getElementById("app"),B=new URLSearchParams(location.search).get("from")??"",Z="mm-tk-view";let l=null,d=null,h=!1,S="open",T=[],K="",I=null,v=null,H=!1;const z={1:["Niedrig","p1"],2:["Mittel","p2"],3:["Hoch","p3"],4:["Dringend","p4"]},N=e=>{var s;return t(((s=z[e])==null?void 0:s[0])??"–")},M=e=>{var s;return((s=d==null?void 0:d.statuses.find(a=>a.id===e))==null?void 0:s.name)??String(e)},Y=e=>e===2?"st-open":e===3?"st-wait":e>=4?"st-done":"st-other",ge=e=>{var s,a;return e?((a=(s=d==null?void 0:d.agents)==null?void 0:s.find(n=>n.id===e))==null?void 0:a.name)??`#${e}`:t("Nicht zugewiesen")},_=e=>e.split(/[\s.@]+/).filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join("")||"?";function fe(e){const s=new Date(e),a=Math.round((Date.now()-s.getTime())/6e4);return a<1?t("gerade eben"):a<60?t("vor {n} Min.",{n:a}):a<1440?t("vor {n} Std.",{n:Math.round(a/60)}):a<10080?U(Math.round(a/1440),"vor {n} Tag|vor {n} Tagen"):s.toLocaleDateString(ae(),{day:"2-digit",month:"2-digit",year:"2-digit"})}async function F(e=!1){var n;$.innerHTML=`<div class="tk-center"><p class="hint">⏳ ${t("IT-Tickets werden geladen …")}</p></div>`;try{l=await be(e)}catch(c){const o=c.status;$.innerHTML=`<div class="tk-center">
      <h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${o===401||!o?t("Bitte mit Ihrem Microsoft-Konto anmelden."):i(c.message)}</p>
      <button type="button" class="primary" id="tk-login">${t("Anmelden")}</button>
    </div>`,(n=$.querySelector("#tk-login"))==null||n.addEventListener("click",()=>void F(!0));return}if(l.access==="none"){$.innerHTML=`<div class="tk-center">
      ${B?`<p>${J("tickets")}</p>`:""}<h2>🎫 ${t("IT-Tickets")}</h2>
      <p>${t("Für {email} ist das IT-Ticketsystem nicht freigeschaltet.",{email:`<b>${i(l.email)}</b>`})}</p>
      <p class="hint">${t("Freigeschaltet ist, wer im Ticketsystem als Kontakt oder IT-Mitarbeiter eingetragen ist. Bitte bei der IT melden.")}</p>
    </div>`;return}h=l.access==="agent"&&l.agentKeySet;try{S=localStorage.getItem(Z)||"open"}catch{}Q().some(c=>c.id===S)||(S="open"),d=await $e().catch(()=>({statuses:[],priorities:[1,2,3,4]})),ye();const s=new URLSearchParams(location.search),a=Number(s.get("ticket"));await L(),a?E(a):s.get("new")==="1"&&X()}function Q(){return h?[{id:"open",label:t("Offen")},{id:"mine",label:t("Meine")},{id:"unassigned",label:t("Nicht zugewiesen")},{id:"resolved",label:t("Erledigt")},{id:"mine-requests",label:t("Eigene Anfragen")}]:[{id:"open",label:t("Offen")},{id:"all",label:t("Alle")}]}function ye(){const e=(l==null?void 0:l.access)==="agent"&&!l.agentKeySet?`<div class="tk-banner">🔑 ${t("Sie sind IT-Mitarbeiter. Hinterlegen Sie einmal Ihren persönlichen Freshdesk-Schlüssel, um alle Tickets zu bearbeiten.")}
          <button type="button" class="small primary" data-act="key">${t("Schlüssel hinterlegen")}</button></div>`:"";$.innerHTML=`
    <div class="split-shell tk-shell">
      <div id="split-head" class="split-head">
        <div class="tk-head">
          <div class="hdr-top">
            ${B?`<span class="hdr-area">${J("tickets")}</span>`:`<strong class="hdr-title">🎫 ${t("IT-Tickets")}</strong>`}
            <input id="search" type="search" class="tk-search" placeholder="🔎 ${i(t("Suchen: Betreff, Nr., Name …"))}" value="${i(K)}" />
            <div class="hdr-views">
              <span class="seg view-seg tk-views" role="tablist" aria-label="${i(t("Ansicht"))}">${Q().map(s=>`<button type="button" class="seg-btn${s.id===S?" active":""}" data-view="${s.id}" aria-pressed="${s.id===S}">${i(s.label)}</button>`).join("")}</span>
            </div>
            <span class="tk-who" title="${i(l==null?void 0:l.email)}">${i(l==null?void 0:l.name)}${h?` <span class="tk-role">${t("IT")}</span>`:""}</span>
            <button type="button" class="icon-tool" data-act="refresh" title="${i(t("Aktualisieren"))}">⟳</button>
            <button type="button" class="action primary hdr-new" data-act="new">＋<span class="lbl"> ${t("Neues Ticket")}</span></button>
            <button type="button" class="icon-tool hdr-more" data-act="menu" title="${i(t("Mehr"))}">⋯</button>
          </div>
        </div>
        ${e}
      </div>
      <div class="split">
        <div id="pane-list" class="pane pane-list"><div class="view"><section class="tk-list" id="tk-list" aria-label="${i(t("Tickets"))}"></section></div></div>
        <div class="split-handle" role="separator" aria-orientation="vertical" tabindex="0" title="${i(t("Ziehen ändert die Breite · Doppelklick: Standard"))}"></div>
        <div id="pane-detail" class="pane pane-detail"><section class="tk-detail" id="tk-detail" aria-live="polite"></section></div>
      </div>
    </div>`,ve($.querySelector(".split"),"mm-tk-split"),A()}$.addEventListener("click",e=>{var m,k;const s=e.target,a=(m=s.closest("[data-act]"))==null?void 0:m.dataset.act;a==="refresh"?(L(),I&&E(I,!0)):a==="new"?X():a==="key"?x():a==="menu"?qe():a==="back"&&Se(),s.closest('[data-area="tasks"]')?location.href=re(B):a==="web"&&v&&D(v.ticket.url);const n=(k=s.closest("[data-view]"))==null?void 0:k.dataset.view;if(n&&n!==S){S=n;try{localStorage.setItem(Z,n)}catch{}$.querySelectorAll("[data-view]").forEach(g=>{g.classList.toggle("active",g.dataset.view===n),g.setAttribute("aria-selected",String(g.dataset.view===n))}),L()}const c=s.closest("[data-tk]");c&&E(Number(c.dataset.tk));const o=s.closest("a[href]");o&&/^https?:/i.test(o.getAttribute("href")??"")&&(e.preventDefault(),D(o.href))});$.addEventListener("input",e=>{const s=e.target;s.classList.contains("tk-search")&&(K=s.value,P())});async function L(){if(H)return;H=!0;const e=$.querySelector("#tk-list");e&&!T.length&&(e.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade …")}</p>`);try{T=(await oe(S)).tickets.sort((a,n)=>n.updatedAt.localeCompare(a.updatedAt)),P()}catch(s){e&&(e.innerHTML=`<div class="error tk-pad">${i(s.message)}</div>`)}finally{H=!1}}function P(){const e=$.querySelector("#tk-list");if(!e)return;const s=K.trim().toLowerCase(),a=s?T.filter(n=>{var c,o;return`#${n.id} ${n.id} ${n.subject} ${((c=n.requester)==null?void 0:c.name)??""} ${((o=n.requester)==null?void 0:o.email)??""} ${M(n.status)}`.toLowerCase().includes(s)}):T;if(!a.length){e.innerHTML=`<div class="tk-empty"><div class="tk-empty-ico">🎉</div><p>${s?t("Keine Treffer."):t("Keine Tickets in dieser Ansicht.")}</p>
      ${h?"":`<button type="button" class="primary" data-act="new">＋ ${t("Neues Ticket")}</button>`}</div>`;return}e.innerHTML=`<div class="tk-count hint">${U(a.length,"{n} Ticket|{n} Tickets")}</div>${a.map(we).join("")}`}function we(e){var c,o,m,k;const s=e.dueBy&&e.status<4&&new Date(e.dueBy).getTime()<Date.now(),a=h?((c=e.requester)==null?void 0:c.name)??((o=e.requester)==null?void 0:o.email)??"":M(e.status);return`<button type="button" class="tk-row${e.status>=4?"":s||e.priority>=4?" b-urgent":e.status===3?" b-wait":" b-open"}${e.id===I?" active":""}" data-tk="${e.id}">
      <span class="tk-av" aria-hidden="true">${i(_(((m=e.requester)==null?void 0:m.name)??(l==null?void 0:l.name)??"?"))}</span>
      <span class="tk-row-main">
        <span class="tk-row-top"><span class="tk-num">#${e.id}</span><span class="tk-subj">${i(e.subject)}</span></span>
        <span class="tk-row-sub">
          <span class="tk-st ${Y(e.status)}">${i(M(e.status))}</span>
          ${e.priority>=3?`<span class="tk-prio ${(k=z[e.priority])==null?void 0:k[1]}">${i(N(e.priority))}</span>`:""}
          ${s?`<span class="tk-prio p4">${t("überfällig")}</span>`:""}
          ${h?`<span class="tk-meta">${i(a)}${e.responderId?` → ${i(ge(e.responderId))}`:""}</span>`:""}
        </span>
      </span>
      <span class="tk-when">${i(fe(e.updatedAt))}</span>
    </button>`}function Se(){I=null,v=null,document.body.classList.remove("tk-open"),$.querySelectorAll(".tk-row.active").forEach(e=>e.classList.remove("active")),A()}async function E(e,s=!1){I=e,$.querySelectorAll(".tk-row").forEach(n=>n.classList.toggle("active",Number(n.dataset.tk)===e)),document.body.classList.add("tk-open");const a=$.querySelector("#tk-detail");a&&!s&&(a.innerHTML=`<p class="hint tk-pad">⏳ ${t("Lade Ticket #{n} …",{n:e})}</p>`);try{const n=await ce(e);if(I!==e)return;v={ticket:n.ticket,conversations:n.conversations},A()}catch(n){a&&(a.innerHTML=`<div class="tk-dhead"><button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button></div><div class="error tk-pad">${i(n.message)}</div>`)}}function Te(e){return/^image\//.test(e.type)?`<a class="tk-img" href="${i(e.url)}" title="${i(e.name)}"><img src="${i(e.url)}" alt="${i(e.name)}" loading="lazy" /></a>`:`<a class="file-chip" href="${i(e.url)}">📎 ${i(e.name)} <span class="hint">${Math.max(1,Math.round(e.size/1024))} KB</span></a>`}function O(e){return`<div class="tk-msg${e.mine?" mine":""}${e.private?" note":""}">
      <span class="tk-av sm" aria-hidden="true">${i(_(e.author))}</span>
      <div class="tk-bubble">
        <div class="tk-mhead"><b>${i(e.author)}</b>${e.private?` <span class="tk-note-tag">🔒 ${t("Interne Notiz")}</span>`:""}<span class="hint">${i(W(new Date(e.createdAt)))}</span></div>
        <div class="tk-mbody">${le(e.html)}</div>
        ${e.attachments.length?`<div class="tk-files">${e.attachments.map(Te).join("")}</div>`:""}
      </div>
    </div>`}function A(){var q,u;const e=$.querySelector("#tk-detail");if(!e)return;if(!v){e.innerHTML=`<div class="pane-empty"><div>🎫</div><p>${t("Ticket links auswählen.")}</p></div>`;return}const s=v.ticket,a=((q=s.requester)==null?void 0:q.name)??(l==null?void 0:l.name)??"",n=r=>{var p,b;return r.incoming||r.userId===s.requesterId?r.userId===s.requesterId?a:r.fromEmail??t("Kollege"):((b=(p=d==null?void 0:d.agents)==null?void 0:p.find(f=>f.id===r.userId))==null?void 0:b.name)??t("IT-Support")},c=r=>h?!r.incoming&&r.userId===(d==null?void 0:d.myAgentId):r.incoming||r.userId===s.requesterId,o=(r,p,b,f)=>`<select class="tk-sel" data-field="${r}">${f!==void 0?`<option value="">${i(f)}</option>`:""}${b.map(y=>`<option value="${y.id}"${y.id===p?" selected":""}>${i(y.name)}</option>`).join("")}</select>`,m=h?`<div class="tk-props">
        <label>${t("Status")}${o("status",s.status,(d==null?void 0:d.statuses)??[])}</label>
        <label>${t("Priorität")}${o("priority",s.priority,[1,2,3,4].map(r=>({id:r,name:N(r)})))}</label>
        <label>${t("Zuständig")}${o("responderId",s.responderId,(d==null?void 0:d.agents)??[],t("Nicht zugewiesen"))}</label>
        <label>${t("Gruppe")}${o("groupId",s.groupId,(d==null?void 0:d.groups)??[],"–")}</label>
        ${s.responderId!==(d==null?void 0:d.myAgentId)&&(d!=null&&d.myAgentId)?`<button type="button" class="small" data-take>🙋 ${t("Übernehmen")}</button>`:""}
      </div>`:`<div class="tk-props ro">
        <span class="tk-st ${Y(s.status)}">${i(M(s.status))}</span>
        <span class="tk-prio ${(u=z[s.priority])==null?void 0:u[1]}">${t("Priorität")}: ${i(N(s.priority))}</span>
        <span class="hint">${t("Erstellt")}: ${i(W(new Date(s.createdAt)))}</span>
      </div>`,k={html:s.descriptionHtml??"",createdAt:s.createdAt,attachments:s.attachments,author:a,mine:!h};e.innerHTML=`
    <div class="tk-dhead">
      <button type="button" class="tk-back" data-act="back"><b>‹</b> ${t("Tickets")}</button>
      <div class="tk-dtitle"><span class="tk-num">#${s.id}</span> ${i(s.subject)}</div>
      <button type="button" class="icon-btn" data-act="web" title="${i(t("Im Browser öffnen"))}">↗</button>
    </div>
    ${m}
    ${h&&s.requester?`<div class="tk-req hint">${t("Von")}: <b>${i(s.requester.name)}</b> &lt;${i(s.requester.email)}&gt;</div>`:""}
    <div class="tk-thread" id="tk-thread">
      ${O(k)}
      ${v.conversations.map(r=>O({...r,author:n(r),mine:c(r)})).join("")}
    </div>
    ${Ie(s)}`,Le(e,s);const g=e.querySelector("#tk-thread");setTimeout(()=>{var r;return(r=g==null?void 0:g.lastElementChild)==null?void 0:r.scrollIntoView({block:"end"})},0)}function Ie(e){const s=e.status>=4;return`<form class="tk-composer" id="tk-composer">
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
    </form>`}function Le(e,s){var q;let a="reply",n=[];const c=e.querySelector("#tk-composer"),o=c.querySelector("textarea"),m=c.querySelector(".tk-files-sel"),k=()=>{m.hidden=!n.length,m.innerHTML=n.map((u,r)=>`<span class="file-chip">📎 ${i(u.name)} <button type="button" class="link small" data-rm="${r}">✕</button></span>`).join("")};c.addEventListener("click",u=>{var f,y;const r=u.target,p=(f=r.closest("[data-kind]"))==null?void 0:f.dataset.kind;p&&(a=p,c.querySelectorAll("[data-kind]").forEach(C=>C.classList.toggle("active",C.dataset.kind===p)),c.classList.toggle("is-note",p==="note"),o.placeholder=p==="note"?t("Interne Notiz (nur für die IT sichtbar) …"):t("Antwort schreiben …"));const b=(y=r.closest("[data-rm]"))==null?void 0:y.dataset.rm;b!==void 0&&(n.splice(Number(b),1),k())}),c.querySelector("input[type=file]").addEventListener("change",u=>{const r=u.target;n.push(...Array.from(r.files??[])),r.value="",k()}),o.addEventListener("input",()=>{o.style.height="auto",o.style.height=`${Math.min(220,o.scrollHeight)}px`}),o.addEventListener("keydown",u=>{u.key==="Enter"&&(u.ctrlKey||u.metaKey)&&(u.preventDefault(),c.requestSubmit())}),o.addEventListener("focus",()=>setTimeout(()=>{var u,r;return(r=(u=e.querySelector("#tk-thread"))==null?void 0:u.lastElementChild)==null?void 0:r.scrollIntoView({block:"end"})},300)),c.addEventListener("submit",async u=>{u.preventDefault();const r=o.value.trim();if(!r&&!n.length)return;const p=c.querySelector(".tk-send");p.disabled=!0;try{const b=r.split(/\n{2,}/).map(y=>`<p>${i(y).replace(/\n/g,"<br>")}</p>`).join(""),f=await de(s.id,a,b,n);v==null||v.conversations.push(f.conversation),o.value="",n=[],w(a==="note"?t("Notiz gespeichert."):t("Gesendet.")),E(s.id,!0),L()}catch(b){w(`${t("Nicht gesendet")}: ${b.message}`,!0)}finally{p.disabled=!1}});const g=async(u,r)=>{try{const p=await he(s.id,u);v&&(v.ticket={...v.ticket,...p.ticket}),T=T.map(b=>b.id===s.id?{...b,...p.ticket}:b),P(),A(),w(r)}catch(p){w(`${t("Nicht gespeichert")}: ${p.message}`,!0),A()}};e.querySelectorAll(".tk-sel").forEach(u=>u.addEventListener("change",async()=>{const r=u.dataset.field,p=u.value===""?null:Number(u.value);if(r==="status"&&p!==null&&p>=4&&!await ue(`${t("Ticket #{n} auf „{s}“ setzen?",{n:s.id,s:i(M(p))})}`)){u.value=String(s.status);return}g({[r]:p},t("Gespeichert."))})),(q=e.querySelector("[data-take]"))==null||q.addEventListener("click",()=>void g({responderId:(d==null?void 0:d.myAgentId)??null},t("Ticket übernommen.")))}function X(){var s;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
    ${h?`<label>${t("Für (E-Mail des Kollegen, leer = ich)")}<input type="email" name="email" placeholder="${i(l==null?void 0:l.email)}" /></label>`:""}
    <label>${t("Betreff")}<input name="subject" required maxlength="250" placeholder="${i(t("z. B. Drucker im 2. OG druckt nicht"))}" /></label>
    <label>${t("Beschreibung")}<textarea name="description" rows="6" spellcheck="true" lang="${V()}" placeholder="${i(t("Was ist passiert? Seit wann? Fehlermeldung?"))}"></textarea></label>
    <div class="tk-row2">
      <label>${t("Priorität")}<select name="priority">${[1,2,3,4].map(a=>`<option value="${a}"${a===2?" selected":""}>${i(N(a))}</option>`).join("")}</select></label>
      ${h&&((s=d==null?void 0:d.groups)!=null&&s.length)?`<label>${t("Gruppe")}<select name="groupId"><option value="">–</option>${d.groups.map(a=>`<option value="${a.id}">${i(a.name)}</option>`).join("")}</select></label>`:""}
    </div>
    <label class="tk-attach-new">📎 ${t("Dateien / Screenshots anhängen")}<input type="file" name="files" multiple /></label>
    <div class="tk-actions"><button type="submit" class="primary">${t("Ticket senden")}</button></div>`,j(`🎫 ${t("Neues IT-Ticket")}`,[e]),setTimeout(()=>{var a;return(a=e.querySelector("[name=subject]"))==null?void 0:a.focus()},50),e.addEventListener("submit",async a=>{var o;a.preventDefault();const n=new FormData(e),c=e.querySelector("[type=submit]");c.disabled=!0,c.textContent=t("Wird gesendet …");try{const m=await pe({subject:String(n.get("subject")??""),description:i(String(n.get("description")??"")).replace(/\n/g,"<br>"),priority:Number(n.get("priority"))||2,email:String(n.get("email")??"")||void 0,groupId:Number(n.get("groupId"))||void 0},n.getAll("files").filter(k=>k.size));(o=document.querySelector(".m-sheet [data-close]"))==null||o.click(),w(t("Ticket #{n} erstellt.",{n:m.ticket.id})),await L(),E(m.ticket.id)}catch(m){w(`${t("Nicht gesendet")}: ${m.message}`,!0),c.disabled=!1,c.textContent=t("Ticket senden")}})}function x(){var a;const e=document.createElement("form");e.className="tk-newform",e.innerHTML=`
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
    </div>`,j(`🔑 ${t("Freshdesk-Schlüssel")}`,[e]);const s=async n=>{var c;try{const o=await me(n);(c=document.querySelector(".m-sheet [data-close]"))==null||c.click(),w(o.agentKeySet?t("Schlüssel gespeichert – Sie sehen jetzt alle Tickets."):t("Schlüssel entfernt.")),F()}catch(o){w(o.message,!0)}};e.addEventListener("submit",n=>{n.preventDefault(),s(String(new FormData(e).get("key")??"").trim())}),(a=e.querySelector("[data-remove]"))==null||a.addEventListener("click",()=>void s(""))}function qe(){const e=document.createElement("div");e.className="tk-menu",e.innerHTML=`
    ${(l==null?void 0:l.access)==="agent"?`<button type="button" class="menu-item" data-m="key"><span class="mi-icon">🔑</span><span class="mi-label">${l.agentKeySet?t("Freshdesk-Schlüssel ändern"):t("Freshdesk-Schlüssel hinterlegen")}</span></button>`:""}
    <button type="button" class="menu-item" data-m="web"><span class="mi-icon">↗</span><span class="mi-label">${t("Freshdesk im Browser öffnen")}</span></button>
    <div class="tk-lang">${te()}</div>`,j(t("Mehr"),[e]),e.addEventListener("click",s=>{var o,m,k;const a=s.target,n=(o=a.closest("[data-m]"))==null?void 0:o.dataset.m,c=(m=a.closest("[data-lang]"))==null?void 0:m.dataset.lang;if(c)return se(c);n&&((k=document.querySelector(".m-sheet [data-close]"))==null||k.click(),n==="key"&&x(),n==="web"&&D(`https://${l==null?void 0:l.domain}/${h?"a/tickets":"support/tickets"}`))})}const ee=()=>document.body.classList.toggle("phone",ke());ee();var G,R;(R=(G=matchMedia("(max-width: 600px)")).addEventListener)==null||R.call(G,"change",ee);setInterval(()=>{document.visibilityState==="visible"&&l&&l.access!=="none"&&L()},6e4);{const e=document.getElementById("version");e&&(e.textContent=`${t("Monolith IT-Tickets")} 1.9.0`)}F();
