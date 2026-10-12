import{a as X,e as x,b as r,l as Ae,f as Ne,c as Ct,d as ze,s as Be,g as lt,h as Xe,P as Fs,o as ht,j as vt,k as mt,m as Kt,n as Us,r as Os,p as Vs,q as et,t as Ws,u as ft,v as Ks,w as Rt,x as Ye,y as _t,z as Yt,A as Rs,B as $t,C as Gt,D as _s,E as Ys,F as Gs,G as yt,H as cs,I as Js,J as Zs,K as Ge,L as Qs,M as Xs,N as en,O as tn,Q as sn,R as nn,S as an,T as ln,U as rn,V as on,W as cn,X as dn,Y as un,Z as pn,_ as hn,$ as mn,i as qt,a0 as fn,a1 as bn}from"./util-DmUGY8F_.js";import{l as ds,s as wt,m as Te,n as gn,b as us,o as vn,p as Je,q as $n,t as yn,g as wn,d as kn,f as Sn,k as Ln,e as Jt,j as Zt,u as Tn,h as An,v as En,w as Mn,x as Cn,y as qn,z as xn,A as Dn}from"./composemail-CnBc3_6o.js";import{a as ps,t as Qt,u as In,w as Hn}from"./theme-BgKbLFxD.js";const Nn="https://graph.microsoft.com/v1.0";async function hs(t=!0){throw new Error("Die Microsoft-Anmeldung ist noch nicht eingerichtet (App-Registrierung fehlt).")}async function tt(t,e={}){var c,u;const a=await hs(),l=await fetch(t.startsWith("http")?t:`${Nn}${t}`,{...e,headers:{Authorization:`Bearer ${a}`,...e.body?{"Content-Type":"application/json"}:{},...e.headers}});if(!l.ok){let m=`${l.status}`;try{m=((u=(c=await l.json())==null?void 0:c.error)==null?void 0:u.message)??m}catch{}throw new Error(`Microsoft Graph: ${m}`)}return l}const xt=async(t,e)=>(await tt(t,e)).json();let Xt=null;async function zn(){return Xt??(Xt=await xt("/me?$select=id,displayName").then(t=>({id:t.id,name:t.displayName}))),Xt}async function Bn(){const t=await zn();return((await xt("/me/chats?$expand=members,lastMessagePreview&$orderby=lastMessagePreview/createdDateTime desc&$top=50")).value??[]).map(a=>{var c,u,m;const l=(a.members??[]).filter(p=>p.userId!==t.id).map(p=>p.displayName).filter(Boolean);return{id:a.id,type:a.chatType,title:a.topic||l.slice(0,4).join(", ")+(l.length>4?` +${l.length-4}`:"")||"(Chat)",lastAt:(c=a.lastMessagePreview)!=null&&c.createdDateTime?new Date(a.lastMessagePreview.createdDateTime):void 0,preview:ms(((m=(u=a.lastMessagePreview)==null?void 0:u.body)==null?void 0:m.content)??"").slice(0,80),webUrl:a.webUrl}})}const ms=t=>t.replace(/<[^>]*>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\s+/g," ").trim();async function jn(t,e=40){return((await xt(`/chats/${encodeURIComponent(t)}/messages?$top=${e}`)).value??[]).filter(l=>!l.deletedDateTime).map(l=>{var p,E,b,h,v,y,w;const c=((p=l.body)==null?void 0:p.content)??"",u=[...c.matchAll(/<img[^>]+src="([^"]+hostedContents[^"]+)"/gi)].map(($,z)=>({name:`Bild-${z+1}.png`,url:$[1].replace(/&amp;/g,"&"),kind:"image"})),m=(l.attachments??[]).filter($=>$.contentType==="reference"&&$.contentUrl).map($=>({name:$.name??"Datei",url:$.contentUrl,kind:"file"}));return{id:l.id,from:((b=(E=l.from)==null?void 0:E.user)==null?void 0:b.displayName)??((v=(h=l.from)==null?void 0:h.application)==null?void 0:v.displayName)??"System",at:new Date(l.createdDateTime),html:((y=l.body)==null?void 0:y.contentType)==="html"?c:`<p>${c}</p>`,text:ms((((w=l.body)==null?void 0:w.contentType)==="html",c)),files:[...u,...m],system:l.messageType!=="message"}}).sort((l,c)=>c.at.getTime()-l.at.getTime())}async function Pn(t){if(t.kind==="image")return(await tt(t.url)).blob();const e=btoa(unescape(encodeURIComponent(t.url))).replace(/=+$/,"").replace(/\//g,"_").replace(/\+/g,"-");return(await tt(`/shares/u!${e}/driveItem/content`)).blob()}async function Fn(t,e){await tt(`/chats/${encodeURIComponent(t)}/messages`,{method:"POST",body:JSON.stringify({body:{contentType:"html",content:e}})})}function Un(t){const e=[];for(const a of t)for(const l of a.text.matchAll(/MyMonolith\s*#(\d{3,7})/gi))e.push(Number(l[1]));return[...new Set(e)]}const fs="mm-addin-chatlinks",kt=()=>{try{return JSON.parse(localStorage.getItem(fs)??"{}")}catch{return{}}};function On(t,e){const a=kt();a[t]={taskId:e.id,number:e.number,title:e.title};try{localStorage.setItem(fs,JSON.stringify(a))}catch{}}const es="mm-addin-lastchat",ts=t=>t?t.toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"";function bs(t){var Ee;const e=document.createElement("div");e.className="overlay",e.innerHTML='<div class="overlay-panel" role="dialog" aria-label="Aus Teams-Chat posten"></div>',document.body.append(e),document.body.classList.add("has-overlay");const a=e.querySelector(".overlay-panel");let l=!1;const c=()=>{e.remove(),document.body.classList.remove("has-overlay"),t.onClose(l)};let u=((Ee=t.tasks)==null?void 0:Ee.filter(g=>!X(g)))??[],m=[],p=null,E=[];const b=new Set;let h=t.task??null,v=[],y="",w="",$=!0,z=!0,j="",D="";const O=(g,f)=>`
    <div class="topbar sticky-head">
      ${f?`<button class="nav-btn" data-go="${f}">← Zurück</button>`:"<span></span>"}
      <strong class="grow center">${g}</strong>
      <button class="nav-btn" data-close title="Schließen">✕</button>
    </div>
    ${D?`<div class="error">${r(D)}</div>`:""}`;function G(){a.innerHTML=`${O("💬 Aus Teams-Chat")}
      <div class="pad">
        <div class="error">Die Microsoft-Anmeldung ist noch nicht eingerichtet (App-Registrierung in Microsoft Entra fehlt).</div>
      </div>`}function ce(){const g=y.trim().toLowerCase(),f=(g?m.filter(S=>S.title.toLowerCase().includes(g)||(S.preview??"").toLowerCase().includes(g)):m).slice(0,50),M=kt();a.innerHTML=`${O("💬 Chat wählen")}
      <div class="pad compose-pane">
        <input id="chat-search" type="search" placeholder="Chat suchen …" value="${r(y)}">
        <div class="compose-list">
          ${f.map(S=>`<button type="button" class="task-row card" data-chat="${r(S.id)}">
                <span class="task-main">
                  <span class="task-name">${r(S.title)}</span>
                  <span class="task-meta">
                    ${S.lastAt?`<span class="hint">${ts(S.lastAt)}</span>`:""}
                    ${M[S.id]?`<span class="badge suggest">🔗 #${M[S.id].number}</span>`:""}
                    <span class="hint ellipsis">${r(S.preview??"")}</span>
                  </span>
                </span>
                <span class="chev" aria-hidden="true">›</span>
              </button>`).join("")||'<p class="hint">Keine Chats gefunden.</p>'}
        </div>
      </div>`}function de(g,f,M=""){const S=ze(g.due);return`<button type="button" class="task-row card due-${S.level}${f?" is-selected":""}" data-task="${r(g.id)}">
      <span class="pick-box" aria-hidden="true">${f?"✓":""}</span>
      <span class="task-main"><span class="task-name">${r(g.title)}</span>
        <span class="task-meta"><span class="num">#${g.number}</span>
          <span class="badge due-${S.level}">${r(S.text)}</span>
          ${g.status?`<span class="badge ${Be(g.status)}">${r(g.status)}</span>`:""}
          ${M?`<span class="badge suggest">${r(M)}</span>`:""}</span></span>
    </button>`}function R(){const g=b.size,f=E.filter(k=>b.has(k.id)).reduce((k,q)=>k+q.files.length,0),M=w.trim().toLowerCase(),S=M?u.filter(k=>k.title.toLowerCase().includes(M)||String(k.number).includes(M.replace(/^#/,""))).slice(0,30):[];a.innerHTML=`${O(r(p.title),"chats")}
      <div class="pad compose-pane">
        <h3 class="compose-sub">1. Nachrichten ankreuzen <span class="hint">(${g} gewählt)</span></h3>
        <div class="chat-msgs">
          ${E.filter(k=>!k.system).map(k=>`<label class="chat-msg${b.has(k.id)?" is-selected":""}">
                <input type="checkbox" data-msg="${r(k.id)}"${b.has(k.id)?" checked":""}>
                <span class="chat-msg-main">
                  <span class="chat-msg-head"><strong>${r(k.from)}</strong> <span class="hint">${ts(k.at)}</span></span>
                  <span class="chat-msg-text">${r(k.text||(k.files.length?"":"(leer)"))}</span>
                  ${k.files.length?`<span class="hint">${k.files.map(q=>`${q.kind==="image"?"🖼️":"📎"} ${r(q.name)}`).join(" · ")}</span>`:""}
                </span>
              </label>`).join("")||'<p class="hint">Keine Nachrichten.</p>'}
        </div>

        <h3 class="compose-sub">2. Aufgabe</h3>
        ${h?de(h,!0):'<p class="hint">Noch keine Aufgabe gewählt.</p>'}
        ${t.task?"":`${v.filter(k=>k.task.id!==(h==null?void 0:h.id)).map(k=>de(k.task,!1,k.why)).join("")}
             <input id="task-search" type="search" placeholder="Andere Aufgabe suchen (Titel oder Nummer)" value="${r(w)}">
             ${S.map(k=>de(k,k.id===(h==null?void 0:h.id))).join("")}`}

        <h3 class="compose-sub">3. Senden</h3>
        <label class="check"><input type="checkbox" id="opt-files"${$?" checked":""}> Bilder und Dateien mitsenden${f?` (${f})`:""}</label>
        <label class="check"><input type="checkbox" id="opt-notify"${z?" checked":""}> Hinweis in den Chat senden (verknüpft den Chat mit der Aufgabe)</label>
        <div class="row-btns">
          <button class="primary" id="do-post"${!g||!h||j?" disabled":""}>📤 ${g||""} ${g===1?"Nachricht":"Nachrichten"} posten</button>
          <button id="do-link"${!h||j?" disabled":""} title="Nur den Hinweis „Diese Unterhaltung läuft in MyMonolith #…“ in den Chat senden">🔗 Nur verknüpfen</button>
        </div>
        ${j?`<p class="hint">${r(j)}</p>`:""}
      </div>`}async function Pe(){a.innerHTML=`${O("💬 Aus Teams-Chat")}<p class="hint pad">Chats werden geladen …</p>`;try{m=await Bn(),D="";let g="";try{g=localStorage.getItem(es)??""}catch{}m.sort((f,M)=>(M.id===g?1:0)-(f.id===g?1:0)),ce()}catch(g){D=x(g),G()}}async function J(g){var f;p=g,b.clear();try{localStorage.setItem(es,g.id)}catch{}a.innerHTML=`${O(r(g.title),"chats")}<p class="hint pad">Nachrichten werden geladen …</p>`;try{const[M,S]=await Promise.all([jn(g.id),u.length||t.task?Promise.resolve(u):Ae().then(k=>k.filter(q=>!X(q)))]);if(E=M,u=S,!t.task){const k=[],q=(P,V)=>P&&!k.some(ie=>ie.task.id===P.id)&&k.push({task:P,why:V});for(const P of Un(E))q(u.find(V=>V.number===P),"im Chat verknüpft");const B=kt()[g.id];B&&q(u.find(P=>P.id===B.taskId),"von Ihnen verknüpft");for(const P of ds(u,g.title))q(P.task,P.why);v=k,h=((f=k[0])==null?void 0:f.task)??null}D="",R()}catch(M){D=x(M),ce()}}const ae=(g,f)=>`<p>📌 ${f?`${f} ${f===1?"Nachricht":"Nachrichten"} an `:"Diese Unterhaltung läuft in "}<a href="${r(g.url)}">MyMonolith #${g.number} „${r(g.title)}“</a>${f?" gepostet.":"."}</p>`;async function _(g){if(!h||!p)return;const f=h,M=E.filter(S=>b.has(S.id)).sort((S,k)=>S.at.getTime()-k.at.getTime());D="";try{if(!g){j="Dateien werden geladen …",R();const S=$?M.flatMap(q=>q.files.map((B,P)=>{const V=q.at.toLocaleString("de-DE",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(/[:.,\s]+/g,"-");return{name:B.kind==="image"?`Chat-Bild ${V}${q.files.length>1?`-${P+1}`:""}.png`:B.name,size:0,load:()=>Pn(B)}})):[],k=M.map(q=>`<p><strong>${r(q.from)}</strong> · ${r(Ne(q.at))}</p>${Ct(q.html)||"<p>(Bild/Datei)</p>"}`).join("<hr>");await wt(f.messageId,{note:"",parts:{intro:"",header:`<p>💬 <strong>Teams-Chat „${r(p.title)}“</strong></p>`,body:k,subject:`Teams-Chat ${p.title}`},blobs:S},q=>{j=q,R()}),l=!0}(z||g)&&(j="Hinweis wird in den Chat gesendet …",R(),await Fn(p.id,ae(f,g?0:M.length))),On(p.id,f),j="",a.innerHTML=`${O("Erledigt")}
        <div class="pad">
          <div class="ok">${g?"Chat verknüpft":`${M.length} ${M.length===1?"Nachricht":"Nachrichten"} an #${f.number} gepostet`}${z||g?" – Hinweis im Chat gesendet":""}.</div>
          <div class="row-btns"><button class="primary" data-close>Fertig</button><button data-go="more">Weitere Nachrichten posten</button></div>
        </div>`}catch(S){j="",D=x(S),R()}}return a.addEventListener("click",g=>{var q;const f=g.target;if(f.closest("[data-close]"))return c();const M=(q=f.closest("[data-go]"))==null?void 0:q.dataset.go;if(M==="chats")return ce();if(M==="more"&&p)return void J(p);if(f.closest("#ms-login")){hs(!0).then(Pe,B=>{D=x(B),G()});return}const S=f.closest("[data-chat]");if(S){const B=m.find(P=>P.id===S.dataset.chat);B&&J(B);return}const k=f.closest("[data-task]");if(k&&!t.task)return h=u.find(B=>B.id===k.dataset.task)??h,w="",R();if(f.closest("#do-post"))return void _(!1);if(f.closest("#do-link"))return void _(!0)}),a.addEventListener("change",g=>{const f=g.target;f.dataset.msg?(f.checked?b.add(f.dataset.msg):b.delete(f.dataset.msg),R()):f.id==="opt-files"?$=f.checked:f.id==="opt-notify"&&(z=f.checked)}),a.addEventListener("input",g=>{const f=g.target;if(f.id!=="chat-search"&&f.id!=="task-search")return;const M=f.selectionStart;f.id==="chat-search"?(y=f.value,ce()):(w=f.value,R());const S=a.querySelector(`#${f.id}`);S.focus(),S.setSelectionRange(M,M)}),G()}const gs="mm-addin-sound",vs="mm-addin-sent-mails";let be=null;function Vn(){const t=()=>{try{be??(be=new AudioContext),be.resume()}catch{}};window.addEventListener("pointerdown",t,{once:!0,capture:!0}),window.addEventListener("keydown",t,{once:!0,capture:!0})}function ge(){try{return localStorage.getItem(gs)!=="off"}catch{return!0}}function Wn(t){try{localStorage.setItem(gs,t?"on":"off")}catch{}}function $s(){if(ge())try{be??(be=new AudioContext);const t=be.currentTime;for(const[e,a]of[880,1320].entries()){const l=be.createOscillator(),c=be.createGain();l.type="sine",l.frequency.value=a;const u=t+e*.16;c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(.18,u+.02),c.gain.exponentialRampToValueAtTime(1e-4,u+.14),l.connect(c).connect(be.destination),l.start(u),l.stop(u+.15)}}catch{}}function ys(){try{return JSON.parse(localStorage.getItem(vs)??"{}")}catch{return{}}}function ws(t,e){const a=ys();a[t]=[...new Set([...a[t]??[],e])];const l=Object.keys(a);for(const c of l.slice(0,Math.max(0,l.length-200)))delete a[c];try{localStorage.setItem(vs,JSON.stringify(a))}catch{}}const ks=t=>ys()[t]??[];function Ze(t,e="Name suchen …"){t.classList.add("picker"),t.innerHTML=`
    <input type="text" autocomplete="off" placeholder="${r(e)}" aria-autocomplete="list">
    <ul class="picker-list" role="listbox" hidden></ul>`;const a=t.querySelector("input"),l=t.querySelector("ul");let c=[],u,m=0,p=[];const E=()=>{const h=a.value.trim().toLowerCase();p=(h?c.filter(v=>v.name.toLowerCase().includes(h)):c).slice(0,8),m=Math.min(m,Math.max(p.length-1,0)),l.innerHTML=p.length?p.map((v,y)=>`<li role="option" data-i="${y}" class="${y===m?"active":""}"><span class="avatar sm">${r(lt(v.name))}</span>${r(v.name)}</li>`).join(""):'<li class="empty">Keine Person gefunden</li>',l.hidden=!1},b=h=>{u=h,a.value=h.name,l.hidden=!0};return a.addEventListener("focus",()=>{a.select(),E()}),a.addEventListener("input",()=>{u=void 0,m=0,E()}),a.addEventListener("keydown",h=>{if(!l.hidden){if(h.key==="ArrowDown")m=Math.min(m+1,p.length-1);else if(h.key==="ArrowUp")m=Math.max(m-1,0);else return h.key==="Enter"&&p[m]?(h.preventDefault(),b(p[m])):h.key==="Escape"?void(l.hidden=!0):void 0;h.preventDefault(),E()}}),l.addEventListener("mousedown",h=>{const v=h.target.closest("li[data-i]");v&&(h.preventDefault(),b(p[Number(v.dataset.i)]))}),a.addEventListener("blur",()=>{l.hidden=!0,u||(u=c.find(h=>h.name.toLowerCase()===a.value.trim().toLowerCase()))}),{setUsers(h,v){c=h;const y=c.find(w=>w.id===v);y&&!a.value&&b(y)},selected:()=>u,focus:()=>a.focus()}}let st=null,De=null;const Ss="mm-addin-comment-order";function Kn(){try{return localStorage.getItem(Ss)==="oldest"?"oldest":"newest"}catch{return"newest"}}function Rn(t){try{localStorage.setItem(Ss,t)}catch{}}const ss=t=>{var e;return!!((e=t.raw)!=null&&e.type)&&t.raw.type!=="text"};function _n(t){const e=[];for(const a of t){const l=e[e.length-1];ss(a)&&Array.isArray(l)?l.push(a):e.push(ss(a)?[a]:a)}return e.map(a=>Array.isArray(a)&&a.length===1?a[0]:a)}function Yn(t){const e=t.map(u=>{var m;return(m=u.createdAt)==null?void 0:m.getTime()}).filter(u=>!!u).sort((u,m)=>u-m),a=u=>new Date(u).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),l=u=>new Date(u).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"}),c=e.length?a(e[0])===a(e[e.length-1])?`${a(e[0])}, ${l(e[0])}–${l(e[e.length-1])}`:`${a(e[0])} – ${a(e[e.length-1])}`:"";return`<details class="event-group">
      <summary>${t.length} Änderungen <span class="hint">${c}</span></summary>
      ${t.map(u=>Dt(u)).join("")}
    </details>`}function Dt(t,e=!1){var c;const a=((c=t.raw)==null?void 0:c.type)&&t.raw.type!=="text",l=t.files.length?`<ul class="files">${t.files.map(u=>`<li>📎 ${u.url&&/^https:\/\//.test(u.url)?`<a href="${r(u.url)}" data-external>${r(u.name)}</a>`:r(u.name)}${u.size?` <span class="hint">${Je(u.size)}</span>`:""}</li>`).join("")}</ul>`:"";return a?`<div class="event">${t.html} · ${r(t.author)}${t.createdAt?`, ${Ne(t.createdAt)}`:""}</div>`:`
    <article class="msg${e?" reply":""}">
      ${t.avatar?`<img class="avatar" src="${r(t.avatar)}" alt="">`:`<span class="avatar">${r(lt(t.author))}</span>`}
      <div class="bubble">
        <header><strong>${r(t.author)}</strong>${t.createdAt?` <span class="hint">${Ne(t.createdAt)}</span>`:""}</header>
        ${t.html.trim()?`<div class="body">${Ct(t.html)}</div>`:t.files.length?"":'<div class="body hint">(ohne Text – z. B. Bild oder Sprachnachricht; in MyMonolith ansehen)</div>'}
        ${l}
        ${t.replies.map(u=>Dt(u,!0)).join("")}
      </div>
    </article>`}async function St(t,e,a,l,c,u){var Vt;st=null,De=null;const m=await Xe().catch(()=>{});t.innerHTML=`
    <div class="view detail">
      <div class="topbar sticky-head">
        <button class="nav-btn" id="back" title="${u?`Zurück zur Hauptaufgabe #${u.number}`:"Zurück zur Aufgabenliste"}">← ${u?`#${u.number}`:"Zurück"}</button>
        <span class="hint grow center">${u?"Unteraufgabe":"Aufgabe"} #${e.number}</span>
        <button class="nav-btn" id="open-web" title="Diese Aufgabe in MyMonolith im Browser öffnen">Im Browser ↗</button>
      </div>
      ${u?`<div class="breadcrumb">↳ Unteraufgabe von <button type="button" class="link" id="to-parent">#${u.number} ${r(u.title)}</button></div>`:""}
      <div id="title-box" class="title-box"></div>
      <div id="flash">${l?`<div class="ok">${r(l)}</div>`:""}</div>

      <div id="phase-note"></div>
      <div class="tiles">
        <div class="tile tile-status">
          <span class="tile-label">Status</span>
          <select id="status" class="bare status-select" aria-label="Status"><option>${r(e.status??"…")}</option></select>
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
            ${Fs.map(s=>`<option value="${s.value}"${s.value===(e.priority??"").toLowerCase()?" selected":""}>${s.label}</option>`).join("")}
          </select>
        </div>
        <div class="tile" id="tile-resp"></div>
        <div class="tile">
          <span class="tile-label">Erstellt von</span>
          <span>${r(e.creator??"–")}</span>
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

    </div>`;const p=s=>t.querySelector(s),E=p("#flash"),b=s=>{E.innerHTML=s,E.scrollIntoView({block:"nearest"})},h=s=>b(`<div class="ok">${r(s)}</div>`),v=s=>b(`<div class="error">${r(x(s))}</div>`),y=()=>c==null?void 0:c();p("#back").addEventListener("click",a),p("#open-web").addEventListener("click",()=>ht(e.url)),p("#comments").addEventListener("click",s=>{const n=s.target.closest("a[data-external]");n&&(s.preventDefault(),ht(n.href))});const w=p("#status"),$=p("#done-actions"),z=p("#phase-note"),j=(m==null?void 0:m.userId)!=null&&e.creatorUserId===m.userId;let D=null;const O=s=>{e.phase=s,e.raw.StatusID=s==="done"?7:s==="pending"?5:1};function G(){w.className=`bare status-select ${Be(e.status)}`;const s=(i,o)=>D?D.includes(i):o;z.innerHTML=e.phase==="pending"?`<div class="phase-note pending">⏳ Abgeschlossen – wartet auf Bestätigung ${j?"durch Sie":`von <strong>${r(e.creator??"dem Ersteller")}</strong>`}.</div>`:e.phase==="done"?`<div class="phase-note done">✓ Erledigt${e.needsApproval?" und bestätigt":""}.</div>`:"";const n=[];if(s("approve",e.phase==="pending"&&j)&&n.push('<button class="primary" data-act="approve" title="Den Abschluss bestätigen – die Aufgabe ist dann erledigt">✓ Abschluss bestätigen</button>'),s("finish",e.phase==="open")){const i=e.needsApproval&&!j;n.push(`<button class="primary" data-act="finish" title="${i?"Als erledigt melden – der Ersteller bestätigt":"Aufgabe abschließen"}">✓ ${i?"Zur Freigabe":"Erledigt"}</button>`)}s("reopen",e.phase!=="open")&&n.push(`<button data-act="reopen" title="Abschluss rückgängig machen">↺ ${e.phase==="pending"?"Abschluss zurückziehen":"Wieder öffnen"}</button>`),$.innerHTML=n.join(""),p("#tile-finish").hidden=!n.length}async function ce(s){const n=[...w.options].find(i=>s.test((i.textContent??"").trim()));return!n||w.value===n.value?!1:(await mt(e.id,n.value),w.value=n.value,e.statusId=n.value,e.status=n.textContent??e.status,!0)}async function de(){try{const s=await Yt(e.id);D=s.actions,O(s.phase);const n=s.spaStatusId?[...w.options].find(i=>i.value===s.spaStatusId):void 0;n&&(w.value=n.value,e.statusId=n.value,e.status=n.textContent??e.status)}catch{}G(),f==null||f(),le==null||le(),Z==null||Z()}G(),de(),vt().then(s=>{w.innerHTML=s.map(n=>`<option value="${r(n.id)}"${n.id===e.statusId||n.name===e.status?" selected":""}>${r(n.name)}</option>`).join(""),e.statusId??(e.statusId=w.value)}).catch(v);const R=p("#status-confirm"),Pe=()=>w.value!==(e.statusId??w.value);w.addEventListener("change",()=>{R.hidden=!Pe(),w.classList.toggle("is-pending",Pe())}),p("#status-cancel").addEventListener("click",()=>{e.statusId&&(w.value=e.statusId),R.hidden=!0,w.classList.remove("is-pending")}),p("#status-ok").addEventListener("click",async()=>{var i;const s=e.statusId??"",n=((i=w.selectedOptions[0])==null?void 0:i.textContent)??"";R.hidden=!0,w.classList.remove("is-pending"),w.disabled=!0;try{await mt(e.id,w.value),e.statusId=w.value,e.status=n,h(`Status: ${n}`),y(),await de(),we()}catch(o){w.value=s,v(o)}finally{w.disabled=!1}}),$.addEventListener("click",async s=>{var i;const n=s.target.closest("button[data-act]");if(n){$.querySelectorAll("button").forEach(o=>o.disabled=!0);try{const o=n.dataset.act;o==="finish"?(await Kt(e.id),O(e.needsApproval&&!j?"pending":"done")):o==="approve"?(await Us(e.id),O("done")):o==="reopen"&&(await Os(e.id),O("open")),await de();let d="";try{e.phase==="done"&&await ce(/^erledigt$/i)?d=" Status: Erledigt.":o==="reopen"&&/erledigt/i.test(e.status??"")&&!/zu erledigen/i.test(e.status??"")&&await ce(/^zu erledigen$/i)&&(d=" Status: Zu erledigen.")}catch(A){d=` (Status konnte nicht angepasst werden: ${x(A)})`}G(),h(e.phase==="pending"?`Abgeschlossen – wartet jetzt auf Bestätigung von ${e.creator??"dem Ersteller"}.`:e.phase==="done"?"Aufgabe erledigt.":"Aufgabe wieder geöffnet."),d&&h(`${((i=E.textContent)==null?void 0:i.trim())??""}${d}`),ae(),le(),Z(),y(),we()}catch(o){v(o),G()}}});const J=p("#tile-due");function ae(s=!1){var o;const n=ze(e.due),i=Vs(e,m);if(s){J.innerHTML=`
        <span class="tile-label">Fällig am</span>
        <input type="date" id="due-input" value="${e.due?et(e.due):""}">
        <div class="row-btns"><button class="primary small" id="due-save">Speichern</button><button class="small" id="due-cancel">Abbrechen</button></div>`;const d=J.querySelector("#due-input");d.focus(),J.querySelector("#due-cancel").addEventListener("click",()=>ae()),J.querySelector("#due-save").addEventListener("click",async()=>{if(!d.value)return d.focus();try{await Ws(e.id,d.value),e.due=new Date(`${d.value}T00:00:00`),h(`Fällig am ${ft(e.due)}`),y(),ae()}catch(A){v(A)}});return}J.className=`tile due-${n.level}`,J.innerHTML=`
      <span class="tile-label">Fällig ${i?"":'<span title="Die Fälligkeit darf nur der Ersteller ändern (oder Sie, wenn er es erlaubt hat).">🔒</span>'}</span>
      ${i?`<button class="link" id="due-edit" title="Fälligkeit ändern">${e.due?ft(e.due):"Datum setzen"} ✎</button>`:`<span>${e.due?ft(e.due):"–"}</span>`}
      <span class="tile-sub">${r(n.text)}</span>`,(o=J.querySelector("#due-edit"))==null||o.addEventListener("click",()=>ae(!0))}ae();const _=p("#prio"),Ee=()=>_.dataset.p=_.value;Ee(),_.addEventListener("change",async()=>{const s=e.priority??"";try{await Ks(e.id,_.value),e.priority=_.value,e.raw.Priority=_.value,Ee(),h(`Priorität: ${_.selectedOptions[0].textContent}`),y()}catch(n){_.value=s,v(n)}});const g=p("#tile-resp");function f(s="view",n){var i;if(s==="view"){g.innerHTML=`
        <span class="tile-label">Verantwortlich</span>
        <span>${r(e.responsible??"–")}</span>
        ${!D||D.includes("delegate")?'<button class="link small" id="resp-edit">Weitergeben …</button>':""}`,(i=g.querySelector("#resp-edit"))==null||i.addEventListener("click",()=>f("pick"));return}if(s==="pick"){g.innerHTML=`<span class="tile-label">Weitergeben an</span><div id="resp-picker"></div>
        <div class="row-btns"><button class="primary small" id="resp-next">Weiter</button><button class="small" id="resp-cancel">Abbrechen</button></div>`;const o=Ze(g.querySelector("#resp-picker"));Ge().then(d=>o.setUsers(d)).catch(v),o.focus(),g.querySelector("#resp-cancel").addEventListener("click",()=>f()),g.querySelector("#resp-next").addEventListener("click",()=>{const d=o.selected();d?f("confirm",d):o.focus()});return}g.innerHTML=`<span class="tile-label">Weitergeben</span>
      <span>An <strong>${r(n.name)}</strong> übergeben? Sie sind danach nicht mehr verantwortlich.</span>
      <div class="row-btns"><button class="primary small" id="resp-ok">Übergeben</button><button class="small" id="resp-cancel">Abbrechen</button></div>`,g.querySelector("#resp-cancel").addEventListener("click",()=>f()),g.querySelector("#resp-ok").addEventListener("click",async()=>{try{await Qs(e.id,n.id),e.responsible=n.name,e.responsibleUserId=n.userId,h(`Weitergegeben an ${n.name}.`),y(),f(),ae()}catch(o){v(o),f()}})}f();const M=p("#people");let S={administrators:[],participants:[]};const k={administrators:"Administrative Teilnehmer",participants:"Teilnehmer"},q=(s,n)=>`
    <span class="person-chip" title="${r(n.name)}">
      ${n.picture?`<img class="avatar sm" src="${r(n.picture)}" alt="">`:`<span class="avatar sm">${r(lt(n.name))}</span>`}
      ${r(n.name)}
      <button type="button" data-rm-person="${s}:${r(n.id)}" aria-label="${r(n.name)} entfernen" title="Entfernen">×</button>
    </span>`;function B(s){if(M.innerHTML=["administrators","participants"].map(n=>`
        <div class="people-row">
          <span class="people-label">${k[n]}</span>
          <div class="people-list">
            ${S[n].map(i=>q(n,i)).join("")||'<span class="hint">niemand</span>'}
            ${s===n?"":`<button type="button" class="add-person" data-add-person="${n}">＋ Hinzufügen</button>`}
          </div>
          ${s===n?`<div class="people-add"><div id="people-picker"></div>
            <div class="row-btns"><button type="button" class="primary small" id="people-save">Hinzufügen</button><button type="button" class="small" id="people-cancel">Abbrechen</button></div></div>`:""}
        </div>`).join(""),s){const n=Ze(M.querySelector("#people-picker"),"Kollegen suchen …"),i=new Set(S[s].map(o=>o.id));Ge().then(o=>n.setUsers(o.filter(d=>!i.has(d.id)))).catch(v),n.focus(),M.querySelector("#people-cancel").addEventListener("click",()=>B()),M.querySelector("#people-save").addEventListener("click",async()=>{const o=n.selected();if(!o)return n.focus();await P(s,[...S[s],{...o}],`${o.name} als ${k[s]==="Teilnehmer"?"Teilnehmer":"administrativer Teilnehmer"} hinzugefügt.`)})}}async function P(s,n,i){try{await Xs(e.id,s,n.map(o=>o.id)),S=await Rt(e.id).catch(()=>({...S,[s]:n})),h(i),y(),B(),p("#activity").hidden||ot(!0)}catch(o){v(o),B()}}M.addEventListener("click",s=>{const n=s.target,i=n.closest("[data-add-person]");if(i)return B(i.dataset.addPerson);const o=n.closest("[data-rm-person]");if(o){const[d,A]=o.dataset.rmPerson.split(":"),L=S[d].find(I=>I.id===A);P(d,S[d].filter(I=>I.id!==A),`${(L==null?void 0:L.name)??"Person"} entfernt.`)}}),Rt(e.id).then(s=>{S=s,B()}).catch(s=>M.innerHTML=`<div class="error">${r(x(s))}</div>`);const V=p("#activity");let ie=1;const zt={status:"Status",priority:"Priorität",deadline:"Fällig am",due_at:"Fällig am","fällig am":"Fällig am",assignee:"Verantwortlicher",verantwortlicher:"Verantwortlicher",participants:"Teilnehmer",teilnehmer:"Teilnehmer",observers:"Beobachter",beobachter:"Beobachter",administrators:"Administratoren",administratoren:"Administratoren",estimatedtime:"Geschätzte Zeit","geschätzte zeit":"Geschätzte Zeit",name:"Titel",description:"Beschreibung"},Is={todo:"Offen",pending:"Wartet auf Bestätigung",done:"Erledigt",inprogress:"In Arbeit",new:"Neu",low:"Niedrig",average:"Mittel",high:"Hoch"},Hs=s=>{const n=s.replace(/^niki\.field\./i,"").replace(/[_\s]/g,i=>i==="_"?"":" ").toLowerCase();return zt[n]??zt[n.replace(/\s/g,"")]??s.replace(/^niki\.field\./i,"")},Bt=s=>Is[s.replace(/[\s_]/g,"").toLowerCase()]??s;async function ot(s=!1){var n;s&&(ie=1),ie===1&&(V.innerHTML='<p class="hint">Aktivität wird geladen …</p>');try{const i=await en(e.id,ie),o=i.logs.map(d=>`
          <div class="log">
            <div class="log-head"><strong>${r(d.user)}</strong> · ${r(Hs(d.field))}${d.at?`<span class="hint"> · ${Ne(d.at)}</span>`:""}</div>
            <div class="log-change">
              ${d.from?`<span class="log-from">${r(Bt(d.from))}</span> → `:""}<span class="log-to">${r(Bt(d.to)||"–")}</span>
            </div>
          </div>`).join("");ie===1?V.innerHTML=o||'<p class="hint empty-thread">Noch keine Änderungen.</p>':((n=V.querySelector(".more-activity"))==null||n.remove(),V.insertAdjacentHTML("beforeend",o)),i.hasMore&&V.insertAdjacentHTML("beforeend",'<button type="button" class="more-activity">Ältere Änderungen laden</button>'),ie++}catch(i){V.innerHTML=`<div class="error">${r(x(i))}</div>`}}V.addEventListener("click",s=>{s.target.closest(".more-activity")&&ot()}),t.querySelector(".tabs").addEventListener("click",s=>{const n=s.target.closest(".tab");if(!n)return;const i=n.dataset.tab;t.querySelectorAll(".tab").forEach(o=>{const d=o===n;o.classList.toggle("active",d),o.setAttribute("aria-selected",String(d))});for(const o of["comments","checklist","subtasks","files","activity"]){const d=t.querySelector(`#${o}`);d&&(d.hidden=o!==i)}p("#composer").hidden=i!=="comments",i==="activity"&&ot(!0),i==="checklist"&&Ns(),i==="subtasks"&&Ve(),i==="files"&&Ke()});const Y=p("#checklist");let H=[],$e=null;function jt(){const s=H.filter(n=>n.done).length;p("#cl-count").textContent=H.length?`${s}/${H.length}`:""}function ee(){var i;const s=H.filter(o=>o.done).length,n=H.length?Math.round(s/H.length*100):0;Y.innerHTML=`
      ${H.length?`<div class="progress"><div class="progress-bar" style="width:${n}%"></div></div>
        <div class="hint">${s} von ${H.length} erledigt</div>`:""}
      <ul class="cl-list">
        ${H.map((o,d)=>$e===o.id?`<li class="cl-item editing"><input class="cl-edit" data-id="${r(o.id)}" value="${r(o.item)}" aria-label="Punkt umbenennen">
                  <button type="button" class="small primary" data-cl="save" data-id="${r(o.id)}">Speichern</button>
                  <button type="button" class="small" data-cl="cancel">Abbrechen</button></li>`:`<li class="cl-item${o.done?" done":""}">
                  <label class="cl-check"><input type="checkbox" data-cl="toggle" data-id="${r(o.id)}"${o.done?" checked":""}><span class="cl-text" data-cl="edit" data-id="${r(o.id)}">${r(o.item)}</span></label>
                  <span class="cl-tools">
                    <button type="button" class="icon-btn sm" data-cl="up" data-i="${d}" title="Nach oben" aria-label="Nach oben"${d===0?" disabled":""}>▲</button>
                    <button type="button" class="icon-btn sm" data-cl="down" data-i="${d}" title="Nach unten" aria-label="Nach unten"${d===H.length-1?" disabled":""}>▼</button>
                    <button type="button" class="icon-btn sm" data-cl="edit" data-id="${r(o.id)}" title="Umbenennen" aria-label="Umbenennen">✎</button>
                    <button type="button" class="icon-btn sm" data-cl="del" data-id="${r(o.id)}" title="Löschen" aria-label="Löschen">×</button>
                  </span></li>`).join("")||'<li class="hint empty-thread">Noch keine Punkte.</li>'}
      </ul>
      <form class="cl-add" id="cl-add">
        <input id="cl-new" placeholder="Neuer Punkt … (Enter fügt hinzu)" aria-label="Neuer Checklisten-Punkt">
        <button class="primary small" type="submit">＋</button>
      </form>`,jt(),(i=Y.querySelector(".cl-edit"))==null||i.focus()}async function Ns(){try{H=await Ye(e.id),ee()}catch(s){Y.innerHTML=`<div class="error">${r(x(s))}</div>`}}async function Me(s,n=!0){try{await s(),n&&(H=await Ye(e.id)),y()}catch(i){v(i)}ee()}Y.addEventListener("click",s=>{const n=s.target.closest("[data-cl]");if(!n)return;const i=n.dataset.cl,o=H.find(d=>d.id===n.dataset.id);if(i==="toggle"&&o)o.done=n.checked,ee(),Me(()=>sn(o.id,o.done),!1);else if(i==="edit"&&o&&(n.tagName==="BUTTON"||s.detail===2))s.preventDefault(),$e=o.id,ee();else if(i==="cancel")$e=null,ee();else if(i==="save"&&o){const d=Y.querySelector(".cl-edit").value.trim();$e=null,d&&d!==o.item?Me(()=>nn(e.id,o,d,H.indexOf(o))):ee()}else if(i==="del"&&o)Me(()=>an(o.id));else if(i==="up"||i==="down"){const d=Number(n.dataset.i),A=i==="up"?d-1:d+1;if(A<0||A>=H.length)return;[H[d],H[A]]=[H[A],H[d]],ee(),Me(()=>ln(e.id,H.map(L=>L.id)))}}),Y.addEventListener("dblclick",s=>{const n=s.target.closest(".cl-text");n&&(s.preventDefault(),$e=n.dataset.id??null,ee())}),Y.addEventListener("keydown",s=>{var i;s.target.classList.contains("cl-edit")&&(s.key==="Enter"?(s.preventDefault(),(i=Y.querySelector('[data-cl="save"]'))==null||i.click()):s.key==="Escape"&&($e=null,ee()))}),Y.addEventListener("submit",s=>{s.preventDefault();const n=Y.querySelector("#cl-new"),i=n.value.trim();if(!i)return n.focus();Me(()=>rn(e.id,i,H.length)).then(()=>{var o;return(o=Y.querySelector("#cl-new"))==null?void 0:o.focus()})}),Ye(e.id).then(s=>{H=s,jt()}).catch(()=>{});const U=t.querySelector("#subtasks");let ue=[],Fe=!1,Ue=null;function Pt(){const s=t.querySelector("#sub-count");if(!s)return;const n=ue.filter(i=>i.phase==="done"||/^erledigt$/i.test(i.status??"")).length;s.textContent=ue.length?`${n}/${ue.length}`:""}function Oe(){if(U&&(U.innerHTML=`
      <div class="sub-list">
        ${ue.map(s=>{const n=ze(s.due),i=s.phase==="done"||/^erledigt$/i.test(s.status??"");return`
            <div class="sub-item${i?" done":""}">
              <button type="button" class="sub-check" data-sub="finish" data-id="${r(s.id)}" title="${i?"Erledigt":s.phase==="pending"?"Wartet auf Bestätigung":"Als erledigt markieren"}"${i||s.phase==="pending"?" disabled":""}>${i?"✓":s.phase==="pending"?"⏳":""}</button>
              <button type="button" class="sub-open" data-sub="open" data-id="${r(s.id)}" title="Unteraufgabe öffnen">
                <span class="sub-title">${r(s.title)}</span>
                <span class="task-meta"><span class="num">#${s.number}</span>
                  <span class="badge due-${n.level}">${r(n.text)}</span>
                  ${s.status?`<span class="badge ${Be(s.status)}">${r(s.status)}</span>`:""}
                  ${s.responsible?`<span class="who">${r(s.responsible)}</span>`:""}</span>
              </button>
              ${Ue===s.id?`<span class="sub-confirm">Lösen? <button type="button" class="small primary" data-sub="unlink-ok" data-id="${r(s.id)}">Ja</button><button type="button" class="small" data-sub="unlink-no">Nein</button></span>`:`<button type="button" class="icon-btn sm" data-sub="unlink" data-id="${r(s.id)}" title="Von der Hauptaufgabe lösen (wird eigenständige Aufgabe)" aria-label="Lösen">⛓</button>`}
            </div>`}).join("")||'<p class="hint empty-thread">Noch keine Unteraufgaben.</p>'}
      </div>
      ${Fe?`<form class="sub-form form" id="sub-form">
            <label>Titel<input id="sub-name" required maxlength="250" placeholder="Was ist zu tun?"></label>
            <div class="two">
              <label>Fällig am<input id="sub-due" type="date" required value="${et(new Date(Date.now()+7*864e5))}"></label>
              <label>Verantwortlich<div id="sub-assignee"></div></label>
            </div>
            <span class="hint">Die Beteiligten der Hauptaufgabe werden übernommen.</span>
            <div class="row-btns"><button class="primary" type="submit">Unteraufgabe anlegen</button><button type="button" data-sub="form-cancel">Abbrechen</button></div>
          </form>`:'<button type="button" class="add-person" data-sub="form-open">＋ Neue Unteraufgabe</button>'}`,Pt(),Fe)){const s=Ze(U.querySelector("#sub-assignee"));Promise.all([Ge(),Xe()]).then(([n,i])=>s.setUsers(n,i.id)).catch(v),U.querySelector("#sub-name").focus(),U.querySelector("#sub-form").addEventListener("submit",async n=>{n.preventDefault();const i=s.selected();if(!i)return s.focus();const o=U.querySelector("#sub-form button[type=submit]");o.disabled=!0;try{const d=await tn(e.id,{name:U.querySelector("#sub-name").value.trim(),dueAt:U.querySelector("#sub-due").value,assigneeId:i.id});Fe=!1,h(`Unteraufgabe #${d.number} angelegt.`),y(),await Ve()}catch(d){v(d),o.disabled=!1}})}}async function Ve(){if(U)try{ue=await _t(e.id),Oe()}catch(s){U.innerHTML=`<div class="error">${r(x(s))}</div>`}}U==null||U.addEventListener("click",async s=>{const n=s.target.closest("[data-sub]");if(!n)return;const i=n.dataset.sub,o=ue.find(d=>d.id===n.dataset.id);if(i==="form-open"||i==="form-cancel")Fe=i==="form-open",Oe();else if(i==="open"&&o)await St(t,o,()=>void St(t,e,a,void 0,c),void 0,c,e);else if(i==="finish"&&o){n.setAttribute("disabled","");try{await Kt(o.id);const d=await Yt(o.id);if(d.phase==="done"){const L=(await vt()).find(I=>/^erledigt$/i.test(I.name));L&&await mt(o.id,L.id).catch(()=>{})}h(d.phase==="pending"?`#${o.number} abgeschlossen – wartet auf Bestätigung.`:`#${o.number} erledigt.`),y()}catch(d){v(d)}await Ve()}else if(i==="unlink"&&o)Ue=o.id,Oe();else if(i==="unlink-no")Ue=null,Oe();else if(i==="unlink-ok"&&o){Ue=null;try{await Rs(o.id,e.id),h(`#${o.number} ist jetzt eine eigenständige Aufgabe.`),y()}catch(d){v(d)}await Ve()}}),U&&_t(e.id).then(s=>{ue=s,Pt()}).catch(()=>{}),(Vt=t.querySelector("#to-parent"))==null||Vt.addEventListener("click",a);const te=p("#files");let pe=[],ct=0,se=[];const zs=(s,n)=>n?"🖼️":s==="pdf"?"📕":/^(docx?|odt|rtf)$/.test(s)?"📘":/^(xlsx?|csv|ods)$/.test(s)?"📗":/^(pptx?|odp)$/.test(s)?"📙":/^(zip|rar|7z|gz|tar)$/.test(s)?"🗜️":/^(eml|msg)$/.test(s)?"✉️":/^(txt|log|xml|json)$/.test(s)?"📄":"📎";function Ft(){p("#files-count").textContent=pe.length?`(${pe.length})`:""}function We(){te.innerHTML=`
      <div class="files-tools">
        ${se.length?`<form class="upload-form" id="upload-form">
              <div class="file-chips">${se.map((s,n)=>`<span class="file-chip">📎 <span class="ellipsis">${r(s.name)}</span> <span class="hint">${Je(s.size)}</span><button type="button" data-rm-up="${n}" aria-label="Entfernen">×</button></span>`).join("")}</div>
              <input id="upload-note" placeholder="Notiz zur Datei (optional)">
              <div class="row-btns"><button class="primary small" type="submit">Hochladen</button><button type="button" class="small" id="upload-cancel">Abbrechen</button></div>
              <div id="upload-msg"></div>
            </form>`:'<label class="add-person upload-btn">＋ Datei hochladen<input type="file" id="upload-input" multiple hidden></label>'}
      </div>
      <div class="file-list">
        ${pe.map(s=>`
          <button type="button" class="file-row" data-file="${r(s.id)}" title="${r(s.name)} öffnen">
            ${s.isImage&&s.thumb?`<img class="file-thumb" src="${r(s.thumb)}" alt="">`:`<span class="file-icon">${zs(s.ext,s.isImage)}</span>`}
            <span class="file-main">
              <span class="file-name">${r(s.name)}</span>
              <span class="file-meta">${[s.size?Je(s.size):"",s.uploadedBy?`von ${r(s.uploadedBy)}`:"",s.uploadedAt?Ne(s.uploadedAt):""].filter(Boolean).join(" · ")}</span>
              ${s.commentText?`<span class="file-comment">„${r(s.commentText)}${s.commentText.length>=90?" …":""}“</span>`:""}
            </span>
            <span class="file-open" aria-hidden="true">↗</span>
          </button>`).join("")||'<p class="hint empty-thread">Noch keine Dateien.</p>'}
      </div>`,Ft()}async function Ke(){try{pe=await $t(e.id),ct=Date.now(),We()}catch(s){te.innerHTML=`<div class="error">${r(x(s))}</div>`}}async function Bs(s){if(Date.now()-ct>20*6e4&&(await Ke(),s=pe.find(n=>n.id===s.id&&n.name===s.name)??s),!s.url)return v(new Error("Für diese Datei liefert MyMonolith keinen Link – bitte „Im Browser ↗“ nutzen."));ht(s.url)}te.addEventListener("click",s=>{const n=s.target,i=n.closest("[data-file]");if(i){const d=pe.find(A=>A.id===i.dataset.file);d&&Bs(d);return}const o=n.closest("[data-rm-up]");o?(se.splice(Number(o.dataset.rmUp),1),We()):n.closest("#upload-cancel")&&(se=[],We())}),te.addEventListener("change",s=>{var i;const n=s.target;n.id==="upload-input"&&(se=Array.from(n.files??[]),We(),(i=te.querySelector("#upload-note"))==null||i.focus())}),te.addEventListener("submit",async s=>{s.preventDefault();const n=te.querySelector("#upload-form button[type=submit]"),i=te.querySelector("#upload-msg"),o=te.querySelector("#upload-note").value.trim();n.disabled=!0;try{const d=se.length;await wt(e.messageId,{note:o||`${d===1?"Datei":`${d} Dateien`} hochgeladen: ${se.map(A=>A.name).join(", ")}`,files:se},A=>i.innerHTML=`<p class="hint">${r(A)}</p>`),se=[],h(`${d===1?"Datei":`${d} Dateien`} hochgeladen.`),y(),await Ke()}catch(d){i.innerHTML=`<div class="error">${r(x(d))}</div>`,n.disabled=!1}}),$t(e.id).then(s=>{pe=s,ct=Date.now(),Ft()}).catch(()=>{});const he=p("#title-box");function Z(s=!1){var i;const n=D?D.includes("edit")&&e.phase==="open":Gt(e,m);if(s){he.innerHTML=`
        <form class="title-edit" id="title-form">
          <input id="title-input" maxlength="255" value="${r(e.title)}" aria-label="Titel der Aufgabe">
          <div class="row-btns"><button class="primary small" type="submit">Speichern</button><button class="small" type="button" id="title-cancel">Abbrechen</button></div>
        </form>`;const o=he.querySelector("#title-input");o.focus(),o.select(),he.querySelector("#title-cancel").addEventListener("click",()=>Z()),o.addEventListener("keydown",d=>{d.key==="Escape"&&Z()}),he.querySelector("#title-form").addEventListener("submit",async d=>{d.preventDefault();const A=o.value.trim();if(!A)return o.focus();if(A===e.title)return Z();const L=he.querySelector("button[type=submit]");L.disabled=!0;try{await _s(e.id,A),e.title=A,e.raw.TaskName=A,h("Titel geändert."),y(),Z()}catch(I){L.disabled=!1,v(I)}});return}he.innerHTML=`<h2 class="task-title">${r(e.title)}${n?' <button type="button" class="icon-btn sm title-edit-btn" id="title-edit" title="Titel ändern" aria-label="Titel ändern">✎</button>':""}</h2>`,(i=he.querySelector("#title-edit"))==null||i.addEventListener("click",()=>Z(!0))}Z();const ye=p("#desc");function le(s=!1){var o;const n=D?D.includes("edit")&&e.phase==="open":Gt(e,m);if(s){ye.innerHTML=`
        <textarea id="desc-input" rows="5" placeholder="Worum geht es? Details, Hinweise …">${r(Ys(e.description))}</textarea>
        ${Gs(e.description)?'<span class="hint">Hinweis: Formatierungen (fett, Links, Listen) gehen beim Speichern verloren.</span>':""}
        <div class="row-btns"><button class="primary small" id="desc-save">Speichern</button><button class="small" id="desc-cancel">Abbrechen</button></div>`;const d=ye.querySelector("#desc-input");d.focus(),ye.querySelector("#desc-cancel").addEventListener("click",()=>le()),ye.querySelector("#desc-save").addEventListener("click",async()=>{const A=d.value.trim()?yt(d.value):"";try{await cs(e.id,A),e.description=A,e.raw.TaskDescription=A,h("Beschreibung gespeichert."),y(),le()}catch(L){v(L)}});return}const i=e.description.trim()?`<div class="desc-body">${Ct(e.description)}</div>`:`<div class="hint">${n?"Noch keine Beschreibung.":"Keine Beschreibung."}</div>`;ye.innerHTML=`${i}${n?`<button class="link small" id="desc-edit">✎ ${e.description.trim()?"Bearbeiten":"Beschreibung hinzufügen"}</button>`:'<span class="hint" title="Die Beschreibung darf nur der Ersteller ändern.">🔒 nur der Ersteller kann sie ändern</span>'}`,(o=ye.querySelector("#desc-edit"))==null||o.addEventListener("click",()=>le(!0))}le();const me=p("#comments");async function we(s=!1){var n;try{const i=[];for(let L=1;L<=10;L++){const I=await Js(e.messageId,L,50);if(i.push(...I.comments),!I.hasMore)break}const o=Kn()==="newest";i.sort((L,I)=>{var Se,qe;return((((Se=L.createdAt)==null?void 0:Se.getTime())??0)-(((qe=I.createdAt)==null?void 0:qe.getTime())??0))*(o?-1:1)});const d=i.filter(L=>{var I;return!((I=L.raw)!=null&&I.type)||L.raw.type==="text"}).length;p("#count").textContent=d?`(${d})`:"";const A=`<div class="thread-tools">
          <span class="thread-title">Verlauf${d?` · ${d} ${d===1?"Kommentar":"Kommentare"}`:""}</span>
          <button type="button" class="order-toggle" id="order-toggle" title="Reihenfolge der Kommentare umschalten">
            ⇅ ${o?"Neueste oben":"Älteste oben"}
          </button>
        </div>`;me.innerHTML=i.length?A+_n(i).map(L=>Array.isArray(L)?Yn(L):Dt(L)).join(""):'<p class="hint empty-thread">Noch keine Kommentare – schreiben Sie den ersten.</p>',(n=me.querySelector("#order-toggle"))==null||n.addEventListener("click",()=>{Rn(o?"oldest":"newest"),we()}),me.querySelectorAll(".bubble > .body").forEach(L=>{if(L.scrollHeight<=320)return;L.classList.add("clamped");const I=document.createElement("button");I.type="button",I.className="link small more",I.textContent="Mehr anzeigen ▾",I.addEventListener("click",()=>{const Se=L.classList.toggle("clamped");I.textContent=Se?"Mehr anzeigen ▾":"Weniger anzeigen ▴"}),L.after(I)}),s&&(o?me.scrollIntoView({block:"start"}):(me.lastElementChild??me).scrollIntoView({block:"end"}))}catch(i){me.innerHTML=`<div class="error">${r(x(i))}</div>`}}const Re=p("#composer"),Q=p("#comment"),dt=p("#file-input");p("#chat-btn").addEventListener("click",()=>bs({task:e,onClose:s=>{s&&(y(),we(!0),Ke())}}));const Ut=p("#file-chips"),ke=p("#comment-msg"),ut=p("#mail-btn"),W=p("#mail-menu");let fe=[],N=null;const _e=(s,n,i,o,d="")=>`<span class="file-chip ${d}">${s} <span class="ellipsis">${r(n)}</span>${i?` <span class="hint">${Je(i)}</span>`:""}<button type="button" data-rm="${o}" aria-label="Entfernen">×</button></span>`;function Ce(){const s=N;Ut.innerHTML=[...s!=null&&s.text?[_e("📧",`Mailtext: ${s.mail.subject||"(ohne Betreff)"}`,void 0,"mail-text","mail")]:[],...s!=null&&s.eml?[_e("📄",s.eml.name,s.eml.blob.size,"mail-eml","mail")]:[],...((s==null?void 0:s.atts)??[]).map((n,i)=>_e("📎",n.name,n.size,`mail-att:${i}`)),...fe.map((n,i)=>_e("📎",n.name,n.size,`file:${i}`))].join("")}const js=s=>((!N||N.mail.key!==s.key)&&(N={mail:s,text:!1,atts:[]}),N);function pt(){const s=Te();ut.hidden=!s||ks(s.key).includes(e.number),s||(W.hidden=!0),N&&(!s||s.key!==N.mail.key)&&(N=null,Ce())}function Ot(){var A;const s=Te();if(!s)return;const n=(N==null?void 0:N.mail.key)===s.key?N:null,i=s.attachments.filter(L=>!L.isInline),o=$n(),d=(L,I,Se,qe,Ps=!1,Wt="")=>`<button type="button" role="menuitem" data-act="${L}"${Ps||qe?" disabled":""}${Wt?` title="${r(Wt)}"`:""}>
        <span>${I}</span><span class="grow">${r(Se)}</span>${qe?'<span class="hint">✓ hinzugefügt</span>':""}
      </button>`;W.innerHTML=`
      <div class="menu-head hint ellipsis">Geöffnete Mail: ${r(s.subject||"(ohne Betreff)")}</div>
      ${d("text","📧","Mailtext als Inhalt einfügen",!!(n!=null&&n.text))}
      ${d("eml","📄","Mail als Datei anhängen (.eml)",!!(n!=null&&n.eml),!o,o?"":"In dieser Outlook-Version nicht verfügbar")}
      ${d("atts","📎",`Anhänge der Mail übernehmen (${i.length})`,!!n&&i.length>0&&i.every(L=>n.atts.includes(L)),i.length===0,i.length?"":"Die Mail hat keine Anhänge")}`,W.hidden=!1,(A=W.querySelector("button:not([disabled])"))==null||A.focus()}ut.addEventListener("click",s=>{s.stopPropagation(),W.hidden?Ot():W.hidden=!0}),document.addEventListener("click",s=>{!W.hidden&&!W.contains(s.target)&&(W.hidden=!0)}),W.addEventListener("keydown",s=>{s.key==="Escape"&&(W.hidden=!0,ut.focus())}),W.addEventListener("click",async s=>{const n=s.target.closest("button[data-act]"),i=Te();if(!n||!i)return;s.stopPropagation();const o=js(i);if(n.dataset.act==="text")o.text=!0;else if(n.dataset.act==="atts")o.atts=i.attachments.filter(d=>!d.isInline);else if(n.dataset.act==="eml"){n.disabled=!0,n.querySelector(".grow").textContent="Mail wird geladen …";try{o.eml=await gn(i)}catch(d){ke.innerHTML=`<div class="error">${r(x(d))}</div>`}}W.hidden=!0,Ce(),Q.focus()}),dt.addEventListener("change",()=>{fe=[...fe,...Array.from(dt.files??[])],dt.value="",Ce()}),Ut.addEventListener("click",s=>{var d;const n=(d=s.target.closest("[data-rm]"))==null?void 0:d.dataset.rm;if(!n)return;const[i,o]=n.split(":");i==="file"?fe.splice(Number(o),1):N&&(i==="mail-text"?N.text=!1:i==="mail-eml"?N.eml=void 0:i==="mail-att"&&N.atts.splice(Number(o),1),!N.text&&!N.eml&&!N.atts.length&&(N=null)),Ce()}),Q.addEventListener("input",()=>{Q.style.height="auto",Q.style.height=`${Math.min(Math.max(Q.scrollHeight,72),260)}px`}),Q.addEventListener("keydown",s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&Re.requestSubmit()}),Re.addEventListener("submit",async s=>{s.preventDefault();const n=Q.value,i=N;if(!n.trim()&&!fe.length&&!i)return Q.focus();const o=Re.querySelector("button[type=submit]");o.disabled=!0,ke.innerHTML="";try{const d=await wt(e.messageId,{note:n,mailText:i!=null&&i.text?i.mail:void 0,eml:i==null?void 0:i.eml,mailAttachments:i==null?void 0:i.atts,files:fe},A=>ke.innerHTML=`<p class="hint">${r(A)}</p>`);i&&(ws(i.mail.key,e.number),us(i.mail.conversationId,e)),Q.value="",Q.style.height="auto",fe=[],N=null,Ce(),pt(),ke.innerHTML=`<div class="ok">${r(vn(d,!!i))}</div>`,setTimeout(()=>ke.innerHTML="",6e3),y(),await we(!0)}catch(d){ke.innerHTML=`<div class="error">${r(x(d))}</div>`}finally{o.disabled=!1}}),pt(),st=pt,De=()=>{Re.scrollIntoView({block:"end"}),Ot()},await we(),e.unread>0&&Zs(e.messageId).then(()=>{e.unread=0,y()}).catch(()=>{})}let Le=[];const ns=t=>({taskId:t.id,messageId:t.messageId,number:t.number,title:t.title});function bt(t,e,a=""){const l=ze(t.due);return`
    <button type="button" class="task-row card due-${l.level}${e?" is-selected":""}" data-pick="${r(t.id)}" aria-pressed="${e}"
      title="${e?"Antippen, um die Aufgabe wieder abzuwählen":"Antippen, um die Aufgabe auszuwählen"}">
      <span class="pick-box" aria-hidden="true">${e?"✓":""}</span>
      <span class="task-main">
        <span class="task-name">${r(t.title)}</span>
        <span class="task-meta">
          <span class="num">#${t.number}</span>
          <span class="badge due-${l.level}">${r(l.text)}</span>
          ${t.status?`<span class="badge ${Be(t.status)}">${r(t.status)}</span>`:""}
          ${a?`<span class="badge suggest">${r(a)}</span>`:""}
        </span>
      </span>
    </button>`}async function Gn(t){const e=document.createElement("div");if(t.replaceChildren(e),e.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>',!yn()){e.innerHTML='<div class="pad"><div class="error">Diese Outlook-Version unterstützt das Posten beim Senden nicht (Mailbox 1.11 nötig). Bitte das neue Outlook oder Outlook im Web verwenden.</div></div>';return}try{Le=(await Ae()).filter(b=>!X(b))}catch(b){e.innerHTML=`<div class="pad"><div class="error">${r(x(b))}</div></div>`;return}let a=await wn()??{tasks:[],withAttachments:!0};const l=ds(Le,await Sn(),kn());let c=!1;!a.tasks.length&&l.length&&!await Ln()&&(a={...a,tasks:[ns(l[0].task)]},await Jt(a).catch(()=>{}),Zt({chosen:a.tasks}),c=!0);let u="";const m=b=>a.tasks.some(h=>h.taskId===b),p=()=>{const b=u.trim().toLowerCase(),h=b?Le.filter($=>$.title.toLowerCase().includes(b)||String($.number).includes(b.replace(/^#/,""))).slice(0,40):Le.filter($=>!l.some(z=>z.task.id===$.id)&&!m($.id)).slice(0,40),v=a.tasks.map($=>Le.find(z=>z.id===$.taskId)??null),y=l.filter($=>!m($.task.id)),w=a.tasks.length;e.innerHTML=`
      <div class="compose-pane pad">
        <h2 class="compose-title">📤 Beim Senden in MyMonolith posten</h2>
        ${w?`<div class="compose-choice">
              <div class="hint">${c?"Vorgeschlagen und ausgewählt":"Ausgewählt"} – ${w} ${w===1?"Aufgabe":"Aufgaben"}:</div>
              ${v.map(($,z)=>$?bt($,!0):`<div class="card pad">#${a.tasks[z].number} ${r(a.tasks[z].title)}</div>`).join("")}
              <p class="hint">Beim Klick auf <b>Senden</b> kommt in ${w===1?"die Aufgabe":"jede Aufgabe"}:
                <br>• die <b>neue Nachricht</b> als Kommentar (ohne zitierten Verlauf)
                <br>• die <b>komplette Mail</b> samt Verlauf und Anhängen als <b>.eml</b>-Datei</p>
              <label class="check"><input type="checkbox" id="with-att"${a.withAttachments?" checked":""}> Anhänge zusätzlich einzeln hochladen</label>
              <button type="button" class="small" id="clear-choice">✕ Nichts posten</button>
            </div>`:'<p class="hint">Wählen Sie eine oder mehrere Aufgaben. Ohne Auswahl wird die Mail ganz normal gesendet.</p>'}
        ${y.length?`<h3 class="compose-sub">Vorschläge</h3>${y.map($=>bt($.task,!1,$.why)).join("")}`:""}
        <h3 class="compose-sub">${w?"Weitere Aufgabe hinzufügen":"Aufgabe suchen"}</h3>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${r(u)}">
        <div class="compose-list">${h.map($=>bt($,m($.id))).join("")||'<p class="hint">Keine passende Aufgabe.</p>'}</div>
        <div id="compose-msg"></div>
        <label class="check compose-auto"><input type="checkbox" id="auto-suggest"${An()?" checked":""}>
          Beim Antworten und Weiterleiten automatisch vorschlagen</label>
      </div>`},E=async b=>{try{await Jt(b),a=b,c=!1,Zt({chosen:b.tasks}),p()}catch(h){const v=e.querySelector("#compose-msg");v&&(v.innerHTML=`<div class="error">${r(x(h))}</div>`)}};e.addEventListener("click",b=>{const h=b.target,v=h.closest("[data-pick]");if(v){const y=v.dataset.pick,w=Le.find($=>$.id===y);if(!w)return;E({...a,tasks:m(y)?a.tasks.filter($=>$.taskId!==y):[...a.tasks,ns(w)]})}else h.closest("#clear-choice")&&E({...a,tasks:[]})}),e.addEventListener("change",b=>{const h=b.target;h.id==="with-att"&&E({...a,withAttachments:h.checked}),h.id==="auto-suggest"&&Tn(h.checked)}),e.addEventListener("input",b=>{const h=b.target;if(h.id!=="search")return;u=h.value;const v=h.selectionStart;p();const y=e.querySelector("#search");y.focus(),y.setSelectionRange(v,v)}),p()}const Jn=t=>t.replace(/^(\s*(AW|WG|RE|FW|FWD|Antw|Fwd)\s*:\s*)+/i,"").trim();function Zn(t,e,a,l){const c=new Date(Date.now()+6048e5);t.innerHTML=`
    <div class="view">
      <div class="topbar">
        <button type="button" class="nav-btn" id="cancel" title="Ohne Speichern zurück zur Liste">← Abbrechen</button>
        <strong class="grow center">Neue Aufgabe</strong>
      </div>
      <form id="f-new" class="form">
        ${e?`<div class="mail-chip">📧 aus Mail: <span class="ellipsis">${r(e.subject||"(ohne Betreff)")}</span></div>`:""}
        <label>Titel<input id="name" required maxlength="250" placeholder="Was ist zu tun?" value="${r(e?Jn(e.subject):"")}"></label>
        <div class="two">
          <label>Fällig am<input id="due" type="date" required value="${et(c)}" min="${et(new Date)}"></label>
          <label>Verantwortlich<div id="assignee"></div></label>
        </div>
        <label>Beschreibung <span class="hint">(optional)</span>
          <textarea id="desc" rows="3" placeholder="Details, Hinweise, @Erwähnungen …"></textarea>
        </label>
        ${e?`
          <label class="check"><input type="checkbox" id="with-mail" checked> Mail anhängen</label>
          <div id="atts">${En(e)}</div>`:""}
        <div id="new-msg"></div>
        <button class="primary block" type="submit">Aufgabe anlegen</button>
      </form>
    </div>`;const u=v=>t.querySelector(v),m=u("#f-new"),p=t.querySelector("#with-mail"),E=u("#new-msg"),b=v=>E.innerHTML=v;u("#cancel").addEventListener("click",l),p==null||p.addEventListener("change",()=>u("#atts").hidden=!p.checked);const h=Ze(u("#assignee"));Promise.all([Ge(),Xe()]).then(([v,y])=>h.setUsers(v,y.id)).catch(v=>b(`<div class="error">Personenliste: ${r(x(v))}</div>`)),u("#name").focus(),m.addEventListener("submit",async v=>{v.preventDefault();const y=h.selected();if(!y){b('<div class="error">Wählen Sie eine verantwortliche Person aus der Liste.</div>'),h.focus();return}const w=m.querySelector("button[type=submit]");w.disabled=!0;try{b('<p class="hint">Aufgabe wird angelegt …</p>');const $=await on({name:u("#name").value.trim(),dueAt:u("#due").value,assigneeId:y.id}),z=u("#desc").value;let j=`Aufgabe #${$.number||""} angelegt.`;if(z.trim())try{await cs($.id,yt(z))}catch{await cn($.messageId,yt(z)).catch(()=>{})}try{if(e&&(p!=null&&p.checked)){const D=Mn(u("#atts"),e),O=await Cn($.messageId,e,D,"",G=>b(`<p class="hint">${r(G)}</p>`));j+=" "+qn(D.length,O.shortened),ws(e.key,$.number),us(e.conversationId,{id:$.id,number:$.number,title:u("#name").value.trim()})}}catch(D){j+=` Hinweis: ${x(D)}`}a($,j)}catch($){b(`<div class="error">${r(x($))}</div>`),w.disabled=!1}})}ps();const T=document.getElementById("app"),It=document.getElementById("logout-link");function Qn(){try{return Office.context.mailbox.userProfile.emailAddress??""}catch{return""}}function rt(t){oa(),It.hidden=!0;const e=pn()??Qn();T.innerHTML=`
    <form id="f-email" class="form pad">
      <p>Melden Sie sich einmalig an. Danach bleibt das Add-in angemeldet.</p>
      ${t?`<div class="error">${r(t)}</div>`:""}
      <label>E-Mail-Adresse<input id="email" type="email" required autocomplete="email" value="${r(e)}"></label>
      <button class="primary block" type="submit">Code per E-Mail anfordern</button>
    </form>
    <form id="f-code" class="form pad" hidden>
      <p>Wir haben einen Code an <strong id="sent-to"></strong> gesendet.</p>
      <label>Code<input id="code" inputmode="numeric" autocomplete="one-time-code" required></label>
      <button class="primary block" type="submit">Anmelden</button>
      <button type="button" class="link" id="back">Andere E-Mail-Adresse</button>
      <div id="code-error"></div>
    </form>`;const a=T.querySelector("#f-email"),l=T.querySelector("#f-code"),c=T.querySelector("#email"),u=T.querySelector("#code"),m=T.querySelector("#code-error");a.addEventListener("submit",async p=>{p.preventDefault();const E=a.querySelector("button");E.disabled=!0;try{await hn(c.value.trim()),T.querySelector("#sent-to").textContent=c.value.trim(),a.hidden=!0,l.hidden=!1,u.focus()}catch(b){rt(x(b))}finally{E.disabled=!1}}),l.addEventListener("submit",async p=>{p.preventDefault();const E=l.querySelector("button.primary");E.disabled=!0,m.innerHTML="";try{await mn(c.value.trim(),u.value.trim()),await ve(),await xs()}catch(b){m.innerHTML=`<div class="error">${r(x(b))}</div>`}finally{E.disabled=!1}}),T.querySelector("#back").addEventListener("click",()=>{l.hidden=!0,a.hidden=!1})}const Ls="mm-addin-filters",nt=(t="")=>({time:"all",owner:"all",unread:!1,status:"",q:t});function Xn(){try{return{...nt(),...JSON.parse(localStorage.getItem(Ls)??"{}"),q:""}}catch{return nt()}}function Lt(t){try{localStorage.setItem(Ls,JSON.stringify({...t,q:""}))}catch{}}let F=[],Ie=null,Tt=[],At=[];const je=t=>/erledigt/i.test(t.status),Ht=()=>je(C)?Ie??[]:F;async function as(){if(Ie)return;const t=T.querySelector("#list");t&&(t.innerHTML='<p class="hint pad">Erledigte Aufgaben werden geladen …</p>');try{const e=await Ae("status_id=7"),a=new Set;Ie=[...e,...Tt].filter(l=>!a.has(l.id)&&a.add(l.id))}catch(e){Ie=[...Tt],t&&(t.innerHTML=`<div class="error">${r(x(e))}</div>`)}}let K,C=Xn(),oe=!1,at=!1;function gt(){const t=new Date;return t.setHours(0,0,0,0),t}const He={overdue:t=>!X(t)&&!!t.due&&t.due<gt(),week:t=>!X(t)&&!!t.due&&t.due>=gt()&&t.due<new Date(gt().getTime()+7*864e5),assigned:t=>(K==null?void 0:K.userId)!=null&&t.responsibleUserId===K.userId,created:t=>(K==null?void 0:K.userId)!=null&&t.creatorUserId===K.userId,unread:t=>t.unread>0};function Ts(t,e){const a=e.q.trim().toLowerCase();return t.filter(l=>(e.time==="all"||He[e.time](l))&&(e.owner==="all"||He[e.owner](l))&&(!e.unread||He.unread(l))&&(!e.status||je(e)||l.status===e.status)&&(!a||l.title.toLowerCase().includes(a)||String(l.number).includes(a)))}const ea=t=>t.time!=="all"||t.owner!=="all"||t.unread||!!t.status,As=new Map,Qe=new Map;function ta(t){const e=As.get(t.id),a=bn(t);return[e&&e.total?`<span class="badge progress-badge${e.done===e.total?" complete":""}" title="Checkliste: ${e.done} von ${e.total} erledigt">☑ ${e.done}/${e.total}</span>`:"",a.total?`<span class="badge progress-badge${a.done===a.total?" complete":""}" title="Unteraufgaben: ${a.done} von ${a.total} erledigt">🧩 ${a.done}/${a.total}</span>`:"",Qe.get(t.id)?`<span class="badge progress-badge" title="${Qe.get(t.id)} Dateien">📎 ${Qe.get(t.id)}</span>`:""].join("")}async function sa(t){const e=[...t],a=async()=>{for(let l=e.shift();l;l=e.shift())try{const[c,u]=await Promise.all([Ye(l.id),$t(l.id).catch(()=>[])]);As.set(l.id,{done:c.filter(m=>m.done).length,total:c.length}),Qe.set(l.id,u.length)}catch{}};if(await Promise.all([a(),a(),a(),a()]),T.querySelector("#list")){const l=window.scrollY;ne(),window.scrollTo(0,l)}}function is(t){const e=X(t),a=e?{text:t.due?`✓ fällig war ${t.due.toLocaleDateString("de-DE")}`:"✓ erledigt",level:"none"}:ze(t.due),l=(K==null?void 0:K.userId)!=null&&t.responsibleUserId===K.userId;return`
    <button class="task-row card due-${a.level}${e?" is-done":""}${Mt.has(t.id)?" fresh":""}" data-id="${r(t.id)}">
      <span class="task-main">
        <span class="task-name">${r(t.title)}</span>
        <span class="task-meta">
          <span class="num">#${t.number}</span>
          <span class="badge due-${a.level}">${r(a.text)}</span>
          ${t.status?`<span class="badge ${Be(t.status)}">${r(t.status)}</span>`:""}
          ${t.phase==="pending"?`<span class="badge pending" title="Abgeschlossen – wartet auf Bestätigung durch ${r(t.creator??"den Ersteller")}">⏳ wartet auf Bestätigung</span>`:""}
          ${ta(t)}
          <span class="comments${t.unread?" has-unread":""}" title="${t.comments} Kommentare${t.unread?`, davon ${t.unread} ungelesen`:""}">💬 ${t.comments}${t.unread?` <span class="badge unread">${t.unread} neu</span>`:""}</span>
        </span>
      </span>
      ${t.responsible&&!l?t.responsiblePicture?`<img class="avatar who-avatar" src="${r(t.responsiblePicture)}" alt="${r(t.responsible)}" title="Verantwortlich: ${r(t.responsible)}">`:`<span class="avatar who-avatar" title="Verantwortlich: ${r(t.responsible)}">${r(lt(t.responsible))}</span>`:""}
      <span class="chev" aria-hidden="true">›</span>
    </button>`}function na(t){const e={Überfällig:[],"Nächste 7 Tage":[],Später:[],"Ohne Fälligkeit":[]};for(const l of t)l.due?He.overdue(l)?e.Überfällig.push(l):He.week(l)?e["Nächste 7 Tage"].push(l):e.Später.push(l):e["Ohne Fälligkeit"].push(l);const a=(l,c)=>{var u,m;return(((u=l.due)==null?void 0:u.getTime())??0)-(((m=c.due)==null?void 0:m.getTime())??0)};return Object.entries(e).filter(([,l])=>l.length).map(([l,c])=>[l,c.sort(a)])}function xe(t,e,a,l,c=""){return`<button class="chip ${c}${e?" active":""}" ${l} aria-pressed="${e}">${r(t)} <span class="count">${a}</span></button>`}function aa(){const t=T.querySelector("#filters");if(!t)return;const e=c=>Ts(Ht(),{...C,...c}).length,a=F.map(c=>c.status).filter(Boolean),l=[...new Set([...At,...a,...C.status?[C.status]:[]])];t.innerHTML=`
    ${xe("Überfällig",C.time==="overdue",e({time:"overdue"}),'data-time="overdue"',"tone-danger")}
    ${xe("Diese Woche",C.time==="week",e({time:"week"}),'data-time="week"',"tone-warn")}
    ${xe("Mir zugewiesen",C.owner==="assigned",e({owner:"assigned"}),'data-owner="assigned"')}
    ${xe("Von mir erstellt",C.owner==="created",e({owner:"created"}),'data-owner="created"')}
    ${xe("💬 Neu",C.unread,e({unread:!0}),'data-unread="1"')}
    <select id="status-filter" class="chip-select${C.status?" active":""}" aria-label="Status filtern">
      <option value="">Alle Status</option>
      ${l.map(c=>`<option${c===C.status?" selected":""}>${r(c)}</option>`).join("")}
    </select>
`}let re=!1;function ia(t){const e=[];return t.q.trim()&&e.push(`„${t.q.trim()}“`),t.time==="overdue"&&e.push("Überfällig"),t.time==="week"&&e.push("Diese Woche"),t.owner==="assigned"&&e.push("Mir zugewiesen"),t.owner==="created"&&e.push("Von mir erstellt"),t.unread&&e.push("💬 Neu"),t.status&&e.push(t.status),e}function Es(){const t=T.querySelector("#filter-bar");if(!t)return;const e=ia(C);t.innerHTML=`
    <button class="filter-toggle${e.length?" has-active":""}" id="filter-toggle" aria-expanded="${re}">
      🔍 ${e.length?`Filter (${e.length})`:"Suchen & Filtern"} <span class="caret">${re?"▴":"▾"}</span>
    </button>
    ${e.length&&!re?`<span class="filter-summary">${e.map(a=>`<span class="badge">${r(a)}</span>`).join("")}</span>`:""}
    ${e.length?'<button class="link small" id="reset-all" title="Alle Filter und die Suche zurücksetzen">× zurücksetzen</button>':""}`}function ne(){var u;const t=T.querySelector("#list");if(!t)return;const e=Ts(Ht(),C),a=new Set((((u=Te())==null?void 0:u.subject)??"").match(/\d{4,}/g)??[]),l=F.filter(m=>a.has(String(m.number))),c=l.length?`<div class="group-title">Passt zur geöffneten Mail</div>${l.map(is).join("")}`:"";t.innerHTML=c+(e.length?(je(C)?[["Erledigt",[...e].sort((m,p)=>{var E,b;return(((E=p.due)==null?void 0:E.getTime())??0)-(((b=m.due)==null?void 0:b.getTime())??0)})]]:na(e)).map(([m,p])=>`<div class="group-title">${r(m)} <span class="count">${p.length}</span></div>${p.map(is).join("")}`).join(""):`<div class="empty">${ea(C)||C.q?"Keine Aufgabe passt zu diesen Filtern.":"Keine offenen Aufgaben – alles erledigt."}</div>`),aa(),Es()}function Ms(){const t=Te();return oe&&t?`<div class="pick-strip">
        <span class="grow">👆 Tippen Sie auf die Aufgabe, an die die Mail „${r(t.subject||"(ohne Betreff)")}“ soll.</span>
        <button class="small" id="pick-cancel">Abbrechen</button>
      </div>`:`
    <button class="action primary" id="new-task" title="Neue Aufgabe in MyMonolith anlegen"><span class="ico">＋</span> Neue Aufgabe</button>
    <button class="action" id="from-chat" title="Ausgewählte Nachrichten aus einem Teams-Chat an eine Aufgabe posten oder den Chat verknüpfen"><span class="ico">💬</span> Aus Teams-Chat</button>
    ${t&&ks(t.key).length===0?`
      <button class="action" id="pick-for-mail" title="Geöffnete Mail an eine bestehende Aufgabe hängen"><span class="ico">📎</span> Mail an Aufgabe</button>
      <button class="action" id="new-from-mail" title="Aus der geöffneten Mail eine neue Aufgabe anlegen"><span class="ico">📧</span> Aufgabe aus Mail</button>`:""}`}function Et(){var e;const t=T.querySelector("#actions");t&&(t.innerHTML=Ms()),(e=T.querySelector("#list"))==null||e.classList.toggle("picking",oe)}async function ve(t=!0){if(It.hidden=!1,xn())return Gn(T);(t||!F.length)&&(T.innerHTML='<p class="hint pad">Aufgaben werden geladen …</p>');try{if(K??(K=await Xe().catch(()=>{})),t||!F.length){const l=await Ae();F=l.filter(c=>!X(c)),Tt=l.filter(c=>X(c)),Ie=null,je(C)&&await as()}At.length||(At=(await vt().catch(()=>[])).map(l=>l.name)),at=!1,qs(),ra(),t&&sa(F)}catch(l){if(l instanceof un&&l.status===401)return rt(l.message);T.innerHTML=`<div class="error">${r(x(l))}</div>`;return}T.innerHTML=`
    <div class="view">
      <div class="sticky-head">
      <div class="toolbar">
        <strong class="grow">Meine Aufgaben <span class="hint">${F.length}</span></strong>
        <button class="tool-btn" id="theme" title="Design anpassen: Hell/Dunkel, Jahreszeit, Farben" aria-haspopup="menu">🎨</button>
        <button class="tool-btn" id="sound" title="${ge()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"}">${ge()?"🔔":"🔕"}</button>
        <button class="tool-btn" id="refresh" title="Liste neu laden">⟳ Aktualisieren</button>
      </div>
      <div id="actions" class="actions-bar">${Ms()}</div>
      <div id="filter-bar" class="filter-bar"></div>
      <div id="theme-menu" class="theme-menu" role="menu" hidden></div>
      </div>
      <div id="filter-panel" class="filter-panel"${re?"":" hidden"}>
        <input id="search" type="search" placeholder="Suchen nach Titel oder Nummer" value="${r(C.q)}">
        <div id="filters" class="filters"></div>
      </div>
      <div id="list" class="${oe?"picking":""}"></div>
    </div>`;const e=T.querySelector("#search");e.addEventListener("input",()=>{C.q=e.value,ne()});const a=T.querySelector("#filters");a.addEventListener("click",l=>{const c=l.target.closest("button");c&&(c.id==="reset-filters"?C=nt(C.q):c.dataset.time?C.time=C.time===c.dataset.time?"all":c.dataset.time:c.dataset.owner?C.owner=C.owner===c.dataset.owner?"all":c.dataset.owner:c.dataset.unread&&(C.unread=!C.unread),Lt(C),ne())}),a.addEventListener("change",l=>{const c=l.target;c.id==="status-filter"&&(C.status=c.value,Lt(C),je(C)?as().then(ne):ne())}),T.querySelector("#list").addEventListener("click",l=>{const c=l.target.closest(".task-row"),u=Ht().find(p=>p.id===(c==null?void 0:c.dataset.id))??F.find(p=>p.id===(c==null?void 0:c.dataset.id));if(!u)return;const m=oe;oe=!1,Nt(u,void 0,m)}),ne()}async function Nt(t,e,a=!1){const l=window.scrollY;window.scrollTo(0,0),await St(T,t,()=>{ve(at),window.scrollTo(0,l)},e,()=>at=!0),a&&(De==null||De())}function ls(t){window.scrollTo(0,0),Zn(T,t?Te():null,async(e,a)=>{F=(await Ae().catch(()=>F)).filter(c=>!X(c));const l=F.find(c=>c.id===e.id||e.number&&c.number===e.number);l?await Nt(l,a):(await ve(!1),T.insertAdjacentHTML("afterbegin",`<div class="ok">${r(a)}</div>`))},()=>void ve(!1))}document.addEventListener("click",t=>{const e=T.querySelector("#theme-menu"),a=t.composedPath().some(l=>l instanceof HTMLElement&&(l.id==="theme-menu"||l.id==="theme"));e&&!e.hidden&&!a&&(e.hidden=!0)});T.addEventListener("click",t=>{var a,l;const e=t.target;if(e.closest("#new-task"))ls(!1);else if(e.closest("#from-chat"))bs({tasks:F,onClose:c=>c&&void ve()});else if(e.closest("#new-from-mail"))ls(!0);else if(e.closest("#refresh"))ve();else if(e.closest("#filter-toggle"))re=!re,(a=T.querySelector("#filter-panel"))==null||a.toggleAttribute("hidden",!re),Es(),re&&((l=T.querySelector("#search"))==null||l.focus());else if(e.closest("#reset-all")){C=nt(),Lt(C);const c=T.querySelector("#search");c&&(c.value=""),ne()}else if(e.closest("#theme")){const c=T.querySelector("#theme-menu");c&&(c.hidden=!c.hidden,c.hidden||(c.innerHTML=Qt()))}else if(e.closest("#theme-menu button.opt")){const c=e.closest("#theme-menu button.opt"),u=c.dataset.mode?{mode:c.dataset.mode}:c.dataset.bg?{background:c.dataset.bg}:{accent:c.dataset.accent},m=In(u);T.querySelector("#theme-menu").innerHTML=Qt(m)}else if(e.closest("#sound")){Wn(!ge());const c=T.querySelector("#sound");c&&(c.textContent=ge()?"🔔":"🔕",c.title=ge()?"Hinweiston bei neuen Nachrichten ist an – zum Ausschalten klicken":"Hinweiston ist aus – zum Einschalten klicken"),ge()&&$s()}else e.closest("#pick-for-mail")?(oe=!0,Et()):e.closest("#pick-cancel")&&(oe=!1,Et())});It.addEventListener("click",()=>{dn(),rt()});const la=6e4;let it,Cs=new Map;const Mt=new Set;function qs(){Cs=new Map(F.map(t=>[t.id,t.unread]))}function ra(){it||(it=window.setInterval(()=>void ca(),la))}function oa(){window.clearInterval(it),it=void 0}async function ca(){if(!qt()||document.hidden)return;let t;try{t=(await Ae()).filter(a=>!X(a))}catch{return}const e=t.filter(a=>a.unread>(Cs.get(a.id)??0));if(F=t,qs(),!!e.length){$s();for(const a of e)Mt.add(a.id);if(setTimeout(()=>{for(const a of e)Mt.delete(a.id);T.querySelectorAll(".task-row.fresh").forEach(a=>a.classList.remove("fresh"))},15e3),T.querySelector("#list")){const a=window.scrollY;ne(),window.scrollTo(0,a)}else at=!0}}function da(){Vn(),ps(),Hn(),Dn(()=>{if(st)return st();oe=!1,Et(),ne()}),qt()?ve().then(xs):rt()}let rs=new URLSearchParams(location.search).get("task");async function xs(){const t=rs;if(!(!t||!qt())){rs=null;try{const e=F.find(a=>a.id===t)??await fn(t);await Nt(e)}catch(e){T.insertAdjacentHTML("afterbegin",`<div class="error">Aufgabe konnte nicht geöffnet werden: ${r(x(e))}</div>`)}}}async function ua(){var t,e;try{const a=location.href.split(/[?#]/)[0],c=(t=(await fetch(`${a}?check=${Date.now()}`,{cache:"no-store"}).then(b=>b.text())).match(/assets\/(taskpane|teams)-[\w-]+\.js/))==null?void 0:t[0],u=[...document.scripts].map(b=>b.src).find(b=>/assets\/(taskpane|teams)-/.test(b));if(!c||!u||u.includes(c))return;const m=()=>{const b=new URL(location.href);b.searchParams.set("v",String(Date.now())),location.replace(b.toString())},p=document.getElementById("update-note");p&&(p.hidden=!1,(e=p.querySelector("button"))==null||e.addEventListener("click",m));let E="";try{E=sessionStorage.getItem("mm-update-tried")??"",sessionStorage.setItem("mm-update-tried",c)}catch{}E!==c&&m()}catch{}}let os=!1;const Ds=()=>{os||(os=!0,da())};ua();typeof Office<"u"&&Office.onReady(Ds);setTimeout(Ds,typeof Office<"u"?1500:0);document.getElementById("version").textContent="Version 2026-10-12 11:05 UTC";
