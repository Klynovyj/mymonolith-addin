import{b as o,c as Je,g as Ue,P as Dn,o as lt,f as ut,h as ot,j as jt,k as Nn,r as zn,e as M,d as Ve,m as Bn,n as Ke,p as Pn,q as rt,t as jn,u as Ft,v as Pe,w as Ot,x as Ut,y as Fn,z as pt,A as Vt,B as On,C as Un,D as Vn,E as mt,F as nn,G as sn,H as Kn,I as Wn,s as We,J as je,K as Rn,L as _n,M as Yn,N as Re,O as Gn,Q as Zn,R as Jn,S as Qn,T as Xn,U as es,l as qe,a as G,V as ts,W as ns,X as ss,Y as as,Z as is,_ as ls,$ as os,i as $t,a0 as rs,a1 as cs}from"./util-DtQrqSpb.js";import{s as Kt,m as ge,n as ds,b as an,o as us,p as Fe,q as ps,t as ms,g as hs,l as bs,d as fs,f as gs,k as vs,e as Wt,j as Rt,u as ys,h as $s,v as ws,w as ks,x as Ls,y as Ss,z as Ts,A as As}from"./composemail-zwnvm_kE.js";import{o as ln}from"./chatpost-7M-8PDeT.js";import{a as on,t as _t,u as Es,w as Ms}from"./theme-B3BLySEw.js";const rn="mm-addin-sound",cn="mm-addin-sent-mails";let se=null;function qs(){const n=()=>{try{se??(se=new AudioContext),se.resume()}catch{}};window.addEventListener("pointerdown",n,{once:!0,capture:!0}),window.addEventListener("keydown",n,{once:!0,capture:!0})}function ae(){try{return localStorage.getItem(rn)!=="off"}catch{return!0}}function xs(n){try{localStorage.setItem(rn,n?"on":"off")}catch{}}function dn(){if(ae())try{se??(se=new AudioContext);const n=se.currentTime;for(const[e,a]of[880,1320].entries()){const d=se.createOscillator(),u=se.createGain();d.type="sine",d.frequency.value=a;const c=n+e*.16;u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(.18,c+.02),u.gain.exponentialRampToValueAtTime(1e-4,c+.14),d.connect(u).connect(se.destination),d.start(c),d.stop(c+.15)}}catch{}}function un(){try{return JSON.parse(localStorage.getItem(cn)??"{}")}catch{return{}}}function pn(n,e){const a=un();a[n]=[...new Set([...a[n]??[],e])];const d=Object.keys(a);for(const u of d.slice(0,Math.max(0,d.length-200)))delete a[u];try{localStorage.setItem(cn,JSON.stringify(a))}catch{}}const mn=n=>un()[n]??[];function Oe(n,e="Name suchen …"){n.classList.add("picker"),n.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${o(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const a=n.querySelector("input"),d=n.querySelector("ul");let u=[],c,m=0,p=[];const S=()=>{const h=a.value.trim().toLowerCase();p=(h?u.filter(f=>f.name.toLowerCase().includes(h)):u).slice(0,8),m=Math.min(m,Math.max(p.length-1,0)),d.innerHTML=p.length?p.map((f,g)=>`<li role="option" data-i="${g}" class="${g===m?"active":""}"><span class="avatar sm">${o(Je(f.name))}</span>${o(f.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',d.hidden=!1},b=h=>{c=h,a.value=h.name,d.hidden=!0};return a.addEventListener("focus",()=>{a.select(),S()}),a.addEventListener("input",()=>{c=void 0,m=0,S()}),a.addEventListener("keydown",h=>{if(!d.hidden){if(h.key==="ArrowDown")m=Math.min(m+1,p.length-1);else if(h.key==="ArrowUp")m=Math.max(m-1,0);else return h.key==="Enter"&&p[m]?(h.preventDefault(),b(p[m])):h.key==="Escape"?void(d.hidden=!0):void 0;h.preventDefault(),S()}}),d.addEventListener("mousedown",h=>{const f=h.target.closest("li[data-i]");f&&(h.preventDefault(),b(p[Number(f.dataset.i)]))}),a.addEventListener("blur",()=>{d.hidden=!0,c||(c=u.find(h=>h.name.toLowerCase()===a.value.trim().toLowerCase()))}),{setUsers(h,f){u=h;const g=u.find($=>$.id===f);g&&!a.value&&b(g)},selected:()=>c,focus:()=>a.focus()}}let _e=null,Te=null;const hn="mm-addin-comment-order";function Is(){try{return localStorage.getItem(hn)==="oldest"?"oldest":"newest"}catch{return"newest"}}function Hs(n){try{localStorage.setItem(hn,n)}catch{}}const Yt=n=>{var e;return!!((e=n.raw)!=null&&e.type)&&n.raw.type!=="text"};function Cs(n){const e=[];for(const a of n){const d=e[e.length-1];Yt(a)&&Array.isArray(d)?d.push(a):e.push(Yt(a)?[a]:a)}return e.map(a=>Array.isArray(a)&&a.length===1?a[0]:a)}function Ds(n){const e=n.map(c=>{var m;return(m=c.createdAt)==null?void 0:m.getTime()}).filter(c=>!!c).sort((c,m)=>c-m),a=c=>new Date(c).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),d=c=>new Date(c).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),u=e.length?a(e[0])===a(e[e.length-1])?`${a(e[0])}, ${d(e[0])}–${d(e[e.length-1])}`:`${a(e[0])} – ${a(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${n.length} Änderungen <span class="hint">${u}</span></summary>
      ${n.map(c=>wt(c)).join("")}
    </details>`}function wt(n,e=!1){var u;const a=((u=n.raw)==null?void 0:u.type)&&n.raw.type!=="text",d=n.files.length?`<ul class="files">${n.files.map(c=>`<li>📎 ${c.url&&/^https:\/\//.test(c.url)?`<a href="${o(c.url)}" data-external>${o(c.name)}</a>`:o(c.name)}${c.size?` <span class="hint">${Fe(c.size)}</span>`:""}</li>`).join("")}</ul>`:"";return a?`<div class="event">${n.html} · ${o(n.author)}${n.createdAt?`, ${Re(n.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}">
      ${n.avatar?`<img class="avatar" src="${o(n.avatar)}" alt="">`:`<span class="avatar">${o(Je(n.author))}</span>`}
      <div class="bubble">
        <header><strong>${o(n.author)}</strong>${n.createdAt?` <span class="hint">${Re(n.createdAt)}</span>`:""}</header>
        ${n.html.trim()?`<div class="body">${sn(n.html)}</div>`:n.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${d}
        ${n.replies.map(c=>wt(c,!0)).join("")}
      </div>
    </article>`}async function ht(n,e,a,d,u,c){var Bt;_e=null,Te=null;const m=await Ue().catch(()=>{});n.innerHTML=`
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
            ${Dn.map(t=>`<option value="${t.value}"${t.value===(e.priority??"").toLowerCase()?" selected":""}>${t.label}</option>`).join("")}
          </select>
        </div>
        <div class="tile" id="tile-resp"></div>
      </div>
      </section>

      <section class="d-card">
        <h3 class="d-title">👥 Beteiligte</h3>
        <div id="people" class="people"><p class="hint">Wird geladen …</p></div>
        <h3 class="d-title">📝 Beschreibung</h3>
        <div id="desc" class="desc"></div>
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
    </div>`,document.body.classList.add("plain-bg");const p=t=>n.querySelector(t),S=p("#flash"),b=t=>{S.innerHTML=t,S.scrollIntoView({block:"nearest"})},h=t=>b(`<div class="ok">${o(t)}</div>`),f=t=>b(`<div class="error">${o(M(t))}</div>`),g=()=>u==null?void 0:u();p("#back").addEventListener("click",a),p("#open-web").addEventListener("click",()=>lt(e.url)),p("#comments").addEventListener("click",t=>{const s=t.target.closest("a[data-external]");s&&(t.preventDefault(),lt(s.href))});const $=p("#status"),v=p("#done-actions"),D=p("#phase-note"),K=(m==null?void 0:m.userId)!=null&&e.creatorUserId===m.userId;let x=null;const le=t=>{e.phase=t,e.raw.StatusID=t==="done"?7:t==="pending"?5:1};function oe(){$.className=`bare status-select ${We(e.status)}`;const t=(i,l)=>x?x.includes(i):l;D.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${K?"durch Sie":`von <strong>${o(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const s=[];if(t("approve",e.phase==="pending"&&K)&&s.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),t("finish",e.phase==="open")){const i=e.needsApproval&&!K;s.push(`<button class="primary" data-act="finish" title="${i?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${i?"Zur Freigabe":"Erledigt"}</button>`)}t("reopen",e.phase!=="open")&&s.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),v.innerHTML=s.join(""),p("#tile-finish").hidden=!s.length}async function Tt(t){const s=[...$.options].find(i=>t.test((i.textContent??"").trim()));return!s||$.value===s.value?!1:(await ot(e.id,s.value),$.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status,!0)}async function Xe(){try{const t=await Ut(e.id);x=t.actions,le(t.phase);const s=t.spaStatusId?[...$.options].find(i=>i.value===t.spaStatusId):void 0;s&&($.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status)}catch{}oe(),z==null||z(),_==null||_(),B==null||B()}oe(),Xe(),ut().then(t=>{$.innerHTML=t.map(s=>`<option value="${o(s.id)}"${s.id===e.statusId||s.name===e.status?" selected":""}>${o(s.name)}</option>`).join(""),e.statusId??(e.statusId=$.value)}).catch(f);const et=p("#status-confirm"),At=()=>$.value!==(e.statusId??$.value);$.addEventListener("change",()=>{et.hidden=!At(),$.classList.toggle("is-pending",At())}),p("#status-cancel").addEventListener("click",()=>{e.statusId&&($.value=e.statusId),et.hidden=!0,$.classList.remove("is-pending")}),p("#status-ok").addEventListener("click",async()=>{var i;const t=e.statusId??"",s=((i=$.selectedOptions[0])==null?void 0:i.textContent)??"";et.hidden=!0,$.classList.remove("is-pending"),$.disabled=!0;try{await ot(e.id,$.value),e.statusId=$.value,e.status=s,h(`Status: ${s}`),g(),await Xe(),pe()}catch(l){$.value=t,f(l)}finally{$.disabled=!1}}),v.addEventListener("click",async t=>{var i;const s=t.target.closest("button[data-act]");if(s){v.querySelectorAll("button").forEach(l=>l.disabled=!0);try{const l=s.dataset.act;l==="finish"?(await jt(e.id),le(e.needsApproval&&!K?"pending":"done")):l==="approve"?(await Nn(e.id),le("done")):l==="reopen"&&(await zn(e.id),le("open")),await Xe();let r="";try{e.phase==="done"&&await Tt(/^erledigt$/i)?r=" Status: Erledigt.":l==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await Tt(/^zu erledigen$/i)&&(r=" Status: Zu erledigen.")}catch(w){r=` (Status konnte nicht angepasst werden: ${M(w)})`}oe(),h(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),r&&h(`${((i=S.textContent)==null?void 0:i.trim())??""}${r}`),re(),_(),B(),g(),pe()}catch(l){f(l),oe()}}});const Z=p("#tile-due");function re(t=!1){var l;const s=Ve(e.due),i=Bn(e,m);if(t){Z.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?Ke(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const r=Z.querySelector("#due-input");r.focus(),Z.querySelector("#due-cancel").addEventListener("click",()=>re()),Z.querySelector("#due-save").addEventListener("click",async()=>{if(!r.value)return r.focus();try{await Pn(e.id,r.value),e.due=new Date(`${r.value}T00:00:00`),h(`Fällig am ${rt(e.due)}`),g(),re()}catch(w){f(w)}});return}Z.className=`tile due-${s.level}`,Z.innerHTML=`
      <span class="tile-label">Fällig ${i?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${i?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?rt(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?rt(e.due):"–"}</span>`}
      <span class="tile-sub">${o(s.text)}</span>`,(l=Z.querySelector("#due-edit"))==null||l.addEventListener("click",()=>re(!0))}re();const W=p("#prio"),Et=()=>W.dataset.p=W.value;Et(),W.addEventListener("change",async()=>{const t=e.priority??"";try{await jn(e.id,W.value),e.priority=W.value,e.raw.Priority=W.value,Et(),h(`Priorität: ${W.selectedOptions[0].textContent}`),g()}catch(s){W.value=t,f(s)}});const F=p("#tile-resp");function z(t="view",s){var i;if(t==="view"){F.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${o(e.responsible??"–")}</span>
        ${!x||x.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(i=F.querySelector("#resp-edit"))==null||i.addEventListener("click",()=>z("pick"));return}if(t==="pick"){F.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const l=Oe(F.querySelector("#resp-picker"));je().then(r=>l.setUsers(r)).catch(f),l.focus(),F.querySelector("#resp-cancel").addEventListener("click",()=>z()),F.querySelector("#resp-next").addEventListener("click",()=>{const r=l.selected();r?z("confirm",r):l.focus()});return}F.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${o(s.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,F.querySelector("#resp-cancel").addEventListener("click",()=>z()),F.querySelector("#resp-ok").addEventListener("click",async()=>{try{await Rn(e.id,s.id),e.responsible=s.name,e.responsibleUserId=s.userId,h(`Weitergegeben an ${s.name}.`),g(),z(),re()}catch(l){f(l),z()}})}z();const ce=p("#people");let R={administrators:[],participants:[]};const Mt={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},An=(t,s)=>`
    <span class="person-chip" title="${o(s.name)}">
      ${s.picture?`<img class="avatar sm" src="${o(s.picture)}" alt="">`:`<span class="avatar sm">${o(Je(s.name))}</span>`}
      ${o(s.name)}
      <button type="button" data-rm-person="${t}:${o(s.id)}" aria-label="${o(s.name)} entfernen" title="Entfernen">×</button>
    </span>`;function ye(t){if(ce.innerHTML=["administrators","participants"].map(s=>`
        <div class="people-row">
          <span class="people-label">${Mt[s]}</span>
          <div class="people-list">
            ${R[s].map(i=>An(s,i)).join("")||'<span class="hint">niemand</span>'}
            ${t===s?"":`<button type="button" class="add-person" data-add-person="${s}">＋ Hinzufügen</button>`}
          </div>
          ${t===s?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),t){const s=Oe(ce.querySelector("#people-picker"),"Kollegen suchen …"),i=new Set(R[t].map(l=>l.id));je().then(l=>s.setUsers(l.filter(r=>!i.has(r.id)))).catch(f),s.focus(),ce.querySelector("#people-cancel").addEventListener("click",()=>ye()),ce.querySelector("#people-save").addEventListener("click",async()=>{const l=s.selected();if(!l)return s.focus();await qt(t,[...R[t],{...l}],`${l.name} als ${Mt[t]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function qt(t,s,i){try{await _n(e.id,t,s.map(l=>l.id)),R=await Ft(e.id).catch(()=>({...R,[t]:s})),h(i),g(),ye(),p("#activity").hidden||tt(!0)}catch(l){f(l),ye()}}ce.addEventListener("click",t=>{const s=t.target,i=s.closest("[data-add-person]");if(i)return ye(i.dataset.addPerson);const l=s.closest("[data-rm-person]");if(l){const[r,w]=l.dataset.rmPerson.split(":"),y=R[r].find(T=>T.id===w);qt(r,R[r].filter(T=>T.id!==w),`${(y==null?void 0:y.name)??"Person"} entfernt.`)}}),Ft(e.id).then(t=>{R=t,ye()}).catch(t=>ce.innerHTML=`<div class="error">${o(M(t))}</div>`);const J=p("#activity");let $e=1;const xt={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},En={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},Mn=t=>{const s=t.replace(/^niki\.field\./i,"").replace(/[_\s]/g,i=>i==="_"?"":" ").toLowerCase();return xt[s]??xt[s.replace(/\s/g,"")]??t.replace(/^niki\.field\./i,"")},It=t=>En[t.replace(/[\s_]/g,"").toLowerCase()]??t;async function tt(t=!1){var s;t&&($e=1),$e===1&&(J.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const i=await Yn(e.id,$e),l=i.logs.map(r=>`
          <div class="log">
            <div class="log-head"><strong>${o(r.user)}</strong> · ${o(Mn(r.field))}${r.at?`<span class="hint"> · ${Re(r.at)}</span>`:""}</div>
            <div class="log-change">
              ${r.from?`<span class="log-from">${o(It(r.from))}</span> → `:""}<span class="log-to">${o(It(r.to)||"–")}</span>
            </div>
          </div>`).join("");$e===1?J.innerHTML=l||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((s=J.querySelector(".more-activity"))==null||s.remove(),J.insertAdjacentHTML("beforeend",l)),i.hasMore&&J.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),$e++}catch(i){J.innerHTML=`<div class="error">${o(M(i))}</div>`}}J.addEventListener("click",t=>{t.target.closest(".more-activity")&&tt()}),n.querySelector(".tabs").addEventListener("click",t=>{const s=t.target.closest(".tab");if(!s)return;const i=s.dataset.tab;n.querySelectorAll(".tab").forEach(l=>{const r=l===s;l.classList.toggle("active",r),l.setAttribute("aria-selected",String(r))});for(const l of["comments","checklist","subtasks","files","activity"]){const r=n.querySelector(`#${l}`);r&&(r.hidden=l!==i)}p("#composer").hidden=i!=="comments",i==="activity"&&tt(!0),i==="checklist"&&qn(),i==="subtasks"&&Ce(),i==="files"&&Ne()});const N=p("#checklist");let A=[],de=null;function Ht(){const t=A.filter(s=>s.done).length;p("#cl-count").textContent=A.length?`${t}/${A.length}`:""}function O(){var i;const t=A.filter(l=>l.done).length,s=A.length?Math.round(t/A.length*100):0;N.innerHTML=`
      ${A.length?`<div class="progress"><div class="progress-bar" style="width:${s}%"></div></div>
        <div class="hint">${t} von ${A.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${A.map((l,r)=>de===l.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${o(l.id)}" value="${o(l.item)}" aria-label="Punkt umbenennen">
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
      </form>`,Ht(),(i=N.querySelector(".cl-edit"))==null||i.focus()}async function qn(){try{A=await Pe(e.id),O()}catch(t){N.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function we(t,s=!0){try{await t(),s&&(A=await Pe(e.id)),g()}catch(i){f(i)}O()}N.addEventListener("click",t=>{const s=t.target.closest("[data-cl]");if(!s)return;const i=s.dataset.cl,l=A.find(r=>r.id===s.dataset.id);if(i==="toggle"&&l)l.done=s.checked,O(),we(()=>Zn(l.id,l.done),!1);else if(i==="edit"&&l&&(s.tagName==="BUTTON"||t.detail===2))t.preventDefault(),de=l.id,O();else if(i==="cancel")de=null,O();else if(i==="save"&&l){const r=N.querySelector(".cl-edit").value.trim();de=null,r&&r!==l.item?we(()=>Jn(e.id,l,r,A.indexOf(l))):O()}else if(i==="del"&&l)we(()=>Qn(l.id));else if(i==="up"||i==="down"){const r=Number(s.dataset.i),w=i==="up"?r-1:r+1;if(w<0||w>=A.length)return;[A[r],A[w]]=[A[w],A[r]],O(),we(()=>Xn(e.id,A.map(y=>y.id)))}}),N.addEventListener("dblclick",t=>{const s=t.target.closest(".cl-text");s&&(t.preventDefault(),de=s.dataset.id??null,O())}),N.addEventListener("keydown",t=>{var i;t.target.classList.contains("cl-edit")&&(t.key==="Enter"?(t.preventDefault(),(i=N.querySelector('[data-cl="save"]'))==null||i.click()):t.key==="Escape"&&(de=null,O()))}),N.addEventListener("submit",t=>{t.preventDefault();const s=N.querySelector("#cl-new"),i=s.value.trim();if(!i)return s.focus();we(()=>es(e.id,i,A.length)).then(()=>{var l;return(l=N.querySelector("#cl-new"))==null?void 0:l.focus()})}),Pe(e.id).then(t=>{A=t,Ht()}).catch(()=>{});const I=n.querySelector("#subtasks");let Q=[],xe=!1,Ie=null;function Ct(){const t=n.querySelector("#sub-count");if(!t)return;const s=Q.filter(i=>i.phase==="done"||/^erledigt$/i.test(i.status??"")).length;t.textContent=Q.length?`${s}/${Q.length}`:""}function He(){if(I&&(I.innerHTML=`
      <div class="sub-list">
        ${Q.map(t=>{const s=Ve(t.due),i=t.phase==="done"||/^erledigt$/i.test(t.status??"");return`
            <div class="sub-item${i?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${o(t.id)}" title="${i?"Erledigt":t.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${i||t.phase==="pending"?" disabled":""}>${i?"✓":t.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${o(t.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${o(t.title)}</span>
                <span class="task-meta"><span class="num">#${t.number}</span>
                  <span class="badge due-${s.level}">${o(s.text)}</span>
                  ${t.status?`<span class="badge ${We(t.status)}">${o(t.status)}</span>`:""}
                  ${t.responsible?`<span class="who">${o(t.responsible)}</span>`:""}</span>
              </button>
              ${Ie===t.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${o(t.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${o(t.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${xe?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${Ke(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,Ct(),xe)){const t=Oe(I.querySelector("#sub-assignee"));Promise.all([je(),Ue()]).then(([s,i])=>t.setUsers(s,i.id)).catch(f),I.querySelector("#sub-name").focus(),I.querySelector("#sub-form").addEventListener("submit",async s=>{s.preventDefault();const i=t.selected();if(!i)return t.focus();const l=I.querySelector("#sub-form button[type=submit]");l.disabled=!0;try{const r=await Gn(e.id,{name:I.querySelector("#sub-name").value.trim(),dueAt:I.querySelector("#sub-due").value,assigneeId:i.id});xe=!1,h(`Unteraufgabe #${r.number} angelegt.`),g(),await Ce()}catch(r){f(r),l.disabled=!1}})}}async function Ce(){if(I)try{Q=await Ot(e.id),He()}catch(t){I.innerHTML=`<div class="error">${o(M(t))}</div>`}}I==null||I.addEventListener("click",async t=>{const s=t.target.closest("[data-sub]");if(!s)return;const i=s.dataset.sub,l=Q.find(r=>r.id===s.dataset.id);if(i==="form-open"||i==="form-cancel")xe=i==="form-open",He();else if(i==="open"&&l)await ht(n,l,()=>void ht(n,e,a,void 0,u),void 0,u,e);else if(i==="finish"&&l){s.setAttribute("disabled","");try{await jt(l.id);const r=await Ut(l.id);if(r.phase==="done"){const y=(await ut()).find(T=>/^erledigt$/i.test(T.name));y&&await ot(l.id,y.id).catch(()=>{})}h(r.phase==="pending"?`#${l.number} abgeschlossen – wartet auf Bestätigung.`:`#${l.number} erledigt.`),g()}catch(r){f(r)}await Ce()}else if(i==="unlink"&&l)Ie=l.id,He();else if(i==="unlink-no")Ie=null,He();else if(i==="unlink-ok"&&l){Ie=null;try{await Fn(l.id,e.id),h(`#${l.number} ist jetzt eine eigenständige Aufgabe.`),g()}catch(r){f(r)}await Ce()}}),I&&Ot(e.id).then(t=>{Q=t,Ct()}).catch(()=>{}),(Bt=n.querySelector("#to-parent"))==null||Bt.addEventListener("click",a);const U=p("#files");let X=[],nt=0,V=[];const xn=(t,s)=>s?"🖼️":t==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(t)?"📘":/^(xlsx?|csv|ods)$/.test(t)?"📗":/^(pptx?|odp)$/.test(t)?"📙":/^(zip|rar|7z|gz|tar)$/.test(t)?"🗜️":/^(eml|msg)$/.test(t)?"✉️":/^(txt|log|xml|json)$/.test(t)?"📄":"📎";function Dt(){p("#files-count").textContent=X.length?`(${X.length})`:""}function De(){U.innerHTML=`
      <div class="files-tools">
        ${V.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${V.map((t,s)=>`<span class="file-chip">📎 <span class="ellipsis">${o(t.name)}</span> <span class="hint">${Fe(t.size)}</span><button type="button" data-rm-up="${s}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${X.map(t=>`
          <button type="button" class="file-row" data-file="${o(t.id)}" title="${o(t.name)} öffnen">
            ${t.isImage&&t.thumb?`<img class="file-thumb" src="${o(t.thumb)}" alt="">`:`<span class="file-icon">${xn(t.ext,t.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${o(t.name)}</span>
              <span class="file-meta">${[t.size?Fe(t.size):"",t.uploadedBy?`von ${o(t.uploadedBy)}`:"",t.uploadedAt?Re(t.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${t.commentText?`<span class="file-comment">„${o(t.commentText)}${t.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Dt()}async function Ne(){try{X=await pt(e.id),nt=Date.now(),De()}catch(t){U.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function In(t){if(Date.now()-nt>20*6e4&&(await Ne(),t=X.find(s=>s.id===t.id&&s.name===t.name)??t),!t.url)return f(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));lt(t.url)}U.addEventListener("click",t=>{const s=t.target,i=s.closest("[data-file]");if(i){const r=X.find(w=>w.id===i.dataset.file);r&&In(r);return}const l=s.closest("[data-rm-up]");l?(V.splice(Number(l.dataset.rmUp),1),De()):s.closest("#upload-cancel")&&(V=[],De())}),U.addEventListener("change",t=>{var i;const s=t.target;s.id==="upload-input"&&(V=Array.from(s.files??[]),De(),(i=U.querySelector("#upload-note"))==null||i.focus())}),U.addEventListener("submit",async t=>{t.preventDefault();const s=U.querySelector("#upload-form button[type=submit]"),i=U.querySelector("#upload-msg"),l=U.querySelector("#upload-note").value.trim();s.disabled=!0;try{const r=V.length;await Kt(e.messageId,{note:l||`${r===1?"Datei":`${r} Dateien`} hochgeladen: ${V.map(w=>w.name).join(", ")}`,files:V},w=>i.innerHTML=`<p class="hint">${o(w)}</p>`),V=[],h(`${r===1?"Datei":`${r} Dateien`} hochgeladen.`),g(),await Ne()}catch(r){i.innerHTML=`<div class="error">${o(M(r))}</div>`,s.disabled=!1}}),pt(e.id).then(t=>{X=t,nt=Date.now(),Dt()}).catch(()=>{});const ee=p("#title-box");function B(t=!1){var i;const s=x?x.includes("edit")&&e.phase==="open":Vt(e,m);if(t){ee.innerHTML=`
        <form class="title-edit" id="title-form">
          <input id="title-input" maxlength="255" value="${o(e.title)}" aria-label="Titel der Aufgabe">
          <div class="row-btns"><button class="primary small" type="submit">Speichern</button><button class="small" type="button" id="title-cancel">Abbrechen</button></div>
        </form>`;const l=ee.querySelector("#title-input");l.focus(),l.select(),ee.querySelector("#title-cancel").addEventListener("click",()=>B()),l.addEventListener("keydown",r=>{r.key==="Escape"&&B()}),ee.querySelector("#title-form").addEventListener("submit",async r=>{r.preventDefault();const w=l.value.trim();if(!w)return l.focus();if(w===e.title)return B();const y=ee.querySelector("button[type=submit]");y.disabled=!0;try{await On(e.id,w),e.title=w,e.raw.TaskName=w,h("Titel geändert."),g(),B()}catch(T){y.disabled=!1,f(T)}});return}ee.innerHTML=`<h2 class="task-title">${o(e.title)}${s?' <button type="button" class="icon-btn sm title-edit-btn" id="title-edit" title="Titel ändern" aria-label="Titel ändern">✎</button>':""}</h2>`,(i=ee.querySelector("#title-edit"))==null||i.addEventListener("click",()=>B(!0))}B();const ue=p("#desc");function _(t=!1){var l;const s=x?x.includes("edit")&&e.phase==="open":Vt(e,m);if(t){ue.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${o(Un(e.description))}</textarea>
        ${Vn(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const r=ue.querySelector("#desc-input");r.focus(),ue.querySelector("#desc-cancel").addEventListener("click",()=>_()),ue.querySelector("#desc-save").addEventListener("click",async()=>{const w=r.value.trim()?mt(r.value):"";try{await nn(e.id,w),e.description=w,e.raw.TaskDescription=w,h("Beschreibung gespeichert."),g(),_()}catch(y){f(y)}});return}const i=e.description.trim()?`<div class="desc-body">${sn(e.description)}</div>`:`<div class="hint">${s?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;ue.innerHTML=`${i}${s?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(l=ue.querySelector("#desc-edit"))==null||l.addEventListener("click",()=>_(!0))}_();const te=p("#comments");async function pe(t=!1){var s;try{const i=[];for(let y=1;y<=10;y++){const T=await Kn(e.messageId,y,50);if(i.push(...T.comments),!T.hasMore)break}const l=Is()==="newest";i.sort((y,T)=>{var he,Le;return((((he=y.createdAt)==null?void 0:he.getTime())??0)-(((Le=T.createdAt)==null?void 0:Le.getTime())??0))*(l?-1:1)});const r=i.filter(y=>{var T;return!((T=y.raw)!=null&&T.type)||y.raw.type==="text"}).length;p("#count").textContent=r?`(${r})`:"";const w=`<div class="thread-tools">
          <span class="thread-title">Verlauf${r?` · ${r} ${r===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${l?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;te.innerHTML=i.length?w+Cs(i).map(y=>Array.isArray(y)?Ds(y):wt(y)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(s=te.querySelector("#order-toggle"))==null||s.addEventListener("click",()=>{Hs(l?"oldest":"newest"),pe()}),te.querySelectorAll(".bubble > .body").forEach(y=>{if(y.scrollHeight<=320)return;y.classList.add("clamped");const T=document.createElement("button");T.type="button",T.className="link small more",T.textContent="Mehr anzeigen ▾",T.addEventListener("click",()=>{const he=y.classList.toggle("clamped");T.textContent=he?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),y.after(T)}),t&&(l?te.scrollIntoView({block:"start"}):(te.lastElementChild??te).scrollIntoView({block:"end"}))}catch(i){te.innerHTML=`<div class="error">${o(M(i))}</div>`}}const ze=p("#composer"),P=p("#comment"),st=p("#file-input");p("#chat-btn").addEventListener("click",()=>ln({task:e,onClose:t=>{t&&(g(),pe(!0),Ne())}}));const Nt=p("#file-chips"),me=p("#comment-msg"),at=p("#mail-btn"),H=p("#mail-menu");let ne=[],E=null;const Be=(t,s,i,l,r="")=>`<span class="file-chip ${r}">${t} <span class="ellipsis">${o(s)}</span>${i?` <span class="hint">${Fe(i)}</span>`:""}<button type="button" data-rm="${l}" aria-label="Entfernen">×</button></span>`;function ke(){const t=E;Nt.innerHTML=[...t!=null&&t.text?[Be("📧",`Mailtext: ${t.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...t!=null&&t.eml?[Be("📄",t.eml.name,t.eml.blob.size,"mail-eml","mail")]:[],...((t==null?void 0:t.atts)??[]).map((s,i)=>Be("📎",s.name,s.size,`mail-att:${i}`)),...ne.map((s,i)=>Be("📎",s.name,s.size,`file:${i}`))].join("")}const Hn=t=>((!E||E.mail.key!==t.key)&&(E={mail:t,text:!1,atts:[]}),E);function it(){const t=ge();at.hidden=!t||mn(t.key).includes(e.number),t||(H.hidden=!0),E&&(!t||t.key!==E.mail.key)&&(E=null,ke())}function zt(){var w;const t=ge();if(!t)return;const s=(E==null?void 0:E.mail.key)===t.key?E:null,i=t.attachments.filter(y=>!y.isInline),l=ps(),r=(y,T,he,Le,Cn=!1,Pt="")=>`<button type="button" role="menuitem" data-act="${y}"${Cn||Le?" disabled":""}${Pt?` title="${o(Pt)}"`:""}>
        <span>${T}</span><span class="grow">${o(he)}</span>${Le?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;H.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${o(t.subject||"(ohne Betreff)")}</div>
      ${r("text","📧","Mailtext als Inhalt einfügen",!!(s!=null&&s.text))}
      ${r("eml","📄","Mail als Datei anhängen (.eml)",!!(s!=null&&s.eml),!l,l?"":"In dieser Outlook-Version nicht verfügbar")}
      ${r("atts","📎",`Anhänge der Mail übernehmen (${i.length})`,!!s&&i.length>0&&i.every(y=>s.atts.includes(y)),i.length===0,i.length?"":"Die Mail hat keine Anhänge")}`,H.hidden=!1,(w=H.querySelector("button:not([disabled])"))==null||w.focus()}at.addEventListener("click",t=>{t.stopPropagation(),H.hidden?zt():H.hidden=!0}),document.addEventListener("click",t=>{!H.hidden&&!H.contains(t.target)&&(H.hidden=!0)}),H.addEventListener("keydown",t=>{t.key==="Escape"&&(H.hidden=!0,at.focus())}),H.addEventListener("click",async t=>{const s=t.target.closest("button[data-act]"),i=ge();if(!s||!i)return;t.stopPropagation();const l=Hn(i);if(s.dataset.act==="text")l.text=!0;else if(s.dataset.act==="atts")l.atts=i.attachments.filter(r=>!r.isInline);else if(s.dataset.act==="eml"){s.disabled=!0,s.querySelector(".grow").textContent="Mail wird geladen …";try{l.eml=await ds(i)}catch(r){me.innerHTML=`<div class="error">${o(M(r))}</div>`}}H.hidden=!0,ke(),P.focus()}),st.addEventListener("change",()=>{ne=[...ne,...Array.from(st.files??[])],st.value="",ke()}),Nt.addEventListener("click",t=>{var r;const s=(r=t.target.closest("[data-rm]"))==null?void 0:r.dataset.rm;if(!s)return;const[i,l]=s.split(":");i==="file"?ne.splice(Number(l),1):E&&(i==="mail-text"?E.text=!1:i==="mail-eml"?E.eml=void 0:i==="mail-att"&&E.atts.splice(Number(l),1),!E.text&&!E.eml&&!E.atts.length&&(E=null)),ke()}),P.addEventListener("input",()=>{P.style.height="auto",P.style.height=`${Math.min(Math.max(P.scrollHeight,72),260)}px`}),P.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&ze.requestSubmit()}),ze.addEventListener("submit",async t=>{t.preventDefault();const s=P.value,i=E;if(!s.trim()&&!ne.length&&!i)return P.focus();const l=ze.querySelector("button[type=submit]");l.disabled=!0,me.innerHTML="";try{const r=await Kt(e.messageId,{note:s,mailText:i!=null&&i.text?i.mail:void 0,eml:i==null?void 0:i.eml,mailAttachments:i==null?void 0:i.atts,files:ne},w=>me.innerHTML=`<p class="hint">${o(w)}</p>`);i&&(pn(i.mail.key,e.number),an(i.mail.conversationId,e)),P.value="",P.style.height="auto",ne=[],E=null,ke(),it(),me.innerHTML=`<div class="ok">${o(us(r,!!i))}</div>`,setTimeout(()=>me.innerHTML="",6e3),g(),await pe(!0)}catch(r){me.innerHTML=`<div class="error">${o(M(r))}</div>`}finally{l.disabled=!1}}),it(),_e=it,Te=()=>{ze.scrollIntoView({block:"end"}),zt()},await pe(),e.unread>0&&Wn(e.messageId).then(()=>{e.unread=0,g()}).catch(()=>{})}let be=[];const Gt=n=>({taskId:n.id,messageId:n.messageId,number:n.number,title:n.title});function ct(n,e,a=""){const d=Ve(n.due);return`
    <button type="button" class="task-row card due-${d.level}${e?" is-selected":""}" data-pick="${o(n.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="num">#${n.number}</span>
          <span class="badge due-${d.level}">${o(d.text)}</span>
          ${n.status?`<span class="badge ${We(n.status)}">${o(n.status)}</span>`:""}
          ${a?`<span class="badge suggest">${o(a)}</span>`:""}
        </span>
      </span>
    </button>`}async function Ns(n){const e=document.createElement("div");if(n.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!ms()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{be=(await qe()).filter(b=>!G(b))}catch(b){e.innerHTML=`<div class="pad"><div class="error">${o(M(b))}</div></div>`;return}let a=await hs()??{tasks:[],withAttachments:!0};const d=bs(be,await gs(),fs());let u=!1;!a.tasks.length&&d.length&&!await vs()&&(a={...a,tasks:[Gt(d[0].task)]},await Wt(a).catch(()=>{}),Rt({chosen:a.tasks}),u=!0);let c="";const m=b=>a.tasks.some(h=>h.taskId===b),p=()=>{const b=c.trim().toLowerCase(),h=b?be.filter(v=>v.title.toLowerCase().includes(b)||String(v.number).includes(b.replace(/^#/,""))).slice(0,40):be.filter(v=>!d.some(D=>D.task.id===v.id)&&!m(v.id)).slice(0,40),f=a.tasks.map(v=>be.find(D=>D.id===v.taskId)??null),g=d.filter(v=>!m(v.task.id)),$=a.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${$?`<div class="compose-choice">
              <div class="hint">${u?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${$} ${$===1?"Aufgabe":"Aufgaben"}:</div>
              ${f.map((v,D)=>v?ct(v,!0):`<div class="card pad">#${a.tasks[D].number} ${o(a.tasks[D].title)}</div>`).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${$===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${a.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${g.length?`<h3 class="compose-sub">Vorschläge</h3>${g.map(v=>ct(v.task,!1,v.why)).join("")}`:""}
        <h3 class="compose-sub">${$?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${o(c)}">
        <div class="compose-list">${h.map(v=>ct(v,m(v.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${$s()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},S=async b=>{try{await Wt(b),a=b,u=!1,Rt({chosen:b.tasks}),p()}catch(h){const f=e.querySelector("#compose-msg");f&&(f.innerHTML=`<div class="error">${o(M(h))}</div>`)}};e.addEventListener("click",b=>{const h=b.target,f=h.closest("[data-pick]");if(f){const g=f.dataset.pick,$=be.find(v=>v.id===g);if(!$)return;S({...a,tasks:m(g)?a.tasks.filter(v=>v.taskId!==g):[...a.tasks,Gt($)]})}else h.closest("#clear-choice")&&S({...a,tasks:[]})}),e.addEventListener("change",b=>{const h=b.target;h.id==="with-att"&&S({...a,withAttachments:h.checked}),h.id==="auto-suggest"&&ys(h.checked)}),e.addEventListener("input",b=>{const h=b.target;if(h.id!=="search")return;c=h.value;const f=h.selectionStart;p();const g=e.querySelector("#search");g.focus(),g.setSelectionRange(f,f)}),p()}const zs=n=>n.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function Bs(n,e,a,d){const u=new Date(Date.now()+6048e5);n.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${o(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${o(e?zs(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${Ke(u)}" min="${Ke(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${ws(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const c=f=>n.querySelector(f),m=c("#f-new"),p=n.querySelector("#with-mail"),S=c("#new-msg"),b=f=>S.innerHTML=f;c("#cancel").addEventListener("click",d),p==null||p.addEventListener("change",()=>c("#atts").hidden=!p.checked);const h=Oe(c("#assignee"));Promise.all([je(),Ue()]).then(([f,g])=>h.setUsers(f,g.id)).catch(f=>b(`<div class="error">Personenliste: ${o(M(f))}</div>`)),c("#name").focus(),m.addEventListener("submit",async f=>{f.preventDefault();const g=h.selected();if(!g){b('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),h.focus();return}const $=m.querySelector("button[type=submit]");$.disabled=!0;try{b('<p class="hint">Aufgabe wird angelegt …</p>');const v=await ts({name:c("#name").value.trim(),dueAt:c("#due").value,assigneeId:g.id}),D=c("#desc").value;let K=`Aufgabe #${v.number||""} angelegt.`;if(D.trim())try{await nn(v.id,mt(D))}catch{await ns(v.messageId,mt(D)).catch(()=>{})}try{if(e&&(p!=null&&p.checked)){const x=ks(c("#atts"),e),le=await Ls(v.messageId,e,x,"",oe=>b(`<p class="hint">${o(oe)}</p>`));K+=" "+Ss(x.length,le.shortened),pn(e.key,v.number),an(e.conversationId,{id:v.id,number:v.number,title:c("#name").value.trim()})}}catch(x){K+=` Hinweis: ${M(x)}`}a(v,K)}catch(v){b(`<div class="error">${o(M(v))}</div>`),$.disabled=!1}})}on();const k=document.getElementById("app"),kt=document.getElementById("logout-link");function Ps(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function Qe(n){Zs(),kt.hidden=!0;const e=is()??Ps();k.innerHTML=`
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
    </form>`;const a=k.querySelector("#f-email"),d=k.querySelector("#f-code"),u=k.querySelector("#email"),c=k.querySelector("#code"),m=k.querySelector("#code-error");a.addEventListener("submit",async p=>{p.preventDefault();const S=a.querySelector("button");S.disabled=!0;try{await ls(u.value.trim()),k.querySelector("#sent-to").textContent=u.value.trim(),a.hidden=!0,d.hidden=!1,c.focus()}catch(b){Qe(M(b))}finally{S.disabled=!1}}),d.addEventListener("submit",async p=>{p.preventDefault();const S=d.querySelector("button.primary");S.disabled=!0,m.innerHTML="";try{await os(u.value.trim(),c.value.trim()),await ie(),await Sn()}catch(b){m.innerHTML=`<div class="error">${o(M(b))}</div>`}finally{S.disabled=!1}}),k.querySelector("#back").addEventListener("click",()=>{d.hidden=!0,a.hidden=!1})}const bn="mm-addin-filters",Ye=(n="")=>({time:"all",owner:"all",unread:!1,status:"",q:n});function js(){try{return{...Ye(),...JSON.parse(localStorage.getItem(bn)??"{}"),q:""}}catch{return Ye()}}function Zt(n){try{localStorage.setItem(bn,JSON.stringify({...n,q:""}))}catch{}}let q=[],Ae=null,bt=[],ft=[];const Me=n=>/erledigt/i.test(n.status),Lt=()=>Me(L)?Ae??[]:q;async function Jt(){if(Ae)return;const n=k.querySelector("#list");n&&(n.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await qe("status_id=7"),a=new Set;Ae=[...e,...bt].filter(d=>!a.has(d.id)&&a.add(d.id))}catch(e){Ae=[...bt],n&&(n.innerHTML=`<div class="error">${o(M(e))}</div>`)}}let C,L=js(),Y=!1,Ge=!1;function dt(){const n=new Date;return n.setHours(0,0,0,0),n}const Ee={overdue:n=>!G(n)&&!!n.due&&n.due<dt(),week:n=>!G(n)&&!!n.due&&n.due>=dt()&&n.due<new Date(dt().getTime()+7*864e5),assigned:n=>(C==null?void 0:C.userId)!=null&&n.responsibleUserId===C.userId,created:n=>(C==null?void 0:C.userId)!=null&&n.creatorUserId===C.userId,unread:n=>n.unread>0};function gt(n,e){const a=e.q.trim().toLowerCase();return n.filter(d=>(e.time==="all"||Ee[e.time](d))&&(e.owner==="all"||Ee[e.owner](d))&&(!e.unread||Ee.unread(d))&&(!e.status||Me(e)||d.status===e.status)&&(!a||d.title.toLowerCase().includes(a)||String(d.number).includes(a)))}const fn=n=>n.time!=="all"||n.owner!=="all"||n.unread||!!n.status,gn=new Map,vn=new Map;async function Fs(n){const e=[...n],a=async()=>{for(let d=e.shift();d;d=e.shift())try{const[u,c]=await Promise.all([Pe(d.id),pt(d.id).catch(()=>[])]);gn.set(d.id,{done:u.filter(m=>m.done).length,total:u.length}),vn.set(d.id,c.length)}catch{}};if(await Promise.all([a(),a(),a(),a()]),k.querySelector("#list")){const d=window.scrollY;j(),window.scrollTo(0,d)}}function Os(n){const e=G(n),a=e?{text:n.due?`✓ fällig war ${n.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:Ve(n.due),d=(C==null?void 0:C.userId)!=null&&n.responsibleUserId===C.userId,u=gn.get(n.id),c=cs(n),m=vn.get(n.id),p=[`<span class="num" title="Aufgabennummer">#${n.number}</span>`,u&&u.total?`<span class="${u.done===u.total?"complete":""}" title="Checkliste: ${u.done} von ${u.total} erledigt">☑ ${u.done}/${u.total}</span>`:"",c.total?`<span class="${c.done===c.total?"complete":""}" title="Unteraufgaben: ${c.done} von ${c.total} erledigt">🧩 ${c.done}/${c.total}</span>`:"",m?`<span title="${m} Dateien">📎 ${m}</span>`:"",`<span title="${n.comments} Kommentare">💬 ${n.comments}</span>`].filter(Boolean).join("");return`
    <button class="task-row card due-${a.level}${e?" is-done":""}${yt.has(n.id)?" fresh":""}" data-id="${o(n.id)}">
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="badge due-${a.level}">${o(a.text)}</span>
          ${n.status?`<span class="badge ${We(n.status)}">${o(n.status)}</span>`:""}
          ${n.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${o(n.creator??"den Ersteller")}">⏳ Bestätigung</span>`:""}
        </span>
      </span>
      <span class="task-side">
        ${n.unread?`<span class="unread-dot" title="${n.unread} ungelesene Nachrichten">${n.unread}</span>`:""}
        <span class="side-info">${p}</span>
      </span>
      ${n.responsible&&!d?n.responsiblePicture?`<img class="avatar who-avatar" src="${o(n.responsiblePicture)}" alt="${o(n.responsible)}" title="Verantwortlich: ${o(n.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${o(n.responsible)}">${o(Je(n.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function Us(n){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const d of n)d.due?Ee.overdue(d)?e.Überfällig.push(d):Ee.week(d)?e["Nächste 7 Tage"].push(d):e.Später.push(d):e["Ohne Fälligkeit"].push(d);const a=(d,u)=>{var c,m;return(((c=d.due)==null?void 0:c.getTime())??0)-(((m=u.due)==null?void 0:m.getTime())??0)};return Object.entries(e).filter(([,d])=>d.length).map(([d,u])=>[d,u.sort(a)])}function fe(n,e,a,d,u=""){return`<button class="chip ${u}${e?" active":""}" ${d} aria-pressed="${e}">${o(n)} <span class="count">${a}</span></button>`}function Vs(){const n=k.querySelector("#filters");if(!n)return;const e=u=>gt(Lt(),{...L,...u}).length,a=q.map(u=>u.status).filter(Boolean),d=[...new Set([...ft,...a,...L.status?[L.status]:[]])];n.innerHTML=`
    ${fe("Alle",!fn(L),gt(q,Ye(L.q)).length,'data-all="1"')}
    ${fe("⚠ Überfällig",L.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${fe("Diese Woche",L.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${fe("👤 Mir",L.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned" title="Mir zugewiesen"')}
    ${fe("✎ Von mir",L.owner==="created",e({owner:"created"}),'data-owner="created" title="Von mir erstellt"')}
    ${fe("● Neu",L.unread,e({unread:!0}),'data-unread="1" title="Mit ungelesenen Nachrichten"',"tone-brand")}
    <select id="status-filter" class="chip-select${L.status?" active":""}" aria-label="Status filtern">
      <option value="">Status: alle</option>
      ${d.map(u=>`<option${u===L.status?" selected":""}>${o(u)}</option>`).join("")}
    </select>`}const yn="mm-addin-collapsed",$n="mm-addin-density";function Ks(){try{return new Set(JSON.parse(localStorage.getItem(yn)??"[]"))}catch{return new Set}}const Se=Ks();function Ws(n){Se.has(n)?Se.delete(n):Se.add(n);try{localStorage.setItem(yn,JSON.stringify([...Se]))}catch{}}function ve(){try{return localStorage.getItem($n)==="compact"}catch{return!1}}function Rs(n){try{localStorage.setItem($n,n?"compact":"comfort")}catch{}}const _s={Überfällig:"danger","Nächste 7 Tage":"warn",Später:"neutral","Ohne Fälligkeit":"neutral",Erledigt:"ok","Passt zur geöffneten Mail":"info"};function Qt(n,e){const a=Se.has(n);return`<section class="group tone-${_s[n]??"neutral"}${a?" closed":""}">
      <button type="button" class="group-head" data-group="${o(n)}" aria-expanded="${!a}">
        <span class="caret">${a?"▸":"▾"}</span> ${o(n)} <span class="count">${e.length}</span>
      </button>
      ${a?"":`<div class="group-body">${e.map(Os).join("")}</div>`}
    </section>`}function j(){var c;const n=k.querySelector("#list");if(!n)return;const e=gt(Lt(),L),a=new Set((((c=ge())==null?void 0:c.subject)??"").match(/\d{4,}/g)??[]),d=q.filter(m=>a.has(String(m.number))),u=d.length?Qt("Passt zur geöffneten Mail",d):"";n.innerHTML=u+(e.length?(Me(L)?[["Erledigt",[...e].sort((m,p)=>{var S,b;return(((S=p.due)==null?void 0:S.getTime())??0)-(((b=m.due)==null?void 0:b.getTime())??0)})]]:Us(e)).map(([m,p])=>Qt(m,p)).join(""):`<div class="empty">${fn(L)||L.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),n.classList.toggle("compact",ve()),Vs()}function wn(){const n=ge();return Y&&n?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${o(n.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    ${n&&mn(n.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function vt(){var e;const n=k.querySelector("#actions");n&&(n.innerHTML=wn(),n.hidden=!n.innerHTML.trim()),(e=k.querySelector("#list"))==null||e.classList.toggle("picking",Y)}async function ie(n=!0){if(kt.hidden=!1,document.body.classList.remove("plain-bg"),Ts())return Ns(k);(n||!q.length)&&(k.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(C??(C=await Ue().catch(()=>{})),n||!q.length){const u=await qe();q=u.filter(c=>!G(c)),bt=u.filter(c=>G(c)),Ae=null,Me(L)&&await Jt()}ft.length||(ft=(await ut().catch(()=>[])).map(u=>u.name)),Ge=!1,Ln(),Gs(),n&&Fs(q)}catch(u){if(u instanceof as&&u.status===401)return Qe(u.message);k.innerHTML=`<div class="error">${o(M(u))}</div>`;return}const e=wn();k.innerHTML=`
    <div class="view">
      <div class="sticky-head list-head">
        <div class="toolbar">
          <strong class="grow">Meine Aufgaben <span class="hint">${q.length}</span></strong>
          <button class="icon-tool" id="density" title="${ve()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"}">${ve()?"▤":"☰"}</button>
          <button class="icon-tool" id="refresh" title="Liste neu laden">⟳</button>
          <button class="icon-tool" id="sound" title="${ae()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"}">${ae()?"🔔":"🔕"}</button>
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
      <div id="list" class="${Y?"picking":""}"></div>
    </div>`;const a=k.querySelector("#search");a.addEventListener("input",()=>{L.q=a.value,j()});const d=k.querySelector("#filters");d.addEventListener("click",u=>{const c=u.target.closest("button");c&&(c.dataset.all?L=Ye(L.q):c.dataset.time?L.time=L.time===c.dataset.time?"all":c.dataset.time:c.dataset.owner?L.owner=L.owner===c.dataset.owner?"all":c.dataset.owner:c.dataset.unread&&(L.unread=!L.unread),Zt(L),j())}),d.addEventListener("change",u=>{const c=u.target;c.id==="status-filter"&&(L.status=c.value,Zt(L),Me(L)?Jt().then(j):j())}),k.querySelector("#list").addEventListener("click",u=>{const c=u.target.closest("[data-group]");if(c)return Ws(c.dataset.group),j();const m=u.target.closest(".task-row"),p=Lt().find(b=>b.id===(m==null?void 0:m.dataset.id))??q.find(b=>b.id===(m==null?void 0:m.dataset.id));if(!p)return;const S=Y;Y=!1,St(p,void 0,S)}),j()}async function St(n,e,a=!1){const d=window.scrollY;window.scrollTo(0,0),await ht(k,n,()=>{ie(Ge),window.scrollTo(0,d)},e,()=>Ge=!0),a&&(Te==null||Te())}function Xt(n){window.scrollTo(0,0),Bs(k,n?ge():null,async(e,a)=>{q=(await qe().catch(()=>q)).filter(u=>!G(u));const d=q.find(u=>u.id===e.id||e.number&&u.number===e.number);d?await St(d,a):(await ie(!1),k.insertAdjacentHTML("afterbegin",`<div class="ok">${o(a)}</div>`))},()=>void ie(!1))}document.addEventListener("click",n=>{const e=k.querySelector("#theme-menu"),a=n.composedPath().some(d=>d instanceof HTMLElement&&(d.id==="theme-menu"||d.id==="theme"));e&&!e.hidden&&!a&&(e.hidden=!0)});k.addEventListener("click",n=>{const e=n.target;if(e.closest("#new-task"))Xt(!1);else if(e.closest("#from-chat"))ln({tasks:q,onClose:a=>a&&void ie()});else if(e.closest("#new-from-mail"))Xt(!0);else if(e.closest("#refresh"))ie();else if(e.closest("#density")){Rs(!ve());const a=k.querySelector("#density");a&&(a.textContent=ve()?"▤":"☰",a.title=ve()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"),j()}else if(e.closest("#theme")){const a=k.querySelector("#theme-menu");a&&(a.hidden=!a.hidden,a.hidden||(a.innerHTML=_t()))}else if(e.closest("#theme-menu button.opt")){const a=e.closest("#theme-menu button.opt"),d=a.dataset.mode?{mode:a.dataset.mode}:a.dataset.bg?{background:a.dataset.bg}:{accent:a.dataset.accent},u=Es(d);k.querySelector("#theme-menu").innerHTML=_t(u)}else if(e.closest("#sound")){xs(!ae());const a=k.querySelector("#sound");a&&(a.textContent=ae()?"🔔":"🔕",a.title=ae()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),ae()&&dn()}else e.closest("#pick-for-mail")?(Y=!0,vt()):e.closest("#pick-cancel")&&(Y=!1,vt())});kt.addEventListener("click",()=>{ss(),Qe()});const Ys=6e4;let Ze,kn=new Map;const yt=new Set;function Ln(){kn=new Map(q.map(n=>[n.id,n.unread]))}function Gs(){Ze||(Ze=window.setInterval(()=>void Js(),Ys))}function Zs(){window.clearInterval(Ze),Ze=void 0}async function Js(){if(!$t()||document.hidden)return;let n;try{n=(await qe()).filter(a=>!G(a))}catch{return}const e=n.filter(a=>a.unread>(kn.get(a.id)??0));if(q=n,Ln(),!!e.length){dn();for(const a of e)yt.add(a.id);if(setTimeout(()=>{for(const a of e)yt.delete(a.id);k.querySelectorAll(".task-row.fresh").forEach(a=>a.classList.remove("fresh"))},15e3),k.querySelector("#list")){const a=window.scrollY;j(),window.scrollTo(0,a)}else Ge=!0}}function Qs(){qs(),on(),Ms(),As(()=>{if(_e)return _e();Y=!1,vt(),j()}),$t()?ie().then(Sn):Qe()}let en=new URLSearchParams(location.search).get("task");async function Sn(){const n=en;if(!(!n||!$t())){en=null;try{const e=q.find(a=>a.id===n)??await rs(n);await St(e)}catch(e){k.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${o(M(e))}</div>`)}}}async function Xs(){var n,e;try{const a=location.href.split(/[?#]/)[0],u=(n=(await fetch(`${a}?check=${Date.now()}`,{cache:"no-store"}).then(b=>b.text())).match(/assets\/(taskpane|teams)-[\w-]+\.js/))==null?void 0:n[0],c=[...document.scripts].map(b=>b.src).find(b=>/assets\/(taskpane|teams)-/.test(b));if(!u||!c||c.includes(u))return;const m=()=>{const b=new URL(location.href);b.searchParams.set("v",String(Date.now())),location.replace(b.toString())},p=document.getElementById("update-note");p&&(p.hidden=!1,(e=p.querySelector("button"))==null||e.addEventListener("click",m));let S="";try{S=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",u)}catch{}S!==u&&m()}catch{}}let tn=!1;const Tn=()=>{tn||(tn=!0,Qs())};Xs();typeof Office<"u"&&Office.onReady(Tn);setTimeout(Tn,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 13:20 UTC";
