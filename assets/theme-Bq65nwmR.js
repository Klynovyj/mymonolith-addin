import{t as o}from"./i18n-DuFfdEFx.js";const g="mm-addin-theme",l={mode:"auto",background:"grey",accent:"red"};function m(){try{const e={...l,...JSON.parse(localStorage.getItem(g)??"{}")};return e.background in d||(e.background=l.background),e.accent in r||(e.accent=l.accent),e}catch{return{...l}}}function v(e){try{localStorage.setItem(g,JSON.stringify(e))}catch{}}const p={white:["#ffffff","#1f1f1f"],grey:["#f1f1f3","#252527"],sand:["#f6efe3","#29241d"],mint:["#e6f5ef","#1b2622"],sky:["#e8f1fb","#1a212b"]},r={red:{label:"Monolith-Rot",c:["#9b1b30","#d8566c"]},blue:{label:"Blau",c:["#0f5ba7","#6aa9ef"]},green:{label:"Grün",c:["#2e7d32","#6fbf73"]},purple:{label:"Lila",c:["#6a3fb0","#b49af0"]},orange:{label:"Orange",c:["#c45a00","#f0a050"]},grey:{label:"Grau",c:["#4a4a4a","#c4c4c4"]}},d={white:"Weiß",grey:"Hellgrau",sand:"Sand",mint:"Mint",sky:"Hellblau"},s=typeof matchMedia=="function"?matchMedia("(prefers-color-scheme: dark)"):null;let f=null;function O(e){f=e,i()}let u="Outlook";const S=e=>u=e;function $(e){var t,c;if(e!=="auto")return e==="dark";if(f!==null)return f;try{const a=(c=(t=Office==null?void 0:Office.context)==null?void 0:t.officeTheme)==null?void 0:c.bodyBackgroundColor;if(a&&/^#?[0-9a-f]{6}$/i.test(a)){const n=parseInt(a.replace("#",""),16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255<.5}}catch{}return!!(s!=null&&s.matches)}function i(e=m()){const t=$(e.mode),c=p[e.background][t?1:0],a=r[e.accent].c[t?1:0],n=document.documentElement;n.dataset.mode=t?"dark":"light",n.style.setProperty("--page",c),n.style.setProperty("--page-img","none"),n.style.setProperty("--brand",a),n.style.setProperty("--brand-hover",`color-mix(in srgb, ${a} 85%, ${t?"#fff":"#000"})`),n.style.colorScheme=t?"dark":"light"}function T(e){const t={...m(),...e};return v(t),i(t),t}function H(){var e,t,c;(e=s==null?void 0:s.addEventListener)==null||e.call(s,"change",()=>i());try{(c=(t=Office.context.mailbox)==null?void 0:t.addHandlerAsync)==null||c.call(t,Office.EventType.OfficeThemeChanged,()=>i())}catch{}}function E(e=m()){const t=(a,n,b,h,y="")=>`<button type="button" class="opt${h?" active":""}" data-${a}="${n}" aria-pressed="${h}">${y}${b}</button>`,c=(a,n="")=>`<span class="swatch" style="background:${a}${n}"></span>`;return`
    <div class="theme-section">
      <div class="theme-title">${o("Darstellung")}</div>
      <div class="opts">
        ${t("mode","light",`☀️ ${o("Hell")}`,e.mode==="light")}
        ${t("mode","dark",`🌙 ${o("Dunkel")}`,e.mode==="dark")}
        ${t("mode","auto",`🖥 ${u==="System"?o("Wie System"):o("Wie {host}",{host:u})}`,e.mode==="auto")}
      </div>
    </div>
    <div class="theme-section">
      <div class="theme-title">${o("Hintergrund")}</div>
      <div class="opts">
        ${Object.keys(d).map(a=>t("bg",a,o(d[a]),e.background===a,c(p[a][0],";border:1px solid var(--line)"))).join("")}
      </div>
    </div>
    <div class="theme-section">
      <div class="theme-title">${o("Akzentfarbe")}</div>
      <div class="opts">
        ${Object.keys(r).map(a=>t("accent",a,o(r[a].label),e.accent===a,c(r[a].c[0]))).join("")}
      </div>
    </div>`}export{i as a,O as b,u as h,S as s,E as t,T as u,H as w};
