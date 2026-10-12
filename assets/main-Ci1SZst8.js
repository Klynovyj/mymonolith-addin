import{a as pe,c as Je,e as H,b as l,l as ze,g as Ze,f as vs,h as ys,d as Ne,s as Pe,j as $s,k as gt,P as Xt,o as Lt,m as qt,n as At,p as es,q as cn,r as dn,t as un,u as pn,v as Tt,w as mn,x as ts,y as ot,z as ss,A as ns,B as hn,C as It,D as as,E as fn,F as lt,G as bn,H as xt,I as ws,J as ks,K as Ss,L as gn,M as rt,N as vn,O as yn,Q as $n,R as ut,S as wn,T as kn,U as Sn,V as Ln,W as An,X as Tn,Y as Mn,Z as En,_ as qn,$ as In,a0 as xn,a1 as Cn,i as zt,a2 as Hn}from"./util-CtNnOUSB.js";import{m as Dn,s as Ct,b as Ot,l as Ls,n as Be,o as Nn,p as Pn,q as ct,t as Bn,u as jn,g as zn,d as On,f as Fn,k as Un,e as is,j as ls,v as Kn,h as Wn,w as Vn,x as Rn,y as _n,z as Yn,A as Gn,B as Jn}from"./composemail-B6jC4ktv.js";import{g as pt,l as os,a as Zn,b as Qn,c as Xn,m as ea,M as rs,o as As,d as Ts,e as ta}from"./chatpost-Dw2-ftsI.js";import{h as Ms,a as Es,t as cs,u as sa,w as na}from"./theme-INbYOtyP.js";const aa=t=>t.toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}),ia=t=>(t||"Mail").replace(/[\\/:*?"<>|]+/g," ").replace(/\s+/g," ").trim().slice(0,80);function qs(t){var Fe;const e=document.createElement("div");e.className="overlay",e.innerHTML='<div class="overlay-panel" role="dialog" aria-label="Aus Outlook posten"></div>',document.body.append(e),document.body.classList.add("has-overlay");const n=e.querySelector(".overlay-panel");let r=!1;const u=()=>{e.remove(),document.body.classList.remove("has-overlay"),t.onClose(r)};let c=((Fe=t.tasks)==null?void 0:Fe.filter(y=>!pe(y)))??[],m="inbox",p="",A=[];const $=new Map;let b=!1,h=t.task??null,f=[],v="",T=!0,O=!0,N=t.parentId??"",k=[],R="",U=!1,se="",ne=Je(new Date(Date.now()+7*864e5)),G="",Y="",le;const Q=y=>`
    <div class="topbar sticky-head">
      <span></span>
      <strong class="grow center">${y}</strong>
      <button class="nav-btn" data-close title="Schließen">✕</button>
    </div>
    ${Y?`<div class="error">${l(Y)}</div>`:""}`;function X(){n.innerHTML=`${Q("📧 Aus Outlook")}
      <div class="pad">
        <p>Damit die App Ihre Mails lesen kann, ist einmalig eine <b>Microsoft-Anmeldung</b> nötig.</p>
             <p class="hint">Erscheint „Administratorgenehmigung erforderlich“, muss die EDV die Berechtigung <b>Mail.Read</b> für die App „MyMonolith Aufgaben“ bestätigen.</p>
             <button class="primary" id="ms-login">Mit Microsoft anmelden</button>
      </div>`}function Ee(y,g,E=""){const D=Ne(y.due);return`<button type="button" class="task-row card due-${D.level}${g?" is-selected":""}" data-task="${l(y.id)}">
      <span class="pick-box" aria-hidden="true">${g?"✓":""}</span>
      <span class="task-main"><span class="task-name">${l(y.title)}</span>
        <span class="task-meta"><span class="num">#${y.number}</span>
          <span class="badge due-${D.level}">${l(D.text)}</span>
          ${y.status?`<span class="badge ${Pe(y.status)}">${l(y.status)}</span>`:""}
          ${E?`<span class="badge suggest">${l(E)}</span>`:""}</span></span>
    </button>`}function ae(){if(t.task)return;const y=[...$.values()][0];f=y?Ls(c,y.subject,y.conversationId):[],!h&&f[0]&&(h=f[0].task)}async function ee(){if(!h||t.parentId||R===h.id)return;const y=h;R=y.id,N="",k=[];try{k=await $s(y.messageId)}catch{}(h==null?void 0:h.id)===y.id&&P()}function P(){var Xe,fe,K,re;const y=$.size,g=v.trim().toLowerCase(),E=new Set([h==null?void 0:h.id,...f.map(w=>w.task.id)]),D=g?c.filter(w=>w.title.toLowerCase().includes(g)||String(w.number).includes(g.replace(/^#/,""))).slice(0,50):c.filter(w=>!E.has(w.id)).slice(0,100),j=((Xe=n.querySelector(".chat-msgs"))==null?void 0:Xe.scrollTop)??0,W=((fe=n.querySelector(".task-pick-list"))==null?void 0:fe.scrollTop)??0,oe=n.scrollTop,z=((K=document.activeElement)==null?void 0:K.id)==="mail-search",x=((re=document.activeElement)==null?void 0:re.selectionStart)??null,_=[...A,...[...$.values()].filter(w=>!A.some(qe=>qe.id===w.id))];n.innerHTML=`${Q("📧 Aus Outlook")}
      <div class="pad compose-pane">
        <section class="step step-mail">
          <h3 class="step-head"><span class="step-no">1</span> 📧 Outlook-Postfach <span class="step-hint">Mails ankreuzen – ${y} gewählt</span></h3>
          <div class="mail-tools">
            <div class="seg">
              ${["inbox","sent","all"].map(w=>`<button type="button" class="seg-btn${m===w?" active":""}" data-folder="${w}">${w==="inbox"?"Posteingang":w==="sent"?"Gesendet":"Alle"}</button>`).join("")}
            </div>
            <input id="mail-search" type="search" placeholder="🔎 Suchen (Absender, Betreff, Text)" value="${l(p)}">
          </div>
          <div class="chat-msgs mail-list">
            ${b&&!_.length?'<p class="hint">Mails werden geladen …</p>':""}
            ${_.map(w=>`<label class="chat-msg mail-row${$.has(w.id)?" is-selected":""}">
                  <input type="checkbox" data-mail="${l(w.id)}"${$.has(w.id)?" checked":""}>
                  <span class="chat-msg-main">
                    <span class="chat-msg-head"><strong>${l(w.from)}</strong> <span class="hint">${aa(w.at)}</span>${w.hasAttachments?' <span title="Mit Anhängen">📎</span>':""}</span>
                    <span class="mail-subject">${l(w.subject)}</span>
                    <span class="chat-msg-text hint">${l(w.preview)}</span>
                  </span>
                </label>`).join("")||(b?"":'<p class="hint">Keine Mails gefunden.</p>')}
          </div>
        </section>

        <section class="step step-task">
          <h3 class="step-head"><span class="step-no">2</span> 📋 MyMonolith-Aufgabe <span class="step-hint">${h?`#${h.number} gewählt`:"Aufgabe wählen oder neu anlegen"}</span></h3>
          ${h?Ee(h,!0):'<p class="hint">Noch keine Aufgabe gewählt.</p>'}
          ${t.task?"":U?`<div class="new-from-chat card pad">
                  <label>Titel der neuen Aufgabe<input id="new-title" maxlength="255" value="${l(se)}"></label>
                  <label>Fällig am<input id="new-due" type="date" value="${l(ne)}"></label>
                  <span class="hint">Verantwortlich: Sie selbst (später änderbar über „Weitergeben“)</span>
                  <div class="row-btns"><button class="primary small" id="new-create">＋ Anlegen und auswählen</button><button class="small" id="new-cancel">Abbrechen</button></div>
                </div>`:'<button type="button" class="tool-btn" id="new-open">＋ Neue Aufgabe aus Mail</button>'}
          ${t.task?"":`${f.filter(w=>w.task.id!==(h==null?void 0:h.id)).map(w=>Ee(w.task,!1,w.why)).join("")}
               <input id="task-search" type="search" placeholder="Aufgabe suchen (Titel oder Nummer)" value="${l(v)}">
               <div class="task-pick-list">${D.map(w=>Ee(w,w.id===(h==null?void 0:h.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>`}
          ${h?`<div class="reply-target">
                ${t.parentId?`<span>↩ Als <b>Antwort an ${l(t.parentName??"")}</b></span>`:`<label>Posten als <select id="reply-target">
                      <option value="">neuer Kommentar</option>
                      ${k.map(w=>`<option value="${l(w.id)}"${w.id===N?" selected":""}>↩ Antwort auf ${l(w.label)}</option>`).join("")}
                    </select></label>`}
              </div>`:""}
        </section>

        <section class="step step-send">
          <h3 class="step-head"><span class="step-no">3</span> 📤 Senden <span class="step-hint">je Mail ein Kommentar</span></h3>
          <label class="check"><input type="checkbox" id="opt-eml"${T?" checked":""}> Mail als .eml-Datei anhängen (komplett mit Verlauf)</label>
          <label class="check"><input type="checkbox" id="opt-atts"${O?" checked":""}> Anhänge der Mail einzeln mitsenden</label>
          <div class="row-btns">
            <button class="primary" id="do-post"${!y||!h||G?" disabled":""}>📤 ${y||""} ${y===1?"Mail":"Mails"} posten</button>
          </div>
          ${G?`<p class="hint">${l(G)}</p>`:""}
        </section>
      </div>`;const Ue=n.querySelector(".chat-msgs");Ue&&(Ue.scrollTop=j);const te=n.querySelector(".task-pick-list");if(te&&(te.scrollTop=W),n.scrollTop=oe,z){const w=n.querySelector("#mail-search");w.focus(),x!=null&&w.setSelectionRange(x,x)}ee()}async function ie(){b=!0,P();try{A=await os(m,p),Y=""}catch(y){Y=H(y)}b=!1,P()}async function Oe(){n.innerHTML=`${Q("📧 Aus Outlook")}<p class="hint pad">Mails werden geladen …</p>`;try{const[,y]=await Promise.all([os(m).then(g=>A=g),c.length||t.task?Promise.resolve(c):ze().then(g=>g.filter(E=>!pe(E)))]);c=y,Y="",P()}catch(y){Y=H(y),X()}}async function yt(){var g;const y=se.trim();if(!y)return(g=n.querySelector("#new-title"))==null?void 0:g.focus();Y="",G="Aufgabe wird angelegt …",P();try{const E=await Ze(),D=await vs({name:y,dueAt:ne,assigneeId:E.id}),j=await ys(D.id);c=[j,...c],h=j,U=!1,se="",r=!0}catch(E){Y=H(E)}G="",P()}async function $e(){if(!h||!$.size)return;const y=h,g=[...$.values()].sort((D,j)=>D.at.getTime()-j.at.getTime());Y="";let E=0;try{for(const[D,j]of g.entries()){G=`Mail ${D+1}/${g.length}: „${j.subject}“ wird geladen …`,P();const W=await Zn(j.id),{parts:oe}=Dn({from:W.from,to:W.to,cc:W.cc,subject:W.subject,html:W.html,sent:W.sent}),z=T?{blob:await Qn(j.id),name:`${ia(W.subject)}.eml`}:void 0,x=O&&j.hasAttachments?await Xn(j.id):[];await Ct(y.messageId,{note:"",parts:oe,eml:z,blobs:x.map(_=>({name:_.name,size:_.size,load:()=>ea(j.id,_.id)})),parentId:N||void 0},_=>{G=`Mail ${D+1}/${g.length}: ${_}`,P()}),Ot(W.conversationId,y),E++,r=!0}G="",n.innerHTML=`${Q("Erledigt")}
        <div class="pad">
          <div class="ok">${E} ${E===1?"Mail":"Mails"} an #${y.number} gepostet${N?" (als Antwort)":""}.</div>
          <div class="row-btns"><button class="primary" data-close>Fertig</button><button data-more>Weitere Mails posten</button></div>
        </div>`,$.clear()}catch(D){G="",Y=`${E?`${E} von ${g.length} Mails gepostet. `:""}${H(D)}`,g.slice(0,E).forEach(j=>$.delete(j.id)),P()}}n.addEventListener("click",y=>{var W,oe;const g=y.target;if(g.closest("[data-close]"))return u();if(g.closest("[data-more]"))return P();const E=g.closest("#ms-login");if(E){if(E.disabled)return;E.disabled=!0,E.textContent="Anmeldefenster ist geöffnet …",pt(!0,rs).then(Oe,z=>{/interaction_in_progress/.test(String(z))||(Y=H(z),X())});return}const D=g.closest("[data-folder]");if(D)return m=D.dataset.folder,void ie();const j=g.closest("[data-task]");if(j&&!t.task)return h=c.find(z=>z.id===j.dataset.task)??h,v="",P();if(g.closest("#new-open")){U=!0,se||(se=(((W=[...$.values()][0])==null?void 0:W.subject)??"").replace(/^\s*((AW|RE|WG|FW|FWD)\s*:\s*)+/i,"").slice(0,120)),P(),(oe=n.querySelector("#new-title"))==null||oe.focus();return}if(g.closest("#new-cancel"))return U=!1,P();if(g.closest("#new-create"))return void yt();if(g.closest("#do-post"))return void $e()}),n.addEventListener("change",y=>{const g=y.target;if(g.dataset.mail){const E=[...A,...$.values()].find(D=>D.id===g.dataset.mail);g.checked&&E?$.set(E.id,E):$.delete(g.dataset.mail),ae(),P()}else g.id==="opt-eml"?T=g.checked:g.id==="opt-atts"?O=g.checked:g.id==="new-due"?ne=g.value:g.id==="reply-target"&&(N=g.value)}),n.addEventListener("input",y=>{const g=y.target;if(g.id==="new-title")se=g.value;else if(g.id==="mail-search")p=g.value,clearTimeout(le),le=window.setTimeout(()=>void ie(),500);else if(g.id==="task-search"){const E=g.selectionStart;v=g.value,P();const D=n.querySelector("#task-search");D.focus(),D.setSelectionRange(E,E)}}),n.innerHTML=`${Q("📧 Aus Outlook")}<p class="hint pad">Anmeldung wird geprüft …</p>`,pt(!1,rs).then(Oe,()=>X())}const Is="mm-addin-sound",xs="mm-addin-sent-mails";let Te=null;function la(){const t=()=>{try{Te??(Te=new AudioContext),Te.resume()}catch{}};window.addEventListener("pointerdown",t,{once:!0,capture:!0}),window.addEventListener("keydown",t,{once:!0,capture:!0})}function Me(){try{return localStorage.getItem(Is)!=="off"}catch{return!0}}function oa(t){try{localStorage.setItem(Is,t?"on":"off")}catch{}}function Cs(){if(Me())try{Te??(Te=new AudioContext);const t=Te.currentTime;for(const[e,n]of[880,1320].entries()){const r=Te.createOscillator(),u=Te.createGain();r.type="sine",r.frequency.value=n;const c=t+e*.16;u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(.18,c+.02),u.gain.exponentialRampToValueAtTime(1e-4,c+.14),r.connect(u).connect(Te.destination),r.start(c),r.stop(c+.15)}}catch{}}function Hs(){try{return JSON.parse(localStorage.getItem(xs)??"{}")}catch{return{}}}function Ds(t,e){const n=Hs();n[t]=[...new Set([...n[t]??[],e])];const r=Object.keys(n);for(const u of r.slice(0,Math.max(0,r.length-200)))delete n[u];try{localStorage.setItem(xs,JSON.stringify(n))}catch{}}const Ns=t=>Hs()[t]??[];function dt(t,e="Name suchen …"){t.classList.add("picker"),t.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${l(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const n=t.querySelector("input"),r=t.querySelector("ul");let u=[],c,m=0,p=[];const A=()=>{const b=n.value.trim().toLowerCase();p=(b?u.filter(h=>h.name.toLowerCase().includes(b)):u).slice(0,8),m=Math.min(m,Math.max(p.length-1,0)),r.innerHTML=p.length?p.map((h,f)=>`<li role="option" data-i="${f}" class="${f===m?"active":""}"><span class="avatar sm">${l(gt(h.name))}</span>${l(h.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',r.hidden=!1},$=b=>{c=b,n.value=b.name,r.hidden=!0};return n.addEventListener("focus",()=>{n.select(),A()}),n.addEventListener("input",()=>{c=void 0,m=0,A()}),n.addEventListener("keydown",b=>{if(!r.hidden){if(b.key==="ArrowDown")m=Math.min(m+1,p.length-1);else if(b.key==="ArrowUp")m=Math.max(m-1,0);else return b.key==="Enter"&&p[m]?(b.preventDefault(),$(p[m])):b.key==="Escape"?void(r.hidden=!0):void 0;b.preventDefault(),A()}}),r.addEventListener("mousedown",b=>{const h=b.target.closest("li[data-i]");h&&(b.preventDefault(),$(p[Number(h.dataset.i)]))}),n.addEventListener("blur",()=>{r.hidden=!0,c||(c=u.find(b=>b.name.toLowerCase()===n.value.trim().toLowerCase()))}),{setUsers(b,h){u=b;const f=u.find(v=>v.id===h);f&&!n.value&&$(f)},selected:()=>c,focus:()=>n.focus()}}let mt=null,_e=null;const Ps="mm-addin-comment-order";function ra(){try{return localStorage.getItem(Ps)==="oldest"?"oldest":"newest"}catch{return"newest"}}function ca(t){try{localStorage.setItem(Ps,t)}catch{}}const ds=t=>{var e;return!!((e=t.raw)!=null&&e.type)&&t.raw.type!=="text"};function da(t){const e=[];for(const n of t){const r=e[e.length-1];ds(n)&&Array.isArray(r)?r.push(n):e.push(ds(n)?[n]:n)}return e.map(n=>Array.isArray(n)&&n.length===1?n[0]:n)}function ua(t){const e=t.map(c=>{var m;return(m=c.createdAt)==null?void 0:m.getTime()}).filter(c=>!!c).sort((c,m)=>c-m),n=c=>new Date(c).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),r=c=>new Date(c).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),u=e.length?n(e[0])===n(e[e.length-1])?`${n(e[0])}, ${r(e[0])}–${r(e[e.length-1])}`:`${n(e[0])} – ${n(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${t.length} Änderungen <span class="hint">${u}</span></summary>
      ${t.map(c=>Ft(c)).join("")}
    </details>`}let Ve="";function Ft(t,e=!1){var u,c,m;const n=((u=t.raw)==null?void 0:u.type)&&t.raw.type!=="text",r=t.files.length?`<ul class="files">${t.files.map(p=>`<li>📎 ${p.url&&/^https:\/\//.test(p.url)?`<a href="${l(p.url)}" data-external>${l(p.name)}</a>`:l(p.name)}${p.size?` <span class="hint">${ct(p.size)}</span>`:""}</li>`).join("")}</ul>`:"";return n?`<div class="event">${t.html} · ${l(t.author)}${t.createdAt?`, ${ut(t.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}${Ve&&t.author===Ve?" mine":""}">
      ${t.avatar?`<img class="avatar" src="${l(t.avatar)}" alt="">`:`<span class="avatar">${l(gt(t.author))}</span>`}
      <div class="bubble">
        <header><strong>${l(t.author)}</strong>${Ve&&t.author===Ve?' <span class="me-tag">Sie</span>':""}${t.createdAt?` <span class="hint when">${ut(t.createdAt)}</span>`:""}</header>
        ${t.html.trim()?`<div class="body">${ks(t.html)}</div>`:t.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${r}
        ${t.replies.map(p=>Ft(p,!0)).join("")}
        ${e?"":`<div class="msg-actions"><button type="button" class="reply-btn" data-reply="${l(String(((c=t.raw)==null?void 0:c.id)??t.id))}" data-reply-name="${l(t.author)}">↩ Antworten</button></div>
             <div class="reply-slot" data-slot="${l(String(((m=t.raw)==null?void 0:m.id)??t.id))}"></div>`}
      </div>
    </article>`}async function Ht(t,e,n,r,u,c){var Zt;mt=null,_e=null;const m=await Ze().catch(()=>{});Ve=(m==null?void 0:m.name)??"",t.innerHTML=`
    <div class="view detail">
      <div class="topbar sticky-head">
        <button class="nav-btn" id="back" title="${c?`Zurück zur Hauptaufgabe #${c.number}`:"Zurück zur Aufgabenliste"}">← ${c?`#${c.number}`:"Zurück"}</button>
        <span class="hint grow center">${c?"Unteraufgabe":"Aufgabe"} #${e.number}</span>
        <button class="nav-btn" id="open-web" title="Diese Aufgabe in MyMonolith im Browser öffnen">Im Browser ↗</button>
      </div>
      ${c?`<div class="breadcrumb">↳ Unteraufgabe von <button type="button" class="link" id="to-parent">#${c.number} ${l(c.title)}</button></div>`:""}
      <div id="flash">${r?`<div class="ok">${l(r)}</div>`:""}</div>

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
            ${Xt.map(s=>`<option value="${s.value}"${s.value===(e.priority??"").toLowerCase()?" selected":""}>${s.label}</option>`).join("")}
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
    </div>`,document.body.classList.add("plain-bg");const p=s=>t.querySelector(s),A=p("#flash"),$=s=>{A.innerHTML=s,A.scrollIntoView({block:"nearest"})},b=s=>$(`<div class="ok">${l(s)}</div>`),h=s=>$(`<div class="error">${l(H(s))}</div>`),f=()=>u==null?void 0:u();p("#back").addEventListener("click",n),p("#open-web").addEventListener("click",()=>Lt(e.url)),p("#comments").addEventListener("click",s=>{var o;const a=s.target.closest("[data-reply]");if(a){C={id:a.dataset.reply,name:a.dataset.replyName??""},Yt(),(o=t.querySelector("#comment"))==null||o.focus();return}if(s.target.closest("#reply-cancel")){C=null,xe();return}const i=s.target.closest("a[data-external]");i&&(s.preventDefault(),Lt(i.href))});const v=p("#status"),T=p("#done-actions"),O=p("#phase-note"),N=(m==null?void 0:m.userId)!=null&&e.creatorUserId===m.userId;let k=null;const R=s=>{e.phase=s,e.raw.StatusID=s==="done"?7:s==="pending"?5:1};function U(){v.className=`bare status-select ${Pe(e.status)}`;const s=(i,o)=>k?k.includes(i):o;O.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${N?"durch Sie":`von <strong>${l(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const a=[];if(s("approve",e.phase==="pending"&&N)&&a.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),s("finish",e.phase==="open")){const i=e.needsApproval&&!N;a.push(`<button class="primary" data-act="finish" title="${i?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${i?"Zur Freigabe":"Erledigt"}</button>`)}s("reopen",e.phase!=="open")&&a.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),T.innerHTML=a.join(""),p("#tile-finish").hidden=!a.length}async function se(s){const a=[...v.options].find(i=>s.test((i.textContent??"").trim()));return!a||v.value===a.value?!1:(await At(e.id,a.value),v.value=a.value,e.statusId=a.value,e.status=a.textContent??e.status,!0)}async function ne(){try{const s=await ns(e.id);k=s.actions,R(s.phase);const a=s.spaStatusId?[...v.options].find(i=>i.value===s.spaStatusId):void 0;a&&(v.value=a.value,e.statusId=a.value,e.status=a.textContent??e.status)}catch{}U(),ee==null||ee(),be==null||be(),ce==null||ce()}U(),ne(),qt().then(s=>{v.innerHTML=s.map(a=>`<option value="${l(a.id)}"${a.id===e.statusId||a.name===e.status?" selected":""}>${l(a.name)}</option>`).join(""),e.statusId??(e.statusId=v.value)}).catch(h);const G=p("#status-confirm"),Y=()=>v.value!==(e.statusId??v.value);v.addEventListener("change",()=>{G.hidden=!Y(),v.classList.toggle("is-pending",Y())}),p("#status-cancel").addEventListener("click",()=>{e.statusId&&(v.value=e.statusId),G.hidden=!0,v.classList.remove("is-pending")}),p("#status-ok").addEventListener("click",async()=>{var i;const s=e.statusId??"",a=((i=v.selectedOptions[0])==null?void 0:i.textContent)??"";G.hidden=!0,v.classList.remove("is-pending"),v.disabled=!0;try{await At(e.id,v.value),e.statusId=v.value,e.status=a,b(`Status: ${a}`),f(),await ne(),Le()}catch(o){v.value=s,h(o)}finally{v.disabled=!1}}),T.addEventListener("click",async s=>{var i;const a=s.target.closest("button[data-act]");if(a){T.querySelectorAll("button").forEach(o=>o.disabled=!0);try{const o=a.dataset.act;o==="finish"?(await es(e.id),R(e.needsApproval&&!N?"pending":"done")):o==="approve"?(await cn(e.id),R("done")):o==="reopen"&&(await dn(e.id),R("open")),await ne();let d="";try{e.phase==="done"&&await se(/^erledigt$/i)?d=" Status: Erledigt.":o==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await se(/^zu erledigen$/i)&&(d=" Status: Zu erledigen.")}catch(L){d=` (Status konnte nicht angepasst werden: ${H(L)})`}U(),b(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),d&&b(`${((i=A.textContent)==null?void 0:i.trim())??""}${d}`),Q(),be(),ce(),f(),Le()}catch(o){h(o),U()}}});const le=p("#tile-due");function Q(s=!1){var o;const a=Ne(e.due),i=un(e,m);if(s){le.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?Je(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const d=le.querySelector("#due-input");d.focus(),le.querySelector("#due-cancel").addEventListener("click",()=>Q()),le.querySelector("#due-save").addEventListener("click",async()=>{if(!d.value)return d.focus();try{await pn(e.id,d.value),e.due=new Date(`${d.value}T00:00:00`),b(`Fällig am ${Tt(e.due)}`),f(),Q()}catch(L){h(L)}});return}le.className=`tile due-${a.level}`,le.innerHTML=`
      <span class="tile-label">Fällig ${i?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${i?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?Tt(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?Tt(e.due):"–"}</span>`}
      <span class="tile-sub">${l(a.text)}</span>`,(o=le.querySelector("#due-edit"))==null||o.addEventListener("click",()=>Q(!0))}Q();const X=p("#prio"),Ee=()=>X.dataset.p=X.value;Ee(),X.addEventListener("change",async()=>{const s=e.priority??"";try{await mn(e.id,X.value),e.priority=X.value,e.raw.Priority=X.value,Ee(),b(`Priorität: ${X.selectedOptions[0].textContent}`),f()}catch(a){X.value=s,h(a)}});const ae=p("#tile-resp");function ee(s="view",a){var i;if(s==="view"){ae.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${l(e.responsible??"–")}</span>
        ${!k||k.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(i=ae.querySelector("#resp-edit"))==null||i.addEventListener("click",()=>ee("pick"));return}if(s==="pick"){ae.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const o=dt(ae.querySelector("#resp-picker"));rt().then(d=>o.setUsers(d)).catch(h),o.focus(),ae.querySelector("#resp-cancel").addEventListener("click",()=>ee()),ae.querySelector("#resp-next").addEventListener("click",()=>{const d=o.selected();d?ee("confirm",d):o.focus()});return}ae.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${l(a.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,ae.querySelector("#resp-cancel").addEventListener("click",()=>ee()),ae.querySelector("#resp-ok").addEventListener("click",async()=>{try{await vn(e.id,a.id),e.responsible=a.name,e.responsibleUserId=a.userId,b(`Weitergegeben an ${a.name}.`),f(),ee(),Q()}catch(o){h(o),ee()}})}ee();const P=p("#people");let ie={administrators:[],participants:[]};const Oe={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},yt=(s,a)=>`
    <span class="person-chip" title="${l(a.name)}">
      ${a.picture?`<img class="avatar sm" src="${l(a.picture)}" alt="">`:`<span class="avatar sm">${l(gt(a.name))}</span>`}
      ${l(a.name)}
      <button type="button" data-rm-person="${s}:${l(a.id)}" aria-label="${l(a.name)} entfernen" title="Entfernen">×</button>
    </span>`;function $e(s){if(P.innerHTML=["administrators","participants"].map(a=>`
        <div class="people-row">
          <span class="people-label">${Oe[a]}</span>
          <div class="people-list">
            ${ie[a].map(i=>yt(a,i)).join("")||'<span class="hint">niemand</span>'}
            ${s===a?"":`<button type="button" class="add-person" data-add-person="${a}">＋ Hinzufügen</button>`}
          </div>
          ${s===a?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),s){const a=dt(P.querySelector("#people-picker"),"Kollegen suchen …"),i=new Set(ie[s].map(o=>o.id));rt().then(o=>a.setUsers(o.filter(d=>!i.has(d.id)))).catch(h),a.focus(),P.querySelector("#people-cancel").addEventListener("click",()=>$e()),P.querySelector("#people-save").addEventListener("click",async()=>{const o=a.selected();if(!o)return a.focus();await Fe(s,[...ie[s],{...o}],`${o.name} als ${Oe[s]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function Fe(s,a,i){try{await yn(e.id,s,a.map(o=>o.id)),ie=await ts(e.id).catch(()=>({...ie,[s]:a})),b(i),f(),$e(),p("#activity").hidden||oe(!0)}catch(o){h(o),$e()}}P.addEventListener("click",s=>{const a=s.target,i=a.closest("[data-add-person]");if(i)return $e(i.dataset.addPerson);const o=a.closest("[data-rm-person]");if(o){const[d,L]=o.dataset.rmPerson.split(":"),S=ie[d].find(I=>I.id===L);Fe(d,ie[d].filter(I=>I.id!==L),`${(S==null?void 0:S.name)??"Person"} entfernt.`)}}),ts(e.id).then(s=>{ie=s,$e()}).catch(s=>P.innerHTML=`<div class="error">${l(H(s))}</div>`);const y=p("#activity");let g=1;const E={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},D={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},j=s=>{const a=s.replace(/^niki\.field\./i,"").replace(/[_\s]/g,i=>i==="_"?"":" ").toLowerCase();return E[a]??E[a.replace(/\s/g,"")]??s.replace(/^niki\.field\./i,"")},W=s=>D[s.replace(/[\s_]/g,"").toLowerCase()]??s;async function oe(s=!1){var a;s&&(g=1),g===1&&(y.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const i=await $n(e.id,g),o=i.logs.map(d=>`
          <div class="log">
            <div class="log-head"><strong>${l(d.user)}</strong> · ${l(j(d.field))}${d.at?`<span class="hint"> · ${ut(d.at)}</span>`:""}</div>
            <div class="log-change">
              ${d.from?`<span class="log-from">${l(W(d.from))}</span> → `:""}<span class="log-to">${l(W(d.to)||"–")}</span>
            </div>
          </div>`).join("");g===1?y.innerHTML=o||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((a=y.querySelector(".more-activity"))==null||a.remove(),y.insertAdjacentHTML("beforeend",o)),i.hasMore&&y.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),g++}catch(i){y.innerHTML=`<div class="error">${l(H(i))}</div>`}}y.addEventListener("click",s=>{s.target.closest(".more-activity")&&oe()}),t.querySelector(".tabs").addEventListener("click",s=>{const a=s.target.closest(".tab");if(!a)return;const i=a.dataset.tab;t.querySelectorAll(".tab").forEach(o=>{const d=o===a;o.classList.toggle("active",d),o.setAttribute("aria-selected",String(d))});for(const o of["comments","checklist","subtasks","files","activity"]){const d=t.querySelector(`#${o}`);d&&(d.hidden=o!==i)}p("#composer").hidden=i!=="comments",i==="activity"&&oe(!0),i==="checklist"&&Xe(),i==="subtasks"&&tt(),i==="files"&&Ke()});const z=p("#checklist");let x=[],_=null;function Ue(){const s=x.filter(a=>a.done).length;p("#cl-count").textContent=x.length?`${s}/${x.length}`:""}function te(){var i;const s=x.filter(o=>o.done).length,a=x.length?Math.round(s/x.length*100):0;z.innerHTML=`
      ${x.length?`<div class="progress"><div class="progress-bar" style="width:${a}%"></div></div>
        <div class="hint">${s} von ${x.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${x.map((o,d)=>_===o.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${l(o.id)}" value="${l(o.item)}" aria-label="Punkt umbenennen">
                  <button type="button" class="small primary" data-cl="save" data-id="${l(o.id)}">Speichern</button>
                  <button type="button" class="small" data-cl="cancel">Abbrechen</button></li>`:`<li class="cl-item${o.done?" done":""}">
                  <label class="cl-check"><input type="checkbox" data-cl="toggle" data-id="${l(o.id)}"${o.done?" checked":""}><span class="cl-text" data-cl="edit" data-id="${l(o.id)}">${l(o.item)}</span></label>
                  <span class="cl-tools">
                    <button type="button" class="icon-btn sm" data-cl="up" data-i="${d}" title="Nach oben" aria-label="Nach oben"${d===0?" disabled":""}>▲</button>
                    <button type="button" class="icon-btn sm" data-cl="down" data-i="${d}" title="Nach unten" aria-label="Nach unten"${d===x.length-1?" disabled":""}>▼</button>
                    <button type="button" class="icon-btn sm" data-cl="edit" data-id="${l(o.id)}" title="Umbenennen" aria-label="Umbenennen">✎</button>
                    <button type="button" class="icon-btn sm" data-cl="del" data-id="${l(o.id)}" title="Löschen" aria-label="Löschen">×</button>
                  </span></li>`).join("")||'<li class="hint empty-thread">Noch keine Punkte.</li>'}
      </ul>
      <form class="cl-add" id="cl-add">
        <input id="cl-new" placeholder="Neuer Punkt … (Enter fügt hinzu)" aria-label="Neuer Checklisten-Punkt">
        <button class="primary small" type="submit">＋</button>
      </form>`,Ue(),(i=z.querySelector(".cl-edit"))==null||i.focus()}async function Xe(){try{x=await ot(e.id),te()}catch(s){z.innerHTML=`<div class="error">${l(H(s))}</div>`}}async function fe(s,a=!0){try{await s(),a&&(x=await ot(e.id)),f()}catch(i){h(i)}te()}z.addEventListener("click",s=>{const a=s.target.closest("[data-cl]");if(!a)return;const i=a.dataset.cl,o=x.find(d=>d.id===a.dataset.id);if(i==="toggle"&&o)o.done=a.checked,te(),fe(()=>kn(o.id,o.done),!1);else if(i==="edit"&&o&&(a.tagName==="BUTTON"||s.detail===2))s.preventDefault(),_=o.id,te();else if(i==="cancel")_=null,te();else if(i==="save"&&o){const d=z.querySelector(".cl-edit").value.trim();_=null,d&&d!==o.item?fe(()=>Sn(e.id,o,d,x.indexOf(o))):te()}else if(i==="del"&&o)fe(()=>Ln(o.id));else if(i==="up"||i==="down"){const d=Number(a.dataset.i),L=i==="up"?d-1:d+1;if(L<0||L>=x.length)return;[x[d],x[L]]=[x[L],x[d]],te(),fe(()=>An(e.id,x.map(S=>S.id)))}}),z.addEventListener("dblclick",s=>{const a=s.target.closest(".cl-text");a&&(s.preventDefault(),_=a.dataset.id??null,te())}),z.addEventListener("keydown",s=>{var i;s.target.classList.contains("cl-edit")&&(s.key==="Enter"?(s.preventDefault(),(i=z.querySelector('[data-cl="save"]'))==null||i.click()):s.key==="Escape"&&(_=null,te()))}),z.addEventListener("submit",s=>{s.preventDefault();const a=z.querySelector("#cl-new"),i=a.value.trim();if(!i)return a.focus();fe(()=>Tn(e.id,i,x.length)).then(()=>{var o;return(o=z.querySelector("#cl-new"))==null?void 0:o.focus()})}),ot(e.id).then(s=>{x=s,Ue()}).catch(()=>{});const K=t.querySelector("#subtasks");let re=[],w=!1,qe=null;function Vt(){const s=t.querySelector("#sub-count");if(!s)return;const a=re.filter(i=>i.phase==="done"||/^erledigt$/i.test(i.status??"")).length;s.textContent=re.length?`${a}/${re.length}`:""}function et(){if(K&&(K.innerHTML=`
      <div class="sub-list">
        ${re.map(s=>{const a=Ne(s.due),i=s.phase==="done"||/^erledigt$/i.test(s.status??"");return`
            <div class="sub-item${i?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${l(s.id)}" title="${i?"Erledigt":s.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${i||s.phase==="pending"?" disabled":""}>${i?"✓":s.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${l(s.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${l(s.title)}</span>
                <span class="task-meta"><span class="num">#${s.number}</span>
                  <span class="badge due-${a.level}">${l(a.text)}</span>
                  ${s.status?`<span class="badge ${Pe(s.status)}">${l(s.status)}</span>`:""}
                  ${s.responsible?`<span class="who">${l(s.responsible)}</span>`:""}</span>
              </button>
              ${qe===s.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${l(s.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${l(s.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${w?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${Je(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,Vt(),w)){const s=dt(K.querySelector("#sub-assignee"));Promise.all([rt(),Ze()]).then(([a,i])=>s.setUsers(a,i.id)).catch(h),K.querySelector("#sub-name").focus(),K.querySelector("#sub-form").addEventListener("submit",async a=>{a.preventDefault();const i=s.selected();if(!i)return s.focus();const o=K.querySelector("#sub-form button[type=submit]");o.disabled=!0;try{const d=await wn(e.id,{name:K.querySelector("#sub-name").value.trim(),dueAt:K.querySelector("#sub-due").value,assigneeId:i.id});w=!1,b(`Unteraufgabe #${d.number} angelegt.`),f(),await tt()}catch(d){h(d),o.disabled=!1}})}}async function tt(){if(K)try{re=await ss(e.id),et()}catch(s){K.innerHTML=`<div class="error">${l(H(s))}</div>`}}K==null||K.addEventListener("click",async s=>{const a=s.target.closest("[data-sub]");if(!a)return;const i=a.dataset.sub,o=re.find(d=>d.id===a.dataset.id);if(i==="form-open"||i==="form-cancel")w=i==="form-open",et();else if(i==="open"&&o)await Ht(t,o,()=>void Ht(t,e,n,void 0,u),void 0,u,e);else if(i==="finish"&&o){a.setAttribute("disabled","");try{await es(o.id);const d=await ns(o.id);if(d.phase==="done"){const S=(await qt()).find(I=>/^erledigt$/i.test(I.name));S&&await At(o.id,S.id).catch(()=>{})}b(d.phase==="pending"?`#${o.number} abgeschlossen – wartet auf Bestätigung.`:`#${o.number} erledigt.`),f()}catch(d){h(d)}await tt()}else if(i==="unlink"&&o)qe=o.id,et();else if(i==="unlink-no")qe=null,et();else if(i==="unlink-ok"&&o){qe=null;try{await hn(o.id,e.id),b(`#${o.number} ist jetzt eine eigenständige Aufgabe.`),f()}catch(d){h(d)}await tt()}}),K&&ss(e.id).then(s=>{re=s,Vt()}).catch(()=>{}),(Zt=t.querySelector("#to-parent"))==null||Zt.addEventListener("click",n);const me=p("#files");let we=[],$t=0,he=[];const nn=(s,a)=>a?"🖼️":s==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(s)?"📘":/^(xlsx?|csv|ods)$/.test(s)?"📗":/^(pptx?|odp)$/.test(s)?"📙":/^(zip|rar|7z|gz|tar)$/.test(s)?"🗜️":/^(eml|msg)$/.test(s)?"✉️":/^(txt|log|xml|json)$/.test(s)?"📄":"📎";function Rt(){p("#files-count").textContent=we.length?`(${we.length})`:""}function st(){me.innerHTML=`
      <div class="files-tools">
        ${he.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${he.map((s,a)=>`<span class="file-chip">📎 <span class="ellipsis">${l(s.name)}</span> <span class="hint">${ct(s.size)}</span><button type="button" data-rm-up="${a}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${we.map(s=>`
          <button type="button" class="file-row" data-file="${l(s.id)}" title="${l(s.name)} öffnen">
            ${s.isImage&&s.thumb?`<img class="file-thumb" src="${l(s.thumb)}" alt="">`:`<span class="file-icon">${nn(s.ext,s.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${l(s.name)}</span>
              <span class="file-meta">${[s.size?ct(s.size):"",s.uploadedBy?`von ${l(s.uploadedBy)}`:"",s.uploadedAt?ut(s.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${s.commentText?`<span class="file-comment">„${l(s.commentText)}${s.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Rt()}async function Ke(){try{we=await It(e.id),$t=Date.now(),st()}catch(s){me.innerHTML=`<div class="error">${l(H(s))}</div>`}}async function an(s){if(Date.now()-$t>20*6e4&&(await Ke(),s=we.find(a=>a.id===s.id&&a.name===s.name)??s),!s.url)return h(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));Lt(s.url)}me.addEventListener("click",s=>{const a=s.target,i=a.closest("[data-file]");if(i){const d=we.find(L=>L.id===i.dataset.file);d&&an(d);return}const o=a.closest("[data-rm-up]");o?(he.splice(Number(o.dataset.rmUp),1),st()):a.closest("#upload-cancel")&&(he=[],st())}),me.addEventListener("change",s=>{var i;const a=s.target;a.id==="upload-input"&&(he=Array.from(a.files??[]),st(),(i=me.querySelector("#upload-note"))==null||i.focus())}),me.addEventListener("submit",async s=>{s.preventDefault();const a=me.querySelector("#upload-form button[type=submit]"),i=me.querySelector("#upload-msg"),o=me.querySelector("#upload-note").value.trim();a.disabled=!0;try{const d=he.length;await Ct(e.messageId,{note:o||`${d===1?"Datei":`${d} Dateien`} hochgeladen: ${he.map(L=>L.name).join(", ")}`,files:he},L=>i.innerHTML=`<p class="hint">${l(L)}</p>`),he=[],b(`${d===1?"Datei":`${d} Dateien`} hochgeladen.`),f(),await Ke()}catch(d){i.innerHTML=`<div class="error">${l(H(d))}</div>`,a.disabled=!1}}),It(e.id).then(s=>{we=s,$t=Date.now(),Rt()}).catch(()=>{});const ke=p("#title-box");function ce(s=!1){var i;const a=k?k.includes("edit")&&e.phase==="open":as(e,m);if(s){ke.innerHTML=`
        <form class="title-edit" id="title-form">
          <input id="title-input" maxlength="255" value="${l(e.title)}" aria-label="Titel der Aufgabe">
          <div class="row-btns"><button class="primary small" type="submit">Speichern</button><button class="small" type="button" id="title-cancel">Abbrechen</button></div>
        </form>`;const o=ke.querySelector("#title-input");o.focus(),o.select(),ke.querySelector("#title-cancel").addEventListener("click",()=>ce()),o.addEventListener("keydown",d=>{d.key==="Escape"&&ce()}),ke.querySelector("#title-form").addEventListener("submit",async d=>{d.preventDefault();const L=o.value.trim();if(!L)return o.focus();if(L===e.title)return ce();const S=ke.querySelector("button[type=submit]");S.disabled=!0;try{await fn(e.id,L),e.title=L,e.raw.TaskName=L,b("Titel geändert."),f(),ce()}catch(I){S.disabled=!1,h(I)}});return}ke.innerHTML=`<h2 class="task-title">${l(e.title)}${a?' <button type="button" class="icon-btn sm title-edit-btn" id="title-edit" title="Titel ändern" aria-label="Titel ändern">✎</button>':""}</h2>`,(i=ke.querySelector("#title-edit"))==null||i.addEventListener("click",()=>ce(!0))}ce();function nt(){var I;const s=Ne(e.due),a=(I=Xt.find(V=>V.value===(e.priority??"").toLowerCase()))==null?void 0:I.label;p("#sum-tiles").innerHTML=[e.status?`<span class="badge ${Pe(e.status)}">${l(e.status)}</span>`:"",e.phase==="pending"?'<span class="badge pending">⏳ wartet auf Bestätigung</span>':e.phase==="done"?'<span class="badge ok">✓ erledigt</span>':"",e.due?`<span class="badge due-${s.level}">${s.level==="overdue"?"⚠ ":""}fällig ${e.due.toLocaleDateString("de-DE")} · ${l(s.text)}</span>`:"",a?`<span>Priorität <strong>${l(a)}</strong></span>`:"",e.responsible?`<span>👤 ${l(e.responsible)}</span>`:""].filter(Boolean).join("")+`<span class="sum-acts">${[...T.querySelectorAll("button[data-act]")].map(V=>`<button type="button" class="small${V.classList.contains("primary")?" primary":""}" data-sum-act="${l(V.dataset.act)}" title="${l(V.title)}"${V.disabled?" disabled":""}>${l(V.textContent.trim())}</button>`).join("")}</span>`;const i=P.querySelectorAll(".people-row"),o=V=>{var ge;return((ge=i[V])==null?void 0:ge.querySelectorAll(".person-chip").length)??0},d=o(0),L=o(1),S=!!lt(e.description??"").trim();p("#sum-info").innerHTML=`
      <span>👥 ${i.length?d+L?`${d} ${d===1?"Admin":"Admins"}, ${L} Teilnehmer`:"niemand beteiligt":"Beteiligte"}</span>
      <span>📝 ${S?l(lt(e.description).slice(0,80))+(lt(e.description).length>80?" …":""):"keine Beschreibung"}</span>`}let _t;const ln=new MutationObserver(()=>{clearTimeout(_t),_t=window.setTimeout(nt,50)});for(const s of["#fold-tiles .tiles","#people","#desc"])ln.observe(p(s),{subtree:!0,childList:!0,attributes:!0,characterData:!0});p("#prio").addEventListener("change",()=>setTimeout(nt,1500)),p("#sum-tiles").addEventListener("click",s=>{var i;const a=s.target.closest("[data-sum-act]");a&&(s.preventDefault(),s.stopPropagation(),(i=T.querySelector(`button[data-act="${a.dataset.sumAct}"]`))==null||i.click())}),p("#status").addEventListener("change",()=>setTimeout(nt,1500));const Ie=p("#desc");function be(s=!1){var o;const a=k?k.includes("edit")&&e.phase==="open":as(e,m);if(s){Ie.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${l(lt(e.description))}</textarea>
        ${bn(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const d=Ie.querySelector("#desc-input");d.focus(),Ie.querySelector("#desc-cancel").addEventListener("click",()=>be()),Ie.querySelector("#desc-save").addEventListener("click",async()=>{const L=d.value.trim()?xt(d.value):"";try{await ws(e.id,L),e.description=L,e.raw.TaskDescription=L,b("Beschreibung gespeichert."),f(),be()}catch(S){h(S)}});return}const i=e.description.trim()?`<div class="desc-body">${ks(e.description)}</div>`:`<div class="hint">${a?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;Ie.innerHTML=`${i}${a?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(o=Ie.querySelector("#desc-edit"))==null||o.addEventListener("click",()=>be(!0)),nt()}be();const Se=p("#comments");let C=null;function xe(){const s=t.querySelector("#composer"),a=t.querySelector(".tab-panel");if(!s||!a)return;s.parentElement!==a&&a.insertBefore(s,t.querySelector("#comments")),s.classList.remove("is-reply");const i=s.querySelector(".composer-head");i&&(i.innerHTML="✍ Neuer Kommentar")}function Yt(){const s=t.querySelector("#composer"),a=C&&t.querySelector(`#comments [data-slot="${CSS.escape(C.id)}"]`);if(!s||!a||!C)return C=null,xe();a.appendChild(s),s.classList.add("is-reply");const i=s.querySelector(".composer-head");i&&(i.innerHTML=`↩ Antwort an <strong>${l(C.name)}</strong> <button type="button" class="link small" id="reply-cancel" title="Doch als neuen Kommentar schreiben">✕ abbrechen</button>`)}async function Le(s=!1){var a;try{const i=[];for(let S=1;S<=10;S++){const I=await Ss(e.messageId,S,50);if(i.push(...I.comments),!I.hasMore)break}const o=ra()==="newest";i.sort((S,I)=>{var V,ge;return((((V=S.createdAt)==null?void 0:V.getTime())??0)-(((ge=I.createdAt)==null?void 0:ge.getTime())??0))*(o?-1:1)});const d=i.filter(S=>{var I;return!((I=S.raw)!=null&&I.type)||S.raw.type==="text"}).length;p("#count").textContent=d?`(${d})`:"";const L=`<div class="thread-tools">
          <span class="thread-title">Verlauf${d?` · ${d} ${d===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${o?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;xe(),Se.innerHTML=i.length?L+da(i).map(S=>Array.isArray(S)?ua(S):Ft(S)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(a=Se.querySelector("#order-toggle"))==null||a.addEventListener("click",()=>{ca(o?"oldest":"newest"),Le()}),Se.querySelectorAll(".bubble > .body").forEach(S=>{if(S.scrollHeight<=320)return;S.classList.add("clamped");const I=document.createElement("button");I.type="button",I.className="link small more",I.textContent="Mehr anzeigen ▾",I.addEventListener("click",()=>{const V=S.classList.toggle("clamped");I.textContent=V?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),S.after(I)}),C&&Yt(),s&&(o?Se.scrollIntoView({block:"start"}):(Se.lastElementChild??Se).scrollIntoView({block:"end"}))}catch(i){Se.innerHTML=`<div class="error">${l(H(i))}</div>`}}const at=p("#composer"),de=p("#comment"),wt=p("#file-input");p("#outlook-btn").addEventListener("click",()=>qs({task:e,parentId:C==null?void 0:C.id,parentName:C==null?void 0:C.name,onClose:s=>{s&&(C=null,xe(),f(),Le(!0),Ke())}})),p("#chat-btn").addEventListener("click",()=>As({task:e,parentId:C==null?void 0:C.id,parentName:C==null?void 0:C.name,onClose:s=>{s&&(C=null,xe(),f(),Le(!0),Ke())}}));const Gt=p("#file-chips"),Ce=p("#comment-msg"),kt=p("#mail-btn"),J=p("#mail-menu");let Ae=[],B=null;const it=(s,a,i,o,d="")=>`<span class="file-chip ${d}">${s} <span class="ellipsis">${l(a)}</span>${i?` <span class="hint">${ct(i)}</span>`:""}<button type="button" data-rm="${o}" aria-label="Entfernen">×</button></span>`;function We(){const s=B;Gt.innerHTML=[...s!=null&&s.text?[it("📧",`Mailtext: ${s.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...s!=null&&s.eml?[it("📄",s.eml.name,s.eml.blob.size,"mail-eml","mail")]:[],...((s==null?void 0:s.atts)??[]).map((a,i)=>it("📎",a.name,a.size,`mail-att:${i}`)),...Ae.map((a,i)=>it("📎",a.name,a.size,`file:${i}`))].join("")}const on=s=>((!B||B.mail.key!==s.key)&&(B={mail:s,text:!1,atts:[]}),B);function St(){const s=Be();kt.hidden=!s||Ns(s.key).includes(e.number),s||(J.hidden=!0),B&&(!s||s.key!==B.mail.key)&&(B=null,We())}function Jt(){var L;const s=Be();if(!s)return;const a=(B==null?void 0:B.mail.key)===s.key?B:null,i=s.attachments.filter(S=>!S.isInline),o=Bn(),d=(S,I,V,ge,rn=!1,Qt="")=>`<button type="button" role="menuitem" data-act="${S}"${rn||ge?" disabled":""}${Qt?` title="${l(Qt)}"`:""}>
        <span>${I}</span><span class="grow">${l(V)}</span>${ge?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;J.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${l(s.subject||"(ohne Betreff)")}</div>
      ${d("text","📧","Mailtext als Inhalt einfügen",!!(a!=null&&a.text))}
      ${d("eml","📄","Mail als Datei anhängen (.eml)",!!(a!=null&&a.eml),!o,o?"":"In dieser Outlook-Version nicht verfügbar")}
      ${d("atts","📎",`Anhänge der Mail übernehmen (${i.length})`,!!a&&i.length>0&&i.every(S=>a.atts.includes(S)),i.length===0,i.length?"":"Die Mail hat keine Anhänge")}`,J.hidden=!1,(L=J.querySelector("button:not([disabled])"))==null||L.focus()}kt.addEventListener("click",s=>{s.stopPropagation(),J.hidden?Jt():J.hidden=!0}),document.addEventListener("click",s=>{!J.hidden&&!J.contains(s.target)&&(J.hidden=!0)}),J.addEventListener("keydown",s=>{s.key==="Escape"&&(J.hidden=!0,kt.focus())}),J.addEventListener("click",async s=>{const a=s.target.closest("button[data-act]"),i=Be();if(!a||!i)return;s.stopPropagation();const o=on(i);if(a.dataset.act==="text")o.text=!0;else if(a.dataset.act==="atts")o.atts=i.attachments.filter(d=>!d.isInline);else if(a.dataset.act==="eml"){a.disabled=!0,a.querySelector(".grow").textContent="Mail wird geladen …";try{o.eml=await Nn(i)}catch(d){Ce.innerHTML=`<div class="error">${l(H(d))}</div>`}}J.hidden=!0,We(),de.focus()}),wt.addEventListener("change",()=>{Ae=[...Ae,...Array.from(wt.files??[])],wt.value="",We()}),Gt.addEventListener("click",s=>{var d;const a=(d=s.target.closest("[data-rm]"))==null?void 0:d.dataset.rm;if(!a)return;const[i,o]=a.split(":");i==="file"?Ae.splice(Number(o),1):B&&(i==="mail-text"?B.text=!1:i==="mail-eml"?B.eml=void 0:i==="mail-att"&&B.atts.splice(Number(o),1),!B.text&&!B.eml&&!B.atts.length&&(B=null)),We()}),de.addEventListener("input",()=>{de.style.height="auto",de.style.height=`${Math.min(Math.max(de.scrollHeight,72),260)}px`}),de.addEventListener("keydown",s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&at.requestSubmit()}),at.addEventListener("submit",async s=>{s.preventDefault();const a=de.value,i=B;if(!a.trim()&&!Ae.length&&!i)return de.focus();const o=at.querySelector("button[type=submit]");o.disabled=!0,Ce.innerHTML="";try{const d=await Ct(e.messageId,{note:a,mailText:i!=null&&i.text?i.mail:void 0,eml:i==null?void 0:i.eml,mailAttachments:i==null?void 0:i.atts,files:Ae,parentId:C==null?void 0:C.id},I=>Ce.innerHTML=`<p class="hint">${l(I)}</p>`);i&&(Ds(i.mail.key,e.number),Ot(i.mail.conversationId,e)),de.value="",de.style.height="auto",Ae=[],B=null,We(),St();const L=Pn(d,!!i),S=C?i?L.replace(/^Mail/,"Antwort mit Mail"):L.replace(/^Kommentar/,"Antwort"):L;Ce.innerHTML=`<div class="ok">${l(S)}</div>`,C=null,xe(),setTimeout(()=>Ce.innerHTML="",6e3),f(),await Le(!0)}catch(d){Ce.innerHTML=`<div class="error">${l(H(d))}</div>`}finally{o.disabled=!1}}),St(),mt=St,_e=()=>{at.scrollIntoView({block:"end"}),Jt()},await Le(),e.unread>0&&gn(e.messageId).then(()=>{e.unread=0,f()}).catch(()=>{})}let He=[];const us=t=>({taskId:t.id,messageId:t.messageId,number:t.number,title:t.title});function Mt(t,e,n=""){const r=Ne(t.due);return`
    <button type="button" class="task-row card due-${r.level}${e?" is-selected":""}" data-pick="${l(t.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${l(t.title)}</span>
        <span class="task-meta">
          <span class="num">#${t.number}</span>
          <span class="badge due-${r.level}">${l(r.text)}</span>
          ${t.status?`<span class="badge ${Pe(t.status)}">${l(t.status)}</span>`:""}
          ${n?`<span class="badge suggest">${l(n)}</span>`:""}
        </span>
      </span>
    </button>`}async function pa(t){const e=document.createElement("div");if(t.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!jn()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{He=(await ze()).filter(f=>!pe(f))}catch(f){e.innerHTML=`<div class="pad"><div class="error">${l(H(f))}</div></div>`;return}let n=await zn()??{tasks:[],withAttachments:!0};const r=Ls(He,await Fn(),On());let u=!1;!n.tasks.length&&r.length&&!await Un()&&(n={...n,tasks:[us(r[0].task)]},await is(n).catch(()=>{}),ls({chosen:n.tasks}),u=!0);let c="";const m=new Map,p=new Set,A=()=>{for(const f of n.tasks)p.has(f.taskId)||(p.add(f.taskId),$s(f.messageId).then(v=>m.set(f.taskId,v)).catch(()=>{}).finally(()=>b()))},$=f=>n.tasks.some(v=>v.taskId===f),b=()=>{A();const f=c.trim().toLowerCase(),v=f?He.filter(k=>k.title.toLowerCase().includes(f)||String(k.number).includes(f.replace(/^#/,""))).slice(0,40):He.filter(k=>!r.some(R=>R.task.id===k.id)&&!$(k.id)).slice(0,40),T=n.tasks.map(k=>He.find(R=>R.id===k.taskId)??null),O=r.filter(k=>!$(k.task.id)),N=n.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${N?`<div class="compose-choice">
              <div class="hint">${u?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${N} ${N===1?"Aufgabe":"Aufgaben"}:</div>
              ${T.map((k,R)=>{const U=n.tasks[R],se=m.get(U.taskId);return`${k?Mt(k,!0):`<div class="card pad">#${U.number} ${l(U.title)}</div>`}
                    <label class="reply-target">Posten als <select data-parent-for="${l(U.taskId)}">
                      <option value="">neuer Kommentar</option>
                      ${(se??[]).map(ne=>`<option value="${l(ne.id)}"${ne.id===U.parentId?" selected":""}>↩ Antwort auf ${l(ne.label)}</option>`).join("")}
                    </select>${se?"":' <span class="hint">lädt …</span>'}</label>`}).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${N===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${n.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${O.length?`<h3 class="compose-sub">Vorschläge</h3>${O.map(k=>Mt(k.task,!1,k.why)).join("")}`:""}
        <h3 class="compose-sub">${N?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${l(c)}">
        <div class="compose-list">${v.map(k=>Mt(k,$(k.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${Wn()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},h=async f=>{try{await is(f),n=f,u=!1,ls({chosen:f.tasks}),b()}catch(v){const T=e.querySelector("#compose-msg");T&&(T.innerHTML=`<div class="error">${l(H(v))}</div>`)}};e.addEventListener("click",f=>{const v=f.target,T=v.closest("[data-pick]");if(T){const O=T.dataset.pick,N=He.find(k=>k.id===O);if(!N)return;h({...n,tasks:$(O)?n.tasks.filter(k=>k.taskId!==O):[...n.tasks,us(N)]})}else v.closest("#clear-choice")&&h({...n,tasks:[]})}),e.addEventListener("change",f=>{const v=f.target;v.id==="with-att"&&h({...n,withAttachments:v.checked}),v.dataset.parentFor&&h({...n,tasks:n.tasks.map(T=>T.taskId===v.dataset.parentFor?{...T,parentId:v.value||void 0}:T)}),v.id==="auto-suggest"&&Kn(v.checked)}),e.addEventListener("input",f=>{const v=f.target;if(v.id!=="search")return;c=v.value;const T=v.selectionStart;b();const O=e.querySelector("#search");O.focus(),O.setSelectionRange(T,T)}),b()}const Bs="3c556596-e171-4fb1-9738-211b440b31a6",js=["User.Read","TeamsActivity.Send"],zs="mm-addin-teams-notified",Os="mm-addin-teams-notify",Fs=()=>Ms==="Teams"&&ta();function Us(){try{return localStorage.getItem(Os)==="on"}catch{return!1}}function ma(t){try{localStorage.setItem(Os,t?"on":"off")}catch{}}function Ks(){try{return JSON.parse(localStorage.getItem(zs)??"{}")}catch{return{}}}function Ws(t){try{localStorage.setItem(zs,JSON.stringify(t))}catch{}}const ha=t=>`https://teams.microsoft.com/l/entity/${Bs}/mm-tasks?context=${encodeURIComponent(JSON.stringify({subEntityId:t}))}`;async function Vs(t,e,n,r,u){var m,p;const c=await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(e)}/teamwork/sendActivityNotification`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({topic:{source:"text",value:n,webUrl:r},activityType:"newMessage",previewText:{content:u.slice(0,150)},templateParameters:[{name:"task",value:n}]})});if(!c.ok){let A=String(c.status);try{A=((p=(m=await c.json())==null?void 0:m.error)==null?void 0:p.message)??A}catch{}throw new Error(`Teams-Aktivität: ${A}`)}}async function fa(t){try{const n=(await Ss(t.messageId,1,10)).comments.filter(u=>{var c;return!((c=u.raw)!=null&&c.type)||u.raw.type==="text"}).sort((u,c)=>{var m,p;return(((m=c.createdAt)==null?void 0:m.getTime())??0)-(((p=u.createdAt)==null?void 0:p.getTime())??0)})[0],r=((n==null?void 0:n.html)??"").replace(/<[^>]*>/g," ").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();return n?`${n.author}: ${r||(n.files.length?`📎 ${n.files[0].name}`:"neue Nachricht")}`:`${t.unread} neue Nachricht(en)`}catch{return`${t.unread} neue Nachricht(en)`}}async function ba(t){if(!Fs()||!Us()||!t.length)return;const e=Ks(),n=t.filter(r=>r.unread>(e[r.id]??0));if(n.length){try{const r=await pt(!1,js),u=await Ts();for(const c of n.slice(0,5))await Vs(r,u.id,`#${c.number} ${c.title}`.slice(0,120),ha(c.id),await fa(c)),e[c.id]=c.unread}catch(r){console.warn("[MyMonolith] Teams-Aktivität nicht gesendet:",r)}Ws(e)}}function ga(t){const e=Ks();let n=!1;for(const r of Object.keys(e)){const u=t.find(c=>c.id===r);(!u||u.unread<e[r])&&(u&&u.unread?e[r]=u.unread:delete e[r],n=!0)}n&&Ws(e)}async function va(){const t=await pt(!0,js),e=await Ts();await Vs(t,e.id,"MyMonolith (Test)",`https://teams.microsoft.com/l/entity/${Bs}/mm-tasks`,"Test: Teams-Hinweise für MyMonolith sind eingeschaltet."),ma(!0)}const ya=t=>t.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function $a(t,e,n,r){const u=new Date(Date.now()+6048e5);t.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${l(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${l(e?ya(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${Je(u)}" min="${Je(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${Vn(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const c=h=>t.querySelector(h),m=c("#f-new"),p=t.querySelector("#with-mail"),A=c("#new-msg"),$=h=>A.innerHTML=h;c("#cancel").addEventListener("click",r),p==null||p.addEventListener("change",()=>c("#atts").hidden=!p.checked);const b=dt(c("#assignee"));Promise.all([rt(),Ze()]).then(([h,f])=>b.setUsers(h,f.id)).catch(h=>$(`<div class="error">Personenliste: ${l(H(h))}</div>`)),c("#name").focus(),m.addEventListener("submit",async h=>{h.preventDefault();const f=b.selected();if(!f){$('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),b.focus();return}const v=m.querySelector("button[type=submit]");v.disabled=!0;try{$('<p class="hint">Aufgabe wird angelegt …</p>');const T=await vs({name:c("#name").value.trim(),dueAt:c("#due").value,assigneeId:f.id}),O=c("#desc").value;let N=`Aufgabe #${T.number||""} angelegt.`;if(O.trim())try{await ws(T.id,xt(O))}catch{await Mn(T.messageId,xt(O)).catch(()=>{})}try{if(e&&(p!=null&&p.checked)){const k=Rn(c("#atts"),e),R=await _n(T.messageId,e,k,"",U=>$(`<p class="hint">${l(U)}</p>`));N+=" "+Yn(k.length,R.shortened),Ds(e.key,T.number),Ot(e.conversationId,{id:T.id,number:T.number,title:c("#name").value.trim()})}}catch(k){N+=` Hinweis: ${H(k)}`}n(T,N)}catch(T){$(`<div class="error">${l(H(T))}</div>`),v.disabled=!1}})}Es();const M=document.getElementById("app"),Ut=document.getElementById("logout-link");function wa(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function vt(t){Ha(),Ut.hidden=!0;const e=In()??wa();M.innerHTML=`
    <form id="f-email" class="form pad">
      <p>Melden Sie sich einmalig an. Danach bleibt das Add-in angemeldet.</p>
      ${t?`<div class="error">${l(t)}</div>`:""}
      <label>E-Mail-Adresse<input id="email" type="email" required autocomplete="email" value="${l(e)}"></label>
      <button class="primary block" type="submit">Code per E-Mail anfordern</button>
    </form>
    <form id="f-code" class="form pad" hidden>
      <p>Wir haben einen Code an <strong id="sent-to"></strong> gesendet.</p>
      <label>Code<input id="code" inputmode="numeric" autocomplete="one-time-code" required></label>
      <button class="primary block" type="submit">Anmelden</button>
      <button type="button" class="link" id="back">Andere E-Mail-Adresse</button>
      <div id="code-error"></div>
    </form>`;const n=M.querySelector("#f-email"),r=M.querySelector("#f-code"),u=M.querySelector("#email"),c=M.querySelector("#code"),m=M.querySelector("#code-error");n.addEventListener("submit",async p=>{p.preventDefault();const A=n.querySelector("button");A.disabled=!0;try{await xn(u.value.trim()),M.querySelector("#sent-to").textContent=u.value.trim(),n.hidden=!0,r.hidden=!1,c.focus()}catch($){vt(H($))}finally{A.disabled=!1}}),r.addEventListener("submit",async p=>{p.preventDefault();const A=r.querySelector("button.primary");A.disabled=!0,m.innerHTML="";try{await Cn(u.value.trim(),c.value.trim()),await ye(),await tn()}catch($){m.innerHTML=`<div class="error">${l(H($))}</div>`}finally{A.disabled=!1}}),M.querySelector("#back").addEventListener("click",()=>{r.hidden=!0,n.hidden=!1})}const Rs="mm-addin-filters",ht=(t="")=>({time:"all",owner:"all",unread:!1,status:"",q:t});function ka(){try{return{...ht(),...JSON.parse(localStorage.getItem(Rs)??"{}"),q:""}}catch{return ht()}}function ps(t){try{localStorage.setItem(Rs,JSON.stringify({...t,q:""}))}catch{}}let F=[],Ye=null,Dt=[],Nt=[];const Qe=t=>/erledigt/i.test(t.status),Kt=()=>Qe(q)?Ye??[]:F;async function ms(){if(Ye)return;const t=M.querySelector("#list");t&&(t.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await ze("status_id=7"),n=new Set;Ye=[...e,...Dt].filter(r=>!n.has(r.id)&&n.add(r.id))}catch(e){Ye=[...Dt],t&&(t.innerHTML=`<div class="error">${l(H(e))}</div>`)}}let Z,q=ka(),ve=!1,ft=!1;function Et(){const t=new Date;return t.setHours(0,0,0,0),t}const Ge={overdue:t=>!pe(t)&&!!t.due&&t.due<Et(),week:t=>!pe(t)&&!!t.due&&t.due>=Et()&&t.due<new Date(Et().getTime()+7*864e5),assigned:t=>(Z==null?void 0:Z.userId)!=null&&t.responsibleUserId===Z.userId,created:t=>(Z==null?void 0:Z.userId)!=null&&t.creatorUserId===Z.userId,unread:t=>t.unread>0};function Pt(t,e){const n=e.q.trim().toLowerCase();return t.filter(r=>(e.time==="all"||Ge[e.time](r))&&(e.owner==="all"||Ge[e.owner](r))&&(!e.unread||Ge.unread(r))&&(!e.status||Qe(e)||r.status===e.status)&&(!n||r.title.toLowerCase().includes(n)||String(r.number).includes(n)))}const _s=t=>t.time!=="all"||t.owner!=="all"||t.unread||!!t.status,Ys=new Map,Gs=new Map;async function Sa(t){const e=[...t],n=async()=>{for(let r=e.shift();r;r=e.shift())try{const[u,c]=await Promise.all([ot(r.id),It(r.id).catch(()=>[])]);Ys.set(r.id,{done:u.filter(m=>m.done).length,total:u.length}),Gs.set(r.id,c.length)}catch{}};if(await Promise.all([n(),n(),n(),n()]),M.querySelector("#list")){const r=window.scrollY;ue(),window.scrollTo(0,r)}}function La(t){const e=pe(t),n=e?{text:t.due?`✓ fällig war ${t.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:Ne(t.due),r=(Z==null?void 0:Z.userId)!=null&&t.responsibleUserId===Z.userId,u=Ys.get(t.id),c=Hn(t),m=Gs.get(t.id),p=[`<span class="num" title="Aufgabennummer">#${t.number}</span>`,u&&u.total?`<span class="${u.done===u.total?"complete":""}" title="Checkliste: ${u.done} von ${u.total} erledigt">☑ ${u.done}/${u.total}</span>`:"",c.total?`<span class="${c.done===c.total?"complete":""}" title="Unteraufgaben: ${c.done} von ${c.total} erledigt">🧩 ${c.done}/${c.total}</span>`:"",m?`<span title="${m} Dateien">📎 ${m}</span>`:"",`<span title="${t.comments} Kommentare">💬 ${t.comments}</span>`].filter(Boolean).join("");return`
    <button class="task-row card due-${n.level}${e?" is-done":""}${jt.has(t.id)?" fresh":""}" data-id="${l(t.id)}">
      <span class="task-main">
        <span class="task-name">${l(t.title)}</span>
        <span class="task-meta">
          <span class="badge due-${n.level}">${l(n.text)}</span>
          ${t.status?`<span class="badge ${Pe(t.status)}">${l(t.status)}</span>`:""}
          ${t.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${l(t.creator??"den Ersteller")}">⏳ Bestätigung</span>`:""}
        </span>
      </span>
      <span class="task-side">
        ${t.unread?`<span class="unread-dot" title="${t.unread} ungelesene Nachrichten">${t.unread}</span>`:""}
        <span class="side-info">${p}</span>
      </span>
      ${t.responsible&&!r?t.responsiblePicture?`<img class="avatar who-avatar" src="${l(t.responsiblePicture)}" alt="${l(t.responsible)}" title="Verantwortlich: ${l(t.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${l(t.responsible)}">${l(gt(t.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function Aa(t){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const r of t)r.due?Ge.overdue(r)?e.Überfällig.push(r):Ge.week(r)?e["Nächste 7 Tage"].push(r):e.Später.push(r):e["Ohne Fälligkeit"].push(r);const n=(r,u)=>{var c,m;return(((c=r.due)==null?void 0:c.getTime())??0)-(((m=u.due)==null?void 0:m.getTime())??0)};return Object.entries(e).filter(([,r])=>r.length).map(([r,u])=>[r,u.sort(n)])}function De(t,e,n,r,u=""){return`<button class="chip ${u}${e?" active":""}" ${r} aria-pressed="${e}">${l(t)} <span class="count">${n}</span></button>`}function Ta(){const t=M.querySelector("#filters");if(!t)return;const e=u=>Pt(Kt(),{...q,...u}).length,n=F.map(u=>u.status).filter(Boolean),r=[...new Set([...Nt,...n,...q.status?[q.status]:[]])];t.innerHTML=`
    ${De("Alle",!_s(q),Pt(F,ht(q.q)).length,'data-all="1"')}
    ${De("⚠ Überfällig",q.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${De("Diese Woche",q.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${De("👤 Mir",q.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned" title="Mir zugewiesen"')}
    ${De("✎ Von mir",q.owner==="created",e({owner:"created"}),'data-owner="created" title="Von mir erstellt"')}
    ${De("● Neu",q.unread,e({unread:!0}),'data-unread="1" title="Mit ungelesenen Nachrichten"',"tone-brand")}
    <select id="status-filter" class="chip-select${q.status?" active":""}" aria-label="Status filtern">
      <option value="">Status: alle</option>
      ${r.map(u=>`<option${u===q.status?" selected":""}>${l(u)}</option>`).join("")}
    </select>`}const Js="mm-addin-collapsed",Zs="mm-addin-density";function Ma(){try{return new Set(JSON.parse(localStorage.getItem(Js)??"[]"))}catch{return new Set}}const Re=Ma();function Ea(t){Re.has(t)?Re.delete(t):Re.add(t);try{localStorage.setItem(Js,JSON.stringify([...Re]))}catch{}}function je(){try{return localStorage.getItem(Zs)==="compact"}catch{return!1}}function qa(t){try{localStorage.setItem(Zs,t?"compact":"comfort")}catch{}}const Ia={Überfällig:"danger","Nächste 7 Tage":"warn",Später:"neutral","Ohne Fälligkeit":"neutral",Erledigt:"ok","Passt zur geöffneten Mail":"info"};function hs(t,e){const n=Re.has(t);return`<section class="group tone-${Ia[t]??"neutral"}${n?" closed":""}">
      <button type="button" class="group-head" data-group="${l(t)}" aria-expanded="${!n}">
        <span class="caret">${n?"▸":"▾"}</span> ${l(t)} <span class="count">${e.length}</span>
      </button>
      ${n?"":`<div class="group-body">${e.map(La).join("")}</div>`}
    </section>`}function ue(){var c;const t=M.querySelector("#list");if(!t)return;const e=Pt(Kt(),q),n=new Set((((c=Be())==null?void 0:c.subject)??"").match(/\d{4,}/g)??[]),r=F.filter(m=>n.has(String(m.number))),u=r.length?hs("Passt zur geöffneten Mail",r):"";t.innerHTML=u+(e.length?(Qe(q)?[["Erledigt",[...e].sort((m,p)=>{var A,$;return(((A=p.due)==null?void 0:A.getTime())??0)-((($=m.due)==null?void 0:$.getTime())??0)})]]:Aa(e)).map(([m,p])=>hs(m,p)).join(""):`<div class="empty">${_s(q)||q.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),t.classList.toggle("compact",je()),Ta()}function Qs(){const t=Be();return ve&&t?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${l(t.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    ${t&&Ns(t.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function Bt(){var e;const t=M.querySelector("#actions");t&&(t.innerHTML=Qs(),t.hidden=!t.innerHTML.trim()),(e=M.querySelector("#list"))==null||e.classList.toggle("picking",ve)}async function ye(t=!0){if(Ut.hidden=!1,document.body.classList.remove("plain-bg"),Gn())return pa(M);(t||!F.length)&&(M.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(Z??(Z=await Ze().catch(()=>{})),t||!F.length){const u=await ze();F=u.filter(c=>!pe(c)),Dt=u.filter(c=>pe(c)),Ye=null,Qe(q)&&await ms()}Nt.length||(Nt=(await qt().catch(()=>[])).map(u=>u.name)),ft=!1,en(),Ca(),t&&Sa(F)}catch(u){if(u instanceof qn&&u.status===401)return vt(u.message);M.innerHTML=`<div class="error">${l(H(u))}</div>`;return}const e=Qs();M.innerHTML=`
    <div class="view">
      <div class="sticky-head list-head">
        <div class="toolbar">
          <strong class="grow">Meine Aufgaben <span class="hint">${F.length}</span></strong>
          <button class="icon-tool" id="density" title="${je()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"}">${je()?"▤":"☰"}</button>
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
        ${Fs()&&!Us()?`<div class="notify-bar" id="notify-bar">🔔 Bei neuen Nachrichten einen Hinweis unter <b>Aktivität</b> in Teams bekommen?
              <button class="small primary" id="teams-notify">Einschalten</button></div>`:""}
        <div id="filters" class="quick-filters"></div>
        <div id="theme-menu" class="theme-menu" role="menu" hidden></div>
      </div>
      <div id="list" class="${ve?"picking":""}"></div>
    </div>`;const n=M.querySelector("#search");n.addEventListener("input",()=>{q.q=n.value,ue()});const r=M.querySelector("#filters");r.addEventListener("click",u=>{const c=u.target.closest("button");c&&(c.dataset.all?q=ht(q.q):c.dataset.time?q.time=q.time===c.dataset.time?"all":c.dataset.time:c.dataset.owner?q.owner=q.owner===c.dataset.owner?"all":c.dataset.owner:c.dataset.unread&&(q.unread=!q.unread),ps(q),ue())}),r.addEventListener("change",u=>{const c=u.target;c.id==="status-filter"&&(q.status=c.value,ps(q),Qe(q)?ms().then(ue):ue())}),M.querySelector("#list").addEventListener("click",u=>{const c=u.target.closest("[data-group]");if(c)return Ea(c.dataset.group),ue();const m=u.target.closest(".task-row"),p=Kt().find($=>$.id===(m==null?void 0:m.dataset.id))??F.find($=>$.id===(m==null?void 0:m.dataset.id));if(!p)return;const A=ve;ve=!1,Wt(p,void 0,A)}),ue()}async function Wt(t,e,n=!1){const r=window.scrollY;window.scrollTo(0,0),await Ht(M,t,()=>{ye(ft),window.scrollTo(0,r)},e,()=>ft=!0),n&&(_e==null||_e())}function fs(t){window.scrollTo(0,0),$a(M,t?Be():null,async(e,n)=>{F=(await ze().catch(()=>F)).filter(u=>!pe(u));const r=F.find(u=>u.id===e.id||e.number&&u.number===e.number);r?await Wt(r,n):(await ye(!1),M.insertAdjacentHTML("afterbegin",`<div class="ok">${l(n)}</div>`))},()=>void ye(!1))}document.addEventListener("click",t=>{const e=M.querySelector("#theme-menu"),n=t.composedPath().some(r=>r instanceof HTMLElement&&(r.id==="theme-menu"||r.id==="theme"));e&&!e.hidden&&!n&&(e.hidden=!0)});M.addEventListener("click",t=>{const e=t.target;if(e.closest("#new-task"))fs(!1);else if(e.closest("#from-chat"))As({tasks:F,onClose:n=>n&&void ye()});else if(e.closest("#from-mail"))qs({tasks:F,onClose:n=>n&&void ye()});else if(e.closest("#new-from-mail"))fs(!0);else if(e.closest("#refresh"))ye();else if(e.closest("#teams-notify")){const n=M.querySelector("#notify-bar"),r=e.closest("#teams-notify");r.disabled=!0,r.textContent="Wird eingeschaltet …",va().then(()=>n&&(n.innerHTML="✓ Teams-Hinweise sind an – eine Testmeldung ist unter <b>Aktivität</b> eingegangen."),u=>n&&(n.innerHTML=`<span class="error">Teams-Hinweise nicht möglich: ${l(H(u))}</span>`))}else if(e.closest("#density")){qa(!je());const n=M.querySelector("#density");n&&(n.textContent=je()?"▤":"☰",n.title=je()?"Ausführliche Ansicht":"Kompakte Ansicht (eine Zeile je Aufgabe)"),ue()}else if(e.closest("#theme")){const n=M.querySelector("#theme-menu");n&&(n.hidden=!n.hidden,n.hidden||(n.innerHTML=cs()))}else if(e.closest("#theme-menu button.opt")){const n=e.closest("#theme-menu button.opt"),r=n.dataset.mode?{mode:n.dataset.mode}:n.dataset.bg?{background:n.dataset.bg}:{accent:n.dataset.accent},u=sa(r);M.querySelector("#theme-menu").innerHTML=cs(u)}else if(e.closest("#sound")){oa(!Me());const n=M.querySelector("#sound");n&&(n.textContent=Me()?"🔔":"🔕",n.title=Me()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),Me()&&Cs()}else e.closest("#pick-for-mail")?(ve=!0,Bt()):e.closest("#pick-cancel")&&(ve=!1,Bt())});Ut.addEventListener("click",()=>{En(),vt()});const xa=6e4;let bt,Xs=new Map;const jt=new Set;function en(){Xs=new Map(F.map(t=>[t.id,t.unread]))}function Ca(){bt||(bt=window.setInterval(()=>void Da(),xa))}function Ha(){window.clearInterval(bt),bt=void 0}async function Da(){if(!zt()||document.hidden&&Ms!=="Teams")return;let t;try{t=(await ze()).filter(n=>!pe(n))}catch{return}const e=t.filter(n=>n.unread>(Xs.get(n.id)??0));if(F=t,en(),ga(t),!!e.length){ba(e),document.hidden||Cs();for(const n of e)jt.add(n.id);if(setTimeout(()=>{for(const n of e)jt.delete(n.id);M.querySelectorAll(".task-row.fresh").forEach(n=>n.classList.remove("fresh"))},15e3),M.querySelector("#list")){const n=window.scrollY;ue(),window.scrollTo(0,n)}else ft=!0}}function Na(){la(),Es(),na(),Jn(()=>{if(mt)return mt();ve=!1,Bt(),ue()}),zt()?ye().then(tn):vt()}let bs=new URLSearchParams(location.search).get("task");async function tn(){const t=bs;if(!(!t||!zt())){bs=null;try{const e=F.find(n=>n.id===t)??await ys(t);await Wt(e)}catch(e){M.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${l(H(e))}</div>`)}}}async function Pa(){var t;try{const e=location.href.split(/[?#]/)[0],n=await fetch(`${e}?check=${Date.now()}`,{cache:"no-store"}).then(b=>b.text()),r=b=>[...new Set([...b.matchAll(/assets\/[\w.-]+?-[\w-]{8}\.(?:js|css)/g)].map(h=>h[0]))].sort(),u=r(n),c=new Set(r(document.head.innerHTML));if(!u.length||!c.size||u.every(b=>c.has(b)))return;const m=u.join(","),p=()=>{const b=new URL(location.href);b.searchParams.set("v",String(Date.now())),location.replace(b.toString())},A=document.getElementById("update-note");A&&(A.hidden=!1,(t=A.querySelector("button"))==null||t.addEventListener("click",p));let $="";try{$=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",m)}catch{}$!==m&&p()}catch{}}let gs=!1;const sn=()=>{gs||(gs=!0,Na())};Pa();typeof Office<"u"&&Office.onReady(sn);setTimeout(sn,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 14:08 UTC";
