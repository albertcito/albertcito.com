(window.webpackJsonp=window.webpackJsonp||[]).push([[27,6],{121:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t(133),i=t(154),s=t(127);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t},l.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.a.createElement(s.a,{className:"pagination-nav__link",to:n},l.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},m=t(140);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:s}}=Object(r.default)(),{blogDescription:C,blogTitle:u,permalink:d}=a,g="/"===d?s:u;return l.a.createElement(c.a,{title:g,description:C,wrapperClassName:"blog-wrapper"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{sidebar:n})),l.a.createElement("main",{className:"col col--8"},t.map((({content:e})=>l.a.createElement(i.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},l.a.createElement(e,null)))),l.a.createElement(o,{metadata:a})))))}},132:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),c=t(127),i=t(134),s=t(128),o=t(22),m=t(126),C=t(129),u=t(124),d=t(56),g=t.n(d);a.a=e=>{const{isClient:a}=Object(o.default)(),{navbar:{title:t,logo:l={src:""}}}=Object(m.useThemeConfig)(),{imageClassName:d,titleClassName:E,...p}=e,b=Object(s.a)(l.href||"/"),v=l.target?{target:l.target}:Object(C.a)(b)?{}:{rel:"noopener noreferrer",target:"_blank"},f={light:Object(s.a)(l.src),dark:Object(s.a)(l.srcDark||l.src)};return r.a.createElement(c.a,Object(n.a)({to:b},p,v),l.src&&r.a.createElement(i.a,{key:a,className:d,sources:f,alt:l.alt||t||"Logo"}),r.a.createElement("div",{className:Object(u.a)(g.a.myName)},"Albert",r.a.createElement("span",null,"Tjornehoj")))}},135:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(124),c=t(127),i=t(22),s=t(57),o=t.n(s);a.a=function(){const e=Object(i.default)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t;return n?l.a.createElement("footer",{id:"footer",className:Object(r.a)("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:Object(r.a)("container")},l.a.createElement("div",{className:"center smallContent"},l.a.createElement("div",{className:"smallGray"},"Let's talk!"),l.a.createElement("h1",{className:"pageH1"},"Get in touch"),l.a.createElement("p",{className:"contentText"},"Please feel free to contact me with any questions or just to say hello. I will reply as soon as possible."),l.a.createElement(c.a,{to:"mailto:me@albertcito.com",className:"button button--primary",style:{color:"white"}},"me@albertcito.com")),l.a.createElement("div",{className:o.a.rrss},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.a,{to:"https://www.linkedin.com/in/albertcito/?locale=en_US"},l.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 382 382",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M347.445 0H34.555C15.471 0 0 15.471 0 34.555V347.444C0 366.529 15.471 382 34.555 382H347.444C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0ZM118.207 329.844C118.207 335.398 113.705 339.9 108.151 339.9H65.345C59.791 339.9 55.289 335.398 55.289 329.844V150.403C55.289 144.849 59.791 140.347 65.345 140.347H108.151C113.705 140.347 118.207 144.849 118.207 150.403V329.844ZM86.748 123.432C64.289 123.432 46.082 105.225 46.082 82.766C46.082 60.307 64.289 42.1 86.748 42.1C109.207 42.1 127.414 60.307 127.414 82.766C127.414 105.225 109.208 123.432 86.748 123.432ZM341.91 330.654C341.91 335.76 337.77 339.9 332.664 339.9H286.73C281.624 339.9 277.484 335.76 277.484 330.654V246.486C277.484 233.93 281.167 191.465 244.671 191.465C216.362 191.465 210.62 220.531 209.467 233.575V330.654C209.467 335.76 205.328 339.9 200.221 339.9H155.795C150.689 339.9 146.549 335.76 146.549 330.654V149.593C146.549 144.487 150.689 140.347 155.795 140.347H200.221C205.327 140.347 209.467 144.487 209.467 149.593V165.248C219.964 149.495 235.564 137.336 268.779 137.336C342.331 137.336 341.91 206.052 341.91 243.808V330.654Z",fill:"#ffffff"})))),l.a.createElement("li",null,l.a.createElement(c.a,{to:"http://github.com/albertcito/"},l.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 312 283",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fill:"white",d:"M156.516 0C69.9105 0 0 64.9004 0 145.299C0 209.231 44.8679 263.476 107.474 282.849C115.822 283.818 117.909 279.943 117.909 276.069V250.884C74.0842 259.602 64.6933 231.51 64.6933 231.51C57.3892 215.043 46.9548 210.2 46.9548 210.2C32.3466 201.482 47.9982 201.482 47.9982 201.482C63.6498 202.45 71.9973 216.012 71.9973 216.012C85.5621 238.291 108.518 231.51 117.909 227.636C118.952 217.949 123.126 212.137 128.343 208.262C93.9096 204.388 57.3892 191.795 57.3892 136.581C57.3892 121.083 63.6498 107.522 73.0408 97.8349C70.9539 93.9603 65.7367 79.4303 74.0842 59.0884C74.0842 59.0884 87.6489 55.2138 116.865 73.6184C129.387 70.7124 142.951 68.775 156.516 68.775C170.081 68.775 183.645 70.7124 196.167 73.6184C226.426 55.2138 238.948 59.0884 238.948 59.0884C247.295 79.4303 242.078 93.9603 239.991 97.8349C250.426 107.522 255.643 121.083 255.643 136.581C255.643 192.764 219.122 204.388 184.689 208.262C189.906 213.106 195.123 221.824 195.123 235.385V275.1C195.123 278.975 198.254 283.818 205.558 281.881C268.164 262.508 311.988 208.262 311.988 144.331C313.032 64.9004 243.121 0 156.516 0Z"})))))),l.a.createElement("div",{className:Object(r.a)("holaTest",o.a.copy)},"\xa9 ",(new Date).getFullYear()," Made with \u2665 by Albert Tjornehoj \u2013 Built  with ",l.a.createElement(c.a,{to:"https://www.docusaurus.io/"},"Docusaurus")))):null}}}]);