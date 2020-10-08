/*! For license information please see 2.5375add2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{108:function(e,t,n){"use strict";var a=n(0),c=n(130);t.a=function(){const e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},110:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},111:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(0);const c={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const[n,r]=Object(a.useState)(t);return Object(a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){r(t())}}),[]),n}},112:function(e,t,n){"use strict";var a=n(103),c=n(108),r=n(107),o=n(109);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(a.a)(),{isDarkTheme:t}=Object(c.a)(),n=Object(r.a)(e.href||"/");let s={};e.target?s={target:e.target}:Object(o.a)(n)||(s={rel:"noopener noreferrer",target:"_blank"});const l=e.srcDark&&t?e.srcDark:e.src;return{logoLink:n,logoLinkProps:s,logoImageUrl:Object(r.a)(l),logoAlt:e.alt}}},113:function(e,t,n){"use strict";var a=n(2),c=n(0),r=n.n(c),o=n(105),s=n(120),l=n(103),i=n(107),u=n(8);const d="light",f="dark",h=e=>e===f?f:d,m=()=>u.a.canUseDOM?h(document.documentElement.getAttribute("data-theme")):d,v=e=>{try{localStorage.setItem("theme",h(e))}catch(t){console.error(t)}};var b=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(l.a)(),[t,n]=Object(c.useState)(m),a=Object(c.useCallback)((()=>{n(d),v(d)}),[]),r=Object(c.useCallback)((()=>{n(f),v(f)}),[]);return Object(c.useEffect)((()=>{document.documentElement.setAttribute("data-theme",h(t))}),[t]),Object(c.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(h(e))}catch(t){console.error(t)}}),[n]),Object(c.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{n(e?f:d)}))}),[]),{isDarkTheme:t===f,setLightTheme:a,setDarkTheme:r}},p=n(130);var g=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=b();return r.a.createElement(p.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)};const k="docusaurus.tab.";var E=()=>{const[e,t]=Object(c.useState)({}),n=Object(c.useCallback)(((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(c.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(k)){e[n.substring(k.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};const O="docusaurus.announcement.dismiss",y="docusaurus.announcement.id";var j=()=>{const{announcementBar:e}=Object(l.a)().siteConfig.themeConfig,[t,n]=Object(c.useState)(!0),a=Object(c.useCallback)((()=>{localStorage.setItem(O,"true"),n(!0)}),[]);return Object(c.useEffect)((()=>{if(!e)return;const{id:t}=e;let a=localStorage.getItem(y);"annoucement-bar"===a&&(a="announcement-bar");const c=t!==a;localStorage.setItem(y,t),c&&localStorage.setItem(O,"false"),(c||"false"===localStorage.getItem(O))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},w=n(131);var C=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=E(),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}=j();return r.a.createElement(w.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:c}},e.children)},_=n(132),N=n(55),S=n.n(N);var T=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(l.a)(),{content:t,backgroundColor:n,textColor:a,isCloseable:c}=e,{isAnnouncementBarClosed:s,closeAnnouncementBar:i}=Object(_.a)();return!t||c&&s?null:r.a.createElement("div",{className:S.a.announcementBar,style:{backgroundColor:n,color:a},role:"banner"},r.a.createElement("div",{className:Object(o.a)(S.a.announcementBarContent,{[S.a.announcementBarCloseable]:c}),dangerouslySetInnerHTML:{__html:t}}),c?r.a.createElement("button",{type:"button",className:S.a.announcementBarClose,onClick:i,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=n(114),B=n(117);n(57);function x({children:e}){return r.a.createElement(g,null,r.a.createElement(C,null,e))}t.a=function(e){const{siteConfig:t}=Object(l.a)(),{favicon:n,title:c,themeConfig:{image:u,metadatas:d},url:f,titleDelimiter:h}=t,{children:m,title:v,noFooter:b,description:p,image:g,keywords:k,permalink:E,wrapperClassName:O}=e,y=v?`${v} ${h} ${c}`:c,j=g||u,w=Object(i.a)(j,{absolute:!0}),C=Object(i.a)(n);return r.a.createElement(x,null,r.a.createElement(s.a,null,r.a.createElement("html",{lang:"en"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:w}),j&&r.a.createElement("meta",{property:"twitter:image",content:w}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),E&&r.a.createElement("meta",{property:"og:url",content:f+E}),E&&r.a.createElement("link",{rel:"canonical",href:f+E}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(s.a,null,d.map(((e,t)=>r.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))))),r.a.createElement(T,null),r.a.createElement(L.a,null),r.a.createElement("div",{className:Object(o.a)("main-wrapper",O)},m),!b&&r.a.createElement(B.a,null))}},115:function(e,t,n){"use strict";var a=n(2),c=n(0),r=n.n(c),o=n(137),s=n.n(o),l=n(103),i=n(105),u=n(56),d=n.n(u);const f=({icon:e,style:t})=>r.a.createElement("span",{className:Object(i.a)(d.a.toggle,d.a.dark),style:t},e),h=({icon:e,style:t})=>r.a.createElement("span",{className:Object(i.a)(d.a.toggle,d.a.light),style:t},e);t.a=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:c,lightIconStyle:o}}}},isClient:i}=Object(l.a)();return r.a.createElement(s.a,Object(a.a)({disabled:!i,icons:{checked:r.a.createElement(f,{icon:t,style:n}),unchecked:r.a.createElement(h,{icon:c,style:o})}},e))}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),c=n.n(a),r=n(127);const o={default:()=>r.a,docsVersion:()=>n(142).default,docsVersionDropdown:()=>n(146).default};function s({type:e,...t}){const n=((e="default")=>{const t=o[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return c.a.createElement(n,t)}},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=()=>null},119:function(e,t,n){"use strict";var a=n(0),c=n(121);var r=function(e){const[t,n]=Object(a.useState)(e);return Object(a.useEffect)((()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]),[t,n]},o=n(133);t.a=e=>{const[t,n]=Object(a.useState)(!0),[s,l]=Object(a.useState)(!1),[i,u]=Object(a.useState)(0),[d,f]=Object(a.useState)(0),h=Object(a.useCallback)((e=>{null!==e&&f(e.getBoundingClientRect().height)}),[]),m=Object(c.useLocation)(),[v,b]=r(m.hash);return Object(o.a)((({scrollY:t})=>{if(!e)return;if(0===t&&n(!0),t<d)return;if(s)return l(!1),n(!1),void u(t);const a=document.documentElement.scrollHeight-d,c=window.innerHeight;i&&t>=i?n(!1):t+c<a&&n(!0),u(t)}),[i,d]),Object(a.useEffect)((()=>{e&&(n(!0),b(m.hash))}),[m]),Object(a.useEffect)((()=>{e&&v&&l(!0)}),[v]),{navbarRef:h,isNavbarVisible:t}}},127:function(e,t,n){"use strict";var a,c=n(2),r=n(0),o=n.n(r),s=n(105),l=n(106),i=n(107);var u=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},d=r.useLayoutEffect,f=function(e){var t=Object(r.useRef)(e);return d((function(){t.current=e})),t},h="touchstart",m=["mousedown",h],v=function(e){if(e===h)return u()?{passive:!0}:void 0};var b=function(e,t){var n=f(t);Object(r.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return m.forEach((function(e){document.addEventListener(e,a,v(e))})),function(){m.forEach((function(e){document.removeEventListener(e,a,v(e))}))}}}),[!t])};function p({activeBasePath:e,activeBaseRegex:t,to:n,href:a,label:r,activeClassName:s="navbar__link--active",prependBaseUrlToHref:u,...d}){const f=Object(i.a)(n),h=Object(i.a)(e),m=Object(i.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(l.a,Object(c.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:u?m:a}:{isNavLink:!0,activeClassName:s,to:f,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(h)}:null},d),r)}function g({items:e,position:t,className:n,...a}){const l=o.a.useRef(null),i=o.a.useRef(null),[u,d]=Object(r.useState)(!1);function f(e){if(e){var t,n;const e=null==i||null===(t=i.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;e&&e.focus()}d(e)}b(l,(()=>f(!1)));const h=(e,t=!1)=>Object(s.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:l,className:Object(s.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(p,Object(c.a)({className:h(n)},a,{onClick:a.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{("Enter"===e.key&&!a.to||"Tab"===e.key)&&(e.preventDefault(),f(!0))}}),a.label),o.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map((({className:t,...n},a)=>o.a.createElement("li",{key:a},o.a.createElement(p,Object(c.a)({onKeyDown:t=>{a===e.length-1&&"Tab"===t.key&&(t.preventDefault(),f(!1))},activeClassName:"dropdown__link--active",className:h(t,!0)},n))))))):o.a.createElement(p,Object(c.a)({className:h(n)},a))}function k({items:e,position:t,className:n,...a}){const r=(e,t=!1)=>Object(s.a)("menu__link",{"menu__link--sublist":t},e);return e?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(c.a)({className:r(n,!0)},a),a.label),o.a.createElement("ul",{className:"menu__list"},e.map((({className:e,...t},n)=>o.a.createElement("li",{className:"menu__list-item",key:n},o.a.createElement(p,Object(c.a)({activeClassName:"menu__link--active",className:r(e)},t,{onClick:a.onClick}))))))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(c.a)({className:r(n)},a)))}t.a=function({mobile:e=!1,...t}){const n=e?k:g;return o.a.createElement(n,t)}},130:function(e,t,n){"use strict";var a=n(0);const c=n.n(a).a.createContext(void 0);t.a=c},131:function(e,t,n){"use strict";var a=n(0);const c=Object(a.createContext)(void 0);t.a=c},132:function(e,t,n){"use strict";var a=n(0),c=n(131);t.a=function(){const e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},133:function(e,t,n){"use strict";var a=n(0),c=n(8);const r=()=>({scrollX:c.a.canUseDOM?window.pageXOffset:0,scrollY:c.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[n,c]=Object(a.useState)(r()),o=()=>{const t=r();c(t),e&&e(t)};return Object(a.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0}))),t),n}},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=f(r),s=f(n(138)),l=f(n(7)),i=f(n(139)),u=f(n(140)),d=n(141);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,c=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),r=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},c,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},138:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=c.apply(null,a);o&&e.push(o)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a)}()},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,c=n(0),r=(a=c)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,c=n(0),r=(a=c)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(2),c=n(0),r=n.n(c),o=n(127),s=n(122);function l({label:e,to:t,docsPluginId:n,...c}){const l=Object(s.useActiveVersion)(n),i=Object(s.useLatestVersion)(n),u=null!=l?l:i,d=null!=e?e:u.label,f=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(u).path;return r.a.createElement(o.a,Object(a.a)({},c,{label:d,to:f}))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(2),c=n(0),r=n.n(c),o=n(127),s=n(122);const l=e=>e.docs.find((t=>t.id===e.mainDocId));function i({mobile:e,docsPluginId:t,...n}){var c;const i=Object(s.useActiveDocContext)(t),u=Object(s.useVersions)(t),d=Object(s.useLatestVersion)(t);const f=null!==(c=i.activeVersion)&&void 0!==c?c:d,h=e?"Versions":f.label,m=e?void 0:l(f).path;return r.a.createElement(o.a,Object(a.a)({},n,{mobile:e,label:h,to:m,items:function(){if(!(u.length<=1))return u.map((e=>{const t=(null==i?void 0:i.alternateDocVersions[e.name])||l(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==i?void 0:i.activeVersion)}}))}()}))}}}]);