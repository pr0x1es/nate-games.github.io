var x=Object.defineProperty;var y=(e,r,s)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;var c=(e,r,s)=>(y(e,typeof r!="symbol"?r+"":r,s),s);import{t as v,r as p,e as h,u as w,j as t,L as j}from"./index-BgEGh2uE.js";import{g as k}from"./games-BPI3QgYG.js";import $ from"./_...all_-DhkMWGKY.js";var m=":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate var(--uib-speed) linear infinite;height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:var(--uib-dash),var(--uib-gap);stroke-dashoffset:0;stroke-linecap:round}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes rotate{to{transform:rotate(1turn)}}";class b extends v{constructor(){super();c(this,"_attributes",["size","color","speed","stroke","stroke-length","bg-opacity"]);c(this,"size");c(this,"color");c(this,"speed");c(this,"stroke");c(this,"stroke-length");c(this,"bg-opacity");this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}static get observedAttributes(){return["size","color","stroke","stroke-length","speed","bg-opacity"]}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",stroke:5,"stroke-length":.25,speed:.8,"bg-opacity":.1});const s=parseInt(this.size),n=parseInt(this.stroke),o=s/2,l=Math.max(0,s/2-n/2);this.template.innerHTML=`
      <svg
        class="container"
        viewBox="${o} ${o} ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${l}" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${this.size}" 
          cy="${this.size}" 
          r="${l}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-dash: ${100*parseFloat(this["stroke-length"])};
          --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${m}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){const s=this.shadow.querySelector("style"),n=this.shadow.querySelector("svg"),o=this.shadow.querySelectorAll("circle");if(!s)return;const l=parseInt(this.size),i=parseInt(this.stroke),u=l/2,f=String(Math.max(0,l/2-i/2));n.setAttribute("height",this.size),n.setAttribute("width",this.size),n.setAttribute("viewBox",`${u} ${u} ${this.size} ${this.size}`),o.forEach(a=>{a.setAttribute("cx",this.size),a.setAttribute("cy",this.size),a.setAttribute("r",f),a.setAttribute("stroke-width",this.stroke)}),s.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-dash: ${100*parseFloat(this["stroke-length"])};
        --uib-gap: ${100-100*parseFloat(this["stroke-length"])};
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${m}
    `}}var z={register:(e="l-ring-2")=>{customElements.get(e)||customElements.define(e,class extends b{})},element:b};const E=e=>{var{src:r,config:s,children:n}=e,o=function(i,u){var f={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&u.indexOf(a)<0&&(f[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(a=Object.getOwnPropertySymbols(i);d<a.length;d++)u.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(i,a[d])&&(f[a[d]]=i[a[d]])}return f}(e,["src","config","children"]);const l=Object.assign(Object.assign({},{}),s);return p.useEffect(()=>{const i=document.createElement("script");return i.src="https://unpkg.com/@ruffle-rs/ruffle",i.async=!0,i.onload=()=>{window.RufflePlayer=window.RufflePlayer||{},window.RufflePlayer.config=l},document.body.appendChild(i),()=>{document.body.removeChild(i)}},[]),h.createElement(h.Fragment,null,h.createElement("object",Object.assign({data:r},o),h.createElement("param",{name:"movie",value:r}),n||h.createElement("p",null,"Your browser does not support WASM,"," ",h.createElement("a",{href:"https://ruffle.rs/",rel:"noopener noreferrer"},"see Ruffle documentation")," ","for more information.")))},A=E;z.register();const g=({game:e,hidden:r})=>{const s=e.file.includes("{GAME_ID}")?e.file.replace("{GAME_ID}",e.id):e.file,n=(s.startsWith("/assets/games/")&&s.endsWith("/"),s);return t.jsx("div",{className:`${r?"hidden":"inline-block"}`,children:e.type=="embed"?t.jsx("iframe",{src:n,className:"w-full h-[calc(100%-2.75rem)] absolute top-0 left-0"}):t.jsx(A,{src:n,className:"h-[calc(100%-2.75rem)] w-full absolute left-0 top-0",config:{autoplay:"on",unmuteOverlay:"hidden",contextMenu:"off",preloader:!1,warnOnUnsupportedContent:!1}})})};function P(){const[e,r]=p.useState(null),s=p.useRef(null),{id:n}=w();return p.useEffect(()=>{const o=k.find(l=>l.id==n);r(o?{loaded:!1,started:!1,data:o}:null)},[n]),p.useEffect(()=>{e&&e.data&&e.data.sdk&&(window.onmessage=function(o){o.data=="ns_SDK: Loading Complete"&&r({...e,loaded:!0})})},[e]),t.jsx(t.Fragment,{children:e?t.jsx("main",{className:"flex justify-center items-center mt-24 pb-5",children:t.jsxs("div",{children:[t.jsxs("div",{ref:s,className:"w-auto h-[42rem] aspect-video overflow-hidden relative rounded-md mb-2",children:[e.started&&t.jsx(t.Fragment,{children:e.loaded&&!e.data.sdk?t.jsx(g,{game:e.data,hidden:!1}):t.jsx(t.Fragment,{children:e.data.sdk&&t.jsx(g,{game:e.data,hidden:!e.loaded})})}),!e.loaded&&t.jsxs(t.Fragment,{children:[t.jsx("img",{src:e.data.image.includes("{GAME_ID}")?e.data.image.replace("{GAME_ID}",e.data.id):e.data.image,className:"absolute object-cover h-full w-full blur-2xl scale-125 opacity-25"}),t.jsxs("div",{className:"absolute w-full h-full flex flex-col gap-4 justify-center items-center",children:[t.jsx("img",{src:e.data.image.includes("{GAME_ID}")?e.data.image.replace("{GAME_ID}",e.data.id):e.data.image,className:" rounded-3xl h-32"}),t.jsx("h3",{className:"text-xl font-urbanist",children:e.data.title}),t.jsxs("button",{className:"w-[3.5rem] disabled:w-20 px-1.5 py-2.5 flex justify-center items-center gap-2 transition-all duration-150 rounded-lg text-md text-sm bg-blue-500 hover:bg-blue-600",...e.started&&!e.loaded?{disabled:!0}:{},onClick:()=>{e.data.sdk?r({...e,started:!0}):r({...e,started:!0,loaded:!0})},children:["Play"," ",e.started&&!e.loaded&&t.jsx("l-ring-2",{size:"20",stroke:"4","bg-opacity":"0.1",speed:"0.75",color:"white"})]})]})]}),t.jsxs("div",{className:"w-full h-[2.75rem] text-left flex items-center justify-start absolute bottom-0 left-0 bg-[#111] z-10 overflow-hidden",children:[t.jsx(j,{to:"/",children:t.jsxs("h3",{className:"text-sm text-white hover:text-blue-500 flex items-center gap-1 transition duration-200 ml-3 cursor-pointer hover:scale-105",children:["nate-games.github.io"," ",t.jsx("img",{src:"/favicon.ico",className:" h-6 aspect-square rounded-md align-baseline"})]})}),t.jsx("button",{onMouseDown:()=>{s.current&&(document.fullscreenElement?document.exitFullscreen():s.current.requestFullscreen())},className:"w-auto h-full transition-all absolute aspect-square outline-none group bottom-0 right-0 flex justify-center items-center hover:bg-[#222]",children:t.jsx("svg",{className:"h-6 transition fill-white group-hover:fill-blue-500",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})})})]})]}),t.jsx("a",{href:`https://github.com/nate-games/nate-games.github.io/discussions/new?category=bug-report&title=${e.data.title} - id@${e.data.id}`,target:"_blank",children:t.jsx("button",{className:"cursor-pointer text-sm transition-all duration-75 bg-[#222] text-white px-4 py-2 rounded-md border-[#111] border-b-[6px] hover:bg-[#252525] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[0px] active:translate-y-[2px]",children:"Report a bug"})})]})}):t.jsx($,{})})}export{P as default};
