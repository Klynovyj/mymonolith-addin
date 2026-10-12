import{a as pe,c as Ze,e as D,b as l,l as je,g as Je,f as vs,h as $s,d as Ne,s as Be,j as ys,k as ft,P as Qt,o as St,m as Et,n as Lt,p as Xt,q as Zs,r as Js,t as Qs,u as Xs,v as At,w as en,x as es,y as ot,z as ts,A as ss,B as tn,C as qt,D as ns,E as sn,F as lt,G as nn,H as It,I as ws,J as ks,K as an,L as ln,M as rt,N as on,O as rn,Q as cn,R as ut,S as dn,T as un,U as pn,V as mn,W as hn,X as bn,Y as fn,Z as gn,_ as vn,$ as $n,a0 as yn,a1 as wn,i as Pt,a2 as kn}from"./util-CtNnOUSB.js";import{m as Sn,s as xt,b as jt,l as Ss,n as ze,o as Ln,p as An,q as ct,t as Tn,u as Mn,g as En,d as qn,f as In,k as xn,e as as,j as is,v as Cn,h as Dn,w as Hn,x as Nn,y as Bn,z as zn,A as Pn,B as jn}from"./composemail-B6jC4ktv.js";import{g as ls,l as os,a as On,b as Fn,c as Un,m as Kn,M as rs,o as Ls}from"./chatpost-C0Sfkk5u.js";import{a as As,t as cs,u as Vn,w as Wn}from"./theme-DWfzb2QX.js";const Rn=s=>s.toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}),_n=s=>(s||"Mail").replace(/[\\/:*?"<>|]+/g," ").replace(/\s+/g," ").trim().slice(0,80);function Ts(s){var Fe;const e=document.createElement("div");e.className="overlay",e.innerHTML='<div class="overlay-panel" role="dialog" aria-label="Aus Outlook posten"></div>',document.body.append(e),document.body.classList.add("has-overlay");const a=e.querySelector(".overlay-panel");let c=!1;const p=()=>{e.remove(),document.body.classList.remove("has-overlay"),s.onClose(c)};let d=((Fe=s.tasks)==null?void 0:Fe.filter($=>!pe($)))??[],h="inbox",u="",M=[];const y=new Map;let f=!1,m=s.task??null,b=[],v="",A=!0,O=!0,N=s.parentId??"",k=[],R="",U=!1,se="",ne=Ze(new Date(Date.now()+7*864e5)),Y="",G="",le;const Q=$=>`
    <div class="topbar sticky-head">
      <span></span>
      <strong class="grow center">${$}</strong>
      <button class="nav-btn" data-close title="Schließen">✕</button>
    </div>
    ${G?`<div class="error">${l(G)}</div>`:""}`;function X(){a.innerHTML=`${Q("📧 Aus Outlook")}
      <div class="pad">
        <p>Damit die App Ihre Mails lesen kann, ist einmalig eine <b>Microsoft-Anmeldung</b> nötig.</p>
             <p class="hint">Erscheint „Administratorgenehmigung erforderlich“, muss die EDV die Berechtigung <b>Mail.Read</b> für die App „MyMonolith Aufgaben“ bestätigen.</p>
             <button class="primary" id="ms-login">Mit Microsoft anmelden</button>
      </div>`}function Ee($,g,E=""){const H=Ne($.due);return`<button type="button" class="task-row card due-${H.level}${g?" is-selected":""}" data-task="${l($.id)}">
      <span class="pick-box" aria-hidden="true">${g?"✓":""}</span>
      <span class="task-main"><span class="task-name">${l($.title)}</span>
        <span class="task-meta"><span class="num">#${$.number}</span>
          <span class="badge due-${H.level}">${l(H.text)}</span>
          ${$.status?`<span class="badge ${Be($.status)}">${l($.status)}</span>`:""}
          ${E?`<span class="badge suggest">${l(E)}</span>`:""}</span></span>
    </button>`}function ae(){if(s.task)return;const $=[...y.values()][0];b=$?Ss(d,$.subject,$.conversationId):[],!m&&b[0]&&(m=b[0].task)}async function ee(){if(!m||s.parentId||R===m.id)return;const $=m;R=$.id,N="",k=[];try{k=await ys($.messageId)}catch{}(m==null?void 0:m.id)===$.id&&B()}function B(){var Xe,be,K,re;const $=y.size,g=v.trim().toLowerCase(),E=new Set([m==null?void 0:m.id,...b.map(w=>w.task.id)]),H=g?d.filter(w=>w.title.toLowerCase().includes(g)||String(w.number).includes(g.replace(/^#/,""))).slice(0,50):d.filter(w=>!E.has(w.id)).slice(0,100),P=((Xe=a.querySelector(".chat-msgs"))==null?void 0:Xe.scrollTop)??0,V=((be=a.querySelector(".task-pick-list"))==null?void 0:be.scrollTop)??0,oe=a.scrollTop,j=((K=document.activeElement)==null?void 0:K.id)==="mail-search",x=((re=document.activeElement)==null?void 0:re.selectionStart)??null,_=[...M,...[...y.values()].filter(w=>!M.some(qe=>qe.id===w.id))];a.innerHTML=`${Q("📧 Aus Outlook")}
      <div class="pad compose-pane">
        <section class="step step-mail">
          <h3 class="step-head"><span class="step-no">1</span> 📧 Outlook-Postfach <span class="step-hint">Mails ankreuzen – ${$} gewählt</span></h3>
          <div class="mail-tools">
            <div class="seg">
              ${["inbox","sent","all"].map(w=>`<button type="button" class="seg-btn${h===w?" active":""}" data-folder="${w}">${w==="inbox"?"Posteingang":w==="sent"?"Gesendet":"Alle"}</button>`).join("")}
            </div>
            <input id="mail-search" type="search" placeholder="🔎 Suchen (Absender, Betreff, Text)" value="${l(u)}">
          </div>
          <div class="chat-msgs mail-list">
            ${f&&!_.length?'<p class="hint">Mails werden geladen …</p>':""}
            ${_.map(w=>`<label class="chat-msg mail-row${y.has(w.id)?" is-selected":""}">
                  <input type="checkbox" data-mail="${l(w.id)}"${y.has(w.id)?" checked":""}>
                  <span class="chat-msg-main">
                    <span class="chat-msg-head"><strong>${l(w.from)}</strong> <span class="hint">${Rn(w.at)}</span>${w.hasAttachments?' <span title="Mit Anhängen">📎</span>':""}</span>
                    <span class="mail-subject">${l(w.subject)}</span>
                    <span class="chat-msg-text hint">${l(w.preview)}</span>
                  </span>
                </label>`).join("")||(f?"":'<p class="hint">Keine Mails gefunden.</p>')}
          </div>
        </section>

        <section class="step step-task">
          <h3 class="step-head"><span class="step-no">2</span> 📋 MyMonolith-Aufgabe <span class="step-hint">${m?`#${m.number} gewählt`:"Aufgabe wählen oder neu anlegen"}</span></h3>
          ${m?Ee(m,!0):'<p class="hint">Noch keine Aufgabe gewählt.</p>'}
          ${s.task?"":U?`<div class="new-from-chat card pad">
                  <label>Titel der neuen Aufgabe<input id="new-title" maxlength="255" value="${l(se)}"></label>
                  <label>Fällig am<input id="new-due" type="date" value="${l(ne)}"></label>
                  <span class="hint">Verantwortlich: Sie selbst (später änderbar über „Weitergeben“)</span>
                  <div class="row-btns"><button class="primary small" id="new-create">＋ Anlegen und auswählen</button><button class="small" id="new-cancel">Abbrechen</button></div>
                </div>`:'<button type="button" class="tool-btn" id="new-open">＋ Neue Aufgabe aus Mail</button>'}
          ${s.task?"":`${b.filter(w=>w.task.id!==(m==null?void 0:m.id)).map(w=>Ee(w.task,!1,w.why)).join("")}
               <input id="task-search" type="search" placeholder="Aufgabe suchen (Titel oder Nummer)" value="${l(v)}">
               <div class="task-pick-list">${H.map(w=>Ee(w,w.id===(m==null?void 0:m.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>`}
          ${m?`<div class="reply-target">
                ${s.parentId?`<span>↩ Als <b>Antwort an ${l(s.parentName??"")}</b></span>`:`<label>Posten als <select id="reply-target">
                      <option value="">neuer Kommentar</option>
                      ${k.map(w=>`<option value="${l(w.id)}"${w.id===N?" selected":""}>↩ Antwort auf ${l(w.label)}</option>`).join("")}
                    </select></label>`}
              </div>`:""}
        </section>

        <section class="step step-send">
          <h3 class="step-head"><span class="step-no">3</span> 📤 Senden <span class="step-hint">je Mail ein Kommentar</span></h3>
          <label class="check"><input type="checkbox" id="opt-eml"${A?" checked":""}> Mail als .eml-Datei anhängen (komplett mit Verlauf)</label>
          <label class="check"><input type="checkbox" id="opt-atts"${O?" checked":""}> Anhänge der Mail einzeln mitsenden</label>
          <div class="row-btns">
            <button class="primary" id="do-post"${!$||!m||Y?" disabled":""}>📤 ${$||""} ${$===1?"Mail":"Mails"} posten</button>
          </div>
          ${Y?`<p class="hint">${l(Y)}</p>`:""}
        </section>
      </div>`;const Ue=a.querySelector(".chat-msgs");Ue&&(Ue.scrollTop=P);const te=a.querySelector(".task-pick-list");if(te&&(te.scrollTop=V),a.scrollTop=oe,j){const w=a.querySelector("#mail-search");w.focus(),x!=null&&w.setSelectionRange(x,x)}ee()}async function ie(){f=!0,B();try{M=await os(h,u),G=""}catch($){G=D($)}f=!1,B()}async function Oe(){a.innerHTML=`${Q("📧 Aus Outlook")}<p class="hint pad">Mails werden geladen …</p>`;try{const[,$]=await Promise.all([os(h).then(g=>M=g),d.length||s.task?Promise.resolve(d):je().then(g=>g.filter(E=>!pe(E)))]);d=$,G="",B()}catch($){G=D($),X()}}async function vt(){var g;const $=se.trim();if(!$)return(g=a.querySelector("#new-title"))==null?void 0:g.focus();G="",Y="Aufgabe wird angelegt …",B();try{const E=await Je(),H=await vs({name:$,dueAt:ne,assigneeId:E.id}),P=await $s(H.id);d=[P,...d],m=P,U=!1,se="",c=!0}catch(E){G=D(E)}Y="",B()}async function ye(){if(!m||!y.size)return;const $=m,g=[...y.values()].sort((H,P)=>H.at.getTime()-P.at.getTime());G="";let E=0;try{for(const[H,P]of g.entries()){Y=`Mail ${H+1}/${g.length}: „${P.subject}“ wird geladen …`,B();const V=await On(P.id),{parts:oe}=Sn({from:V.from,to:V.to,cc:V.cc,subject:V.subject,html:V.html,sent:V.sent}),j=A?{blob:await Fn(P.id),name:`${_n(V.subject)}.eml`}:void 0,x=O&&P.hasAttachments?await Un(P.id):[];await xt($.messageId,{note:"",parts:oe,eml:j,blobs:x.map(_=>({name:_.name,size:_.size,load:()=>Kn(P.id,_.id)})),parentId:N||void 0},_=>{Y=`Mail ${H+1}/${g.length}: ${_}`,B()}),jt(V.conversationId,$),E++,c=!0}Y="",a.innerHTML=`${Q("Erledigt")}
        <div class="pad">
          <div class="ok">${E} ${E===1?"Mail":"Mails"} an #${$.number} gepostet${N?" (als Antwort)":""}.</div>
          <div class="row-btns"><button class="primary" data-close>Fertig</button><button data-more>Weitere Mails posten</button></div>
        </div>`,y.clear()}catch(H){Y="",G=`${E?`${E} von ${g.length} Mails gepostet. `:""}${D(H)}`,g.slice(0,E).forEach(P=>y.delete(P.id)),B()}}a.addEventListener("click",$=>{var V,oe;const g=$.target;if(g.closest("[data-close]"))return p();if(g.closest("[data-more]"))return B();const E=g.closest("#ms-login");if(E){if(E.disabled)return;E.disabled=!0,E.textContent="Anmeldefenster ist geöffnet …",ls(!0,rs).then(Oe,j=>{/interaction_in_progress/.test(String(j))||(G=D(j),X())});return}const H=g.closest("[data-folder]");if(H)return h=H.dataset.folder,void ie();const P=g.closest("[data-task]");if(P&&!s.task)return m=d.find(j=>j.id===P.dataset.task)??m,v="",B();if(g.closest("#new-open")){U=!0,se||(se=(((V=[...y.values()][0])==null?void 0:V.subject)??"").replace(/^\s*((AW|RE|WG|FW|FWD)\s*:\s*)+/i,"").slice(0,120)),B(),(oe=a.querySelector("#new-title"))==null||oe.focus();return}if(g.closest("#new-cancel"))return U=!1,B();if(g.closest("#new-create"))return void vt();if(g.closest("#do-post"))return void ye()}),a.addEventListener("change",$=>{const g=$.target;if(g.dataset.mail){const E=[...M,...y.values()].find(H=>H.id===g.dataset.mail);g.checked&&E?y.set(E.id,E):y.delete(g.dataset.mail),ae(),B()}else g.id==="opt-eml"?A=g.checked:g.id==="opt-atts"?O=g.checked:g.id==="new-due"?ne=g.value:g.id==="reply-target"&&(N=g.value)}),a.addEventListener("input",$=>{const g=$.target;if(g.id==="new-title")se=g.value;else if(g.id==="mail-search")u=g.value,clearTimeout(le),le=window.setTimeout(()=>void ie(),500);else if(g.id==="task-search"){const E=g.selectionStart;v=g.value,B();const H=a.querySelector("#task-search");H.focus(),H.setSelectionRange(E,E)}}),a.innerHTML=`${Q("📧 Aus Outlook")}<p class="hint pad">Anmeldung wird geprüft …</p>`,ls(!1,rs).then(Oe,()=>X())}const Ms="mm-addin-sound",Es="mm-addin-sent-mails";let Te=null;function Gn(){const s=()=>{try{Te??(Te=new AudioContext),Te.resume()}catch{}};window.addEventListener("pointerdown",s,{once:!0,capture:!0}),window.addEventListener("keydown",s,{once:!0,capture:!0})}function Me(){try{return localStorage.getItem(Ms)!=="off"}catch{return!0}}function Yn(s){try{localStorage.setItem(Ms,s?"on":"off")}catch{}}function qs(){if(Me())try{Te??(Te=new AudioContext);const s=Te.currentTime;for(const[e,a]of[880,1320].entries()){const c=Te.createOscillator(),p=Te.createGain();c.type="sine",c.frequency.value=a;const d=s+e*.16;p.gain.setValueAtTime(1e-4,d),p.gain.exponentialRampToValueAtTime(.18,d+.02),p.gain.exponentialRampToValueAtTime(1e-4,d+.14),c.connect(p).connect(Te.destination),c.start(d),c.stop(d+.15)}}catch{}}function Is(){try{return JSON.parse(localStorage.getItem(Es)??"{}")}catch{return{}}}function xs(s,e){const a=Is();a[s]=[...new Set([...a[s]??[],e])];const c=Object.keys(a);for(const p of c.slice(0,Math.max(0,c.length-200)))delete a[p];try{localStorage.setItem(Es,JSON.stringify(a))}catch{}}const Cs=s=>Is()[s]??[];function dt(s,e="Name suchen …"){s.classList.add("picker"),s.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${l(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const a=s.querySelector("input"),c=s.querySelector("ul");let p=[],d,h=0,u=[];const M=()=>{const f=a.value.trim().toLowerCase();u=(f?p.filter(m=>m.name.toLowerCase().includes(f)):p).slice(0,8),h=Math.min(h,Math.max(u.length-1,0)),c.innerHTML=u.length?u.map((m,b)=>`<li role="option" data-i="${b}" class="${b===h?"active":""}"><span class="avatar sm">${l(ft(m.name))}</span>${l(m.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',c.hidden=!1},y=f=>{d=f,a.value=f.name,c.hidden=!0};return a.addEventListener("focus",()=>{a.select(),M()}),a.addEventListener("input",()=>{d=void 0,h=0,M()}),a.addEventListener("keydown",f=>{if(!c.hidden){if(f.key==="ArrowDown")h=Math.min(h+1,u.length-1);else if(f.key==="ArrowUp")h=Math.max(h-1,0);else return f.key==="Enter"&&u[h]?(f.preventDefault(),y(u[h])):f.key==="Escape"?void(c.hidden=!0):void 0;f.preventDefault(),M()}}),c.addEventListener("mousedown",f=>{const m=f.target.closest("li[data-i]");m&&(f.preventDefault(),y(u[Number(m.dataset.i)]))}),a.addEventListener("blur",()=>{c.hidden=!0,d||(d=p.find(f=>f.name.toLowerCase()===a.value.trim().toLowerCase()))}),{setUsers(f,m){p=f;const b=p.find(v=>v.id===m);b&&!a.value&&y(b)},selected:()=>d,focus:()=>a.focus()}}let pt=null,_e=null;const Ds="mm-addin-comment-order";function Zn(){try{return localStorage.getItem(Ds)==="oldest"?"oldest":"newest"}catch{return"newest"}}function Jn(s){try{localStorage.setItem(Ds,s)}catch{}}const ds=s=>{var e;return!!((e=s.raw)!=null&&e.type)&&s.raw.type!=="text"};function Qn(s){const e=[];for(const a of s){const c=e[e.length-1];ds(a)&&Array.isArray(c)?c.push(a):e.push(ds(a)?[a]:a)}return e.map(a=>Array.isArray(a)&&a.length===1?a[0]:a)}function Xn(s){const e=s.map(d=>{var h;return(h=d.createdAt)==null?void 0:h.getTime()}).filter(d=>!!d).sort((d,h)=>d-h),a=d=>new Date(d).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),c=d=>new Date(d).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),p=e.length?a(e[0])===a(e[e.length-1])?`${a(e[0])}, ${c(e[0])}–${c(e[e.length-1])}`:`${a(e[0])} – ${a(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${s.length} Änderungen <span class="hint">${p}</span></summary>
      ${s.map(d=>Ot(d)).join("")}
    </details>`}let We="";function Ot(s,e=!1){var p,d,h;const a=((p=s.raw)==null?void 0:p.type)&&s.raw.type!=="text",c=s.files.length?`<ul class="files">${s.files.map(u=>`<li>📎 ${u.url&&/^https:\/\//.test(u.url)?`<a href="${l(u.url)}" data-external>${l(u.name)}</a>`:l(u.name)}${u.size?` <span class="hint">${ct(u.size)}</span>`:""}</li>`).join("")}</ul>`:"";return a?`<div class="event">${s.html} · ${l(s.author)}${s.createdAt?`, ${ut(s.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}${We&&s.author===We?" mine":""}">
      ${s.avatar?`<img class="avatar" src="${l(s.avatar)}" alt="">`:`<span class="avatar">${l(ft(s.author))}</span>`}
      <div class="bubble">
        <header><strong>${l(s.author)}</strong>${We&&s.author===We?' <span class="me-tag">Sie</span>':""}${s.createdAt?` <span class="hint when">${ut(s.createdAt)}</span>`:""}</header>
        ${s.html.trim()?`<div class="body">${ks(s.html)}</div>`:s.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${c}
        ${s.replies.map(u=>Ot(u,!0)).join("")}
        ${e?"":`<div class="msg-actions"><button type="button" class="reply-btn" data-reply="${l(String(((d=s.raw)==null?void 0:d.id)??s.id))}" data-reply-name="${l(s.author)}">↩ Antworten</button></div>
             <div class="reply-slot" data-slot="${l(String(((h=s.raw)==null?void 0:h.id)??s.id))}"></div>`}
      </div>
    </article>`}async function Ct(s,e,a,c,p,d){var Zt;pt=null,_e=null;const h=await Je().catch(()=>{});We=(h==null?void 0:h.name)??"",s.innerHTML=`
    <div class="view detail">
      <div class="topbar sticky-head">
        <button class="nav-btn" id="back" title="${d?`Zurück zur Hauptaufgabe #${d.number}`:"Zurück zur Aufgabenliste"}">← ${d?`#${d.number}`:"Zurück"}</button>
        <span class="hint grow center">${d?"Unteraufgabe":"Aufgabe"} #${e.number}</span>
        <button class="nav-btn" id="open-web" title="Diese Aufgabe in MyMonolith im Browser öffnen">Im Browser ↗</button>
      </div>
      ${d?`<div class="breadcrumb">↳ Unteraufgabe von <button type="button" class="link" id="to-parent">#${d.number} ${l(d.title)}</button></div>`:""}
      <div id="flash">${c?`<div class="ok">${l(c)}</div>`:""}</div>

      <section class="d-card d-head">
      <div id="title-box" class="title-box"></div>
      <div class="d-sub">#${e.number}${e.creator?` · erstellt von <strong>${l(e.creator)}</strong>`:""}</div>
      <div id="phase-note"></div>
      <details class="d-fold" id="fold-tiles">
      <summary class="d-fold-sum" id="sum-tiles">Status, Fälligkeit, Priorität …</summary>
      <div class="tiles">
        <div class="tile tile-status">
          <span class="tile-label">Status</span>
          <select id="status" class="bare status-select" aria-label="Status"><option>${l(e.status??"…")}</option></select>
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
            ${Qt.map(t=>`<option value="${t.value}"${t.value===(e.priority??"").toLowerCase()?" selected":""}>${t.label}</option>`).join("")}
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
        ${d?"":'<button class="tab" role="tab" data-tab="subtasks" aria-selected="false">🧩 Unteraufgaben <span class="hint" id="sub-count"></span></button>'}
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
          <button type="button" class="tool-btn" id="outlook-btn" title="Mails aus dem Outlook-Postfach in diese Aufgabe posten">📨 Aus Outlook</button>
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
    </div>`,document.body.classList.add("plain-bg");const u=t=>s.querySelector(t),M=u("#flash"),y=t=>{M.innerHTML=t,M.scrollIntoView({block:"nearest"})},f=t=>y(`<div class="ok">${l(t)}</div>`),m=t=>y(`<div class="error">${l(D(t))}</div>`),b=()=>p==null?void 0:p();u("#back").addEventListener("click",a),u("#open-web").addEventListener("click",()=>St(e.url)),u("#comments").addEventListener("click",t=>{var o;const n=t.target.closest("[data-reply]");if(n){C={id:n.dataset.reply,name:n.dataset.replyName??""},_t(),(o=s.querySelector("#comment"))==null||o.focus();return}if(t.target.closest("#reply-cancel")){C=null,xe();return}const i=t.target.closest("a[data-external]");i&&(t.preventDefault(),St(i.href))});const v=u("#status"),A=u("#done-actions"),O=u("#phase-note"),N=(h==null?void 0:h.userId)!=null&&e.creatorUserId===h.userId;let k=null;const R=t=>{e.phase=t,e.raw.StatusID=t==="done"?7:t==="pending"?5:1};function U(){v.className=`bare status-select ${Be(e.status)}`;const t=(i,o)=>k?k.includes(i):o;O.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${N?"durch Sie":`von <strong>${l(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const n=[];if(t("approve",e.phase==="pending"&&N)&&n.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),t("finish",e.phase==="open")){const i=e.needsApproval&&!N;n.push(`<button class="primary" data-act="finish" title="${i?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${i?"Zur Freigabe":"Erledigt"}</button>`)}t("reopen",e.phase!=="open")&&n.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),A.innerHTML=n.join(""),u("#tile-finish").hidden=!n.length}async function se(t){const n=[...v.options].find(i=>t.test((i.textContent??"").trim()));return!n||v.value===n.value?!1:(await Lt(e.id,n.value),v.value=n.value,e.statusId=n.value,e.status=n.textContent??e.status,!0)}async function ne(){try{const t=await ss(e.id);k=t.actions,R(t.phase);const n=t.spaStatusId?[...v.options].find(i=>i.value===t.spaStatusId):void 0;n&&(v.value=n.value,e.statusId=n.value,e.status=n.textContent??e.status)}catch{}U(),ee==null||ee(),fe==null||fe(),ce==null||ce()}U(),ne(),Et().then(t=>{v.innerHTML=t.map(n=>`<option value="${l(n.id)}"${n.id===e.statusId||n.name===e.status?" selected":""}>${l(n.name)}</option>`).join(""),e.statusId??(e.statusId=v.value)}).catch(m);const Y=u("#status-confirm"),G=()=>v.value!==(e.statusId??v.value);v.addEventListener("change",()=>{Y.hidden=!G(),v.classList.toggle("is-pending",G())}),u("#status-cancel").addEventListener("click",()=>{e.statusId&&(v.value=e.statusId),Y.hidden=!0,v.classList.remove("is-pending")}),u("#status-ok").addEventListener("click",async()=>{var i;const t=e.statusId??"",n=((i=v.selectedOptions[0])==null?void 0:i.textContent)??"";Y.hidden=!0,v.classList.remove("is-pending"),v.disabled=!0;try{await Lt(e.id,v.value),e.statusId=v.value,e.status=n,f(`Status: ${n}`),b(),await ne(),Le()}catch(o){v.value=t,m(o)}finally{v.disabled=!1}}),A.addEventListener("click",async t=>{var i;const n=t.target.closest("button[data-act]");if(n){A.querySelectorAll("button").forEach(o=>o.disabled=!0);try{const o=n.dataset.act;o==="finish"?(await Xt(e.id),R(e.needsApproval&&!N?"pending":"done")):o==="approve"?(await Zs(e.id),R("done")):o==="reopen"&&(await Js(e.id),R("open")),await ne();let r="";try{e.phase==="done"&&await se(/^erledigt$/i)?r=" Status: Erledigt.":o==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await se(/^zu erledigen$/i)&&(r=" Status: Zu erledigen.")}catch(L){r=` (Status konnte nicht angepasst werden: ${D(L)})`}U(),f(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),r&&f(`${((i=M.textContent)==null?void 0:i.trim())??""}${r}`),Q(),fe(),ce(),b(),Le()}catch(o){m(o),U()}}});const le=u("#tile-due");function Q(t=!1){var o;const n=Ne(e.due),i=Qs(e,h);if(t){le.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?Ze(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const r=le.querySelector("#due-input");r.focus(),le.querySelector("#due-cancel").addEventListener("click",()=>Q()),le.querySelector("#due-save").addEventListener("click",async()=>{if(!r.value)return r.focus();try{await Xs(e.id,r.value),e.due=new Date(`${r.value}T00:00:00`),f(`Fällig am ${At(e.due)}`),b(),Q()}catch(L){m(L)}});return}le.className=`tile due-${n.level}`,le.innerHTML=`
      <span class="tile-label">Fällig ${i?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${i?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?At(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?At(e.due):"–"}</span>`}
      <span class="tile-sub">${l(n.text)}</span>`,(o=le.querySelector("#due-edit"))==null||o.addEventListener("click",()=>Q(!0))}Q();const X=u("#prio"),Ee=()=>X.dataset.p=X.value;Ee(),X.addEventListener("change",async()=>{const t=e.priority??"";try{await en(e.id,X.value),e.priority=X.value,e.raw.Priority=X.value,Ee(),f(`Priorität: ${X.selectedOptions[0].textContent}`),b()}catch(n){X.value=t,m(n)}});const ae=u("#tile-resp");function ee(t="view",n){var i;if(t==="view"){ae.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${l(e.responsible??"–")}</span>
        ${!k||k.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(i=ae.querySelector("#resp-edit"))==null||i.addEventListener("click",()=>ee("pick"));return}if(t==="pick"){ae.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const o=dt(ae.querySelector("#resp-picker"));rt().then(r=>o.setUsers(r)).catch(m),o.focus(),ae.querySelector("#resp-cancel").addEventListener("click",()=>ee()),ae.querySelector("#resp-next").addEventListener("click",()=>{const r=o.selected();r?ee("confirm",r):o.focus()});return}ae.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${l(n.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,ae.querySelector("#resp-cancel").addEventListener("click",()=>ee()),ae.querySelector("#resp-ok").addEventListener("click",async()=>{try{await on(e.id,n.id),e.responsible=n.name,e.responsibleUserId=n.userId,f(`Weitergegeben an ${n.name}.`),b(),ee(),Q()}catch(o){m(o),ee()}})}ee();const B=u("#people");let ie={administrators:[],participants:[]};const Oe={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},vt=(t,n)=>`
    <span class="person-chip" title="${l(n.name)}">
      ${n.picture?`<img class="avatar sm" src="${l(n.picture)}" alt="">`:`<span class="avatar sm">${l(ft(n.name))}</span>`}
      ${l(n.name)}
      <button type="button" data-rm-person="${t}:${l(n.id)}" aria-label="${l(n.name)} entfernen" title="Entfernen">×</button>
    </span>`;function ye(t){if(B.innerHTML=["administrators","participants"].map(n=>`
        <div class="people-row">
          <span class="people-label">${Oe[n]}</span>
          <div class="people-list">
            ${ie[n].map(i=>vt(n,i)).join("")||'<span class="hint">niemand</span>'}
            ${t===n?"":`<button type="button" class="add-person" data-add-person="${n}">＋ Hinzufügen</button>`}
          </div>
          ${t===n?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),t){const n=dt(B.querySelector("#people-picker"),"Kollegen suchen …"),i=new Set(ie[t].map(o=>o.id));rt().then(o=>n.setUsers(o.filter(r=>!i.has(r.id)))).catch(m),n.focus(),B.querySelector("#people-cancel").addEventListener("click",()=>ye()),B.querySelector("#people-save").addEventListener("click",async()=>{const o=n.selected();if(!o)return n.focus();await Fe(t,[...ie[t],{...o}],`${o.name} als ${Oe[t]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function Fe(t,n,i){try{await rn(e.id,t,n.map(o=>o.id)),ie=await es(e.id).catch(()=>({...ie,[t]:n})),f(i),b(),ye(),u("#activity").hidden||oe(!0)}catch(o){m(o),ye()}}B.addEventListener("click",t=>{const n=t.target,i=n.closest("[data-add-person]");if(i)return ye(i.dataset.addPerson);const o=n.closest("[data-rm-person]");if(o){const[r,L]=o.dataset.rmPerson.split(":"),S=ie[r].find(I=>I.id===L);Fe(r,ie[r].filter(I=>I.id!==L),`${(S==null?void 0:S.name)??"Person"} entfernt.`)}}),es(e.id).then(t=>{ie=t,ye()}).catch(t=>B.innerHTML=`<div class="error">${l(D(t))}</div>`);const $=u("#activity");let g=1;const E={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},H={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},P=t=>{const n=t.replace(/^niki\.field\./i,"").replace(/[_\s]/g,i=>i==="_"?"":" ").toLowerCase();return E[n]??E[n.replace(/\s/g,"")]??t.replace(/^niki\.field\./i,"")},V=t=>H[t.replace(/[\s_]/g,"").toLowerCase()]??t;async function oe(t=!1){var n;t&&(g=1),g===1&&($.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const i=await cn(e.id,g),o=i.logs.map(r=>`
          <div class="log">
            <div class="log-head"><strong>${l(r.user)}</strong> · ${l(P(r.field))}${r.at?`<span class="hint"> · ${ut(r.at)}</span>`:""}</div>
            <div class="log-change">
              ${r.from?`<span class="log-from">${l(V(r.from))}</span> → `:""}<span class="log-to">${l(V(r.to)||"–")}</span>
            </div>
          </div>`).join("");g===1?$.innerHTML=o||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((n=$.querySelector(".more-activity"))==null||n.remove(),$.insertAdjacentHTML("beforeend",o)),i.hasMore&&$.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),g++}catch(i){$.innerHTML=`<div class="error">${l(D(i))}</div>`}}$.addEventListener("click",t=>{t.target.closest(".more-activity")&&oe()}),s.querySelector(".tabs").addEventListener("click",t=>{const n=t.target.closest(".tab");if(!n)return;const i=n.dataset.tab;s.querySelectorAll(".tab").forEach(o=>{const r=o===n;o.classList.toggle("active",r),o.setAttribute("aria-selected",String(r))});for(const o of["comments","checklist","subtasks","files","activity"]){const r=s.querySelector(`#${o}`);r&&(r.hidden=o!==i)}u("#composer").hidden=i!=="comments",i==="activity"&&oe(!0),i==="checklist"&&Xe(),i==="subtasks"&&tt(),i==="files"&&Ke()});const j=u("#checklist");let x=[],_=null;function Ue(){const t=x.filter(n=>n.done).length;u("#cl-count").textContent=x.length?`${t}/${x.length}`:""}function te(){var i;const t=x.filter(o=>o.done).length,n=x.length?Math.round(t/x.length*100):0;j.innerHTML=`
      ${x.length?`<div class="progress"><div class="progress-bar" style="width:${n}%"></div></div>
        <div class="hint">${t} von ${x.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${x.map((o,r)=>_===o.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${l(o.id)}" value="${l(o.item)}" aria-label="Punkt umbenennen">
                  <button type="button" class="small primary" data-cl="save" data-id="${l(o.id)}">Speichern</button>
                  <button type="button" class="small" data-cl="cancel">Abbrechen</button></li>`:`<li class="cl-item${o.done?" done":""}">
                  <label class="cl-check"><input type="checkbox" data-cl="toggle" data-id="${l(o.id)}"${o.done?" checked":""}><span class="cl-text" data-cl="edit" data-id="${l(o.id)}">${l(o.item)}</span></label>
                  <span class="cl-tools">
                    <button type="button" class="icon-btn sm" data-cl="up" data-i="${r}" title="Nach oben" aria-label="Nach oben"${r===0?" disabled":""}>▲</button>
                    <button type="button" class="icon-btn sm" data-cl="down" data-i="${r}" title="Nach unten" aria-label="Nach unten"${r===x.length-1?" disabled":""}>▼</button>
                    <button type="button" class="icon-btn sm" data-cl="edit" data-id="${l(o.id)}" title="Umbenennen" aria-label="Umbenennen">✎</button>
                    <button type="button" class="icon-btn sm" data-cl="del" data-id="${l(o.id)}" title="Löschen" aria-label="Löschen">×</button>
                  </span></li>`).join("")||'<li class="hint empty-thread">Noch keine Punkte.</li>'}
      </ul>
      <form class="cl-add" id="cl-add">
        <input id="cl-new" placeholder="Neuer Punkt … (Enter fügt hinzu)" aria-label="Neuer Checklisten-Punkt">
        <button class="primary small" type="submit">＋</button>
      </form>`,Ue(),(i=j.querySelector(".cl-edit"))==null||i.focus()}async function Xe(){try{x=await ot(e.id),te()}catch(t){j.innerHTML=`<div class="error">${l(D(t))}</div>`}}async function be(t,n=!0){try{await t(),n&&(x=await ot(e.id)),b()}catch(i){m(i)}te()}j.addEventListener("click",t=>{const n=t.target.closest("[data-cl]");if(!n)return;const i=n.dataset.cl,o=x.find(r=>r.id===n.dataset.id);if(i==="toggle"&&o)o.done=n.checked,te(),be(()=>un(o.id,o.done),!1);else if(i==="edit"&&o&&(n.tagName==="BUTTON"||t.detail===2))t.preventDefault(),_=o.id,te();else if(i==="cancel")_=null,te();else if(i==="save"&&o){const r=j.querySelector(".cl-edit").value.trim();_=null,r&&r!==o.item?be(()=>pn(e.id,o,r,x.indexOf(o))):te()}else if(i==="del"&&o)be(()=>mn(o.id));else if(i==="up"||i==="down"){const r=Number(n.dataset.i),L=i==="up"?r-1:r+1;if(L<0||L>=x.length)return;[x[r],x[L]]=[x[L],x[r]],te(),be(()=>hn(e.id,x.map(S=>S.id)))}}),j.addEventListener("dblclick",t=>{const n=t.target.closest(".cl-text");n&&(t.preventDefault(),_=n.dataset.id??null,te())}),j.addEventListener("keydown",t=>{var i;t.target.classList.contains("cl-edit")&&(t.key==="Enter"?(t.preventDefault(),(i=j.querySelector('[data-cl="save"]'))==null||i.click()):t.key==="Escape"&&(_=null,te()))}),j.addEventListener("submit",t=>{t.preventDefault();const n=j.querySelector("#cl-new"),i=n.value.trim();if(!i)return n.focus();be(()=>bn(e.id,i,x.length)).then(()=>{var o;return(o=j.querySelector("#cl-new"))==null?void 0:o.focus()})}),ot(e.id).then(t=>{x=t,Ue()}).catch(()=>{});const K=s.querySelector("#subtasks");let re=[],w=!1,qe=null;function Vt(){const t=s.querySelector("#sub-count");if(!t)return;const n=re.filter(i=>i.phase==="done"||/^erledigt$/i.test(i.status??"")).length;t.textContent=re.length?`${n}/${re.length}`:""}function et(){if(K&&(K.innerHTML=`
      <div class="sub-list">
        ${re.map(t=>{const n=Ne(t.due),i=t.phase==="done"||/^erledigt$/i.test(t.status??"");return`
            <div class="sub-item${i?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${l(t.id)}" title="${i?"Erledigt":t.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${i||t.phase==="pending"?" disabled":""}>${i?"✓":t.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${l(t.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${l(t.title)}</span>
                <span class="task-meta"><span class="num">#${t.number}</span>
                  <span class="badge due-${n.level}">${l(n.text)}</span>
                  ${t.status?`<span class="badge ${Be(t.status)}">${l(t.status)}</span>`:""}
                  ${t.responsible?`<span class="who">${l(t.responsible)}</span>`:""}</span>
              </button>
              ${qe===t.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${l(t.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${l(t.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${w?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${Ze(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,Vt(),w)){const t=dt(K.querySelector("#sub-assignee"));Promise.all([rt(),Je()]).then(([n,i])=>t.setUsers(n,i.id)).catch(m),K.querySelector("#sub-name").focus(),K.querySelector("#sub-form").addEventListener("submit",async n=>{n.preventDefault();const i=t.selected();if(!i)return t.focus();const o=K.querySelector("#sub-form button[type=submit]");o.disabled=!0;try{const r=await dn(e.id,{name:K.querySelector("#sub-name").value.trim(),dueAt:K.querySelector("#sub-due").value,assigneeId:i.id});w=!1,f(`Unteraufgabe #${r.number} angelegt.`),b(),await tt()}catch(r){m(r),o.disabled=!1}})}}async function tt(){if(K)try{re=await ts(e.id),et()}catch(t){K.innerHTML=`<div class="error">${l(D(t))}</div>`}}K==null||K.addEventListener("click",async t=>{const n=t.target.closest("[data-sub]");if(!n)return;const i=n.dataset.sub,o=re.find(r=>r.id===n.dataset.id);if(i==="form-open"||i==="form-cancel")w=i==="form-open",et();else if(i==="open"&&o)await Ct(s,o,()=>void Ct(s,e,a,void 0,p),void 0,p,e);else if(i==="finish"&&o){n.setAttribute("disabled","");try{await Xt(o.id);const r=await ss(o.id);if(r.phase==="done"){const S=(await Et()).find(I=>/^erledigt$/i.test(I.name));S&&await Lt(o.id,S.id).catch(()=>{})}f(r.phase==="pending"?`#${o.number} abgeschlossen – wartet auf Bestätigung.`:`#${o.number} erledigt.`),b()}catch(r){m(r)}await tt()}else if(i==="unlink"&&o)qe=o.id,et();else if(i==="unlink-no")qe=null,et();else if(i==="unlink-ok"&&o){qe=null;try{await tn(o.id,e.id),f(`#${o.number} ist jetzt eine eigenständige Aufgabe.`),b()}catch(r){m(r)}await tt()}}),K&&ts(e.id).then(t=>{re=t,Vt()}).catch(()=>{}),(Zt=s.querySelector("#to-parent"))==null||Zt.addEventListener("click",a);const me=u("#files");let we=[],$t=0,he=[];const Ws=(t,n)=>n?"🖼️":t==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(t)?"📘":/^(xlsx?|csv|ods)$/.test(t)?"📗":/^(pptx?|odp)$/.test(t)?"📙":/^(zip|rar|7z|gz|tar)$/.test(t)?"🗜️":/^(eml|msg)$/.test(t)?"✉️":/^(txt|log|xml|json)$/.test(t)?"📄":"📎";function Wt(){u("#files-count").textContent=we.length?`(${we.length})`:""}function st(){me.innerHTML=`
      <div class="files-tools">
        ${he.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${he.map((t,n)=>`<span class="file-chip">📎 <span class="ellipsis">${l(t.name)}</span> <span class="hint">${ct(t.size)}</span><button type="button" data-rm-up="${n}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${we.map(t=>`
          <button type="button" class="file-row" data-file="${l(t.id)}" title="${l(t.name)} öffnen">
            ${t.isImage&&t.thumb?`<img class="file-thumb" src="${l(t.thumb)}" alt="">`:`<span class="file-icon">${Ws(t.ext,t.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${l(t.name)}</span>
              <span class="file-meta">${[t.size?ct(t.size):"",t.uploadedBy?`von ${l(t.uploadedBy)}`:"",t.uploadedAt?ut(t.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${t.commentText?`<span class="file-comment">„${l(t.commentText)}${t.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Wt()}async function Ke(){try{we=await qt(e.id),$t=Date.now(),st()}catch(t){me.innerHTML=`<div class="error">${l(D(t))}</div>`}}async function Rs(t){if(Date.now()-$t>20*6e4&&(await Ke(),t=we.find(n=>n.id===t.id&&n.name===t.name)??t),!t.url)return m(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));St(t.url)}me.addEventListener("click",t=>{const n=t.target,i=n.closest("[data-file]");if(i){const r=we.find(L=>L.id===i.dataset.file);r&&Rs(r);return}const o=n.closest("[data-rm-up]");o?(he.splice(Number(o.dataset.rmUp),1),st()):n.closest("#upload-cancel")&&(he=[],st())}),me.addEventListener("change",t=>{var i;const n=t.target;n.id==="upload-input"&&(he=Array.from(n.files??[]),st(),(i=me.querySelector("#upload-note"))==null||i.focus())}),me.addEventListener("submit",async t=>{t.preventDefault();const n=me.querySelector("#upload-form button[type=submit]"),i=me.querySelector("#upload-msg"),o=me.querySelector("#upload-note").value.trim();n.disabled=!0;try{const r=he.length;await xt(e.messageId,{note:o||`${r===1?"Datei":`${r} Dateien`} hochgeladen: ${he.map(L=>L.name).join(", ")}`,files:he},L=>i.innerHTML=`<p class="hint">${l(L)}</p>`),he=[],f(`${r===1?"Datei":`${r} Dateien`} hochgeladen.`),b(),await Ke()}catch(r){i.innerHTML=`<div class="error">${l(D(r))}</div>`,n.disabled=!1}}),qt(e.id).then(t=>{we=t,$t=Date.now(),Wt()}).catch(()=>{});const ke=u("#title-box");function ce(t=!1){var i;const n=k?k.includes("edit")&&e.phase==="open":ns(e,h);if(t){ke.innerHTML=`
        <form class="title-edit" id="title-form">
          <input id="title-input" maxlength="255" value="${l(e.title)}" aria-label="Titel der Aufgabe">
          <div class="row-btns"><button class="primary small" type="submit">Speichern</button><button class="small" type="button" id="title-cancel">Abbrechen</button></div>
        </form>`;const o=ke.querySelector("#title-input");o.focus(),o.select(),ke.querySelector("#title-cancel").addEventListener("click",()=>ce()),o.addEventListener("keydown",r=>{r.key==="Escape"&&ce()}),ke.querySelector("#title-form").addEventListener("submit",async r=>{r.preventDefault();const L=o.value.trim();if(!L)return o.focus();if(L===e.title)return ce();const S=ke.querySelector("button[type=submit]");S.disabled=!0;try{await sn(e.id,L),e.title=L,e.raw.TaskName=L,f("Titel geändert."),b(),ce()}catch(I){S.disabled=!1,m(I)}});return}ke.innerHTML=`<h2 class="task-title">${l(e.title)}${n?' <button type="button" class="icon-btn sm title-edit-btn" id="title-edit" title="Titel ändern" aria-label="Titel ändern">✎</button>':""}</h2>`,(i=ke.querySelector("#title-edit"))==null||i.addEventListener("click",()=>ce(!0))}ce();function nt(){var I;const t=Ne(e.due),n=(I=Qt.find(W=>W.value===(e.priority??"").toLowerCase()))==null?void 0:I.label;u("#sum-tiles").innerHTML=[e.status?`<span class="badge ${Be(e.status)}">${l(e.status)}</span>`:"",e.phase==="pending"?'<span class="badge pending">⏳ wartet auf Bestätigung</span>':e.phase==="done"?'<span class="badge ok">✓ erledigt</span>':"",e.due?`<span class="badge due-${t.level}">${t.level==="overdue"?"⚠ ":""}fällig ${e.due.toLocaleDateString("de-DE")} · ${l(t.text)}</span>`:"",n?`<span>Priorität <strong>${l(n)}</strong></span>`:"",e.responsible?`<span>👤 ${l(e.responsible)}</span>`:""].filter(Boolean).join("")+`<span class="sum-acts">${[...A.querySelectorAll("button[data-act]")].map(W=>`<button type="button" class="small${W.classList.contains("primary")?" primary":""}" data-sum-act="${l(W.dataset.act)}" title="${l(W.title)}"${W.disabled?" disabled":""}>${l(W.textContent.trim())}</button>`).join("")}</span>`;const i=B.querySelectorAll(".people-row"),o=W=>{var ge;return((ge=i[W])==null?void 0:ge.querySelectorAll(".person-chip").length)??0},r=o(0),L=o(1),S=!!lt(e.description??"").trim();u("#sum-info").innerHTML=`
      <span>👥 ${i.length?r+L?`${r} ${r===1?"Admin":"Admins"}, ${L} Teilnehmer`:"niemand beteiligt":"Beteiligte"}</span>
      <span>📝 ${S?l(lt(e.description).slice(0,80))+(lt(e.description).length>80?" …":""):"keine Beschreibung"}</span>`}let Rt;const _s=new MutationObserver(()=>{clearTimeout(Rt),Rt=window.setTimeout(nt,50)});for(const t of["#fold-tiles .tiles","#people","#desc"])_s.observe(u(t),{subtree:!0,childList:!0,attributes:!0,characterData:!0});u("#prio").addEventListener("change",()=>setTimeout(nt,1500)),u("#sum-tiles").addEventListener("click",t=>{var i;const n=t.target.closest("[data-sum-act]");n&&(t.preventDefault(),t.stopPropagation(),(i=A.querySelector(`button[data-act="${n.dataset.sumAct}"]`))==null||i.click())}),u("#status").addEventListener("change",()=>setTimeout(nt,1500));const Ie=u("#desc");function fe(t=!1){var o;const n=k?k.includes("edit")&&e.phase==="open":ns(e,h);if(t){Ie.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${l(lt(e.description))}</textarea>
        ${nn(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const r=Ie.querySelector("#desc-input");r.focus(),Ie.querySelector("#desc-cancel").addEventListener("click",()=>fe()),Ie.querySelector("#desc-save").addEventListener("click",async()=>{const L=r.value.trim()?It(r.value):"";try{await ws(e.id,L),e.description=L,e.raw.TaskDescription=L,f("Beschreibung gespeichert."),b(),fe()}catch(S){m(S)}});return}const i=e.description.trim()?`<div class="desc-body">${ks(e.description)}</div>`:`<div class="hint">${n?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;Ie.innerHTML=`${i}${n?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(o=Ie.querySelector("#desc-edit"))==null||o.addEventListener("click",()=>fe(!0)),nt()}fe();const Se=u("#comments");let C=null;function xe(){const t=s.querySelector("#composer"),n=s.querySelector(".tab-panel");if(!t||!n)return;t.parentElement!==n&&n.insertBefore(t,s.querySelector("#comments")),t.classList.remove("is-reply");const i=t.querySelector(".composer-head");i&&(i.innerHTML="✍ Neuer Kommentar")}function _t(){const t=s.querySelector("#composer"),n=C&&s.querySelector(`#comments [data-slot="${CSS.escape(C.id)}"]`);if(!t||!n||!C)return C=null,xe();n.appendChild(t),t.classList.add("is-reply");const i=t.querySelector(".composer-head");i&&(i.innerHTML=`↩ Antwort an <strong>${l(C.name)}</strong> <button type="button" class="link small" id="reply-cancel" title="Doch als neuen Kommentar schreiben">✕ abbrechen</button>`)}async function Le(t=!1){var n;try{const i=[];for(let S=1;S<=10;S++){const I=await an(e.messageId,S,50);if(i.push(...I.comments),!I.hasMore)break}const o=Zn()==="newest";i.sort((S,I)=>{var W,ge;return((((W=S.createdAt)==null?void 0:W.getTime())??0)-(((ge=I.createdAt)==null?void 0:ge.getTime())??0))*(o?-1:1)});const r=i.filter(S=>{var I;return!((I=S.raw)!=null&&I.type)||S.raw.type==="text"}).length;u("#count").textContent=r?`(${r})`:"";const L=`<div class="thread-tools">
          <span class="thread-title">Verlauf${r?` · ${r} ${r===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${o?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;xe(),Se.innerHTML=i.length?L+Qn(i).map(S=>Array.isArray(S)?Xn(S):Ot(S)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(n=Se.querySelector("#order-toggle"))==null||n.addEventListener("click",()=>{Jn(o?"oldest":"newest"),Le()}),Se.querySelectorAll(".bubble > .body").forEach(S=>{if(S.scrollHeight<=320)return;S.classList.add("clamped");const I=document.createElement("button");I.type="button",I.className="link small more",I.textContent="Mehr anzeigen ▾",I.addEventListener("click",()=>{const W=S.classList.toggle("clamped");I.textContent=W?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),S.after(I)}),C&&_t(),t&&(o?Se.scrollIntoView({block:"start"}):(Se.lastElementChild??Se).scrollIntoView({block:"end"}))}catch(i){Se.innerHTML=`<div class="error">${l(D(i))}</div>`}}const at=u("#composer"),de=u("#comment"),yt=u("#file-input");u("#outlook-btn").addEventListener("click",()=>Ts({task:e,parentId:C==null?void 0:C.id,parentName:C==null?void 0:C.name,onClose:t=>{t&&(C=null,xe(),b(),Le(!0),Ke())}})),u("#chat-btn").addEventListener("click",()=>Ls({task:e,parentId:C==null?void 0:C.id,parentName:C==null?void 0:C.name,onClose:t=>{t&&(C=null,xe(),b(),Le(!0),Ke())}}));const Gt=u("#file-chips"),Ce=u("#comment-msg"),wt=u("#mail-btn"),Z=u("#mail-menu");let Ae=[],z=null;const it=(t,n,i,o,r="")=>`<span class="file-chip ${r}">${t} <span class="ellipsis">${l(n)}</span>${i?` <span class="hint">${ct(i)}</span>`:""}<button type="button" data-rm="${o}" aria-label="Entfernen">×</button></span>`;function Ve(){const t=z;Gt.innerHTML=[...t!=null&&t.text?[it("📧",`Mailtext: ${t.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...t!=null&&t.eml?[it("📄",t.eml.name,t.eml.blob.size,"mail-eml","mail")]:[],...((t==null?void 0:t.atts)??[]).map((n,i)=>it("📎",n.name,n.size,`mail-att:${i}`)),...Ae.map((n,i)=>it("📎",n.name,n.size,`file:${i}`))].join("")}const Gs=t=>((!z||z.mail.key!==t.key)&&(z={mail:t,text:!1,atts:[]}),z);function kt(){const t=ze();wt.hidden=!t||Cs(t.key).includes(e.number),t||(Z.hidden=!0),z&&(!t||t.key!==z.mail.key)&&(z=null,Ve())}function Yt(){var L;const t=ze();if(!t)return;const n=(z==null?void 0:z.mail.key)===t.key?z:null,i=t.attachments.filter(S=>!S.isInline),o=Tn(),r=(S,I,W,ge,Ys=!1,Jt="")=>`<button type="button" role="menuitem" data-act="${S}"${Ys||ge?" disabled":""}${Jt?` title="${l(Jt)}"`:""}>
        <span>${I}</span><span class="grow">${l(W)}</span>${ge?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;Z.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${l(t.subject||"(ohne Betreff)")}</div>
      ${r("text","📧","Mailtext als Inhalt einfügen",!!(n!=null&&n.text))}
      ${r("eml","📄","Mail als Datei anhängen (.eml)",!!(n!=null&&n.eml),!o,o?"":"In dieser Outlook-Version nicht verfügbar")}
      ${r("atts","📎",`Anhänge der Mail übernehmen (${i.length})`,!!n&&i.length>0&&i.every(S=>n.atts.includes(S)),i.length===0,i.length?"":"Die Mail hat keine Anhänge")}`,Z.hidden=!1,(L=Z.querySelector("button:not([disabled])"))==null||L.focus()}wt.addEventListener("click",t=>{t.stopPropagation(),Z.hidden?Yt():Z.hidden=!0}),document.addEventListener("click",t=>{!Z.hidden&&!Z.contains(t.target)&&(Z.hidden=!0)}),Z.addEventListener("keydown",t=>{t.key==="Escape"&&(Z.hidden=!0,wt.focus())}),Z.addEventListener("click",async t=>{const n=t.target.closest("button[data-act]"),i=ze();if(!n||!i)return;t.stopPropagation();const o=Gs(i);if(n.dataset.act==="text")o.text=!0;else if(n.dataset.act==="atts")o.atts=i.attachments.filter(r=>!r.isInline);else if(n.dataset.act==="eml"){n.disabled=!0,n.querySelector(".grow").textContent="Mail wird geladen …";try{o.eml=await Ln(i)}catch(r){Ce.innerHTML=`<div class="error">${l(D(r))}</div>`}}Z.hidden=!0,Ve(),de.focus()}),yt.addEventListener("change",()=>{Ae=[...Ae,...Array.from(yt.files??[])],yt.value="",Ve()}),Gt.addEventListener("click",t=>{var r;const n=(r=t.target.closest("[data-rm]"))==null?void 0:r.dataset.rm;if(!n)return;const[i,o]=n.split(":");i==="file"?Ae.splice(Number(o),1):z&&(i==="mail-text"?z.text=!1:i==="mail-eml"?z.eml=void 0:i==="mail-att"&&z.atts.splice(Number(o),1),!z.text&&!z.eml&&!z.atts.length&&(z=null)),Ve()}),de.addEventListener("input",()=>{de.style.height="auto",de.style.height=`${Math.min(Math.max(de.scrollHeight,72),260)}px`}),de.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&at.requestSubmit()}),at.addEventListener("submit",async t=>{t.preventDefault();const n=de.value,i=z;if(!n.trim()&&!Ae.length&&!i)return de.focus();const o=at.querySelector("button[type=submit]");o.disabled=!0,Ce.innerHTML="";try{const r=await xt(e.messageId,{note:n,mailText:i!=null&&i.text?i.mail:void 0,eml:i==null?void 0:i.eml,mailAttachments:i==null?void 0:i.atts,files:Ae,parentId:C==null?void 0:C.id},I=>Ce.innerHTML=`<p class="hint">${l(I)}</p>`);i&&(xs(i.mail.key,e.number),jt(i.mail.conversationId,e)),de.value="",de.style.height="auto",Ae=[],z=null,Ve(),kt();const L=An(r,!!i),S=C?i?L.replace(/^Mail/,"Antwort mit Mail"):L.replace(/^Kommentar/,"Antwort"):L;Ce.innerHTML=`<div class="ok">${l(S)}</div>`,C=null,xe(),setTimeout(()=>Ce.innerHTML="",6e3),b(),await Le(!0)}catch(r){Ce.innerHTML=`<div class="error">${l(D(r))}</div>`}finally{o.disabled=!1}}),kt(),pt=kt,_e=()=>{at.scrollIntoView({block:"end"}),Yt()},await Le(),e.unread>0&&ln(e.messageId).then(()=>{e.unread=0,b()}).catch(()=>{})}let De=[];const us=s=>({taskId:s.id,messageId:s.messageId,number:s.number,title:s.title});function Tt(s,e,a=""){const c=Ne(s.due);return`
    <button type="button" class="task-row card due-${c.level}${e?" is-selected":""}" data-pick="${l(s.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${l(s.title)}</span>
        <span class="task-meta">
          <span class="num">#${s.number}</span>
          <span class="badge due-${c.level}">${l(c.text)}</span>
          ${s.status?`<span class="badge ${Be(s.status)}">${l(s.status)}</span>`:""}
          ${a?`<span class="badge suggest">${l(a)}</span>`:""}
        </span>
      </span>
    </button>`}async function ea(s){const e=document.createElement("div");if(s.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!Mn()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{De=(await je()).filter(b=>!pe(b))}catch(b){e.innerHTML=`<div class="pad"><div class="error">${l(D(b))}</div></div>`;return}let a=await En()??{tasks:[],withAttachments:!0};const c=Ss(De,await In(),qn());let p=!1;!a.tasks.length&&c.length&&!await xn()&&(a={...a,tasks:[us(c[0].task)]},await as(a).catch(()=>{}),is({chosen:a.tasks}),p=!0);let d="";const h=new Map,u=new Set,M=()=>{for(const b of a.tasks)u.has(b.taskId)||(u.add(b.taskId),ys(b.messageId).then(v=>h.set(b.taskId,v)).catch(()=>{}).finally(()=>f()))},y=b=>a.tasks.some(v=>v.taskId===b),f=()=>{M();const b=d.trim().toLowerCase(),v=b?De.filter(k=>k.title.toLowerCase().includes(b)||String(k.number).includes(b.replace(/^#/,""))).slice(0,40):De.filter(k=>!c.some(R=>R.task.id===k.id)&&!y(k.id)).slice(0,40),A=a.tasks.map(k=>De.find(R=>R.id===k.taskId)??null),O=c.filter(k=>!y(k.task.id)),N=a.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${N?`<div class="compose-choice">
              <div class="hint">${p?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${N} ${N===1?"Aufgabe":"Aufgaben"}:</div>
              ${A.map((k,R)=>{const U=a.tasks[R],se=h.get(U.taskId);return`${k?Tt(k,!0):`<div class="card pad">#${U.number} ${l(U.title)}</div>`}
                    <label class="reply-target">Posten als <select data-parent-for="${l(U.taskId)}">
                      <option value="">neuer Kommentar</option>
                      ${(se??[]).map(ne=>`<option value="${l(ne.id)}"${ne.id===U.parentId?" selected":""}>↩ Antwort auf ${l(ne.label)}</option>`).join("")}
                    </select>${se?"":' <span class="hint">lädt …</span>'}</label>`}).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${N===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${a.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${O.length?`<h3 class="compose-sub">Vorschläge</h3>${O.map(k=>Tt(k.task,!1,k.why)).join("")}`:""}
        <h3 class="compose-sub">${N?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${l(d)}">
        <div class="compose-list">${v.map(k=>Tt(k,y(k.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${Dn()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},m=async b=>{try{await as(b),a=b,p=!1,is({chosen:b.tasks}),f()}catch(v){const A=e.querySelector("#compose-msg");A&&(A.innerHTML=`<div class="error">${l(D(v))}</div>`)}};e.addEventListener("click",b=>{const v=b.target,A=v.closest("[data-pick]");if(A){const O=A.dataset.pick,N=De.find(k=>k.id===O);if(!N)return;m({...a,tasks:y(O)?a.tasks.filter(k=>k.taskId!==O):[...a.tasks,us(N)]})}else v.closest("#clear-choice")&&m({...a,tasks:[]})}),e.addEventListener("change",b=>{const v=b.target;v.id==="with-att"&&m({...a,withAttachments:v.checked}),v.dataset.parentFor&&m({...a,tasks:a.tasks.map(A=>A.taskId===v.dataset.parentFor?{...A,parentId:v.value||void 0}:A)}),v.id==="auto-suggest"&&Cn(v.checked)}),e.addEventListener("input",b=>{const v=b.target;if(v.id!=="search")return;d=v.value;const A=v.selectionStart;f();const O=e.querySelector("#search");O.focus(),O.setSelectionRange(A,A)}),f()}const ta=s=>s.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function sa(s,e,a,c){const p=new Date(Date.now()+6048e5);s.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${l(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${l(e?ta(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${Ze(p)}" min="${Ze(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${Hn(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const d=m=>s.querySelector(m),h=d("#f-new"),u=s.querySelector("#with-mail"),M=d("#new-msg"),y=m=>M.innerHTML=m;d("#cancel").addEventListener("click",c),u==null||u.addEventListener("change",()=>d("#atts").hidden=!u.checked);const f=dt(d("#assignee"));Promise.all([rt(),Je()]).then(([m,b])=>f.setUsers(m,b.id)).catch(m=>y(`<div class="error">Personenliste: ${l(D(m))}</div>`)),d("#name").focus(),h.addEventListener("submit",async m=>{m.preventDefault();const b=f.selected();if(!b){y('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),f.focus();return}const v=h.querySelector("button[type=submit]");v.disabled=!0;try{y('<p class="hint">Aufgabe wird angelegt …</p>');const A=await vs({name:d("#name").value.trim(),dueAt:d("#due").value,assigneeId:b.id}),O=d("#desc").value;let N=`Aufgabe #${A.number||""} angelegt.`;if(O.trim())try{await ws(A.id,It(O))}catch{await fn(A.messageId,It(O)).catch(()=>{})}try{if(e&&(u!=null&&u.checked)){const k=Nn(d("#atts"),e),R=await Bn(A.messageId,e,k,"",U=>y(`<p class="hint">${l(U)}</p>`));N+=" "+zn(k.length,R.shortened),xs(e.key,A.number),jt(e.conversationId,{id:A.id,number:A.number,title:d("#name").value.trim()})}}catch(k){N+=` Hinweis: ${D(k)}`}a(A,N)}catch(A){y(`<div class="error">${l(D(A))}</div>`),v.disabled=!1}})}As();const T=document.getElementById("app"),Ft=document.getElementById("logout-link");function na(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function gt(s){ba(),Ft.hidden=!0;const e=$n()??na();T.innerHTML=`
    <form id="f-email" class="form pad">
      <p>Melden Sie sich einmalig an. Danach bleibt das Add-in angemeldet.</p>
      ${s?`<div class="error">${l(s)}</div>`:""}
      <label>E-Mail-Adresse<input id="email" type="email" required autocomplete="email" value="${l(e)}"></label>
      <button class="primary block" type="submit">Code per E-Mail anfordern</button>
    </form>
    <form id="f-code" class="form pad" hidden>
      <p>Wir haben einen Code an <strong id="sent-to"></strong> gesendet.</p>
      <label>Code<input id="code" inputmode="numeric" autocomplete="one-time-code" required></label>
      <button class="primary block" type="submit">Anmelden</button>
      <button type="button" class="link" id="back">Andere E-Mail-Adresse</button>
      <div id="code-error"></div>
    </form>`;const a=T.querySelector("#f-email"),c=T.querySelector("#f-code"),p=T.querySelector("#email"),d=T.querySelector("#code"),h=T.querySelector("#code-error");a.addEventListener("submit",async u=>{u.preventDefault();const M=a.querySelector("button");M.disabled=!0;try{await yn(p.value.trim()),T.querySelector("#sent-to").textContent=p.value.trim(),a.hidden=!0,c.hidden=!1,d.focus()}catch(y){gt(D(y))}finally{M.disabled=!1}}),c.addEventListener("submit",async u=>{u.preventDefault();const M=c.querySelector("button.primary");M.disabled=!0,h.innerHTML="";try{await wn(p.value.trim(),d.value.trim()),await $e(),await Ks()}catch(y){h.innerHTML=`<div class="error">${l(D(y))}</div>`}finally{M.disabled=!1}}),T.querySelector("#back").addEventListener("click",()=>{c.hidden=!0,a.hidden=!1})}const Hs="mm-addin-filters",mt=(s="")=>({time:"all",owner:"all",unread:!1,status:"",q:s});function aa(){try{return{...mt(),...JSON.parse(localStorage.getItem(Hs)??"{}"),q:""}}catch{return mt()}}function ps(s){try{localStorage.setItem(Hs,JSON.stringify({...s,q:""}))}catch{}}let F=[],Ge=null,Dt=[],Ht=[];const Qe=s=>/erledigt/i.test(s.status),Ut=()=>Qe(q)?Ge??[]:F;async function ms(){if(Ge)return;const s=T.querySelector("#list");s&&(s.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await je("status_id=7"),a=new Set;Ge=[...e,...Dt].filter(c=>!a.has(c.id)&&a.add(c.id))}catch(e){Ge=[...Dt],s&&(s.innerHTML=`<div class="error">${l(D(e))}</div>`)}}let J,q=aa(),ve=!1,ht=!1;function Mt(){const s=new Date;return s.setHours(0,0,0,0),s}const Ye={overdue:s=>!pe(s)&&!!s.due&&s.due<Mt(),week:s=>!pe(s)&&!!s.due&&s.due>=Mt()&&s.due<new Date(Mt().getTime()+7*864e5),assigned:s=>(J==null?void 0:J.userId)!=null&&s.responsibleUserId===J.userId,created:s=>(J==null?void 0:J.userId)!=null&&s.creatorUserId===J.userId,unread:s=>s.unread>0};function Nt(s,e){const a=e.q.trim().toLowerCase();return s.filter(c=>(e.time==="all"||Ye[e.time](c))&&(e.owner==="all"||Ye[e.owner](c))&&(!e.unread||Ye.unread(c))&&(!e.status||Qe(e)||c.status===e.status)&&(!a||c.title.toLowerCase().includes(a)||String(c.number).includes(a)))}const Ns=s=>s.time!=="all"||s.owner!=="all"||s.unread||!!s.status,Bs=new Map,zs=new Map;async function ia(s){const e=[...s],a=async()=>{for(let c=e.shift();c;c=e.shift())try{const[p,d]=await Promise.all([ot(c.id),qt(c.id).catch(()=>[])]);Bs.set(c.id,{done:p.filter(h=>h.done).length,total:p.length}),zs.set(c.id,d.length)}catch{}};if(await Promise.all([a(),a(),a(),a()]),T.querySelector("#list")){const c=window.scrollY;ue(),window.scrollTo(0,c)}}function la(s){const e=pe(s),a=e?{text:s.due?`✓ fällig war ${s.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:Ne(s.due),c=(J==null?void 0:J.userId)!=null&&s.responsibleUserId===J.userId,p=Bs.get(s.id),d=kn(s),h=zs.get(s.id),u=[`<span class="num" title="Aufgabennummer">#${s.number}</span>`,p&&p.total?`<span class="${p.done===p.total?"complete":""}" title="Checkliste: ${p.done} von ${p.total} erledigt">☑ ${p.done}/${p.total}</span>`:"",d.total?`<span class="${d.done===d.total?"complete":""}" title="Unteraufgaben: ${d.done} von ${d.total} erledigt">🧩 ${d.done}/${d.total}</span>`:"",h?`<span title="${h} Dateien">📎 ${h}</span>`:"",`<span title="${s.comments} Kommentare">💬 ${s.comments}</span>`].filter(Boolean).join("");return`
    <button class="task-row card due-${a.level}${e?" is-done":""}${zt.has(s.id)?" fresh":""}" data-id="${l(s.id)}">
      <span class="task-main">
        <span class="task-name">${l(s.title)}</span>
        <span class="task-meta">
          <span class="badge due-${a.level}">${l(a.text)}</span>
          ${s.status?`<span class="badge ${Be(s.status)}">${l(s.status)}</span>`:""}
          ${s.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${l(s.creator??"den Ersteller")}">⏳ Bestätigung</span>`:""}
        </span>
      </span>
      <span class="task-side">
        ${s.unread?`<span class="unread-dot" title="${s.unread} ungelesene Nachrichten">${s.unread}</span>`:""}
        <span class="side-info">${u}</span>
      </span>
      ${s.responsible&&!c?s.responsiblePicture?`<img class="avatar who-avatar" src="${l(s.responsiblePicture)}" alt="${l(s.responsible)}" title="Verantwortlich: ${l(s.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${l(s.responsible)}">${l(ft(s.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function oa(s){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const c of s)c.due?Ye.overdue(c)?e.Überfällig.push(c):Ye.week(c)?e["Nächste 7 Tage"].push(c):e.Später.push(c):e["Ohne Fälligkeit"].push(c);const a=(c,p)=>{var d,h;return(((d=c.due)==null?void 0:d.getTime())??0)-(((h=p.due)==null?void 0:h.getTime())??0)};return Object.entries(e).filter(([,c])=>c.length).map(([c,p])=>[c,p.sort(a)])}function He(s,e,a,c,p=""){return`<button class="chip ${p}${e?" active":""}" ${c} aria-pressed="${e}">${l(s)} <span class="count">${a}</span></button>`}function ra(){const s=T.querySelector("#filters");if(!s)return;const e=p=>Nt(Ut(),{...q,...p}).length,a=F.map(p=>p.status).filter(Boolean),c=[...new Set([...Ht,...a,...q.status?[q.status]:[]])];s.innerHTML=`
    ${He("Alle",!Ns(q),Nt(F,mt(q.q)).length,'data-all="1"')}
    ${He("⚠ Überfällig",q.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${He("Diese Woche",q.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${He("👤 Mir",q.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned" title="Mir zugewiesen"')}
    ${He("✎ Von mir",q.owner==="created",e({owner:"created"}),'data-owner="created" title="Von mir erstellt"')}
    ${He("● Neu",q.unread,e({unread:!0}),'data-unread="1" title="Mit ungelesenen Nachrichten"',"tone-brand")}
    <select id="status-filter" class="chip-select${q.status?" active":""}" aria-label="Status filtern">
      <option value="">Status: alle</option>
      ${c.map(p=>`<option${p===q.status?" selected":""}>${l(p)}</option>`).join("")}
    </select>`}const Ps="mm-addin-collapsed",js="mm-addin-density";function ca(){try{return new Set(JSON.parse(localStorage.getItem(Ps)??"[]"))}catch{return new Set}}const Re=ca();function da(s){Re.has(s)?Re.delete(s):Re.add(s);try{localStorage.setItem(Ps,JSON.stringify([...Re]))}catch{}}function Pe(){try{return localStorage.getItem(js)==="compact"}catch{return!1}}function ua(s){try{localStorage.setItem(js,s?"compact":"comfort")}catch{}}const pa={Überfällig:"danger","Nächste 7 Tage":"warn",Später:"neutral","Ohne Fälligkeit":"neutral",Erledigt:"ok","Passt zur geöffneten Mail":"info"};function hs(s,e){const a=Re.has(s);return`<section class="group tone-${pa[s]??"neutral"}${a?" closed":""}">
      <button type="button" class="group-head" data-group="${l(s)}" aria-expanded="${!a}">
        <span class="caret">${a?"▸":"▾"}</span> ${l(s)} <span class="count">${e.length}</span>
      </button>
      ${a?"":`<div class="group-body">${e.map(la).join("")}</div>`}
    </section>`}function ue(){var d;const s=T.querySelector("#list");if(!s)return;const e=Nt(Ut(),q),a=new Set((((d=ze())==null?void 0:d.subject)??"").match(/\d{4,}/g)??[]),c=F.filter(h=>a.has(String(h.number))),p=c.length?hs("Passt zur geöffneten Mail",c):"";s.innerHTML=p+(e.length?(Qe(q)?[["Erledigt",[...e].sort((h,u)=>{var M,y;return(((M=u.due)==null?void 0:M.getTime())??0)-(((y=h.due)==null?void 0:y.getTime())??0)})]]:oa(e)).map(([h,u])=>hs(h,u)).join(""):`<div class="empty">${Ns(q)||q.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),s.classList.toggle("compact",Pe()),ra()}function Os(){const s=ze();return ve&&s?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${l(s.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    ${s&&Cs(s.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function Bt(){var e;const s=T.querySelector("#actions");s&&(s.innerHTML=Os(),s.hidden=!s.innerHTML.trim()),(e=T.querySelector("#list"))==null||e.classList.toggle("picking",ve)}async function $e(s=!0){if(Ft.hidden=!1,document.body.classList.remove("plain-bg"),Pn())return ea(T);(s||!F.length)&&(T.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(J??(J=await Je().catch(()=>{})),s||!F.length){const p=await je();F=p.filter(d=>!pe(d)),Dt=p.filter(d=>pe(d)),Ge=null,Qe(q)&&await ms()}Ht.length||(Ht=(await Et().catch(()=>[])).map(p=>p.name)),ht=!1,Us(),ha(),s&&ia(F)}catch(p){if(p instanceof vn&&p.status===401)return gt(p.message);T.innerHTML=`<div class="error">${l(D(p))}</div>`;return}const e=Os();T.innerHTML=`
    <div class="view">
      <div class="sticky-head list-head">
        <div class="toolbar">
          <strong class="grow">Meine Aufgaben <span class="hint">${F.length}</span></strong>
          <button class="icon-tool" id="density" title="${Pe()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"}">${Pe()?"▤":"☰"}</button>
          <button class="icon-tool" id="refresh" title="Liste neu laden">⟳</button>
          <button class="icon-tool" id="sound" title="${Me()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"}">${Me()?"🔔":"🔕"}</button>
          <button class="icon-tool" id="theme" title="Design anpassen: Hell/Dunkel, Hintergrund, Farben" aria-haspopup="menu">🎨</button>
        </div>
        <div class="head-row">
          <input id="search" type="search" placeholder="🔎 Suchen (Titel, Nr.)" value="${l(q.q)}">
          <button class="action primary" id="new-task" title="Neue Aufgabe in MyMonolith anlegen">＋ Neu</button>
          <button class="action" id="from-chat" title="Ausgewählte Nachrichten aus einem Teams-Chat an eine Aufgabe posten oder den Chat verknüpfen">💬<span class="lbl"> Aus Chat</span></button>
          <button class="action" id="from-mail" title="Mails aus dem Outlook-Postfach an eine Aufgabe posten">📨<span class="lbl"> Aus Outlook</span></button>
        </div>
        <div id="actions" class="actions-bar"${e.trim()?"":" hidden"}>${e}</div>
        <div id="filters" class="quick-filters"></div>
        <div id="theme-menu" class="theme-menu" role="menu" hidden></div>
      </div>
      <div id="list" class="${ve?"picking":""}"></div>
    </div>`;const a=T.querySelector("#search");a.addEventListener("input",()=>{q.q=a.value,ue()});const c=T.querySelector("#filters");c.addEventListener("click",p=>{const d=p.target.closest("button");d&&(d.dataset.all?q=mt(q.q):d.dataset.time?q.time=q.time===d.dataset.time?"all":d.dataset.time:d.dataset.owner?q.owner=q.owner===d.dataset.owner?"all":d.dataset.owner:d.dataset.unread&&(q.unread=!q.unread),ps(q),ue())}),c.addEventListener("change",p=>{const d=p.target;d.id==="status-filter"&&(q.status=d.value,ps(q),Qe(q)?ms().then(ue):ue())}),T.querySelector("#list").addEventListener("click",p=>{const d=p.target.closest("[data-group]");if(d)return da(d.dataset.group),ue();const h=p.target.closest(".task-row"),u=Ut().find(y=>y.id===(h==null?void 0:h.dataset.id))??F.find(y=>y.id===(h==null?void 0:h.dataset.id));if(!u)return;const M=ve;ve=!1,Kt(u,void 0,M)}),ue()}async function Kt(s,e,a=!1){const c=window.scrollY;window.scrollTo(0,0),await Ct(T,s,()=>{$e(ht),window.scrollTo(0,c)},e,()=>ht=!0),a&&(_e==null||_e())}function bs(s){window.scrollTo(0,0),sa(T,s?ze():null,async(e,a)=>{F=(await je().catch(()=>F)).filter(p=>!pe(p));const c=F.find(p=>p.id===e.id||e.number&&p.number===e.number);c?await Kt(c,a):(await $e(!1),T.insertAdjacentHTML("afterbegin",`<div class="ok">${l(a)}</div>`))},()=>void $e(!1))}document.addEventListener("click",s=>{const e=T.querySelector("#theme-menu"),a=s.composedPath().some(c=>c instanceof HTMLElement&&(c.id==="theme-menu"||c.id==="theme"));e&&!e.hidden&&!a&&(e.hidden=!0)});T.addEventListener("click",s=>{const e=s.target;if(e.closest("#new-task"))bs(!1);else if(e.closest("#from-chat"))Ls({tasks:F,onClose:a=>a&&void $e()});else if(e.closest("#from-mail"))Ts({tasks:F,onClose:a=>a&&void $e()});else if(e.closest("#new-from-mail"))bs(!0);else if(e.closest("#refresh"))$e();else if(e.closest("#density")){ua(!Pe());const a=T.querySelector("#density");a&&(a.textContent=Pe()?"▤":"☰",a.title=Pe()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"),ue()}else if(e.closest("#theme")){const a=T.querySelector("#theme-menu");a&&(a.hidden=!a.hidden,a.hidden||(a.innerHTML=cs()))}else if(e.closest("#theme-menu button.opt")){const a=e.closest("#theme-menu button.opt"),c=a.dataset.mode?{mode:a.dataset.mode}:a.dataset.bg?{background:a.dataset.bg}:{accent:a.dataset.accent},p=Vn(c);T.querySelector("#theme-menu").innerHTML=cs(p)}else if(e.closest("#sound")){Yn(!Me());const a=T.querySelector("#sound");a&&(a.textContent=Me()?"🔔":"🔕",a.title=Me()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),Me()&&qs()}else e.closest("#pick-for-mail")?(ve=!0,Bt()):e.closest("#pick-cancel")&&(ve=!1,Bt())});Ft.addEventListener("click",()=>{gn(),gt()});const ma=6e4;let bt,Fs=new Map;const zt=new Set;function Us(){Fs=new Map(F.map(s=>[s.id,s.unread]))}function ha(){bt||(bt=window.setInterval(()=>void fa(),ma))}function ba(){window.clearInterval(bt),bt=void 0}async function fa(){if(!Pt()||document.hidden)return;let s;try{s=(await je()).filter(a=>!pe(a))}catch{return}const e=s.filter(a=>a.unread>(Fs.get(a.id)??0));if(F=s,Us(),!!e.length){qs();for(const a of e)zt.add(a.id);if(setTimeout(()=>{for(const a of e)zt.delete(a.id);T.querySelectorAll(".task-row.fresh").forEach(a=>a.classList.remove("fresh"))},15e3),T.querySelector("#list")){const a=window.scrollY;ue(),window.scrollTo(0,a)}else ht=!0}}function ga(){Gn(),As(),Wn(),jn(()=>{if(pt)return pt();ve=!1,Bt(),ue()}),Pt()?$e().then(Ks):gt()}let fs=new URLSearchParams(location.search).get("task");async function Ks(){const s=fs;if(!(!s||!Pt())){fs=null;try{const e=F.find(a=>a.id===s)??await $s(s);await Kt(e)}catch(e){T.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${l(D(e))}</div>`)}}}async function va(){var s;try{const e=location.href.split(/[?#]/)[0],a=await fetch(`${e}?check=${Date.now()}`,{cache:"no-store"}).then(f=>f.text()),c=f=>[...new Set([...f.matchAll(/assets\/[\w.-]+?-[\w-]{8}\.(?:js|css)/g)].map(m=>m[0]))].sort(),p=c(a),d=new Set(c(document.head.innerHTML));if(!p.length||!d.size||p.every(f=>d.has(f)))return;const h=p.join(","),u=()=>{const f=new URL(location.href);f.searchParams.set("v",String(Date.now())),location.replace(f.toString())},M=document.getElementById("update-note");M&&(M.hidden=!1,(s=M.querySelector("button"))==null||s.addEventListener("click",u));let y="";try{y=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",h)}catch{}y!==h&&u()}catch{}}let gs=!1;const Vs=()=>{gs||(gs=!0,ga())};va();typeof Office<"u"&&Office.onReady(Vs);setTimeout(Vs,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 14:03 UTC";
