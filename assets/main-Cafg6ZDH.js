import{b as o,c as Ye,g as Pe,P as En,o as at,f as ct,h as it,j as Nt,k as Mn,r as qn,e as M,d as Fe,m as xn,n as Ue,p as In,q as lt,t as Dn,u as jt,v as Ce,w as Pt,x as Ft,y as Hn,z as dt,A as Cn,B as zn,C as Bn,D as ut,E as Qt,F as Xt,G as Nn,H as jn,s as Oe,I as ze,J as Pn,K as Fn,L as Un,M as Ve,N as On,O as Vn,Q as Wn,R as Kn,S as Rn,T as _n,l as Ae,a as G,U as Yn,V as Gn,W as Zn,X as Jn,Y as Qn,Z as Xn,_ as es,i as vt,$ as ts,a0 as ns}from"./util-BJiMtI86.js";import{s as Ut,m as me,n as ss,b as en,o as as,p as Be,q as is,t as ls,g as rs,l as os,d as cs,f as ds,k as us,e as Ot,j as Vt,u as ps,h as ms,v as hs,w as bs,x as fs,y as gs,z as vs,A as $s}from"./composemail-DsBydpTa.js";import{a as tn,t as Wt,u as ys,w as ws}from"./theme-BhVOt8wm.js";const nn="mm-addin-sound",sn="mm-addin-sent-mails";let ne=null;function ks(){const n=()=>{try{ne??(ne=new AudioContext),ne.resume()}catch{}};window.addEventListener("pointerdown",n,{once:!0,capture:!0}),window.addEventListener("keydown",n,{once:!0,capture:!0})}function se(){try{return localStorage.getItem(nn)!=="off"}catch{return!0}}function Ls(n){try{localStorage.setItem(nn,n?"on":"off")}catch{}}function an(){if(se())try{ne??(ne=new AudioContext);const n=ne.currentTime;for(const[e,i]of[880,1320].entries()){const r=ne.createOscillator(),c=ne.createGain();r.type="sine",r.frequency.value=i;const u=n+e*.16;c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(.18,u+.02),c.gain.exponentialRampToValueAtTime(1e-4,u+.14),r.connect(c).connect(ne.destination),r.start(u),r.stop(u+.15)}}catch{}}function ln(){try{return JSON.parse(localStorage.getItem(sn)??"{}")}catch{return{}}}function rn(n,e){const i=ln();i[n]=[...new Set([...i[n]??[],e])];const r=Object.keys(i);for(const c of r.slice(0,Math.max(0,r.length-200)))delete i[c];try{localStorage.setItem(sn,JSON.stringify(i))}catch{}}const on=n=>ln()[n]??[];function Ne(n,e="Name suchen …"){n.classList.add("picker"),n.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${o(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const i=n.querySelector("input"),r=n.querySelector("ul");let c=[],u,h=0,p=[];const S=()=>{const m=i.value.trim().toLowerCase();p=(m?c.filter(f=>f.name.toLowerCase().includes(m)):c).slice(0,8),h=Math.min(h,Math.max(p.length-1,0)),r.innerHTML=p.length?p.map((f,$)=>`<li role="option" data-i="${$}" class="${$===h?"active":""}"><span class="avatar sm">${o(Ye(f.name))}</span>${o(f.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',r.hidden=!1},b=m=>{u=m,i.value=m.name,r.hidden=!0};return i.addEventListener("focus",()=>{i.select(),S()}),i.addEventListener("input",()=>{u=void 0,h=0,S()}),i.addEventListener("keydown",m=>{if(!r.hidden){if(m.key==="ArrowDown")h=Math.min(h+1,p.length-1);else if(m.key==="ArrowUp")h=Math.max(h-1,0);else return m.key==="Enter"&&p[h]?(m.preventDefault(),b(p[h])):m.key==="Escape"?void(r.hidden=!0):void 0;m.preventDefault(),S()}}),r.addEventListener("mousedown",m=>{const f=m.target.closest("li[data-i]");f&&(m.preventDefault(),b(p[Number(f.dataset.i)]))}),i.addEventListener("blur",()=>{r.hidden=!0,u||(u=c.find(m=>m.name.toLowerCase()===i.value.trim().toLowerCase()))}),{setUsers(m,f){c=m;const $=c.find(y=>y.id===f);$&&!i.value&&b($)},selected:()=>u,focus:()=>i.focus()}}let We=null,ke=null;const cn="mm-addin-comment-order";function Ss(){try{return localStorage.getItem(cn)==="oldest"?"oldest":"newest"}catch{return"newest"}}function Ts(n){try{localStorage.setItem(cn,n)}catch{}}const Kt=n=>{var e;return!!((e=n.raw)!=null&&e.type)&&n.raw.type!=="text"};function As(n){const e=[];for(const i of n){const r=e[e.length-1];Kt(i)&&Array.isArray(r)?r.push(i):e.push(Kt(i)?[i]:i)}return e.map(i=>Array.isArray(i)&&i.length===1?i[0]:i)}function Es(n){const e=n.map(u=>{var h;return(h=u.createdAt)==null?void 0:h.getTime()}).filter(u=>!!u).sort((u,h)=>u-h),i=u=>new Date(u).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),r=u=>new Date(u).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),c=e.length?i(e[0])===i(e[e.length-1])?`${i(e[0])}, ${r(e[0])}–${r(e[e.length-1])}`:`${i(e[0])} – ${i(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${n.length} Änderungen <span class="hint">${c}</span></summary>
      ${n.map(u=>$t(u)).join("")}
    </details>`}function $t(n,e=!1){var c;const i=((c=n.raw)==null?void 0:c.type)&&n.raw.type!=="text",r=n.files.length?`<ul class="files">${n.files.map(u=>`<li>📎 ${u.url&&/^https:\/\//.test(u.url)?`<a href="${o(u.url)}" data-external>${o(u.name)}</a>`:o(u.name)}${u.size?` <span class="hint">${Be(u.size)}</span>`:""}</li>`).join("")}</ul>`:"";return i?`<div class="event">${n.html} · ${o(n.author)}${n.createdAt?`, ${Ve(n.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}">
      ${n.avatar?`<img class="avatar" src="${o(n.avatar)}" alt="">`:`<span class="avatar">${o(Ye(n.author))}</span>`}
      <div class="bubble">
        <header><strong>${o(n.author)}</strong>${n.createdAt?` <span class="hint">${Ve(n.createdAt)}</span>`:""}</header>
        ${n.html.trim()?`<div class="body">${Xt(n.html)}</div>`:n.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${r}
        ${n.replies.map(u=>$t(u,!0)).join("")}
      </div>
    </article>`}async function pt(n,e,i,r,c,u){var zt;We=null,ke=null;const h=await Pe().catch(()=>{});n.innerHTML=`
    <div class="view detail">
      <div class="topbar sticky-head">
        <button class="nav-btn" id="back" title="${u?`Zurück zur Hauptaufgabe #${u.number}`:"Zurück zur Aufgabenliste"}">← ${u?`#${u.number}`:"Zurück"}</button>
        <span class="hint grow center">${u?"Unteraufgabe":"Aufgabe"} #${e.number}</span>
        <button class="nav-btn" id="open-web" title="Diese Aufgabe in MyMonolith im Browser öffnen">Im Browser ↗</button>
      </div>
      ${u?`<div class="breadcrumb">↳ Unteraufgabe von <button type="button" class="link" id="to-parent">#${u.number} ${o(u.title)}</button></div>`:""}
      <h2 class="task-title">${o(e.title)}</h2>
      <div id="flash">${r?`<div class="ok">${o(r)}</div>`:""}</div>

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
            ${En.map(t=>`<option value="${t.value}"${t.value===(e.priority??"").toLowerCase()?" selected":""}>${t.label}</option>`).join("")}
          </select>
        </div>
        <div class="tile" id="tile-resp"></div>
        <div class="tile">
          <span class="tile-label">Erstellt von</span>
          <span>${o(e.creator??"–")}</span>
        </div>
      </div>

      <div class="section-title">Beteiligte</div>
      <div id="people" class="people"><p class="hint">Wird geladen …</p></div>

      <div class="section-title">Beschreibung</div>
      <div id="desc" class="desc"></div>

      <div class="tabs" role="tablist">
        <button class="tab active" role="tab" data-tab="comments" aria-selected="true">💬 Kommentare <span class="hint" id="count"></span></button>
        <button class="tab" role="tab" data-tab="checklist" aria-selected="false">☑ Checkliste <span class="hint" id="cl-count"></span></button>
        ${u?"":'<button class="tab" role="tab" data-tab="subtasks" aria-selected="false">🧩 Unteraufgaben <span class="hint" id="sub-count"></span></button>'}
        <button class="tab" role="tab" data-tab="files" aria-selected="false">📎 Dateien <span class="hint" id="files-count"></span></button>
        <button class="tab" role="tab" data-tab="activity" aria-selected="false">📋 Aktivität</button>
      </div>
      <form id="composer" class="composer">
        <div id="mail-menu" class="menu" role="menu" hidden></div>
        <div class="composer-head">✍ Neuer Kommentar</div>
        <div id="file-chips" class="file-chips"></div>
        <textarea id="comment" rows="3" placeholder="Nachricht an die Beteiligten …" aria-label="Kommentar"></textarea>
        <div class="composer-bar">
          <button type="button" class="tool-btn" id="mail-btn" title="Text, Datei oder Anhänge der geöffneten Mail einfügen" aria-haspopup="menu" hidden>📧 Mail einfügen</button>
          <label class="tool-btn" title="Datei vom PC anhängen">📎 Datei anhängen<input type="file" id="file-input" multiple hidden></label>
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

    </div>`;const p=t=>n.querySelector(t),S=p("#flash"),b=t=>{S.innerHTML=t,S.scrollIntoView({block:"nearest"})},m=t=>b(`<div class="ok">${o(t)}</div>`),f=t=>b(`<div class="error">${o(M(t))}</div>`),$=()=>c==null?void 0:c();p("#back").addEventListener("click",i),p("#open-web").addEventListener("click",()=>at(e.url)),p("#comments").addEventListener("click",t=>{const s=t.target.closest("a[data-external]");s&&(t.preventDefault(),at(s.href))});const y=p("#status"),g=p("#done-actions"),H=p("#phase-note"),V=(h==null?void 0:h.userId)!=null&&e.creatorUserId===h.userId;let C=null;const ae=t=>{e.phase=t,e.raw.StatusID=t==="done"?7:t==="pending"?5:1};function ie(){y.className=`bare status-select ${Oe(e.status)}`;const t=(a,l)=>C?C.includes(a):l;H.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${V?"durch Sie":`von <strong>${o(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const s=[];if(t("approve",e.phase==="pending"&&V)&&s.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),t("finish",e.phase==="open")){const a=e.needsApproval&&!V;s.push(`<button class="primary" data-act="finish" title="${a?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${a?"Zur Freigabe":"Erledigt"}</button>`)}t("reopen",e.phase!=="open")&&s.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),g.innerHTML=s.join(""),p("#tile-finish").hidden=!s.length}async function Lt(t){const s=[...y.options].find(a=>t.test((a.textContent??"").trim()));return!s||y.value===s.value?!1:(await it(e.id,s.value),y.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status,!0)}async function Ze(){try{const t=await Ft(e.id);C=t.actions,ae(t.phase);const s=t.spaStatusId?[...y.options].find(a=>a.value===t.spaStatusId):void 0;s&&(y.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status)}catch{}ie(),B==null||B(),R==null||R()}ie(),Ze(),ct().then(t=>{y.innerHTML=t.map(s=>`<option value="${o(s.id)}"${s.id===e.statusId||s.name===e.status?" selected":""}>${o(s.name)}</option>`).join(""),e.statusId??(e.statusId=y.value)}).catch(f);const Je=p("#status-confirm"),St=()=>y.value!==(e.statusId??y.value);y.addEventListener("change",()=>{Je.hidden=!St(),y.classList.toggle("is-pending",St())}),p("#status-cancel").addEventListener("click",()=>{e.statusId&&(y.value=e.statusId),Je.hidden=!0,y.classList.remove("is-pending")}),p("#status-ok").addEventListener("click",async()=>{var a;const t=e.statusId??"",s=((a=y.selectedOptions[0])==null?void 0:a.textContent)??"";Je.hidden=!0,y.classList.remove("is-pending"),y.disabled=!0;try{await it(e.id,y.value),e.statusId=y.value,e.status=s,m(`Status: ${s}`),$(),await Ze(),ve()}catch(l){y.value=t,f(l)}finally{y.disabled=!1}}),g.addEventListener("click",async t=>{var a;const s=t.target.closest("button[data-act]");if(s){g.querySelectorAll("button").forEach(l=>l.disabled=!0);try{const l=s.dataset.act;l==="finish"?(await Nt(e.id),ae(e.needsApproval&&!V?"pending":"done")):l==="approve"?(await Mn(e.id),ae("done")):l==="reopen"&&(await qn(e.id),ae("open")),await Ze();let d="";try{e.phase==="done"&&await Lt(/^erledigt$/i)?d=" Status: Erledigt.":l==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await Lt(/^zu erledigen$/i)&&(d=" Status: Zu erledigen.")}catch(L){d=` (Status konnte nicht angepasst werden: ${M(L)})`}ie(),m(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),d&&m(`${((a=S.textContent)==null?void 0:a.trim())??""}${d}`),le(),R(),$(),ve()}catch(l){f(l),ie()}}});const Z=p("#tile-due");function le(t=!1){var l;const s=Fe(e.due),a=xn(e,h);if(t){Z.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?Ue(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const d=Z.querySelector("#due-input");d.focus(),Z.querySelector("#due-cancel").addEventListener("click",()=>le()),Z.querySelector("#due-save").addEventListener("click",async()=>{if(!d.value)return d.focus();try{await In(e.id,d.value),e.due=new Date(`${d.value}T00:00:00`),m(`Fällig am ${lt(e.due)}`),$(),le()}catch(L){f(L)}});return}Z.className=`tile due-${s.level}`,Z.innerHTML=`
      <span class="tile-label">Fällig ${a?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${a?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?lt(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?lt(e.due):"–"}</span>`}
      <span class="tile-sub">${o(s.text)}</span>`,(l=Z.querySelector("#due-edit"))==null||l.addEventListener("click",()=>le(!0))}le();const W=p("#prio"),Tt=()=>W.dataset.p=W.value;Tt(),W.addEventListener("change",async()=>{const t=e.priority??"";try{await Dn(e.id,W.value),e.priority=W.value,e.raw.Priority=W.value,Tt(),m(`Priorität: ${W.selectedOptions[0].textContent}`),$()}catch(s){W.value=t,f(s)}});const j=p("#tile-resp");function B(t="view",s){var a;if(t==="view"){j.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${o(e.responsible??"–")}</span>
        ${!C||C.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(a=j.querySelector("#resp-edit"))==null||a.addEventListener("click",()=>B("pick"));return}if(t==="pick"){j.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const l=Ne(j.querySelector("#resp-picker"));ze().then(d=>l.setUsers(d)).catch(f),l.focus(),j.querySelector("#resp-cancel").addEventListener("click",()=>B()),j.querySelector("#resp-next").addEventListener("click",()=>{const d=l.selected();d?B("confirm",d):l.focus()});return}j.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${o(s.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,j.querySelector("#resp-cancel").addEventListener("click",()=>B()),j.querySelector("#resp-ok").addEventListener("click",async()=>{try{await Pn(e.id,s.id),e.responsible=s.name,e.responsibleUserId=s.userId,m(`Weitergegeben an ${s.name}.`),$(),B(),le()}catch(l){f(l),B()}})}B();const re=p("#people");let K={administrators:[],participants:[]};const At={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},$n=(t,s)=>`
    <span class="person-chip" title="${o(s.name)}">
      ${s.picture?`<img class="avatar sm" src="${o(s.picture)}" alt="">`:`<span class="avatar sm">${o(Ye(s.name))}</span>`}
      ${o(s.name)}
      <button type="button" data-rm-person="${t}:${o(s.id)}" aria-label="${o(s.name)} entfernen" title="Entfernen">×</button>
    </span>`;function be(t){if(re.innerHTML=["administrators","participants"].map(s=>`
        <div class="people-row">
          <span class="people-label">${At[s]}</span>
          <div class="people-list">
            ${K[s].map(a=>$n(s,a)).join("")||'<span class="hint">niemand</span>'}
            ${t===s?"":`<button type="button" class="add-person" data-add-person="${s}">＋ Hinzufügen</button>`}
          </div>
          ${t===s?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),t){const s=Ne(re.querySelector("#people-picker"),"Kollegen suchen …"),a=new Set(K[t].map(l=>l.id));ze().then(l=>s.setUsers(l.filter(d=>!a.has(d.id)))).catch(f),s.focus(),re.querySelector("#people-cancel").addEventListener("click",()=>be()),re.querySelector("#people-save").addEventListener("click",async()=>{const l=s.selected();if(!l)return s.focus();await Et(t,[...K[t],{...l}],`${l.name} als ${At[t]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function Et(t,s,a){try{await Fn(e.id,t,s.map(l=>l.id)),K=await jt(e.id).catch(()=>({...K,[t]:s})),m(a),$(),be(),p("#activity").hidden||Qe(!0)}catch(l){f(l),be()}}re.addEventListener("click",t=>{const s=t.target,a=s.closest("[data-add-person]");if(a)return be(a.dataset.addPerson);const l=s.closest("[data-rm-person]");if(l){const[d,L]=l.dataset.rmPerson.split(":"),w=K[d].find(E=>E.id===L);Et(d,K[d].filter(E=>E.id!==L),`${(w==null?void 0:w.name)??"Person"} entfernt.`)}}),jt(e.id).then(t=>{K=t,be()}).catch(t=>re.innerHTML=`<div class="error">${o(M(t))}</div>`);const J=p("#activity");let fe=1;const Mt={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},yn={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},wn=t=>{const s=t.replace(/^niki\.field\./i,"").replace(/[_\s]/g,a=>a==="_"?"":" ").toLowerCase();return Mt[s]??Mt[s.replace(/\s/g,"")]??t.replace(/^niki\.field\./i,"")},qt=t=>yn[t.replace(/[\s_]/g,"").toLowerCase()]??t;async function Qe(t=!1){var s;t&&(fe=1),fe===1&&(J.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const a=await Un(e.id,fe),l=a.logs.map(d=>`
          <div class="log">
            <div class="log-head"><strong>${o(d.user)}</strong> · ${o(wn(d.field))}${d.at?`<span class="hint"> · ${Ve(d.at)}</span>`:""}</div>
            <div class="log-change">
              ${d.from?`<span class="log-from">${o(qt(d.from))}</span> → `:""}<span class="log-to">${o(qt(d.to)||"–")}</span>
            </div>
          </div>`).join("");fe===1?J.innerHTML=l||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((s=J.querySelector(".more-activity"))==null||s.remove(),J.insertAdjacentHTML("beforeend",l)),a.hasMore&&J.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),fe++}catch(a){J.innerHTML=`<div class="error">${o(M(a))}</div>`}}J.addEventListener("click",t=>{t.target.closest(".more-activity")&&Qe()}),n.querySelector(".tabs").addEventListener("click",t=>{const s=t.target.closest(".tab");if(!s)return;const a=s.dataset.tab;n.querySelectorAll(".tab").forEach(l=>{const d=l===s;l.classList.toggle("active",d),l.setAttribute("aria-selected",String(d))});for(const l of["comments","checklist","subtasks","files","activity"]){const d=n.querySelector(`#${l}`);d&&(d.hidden=l!==a)}p("#composer").hidden=a!=="comments",a==="activity"&&Qe(!0),a==="checklist"&&kn(),a==="subtasks"&&xe(),a==="files"&&et()});const z=p("#checklist");let T=[],oe=null;function xt(){const t=T.filter(s=>s.done).length;p("#cl-count").textContent=T.length?`${t}/${T.length}`:""}function P(){var a;const t=T.filter(l=>l.done).length,s=T.length?Math.round(t/T.length*100):0;z.innerHTML=`
      ${T.length?`<div class="progress"><div class="progress-bar" style="width:${s}%"></div></div>
        <div class="hint">${t} von ${T.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${T.map((l,d)=>oe===l.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${o(l.id)}" value="${o(l.item)}" aria-label="Punkt umbenennen">
                  <button type="button" class="small primary" data-cl="save" data-id="${o(l.id)}">Speichern</button>
                  <button type="button" class="small" data-cl="cancel">Abbrechen</button></li>`:`<li class="cl-item${l.done?" done":""}">
                  <label class="cl-check"><input type="checkbox" data-cl="toggle" data-id="${o(l.id)}"${l.done?" checked":""}><span class="cl-text" data-cl="edit" data-id="${o(l.id)}">${o(l.item)}</span></label>
                  <span class="cl-tools">
                    <button type="button" class="icon-btn sm" data-cl="up" data-i="${d}" title="Nach oben" aria-label="Nach oben"${d===0?" disabled":""}>▲</button>
                    <button type="button" class="icon-btn sm" data-cl="down" data-i="${d}" title="Nach unten" aria-label="Nach unten"${d===T.length-1?" disabled":""}>▼</button>
                    <button type="button" class="icon-btn sm" data-cl="edit" data-id="${o(l.id)}" title="Umbenennen" aria-label="Umbenennen">✎</button>
                    <button type="button" class="icon-btn sm" data-cl="del" data-id="${o(l.id)}" title="Löschen" aria-label="Löschen">×</button>
                  </span></li>`).join("")||'<li class="hint empty-thread">Noch keine Punkte.</li>'}
      </ul>
      <form class="cl-add" id="cl-add">
        <input id="cl-new" placeholder="Neuer Punkt … (Enter fügt hinzu)" aria-label="Neuer Checklisten-Punkt">
        <button class="primary small" type="submit">＋</button>
      </form>`,xt(),(a=z.querySelector(".cl-edit"))==null||a.focus()}async function kn(){try{T=await Ce(e.id),P()}catch(t){z.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function ge(t,s=!0){try{await t(),s&&(T=await Ce(e.id)),$()}catch(a){f(a)}P()}z.addEventListener("click",t=>{const s=t.target.closest("[data-cl]");if(!s)return;const a=s.dataset.cl,l=T.find(d=>d.id===s.dataset.id);if(a==="toggle"&&l)l.done=s.checked,P(),ge(()=>Vn(l.id,l.done),!1);else if(a==="edit"&&l&&(s.tagName==="BUTTON"||t.detail===2))t.preventDefault(),oe=l.id,P();else if(a==="cancel")oe=null,P();else if(a==="save"&&l){const d=z.querySelector(".cl-edit").value.trim();oe=null,d&&d!==l.item?ge(()=>Wn(e.id,l,d,T.indexOf(l))):P()}else if(a==="del"&&l)ge(()=>Kn(l.id));else if(a==="up"||a==="down"){const d=Number(s.dataset.i),L=a==="up"?d-1:d+1;if(L<0||L>=T.length)return;[T[d],T[L]]=[T[L],T[d]],P(),ge(()=>Rn(e.id,T.map(w=>w.id)))}}),z.addEventListener("dblclick",t=>{const s=t.target.closest(".cl-text");s&&(t.preventDefault(),oe=s.dataset.id??null,P())}),z.addEventListener("keydown",t=>{var a;t.target.classList.contains("cl-edit")&&(t.key==="Enter"?(t.preventDefault(),(a=z.querySelector('[data-cl="save"]'))==null||a.click()):t.key==="Escape"&&(oe=null,P()))}),z.addEventListener("submit",t=>{t.preventDefault();const s=z.querySelector("#cl-new"),a=s.value.trim();if(!a)return s.focus();ge(()=>_n(e.id,a,T.length)).then(()=>{var l;return(l=z.querySelector("#cl-new"))==null?void 0:l.focus()})}),Ce(e.id).then(t=>{T=t,xt()}).catch(()=>{});const x=n.querySelector("#subtasks");let Q=[],Ee=!1,Me=null;function It(){const t=n.querySelector("#sub-count");if(!t)return;const s=Q.filter(a=>a.phase==="done"||/^erledigt$/i.test(a.status??"")).length;t.textContent=Q.length?`${s}/${Q.length}`:""}function qe(){if(x&&(x.innerHTML=`
      <div class="sub-list">
        ${Q.map(t=>{const s=Fe(t.due),a=t.phase==="done"||/^erledigt$/i.test(t.status??"");return`
            <div class="sub-item${a?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${o(t.id)}" title="${a?"Erledigt":t.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${a||t.phase==="pending"?" disabled":""}>${a?"✓":t.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${o(t.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${o(t.title)}</span>
                <span class="task-meta"><span class="num">#${t.number}</span>
                  <span class="badge due-${s.level}">${o(s.text)}</span>
                  ${t.status?`<span class="badge ${Oe(t.status)}">${o(t.status)}</span>`:""}
                  ${t.responsible?`<span class="who">${o(t.responsible)}</span>`:""}</span>
              </button>
              ${Me===t.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${o(t.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${o(t.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${Ee?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${Ue(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,It(),Ee)){const t=Ne(x.querySelector("#sub-assignee"));Promise.all([ze(),Pe()]).then(([s,a])=>t.setUsers(s,a.id)).catch(f),x.querySelector("#sub-name").focus(),x.querySelector("#sub-form").addEventListener("submit",async s=>{s.preventDefault();const a=t.selected();if(!a)return t.focus();const l=x.querySelector("#sub-form button[type=submit]");l.disabled=!0;try{const d=await On(e.id,{name:x.querySelector("#sub-name").value.trim(),dueAt:x.querySelector("#sub-due").value,assigneeId:a.id});Ee=!1,m(`Unteraufgabe #${d.number} angelegt.`),$(),await xe()}catch(d){f(d),l.disabled=!1}})}}async function xe(){if(x)try{Q=await Pt(e.id),qe()}catch(t){x.innerHTML=`<div class="error">${o(M(t))}</div>`}}x==null||x.addEventListener("click",async t=>{const s=t.target.closest("[data-sub]");if(!s)return;const a=s.dataset.sub,l=Q.find(d=>d.id===s.dataset.id);if(a==="form-open"||a==="form-cancel")Ee=a==="form-open",qe();else if(a==="open"&&l)await pt(n,l,()=>void pt(n,e,i,void 0,c),void 0,c,e);else if(a==="finish"&&l){s.setAttribute("disabled","");try{await Nt(l.id);const d=await Ft(l.id);if(d.phase==="done"){const w=(await ct()).find(E=>/^erledigt$/i.test(E.name));w&&await it(l.id,w.id).catch(()=>{})}m(d.phase==="pending"?`#${l.number} abgeschlossen – wartet auf Bestätigung.`:`#${l.number} erledigt.`),$()}catch(d){f(d)}await xe()}else if(a==="unlink"&&l)Me=l.id,qe();else if(a==="unlink-no")Me=null,qe();else if(a==="unlink-ok"&&l){Me=null;try{await Hn(l.id,e.id),m(`#${l.number} ist jetzt eine eigenständige Aufgabe.`),$()}catch(d){f(d)}await xe()}}),x&&Pt(e.id).then(t=>{Q=t,It()}).catch(()=>{}),(zt=n.querySelector("#to-parent"))==null||zt.addEventListener("click",i);const F=p("#files");let X=[],Xe=0,U=[];const Ln=(t,s)=>s?"🖼️":t==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(t)?"📘":/^(xlsx?|csv|ods)$/.test(t)?"📗":/^(pptx?|odp)$/.test(t)?"📙":/^(zip|rar|7z|gz|tar)$/.test(t)?"🗜️":/^(eml|msg)$/.test(t)?"✉️":/^(txt|log|xml|json)$/.test(t)?"📄":"📎";function Dt(){p("#files-count").textContent=X.length?`(${X.length})`:""}function Ie(){F.innerHTML=`
      <div class="files-tools">
        ${U.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${U.map((t,s)=>`<span class="file-chip">📎 <span class="ellipsis">${o(t.name)}</span> <span class="hint">${Be(t.size)}</span><button type="button" data-rm-up="${s}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${X.map(t=>`
          <button type="button" class="file-row" data-file="${o(t.id)}" title="${o(t.name)} öffnen">
            ${t.isImage&&t.thumb?`<img class="file-thumb" src="${o(t.thumb)}" alt="">`:`<span class="file-icon">${Ln(t.ext,t.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${o(t.name)}</span>
              <span class="file-meta">${[t.size?Be(t.size):"",t.uploadedBy?`von ${o(t.uploadedBy)}`:"",t.uploadedAt?Ve(t.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${t.commentText?`<span class="file-comment">„${o(t.commentText)}${t.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Dt()}async function et(){try{X=await dt(e.id),Xe=Date.now(),Ie()}catch(t){F.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function Sn(t){if(Date.now()-Xe>20*6e4&&(await et(),t=X.find(s=>s.id===t.id&&s.name===t.name)??t),!t.url)return f(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));at(t.url)}F.addEventListener("click",t=>{const s=t.target,a=s.closest("[data-file]");if(a){const d=X.find(L=>L.id===a.dataset.file);d&&Sn(d);return}const l=s.closest("[data-rm-up]");l?(U.splice(Number(l.dataset.rmUp),1),Ie()):s.closest("#upload-cancel")&&(U=[],Ie())}),F.addEventListener("change",t=>{var a;const s=t.target;s.id==="upload-input"&&(U=Array.from(s.files??[]),Ie(),(a=F.querySelector("#upload-note"))==null||a.focus())}),F.addEventListener("submit",async t=>{t.preventDefault();const s=F.querySelector("#upload-form button[type=submit]"),a=F.querySelector("#upload-msg"),l=F.querySelector("#upload-note").value.trim();s.disabled=!0;try{const d=U.length;await Ut(e.messageId,{note:l||`${d===1?"Datei":`${d} Dateien`} hochgeladen: ${U.map(L=>L.name).join(", ")}`,files:U},L=>a.innerHTML=`<p class="hint">${o(L)}</p>`),U=[],m(`${d===1?"Datei":`${d} Dateien`} hochgeladen.`),$(),await et()}catch(d){a.innerHTML=`<div class="error">${o(M(d))}</div>`,s.disabled=!1}}),dt(e.id).then(t=>{X=t,Xe=Date.now(),Dt()}).catch(()=>{});const ce=p("#desc");function R(t=!1){var l;const s=C?C.includes("edit")&&e.phase==="open":Cn(e,h);if(t){ce.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${o(zn(e.description))}</textarea>
        ${Bn(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const d=ce.querySelector("#desc-input");d.focus(),ce.querySelector("#desc-cancel").addEventListener("click",()=>R()),ce.querySelector("#desc-save").addEventListener("click",async()=>{const L=d.value.trim()?ut(d.value):"";try{await Qt(e.id,L),e.description=L,e.raw.TaskDescription=L,m("Beschreibung gespeichert."),$(),R()}catch(w){f(w)}});return}const a=e.description.trim()?`<div class="desc-body">${Xt(e.description)}</div>`:`<div class="hint">${s?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;ce.innerHTML=`${a}${s?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(l=ce.querySelector("#desc-edit"))==null||l.addEventListener("click",()=>R(!0))}R();const ee=p("#comments");async function ve(t=!1){var s;try{const a=[];for(let w=1;w<=10;w++){const E=await Nn(e.messageId,w,50);if(a.push(...E.comments),!E.hasMore)break}const l=Ss()==="newest";a.sort((w,E)=>{var ue,ye;return((((ue=w.createdAt)==null?void 0:ue.getTime())??0)-(((ye=E.createdAt)==null?void 0:ye.getTime())??0))*(l?-1:1)});const d=a.filter(w=>{var E;return!((E=w.raw)!=null&&E.type)||w.raw.type==="text"}).length;p("#count").textContent=d?`(${d})`:"";const L=`<div class="thread-tools">
          <span class="thread-title">Verlauf${d?` · ${d} ${d===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${l?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;ee.innerHTML=a.length?L+As(a).map(w=>Array.isArray(w)?Es(w):$t(w)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(s=ee.querySelector("#order-toggle"))==null||s.addEventListener("click",()=>{Ts(l?"oldest":"newest"),ve()}),ee.querySelectorAll(".bubble > .body").forEach(w=>{if(w.scrollHeight<=320)return;w.classList.add("clamped");const E=document.createElement("button");E.type="button",E.className="link small more",E.textContent="Mehr anzeigen ▾",E.addEventListener("click",()=>{const ue=w.classList.toggle("clamped");E.textContent=ue?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),w.after(E)}),t&&(l?ee.scrollIntoView({block:"start"}):(ee.lastElementChild??ee).scrollIntoView({block:"end"}))}catch(a){ee.innerHTML=`<div class="error">${o(M(a))}</div>`}}const De=p("#composer"),N=p("#comment"),tt=p("#file-input"),Ht=p("#file-chips"),de=p("#comment-msg"),nt=p("#mail-btn"),I=p("#mail-menu");let te=[],A=null;const He=(t,s,a,l,d="")=>`<span class="file-chip ${d}">${t} <span class="ellipsis">${o(s)}</span>${a?` <span class="hint">${Be(a)}</span>`:""}<button type="button" data-rm="${l}" aria-label="Entfernen">×</button></span>`;function $e(){const t=A;Ht.innerHTML=[...t!=null&&t.text?[He("📧",`Mailtext: ${t.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...t!=null&&t.eml?[He("📄",t.eml.name,t.eml.blob.size,"mail-eml","mail")]:[],...((t==null?void 0:t.atts)??[]).map((s,a)=>He("📎",s.name,s.size,`mail-att:${a}`)),...te.map((s,a)=>He("📎",s.name,s.size,`file:${a}`))].join("")}const Tn=t=>((!A||A.mail.key!==t.key)&&(A={mail:t,text:!1,atts:[]}),A);function st(){const t=me();nt.hidden=!t||on(t.key).includes(e.number),t||(I.hidden=!0),A&&(!t||t.key!==A.mail.key)&&(A=null,$e())}function Ct(){var L;const t=me();if(!t)return;const s=(A==null?void 0:A.mail.key)===t.key?A:null,a=t.attachments.filter(w=>!w.isInline),l=is(),d=(w,E,ue,ye,An=!1,Bt="")=>`<button type="button" role="menuitem" data-act="${w}"${An||ye?" disabled":""}${Bt?` title="${o(Bt)}"`:""}>
        <span>${E}</span><span class="grow">${o(ue)}</span>${ye?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;I.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${o(t.subject||"(ohne Betreff)")}</div>
      ${d("text","📧","Mailtext als Inhalt einfügen",!!(s!=null&&s.text))}
      ${d("eml","📄","Mail als Datei anhängen (.eml)",!!(s!=null&&s.eml),!l,l?"":"In dieser Outlook-Version nicht verfügbar")}
      ${d("atts","📎",`Anhänge der Mail übernehmen (${a.length})`,!!s&&a.length>0&&a.every(w=>s.atts.includes(w)),a.length===0,a.length?"":"Die Mail hat keine Anhänge")}`,I.hidden=!1,(L=I.querySelector("button:not([disabled])"))==null||L.focus()}nt.addEventListener("click",t=>{t.stopPropagation(),I.hidden?Ct():I.hidden=!0}),document.addEventListener("click",t=>{!I.hidden&&!I.contains(t.target)&&(I.hidden=!0)}),I.addEventListener("keydown",t=>{t.key==="Escape"&&(I.hidden=!0,nt.focus())}),I.addEventListener("click",async t=>{const s=t.target.closest("button[data-act]"),a=me();if(!s||!a)return;t.stopPropagation();const l=Tn(a);if(s.dataset.act==="text")l.text=!0;else if(s.dataset.act==="atts")l.atts=a.attachments.filter(d=>!d.isInline);else if(s.dataset.act==="eml"){s.disabled=!0,s.querySelector(".grow").textContent="Mail wird geladen …";try{l.eml=await ss(a)}catch(d){de.innerHTML=`<div class="error">${o(M(d))}</div>`}}I.hidden=!0,$e(),N.focus()}),tt.addEventListener("change",()=>{te=[...te,...Array.from(tt.files??[])],tt.value="",$e()}),Ht.addEventListener("click",t=>{var d;const s=(d=t.target.closest("[data-rm]"))==null?void 0:d.dataset.rm;if(!s)return;const[a,l]=s.split(":");a==="file"?te.splice(Number(l),1):A&&(a==="mail-text"?A.text=!1:a==="mail-eml"?A.eml=void 0:a==="mail-att"&&A.atts.splice(Number(l),1),!A.text&&!A.eml&&!A.atts.length&&(A=null)),$e()}),N.addEventListener("input",()=>{N.style.height="auto",N.style.height=`${Math.min(Math.max(N.scrollHeight,72),260)}px`}),N.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&De.requestSubmit()}),De.addEventListener("submit",async t=>{t.preventDefault();const s=N.value,a=A;if(!s.trim()&&!te.length&&!a)return N.focus();const l=De.querySelector("button[type=submit]");l.disabled=!0,de.innerHTML="";try{const d=await Ut(e.messageId,{note:s,mailText:a!=null&&a.text?a.mail:void 0,eml:a==null?void 0:a.eml,mailAttachments:a==null?void 0:a.atts,files:te},L=>de.innerHTML=`<p class="hint">${o(L)}</p>`);a&&(rn(a.mail.key,e.number),en(a.mail.conversationId,e)),N.value="",N.style.height="auto",te=[],A=null,$e(),st(),de.innerHTML=`<div class="ok">${o(as(d,!!a))}</div>`,setTimeout(()=>de.innerHTML="",6e3),$(),await ve(!0)}catch(d){de.innerHTML=`<div class="error">${o(M(d))}</div>`}finally{l.disabled=!1}}),st(),We=st,ke=()=>{De.scrollIntoView({block:"end"}),Ct()},await ve(),e.unread>0&&jn(e.messageId).then(()=>{e.unread=0,$()}).catch(()=>{})}let pe=[];const Rt=n=>({taskId:n.id,messageId:n.messageId,number:n.number,title:n.title});function rt(n,e,i=""){const r=Fe(n.due);return`
    <button type="button" class="task-row card due-${r.level}${e?" is-selected":""}" data-pick="${o(n.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="num">#${n.number}</span>
          <span class="badge due-${r.level}">${o(r.text)}</span>
          ${n.status?`<span class="badge ${Oe(n.status)}">${o(n.status)}</span>`:""}
          ${i?`<span class="badge suggest">${o(i)}</span>`:""}
        </span>
      </span>
    </button>`}async function Ms(n){const e=document.createElement("div");if(n.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!ls()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{pe=(await Ae()).filter(b=>!G(b))}catch(b){e.innerHTML=`<div class="pad"><div class="error">${o(M(b))}</div></div>`;return}let i=await rs()??{tasks:[],withAttachments:!0};const r=os(pe,await ds(),cs());let c=!1;!i.tasks.length&&r.length&&!await us()&&(i={...i,tasks:[Rt(r[0].task)]},await Ot(i).catch(()=>{}),Vt({chosen:i.tasks}),c=!0);let u="";const h=b=>i.tasks.some(m=>m.taskId===b),p=()=>{const b=u.trim().toLowerCase(),m=b?pe.filter(g=>g.title.toLowerCase().includes(b)||String(g.number).includes(b.replace(/^#/,""))).slice(0,40):pe.filter(g=>!r.some(H=>H.task.id===g.id)&&!h(g.id)).slice(0,40),f=i.tasks.map(g=>pe.find(H=>H.id===g.taskId)??null),$=r.filter(g=>!h(g.task.id)),y=i.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${y?`<div class="compose-choice">
              <div class="hint">${c?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${y} ${y===1?"Aufgabe":"Aufgaben"}:</div>
              ${f.map((g,H)=>g?rt(g,!0):`<div class="card pad">#${i.tasks[H].number} ${o(i.tasks[H].title)}</div>`).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${y===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${i.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${$.length?`<h3 class="compose-sub">Vorschläge</h3>${$.map(g=>rt(g.task,!1,g.why)).join("")}`:""}
        <h3 class="compose-sub">${y?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${o(u)}">
        <div class="compose-list">${m.map(g=>rt(g,h(g.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${ms()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},S=async b=>{try{await Ot(b),i=b,c=!1,Vt({chosen:b.tasks}),p()}catch(m){const f=e.querySelector("#compose-msg");f&&(f.innerHTML=`<div class="error">${o(M(m))}</div>`)}};e.addEventListener("click",b=>{const m=b.target,f=m.closest("[data-pick]");if(f){const $=f.dataset.pick,y=pe.find(g=>g.id===$);if(!y)return;S({...i,tasks:h($)?i.tasks.filter(g=>g.taskId!==$):[...i.tasks,Rt(y)]})}else m.closest("#clear-choice")&&S({...i,tasks:[]})}),e.addEventListener("change",b=>{const m=b.target;m.id==="with-att"&&S({...i,withAttachments:m.checked}),m.id==="auto-suggest"&&ps(m.checked)}),e.addEventListener("input",b=>{const m=b.target;if(m.id!=="search")return;u=m.value;const f=m.selectionStart;p();const $=e.querySelector("#search");$.focus(),$.setSelectionRange(f,f)}),p()}const qs=n=>n.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function xs(n,e,i,r){const c=new Date(Date.now()+6048e5);n.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${o(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${o(e?qs(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${Ue(c)}" min="${Ue(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${hs(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const u=f=>n.querySelector(f),h=u("#f-new"),p=n.querySelector("#with-mail"),S=u("#new-msg"),b=f=>S.innerHTML=f;u("#cancel").addEventListener("click",r),p==null||p.addEventListener("change",()=>u("#atts").hidden=!p.checked);const m=Ne(u("#assignee"));Promise.all([ze(),Pe()]).then(([f,$])=>m.setUsers(f,$.id)).catch(f=>b(`<div class="error">Personenliste: ${o(M(f))}</div>`)),u("#name").focus(),h.addEventListener("submit",async f=>{f.preventDefault();const $=m.selected();if(!$){b('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),m.focus();return}const y=h.querySelector("button[type=submit]");y.disabled=!0;try{b('<p class="hint">Aufgabe wird angelegt …</p>');const g=await Yn({name:u("#name").value.trim(),dueAt:u("#due").value,assigneeId:$.id}),H=u("#desc").value;let V=`Aufgabe #${g.number||""} angelegt.`;if(H.trim())try{await Qt(g.id,ut(H))}catch{await Gn(g.messageId,ut(H)).catch(()=>{})}try{if(e&&(p!=null&&p.checked)){const C=bs(u("#atts"),e),ae=await fs(g.messageId,e,C,"",ie=>b(`<p class="hint">${o(ie)}</p>`));V+=" "+gs(C.length,ae.shortened),rn(e.key,g.number),en(e.conversationId,{id:g.id,number:g.number,title:u("#name").value.trim()})}}catch(C){V+=` Hinweis: ${M(C)}`}i(g,V)}catch(g){b(`<div class="error">${o(M(g))}</div>`),y.disabled=!1}})}tn();const v=document.getElementById("app"),yt=document.getElementById("logout-link");function Is(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function Ge(n){Us(),yt.hidden=!0;const e=Qn()??Is();v.innerHTML=`
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
    </form>`;const i=v.querySelector("#f-email"),r=v.querySelector("#f-code"),c=v.querySelector("#email"),u=v.querySelector("#code"),h=v.querySelector("#code-error");i.addEventListener("submit",async p=>{p.preventDefault();const S=i.querySelector("button");S.disabled=!0;try{await Xn(c.value.trim()),v.querySelector("#sent-to").textContent=c.value.trim(),i.hidden=!0,r.hidden=!1,u.focus()}catch(b){Ge(M(b))}finally{S.disabled=!1}}),r.addEventListener("submit",async p=>{p.preventDefault();const S=r.querySelector("button.primary");S.disabled=!0,h.innerHTML="";try{await es(c.value.trim(),u.value.trim()),await he(),await gn()}catch(b){h.innerHTML=`<div class="error">${o(M(b))}</div>`}finally{S.disabled=!1}}),v.querySelector("#back").addEventListener("click",()=>{r.hidden=!0,i.hidden=!1})}const dn="mm-addin-filters",Ke=(n="")=>({time:"all",owner:"all",unread:!1,status:"",q:n});function Ds(){try{return{...Ke(),...JSON.parse(localStorage.getItem(dn)??"{}"),q:""}}catch{return Ke()}}function mt(n){try{localStorage.setItem(dn,JSON.stringify({...n,q:""}))}catch{}}let q=[],Le=null,ht=[],bt=[];const Te=n=>/erledigt/i.test(n.status),wt=()=>Te(k)?Le??[]:q;async function _t(){if(Le)return;const n=v.querySelector("#list");n&&(n.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await Ae("status_id=7"),i=new Set;Le=[...e,...ht].filter(r=>!i.has(r.id)&&i.add(r.id))}catch(e){Le=[...ht],n&&(n.innerHTML=`<div class="error">${o(M(e))}</div>`)}}let D,k=Ds(),Y=!1,Re=!1;function ot(){const n=new Date;return n.setHours(0,0,0,0),n}const Se={overdue:n=>!G(n)&&!!n.due&&n.due<ot(),week:n=>!G(n)&&!!n.due&&n.due>=ot()&&n.due<new Date(ot().getTime()+7*864e5),assigned:n=>(D==null?void 0:D.userId)!=null&&n.responsibleUserId===D.userId,created:n=>(D==null?void 0:D.userId)!=null&&n.creatorUserId===D.userId,unread:n=>n.unread>0};function un(n,e){const i=e.q.trim().toLowerCase();return n.filter(r=>(e.time==="all"||Se[e.time](r))&&(e.owner==="all"||Se[e.owner](r))&&(!e.unread||Se.unread(r))&&(!e.status||Te(e)||r.status===e.status)&&(!i||r.title.toLowerCase().includes(i)||String(r.number).includes(i)))}const Hs=n=>n.time!=="all"||n.owner!=="all"||n.unread||!!n.status,pn=new Map,je=new Map;function Cs(n){const e=pn.get(n.id),i=ns(n);return[e&&e.total?`<span class="badge progress-badge${e.done===e.total?" complete":""}" title="Checkliste: ${e.done} von ${e.total} erledigt">☑ ${e.done}/${e.total}</span>`:"",i.total?`<span class="badge progress-badge${i.done===i.total?" complete":""}" title="Unteraufgaben: ${i.done} von ${i.total} erledigt">🧩 ${i.done}/${i.total}</span>`:"",je.get(n.id)?`<span class="badge progress-badge" title="${je.get(n.id)} Dateien">📎 ${je.get(n.id)}</span>`:""].join("")}async function zs(n){const e=[...n],i=async()=>{for(let r=e.shift();r;r=e.shift())try{const[c,u]=await Promise.all([Ce(r.id),dt(r.id).catch(()=>[])]);pn.set(r.id,{done:c.filter(h=>h.done).length,total:c.length}),je.set(r.id,u.length)}catch{}};if(await Promise.all([i(),i(),i(),i()]),v.querySelector("#list")){const r=window.scrollY;O(),window.scrollTo(0,r)}}function Yt(n){const e=G(n),i=e?{text:n.due?`✓ fällig war ${n.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:Fe(n.due),r=(D==null?void 0:D.userId)!=null&&n.responsibleUserId===D.userId;return`
    <button class="task-row card due-${i.level}${e?" is-done":""}${gt.has(n.id)?" fresh":""}" data-id="${o(n.id)}">
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="num">#${n.number}</span>
          <span class="badge due-${i.level}">${o(i.text)}</span>
          ${n.status?`<span class="badge ${Oe(n.status)}">${o(n.status)}</span>`:""}
          ${n.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${o(n.creator??"den Ersteller")}">⏳ wartet auf Bestätigung</span>`:""}
          ${Cs(n)}
          <span class="comments${n.unread?" has-unread":""}" title="${n.comments} Kommentare${n.unread?`, davon ${n.unread} ungelesen`:""}">💬 ${n.comments}${n.unread?` <span class="badge unread">${n.unread} neu</span>`:""}</span>
        </span>
      </span>
      ${n.responsible&&!r?n.responsiblePicture?`<img class="avatar who-avatar" src="${o(n.responsiblePicture)}" alt="${o(n.responsible)}" title="Verantwortlich: ${o(n.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${o(n.responsible)}">${o(Ye(n.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function Bs(n){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const r of n)r.due?Se.overdue(r)?e.Überfällig.push(r):Se.week(r)?e["Nächste 7 Tage"].push(r):e.Später.push(r):e["Ohne Fälligkeit"].push(r);const i=(r,c)=>{var u,h;return(((u=r.due)==null?void 0:u.getTime())??0)-(((h=c.due)==null?void 0:h.getTime())??0)};return Object.entries(e).filter(([,r])=>r.length).map(([r,c])=>[r,c.sort(i)])}function we(n,e,i,r,c=""){return`<button class="chip ${c}${e?" active":""}" ${r} aria-pressed="${e}">${o(n)} <span class="count">${i}</span></button>`}function Ns(){const n=v.querySelector("#filters");if(!n)return;const e=c=>un(wt(),{...k,...c}).length,i=q.map(c=>c.status).filter(Boolean),r=[...new Set([...bt,...i,...k.status?[k.status]:[]])];n.innerHTML=`
    ${we("Überfällig",k.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${we("Diese Woche",k.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${we("Mir zugewiesen",k.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned"')}
    ${we("Von mir erstellt",k.owner==="created",e({owner:"created"}),'data-owner="created"')}
    ${we("💬 Neu",k.unread,e({unread:!0}),'data-unread="1"')}
    <select id="status-filter" class="chip-select${k.status?" active":""}" aria-label="Status filtern">
      <option value="">Alle Status</option>
      ${r.map(c=>`<option${c===k.status?" selected":""}>${o(c)}</option>`).join("")}
    </select>
`}let _=!1;function js(n){const e=[];return n.q.trim()&&e.push(`„${n.q.trim()}“`),n.time==="overdue"&&e.push("Überfällig"),n.time==="week"&&e.push("Diese Woche"),n.owner==="assigned"&&e.push("Mir zugewiesen"),n.owner==="created"&&e.push("Von mir erstellt"),n.unread&&e.push("💬 Neu"),n.status&&e.push(n.status),e}function mn(){const n=v.querySelector("#filter-bar");if(!n)return;const e=js(k);n.innerHTML=`
    <button class="filter-toggle${e.length?" has-active":""}" id="filter-toggle" aria-expanded="${_}">
      🔍 ${e.length?`Filter (${e.length})`:"Suchen & Filtern"} <span class="caret">${_?"▴":"▾"}</span>
    </button>
    ${e.length&&!_?`<span class="filter-summary">${e.map(i=>`<span class="badge">${o(i)}</span>`).join("")}</span>`:""}
    ${e.length?'<button class="link small" id="reset-all" title="Alle Filter und die Suche zurücksetzen">× zurücksetzen</button>':""}`}function O(){var u;const n=v.querySelector("#list");if(!n)return;const e=un(wt(),k),i=new Set((((u=me())==null?void 0:u.subject)??"").match(/\d{4,}/g)??[]),r=q.filter(h=>i.has(String(h.number))),c=r.length?`<div class="group-title">Passt zur geöffneten Mail</div>${r.map(Yt).join("")}`:"";n.innerHTML=c+(e.length?(Te(k)?[["Erledigt",[...e].sort((h,p)=>{var S,b;return(((S=p.due)==null?void 0:S.getTime())??0)-(((b=h.due)==null?void 0:b.getTime())??0)})]]:Bs(e)).map(([h,p])=>`<div class="group-title">${o(h)} <span class="count">${p.length}</span></div>${p.map(Yt).join("")}`).join(""):`<div class="empty">${Hs(k)||k.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),Ns(),mn()}function hn(){const n=me();return Y&&n?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${o(n.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    <button class="action primary" id="new-task" title="Neue Aufgabe in MyMonolith anlegen"><span class="ico">＋</span> Neue Aufgabe</button>
    ${n&&on(n.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function ft(){var e;const n=v.querySelector("#actions");n&&(n.innerHTML=hn()),(e=v.querySelector("#list"))==null||e.classList.toggle("picking",Y)}async function he(n=!0){if(yt.hidden=!1,vs())return Ms(v);(n||!q.length)&&(v.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(D??(D=await Pe().catch(()=>{})),n||!q.length){const r=await Ae();q=r.filter(c=>!G(c)),ht=r.filter(c=>G(c)),Le=null,Te(k)&&await _t()}bt.length||(bt=(await ct().catch(()=>[])).map(r=>r.name)),Re=!1,fn(),Fs(),n&&zs(q)}catch(r){if(r instanceof Jn&&r.status===401)return Ge(r.message);v.innerHTML=`<div class="error">${o(M(r))}</div>`;return}v.innerHTML=`
    <div class="view">
      <div class="sticky-head">
      <div class="toolbar">
        <strong class="grow">Meine Aufgaben <span class="hint">${q.length}</span></strong>
        <button class="tool-btn" id="theme" title="Design anpassen: Hell/Dunkel, Jahreszeit, Farben" aria-haspopup="menu">🎨</button>
        <button class="tool-btn" id="sound" title="${se()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"}">${se()?"🔔":"🔕"}</button>
        <button class="tool-btn" id="refresh" title="Liste neu laden">⟳ Aktualisieren</button>
      </div>
      <div id="actions" class="actions-bar">${hn()}</div>
      <div id="filter-bar" class="filter-bar"></div>
      <div id="theme-menu" class="theme-menu" role="menu" hidden></div>
      </div>
      <div id="filter-panel" class="filter-panel"${_?"":" hidden"}>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${o(k.q)}">
        <div id="filters" class="filters"></div>
      </div>
      <div id="list" class="${Y?"picking":""}"></div>
    </div>`;const e=v.querySelector("#search");e.addEventListener("input",()=>{k.q=e.value,O()});const i=v.querySelector("#filters");i.addEventListener("click",r=>{const c=r.target.closest("button");c&&(c.id==="reset-filters"?k=Ke(k.q):c.dataset.time?k.time=k.time===c.dataset.time?"all":c.dataset.time:c.dataset.owner?k.owner=k.owner===c.dataset.owner?"all":c.dataset.owner:c.dataset.unread&&(k.unread=!k.unread),mt(k),O())}),i.addEventListener("change",r=>{const c=r.target;c.id==="status-filter"&&(k.status=c.value,mt(k),Te(k)?_t().then(O):O())}),v.querySelector("#list").addEventListener("click",r=>{const c=r.target.closest(".task-row"),u=wt().find(p=>p.id===(c==null?void 0:c.dataset.id))??q.find(p=>p.id===(c==null?void 0:c.dataset.id));if(!u)return;const h=Y;Y=!1,kt(u,void 0,h)}),O()}async function kt(n,e,i=!1){const r=window.scrollY;window.scrollTo(0,0),await pt(v,n,()=>{he(Re),window.scrollTo(0,r)},e,()=>Re=!0),i&&(ke==null||ke())}function Gt(n){window.scrollTo(0,0),xs(v,n?me():null,async(e,i)=>{q=(await Ae().catch(()=>q)).filter(c=>!G(c));const r=q.find(c=>c.id===e.id||e.number&&c.number===e.number);r?await kt(r,i):(await he(!1),v.insertAdjacentHTML("afterbegin",`<div class="ok">${o(i)}</div>`))},()=>void he(!1))}document.addEventListener("click",n=>{const e=v.querySelector("#theme-menu"),i=n.composedPath().some(r=>r instanceof HTMLElement&&(r.id==="theme-menu"||r.id==="theme"));e&&!e.hidden&&!i&&(e.hidden=!0)});v.addEventListener("click",n=>{var i,r;const e=n.target;if(e.closest("#new-task"))Gt(!1);else if(e.closest("#new-from-mail"))Gt(!0);else if(e.closest("#refresh"))he();else if(e.closest("#filter-toggle"))_=!_,(i=v.querySelector("#filter-panel"))==null||i.toggleAttribute("hidden",!_),mn(),_&&((r=v.querySelector("#search"))==null||r.focus());else if(e.closest("#reset-all")){k=Ke(),mt(k);const c=v.querySelector("#search");c&&(c.value=""),O()}else if(e.closest("#theme")){const c=v.querySelector("#theme-menu");c&&(c.hidden=!c.hidden,c.hidden||(c.innerHTML=Wt()))}else if(e.closest("#theme-menu button.opt")){const c=e.closest("#theme-menu button.opt"),u=c.dataset.mode?{mode:c.dataset.mode}:c.dataset.bg?{background:c.dataset.bg}:{accent:c.dataset.accent},h=ys(u);v.querySelector("#theme-menu").innerHTML=Wt(h)}else if(e.closest("#sound")){Ls(!se());const c=v.querySelector("#sound");c&&(c.textContent=se()?"🔔":"🔕",c.title=se()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),se()&&an()}else e.closest("#pick-for-mail")?(Y=!0,ft()):e.closest("#pick-cancel")&&(Y=!1,ft())});yt.addEventListener("click",()=>{Zn(),Ge()});const Ps=6e4;let _e,bn=new Map;const gt=new Set;function fn(){bn=new Map(q.map(n=>[n.id,n.unread]))}function Fs(){_e||(_e=window.setInterval(()=>void Os(),Ps))}function Us(){window.clearInterval(_e),_e=void 0}async function Os(){if(!vt()||document.hidden)return;let n;try{n=(await Ae()).filter(i=>!G(i))}catch{return}const e=n.filter(i=>i.unread>(bn.get(i.id)??0));if(q=n,fn(),!!e.length){an();for(const i of e)gt.add(i.id);if(setTimeout(()=>{for(const i of e)gt.delete(i.id);v.querySelectorAll(".task-row.fresh").forEach(i=>i.classList.remove("fresh"))},15e3),v.querySelector("#list")){const i=window.scrollY;O(),window.scrollTo(0,i)}else Re=!0}}function Vs(){ks(),tn(),ws(),$s(()=>{if(We)return We();Y=!1,ft(),O()}),vt()?he().then(gn):Ge()}let Zt=new URLSearchParams(location.search).get("task");async function gn(){const n=Zt;if(!(!n||!vt())){Zt=null;try{const e=q.find(i=>i.id===n)??await ts(n);await kt(e)}catch(e){v.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${o(M(e))}</div>`)}}}async function Ws(){var n,e;try{const i=location.href.split(/[?#]/)[0],c=(n=(await fetch(`${i}?check=${Date.now()}`,{cache:"no-store"}).then(b=>b.text())).match(/assets\/(taskpane|teams)-[\w-]+\.js/))==null?void 0:n[0],u=[...document.scripts].map(b=>b.src).find(b=>/assets\/(taskpane|teams)-/.test(b));if(!c||!u||u.includes(c))return;const h=()=>{const b=new URL(location.href);b.searchParams.set("v",String(Date.now())),location.replace(b.toString())},p=document.getElementById("update-note");p&&(p.hidden=!1,(e=p.querySelector("button"))==null||e.addEventListener("click",h));let S="";try{S=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",c)}catch{}S!==c&&h()}catch{}}let Jt=!1;const vn=()=>{Jt||(Jt=!0,Vs())};Ws();typeof Office<"u"&&Office.onReady(vn);setTimeout(vn,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 10:13 UTC";
