(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{81:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),o=t(6),a=(t(0),t(85)),i=t(86),c={id:"handle-failed-server-requests-with-custom-exception-typescript",title:"Handle failed server requests with a custom exception in TypeScript",tags:["typescript","exception"],image:"https://cdn-images-1.medium.com/max/1600/1*o8nnsLZ16xjX_7uC8ZV_EA.png"},s={permalink:"/blog/handle-failed-server-requests-with-custom-exception-typescript",source:"@site/blog/2020-09-10-handle-failed-server-requests-with-custom-exception-typescript.mdx",description:'In this post I want to show you how to handle server errors like 404, 500, 403, etc. Also "Network Connection error" and validation errors u others.',date:"2020-09-10T00:00:00.000Z",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"exception",permalink:"/blog/tags/exception"}],title:"Handle failed server requests with a custom exception in TypeScript",truncated:!0,nextItem:{title:"Run private queries with Laravel + GraphiQL",permalink:"/blog/run-private-queries-with-laravel-graphiql"}},l=[{value:"1. ErrorCodeFormat interface",id:"1-errorcodeformat-interface",children:[]},{value:"2. Exception",id:"2-exception",children:[]},{value:"3. Api function",id:"3-api-function",children:[]},{value:"4. Function to request server data",id:"4-function-to-request-server-data",children:[]},{value:"5. Try it",id:"5-try-it",children:[]}],p={rightToc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,'In this post I want to show you how to handle server errors like 404, 500, 403, etc. Also "Network Connection error" and validation errors u others.'),Object(a.b)(i.a,{src:"/img/blog/network-error.png",alt:"Network Error",title:"Network Error",mdxType:"Image"}),Object(a.b)("p",null,"If we have a endpoint that send data if the request is right: "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  id: 1,\n  firstName: "Albert",\n  lastName: "Tjornehoj",\n  email: "me@albertcito.com"\n}\n')),Object(a.b)("p",null,"If the request fail, it's like that: "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"{\n  error: [\n    'The user id does not exist',\n  ]\n}\n")),Object(a.b)("h2",{id:"1-errorcodeformat-interface"},"1. ErrorCodeFormat interface"),Object(a.b)("p",null,"This is a basic interface that cold be used to get the server errors. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ErrorCodeFormat {\n  networkError: boolean;\n  code: number;\n  errors: string[];\n}\n")),Object(a.b)("p",null,"So in case of validator error the json format will be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"{\n  networkError: false,\n  code: 200,\n  errors: ['The user id does not exist'],\n}\n")),Object(a.b)("p",null,"In case of Network Error or server error, we need to format it: "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const errorFormat = (error: AxiosError): ErrorCodeFormat => ({\n  networkError: (error.message === 'Network Error'),\n  code: error.response?.status,\n  errors: [error.message],\n});\n")),Object(a.b)("h2",{id:"2-exception"},"2. Exception"),Object(a.b)("p",null,"Now we need to create the Exception that will help us to identify if it's a validation error."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"class ApiError extends Error {\n  constructor(public readonly error: ErrorCodeFormat) {\n    super();\n    Object.setPrototypeOf(this, ApiError.prototype);\n  }\n\n  public getError() {\n    return {\n      networkError: false,\n      code: 200,\n      errors: this.error.error,\n    };\n  }\n}\n")),Object(a.b)("h2",{id:"3-api-function"},"3. Api function"),Object(a.b)("p",null,"This function get the data from the server and always return a UserFormat or it fail."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"const getUser = async (userID: number): UserFormat => {\n  const response = await api.post('/user', { userID });\n  if (payload.data.errors) {\n    throw new ApiError(payload.data.errors);\n  }\n  return response.data;\n}\n")),Object(a.b)("h2",{id:"4-function-to-request-server-data"},"4. Function to request server data"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"async function requestData<T>(\n  api: () => Promise<T>,\n  onSuccess: (response: T) => void,\n  onFail: (errors: ErrorCodeFormat) => void,\n): Promise<void> {\n  try {\n    const payload = await api();\n    onSuccess(payload);\n  } catch (error) {\n    // This is API error, as validation form.\n    if (error.constructor === ApiError) {\n      onFail(error.getError());\n    } else {\n      // This is network, auth or server http status error\n      onFail(errorFormat(error));\n      // The global function have to handle the error to verify authorization (401)\n      // and close the local session\n      throw error;\n    }\n  }\n}\n")),Object(a.b)("h2",{id:"5-try-it"},"5. Try it"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"requestData<UserFormat>(\n  () => getUser(1),\n  (user) => console.log('That works fine \ud83c\udf89', user),\n  (error) => console.log('Something wrong happened \ud83d\ude31', error),\n);\n")))}u.isMDXComponent=!0},85:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,c(c({ref:r},l),{},{components:t})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},86:function(e,r,t){"use strict";var n=t(0),o=t.n(n);r.a=({src:e,alt:r,title:t})=>o.a.createElement("div",{className:"imageContainer"},o.a.createElement("div",{className:"center"},o.a.createElement("img",{src:e,alt:r})),o.a.createElement("div",{className:"center"},t))}}]);