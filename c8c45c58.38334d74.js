(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(81)),o=a(83),l=(a(85),{id:"run-private-queries-with-laravel-graphiql",title:"Run private queries with Laravel + GraphiQL",tags:["php","laravel","graphql"],image:"https://albertcito.com/img/blog/Laravel-GraphQL-ModHeader-Authentication.png"}),c={permalink:"/blog/run-private-queries-with-laravel-graphiql",source:"@site/blog/2020-09-1-create-update-admin-data-with-laravel-graphql.mdx",description:"In my previous post I published how to authenticate with Laravel + GraphQL. The current post is to know how run a private query using GraphiQL.",date:"2020-09-01T04:00:00.000Z",tags:[{label:"php",permalink:"/blog/tags/php"},{label:"laravel",permalink:"/blog/tags/laravel"},{label:"graphql",permalink:"/blog/tags/graphql"}],title:"Run private queries with Laravel + GraphiQL",truncated:!0,nextItem:{title:"Authentication Laravel + GraphQL",permalink:"/blog/authentication-laravel-graphql-1"}},p=[{value:"1. Create the Admin area",id:"1-create-the-admin-area",children:[]},{value:"1. Install ModHeader",id:"1-install-modheader",children:[]},{value:"2. Get the token",id:"2-get-the-token",children:[]},{value:"3. Add the token in ModHeader",id:"3-add-the-token-in-modheader",children:[]}],u={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In my ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/blog/authentication-laravel-graphql-1"}),"previous post")," I published how to authenticate with Laravel + GraphQL. The current post is to know how run a private query using Graph",Object(i.b)("em",{parentName:"p"},"i"),"QL."),Object(i.b)(o.a,{src:"/img/blog/Laravel-GraphQL-ModHeader-Authentication.png",alt:"Authentication Laravel + GraphQL using ModHeader and GraphiQL",title:"Authentication Laravel + GraphQL using ModHeader and GraphiQL",mdxType:"Image"}),Object(i.b)("h2",{id:"1-create-the-admin-area"},"1. Create the Admin area"),Object(i.b)("p",null,"We need to add a new schema in the graphql config file. The new schema need to use ",Object(i.b)("inlineCode",{parentName:"p"},"auth:api")," middleware to allow only registered users use the queries. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// config/graphql.php\n\n'schemas' => [\n    'default' => [\n        'query' => [\n            App\\Base\\GraphQL\\Publics\\Query\\LangsQuery::class,\n            App\\Base\\GraphQL\\Publics\\Query\\LoginQuery::class,\n        ],\n        'mutation' => [],\n        'middleware' => ['api'],\n        'method' => ['post'],\n    ],\n    'admin' => [\n        'query' => [],\n        'mutation' => [],\n        'middleware' => ['auth:api'],\n        'method' => ['post'],\n    ],\n],\n'types' => [\n    \\App\\Base\\GraphQL\\Type\\UserType::class,\n    \\App\\Base\\GraphQL\\Type\\LangType::class,\n]\n")),Object(i.b)("h2",{id:"1-install-modheader"},"1. Install ModHeader"),Object(i.b)("p",null,"You can download the extension ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bewisse.com/modheader/"}),"here")," and you can install it in almost any browser: Chrome, Firefox, others."),Object(i.b)("h2",{id:"2-get-the-token"},"2. Get the token"),Object(i.b)("p",null,"Now you can go to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:8000/graphiql/"}),"http://127.0.0.1:8000/graphiql/")," and run the query and copy the ",Object(i.b)("inlineCode",{parentName:"p"},"accessToken"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query login($email: String, $password: String) {\n  login(email: $email, password: $password) {\n    userID\n    name\n    accessToken\n  }\n}\n")),Object(i.b)("p",null,"With variables: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "email": "me@albertcito.com",\n  "password": 123456\n}\n')),Object(i.b)("h2",{id:"3-add-the-token-in-modheader"},"3. Add the token in ModHeader"),Object(i.b)("p",null,"Click in the extension icon in your browser. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a new request header and complete the fields: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Authorization"),"."),Object(i.b)("li",{parentName:"ul"},"Value: ",Object(i.b)("inlineCode",{parentName:"li"},"Bearer $accessToken")," ($accessToken is the value copied in the step 2)."))),Object(i.b)("li",{parentName:"ul"},"Click in the button play.")),Object(i.b)("p",null,"Now go to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:8000/graphiql/admin"}),"http://127.0.0.1:8000/graphiql/admin")," and you will be able to see the private area and run any query or mutation. You can see it working with more data in my ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/albertcito/laravel-graphql-api"}),"github"),"."))}s.isMDXComponent=!0},80:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){const e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(a),b=n,d=s["".concat(o,".").concat(b)]||s[b]||h[b]||i;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=({src:e,alt:t,title:a})=>r.a.createElement("div",{className:"imageContainer"},r.a.createElement("div",{className:"center"},r.a.createElement("img",{src:e,alt:t})),r.a.createElement("div",{className:"center"},a))},85:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(80),r=a(87);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const o=!a.startsWith(t)?t+a.replace(/^\//,""):a;return i?e+o:o}(t,e,a,n)}}function o(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},87:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);