import{b as o,c as Ze,g as Ue,P as xn,o as lt,f as ut,h as rt,j as Pt,k as Hn,r as In,e as M,d as Oe,m as Dn,n as Ve,p as Cn,q as ot,t as zn,u as Ft,v as Be,w as Ut,x as Ot,y as Bn,z as pt,A as Vt,B as Nn,C as jn,D as Pn,E as mt,F as tn,G as nn,H as Fn,I as Un,s as We,J as Ne,K as On,L as Vn,M as Wn,N as Ke,O as Kn,Q as Rn,R as _n,S as Yn,T as Gn,U as Zn,l as Me,a as Z,V as Jn,W as Qn,X as Xn,Y as es,Z as ts,_ as ns,$ as ss,i as $t,a0 as as,a1 as is}from"./util-DtQrqSpb.js";import{s as Wt,m as be,n as ls,b as sn,o as rs,p as je,q as os,t as cs,g as ds,l as us,d as ps,f as ms,k as hs,e as Kt,j as Rt,u as bs,h as fs,v as gs,w as vs,x as ys,y as $s,z as ws,A as ks}from"./composemail-zwnvm_kE.js";import{a as an,t as _t,u as Ls,w as Ss}from"./theme-CaOvkRkE.js";const ln="mm-addin-sound",rn="mm-addin-sent-mails";let ae=null;function Ts(){const n=()=>{try{ae??(ae=new AudioContext),ae.resume()}catch{}};window.addEventListener("pointerdown",n,{once:!0,capture:!0}),window.addEventListener("keydown",n,{once:!0,capture:!0})}function ie(){try{return localStorage.getItem(ln)!=="off"}catch{return!0}}function Es(n){try{localStorage.setItem(ln,n?"on":"off")}catch{}}function on(){if(ie())try{ae??(ae=new AudioContext);const n=ae.currentTime;for(const[e,i]of[880,1320].entries()){const r=ae.createOscillator(),d=ae.createGain();r.type="sine",r.frequency.value=i;const u=n+e*.16;d.gain.setValueAtTime(1e-4,u),d.gain.exponentialRampToValueAtTime(.18,u+.02),d.gain.exponentialRampToValueAtTime(1e-4,u+.14),r.connect(d).connect(ae.destination),r.start(u),r.stop(u+.15)}}catch{}}function cn(){try{return JSON.parse(localStorage.getItem(rn)??"{}")}catch{return{}}}function dn(n,e){const i=cn();i[n]=[...new Set([...i[n]??[],e])];const r=Object.keys(i);for(const d of r.slice(0,Math.max(0,r.length-200)))delete i[d];try{localStorage.setItem(rn,JSON.stringify(i))}catch{}}const un=n=>cn()[n]??[];function Pe(n,e="Name suchen …"){n.classList.add("picker"),n.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${o(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const i=n.querySelector("input"),r=n.querySelector("ul");let d=[],u,h=0,p=[];const S=()=>{const m=i.value.trim().toLowerCase();p=(m?d.filter(f=>f.name.toLowerCase().includes(m)):d).slice(0,8),h=Math.min(h,Math.max(p.length-1,0)),r.innerHTML=p.length?p.map((f,y)=>`<li role="option" data-i="${y}" class="${y===h?"active":""}"><span class="avatar sm">${o(Ze(f.name))}</span>${o(f.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',r.hidden=!1},b=m=>{u=m,i.value=m.name,r.hidden=!0};return i.addEventListener("focus",()=>{i.select(),S()}),i.addEventListener("input",()=>{u=void 0,h=0,S()}),i.addEventListener("keydown",m=>{if(!r.hidden){if(m.key==="ArrowDown")h=Math.min(h+1,p.length-1);else if(m.key==="ArrowUp")h=Math.max(h-1,0);else return m.key==="Enter"&&p[h]?(m.preventDefault(),b(p[h])):m.key==="Escape"?void(r.hidden=!0):void 0;m.preventDefault(),S()}}),r.addEventListener("mousedown",m=>{const f=m.target.closest("li[data-i]");f&&(m.preventDefault(),b(p[Number(f.dataset.i)]))}),i.addEventListener("blur",()=>{r.hidden=!0,u||(u=d.find(m=>m.name.toLowerCase()===i.value.trim().toLowerCase()))}),{setUsers(m,f){d=m;const y=d.find(w=>w.id===f);y&&!i.value&&b(y)},selected:()=>u,focus:()=>i.focus()}}let Re=null,Se=null;const pn="mm-addin-comment-order";function As(){try{return localStorage.getItem(pn)==="oldest"?"oldest":"newest"}catch{return"newest"}}function Ms(n){try{localStorage.setItem(pn,n)}catch{}}const Yt=n=>{var e;return!!((e=n.raw)!=null&&e.type)&&n.raw.type!=="text"};function qs(n){const e=[];for(const i of n){const r=e[e.length-1];Yt(i)&&Array.isArray(r)?r.push(i):e.push(Yt(i)?[i]:i)}return e.map(i=>Array.isArray(i)&&i.length===1?i[0]:i)}function xs(n){const e=n.map(u=>{var h;return(h=u.createdAt)==null?void 0:h.getTime()}).filter(u=>!!u).sort((u,h)=>u-h),i=u=>new Date(u).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),r=u=>new Date(u).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),d=e.length?i(e[0])===i(e[e.length-1])?`${i(e[0])}, ${r(e[0])}–${r(e[e.length-1])}`:`${i(e[0])} – ${i(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${n.length} Änderungen <span class="hint">${d}</span></summary>
      ${n.map(u=>wt(u)).join("")}
    </details>`}function wt(n,e=!1){var d;const i=((d=n.raw)==null?void 0:d.type)&&n.raw.type!=="text",r=n.files.length?`<ul class="files">${n.files.map(u=>`<li>📎 ${u.url&&/^https:\/\//.test(u.url)?`<a href="${o(u.url)}" data-external>${o(u.name)}</a>`:o(u.name)}${u.size?` <span class="hint">${je(u.size)}</span>`:""}</li>`).join("")}</ul>`:"";return i?`<div class="event">${n.html} · ${o(n.author)}${n.createdAt?`, ${Ke(n.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}">
      ${n.avatar?`<img class="avatar" src="${o(n.avatar)}" alt="">`:`<span class="avatar">${o(Ze(n.author))}</span>`}
      <div class="bubble">
        <header><strong>${o(n.author)}</strong>${n.createdAt?` <span class="hint">${Ke(n.createdAt)}</span>`:""}</header>
        ${n.html.trim()?`<div class="body">${nn(n.html)}</div>`:n.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${r}
        ${n.replies.map(u=>wt(u,!0)).join("")}
      </div>
    </article>`}async function ht(n,e,i,r,d,u){var Nt;Re=null,Se=null;const h=await Ue().catch(()=>{});n.innerHTML=`
    <div class="view detail">
      <div class="topbar sticky-head">
        <button class="nav-btn" id="back" title="${u?`Zurück zur Hauptaufgabe #${u.number}`:"Zurück zur Aufgabenliste"}">← ${u?`#${u.number}`:"Zurück"}</button>
        <span class="hint grow center">${u?"Unteraufgabe":"Aufgabe"} #${e.number}</span>
        <button class="nav-btn" id="open-web" title="Diese Aufgabe in MyMonolith im Browser öffnen">Im Browser ↗</button>
      </div>
      ${u?`<div class="breadcrumb">↳ Unteraufgabe von <button type="button" class="link" id="to-parent">#${u.number} ${o(u.title)}</button></div>`:""}
      <div id="title-box" class="title-box"></div>
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
            ${xn.map(t=>`<option value="${t.value}"${t.value===(e.priority??"").toLowerCase()?" selected":""}>${t.label}</option>`).join("")}
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

    </div>`;const p=t=>n.querySelector(t),S=p("#flash"),b=t=>{S.innerHTML=t,S.scrollIntoView({block:"nearest"})},m=t=>b(`<div class="ok">${o(t)}</div>`),f=t=>b(`<div class="error">${o(M(t))}</div>`),y=()=>d==null?void 0:d();p("#back").addEventListener("click",i),p("#open-web").addEventListener("click",()=>lt(e.url)),p("#comments").addEventListener("click",t=>{const s=t.target.closest("a[data-external]");s&&(t.preventDefault(),lt(s.href))});const w=p("#status"),g=p("#done-actions"),C=p("#phase-note"),W=(h==null?void 0:h.userId)!=null&&e.creatorUserId===h.userId;let x=null;const le=t=>{e.phase=t,e.raw.StatusID=t==="done"?7:t==="pending"?5:1};function re(){w.className=`bare status-select ${We(e.status)}`;const t=(a,l)=>x?x.includes(a):l;C.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${W?"durch Sie":`von <strong>${o(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const s=[];if(t("approve",e.phase==="pending"&&W)&&s.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),t("finish",e.phase==="open")){const a=e.needsApproval&&!W;s.push(`<button class="primary" data-act="finish" title="${a?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${a?"Zur Freigabe":"Erledigt"}</button>`)}t("reopen",e.phase!=="open")&&s.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),g.innerHTML=s.join(""),p("#tile-finish").hidden=!s.length}async function Tt(t){const s=[...w.options].find(a=>t.test((a.textContent??"").trim()));return!s||w.value===s.value?!1:(await rt(e.id,s.value),w.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status,!0)}async function Qe(){try{const t=await Ot(e.id);x=t.actions,le(t.phase);const s=t.spaStatusId?[...w.options].find(a=>a.value===t.spaStatusId):void 0;s&&(w.value=s.value,e.statusId=s.value,e.status=s.textContent??e.status)}catch{}re(),B==null||B(),_==null||_(),N==null||N()}re(),Qe(),ut().then(t=>{w.innerHTML=t.map(s=>`<option value="${o(s.id)}"${s.id===e.statusId||s.name===e.status?" selected":""}>${o(s.name)}</option>`).join(""),e.statusId??(e.statusId=w.value)}).catch(f);const Xe=p("#status-confirm"),Et=()=>w.value!==(e.statusId??w.value);w.addEventListener("change",()=>{Xe.hidden=!Et(),w.classList.toggle("is-pending",Et())}),p("#status-cancel").addEventListener("click",()=>{e.statusId&&(w.value=e.statusId),Xe.hidden=!0,w.classList.remove("is-pending")}),p("#status-ok").addEventListener("click",async()=>{var a;const t=e.statusId??"",s=((a=w.selectedOptions[0])==null?void 0:a.textContent)??"";Xe.hidden=!0,w.classList.remove("is-pending"),w.disabled=!0;try{await rt(e.id,w.value),e.statusId=w.value,e.status=s,m(`Status: ${s}`),y(),await Qe(),$e()}catch(l){w.value=t,f(l)}finally{w.disabled=!1}}),g.addEventListener("click",async t=>{var a;const s=t.target.closest("button[data-act]");if(s){g.querySelectorAll("button").forEach(l=>l.disabled=!0);try{const l=s.dataset.act;l==="finish"?(await Pt(e.id),le(e.needsApproval&&!W?"pending":"done")):l==="approve"?(await Hn(e.id),le("done")):l==="reopen"&&(await In(e.id),le("open")),await Qe();let c="";try{e.phase==="done"&&await Tt(/^erledigt$/i)?c=" Status: Erledigt.":l==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await Tt(/^zu erledigen$/i)&&(c=" Status: Zu erledigen.")}catch(k){c=` (Status konnte nicht angepasst werden: ${M(k)})`}re(),m(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),c&&m(`${((a=S.textContent)==null?void 0:a.trim())??""}${c}`),oe(),_(),N(),y(),$e()}catch(l){f(l),re()}}});const J=p("#tile-due");function oe(t=!1){var l;const s=Oe(e.due),a=Dn(e,h);if(t){J.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?Ve(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const c=J.querySelector("#due-input");c.focus(),J.querySelector("#due-cancel").addEventListener("click",()=>oe()),J.querySelector("#due-save").addEventListener("click",async()=>{if(!c.value)return c.focus();try{await Cn(e.id,c.value),e.due=new Date(`${c.value}T00:00:00`),m(`Fällig am ${ot(e.due)}`),y(),oe()}catch(k){f(k)}});return}J.className=`tile due-${s.level}`,J.innerHTML=`
      <span class="tile-label">Fällig ${a?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${a?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?ot(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?ot(e.due):"–"}</span>`}
      <span class="tile-sub">${o(s.text)}</span>`,(l=J.querySelector("#due-edit"))==null||l.addEventListener("click",()=>oe(!0))}oe();const K=p("#prio"),At=()=>K.dataset.p=K.value;At(),K.addEventListener("change",async()=>{const t=e.priority??"";try{await zn(e.id,K.value),e.priority=K.value,e.raw.Priority=K.value,At(),m(`Priorität: ${K.selectedOptions[0].textContent}`),y()}catch(s){K.value=t,f(s)}});const P=p("#tile-resp");function B(t="view",s){var a;if(t==="view"){P.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${o(e.responsible??"–")}</span>
        ${!x||x.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(a=P.querySelector("#resp-edit"))==null||a.addEventListener("click",()=>B("pick"));return}if(t==="pick"){P.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const l=Pe(P.querySelector("#resp-picker"));Ne().then(c=>l.setUsers(c)).catch(f),l.focus(),P.querySelector("#resp-cancel").addEventListener("click",()=>B()),P.querySelector("#resp-next").addEventListener("click",()=>{const c=l.selected();c?B("confirm",c):l.focus()});return}P.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${o(s.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,P.querySelector("#resp-cancel").addEventListener("click",()=>B()),P.querySelector("#resp-ok").addEventListener("click",async()=>{try{await On(e.id,s.id),e.responsible=s.name,e.responsibleUserId=s.userId,m(`Weitergegeben an ${s.name}.`),y(),B(),oe()}catch(l){f(l),B()}})}B();const ce=p("#people");let R={administrators:[],participants:[]};const Mt={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},kn=(t,s)=>`
    <span class="person-chip" title="${o(s.name)}">
      ${s.picture?`<img class="avatar sm" src="${o(s.picture)}" alt="">`:`<span class="avatar sm">${o(Ze(s.name))}</span>`}
      ${o(s.name)}
      <button type="button" data-rm-person="${t}:${o(s.id)}" aria-label="${o(s.name)} entfernen" title="Entfernen">×</button>
    </span>`;function ge(t){if(ce.innerHTML=["administrators","participants"].map(s=>`
        <div class="people-row">
          <span class="people-label">${Mt[s]}</span>
          <div class="people-list">
            ${R[s].map(a=>kn(s,a)).join("")||'<span class="hint">niemand</span>'}
            ${t===s?"":`<button type="button" class="add-person" data-add-person="${s}">＋ Hinzufügen</button>`}
          </div>
          ${t===s?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),t){const s=Pe(ce.querySelector("#people-picker"),"Kollegen suchen …"),a=new Set(R[t].map(l=>l.id));Ne().then(l=>s.setUsers(l.filter(c=>!a.has(c.id)))).catch(f),s.focus(),ce.querySelector("#people-cancel").addEventListener("click",()=>ge()),ce.querySelector("#people-save").addEventListener("click",async()=>{const l=s.selected();if(!l)return s.focus();await qt(t,[...R[t],{...l}],`${l.name} als ${Mt[t]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function qt(t,s,a){try{await Vn(e.id,t,s.map(l=>l.id)),R=await Ft(e.id).catch(()=>({...R,[t]:s})),m(a),y(),ge(),p("#activity").hidden||et(!0)}catch(l){f(l),ge()}}ce.addEventListener("click",t=>{const s=t.target,a=s.closest("[data-add-person]");if(a)return ge(a.dataset.addPerson);const l=s.closest("[data-rm-person]");if(l){const[c,k]=l.dataset.rmPerson.split(":"),v=R[c].find(T=>T.id===k);qt(c,R[c].filter(T=>T.id!==k),`${(v==null?void 0:v.name)??"Person"} entfernt.`)}}),Ft(e.id).then(t=>{R=t,ge()}).catch(t=>ce.innerHTML=`<div class="error">${o(M(t))}</div>`);const Q=p("#activity");let ve=1;const xt={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},Ln={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},Sn=t=>{const s=t.replace(/^niki\.field\./i,"").replace(/[_\s]/g,a=>a==="_"?"":" ").toLowerCase();return xt[s]??xt[s.replace(/\s/g,"")]??t.replace(/^niki\.field\./i,"")},Ht=t=>Ln[t.replace(/[\s_]/g,"").toLowerCase()]??t;async function et(t=!1){var s;t&&(ve=1),ve===1&&(Q.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const a=await Wn(e.id,ve),l=a.logs.map(c=>`
          <div class="log">
            <div class="log-head"><strong>${o(c.user)}</strong> · ${o(Sn(c.field))}${c.at?`<span class="hint"> · ${Ke(c.at)}</span>`:""}</div>
            <div class="log-change">
              ${c.from?`<span class="log-from">${o(Ht(c.from))}</span> → `:""}<span class="log-to">${o(Ht(c.to)||"–")}</span>
            </div>
          </div>`).join("");ve===1?Q.innerHTML=l||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((s=Q.querySelector(".more-activity"))==null||s.remove(),Q.insertAdjacentHTML("beforeend",l)),a.hasMore&&Q.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),ve++}catch(a){Q.innerHTML=`<div class="error">${o(M(a))}</div>`}}Q.addEventListener("click",t=>{t.target.closest(".more-activity")&&et()}),n.querySelector(".tabs").addEventListener("click",t=>{const s=t.target.closest(".tab");if(!s)return;const a=s.dataset.tab;n.querySelectorAll(".tab").forEach(l=>{const c=l===s;l.classList.toggle("active",c),l.setAttribute("aria-selected",String(c))});for(const l of["comments","checklist","subtasks","files","activity"]){const c=n.querySelector(`#${l}`);c&&(c.hidden=l!==a)}p("#composer").hidden=a!=="comments",a==="activity"&&et(!0),a==="checklist"&&Tn(),a==="subtasks"&&Ie(),a==="files"&&nt()});const z=p("#checklist");let E=[],de=null;function It(){const t=E.filter(s=>s.done).length;p("#cl-count").textContent=E.length?`${t}/${E.length}`:""}function F(){var a;const t=E.filter(l=>l.done).length,s=E.length?Math.round(t/E.length*100):0;z.innerHTML=`
      ${E.length?`<div class="progress"><div class="progress-bar" style="width:${s}%"></div></div>
        <div class="hint">${t} von ${E.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${E.map((l,c)=>de===l.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${o(l.id)}" value="${o(l.item)}" aria-label="Punkt umbenennen">
                  <button type="button" class="small primary" data-cl="save" data-id="${o(l.id)}">Speichern</button>
                  <button type="button" class="small" data-cl="cancel">Abbrechen</button></li>`:`<li class="cl-item${l.done?" done":""}">
                  <label class="cl-check"><input type="checkbox" data-cl="toggle" data-id="${o(l.id)}"${l.done?" checked":""}><span class="cl-text" data-cl="edit" data-id="${o(l.id)}">${o(l.item)}</span></label>
                  <span class="cl-tools">
                    <button type="button" class="icon-btn sm" data-cl="up" data-i="${c}" title="Nach oben" aria-label="Nach oben"${c===0?" disabled":""}>▲</button>
                    <button type="button" class="icon-btn sm" data-cl="down" data-i="${c}" title="Nach unten" aria-label="Nach unten"${c===E.length-1?" disabled":""}>▼</button>
                    <button type="button" class="icon-btn sm" data-cl="edit" data-id="${o(l.id)}" title="Umbenennen" aria-label="Umbenennen">✎</button>
                    <button type="button" class="icon-btn sm" data-cl="del" data-id="${o(l.id)}" title="Löschen" aria-label="Löschen">×</button>
                  </span></li>`).join("")||'<li class="hint empty-thread">Noch keine Punkte.</li>'}
      </ul>
      <form class="cl-add" id="cl-add">
        <input id="cl-new" placeholder="Neuer Punkt … (Enter fügt hinzu)" aria-label="Neuer Checklisten-Punkt">
        <button class="primary small" type="submit">＋</button>
      </form>`,It(),(a=z.querySelector(".cl-edit"))==null||a.focus()}async function Tn(){try{E=await Be(e.id),F()}catch(t){z.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function ye(t,s=!0){try{await t(),s&&(E=await Be(e.id)),y()}catch(a){f(a)}F()}z.addEventListener("click",t=>{const s=t.target.closest("[data-cl]");if(!s)return;const a=s.dataset.cl,l=E.find(c=>c.id===s.dataset.id);if(a==="toggle"&&l)l.done=s.checked,F(),ye(()=>Rn(l.id,l.done),!1);else if(a==="edit"&&l&&(s.tagName==="BUTTON"||t.detail===2))t.preventDefault(),de=l.id,F();else if(a==="cancel")de=null,F();else if(a==="save"&&l){const c=z.querySelector(".cl-edit").value.trim();de=null,c&&c!==l.item?ye(()=>_n(e.id,l,c,E.indexOf(l))):F()}else if(a==="del"&&l)ye(()=>Yn(l.id));else if(a==="up"||a==="down"){const c=Number(s.dataset.i),k=a==="up"?c-1:c+1;if(k<0||k>=E.length)return;[E[c],E[k]]=[E[k],E[c]],F(),ye(()=>Gn(e.id,E.map(v=>v.id)))}}),z.addEventListener("dblclick",t=>{const s=t.target.closest(".cl-text");s&&(t.preventDefault(),de=s.dataset.id??null,F())}),z.addEventListener("keydown",t=>{var a;t.target.classList.contains("cl-edit")&&(t.key==="Enter"?(t.preventDefault(),(a=z.querySelector('[data-cl="save"]'))==null||a.click()):t.key==="Escape"&&(de=null,F()))}),z.addEventListener("submit",t=>{t.preventDefault();const s=z.querySelector("#cl-new"),a=s.value.trim();if(!a)return s.focus();ye(()=>Zn(e.id,a,E.length)).then(()=>{var l;return(l=z.querySelector("#cl-new"))==null?void 0:l.focus()})}),Be(e.id).then(t=>{E=t,It()}).catch(()=>{});const H=n.querySelector("#subtasks");let X=[],qe=!1,xe=null;function Dt(){const t=n.querySelector("#sub-count");if(!t)return;const s=X.filter(a=>a.phase==="done"||/^erledigt$/i.test(a.status??"")).length;t.textContent=X.length?`${s}/${X.length}`:""}function He(){if(H&&(H.innerHTML=`
      <div class="sub-list">
        ${X.map(t=>{const s=Oe(t.due),a=t.phase==="done"||/^erledigt$/i.test(t.status??"");return`
            <div class="sub-item${a?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${o(t.id)}" title="${a?"Erledigt":t.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${a||t.phase==="pending"?" disabled":""}>${a?"✓":t.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${o(t.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${o(t.title)}</span>
                <span class="task-meta"><span class="num">#${t.number}</span>
                  <span class="badge due-${s.level}">${o(s.text)}</span>
                  ${t.status?`<span class="badge ${We(t.status)}">${o(t.status)}</span>`:""}
                  ${t.responsible?`<span class="who">${o(t.responsible)}</span>`:""}</span>
              </button>
              ${xe===t.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${o(t.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${o(t.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${qe?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${Ve(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,Dt(),qe)){const t=Pe(H.querySelector("#sub-assignee"));Promise.all([Ne(),Ue()]).then(([s,a])=>t.setUsers(s,a.id)).catch(f),H.querySelector("#sub-name").focus(),H.querySelector("#sub-form").addEventListener("submit",async s=>{s.preventDefault();const a=t.selected();if(!a)return t.focus();const l=H.querySelector("#sub-form button[type=submit]");l.disabled=!0;try{const c=await Kn(e.id,{name:H.querySelector("#sub-name").value.trim(),dueAt:H.querySelector("#sub-due").value,assigneeId:a.id});qe=!1,m(`Unteraufgabe #${c.number} angelegt.`),y(),await Ie()}catch(c){f(c),l.disabled=!1}})}}async function Ie(){if(H)try{X=await Ut(e.id),He()}catch(t){H.innerHTML=`<div class="error">${o(M(t))}</div>`}}H==null||H.addEventListener("click",async t=>{const s=t.target.closest("[data-sub]");if(!s)return;const a=s.dataset.sub,l=X.find(c=>c.id===s.dataset.id);if(a==="form-open"||a==="form-cancel")qe=a==="form-open",He();else if(a==="open"&&l)await ht(n,l,()=>void ht(n,e,i,void 0,d),void 0,d,e);else if(a==="finish"&&l){s.setAttribute("disabled","");try{await Pt(l.id);const c=await Ot(l.id);if(c.phase==="done"){const v=(await ut()).find(T=>/^erledigt$/i.test(T.name));v&&await rt(l.id,v.id).catch(()=>{})}m(c.phase==="pending"?`#${l.number} abgeschlossen – wartet auf Bestätigung.`:`#${l.number} erledigt.`),y()}catch(c){f(c)}await Ie()}else if(a==="unlink"&&l)xe=l.id,He();else if(a==="unlink-no")xe=null,He();else if(a==="unlink-ok"&&l){xe=null;try{await Bn(l.id,e.id),m(`#${l.number} ist jetzt eine eigenständige Aufgabe.`),y()}catch(c){f(c)}await Ie()}}),H&&Ut(e.id).then(t=>{X=t,Dt()}).catch(()=>{}),(Nt=n.querySelector("#to-parent"))==null||Nt.addEventListener("click",i);const U=p("#files");let ee=[],tt=0,O=[];const En=(t,s)=>s?"🖼️":t==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(t)?"📘":/^(xlsx?|csv|ods)$/.test(t)?"📗":/^(pptx?|odp)$/.test(t)?"📙":/^(zip|rar|7z|gz|tar)$/.test(t)?"🗜️":/^(eml|msg)$/.test(t)?"✉️":/^(txt|log|xml|json)$/.test(t)?"📄":"📎";function Ct(){p("#files-count").textContent=ee.length?`(${ee.length})`:""}function De(){U.innerHTML=`
      <div class="files-tools">
        ${O.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${O.map((t,s)=>`<span class="file-chip">📎 <span class="ellipsis">${o(t.name)}</span> <span class="hint">${je(t.size)}</span><button type="button" data-rm-up="${s}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${ee.map(t=>`
          <button type="button" class="file-row" data-file="${o(t.id)}" title="${o(t.name)} öffnen">
            ${t.isImage&&t.thumb?`<img class="file-thumb" src="${o(t.thumb)}" alt="">`:`<span class="file-icon">${En(t.ext,t.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${o(t.name)}</span>
              <span class="file-meta">${[t.size?je(t.size):"",t.uploadedBy?`von ${o(t.uploadedBy)}`:"",t.uploadedAt?Ke(t.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${t.commentText?`<span class="file-comment">„${o(t.commentText)}${t.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Ct()}async function nt(){try{ee=await pt(e.id),tt=Date.now(),De()}catch(t){U.innerHTML=`<div class="error">${o(M(t))}</div>`}}async function An(t){if(Date.now()-tt>20*6e4&&(await nt(),t=ee.find(s=>s.id===t.id&&s.name===t.name)??t),!t.url)return f(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));lt(t.url)}U.addEventListener("click",t=>{const s=t.target,a=s.closest("[data-file]");if(a){const c=ee.find(k=>k.id===a.dataset.file);c&&An(c);return}const l=s.closest("[data-rm-up]");l?(O.splice(Number(l.dataset.rmUp),1),De()):s.closest("#upload-cancel")&&(O=[],De())}),U.addEventListener("change",t=>{var a;const s=t.target;s.id==="upload-input"&&(O=Array.from(s.files??[]),De(),(a=U.querySelector("#upload-note"))==null||a.focus())}),U.addEventListener("submit",async t=>{t.preventDefault();const s=U.querySelector("#upload-form button[type=submit]"),a=U.querySelector("#upload-msg"),l=U.querySelector("#upload-note").value.trim();s.disabled=!0;try{const c=O.length;await Wt(e.messageId,{note:l||`${c===1?"Datei":`${c} Dateien`} hochgeladen: ${O.map(k=>k.name).join(", ")}`,files:O},k=>a.innerHTML=`<p class="hint">${o(k)}</p>`),O=[],m(`${c===1?"Datei":`${c} Dateien`} hochgeladen.`),y(),await nt()}catch(c){a.innerHTML=`<div class="error">${o(M(c))}</div>`,s.disabled=!1}}),pt(e.id).then(t=>{ee=t,tt=Date.now(),Ct()}).catch(()=>{});const te=p("#title-box");function N(t=!1){var a;const s=x?x.includes("edit")&&e.phase==="open":Vt(e,h);if(t){te.innerHTML=`
        <form class="title-edit" id="title-form">
          <input id="title-input" maxlength="255" value="${o(e.title)}" aria-label="Titel der Aufgabe">
          <div class="row-btns"><button class="primary small" type="submit">Speichern</button><button class="small" type="button" id="title-cancel">Abbrechen</button></div>
        </form>`;const l=te.querySelector("#title-input");l.focus(),l.select(),te.querySelector("#title-cancel").addEventListener("click",()=>N()),l.addEventListener("keydown",c=>{c.key==="Escape"&&N()}),te.querySelector("#title-form").addEventListener("submit",async c=>{c.preventDefault();const k=l.value.trim();if(!k)return l.focus();if(k===e.title)return N();const v=te.querySelector("button[type=submit]");v.disabled=!0;try{await Nn(e.id,k),e.title=k,e.raw.TaskName=k,m("Titel geändert."),y(),N()}catch(T){v.disabled=!1,f(T)}});return}te.innerHTML=`<h2 class="task-title">${o(e.title)}${s?' <button type="button" class="icon-btn sm title-edit-btn" id="title-edit" title="Titel ändern" aria-label="Titel ändern">✎</button>':""}</h2>`,(a=te.querySelector("#title-edit"))==null||a.addEventListener("click",()=>N(!0))}N();const ue=p("#desc");function _(t=!1){var l;const s=x?x.includes("edit")&&e.phase==="open":Vt(e,h);if(t){ue.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${o(jn(e.description))}</textarea>
        ${Pn(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const c=ue.querySelector("#desc-input");c.focus(),ue.querySelector("#desc-cancel").addEventListener("click",()=>_()),ue.querySelector("#desc-save").addEventListener("click",async()=>{const k=c.value.trim()?mt(c.value):"";try{await tn(e.id,k),e.description=k,e.raw.TaskDescription=k,m("Beschreibung gespeichert."),y(),_()}catch(v){f(v)}});return}const a=e.description.trim()?`<div class="desc-body">${nn(e.description)}</div>`:`<div class="hint">${s?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;ue.innerHTML=`${a}${s?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(l=ue.querySelector("#desc-edit"))==null||l.addEventListener("click",()=>_(!0))}_();const ne=p("#comments");async function $e(t=!1){var s;try{const a=[];for(let v=1;v<=10;v++){const T=await Fn(e.messageId,v,50);if(a.push(...T.comments),!T.hasMore)break}const l=As()==="newest";a.sort((v,T)=>{var me,ke;return((((me=v.createdAt)==null?void 0:me.getTime())??0)-(((ke=T.createdAt)==null?void 0:ke.getTime())??0))*(l?-1:1)});const c=a.filter(v=>{var T;return!((T=v.raw)!=null&&T.type)||v.raw.type==="text"}).length;p("#count").textContent=c?`(${c})`:"";const k=`<div class="thread-tools">
          <span class="thread-title">Verlauf${c?` · ${c} ${c===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${l?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;ne.innerHTML=a.length?k+qs(a).map(v=>Array.isArray(v)?xs(v):wt(v)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(s=ne.querySelector("#order-toggle"))==null||s.addEventListener("click",()=>{Ms(l?"oldest":"newest"),$e()}),ne.querySelectorAll(".bubble > .body").forEach(v=>{if(v.scrollHeight<=320)return;v.classList.add("clamped");const T=document.createElement("button");T.type="button",T.className="link small more",T.textContent="Mehr anzeigen ▾",T.addEventListener("click",()=>{const me=v.classList.toggle("clamped");T.textContent=me?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),v.after(T)}),t&&(l?ne.scrollIntoView({block:"start"}):(ne.lastElementChild??ne).scrollIntoView({block:"end"}))}catch(a){ne.innerHTML=`<div class="error">${o(M(a))}</div>`}}const Ce=p("#composer"),j=p("#comment"),st=p("#file-input"),zt=p("#file-chips"),pe=p("#comment-msg"),at=p("#mail-btn"),I=p("#mail-menu");let se=[],A=null;const ze=(t,s,a,l,c="")=>`<span class="file-chip ${c}">${t} <span class="ellipsis">${o(s)}</span>${a?` <span class="hint">${je(a)}</span>`:""}<button type="button" data-rm="${l}" aria-label="Entfernen">×</button></span>`;function we(){const t=A;zt.innerHTML=[...t!=null&&t.text?[ze("📧",`Mailtext: ${t.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...t!=null&&t.eml?[ze("📄",t.eml.name,t.eml.blob.size,"mail-eml","mail")]:[],...((t==null?void 0:t.atts)??[]).map((s,a)=>ze("📎",s.name,s.size,`mail-att:${a}`)),...se.map((s,a)=>ze("📎",s.name,s.size,`file:${a}`))].join("")}const Mn=t=>((!A||A.mail.key!==t.key)&&(A={mail:t,text:!1,atts:[]}),A);function it(){const t=be();at.hidden=!t||un(t.key).includes(e.number),t||(I.hidden=!0),A&&(!t||t.key!==A.mail.key)&&(A=null,we())}function Bt(){var k;const t=be();if(!t)return;const s=(A==null?void 0:A.mail.key)===t.key?A:null,a=t.attachments.filter(v=>!v.isInline),l=os(),c=(v,T,me,ke,qn=!1,jt="")=>`<button type="button" role="menuitem" data-act="${v}"${qn||ke?" disabled":""}${jt?` title="${o(jt)}"`:""}>
        <span>${T}</span><span class="grow">${o(me)}</span>${ke?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;I.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${o(t.subject||"(ohne Betreff)")}</div>
      ${c("text","📧","Mailtext als Inhalt einfügen",!!(s!=null&&s.text))}
      ${c("eml","📄","Mail als Datei anhängen (.eml)",!!(s!=null&&s.eml),!l,l?"":"In dieser Outlook-Version nicht verfügbar")}
      ${c("atts","📎",`Anhänge der Mail übernehmen (${a.length})`,!!s&&a.length>0&&a.every(v=>s.atts.includes(v)),a.length===0,a.length?"":"Die Mail hat keine Anhänge")}`,I.hidden=!1,(k=I.querySelector("button:not([disabled])"))==null||k.focus()}at.addEventListener("click",t=>{t.stopPropagation(),I.hidden?Bt():I.hidden=!0}),document.addEventListener("click",t=>{!I.hidden&&!I.contains(t.target)&&(I.hidden=!0)}),I.addEventListener("keydown",t=>{t.key==="Escape"&&(I.hidden=!0,at.focus())}),I.addEventListener("click",async t=>{const s=t.target.closest("button[data-act]"),a=be();if(!s||!a)return;t.stopPropagation();const l=Mn(a);if(s.dataset.act==="text")l.text=!0;else if(s.dataset.act==="atts")l.atts=a.attachments.filter(c=>!c.isInline);else if(s.dataset.act==="eml"){s.disabled=!0,s.querySelector(".grow").textContent="Mail wird geladen …";try{l.eml=await ls(a)}catch(c){pe.innerHTML=`<div class="error">${o(M(c))}</div>`}}I.hidden=!0,we(),j.focus()}),st.addEventListener("change",()=>{se=[...se,...Array.from(st.files??[])],st.value="",we()}),zt.addEventListener("click",t=>{var c;const s=(c=t.target.closest("[data-rm]"))==null?void 0:c.dataset.rm;if(!s)return;const[a,l]=s.split(":");a==="file"?se.splice(Number(l),1):A&&(a==="mail-text"?A.text=!1:a==="mail-eml"?A.eml=void 0:a==="mail-att"&&A.atts.splice(Number(l),1),!A.text&&!A.eml&&!A.atts.length&&(A=null)),we()}),j.addEventListener("input",()=>{j.style.height="auto",j.style.height=`${Math.min(Math.max(j.scrollHeight,72),260)}px`}),j.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&Ce.requestSubmit()}),Ce.addEventListener("submit",async t=>{t.preventDefault();const s=j.value,a=A;if(!s.trim()&&!se.length&&!a)return j.focus();const l=Ce.querySelector("button[type=submit]");l.disabled=!0,pe.innerHTML="";try{const c=await Wt(e.messageId,{note:s,mailText:a!=null&&a.text?a.mail:void 0,eml:a==null?void 0:a.eml,mailAttachments:a==null?void 0:a.atts,files:se},k=>pe.innerHTML=`<p class="hint">${o(k)}</p>`);a&&(dn(a.mail.key,e.number),sn(a.mail.conversationId,e)),j.value="",j.style.height="auto",se=[],A=null,we(),it(),pe.innerHTML=`<div class="ok">${o(rs(c,!!a))}</div>`,setTimeout(()=>pe.innerHTML="",6e3),y(),await $e(!0)}catch(c){pe.innerHTML=`<div class="error">${o(M(c))}</div>`}finally{l.disabled=!1}}),it(),Re=it,Se=()=>{Ce.scrollIntoView({block:"end"}),Bt()},await $e(),e.unread>0&&Un(e.messageId).then(()=>{e.unread=0,y()}).catch(()=>{})}let he=[];const Gt=n=>({taskId:n.id,messageId:n.messageId,number:n.number,title:n.title});function ct(n,e,i=""){const r=Oe(n.due);return`
    <button type="button" class="task-row card due-${r.level}${e?" is-selected":""}" data-pick="${o(n.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="num">#${n.number}</span>
          <span class="badge due-${r.level}">${o(r.text)}</span>
          ${n.status?`<span class="badge ${We(n.status)}">${o(n.status)}</span>`:""}
          ${i?`<span class="badge suggest">${o(i)}</span>`:""}
        </span>
      </span>
    </button>`}async function Hs(n){const e=document.createElement("div");if(n.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!cs()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{he=(await Me()).filter(b=>!Z(b))}catch(b){e.innerHTML=`<div class="pad"><div class="error">${o(M(b))}</div></div>`;return}let i=await ds()??{tasks:[],withAttachments:!0};const r=us(he,await ms(),ps());let d=!1;!i.tasks.length&&r.length&&!await hs()&&(i={...i,tasks:[Gt(r[0].task)]},await Kt(i).catch(()=>{}),Rt({chosen:i.tasks}),d=!0);let u="";const h=b=>i.tasks.some(m=>m.taskId===b),p=()=>{const b=u.trim().toLowerCase(),m=b?he.filter(g=>g.title.toLowerCase().includes(b)||String(g.number).includes(b.replace(/^#/,""))).slice(0,40):he.filter(g=>!r.some(C=>C.task.id===g.id)&&!h(g.id)).slice(0,40),f=i.tasks.map(g=>he.find(C=>C.id===g.taskId)??null),y=r.filter(g=>!h(g.task.id)),w=i.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${w?`<div class="compose-choice">
              <div class="hint">${d?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${w} ${w===1?"Aufgabe":"Aufgaben"}:</div>
              ${f.map((g,C)=>g?ct(g,!0):`<div class="card pad">#${i.tasks[C].number} ${o(i.tasks[C].title)}</div>`).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${w===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${i.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${y.length?`<h3 class="compose-sub">Vorschläge</h3>${y.map(g=>ct(g.task,!1,g.why)).join("")}`:""}
        <h3 class="compose-sub">${w?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${o(u)}">
        <div class="compose-list">${m.map(g=>ct(g,h(g.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${fs()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},S=async b=>{try{await Kt(b),i=b,d=!1,Rt({chosen:b.tasks}),p()}catch(m){const f=e.querySelector("#compose-msg");f&&(f.innerHTML=`<div class="error">${o(M(m))}</div>`)}};e.addEventListener("click",b=>{const m=b.target,f=m.closest("[data-pick]");if(f){const y=f.dataset.pick,w=he.find(g=>g.id===y);if(!w)return;S({...i,tasks:h(y)?i.tasks.filter(g=>g.taskId!==y):[...i.tasks,Gt(w)]})}else m.closest("#clear-choice")&&S({...i,tasks:[]})}),e.addEventListener("change",b=>{const m=b.target;m.id==="with-att"&&S({...i,withAttachments:m.checked}),m.id==="auto-suggest"&&bs(m.checked)}),e.addEventListener("input",b=>{const m=b.target;if(m.id!=="search")return;u=m.value;const f=m.selectionStart;p();const y=e.querySelector("#search");y.focus(),y.setSelectionRange(f,f)}),p()}const Is=n=>n.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function Ds(n,e,i,r){const d=new Date(Date.now()+6048e5);n.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${o(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${o(e?Is(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${Ve(d)}" min="${Ve(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${gs(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const u=f=>n.querySelector(f),h=u("#f-new"),p=n.querySelector("#with-mail"),S=u("#new-msg"),b=f=>S.innerHTML=f;u("#cancel").addEventListener("click",r),p==null||p.addEventListener("change",()=>u("#atts").hidden=!p.checked);const m=Pe(u("#assignee"));Promise.all([Ne(),Ue()]).then(([f,y])=>m.setUsers(f,y.id)).catch(f=>b(`<div class="error">Personenliste: ${o(M(f))}</div>`)),u("#name").focus(),h.addEventListener("submit",async f=>{f.preventDefault();const y=m.selected();if(!y){b('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),m.focus();return}const w=h.querySelector("button[type=submit]");w.disabled=!0;try{b('<p class="hint">Aufgabe wird angelegt …</p>');const g=await Jn({name:u("#name").value.trim(),dueAt:u("#due").value,assigneeId:y.id}),C=u("#desc").value;let W=`Aufgabe #${g.number||""} angelegt.`;if(C.trim())try{await tn(g.id,mt(C))}catch{await Qn(g.messageId,mt(C)).catch(()=>{})}try{if(e&&(p!=null&&p.checked)){const x=vs(u("#atts"),e),le=await ys(g.messageId,e,x,"",re=>b(`<p class="hint">${o(re)}</p>`));W+=" "+$s(x.length,le.shortened),dn(e.key,g.number),sn(e.conversationId,{id:g.id,number:g.number,title:u("#name").value.trim()})}}catch(x){W+=` Hinweis: ${M(x)}`}i(g,W)}catch(g){b(`<div class="error">${o(M(g))}</div>`),w.disabled=!1}})}an();const $=document.getElementById("app"),kt=document.getElementById("logout-link");function Cs(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function Je(n){Ws(),kt.hidden=!0;const e=ts()??Cs();$.innerHTML=`
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
    </form>`;const i=$.querySelector("#f-email"),r=$.querySelector("#f-code"),d=$.querySelector("#email"),u=$.querySelector("#code"),h=$.querySelector("#code-error");i.addEventListener("submit",async p=>{p.preventDefault();const S=i.querySelector("button");S.disabled=!0;try{await ns(d.value.trim()),$.querySelector("#sent-to").textContent=d.value.trim(),i.hidden=!0,r.hidden=!1,u.focus()}catch(b){Je(M(b))}finally{S.disabled=!1}}),r.addEventListener("submit",async p=>{p.preventDefault();const S=r.querySelector("button.primary");S.disabled=!0,h.innerHTML="";try{await ss(d.value.trim(),u.value.trim()),await fe(),await $n()}catch(b){h.innerHTML=`<div class="error">${o(M(b))}</div>`}finally{S.disabled=!1}}),$.querySelector("#back").addEventListener("click",()=>{r.hidden=!0,i.hidden=!1})}const mn="mm-addin-filters",_e=(n="")=>({time:"all",owner:"all",unread:!1,status:"",q:n});function zs(){try{return{..._e(),...JSON.parse(localStorage.getItem(mn)??"{}"),q:""}}catch{return _e()}}function bt(n){try{localStorage.setItem(mn,JSON.stringify({...n,q:""}))}catch{}}let q=[],Te=null,ft=[],gt=[];const Ae=n=>/erledigt/i.test(n.status),Lt=()=>Ae(L)?Te??[]:q;async function Zt(){if(Te)return;const n=$.querySelector("#list");n&&(n.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await Me("status_id=7"),i=new Set;Te=[...e,...ft].filter(r=>!i.has(r.id)&&i.add(r.id))}catch(e){Te=[...ft],n&&(n.innerHTML=`<div class="error">${o(M(e))}</div>`)}}let D,L=zs(),G=!1,Ye=!1;function dt(){const n=new Date;return n.setHours(0,0,0,0),n}const Ee={overdue:n=>!Z(n)&&!!n.due&&n.due<dt(),week:n=>!Z(n)&&!!n.due&&n.due>=dt()&&n.due<new Date(dt().getTime()+7*864e5),assigned:n=>(D==null?void 0:D.userId)!=null&&n.responsibleUserId===D.userId,created:n=>(D==null?void 0:D.userId)!=null&&n.creatorUserId===D.userId,unread:n=>n.unread>0};function hn(n,e){const i=e.q.trim().toLowerCase();return n.filter(r=>(e.time==="all"||Ee[e.time](r))&&(e.owner==="all"||Ee[e.owner](r))&&(!e.unread||Ee.unread(r))&&(!e.status||Ae(e)||r.status===e.status)&&(!i||r.title.toLowerCase().includes(i)||String(r.number).includes(i)))}const Bs=n=>n.time!=="all"||n.owner!=="all"||n.unread||!!n.status,bn=new Map,Fe=new Map;function Ns(n){const e=bn.get(n.id),i=is(n);return[e&&e.total?`<span class="badge progress-badge${e.done===e.total?" complete":""}" title="Checkliste: ${e.done} von ${e.total} erledigt">☑ ${e.done}/${e.total}</span>`:"",i.total?`<span class="badge progress-badge${i.done===i.total?" complete":""}" title="Unteraufgaben: ${i.done} von ${i.total} erledigt">🧩 ${i.done}/${i.total}</span>`:"",Fe.get(n.id)?`<span class="badge progress-badge" title="${Fe.get(n.id)} Dateien">📎 ${Fe.get(n.id)}</span>`:""].join("")}async function js(n){const e=[...n],i=async()=>{for(let r=e.shift();r;r=e.shift())try{const[d,u]=await Promise.all([Be(r.id),pt(r.id).catch(()=>[])]);bn.set(r.id,{done:d.filter(h=>h.done).length,total:d.length}),Fe.set(r.id,u.length)}catch{}};if(await Promise.all([i(),i(),i(),i()]),$.querySelector("#list")){const r=window.scrollY;V(),window.scrollTo(0,r)}}function Jt(n){const e=Z(n),i=e?{text:n.due?`✓ fällig war ${n.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:Oe(n.due),r=(D==null?void 0:D.userId)!=null&&n.responsibleUserId===D.userId;return`
    <button class="task-row card due-${i.level}${e?" is-done":""}${yt.has(n.id)?" fresh":""}" data-id="${o(n.id)}">
      <span class="task-main">
        <span class="task-name">${o(n.title)}</span>
        <span class="task-meta">
          <span class="num">#${n.number}</span>
          <span class="badge due-${i.level}">${o(i.text)}</span>
          ${n.status?`<span class="badge ${We(n.status)}">${o(n.status)}</span>`:""}
          ${n.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${o(n.creator??"den Ersteller")}">⏳ wartet auf Bestätigung</span>`:""}
          ${Ns(n)}
          <span class="comments${n.unread?" has-unread":""}" title="${n.comments} Kommentare${n.unread?`, davon ${n.unread} ungelesen`:""}">💬 ${n.comments}${n.unread?` <span class="badge unread">${n.unread} neu</span>`:""}</span>
        </span>
      </span>
      ${n.responsible&&!r?n.responsiblePicture?`<img class="avatar who-avatar" src="${o(n.responsiblePicture)}" alt="${o(n.responsible)}" title="Verantwortlich: ${o(n.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${o(n.responsible)}">${o(Ze(n.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function Ps(n){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const r of n)r.due?Ee.overdue(r)?e.Überfällig.push(r):Ee.week(r)?e["Nächste 7 Tage"].push(r):e.Später.push(r):e["Ohne Fälligkeit"].push(r);const i=(r,d)=>{var u,h;return(((u=r.due)==null?void 0:u.getTime())??0)-(((h=d.due)==null?void 0:h.getTime())??0)};return Object.entries(e).filter(([,r])=>r.length).map(([r,d])=>[r,d.sort(i)])}function Le(n,e,i,r,d=""){return`<button class="chip ${d}${e?" active":""}" ${r} aria-pressed="${e}">${o(n)} <span class="count">${i}</span></button>`}function Fs(){const n=$.querySelector("#filters");if(!n)return;const e=d=>hn(Lt(),{...L,...d}).length,i=q.map(d=>d.status).filter(Boolean),r=[...new Set([...gt,...i,...L.status?[L.status]:[]])];n.innerHTML=`
    ${Le("Überfällig",L.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${Le("Diese Woche",L.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${Le("Mir zugewiesen",L.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned"')}
    ${Le("Von mir erstellt",L.owner==="created",e({owner:"created"}),'data-owner="created"')}
    ${Le("💬 Neu",L.unread,e({unread:!0}),'data-unread="1"')}
    <select id="status-filter" class="chip-select${L.status?" active":""}" aria-label="Status filtern">
      <option value="">Alle Status</option>
      ${r.map(d=>`<option${d===L.status?" selected":""}>${o(d)}</option>`).join("")}
    </select>
`}let Y=!1;function Us(n){const e=[];return n.q.trim()&&e.push(`„${n.q.trim()}“`),n.time==="overdue"&&e.push("Überfällig"),n.time==="week"&&e.push("Diese Woche"),n.owner==="assigned"&&e.push("Mir zugewiesen"),n.owner==="created"&&e.push("Von mir erstellt"),n.unread&&e.push("💬 Neu"),n.status&&e.push(n.status),e}function fn(){const n=$.querySelector("#filter-bar");if(!n)return;const e=Us(L);n.innerHTML=`
    <button class="filter-toggle${e.length?" has-active":""}" id="filter-toggle" aria-expanded="${Y}">
      🔍 ${e.length?`Filter (${e.length})`:"Suchen & Filtern"} <span class="caret">${Y?"▴":"▾"}</span>
    </button>
    ${e.length&&!Y?`<span class="filter-summary">${e.map(i=>`<span class="badge">${o(i)}</span>`).join("")}</span>`:""}
    ${e.length?'<button class="link small" id="reset-all" title="Alle Filter und die Suche zurücksetzen">× zurücksetzen</button>':""}`}function V(){var u;const n=$.querySelector("#list");if(!n)return;const e=hn(Lt(),L),i=new Set((((u=be())==null?void 0:u.subject)??"").match(/\d{4,}/g)??[]),r=q.filter(h=>i.has(String(h.number))),d=r.length?`<div class="group-title">Passt zur geöffneten Mail</div>${r.map(Jt).join("")}`:"";n.innerHTML=d+(e.length?(Ae(L)?[["Erledigt",[...e].sort((h,p)=>{var S,b;return(((S=p.due)==null?void 0:S.getTime())??0)-(((b=h.due)==null?void 0:b.getTime())??0)})]]:Ps(e)).map(([h,p])=>`<div class="group-title">${o(h)} <span class="count">${p.length}</span></div>${p.map(Jt).join("")}`).join(""):`<div class="empty">${Bs(L)||L.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),Fs(),fn()}function gn(){const n=be();return G&&n?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${o(n.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    <button class="action primary" id="new-task" title="Neue Aufgabe in MyMonolith anlegen"><span class="ico">＋</span> Neue Aufgabe</button>
    ${n&&un(n.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function vt(){var e;const n=$.querySelector("#actions");n&&(n.innerHTML=gn()),(e=$.querySelector("#list"))==null||e.classList.toggle("picking",G)}async function fe(n=!0){if(kt.hidden=!1,ws())return Hs($);(n||!q.length)&&($.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(D??(D=await Ue().catch(()=>{})),n||!q.length){const r=await Me();q=r.filter(d=>!Z(d)),ft=r.filter(d=>Z(d)),Te=null,Ae(L)&&await Zt()}gt.length||(gt=(await ut().catch(()=>[])).map(r=>r.name)),Ye=!1,yn(),Vs(),n&&js(q)}catch(r){if(r instanceof es&&r.status===401)return Je(r.message);$.innerHTML=`<div class="error">${o(M(r))}</div>`;return}$.innerHTML=`
    <div class="view">
      <div class="sticky-head">
      <div class="toolbar">
        <strong class="grow">Meine Aufgaben <span class="hint">${q.length}</span></strong>
        <button class="tool-btn" id="theme" title="Design anpassen: Hell/Dunkel, Jahreszeit, Farben" aria-haspopup="menu">🎨</button>
        <button class="tool-btn" id="sound" title="${ie()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"}">${ie()?"🔔":"🔕"}</button>
        <button class="tool-btn" id="refresh" title="Liste neu laden">⟳ Aktualisieren</button>
      </div>
      <div id="actions" class="actions-bar">${gn()}</div>
      <div id="filter-bar" class="filter-bar"></div>
      <div id="theme-menu" class="theme-menu" role="menu" hidden></div>
      </div>
      <div id="filter-panel" class="filter-panel"${Y?"":" hidden"}>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${o(L.q)}">
        <div id="filters" class="filters"></div>
      </div>
      <div id="list" class="${G?"picking":""}"></div>
    </div>`;const e=$.querySelector("#search");e.addEventListener("input",()=>{L.q=e.value,V()});const i=$.querySelector("#filters");i.addEventListener("click",r=>{const d=r.target.closest("button");d&&(d.id==="reset-filters"?L=_e(L.q):d.dataset.time?L.time=L.time===d.dataset.time?"all":d.dataset.time:d.dataset.owner?L.owner=L.owner===d.dataset.owner?"all":d.dataset.owner:d.dataset.unread&&(L.unread=!L.unread),bt(L),V())}),i.addEventListener("change",r=>{const d=r.target;d.id==="status-filter"&&(L.status=d.value,bt(L),Ae(L)?Zt().then(V):V())}),$.querySelector("#list").addEventListener("click",r=>{const d=r.target.closest(".task-row"),u=Lt().find(p=>p.id===(d==null?void 0:d.dataset.id))??q.find(p=>p.id===(d==null?void 0:d.dataset.id));if(!u)return;const h=G;G=!1,St(u,void 0,h)}),V()}async function St(n,e,i=!1){const r=window.scrollY;window.scrollTo(0,0),await ht($,n,()=>{fe(Ye),window.scrollTo(0,r)},e,()=>Ye=!0),i&&(Se==null||Se())}function Qt(n){window.scrollTo(0,0),Ds($,n?be():null,async(e,i)=>{q=(await Me().catch(()=>q)).filter(d=>!Z(d));const r=q.find(d=>d.id===e.id||e.number&&d.number===e.number);r?await St(r,i):(await fe(!1),$.insertAdjacentHTML("afterbegin",`<div class="ok">${o(i)}</div>`))},()=>void fe(!1))}document.addEventListener("click",n=>{const e=$.querySelector("#theme-menu"),i=n.composedPath().some(r=>r instanceof HTMLElement&&(r.id==="theme-menu"||r.id==="theme"));e&&!e.hidden&&!i&&(e.hidden=!0)});$.addEventListener("click",n=>{var i,r;const e=n.target;if(e.closest("#new-task"))Qt(!1);else if(e.closest("#new-from-mail"))Qt(!0);else if(e.closest("#refresh"))fe();else if(e.closest("#filter-toggle"))Y=!Y,(i=$.querySelector("#filter-panel"))==null||i.toggleAttribute("hidden",!Y),fn(),Y&&((r=$.querySelector("#search"))==null||r.focus());else if(e.closest("#reset-all")){L=_e(),bt(L);const d=$.querySelector("#search");d&&(d.value=""),V()}else if(e.closest("#theme")){const d=$.querySelector("#theme-menu");d&&(d.hidden=!d.hidden,d.hidden||(d.innerHTML=_t()))}else if(e.closest("#theme-menu button.opt")){const d=e.closest("#theme-menu button.opt"),u=d.dataset.mode?{mode:d.dataset.mode}:d.dataset.bg?{background:d.dataset.bg}:{accent:d.dataset.accent},h=Ls(u);$.querySelector("#theme-menu").innerHTML=_t(h)}else if(e.closest("#sound")){Es(!ie());const d=$.querySelector("#sound");d&&(d.textContent=ie()?"🔔":"🔕",d.title=ie()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),ie()&&on()}else e.closest("#pick-for-mail")?(G=!0,vt()):e.closest("#pick-cancel")&&(G=!1,vt())});kt.addEventListener("click",()=>{Xn(),Je()});const Os=6e4;let Ge,vn=new Map;const yt=new Set;function yn(){vn=new Map(q.map(n=>[n.id,n.unread]))}function Vs(){Ge||(Ge=window.setInterval(()=>void Ks(),Os))}function Ws(){window.clearInterval(Ge),Ge=void 0}async function Ks(){if(!$t()||document.hidden)return;let n;try{n=(await Me()).filter(i=>!Z(i))}catch{return}const e=n.filter(i=>i.unread>(vn.get(i.id)??0));if(q=n,yn(),!!e.length){on();for(const i of e)yt.add(i.id);if(setTimeout(()=>{for(const i of e)yt.delete(i.id);$.querySelectorAll(".task-row.fresh").forEach(i=>i.classList.remove("fresh"))},15e3),$.querySelector("#list")){const i=window.scrollY;V(),window.scrollTo(0,i)}else Ye=!0}}function Rs(){Ts(),an(),Ss(),ks(()=>{if(Re)return Re();G=!1,vt(),V()}),$t()?fe().then($n):Je()}let Xt=new URLSearchParams(location.search).get("task");async function $n(){const n=Xt;if(!(!n||!$t())){Xt=null;try{const e=q.find(i=>i.id===n)??await as(n);await St(e)}catch(e){$.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${o(M(e))}</div>`)}}}async function _s(){var n,e;try{const i=location.href.split(/[?#]/)[0],d=(n=(await fetch(`${i}?check=${Date.now()}`,{cache:"no-store"}).then(b=>b.text())).match(/assets\/(taskpane|teams)-[\w-]+\.js/))==null?void 0:n[0],u=[...document.scripts].map(b=>b.src).find(b=>/assets\/(taskpane|teams)-/.test(b));if(!d||!u||u.includes(d))return;const h=()=>{const b=new URL(location.href);b.searchParams.set("v",String(Date.now())),location.replace(b.toString())},p=document.getElementById("update-note");p&&(p.hidden=!1,(e=p.querySelector("button"))==null||e.addEventListener("click",h));let S="";try{S=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",d)}catch{}S!==d&&h()}catch{}}let en=!1;const wn=()=>{en||(en=!0,Rs())};_s();typeof Office<"u"&&Office.onReady(wn);setTimeout(wn,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 10:33 UTC";
