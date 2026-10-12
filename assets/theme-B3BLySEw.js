const b="mm-addin-theme",r={mode:"auto",background:"grey",accent:"red"};function f(){try{const e={...r,...JSON.parse(localStorage.getItem(b)??"{}")};return e.background in i||(e.background=r.background),e.accent in s||(e.accent=r.accent),e}catch{return{...r}}}function y(e){try{localStorage.setItem(b,JSON.stringify(e))}catch{}}const h={white:["#ffffff","#1f1f1f"],grey:["#f1f1f3","#252527"],sand:["#f6efe3","#29241d"],mint:["#e6f5ef","#1b2622"],sky:["#e8f1fb","#1a212b"]},s={red:{label:"Monolith-Rot",c:["#9b1b30","#d8566c"]},blue:{label:"Blau",c:["#0f5ba7","#6aa9ef"]},green:{label:"Grün",c:["#2e7d32","#6fbf73"]},purple:{label:"Lila",c:["#6a3fb0","#b49af0"]},orange:{label:"Orange",c:["#c45a00","#f0a050"]},grey:{label:"Grau",c:["#4a4a4a","#c4c4c4"]}},i={white:"Weiß",grey:"Hellgrau",sand:"Sand",mint:"Mint",sky:"Hellblau"},o=typeof matchMedia=="function"?matchMedia("(prefers-color-scheme: dark)"):null;let d=null;function k(e){d=e,l()}let g="Outlook";const $=e=>g=e;function v(e){var t,c;if(e!=="auto")return e==="dark";if(d!==null)return d;try{const a=(c=(t=Office==null?void 0:Office.context)==null?void 0:t.officeTheme)==null?void 0:c.bodyBackgroundColor;if(a&&/^#?[0-9a-f]{6}$/i.test(a)){const n=parseInt(a.replace("#",""),16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255<.5}}catch{}return!!(o!=null&&o.matches)}function l(e=f()){const t=v(e.mode),c=h[e.background][t?1:0],a=s[e.accent].c[t?1:0],n=document.documentElement;n.dataset.mode=t?"dark":"light",n.style.setProperty("--page",c),n.style.setProperty("--page-img","none"),n.style.setProperty("--brand",a),n.style.setProperty("--brand-hover",`color-mix(in srgb, ${a} 85%, ${t?"#fff":"#000"})`),n.style.colorScheme=t?"dark":"light"}function O(e){const t={...f(),...e};return y(t),l(t),t}function T(){var e,t,c;(e=o==null?void 0:o.addEventListener)==null||e.call(o,"change",()=>l());try{(c=(t=Office.context.mailbox)==null?void 0:t.addHandlerAsync)==null||c.call(t,Office.EventType.OfficeThemeChanged,()=>l())}catch{}}function H(e=f()){const t=(a,n,u,m,p="")=>`<button type="button" class="opt${m?" active":""}" data-${a}="${n}" aria-pressed="${m}">${p}${u}</button>`,c=(a,n="")=>`<span class="swatch" style="background:${a}${n}"></span>`;return`
    <div class="theme-section">
      <div class="theme-title">Darstellung</div>
      <div class="opts">
        ${t("mode","light","☀️ Hell",e.mode==="light")}
        ${t("mode","dark","🌙 Dunkel",e.mode==="dark")}
        ${t("mode","auto",`🖥 Wie ${g}`,e.mode==="auto")}
      </div>
    </div>
    <div class="theme-section">
      <div class="theme-title">Hintergrund</div>
      <div class="opts">
        ${Object.keys(i).map(a=>t("bg",a,i[a],e.background===a,c(h[a][0],";border:1px solid var(--line)"))).join("")}
      </div>
    </div>
    <div class="theme-section">
      <div class="theme-title">Akzentfarbe</div>
      <div class="opts">
        ${Object.keys(s).map(a=>t("accent",a,s[a].label,e.accent===a,c(s[a].c[0]))).join("")}
      </div>
    </div>`}export{l as a,k as b,$ as s,H as t,O as u,T as w};
