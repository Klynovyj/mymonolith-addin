import{b as o,c as Xe,g as Re,P as Ut,o as rt,f as mt,h as ct,j as Vt,k as jn,r as Fn,e as M,d as Te,m as On,n as _e,p as Un,q as dt,t as Vn,u as Kt,v as Ue,w as Wt,x as Rt,y as Kn,z as ht,A as _t,B as Wn,C as Oe,D as Rn,E as bt,F as on,G as rn,H as _n,I as Yn,s as Ae,J as Ve,K as Gn,L as Zn,M as Jn,N as Ye,O as Qn,Q as Xn,R as es,S as ts,T as ns,U as ss,l as Ie,a as J,V as as,W as is,X as ls,Y as os,Z as rs,_ as cs,$ as ds,i as kt,a0 as us,a1 as ps}from"./util-DtQrqSpb.js";import{s as Yt,m as ve,n as ms,b as cn,o as hs,p as Ke,q as bs,t as fs,g as gs,l as vs,d as ys,f as $s,k as ws,e as Gt,j as Zt,u as ks,h as Ls,v as Ss,w as Ts,x as As,y as Es,z as Ms,A as qs}from"./composemail-zwnvm_kE.js";import{o as dn}from"./chatpost-7M-8PDeT.js";import{a as un,t as Jt,u as xs,w as Is}from"./theme-BmsqZJcV.js";const pn="mm-addin-sound",mn="mm-addin-sent-mails";let le=null;function Hs(){const n=()=>{try{le??(le=new AudioContext),le.resume()}catch{}};window.addEventListener("pointerdown",n,{once:!0,capture:!0}),window.addEventListener("keydown",n,{once:!0,capture:!0})}function oe(){try{return localStorage.getItem(pn)!=="off"}catch{return!0}}function Ds(n){try{localStorage.setItem(pn,n?"on":"off")}catch{}}function hn(){if(oe())try{le??(le=new AudioContext);const n=le.currentTime;for(const[e,i]of[880,1320].entries()){const d=le.createOscillator(),u=le.createGain();d.type="sine",d.frequency.value=i;const c=n+e*.16;u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(.18,c+.02),u.gain.exponentialRampToValueAtTime(1e-4,c+.14),d.connect(u).connect(le.destination),d.start(c),d.stop(c+.15)}}catch{}}function bn(){try{return JSON.parse(localStorage.getItem(mn)??"{}")}catch{return{}}}function fn(n,e){const i=bn();i[n]=[...new Set([...i[n]??[],e])];const d=Object.keys(i);for(const u of d.slice(0,Math.max(0,d.length-200)))delete i[u];try{localStorage.setItem(mn,JSON.stringify(i))}catch{}}const gn=n=>bn()[n]??[];function We(n,e="Name suchen …"){n.classList.add("picker"),n.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${o(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const i=n.querySelector("input"),d=n.querySelector("ul");let u=[],c,m=0,p=[];const S=()=>{const h=i.value.trim().toLowerCase();p=(h?u.filter(f=>f.name.toLowerCase().includes(h)):u).slice(0,8),m=Math.min(m,Math.max(p.length-1,0)),d.innerHTML=p.length?p.map((f,y)=>`<li role="option" data-i="${y}" class="${y===m?"active":""}"><span class="avatar sm">${o(Xe(f.name))}</span>${o(f.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',d.hidden=!1},b=h=>{c=h,i.value=h.name,d.hidden=!0};return i.addEventListener("focus",()=>{i.select(),S()}),i.addEventListener("input",()=>{c=void 0,m=0,S()}),i.addEventListener("keydown",h=>{if(!d.hidden){if(h.key==="ArrowDown")m=Math.min(m+1,p.length-1);else if(h.key==="ArrowUp")m=Math.max(m-1,0);else return h.key==="Enter"&&p[m]?(h.preventDefault(),b(p[m])):h.key==="Escape"?void(d.hidden=!0):void 0;h.preventDefault(),S()}}),d.addEventListener("mousedown",h=>{const f=h.target.closest("li[data-i]");f&&(h.preventDefault(),b(p[Number(f.dataset.i)]))}),i.addEventListener("blur",()=>{d.hidden=!0,c||(c=u.find(h=>h.name.toLowerCase()===i.value.trim().toLowerCase()))}),{setUsers(h,f){u=h;const y=u.find(w=>w.id===f);y&&!i.value&&b(y)},selected:()=>c,focus:()=>i.focus()}}let Ge=null,Ee=null;const vn="mm-addin-comment-order";function Cs(){try{return localStorage.getItem(vn)==="oldest"?"oldest":"newest"}catch{return"newest"}}function Ns(n){try{localStorage.setItem(vn,n)}catch{}}const Qt=n=>{var e;return!!((e=n.raw)!=null&&e.type)&&n.raw.type!=="text"};function Bs(n){const e=[];for(const i of n){const d=e[e.length-1];Qt(i)&&Array.isArray(d)?d.push(i):e.push(Qt(i)?[i]:i)}return e.map(i=>Array.isArray(i)&&i.length===1?i[0]:i)}function zs(n){const e=n.map(c=>{var m;return(m=c.createdAt)==null?void 0:m.getTime()}).filter(c=>!!c).sort((c,m)=>c-m),i=c=>new Date(c).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),d=c=>new Date(c).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),u=e.length?i(e[0])===i(e[e.length-1])?`${i(e[0])}, ${d(e[0])}–${d(e[e.length-1])}`:`${i(e[0])} – ${i(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${n.length} Änderungen <span class="hint">${u}</span></summary>
      ${n.map(c=>Lt(c)).join("")}
    </details>`}function Lt(n,e=!1){var u;const i=((u=n.raw)==null?void 0:u.type)&&n.raw.type!=="text",d=n.files.length?`<ul class="files">${n.files.map(c=>`<li>📎 ${c.url&&/^https:\/\//.test(c.url)?`<a href="${o(c.url)}" data-external>${o(c.name)}</a>`:o(c.name)}${c.size?` <span class="hint">${Ke(c.size)}</span>`:""}</li>`).join("")}</ul>`:"";return i?`<div class="event">${n.html} · ${o(n.author)}${n.createdAt?`, ${Ye(n.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}">
      ${n.avatar?`<img class="avatar" src="${o(n.avatar)}" alt="">`:`<span class="avatar">${o(Xe(n.author))}</span>`}
      <div class="bubble">
        <header><strong>${o(n.author)}</strong>${n.createdAt?` <span class="hint">${Ye(n.createdAt)}</span>`:""}</header>
        ${n.html.trim()?`<div class="body">${rn(n.html)}</div>`:n.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${d}
        ${n.replies.map(c=>Lt(c,!0)).join("")}
      </div>
    </article>`}async function ft(n,e,i,d,u,c){var Ft;Ge=null,Ee=null;const m=await Re().catch(()=>{});n.innerHTML=`
    <div class="view detail">
      <div class="topbar sticky-head">
        <button class="nav-btn" id="back" title="${c?`Zurück zur Hauptaufgabe #${c.number}`:"Zurück zur Aufgabenliste"}">← ${c?`#${c.number}`:"Zurück"}</button>
        <span class="hint grow center">${c?"Unteraufgabe":"Aufgabe"} #${e.number}</span>
        <button class="nav-btn" id="open-web" title="Diese Aufgabe in MyMonolith im Browser öffnen">Im Browser ↗</button>
      </div>
      ${c?`<div class="breadcrumb">↳ Unteraufgabe von <button type="button" class="link" id="to-parent">#${c.number} ${o(c.title)}</button></div>`:""}
      <div id="flash">${d?`<div class="ok">${o(d)}</div>`:""}</div>

      <section class="d-card d-head">
      <div id="title-box" class="title-box"></div>
      <div class="d-sub">#${e.number}${e.creator?` · erstellt von <strong>${o(e.creator)}</strong>`:""}</div>
      <div id="phase-note"></div>
      <details class="d-fold" id="fold-tiles">
      <summary class="d-fold-sum" id="sum-tiles">Status, Fälligkeit, Priorität …</summary>
      <div class="tiles">
        <div class="tile tile-status">
          <span class="tile-label">Status</span>
          <select id="status" class="bare status-select" aria-label="Status"><option>${o(e.status??"…")}</option></select>
          <div class="tile-confirm" id="status-confirm" hidden>
            <button type="button" class="primary small" id="status-ok">✓ Übernehmen</button>
            <button type="button" class="small" id="status-cancel">Abbrechen</button>
          </div>
        </div>
        <div class="tile tile-finish" id="tile-finish">
          <span class="tile-label">Abschluss</span>
          <span id="done-actions" class="done-actions"></span>
        </div>
        <div class="tile" id="tile-due"></div>
        <div class="tile">
          <span class="tile-label">Priorität</span>
          <select id="prio" class="bare" aria-label="Priorität">
            ${Ut.map(t=>`<option value="${t.value}"${t.value===(e.priority??"").toLowerCase()?" selected":""}>${t.label}</option>`).join("")}
          </select>
        </div>
        <div class="tile" id="tile-resp"></div>
      </div>
      </details>
      </section>

      <section class="d-card d-card-fold">
        <details class="d-fold" id="fold-info">
        <summary class="d-fold-sum" id="sum-info">Beteiligte und Beschreibung</summary>
        <div class="d-fold-body">
        <h3 class="d-title">👥 Beteiligte</h3>
        <div id="people" class="people"><p class="hint">Wird geladen …</p></div>
        <h3 class="d-title">📝 Beschreibung</h3>
        <div id="desc" class="desc"></div>
        </div>
        </details>
      </section>

      <section class="d-card d-tabs-card">
      <div class="tabs" role="tablist">
        <button class="tab active" role="tab" data-tab="comments" aria-selected="true">💬 Kommentare <span class="hint" id="count"></span></button>
        <button class="tab" role="tab" data-tab="checklist" aria-selected="false">☑ Checkliste <span class="hint" id="cl-count"></span></button>
        ${c?"":'<button class="tab" role="tab" data-tab="subtasks" aria-selected="false">🧩 Unteraufgaben <span class="hint" id="sub-count"></span></button>'}
        <button class="tab" role="tab" data-tab="files" aria-selected="false">📎 Dateien <span class="hint" id="files-count"></span></button>
        <button class="tab" role="tab" data-tab="activity" aria-selected="false">📋 Aktivität</button>
      </div>
      <div class="tab-panel">
      <form id="composer" class="composer">
        <div id="mail-menu" class="menu" role="menu" hidden></div>
        <div class="composer-head">✍ Neuer Kommentar</div>
        <div id="file-chips" class="file-chips"></div>
        <textarea id="comment" rows="3" placeholder="Nachricht an die Beteiligten …" aria-label="Kommentar"></textarea>
        <div class="composer-bar">
          <button type="button" class="tool-btn" id="mail-btn" title="Text, Datei oder Anhänge der geöffneten Mail einfügen" aria-haspopup="menu" hidden>📧 Mail einfügen</button>
          <label class="tool-btn" title="Datei vom PC anhängen">📎 Datei anhängen<input type="file" id="file-input" multiple hidden></label>
          <button type="button" class="tool-btn" id="chat-btn" title="Ausgewählte Nachrichten aus einem Teams-Chat in diese Aufgabe posten">💬 Aus Teams-Chat</button>
          <span class="hint grow composer-tip">Strg+Enter sendet</span>
          <button class="primary send" type="submit" title="Senden (Strg+Enter)">Senden ➤</button>
        </div>
        <div id="comment-msg"></div>
      </form>
      <div id="comments" class="thread"><p class="hint">Verlauf wird geladen …</p></div>
      <div id="checklist" class="checklist" hidden></div>
      <div id="subtasks" class="subtasks" hidden></div>
      <div id="files" class="files-tab" hidden></div>
      <div id="activity" class="activity" hidden></div>
      </div>
      </section>
    </div>`,document.body.classList.add("plain-bg");const p=t=>n.querySelector(t),S=p("#flash"),b=t=>{S.innerHTML=t,S.scrollIntoView({block:"nearest"})},h=t=>b(`<div class="ok">${o(t)}</div>`),f=t=>b(`<div class="error">${o(M(t))}</div>`),y=()=>u==null?void 0:u();p("#back").addEventListener("click",i),p("#open-web").addEventListener("click",()=>rt(e.url)),p("#comments").addEventListener("click",t=>{const s=t.target.closest("a[data-external]");s&&(t.preventDefault(),rt(s.href))});const w=p("#status"),$=p("#done-actions"),C=p("#phase-note"),W=(m==null?void 0:m.userId)!=null&&e.creatorUserId===m.userId;let x=null;const ce=t=>{e.phase=t,e.raw.StatusID=t==="done"?7:t==="pending"?5:1};function de(){w.className=`bare status-select ${Ae(e.status)}`;const t=(a,l)=>x?x.includes(a):l;C.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${W?"durch Sie":`von <strong>${o(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const s=[];if(t("approve",e.phase==="pending"&&W)&&s.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),t("finish",e.phase==="open")){const a=e.needsApproval&&!W;s.push(`<button class="primary" data-act="finish" title="${a?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${a?"Zur Freigabe":"Erledigt"}</button>`)}t("reopen",e.phase!=="open")&&s.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),$.innerHTML=s.join(""),p("#tile-finish").hidden=!s.length}async function Et(t){const s=[...w.options].find(a=>t.test((a.textContent??"").trim()));return!s||w.value===s.value?!1:(await ct(e.id,s.value),w.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status,!0)}async function tt(){try{const t=await Rt(e.id);x=t.actions,ce(t.phase);const s=t.spaStatusId?[...w.options].find(a=>a.value===t.spaStatusId):void 0;s&&(w.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status)}catch{}de(),B==null||B(),Y==null||Y(),z==null||z()}de(),tt(),mt().then(t=>{w.innerHTML=t.map(s=>`<option value="${o(s.id)}"${s.id===e.statusId||s.name===e.status?" selected":""}>${o(s.name)}</option>`).join(""),e.statusId??(e.statusId=w.value)}).catch(f);const nt=p("#status-confirm"),Mt=()=>w.value!==(e.statusId??w.value);w.addEventListener("change",()=>{nt.hidden=!Mt(),w.classList.toggle("is-pending",Mt())}),p("#status-cancel").addEventListener("click",()=>{e.statusId&&(w.value=e.statusId),nt.hidden=!0,w.classList.remove("is-pending")}),p("#status-ok").addEventListener("click",async()=>{var a;const t=e.statusId??"",s=((a=w.selectedOptions[0])==null?void 0:a.textContent)??"";nt.hidden=!0,w.classList.remove("is-pending"),w.disabled=!0;try{await ct(e.id,w.value),e.statusId=w.value,e.status=s,h(`Status: ${s}`),y(),await tt(),he()}catch(l){w.value=t,f(l)}finally{w.disabled=!1}}),$.addEventListener("click",async t=>{var a;const s=t.target.closest("button[data-act]");if(s){$.querySelectorAll("button").forEach(l=>l.disabled=!0);try{const l=s.dataset.act;l==="finish"?(await Vt(e.id),ce(e.needsApproval&&!W?"pending":"done")):l==="approve"?(await jn(e.id),ce("done")):l==="reopen"&&(await Fn(e.id),ce("open")),await tt();let r="";try{e.phase==="done"&&await Et(/^erledigt$/i)?r=" Status: Erledigt.":l==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await Et(/^zu erledigen$/i)&&(r=" Status: Zu erledigen.")}catch(v){r=` (Status konnte nicht angepasst werden: ${M(v)})`}de(),h(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),r&&h(`${((a=S.textContent)==null?void 0:a.trim())??""}${r}`),ue(),Y(),z(),y(),he()}catch(l){f(l),de()}}});const Q=p("#tile-due");function ue(t=!1){var l;const s=Te(e.due),a=On(e,m);if(t){Q.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?_e(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const r=Q.querySelector("#due-input");r.focus(),Q.querySelector("#due-cancel").addEventListener("click",()=>ue()),Q.querySelector("#due-save").addEventListener("click",async()=>{if(!r.value)return r.focus();try{await Un(e.id,r.value),e.due=new Date(`${r.value}T00:00:00`),h(`Fällig am ${dt(e.due)}`),y(),ue()}catch(v){f(v)}});return}Q.className=`tile due-${s.level}`,Q.innerHTML=`
      <span class="tile-label">Fällig ${a?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${a?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?dt(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?dt(e.due):"–"}</span>`}
      <span class="tile-sub">${o(s.text)}</span>`,(l=Q.querySelector("#due-edit"))==null||l.addEventListener("click",()=>ue(!0))}ue();const R=p("#prio"),qt=()=>R.dataset.p=R.value;qt(),R.addEventListener("change",async()=>{const t=e.priority??"";try{await Vn(e.id,R.value),e.priority=R.value,e.raw.Priority=R.value,qt(),h(`Priorität: ${R.selectedOptions[0].textContent}`),y()}catch(s){R.value=t,f(s)}});const O=p("#tile-resp");function B(t="view",s){var a;if(t==="view"){O.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${o(e.responsible??"–")}</span>
        ${!x||x.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(a=O.querySelector("#resp-edit"))==null||a.addEventListener("click",()=>B("pick"));return}if(t==="pick"){O.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const l=We(O.querySelector("#resp-picker"));Ve().then(r=>l.setUsers(r)).catch(f),l.focus(),O.querySelector("#resp-cancel").addEventListener("click",()=>B()),O.querySelector("#resp-next").addEventListener("click",()=>{const r=l.selected();r?B("confirm",r):l.focus()});return}O.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${o(s.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,O.querySelector("#resp-cancel").addEventListener("click",()=>B()),O.querySelector("#resp-ok").addEventListener("click",async()=>{try{await Gn(e.id,s.id),e.responsible=s.name,e.responsibleUserId=s.userId,h(`Weitergegeben an ${s.name}.`),y(),B(),ue()}catch(l){f(l),B()}})}B();const X=p("#people");let _={administrators:[],participants:[]};const xt={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},xn=(t,s)=>`
    <span class="person-chip" title="${o(s.name)}">
      ${s.picture?`<img class="avatar sm" src="${o(s.picture)}" alt="">`:`<span class="avatar sm">${o(Xe(s.name))}</span>`}
      ${o(s.name)}
      <button type="button" data-rm-person="${t}:${o(s.id)}" aria-label="${o(s.name)} entfernen" title="Entfernen">×</button>
    </span>`;function $e(t){if(X.innerHTML=["administrators","participants"].map(s=>`
        <div class="people-row">
          <span class="people-label">${xt[s]}</span>
          <div class="people-list">
            ${_[s].map(a=>xn(s,a)).join("")||'<span class="hint">niemand</span>'}
            ${t===s?"":`<button type="button" class="add-person" data-add-person="${s}">＋ Hinzufügen</button>`}
          </div>
          ${t===s?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),t){const s=We(X.querySelector("#people-picker"),"Kollegen suchen …"),a=new Set(_[t].map(l=>l.id));Ve().then(l=>s.setUsers(l.filter(r=>!a.has(r.id)))).catch(f),s.focus(),X.querySelector("#people-cancel").addEventListener("click",()=>$e()),X.querySelector("#people-save").addEventListener("click",async()=>{const l=s.selected();if(!l)return s.focus();await It(t,[..._[t],{...l}],`${l.name} als ${xt[t]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function It(t,s,a){try{await Zn(e.id,t,s.map(l=>l.id)),_=await Kt(e.id).catch(()=>({..._,[t]:s})),h(a),y(),$e(),p("#activity").hidden||st(!0)}catch(l){f(l),$e()}}X.addEventListener("click",t=>{const s=t.target,a=s.closest("[data-add-person]");if(a)return $e(a.dataset.addPerson);const l=s.closest("[data-rm-person]");if(l){const[r,v]=l.dataset.rmPerson.split(":"),g=_[r].find(T=>T.id===v);It(r,_[r].filter(T=>T.id!==v),`${(g==null?void 0:g.name)??"Person"} entfernt.`)}}),Kt(e.id).then(t=>{_=t,$e()}).catch(t=>X.innerHTML=`<div class="error">${o(M(t))}</div>`);const ee=p("#activity");let we=1;const Ht={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},In={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},Hn=t=>{const s=t.replace(/^niki\.field\./i,"").replace(/[_\s]/g,a=>a==="_"?"":" ").toLowerCase();return Ht[s]??Ht[s.replace(/\s/g,"")]??t.replace(/^niki\.field\./i,"")},Dt=t=>In[t.replace(/[\s_]/g,"").toLowerCase()]??t;async function st(t=!1){var s;t&&(we=1),we===1&&(ee.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const a=await Jn(e.id,we),l=a.logs.map(r=>`
          <div class="log">
            <div class="log-head"><strong>${o(r.user)}</strong> · ${o(Hn(r.field))}${r.at?`<span class="hint"> · ${Ye(r.at)}</span>`:""}</div>
            <div class="log-change">
              ${r.from?`<span class="log-from">${o(Dt(r.from))}</span> → `:""}<span class="log-to">${o(Dt(r.to)||"–")}</span>
            </div>
          </div>`).join("");we===1?ee.innerHTML=l||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((s=ee.querySelector(".more-activity"))==null||s.remove(),ee.insertAdjacentHTML("beforeend",l)),a.hasMore&&ee.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),we++}catch(a){ee.innerHTML=`<div class="error">${o(M(a))}</div>`}}ee.addEventListener("click",t=>{t.target.closest(".more-activity")&&st()}),n.querySelector(".tabs").addEventListener("click",t=>{const s=t.target.closest(".tab");if(!s)return;const a=s.dataset.tab;n.querySelectorAll(".tab").forEach(l=>{const r=l===s;l.classList.toggle("active",r),l.setAttribute("aria-selected",String(r))});for(const l of["comments","checklist","subtasks","files","activity"]){const r=n.querySelector(`#${l}`);r&&(r.hidden=l!==a)}p("#composer").hidden=a!=="comments",a==="activity"&&st(!0),a==="checklist"&&Dn(),a==="subtasks"&&Ne(),a==="files"&&ze()});const N=p("#checklist");let A=[],pe=null;function Ct(){const t=A.filter(s=>s.done).length;p("#cl-count").textContent=A.length?`${t}/${A.length}`:""}function U(){var a;const t=A.filter(l=>l.done).length,s=A.length?Math.round(t/A.length*100):0;N.innerHTML=`
      ${A.length?`<div class="progress"><div class="progress-bar" style="width:${s}%"></div></div>
        <div class="hint">${t} von ${A.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${A.map((l,r)=>pe===l.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${o(l.id)}" value="${o(l.item)}" aria-label="Punkt umbenennen">
                  <button type="button" class="small primary" data-cl="save" data-id="${o(l.id)}">Speichern</button>
                  <button type="button" class="small" data-cl="cancel">Abbrechen</button></li>`:`<li class="cl-item${l.done?" done":""}">
                  <label class="cl-check"><input type="checkbox" data-cl="toggle" data-id="${o(l.id)}"${l.done?" checked":""}><span class="cl-text" data-cl="edit" data-id="${o(l.id)}">${o(l.item)}</span></label>
                  <span class="cl-tools">
                    <button type="button" class="icon-btn sm" data-cl="up" data-i="${r}" title="Nach oben" aria-label="Nach oben"${r===0?" disabled":""}>▲</button>
                    <button type="button" class="icon-btn sm" data-cl="down" data-i="${r}" title="Nach unten" aria-label="Nach unten"${r===A.length-1?" disabled":""}>▼</button>
                    <button type="button" class="icon-btn sm" data-cl="edit" data-id="${o(l.id)}" title="Umbenennen" aria-label="Umbenennen">✎</button>
                    <button type="button" class="icon-btn sm" data-cl="del" data-id="${o(l.id)}" title="Löschen" aria-label="Löschen">×</button>
                  </span></li>`).join("")||'<li class="hint empty-thread">Noch keine Punkte.</li>'}
      </ul>
      <form class="cl-add" id="cl-add">
        <input id="cl-new" placeholder="Neuer Punkt … (Enter fügt hinzu)" aria-label="Neuer Checklisten-Punkt">
        <button class="primary small" type="submit">＋</button>
      </form>`,Ct(),(a=N.querySelector(".cl-edit"))==null||a.focus()}async function Dn(){try{A=await Ue(e.id),U()}catch(t){N.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function ke(t,s=!0){try{await t(),s&&(A=await Ue(e.id)),y()}catch(a){f(a)}U()}N.addEventListener("click",t=>{const s=t.target.closest("[data-cl]");if(!s)return;const a=s.dataset.cl,l=A.find(r=>r.id===s.dataset.id);if(a==="toggle"&&l)l.done=s.checked,U(),ke(()=>Xn(l.id,l.done),!1);else if(a==="edit"&&l&&(s.tagName==="BUTTON"||t.detail===2))t.preventDefault(),pe=l.id,U();else if(a==="cancel")pe=null,U();else if(a==="save"&&l){const r=N.querySelector(".cl-edit").value.trim();pe=null,r&&r!==l.item?ke(()=>es(e.id,l,r,A.indexOf(l))):U()}else if(a==="del"&&l)ke(()=>ts(l.id));else if(a==="up"||a==="down"){const r=Number(s.dataset.i),v=a==="up"?r-1:r+1;if(v<0||v>=A.length)return;[A[r],A[v]]=[A[v],A[r]],U(),ke(()=>ns(e.id,A.map(g=>g.id)))}}),N.addEventListener("dblclick",t=>{const s=t.target.closest(".cl-text");s&&(t.preventDefault(),pe=s.dataset.id??null,U())}),N.addEventListener("keydown",t=>{var a;t.target.classList.contains("cl-edit")&&(t.key==="Enter"?(t.preventDefault(),(a=N.querySelector('[data-cl="save"]'))==null||a.click()):t.key==="Escape"&&(pe=null,U()))}),N.addEventListener("submit",t=>{t.preventDefault();const s=N.querySelector("#cl-new"),a=s.value.trim();if(!a)return s.focus();ke(()=>ss(e.id,a,A.length)).then(()=>{var l;return(l=N.querySelector("#cl-new"))==null?void 0:l.focus()})}),Ue(e.id).then(t=>{A=t,Ct()}).catch(()=>{});const I=n.querySelector("#subtasks");let te=[],He=!1,De=null;function Nt(){const t=n.querySelector("#sub-count");if(!t)return;const s=te.filter(a=>a.phase==="done"||/^erledigt$/i.test(a.status??"")).length;t.textContent=te.length?`${s}/${te.length}`:""}function Ce(){if(I&&(I.innerHTML=`
      <div class="sub-list">
        ${te.map(t=>{const s=Te(t.due),a=t.phase==="done"||/^erledigt$/i.test(t.status??"");return`
            <div class="sub-item${a?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${o(t.id)}" title="${a?"Erledigt":t.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${a||t.phase==="pending"?" disabled":""}>${a?"✓":t.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${o(t.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${o(t.title)}</span>
                <span class="task-meta"><span class="num">#${t.number}</span>
                  <span class="badge due-${s.level}">${o(s.text)}</span>
                  ${t.status?`<span class="badge ${Ae(t.status)}">${o(t.status)}</span>`:""}
                  ${t.responsible?`<span class="who">${o(t.responsible)}</span>`:""}</span>
              </button>
              ${De===t.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${o(t.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${o(t.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${He?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${_e(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,Nt(),He)){const t=We(I.querySelector("#sub-assignee"));Promise.all([Ve(),Re()]).then(([s,a])=>t.setUsers(s,a.id)).catch(f),I.querySelector("#sub-name").focus(),I.querySelector("#sub-form").addEventListener("submit",async s=>{s.preventDefault();const a=t.selected();if(!a)return t.focus();const l=I.querySelector("#sub-form button[type=submit]");l.disabled=!0;try{const r=await Qn(e.id,{name:I.querySelector("#sub-name").value.trim(),dueAt:I.querySelector("#sub-due").value,assigneeId:a.id});He=!1,h(`Unteraufgabe #${r.number} angelegt.`),y(),await Ne()}catch(r){f(r),l.disabled=!1}})}}async function Ne(){if(I)try{te=await Wt(e.id),Ce()}catch(t){I.innerHTML=`<div class="error">${o(M(t))}</div>`}}I==null||I.addEventListener("click",async t=>{const s=t.target.closest("[data-sub]");if(!s)return;const a=s.dataset.sub,l=te.find(r=>r.id===s.dataset.id);if(a==="form-open"||a==="form-cancel")He=a==="form-open",Ce();else if(a==="open"&&l)await ft(n,l,()=>void ft(n,e,i,void 0,u),void 0,u,e);else if(a==="finish"&&l){s.setAttribute("disabled","");try{await Vt(l.id);const r=await Rt(l.id);if(r.phase==="done"){const g=(await mt()).find(T=>/^erledigt$/i.test(T.name));g&&await ct(l.id,g.id).catch(()=>{})}h(r.phase==="pending"?`#${l.number} abgeschlossen – wartet auf Bestätigung.`:`#${l.number} erledigt.`),y()}catch(r){f(r)}await Ne()}else if(a==="unlink"&&l)De=l.id,Ce();else if(a==="unlink-no")De=null,Ce();else if(a==="unlink-ok"&&l){De=null;try{await Kn(l.id,e.id),h(`#${l.number} ist jetzt eine eigenständige Aufgabe.`),y()}catch(r){f(r)}await Ne()}}),I&&Wt(e.id).then(t=>{te=t,Nt()}).catch(()=>{}),(Ft=n.querySelector("#to-parent"))==null||Ft.addEventListener("click",i);const V=p("#files");let ne=[],at=0,K=[];const Cn=(t,s)=>s?"🖼️":t==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(t)?"📘":/^(xlsx?|csv|ods)$/.test(t)?"📗":/^(pptx?|odp)$/.test(t)?"📙":/^(zip|rar|7z|gz|tar)$/.test(t)?"🗜️":/^(eml|msg)$/.test(t)?"✉️":/^(txt|log|xml|json)$/.test(t)?"📄":"📎";function Bt(){p("#files-count").textContent=ne.length?`(${ne.length})`:""}function Be(){V.innerHTML=`
      <div class="files-tools">
        ${K.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${K.map((t,s)=>`<span class="file-chip">📎 <span class="ellipsis">${o(t.name)}</span> <span class="hint">${Ke(t.size)}</span><button type="button" data-rm-up="${s}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${ne.map(t=>`
          <button type="button" class="file-row" data-file="${o(t.id)}" title="${o(t.name)} öffnen">
            ${t.isImage&&t.thumb?`<img class="file-thumb" src="${o(t.thumb)}" alt="">`:`<span class="file-icon">${Cn(t.ext,t.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${o(t.name)}</span>
              <span class="file-meta">${[t.size?Ke(t.size):"",t.uploadedBy?`von ${o(t.uploadedBy)}`:"",t.uploadedAt?Ye(t.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${t.commentText?`<span class="file-comment">„${o(t.commentText)}${t.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Bt()}async function ze(){try{ne=await ht(e.id),at=Date.now(),Be()}catch(t){V.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function Nn(t){if(Date.now()-at>20*6e4&&(await ze(),t=ne.find(s=>s.id===t.id&&s.name===t.name)??t),!t.url)return f(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));rt(t.url)}V.addEventListener("click",t=>{const s=t.target,a=s.closest("[data-file]");if(a){const r=ne.find(v=>v.id===a.dataset.file);r&&Nn(r);return}const l=s.closest("[data-rm-up]");l?(K.splice(Number(l.dataset.rmUp),1),Be()):s.closest("#upload-cancel")&&(K=[],Be())}),V.addEventListener("change",t=>{var a;const s=t.target;s.id==="upload-input"&&(K=Array.from(s.files??[]),Be(),(a=V.querySelector("#upload-note"))==null||a.focus())}),V.addEventListener("submit",async t=>{t.preventDefault();const s=V.querySelector("#upload-form button[type=submit]"),a=V.querySelector("#upload-msg"),l=V.querySelector("#upload-note").value.trim();s.disabled=!0;try{const r=K.length;await Yt(e.messageId,{note:l||`${r===1?"Datei":`${r} Dateien`} hochgeladen: ${K.map(v=>v.name).join(", ")}`,files:K},v=>a.innerHTML=`<p class="hint">${o(v)}</p>`),K=[],h(`${r===1?"Datei":`${r} Dateien`} hochgeladen.`),y(),await ze()}catch(r){a.innerHTML=`<div class="error">${o(M(r))}</div>`,s.disabled=!1}}),ht(e.id).then(t=>{ne=t,at=Date.now(),Bt()}).catch(()=>{});const se=p("#title-box");function z(t=!1){var a;const s=x?x.includes("edit")&&e.phase==="open":_t(e,m);if(t){se.innerHTML=`
        <form class="title-edit" id="title-form">
          <input id="title-input" maxlength="255" value="${o(e.title)}" aria-label="Titel der Aufgabe">
          <div class="row-btns"><button class="primary small" type="submit">Speichern</button><button class="small" type="button" id="title-cancel">Abbrechen</button></div>
        </form>`;const l=se.querySelector("#title-input");l.focus(),l.select(),se.querySelector("#title-cancel").addEventListener("click",()=>z()),l.addEventListener("keydown",r=>{r.key==="Escape"&&z()}),se.querySelector("#title-form").addEventListener("submit",async r=>{r.preventDefault();const v=l.value.trim();if(!v)return l.focus();if(v===e.title)return z();const g=se.querySelector("button[type=submit]");g.disabled=!0;try{await Wn(e.id,v),e.title=v,e.raw.TaskName=v,h("Titel geändert."),y(),z()}catch(T){g.disabled=!1,f(T)}});return}se.innerHTML=`<h2 class="task-title">${o(e.title)}${s?' <button type="button" class="icon-btn sm title-edit-btn" id="title-edit" title="Titel ändern" aria-label="Titel ändern">✎</button>':""}</h2>`,(a=se.querySelector("#title-edit"))==null||a.addEventListener("click",()=>z(!0))}z();function Pe(){var T;const t=Te(e.due),s=(T=Ut.find(j=>j.value===(e.priority??"").toLowerCase()))==null?void 0:T.label;p("#sum-tiles").innerHTML=[e.status?`<span class="badge ${Ae(e.status)}">${o(e.status)}</span>`:"",e.phase==="pending"?'<span class="badge pending">⏳ wartet auf Bestätigung</span>':e.phase==="done"?'<span class="badge ok">✓ erledigt</span>':"",e.due?`<span class="badge due-${t.level}">${t.level==="overdue"?"⚠ ":""}fällig ${e.due.toLocaleDateString("de-DE")} · ${o(t.text)}</span>`:"",s?`<span>Priorität <strong>${o(s)}</strong></span>`:"",e.responsible?`<span>👤 ${o(e.responsible)}</span>`:""].filter(Boolean).join("");const a=X.querySelectorAll(".people-row"),l=j=>{var G;return((G=a[j])==null?void 0:G.querySelectorAll(".person-chip").length)??0},r=l(0),v=l(1),g=!!Oe(e.description??"").trim();p("#sum-info").innerHTML=`
      <span>👥 ${a.length?r+v?`${r} ${r===1?"Admin":"Admins"}, ${v} Teilnehmer`:"niemand beteiligt":"Beteiligte"}</span>
      <span>📝 ${g?o(Oe(e.description).slice(0,80))+(Oe(e.description).length>80?" …":""):"keine Beschreibung"}</span>`}let zt;const Bn=new MutationObserver(()=>{clearTimeout(zt),zt=window.setTimeout(Pe,50)});for(const t of["#fold-tiles .tiles","#people","#desc"])Bn.observe(p(t),{subtree:!0,childList:!0,attributes:!0,characterData:!0});p("#prio").addEventListener("change",()=>setTimeout(Pe,1500)),p("#status").addEventListener("change",()=>setTimeout(Pe,1500));const me=p("#desc");function Y(t=!1){var l;const s=x?x.includes("edit")&&e.phase==="open":_t(e,m);if(t){me.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${o(Oe(e.description))}</textarea>
        ${Rn(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const r=me.querySelector("#desc-input");r.focus(),me.querySelector("#desc-cancel").addEventListener("click",()=>Y()),me.querySelector("#desc-save").addEventListener("click",async()=>{const v=r.value.trim()?bt(r.value):"";try{await on(e.id,v),e.description=v,e.raw.TaskDescription=v,h("Beschreibung gespeichert."),y(),Y()}catch(g){f(g)}});return}const a=e.description.trim()?`<div class="desc-body">${rn(e.description)}</div>`:`<div class="hint">${s?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;me.innerHTML=`${a}${s?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(l=me.querySelector("#desc-edit"))==null||l.addEventListener("click",()=>Y(!0)),Pe()}Y();const ae=p("#comments");async function he(t=!1){var s;try{const a=[];for(let g=1;g<=10;g++){const T=await _n(e.messageId,g,50);if(a.push(...T.comments),!T.hasMore)break}const l=Cs()==="newest";a.sort((g,T)=>{var j,G;return((((j=g.createdAt)==null?void 0:j.getTime())??0)-(((G=T.createdAt)==null?void 0:G.getTime())??0))*(l?-1:1)});const r=a.filter(g=>{var T;return!((T=g.raw)!=null&&T.type)||g.raw.type==="text"}).length;p("#count").textContent=r?`(${r})`:"";const v=`<div class="thread-tools">
          <span class="thread-title">Verlauf${r?` · ${r} ${r===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${l?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;ae.innerHTML=a.length?v+Bs(a).map(g=>Array.isArray(g)?zs(g):Lt(g)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(s=ae.querySelector("#order-toggle"))==null||s.addEventListener("click",()=>{Ns(l?"oldest":"newest"),he()}),ae.querySelectorAll(".bubble > .body").forEach(g=>{if(g.scrollHeight<=320)return;g.classList.add("clamped");const T=document.createElement("button");T.type="button",T.className="link small more",T.textContent="Mehr anzeigen ▾",T.addEventListener("click",()=>{const j=g.classList.toggle("clamped");T.textContent=j?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),g.after(T)}),t&&(l?ae.scrollIntoView({block:"start"}):(ae.lastElementChild??ae).scrollIntoView({block:"end"}))}catch(a){ae.innerHTML=`<div class="error">${o(M(a))}</div>`}}const je=p("#composer"),P=p("#comment"),it=p("#file-input");p("#chat-btn").addEventListener("click",()=>dn({task:e,onClose:t=>{t&&(y(),he(!0),ze())}}));const Pt=p("#file-chips"),be=p("#comment-msg"),lt=p("#mail-btn"),H=p("#mail-menu");let ie=[],E=null;const Fe=(t,s,a,l,r="")=>`<span class="file-chip ${r}">${t} <span class="ellipsis">${o(s)}</span>${a?` <span class="hint">${Ke(a)}</span>`:""}<button type="button" data-rm="${l}" aria-label="Entfernen">×</button></span>`;function Le(){const t=E;Pt.innerHTML=[...t!=null&&t.text?[Fe("📧",`Mailtext: ${t.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...t!=null&&t.eml?[Fe("📄",t.eml.name,t.eml.blob.size,"mail-eml","mail")]:[],...((t==null?void 0:t.atts)??[]).map((s,a)=>Fe("📎",s.name,s.size,`mail-att:${a}`)),...ie.map((s,a)=>Fe("📎",s.name,s.size,`file:${a}`))].join("")}const zn=t=>((!E||E.mail.key!==t.key)&&(E={mail:t,text:!1,atts:[]}),E);function ot(){const t=ve();lt.hidden=!t||gn(t.key).includes(e.number),t||(H.hidden=!0),E&&(!t||t.key!==E.mail.key)&&(E=null,Le())}function jt(){var v;const t=ve();if(!t)return;const s=(E==null?void 0:E.mail.key)===t.key?E:null,a=t.attachments.filter(g=>!g.isInline),l=bs(),r=(g,T,j,G,Pn=!1,Ot="")=>`<button type="button" role="menuitem" data-act="${g}"${Pn||G?" disabled":""}${Ot?` title="${o(Ot)}"`:""}>
        <span>${T}</span><span class="grow">${o(j)}</span>${G?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;H.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${o(t.subject||"(ohne Betreff)")}</div>
      ${r("text","📧","Mailtext als Inhalt einfügen",!!(s!=null&&s.text))}
      ${r("eml","📄","Mail als Datei anhängen (.eml)",!!(s!=null&&s.eml),!l,l?"":"In dieser Outlook-Version nicht verfügbar")}
      ${r("atts","📎",`Anhänge der Mail übernehmen (${a.length})`,!!s&&a.length>0&&a.every(g=>s.atts.includes(g)),a.length===0,a.length?"":"Die Mail hat keine Anhänge")}`,H.hidden=!1,(v=H.querySelector("button:not([disabled])"))==null||v.focus()}lt.addEventListener("click",t=>{t.stopPropagation(),H.hidden?jt():H.hidden=!0}),document.addEventListener("click",t=>{!H.hidden&&!H.contains(t.target)&&(H.hidden=!0)}),H.addEventListener("keydown",t=>{t.key==="Escape"&&(H.hidden=!0,lt.focus())}),H.addEventListener("click",async t=>{const s=t.target.closest("button[data-act]"),a=ve();if(!s||!a)return;t.stopPropagation();const l=zn(a);if(s.dataset.act==="text")l.text=!0;else if(s.dataset.act==="atts")l.atts=a.attachments.filter(r=>!r.isInline);else if(s.dataset.act==="eml"){s.disabled=!0,s.querySelector(".grow").textContent="Mail wird geladen …";try{l.eml=await ms(a)}catch(r){be.innerHTML=`<div class="error">${o(M(r))}</div>`}}H.hidden=!0,Le(),P.focus()}),it.addEventListener("change",()=>{ie=[...ie,...Array.from(it.files??[])],it.value="",Le()}),Pt.addEventListener("click",t=>{var r;const s=(r=t.target.closest("[data-rm]"))==null?void 0:r.dataset.rm;if(!s)return;const[a,l]=s.split(":");a==="file"?ie.splice(Number(l),1):E&&(a==="mail-text"?E.text=!1:a==="mail-eml"?E.eml=void 0:a==="mail-att"&&E.atts.splice(Number(l),1),!E.text&&!E.eml&&!E.atts.length&&(E=null)),Le()}),P.addEventListener("input",()=>{P.style.height="auto",P.style.height=`${Math.min(Math.max(P.scrollHeight,72),260)}px`}),P.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&je.requestSubmit()}),je.addEventListener("submit",async t=>{t.preventDefault();const s=P.value,a=E;if(!s.trim()&&!ie.length&&!a)return P.focus();const l=je.querySelector("button[type=submit]");l.disabled=!0,be.innerHTML="";try{const r=await Yt(e.messageId,{note:s,mailText:a!=null&&a.text?a.mail:void 0,eml:a==null?void 0:a.eml,mailAttachments:a==null?void 0:a.atts,files:ie},v=>be.innerHTML=`<p class="hint">${o(v)}</p>`);a&&(fn(a.mail.key,e.number),cn(a.mail.conversationId,e)),P.value="",P.style.height="auto",ie=[],E=null,Le(),ot(),be.innerHTML=`<div class="ok">${o(hs(r,!!a))}</div>`,setTimeout(()=>be.innerHTML="",6e3),y(),await he(!0)}catch(r){be.innerHTML=`<div class="error">${o(M(r))}</div>`}finally{l.disabled=!1}}),ot(),Ge=ot,Ee=()=>{je.scrollIntoView({block:"end"}),jt()},await he(),e.unread>0&&Yn(e.messageId).then(()=>{e.unread=0,y()}).catch(()=>{})}let fe=[];const Xt=n=>({taskId:n.id,messageId:n.messageId,number:n.number,title:n.title});function ut(n,e,i=""){const d=Te(n.due);return`
    <button type="button" class="task-row card due-${d.level}${e?" is-selected":""}" data-pick="${o(n.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="num">#${n.number}</span>
          <span class="badge due-${d.level}">${o(d.text)}</span>
          ${n.status?`<span class="badge ${Ae(n.status)}">${o(n.status)}</span>`:""}
          ${i?`<span class="badge suggest">${o(i)}</span>`:""}
        </span>
      </span>
    </button>`}async function Ps(n){const e=document.createElement("div");if(n.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!fs()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{fe=(await Ie()).filter(b=>!J(b))}catch(b){e.innerHTML=`<div class="pad"><div class="error">${o(M(b))}</div></div>`;return}let i=await gs()??{tasks:[],withAttachments:!0};const d=vs(fe,await $s(),ys());let u=!1;!i.tasks.length&&d.length&&!await ws()&&(i={...i,tasks:[Xt(d[0].task)]},await Gt(i).catch(()=>{}),Zt({chosen:i.tasks}),u=!0);let c="";const m=b=>i.tasks.some(h=>h.taskId===b),p=()=>{const b=c.trim().toLowerCase(),h=b?fe.filter($=>$.title.toLowerCase().includes(b)||String($.number).includes(b.replace(/^#/,""))).slice(0,40):fe.filter($=>!d.some(C=>C.task.id===$.id)&&!m($.id)).slice(0,40),f=i.tasks.map($=>fe.find(C=>C.id===$.taskId)??null),y=d.filter($=>!m($.task.id)),w=i.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${w?`<div class="compose-choice">
              <div class="hint">${u?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${w} ${w===1?"Aufgabe":"Aufgaben"}:</div>
              ${f.map(($,C)=>$?ut($,!0):`<div class="card pad">#${i.tasks[C].number} ${o(i.tasks[C].title)}</div>`).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${w===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${i.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${y.length?`<h3 class="compose-sub">Vorschläge</h3>${y.map($=>ut($.task,!1,$.why)).join("")}`:""}
        <h3 class="compose-sub">${w?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${o(c)}">
        <div class="compose-list">${h.map($=>ut($,m($.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${Ls()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},S=async b=>{try{await Gt(b),i=b,u=!1,Zt({chosen:b.tasks}),p()}catch(h){const f=e.querySelector("#compose-msg");f&&(f.innerHTML=`<div class="error">${o(M(h))}</div>`)}};e.addEventListener("click",b=>{const h=b.target,f=h.closest("[data-pick]");if(f){const y=f.dataset.pick,w=fe.find($=>$.id===y);if(!w)return;S({...i,tasks:m(y)?i.tasks.filter($=>$.taskId!==y):[...i.tasks,Xt(w)]})}else h.closest("#clear-choice")&&S({...i,tasks:[]})}),e.addEventListener("change",b=>{const h=b.target;h.id==="with-att"&&S({...i,withAttachments:h.checked}),h.id==="auto-suggest"&&ks(h.checked)}),e.addEventListener("input",b=>{const h=b.target;if(h.id!=="search")return;c=h.value;const f=h.selectionStart;p();const y=e.querySelector("#search");y.focus(),y.setSelectionRange(f,f)}),p()}const js=n=>n.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function Fs(n,e,i,d){const u=new Date(Date.now()+6048e5);n.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${o(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${o(e?js(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${_e(u)}" min="${_e(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${Ss(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const c=f=>n.querySelector(f),m=c("#f-new"),p=n.querySelector("#with-mail"),S=c("#new-msg"),b=f=>S.innerHTML=f;c("#cancel").addEventListener("click",d),p==null||p.addEventListener("change",()=>c("#atts").hidden=!p.checked);const h=We(c("#assignee"));Promise.all([Ve(),Re()]).then(([f,y])=>h.setUsers(f,y.id)).catch(f=>b(`<div class="error">Personenliste: ${o(M(f))}</div>`)),c("#name").focus(),m.addEventListener("submit",async f=>{f.preventDefault();const y=h.selected();if(!y){b('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),h.focus();return}const w=m.querySelector("button[type=submit]");w.disabled=!0;try{b('<p class="hint">Aufgabe wird angelegt …</p>');const $=await as({name:c("#name").value.trim(),dueAt:c("#due").value,assigneeId:y.id}),C=c("#desc").value;let W=`Aufgabe #${$.number||""} angelegt.`;if(C.trim())try{await on($.id,bt(C))}catch{await is($.messageId,bt(C)).catch(()=>{})}try{if(e&&(p!=null&&p.checked)){const x=Ts(c("#atts"),e),ce=await As($.messageId,e,x,"",de=>b(`<p class="hint">${o(de)}</p>`));W+=" "+Es(x.length,ce.shortened),fn(e.key,$.number),cn(e.conversationId,{id:$.id,number:$.number,title:c("#name").value.trim()})}}catch(x){W+=` Hinweis: ${M(x)}`}i($,W)}catch($){b(`<div class="error">${o(M($))}</div>`),w.disabled=!1}})}un();const k=document.getElementById("app"),St=document.getElementById("logout-link");function Os(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function et(n){Xs(),St.hidden=!0;const e=rs()??Os();k.innerHTML=`
    <form id="f-email" class="form pad">
      <p>Melden Sie sich einmalig an. Danach bleibt das Add-in angemeldet.</p>
      ${n?`<div class="error">${o(n)}</div>`:""}
      <label>E-Mail-Adresse<input id="email" type="email" required autocomplete="email" value="${o(e)}"></label>
      <button class="primary block" type="submit">Code per E-Mail anfordern</button>
    </form>
    <form id="f-code" class="form pad" hidden>
      <p>Wir haben einen Code an <strong id="sent-to"></strong> gesendet.</p>
      <label>Code<input id="code" inputmode="numeric" autocomplete="one-time-code" required></label>
      <button class="primary block" type="submit">Anmelden</button>
      <button type="button" class="link" id="back">Andere E-Mail-Adresse</button>
      <div id="code-error"></div>
    </form>`;const i=k.querySelector("#f-email"),d=k.querySelector("#f-code"),u=k.querySelector("#email"),c=k.querySelector("#code"),m=k.querySelector("#code-error");i.addEventListener("submit",async p=>{p.preventDefault();const S=i.querySelector("button");S.disabled=!0;try{await cs(u.value.trim()),k.querySelector("#sent-to").textContent=u.value.trim(),i.hidden=!0,d.hidden=!1,c.focus()}catch(b){et(M(b))}finally{S.disabled=!1}}),d.addEventListener("submit",async p=>{p.preventDefault();const S=d.querySelector("button.primary");S.disabled=!0,m.innerHTML="";try{await ds(u.value.trim(),c.value.trim()),await re(),await Mn()}catch(b){m.innerHTML=`<div class="error">${o(M(b))}</div>`}finally{S.disabled=!1}}),k.querySelector("#back").addEventListener("click",()=>{d.hidden=!0,i.hidden=!1})}const yn="mm-addin-filters",Ze=(n="")=>({time:"all",owner:"all",unread:!1,status:"",q:n});function Us(){try{return{...Ze(),...JSON.parse(localStorage.getItem(yn)??"{}"),q:""}}catch{return Ze()}}function en(n){try{localStorage.setItem(yn,JSON.stringify({...n,q:""}))}catch{}}let q=[],Me=null,gt=[],vt=[];const xe=n=>/erledigt/i.test(n.status),Tt=()=>xe(L)?Me??[]:q;async function tn(){if(Me)return;const n=k.querySelector("#list");n&&(n.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await Ie("status_id=7"),i=new Set;Me=[...e,...gt].filter(d=>!i.has(d.id)&&i.add(d.id))}catch(e){Me=[...gt],n&&(n.innerHTML=`<div class="error">${o(M(e))}</div>`)}}let D,L=Us(),Z=!1,Je=!1;function pt(){const n=new Date;return n.setHours(0,0,0,0),n}const qe={overdue:n=>!J(n)&&!!n.due&&n.due<pt(),week:n=>!J(n)&&!!n.due&&n.due>=pt()&&n.due<new Date(pt().getTime()+7*864e5),assigned:n=>(D==null?void 0:D.userId)!=null&&n.responsibleUserId===D.userId,created:n=>(D==null?void 0:D.userId)!=null&&n.creatorUserId===D.userId,unread:n=>n.unread>0};function yt(n,e){const i=e.q.trim().toLowerCase();return n.filter(d=>(e.time==="all"||qe[e.time](d))&&(e.owner==="all"||qe[e.owner](d))&&(!e.unread||qe.unread(d))&&(!e.status||xe(e)||d.status===e.status)&&(!i||d.title.toLowerCase().includes(i)||String(d.number).includes(i)))}const $n=n=>n.time!=="all"||n.owner!=="all"||n.unread||!!n.status,wn=new Map,kn=new Map;async function Vs(n){const e=[...n],i=async()=>{for(let d=e.shift();d;d=e.shift())try{const[u,c]=await Promise.all([Ue(d.id),ht(d.id).catch(()=>[])]);wn.set(d.id,{done:u.filter(m=>m.done).length,total:u.length}),kn.set(d.id,c.length)}catch{}};if(await Promise.all([i(),i(),i(),i()]),k.querySelector("#list")){const d=window.scrollY;F(),window.scrollTo(0,d)}}function Ks(n){const e=J(n),i=e?{text:n.due?`✓ fällig war ${n.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:Te(n.due),d=(D==null?void 0:D.userId)!=null&&n.responsibleUserId===D.userId,u=wn.get(n.id),c=ps(n),m=kn.get(n.id),p=[`<span class="num" title="Aufgabennummer">#${n.number}</span>`,u&&u.total?`<span class="${u.done===u.total?"complete":""}" title="Checkliste: ${u.done} von ${u.total} erledigt">☑ ${u.done}/${u.total}</span>`:"",c.total?`<span class="${c.done===c.total?"complete":""}" title="Unteraufgaben: ${c.done} von ${c.total} erledigt">🧩 ${c.done}/${c.total}</span>`:"",m?`<span title="${m} Dateien">📎 ${m}</span>`:"",`<span title="${n.comments} Kommentare">💬 ${n.comments}</span>`].filter(Boolean).join("");return`
    <button class="task-row card due-${i.level}${e?" is-done":""}${wt.has(n.id)?" fresh":""}" data-id="${o(n.id)}">
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="badge due-${i.level}">${o(i.text)}</span>
          ${n.status?`<span class="badge ${Ae(n.status)}">${o(n.status)}</span>`:""}
          ${n.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${o(n.creator??"den Ersteller")}">⏳ Bestätigung</span>`:""}
        </span>
      </span>
      <span class="task-side">
        ${n.unread?`<span class="unread-dot" title="${n.unread} ungelesene Nachrichten">${n.unread}</span>`:""}
        <span class="side-info">${p}</span>
      </span>
      ${n.responsible&&!d?n.responsiblePicture?`<img class="avatar who-avatar" src="${o(n.responsiblePicture)}" alt="${o(n.responsible)}" title="Verantwortlich: ${o(n.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${o(n.responsible)}">${o(Xe(n.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function Ws(n){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const d of n)d.due?qe.overdue(d)?e.Überfällig.push(d):qe.week(d)?e["Nächste 7 Tage"].push(d):e.Später.push(d):e["Ohne Fälligkeit"].push(d);const i=(d,u)=>{var c,m;return(((c=d.due)==null?void 0:c.getTime())??0)-(((m=u.due)==null?void 0:m.getTime())??0)};return Object.entries(e).filter(([,d])=>d.length).map(([d,u])=>[d,u.sort(i)])}function ge(n,e,i,d,u=""){return`<button class="chip ${u}${e?" active":""}" ${d} aria-pressed="${e}">${o(n)} <span class="count">${i}</span></button>`}function Rs(){const n=k.querySelector("#filters");if(!n)return;const e=u=>yt(Tt(),{...L,...u}).length,i=q.map(u=>u.status).filter(Boolean),d=[...new Set([...vt,...i,...L.status?[L.status]:[]])];n.innerHTML=`
    ${ge("Alle",!$n(L),yt(q,Ze(L.q)).length,'data-all="1"')}
    ${ge("⚠ Überfällig",L.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${ge("Diese Woche",L.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${ge("👤 Mir",L.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned" title="Mir zugewiesen"')}
    ${ge("✎ Von mir",L.owner==="created",e({owner:"created"}),'data-owner="created" title="Von mir erstellt"')}
    ${ge("● Neu",L.unread,e({unread:!0}),'data-unread="1" title="Mit ungelesenen Nachrichten"',"tone-brand")}
    <select id="status-filter" class="chip-select${L.status?" active":""}" aria-label="Status filtern">
      <option value="">Status: alle</option>
      ${d.map(u=>`<option${u===L.status?" selected":""}>${o(u)}</option>`).join("")}
    </select>`}const Ln="mm-addin-collapsed",Sn="mm-addin-density";function _s(){try{return new Set(JSON.parse(localStorage.getItem(Ln)??"[]"))}catch{return new Set}}const Se=_s();function Ys(n){Se.has(n)?Se.delete(n):Se.add(n);try{localStorage.setItem(Ln,JSON.stringify([...Se]))}catch{}}function ye(){try{return localStorage.getItem(Sn)==="compact"}catch{return!1}}function Gs(n){try{localStorage.setItem(Sn,n?"compact":"comfort")}catch{}}const Zs={Überfällig:"danger","Nächste 7 Tage":"warn",Später:"neutral","Ohne Fälligkeit":"neutral",Erledigt:"ok","Passt zur geöffneten Mail":"info"};function nn(n,e){const i=Se.has(n);return`<section class="group tone-${Zs[n]??"neutral"}${i?" closed":""}">
      <button type="button" class="group-head" data-group="${o(n)}" aria-expanded="${!i}">
        <span class="caret">${i?"▸":"▾"}</span> ${o(n)} <span class="count">${e.length}</span>
      </button>
      ${i?"":`<div class="group-body">${e.map(Ks).join("")}</div>`}
    </section>`}function F(){var c;const n=k.querySelector("#list");if(!n)return;const e=yt(Tt(),L),i=new Set((((c=ve())==null?void 0:c.subject)??"").match(/\d{4,}/g)??[]),d=q.filter(m=>i.has(String(m.number))),u=d.length?nn("Passt zur geöffneten Mail",d):"";n.innerHTML=u+(e.length?(xe(L)?[["Erledigt",[...e].sort((m,p)=>{var S,b;return(((S=p.due)==null?void 0:S.getTime())??0)-(((b=m.due)==null?void 0:b.getTime())??0)})]]:Ws(e)).map(([m,p])=>nn(m,p)).join(""):`<div class="empty">${$n(L)||L.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),n.classList.toggle("compact",ye()),Rs()}function Tn(){const n=ve();return Z&&n?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${o(n.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    ${n&&gn(n.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function $t(){var e;const n=k.querySelector("#actions");n&&(n.innerHTML=Tn(),n.hidden=!n.innerHTML.trim()),(e=k.querySelector("#list"))==null||e.classList.toggle("picking",Z)}async function re(n=!0){if(St.hidden=!1,document.body.classList.remove("plain-bg"),Ms())return Ps(k);(n||!q.length)&&(k.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(D??(D=await Re().catch(()=>{})),n||!q.length){const u=await Ie();q=u.filter(c=>!J(c)),gt=u.filter(c=>J(c)),Me=null,xe(L)&&await tn()}vt.length||(vt=(await mt().catch(()=>[])).map(u=>u.name)),Je=!1,En(),Qs(),n&&Vs(q)}catch(u){if(u instanceof os&&u.status===401)return et(u.message);k.innerHTML=`<div class="error">${o(M(u))}</div>`;return}const e=Tn();k.innerHTML=`
    <div class="view">
      <div class="sticky-head list-head">
        <div class="toolbar">
          <strong class="grow">Meine Aufgaben <span class="hint">${q.length}</span></strong>
          <button class="icon-tool" id="density" title="${ye()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"}">${ye()?"▤":"☰"}</button>
          <button class="icon-tool" id="refresh" title="Liste neu laden">⟳</button>
          <button class="icon-tool" id="sound" title="${oe()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"}">${oe()?"🔔":"🔕"}</button>
          <button class="icon-tool" id="theme" title="Design anpassen: Hell/Dunkel, Hintergrund, Farben" aria-haspopup="menu">🎨</button>
        </div>
        <div class="head-row">
          <input id="search" type="search" placeholder="🔎 Suchen (Titel, Nr.)" value="${o(L.q)}">
          <button class="action primary" id="new-task" title="Neue Aufgabe in MyMonolith anlegen">＋ Neu</button>
          <button class="action" id="from-chat" title="Ausgewählte Nachrichten aus einem Teams-Chat an eine Aufgabe posten oder den Chat verknüpfen">💬 Aus Chat</button>
        </div>
        <div id="actions" class="actions-bar"${e.trim()?"":" hidden"}>${e}</div>
        <div id="filters" class="quick-filters"></div>
        <div id="theme-menu" class="theme-menu" role="menu" hidden></div>
      </div>
      <div id="list" class="${Z?"picking":""}"></div>
    </div>`;const i=k.querySelector("#search");i.addEventListener("input",()=>{L.q=i.value,F()});const d=k.querySelector("#filters");d.addEventListener("click",u=>{const c=u.target.closest("button");c&&(c.dataset.all?L=Ze(L.q):c.dataset.time?L.time=L.time===c.dataset.time?"all":c.dataset.time:c.dataset.owner?L.owner=L.owner===c.dataset.owner?"all":c.dataset.owner:c.dataset.unread&&(L.unread=!L.unread),en(L),F())}),d.addEventListener("change",u=>{const c=u.target;c.id==="status-filter"&&(L.status=c.value,en(L),xe(L)?tn().then(F):F())}),k.querySelector("#list").addEventListener("click",u=>{const c=u.target.closest("[data-group]");if(c)return Ys(c.dataset.group),F();const m=u.target.closest(".task-row"),p=Tt().find(b=>b.id===(m==null?void 0:m.dataset.id))??q.find(b=>b.id===(m==null?void 0:m.dataset.id));if(!p)return;const S=Z;Z=!1,At(p,void 0,S)}),F()}async function At(n,e,i=!1){const d=window.scrollY;window.scrollTo(0,0),await ft(k,n,()=>{re(Je),window.scrollTo(0,d)},e,()=>Je=!0),i&&(Ee==null||Ee())}function sn(n){window.scrollTo(0,0),Fs(k,n?ve():null,async(e,i)=>{q=(await Ie().catch(()=>q)).filter(u=>!J(u));const d=q.find(u=>u.id===e.id||e.number&&u.number===e.number);d?await At(d,i):(await re(!1),k.insertAdjacentHTML("afterbegin",`<div class="ok">${o(i)}</div>`))},()=>void re(!1))}document.addEventListener("click",n=>{const e=k.querySelector("#theme-menu"),i=n.composedPath().some(d=>d instanceof HTMLElement&&(d.id==="theme-menu"||d.id==="theme"));e&&!e.hidden&&!i&&(e.hidden=!0)});k.addEventListener("click",n=>{const e=n.target;if(e.closest("#new-task"))sn(!1);else if(e.closest("#from-chat"))dn({tasks:q,onClose:i=>i&&void re()});else if(e.closest("#new-from-mail"))sn(!0);else if(e.closest("#refresh"))re();else if(e.closest("#density")){Gs(!ye());const i=k.querySelector("#density");i&&(i.textContent=ye()?"▤":"☰",i.title=ye()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"),F()}else if(e.closest("#theme")){const i=k.querySelector("#theme-menu");i&&(i.hidden=!i.hidden,i.hidden||(i.innerHTML=Jt()))}else if(e.closest("#theme-menu button.opt")){const i=e.closest("#theme-menu button.opt"),d=i.dataset.mode?{mode:i.dataset.mode}:i.dataset.bg?{background:i.dataset.bg}:{accent:i.dataset.accent},u=xs(d);k.querySelector("#theme-menu").innerHTML=Jt(u)}else if(e.closest("#sound")){Ds(!oe());const i=k.querySelector("#sound");i&&(i.textContent=oe()?"🔔":"🔕",i.title=oe()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),oe()&&hn()}else e.closest("#pick-for-mail")?(Z=!0,$t()):e.closest("#pick-cancel")&&(Z=!1,$t())});St.addEventListener("click",()=>{ls(),et()});const Js=6e4;let Qe,An=new Map;const wt=new Set;function En(){An=new Map(q.map(n=>[n.id,n.unread]))}function Qs(){Qe||(Qe=window.setInterval(()=>void ea(),Js))}function Xs(){window.clearInterval(Qe),Qe=void 0}async function ea(){if(!kt()||document.hidden)return;let n;try{n=(await Ie()).filter(i=>!J(i))}catch{return}const e=n.filter(i=>i.unread>(An.get(i.id)??0));if(q=n,En(),!!e.length){hn();for(const i of e)wt.add(i.id);if(setTimeout(()=>{for(const i of e)wt.delete(i.id);k.querySelectorAll(".task-row.fresh").forEach(i=>i.classList.remove("fresh"))},15e3),k.querySelector("#list")){const i=window.scrollY;F(),window.scrollTo(0,i)}else Je=!0}}function ta(){Hs(),un(),Is(),qs(()=>{if(Ge)return Ge();Z=!1,$t(),F()}),kt()?re().then(Mn):et()}let an=new URLSearchParams(location.search).get("task");async function Mn(){const n=an;if(!(!n||!kt())){an=null;try{const e=q.find(i=>i.id===n)??await us(n);await At(e)}catch(e){k.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${o(M(e))}</div>`)}}}async function na(){var n,e;try{const i=location.href.split(/[?#]/)[0],u=(n=(await fetch(`${i}?check=${Date.now()}`,{cache:"no-store"}).then(b=>b.text())).match(/assets\/(taskpane|teams)-[\w-]+\.js/))==null?void 0:n[0],c=[...document.scripts].map(b=>b.src).find(b=>/assets\/(taskpane|teams)-/.test(b));if(!u||!c||c.includes(u))return;const m=()=>{const b=new URL(location.href);b.searchParams.set("v",String(Date.now())),location.replace(b.toString())},p=document.getElementById("update-note");p&&(p.hidden=!1,(e=p.querySelector("button"))==null||e.addEventListener("click",m));let S="";try{S=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",u)}catch{}S!==u&&m()}catch{}}let ln=!1;const qn=()=>{ln||(ln=!0,ta())};na();typeof Office<"u"&&Office.onReady(qn);setTimeout(qn,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 13:22 UTC";
