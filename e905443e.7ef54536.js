(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),o=a(0),i=a.n(o),p=a(73),u=a(80),l={id:"private-different-layouts-with-react-router",title:"Private and Different Layouts with React Router",tags:["react","react router"],image:"https://lh4.googleusercontent.com/GnJtblq8JZezKOnenXQkGYn0R-sOGNJy8n7Twzzdj6JcKnMDWW9AtsvhbfG3X_dixs8jYbGgoe8RopGleb8J=w2560-h1450-rw"},c={permalink:"/blog/private-different-layouts-with-react-router",source:"@site/blog/2020-08-24-private-route.mdx",description:"I created a different template for React with React Router 4. The idea is:",date:"2020-08-24T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"react router",permalink:"/blog/tags/react-router"}],title:"Private and Different Layouts with React Router",truncated:!1},s=[{value:"View Preview",id:"view-preview",children:[]},{value:"Routes",id:"routes",children:[]},{value:"Route Types",id:"route-types",children:[]},{value:"Routes Template",id:"routes-template",children:[]},{value:"Router",id:"router",children:[]},{value:"Auth",id:"auth",children:[]}],b={rightToc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"I created a different template for React with React Router 4. The idea is:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Code flexible able to manage many layouts."),Object(p.b)("li",{parentName:"ul"},"Possibility to choose a different layout for any component or a layout for a group of components."),Object(p.b)("li",{parentName:"ul"},"If a user is not logged in the URL\u2019s that required a login, then show the public layout with a login form."),Object(p.b)("li",{parentName:"ul"},"If the user is logged and their wants see the public page (like about-us), the layout must be the public layout with the possibility to see the private web page if click in a private URL.")),Object(p.b)("h2",{id:"view-preview"},"View Preview"),Object(p.b)(u.a,{src:"https://cdn-images-1.medium.com/max/1600/1*Tp_SStzt1ZLK_wde4d3D3g.gif",alt:"View preview",title:Object(p.b)(i.a.Fragment,null,"You can see this working ",Object(p.b)("a",{href:"https://albertcito.github.io/react-template/"},"live here")),mdxType:"Image"}),Object(p.b)("h2",{id:"routes"},"Routes"),Object(p.b)("p",null,"You can create the routes in this way. You can create many files that you want:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// src/routes/private.tsx\n\nconst routes: IRoute[] = [\n  {\n    component: Profile,\n    exact: true,\n    path: '/admin/profile',\n  },\n];\n")),Object(p.b)("h2",{id:"route-types"},"Route Types"),Object(p.b)("p",null,"There are three route types defined in the project."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// src/routes/routeTypes.tsx\n\nexport enum routeTypes {\n  private = 'private',\n  public = 'public',\n  session= 'session',\n}\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"private"),": private pages like profile, edit-profile, etc. If the user isn\u2019t logged then must to show the login page.\n",Object(p.b)("strong",{parentName:"p"},"public"),": public pages like about-us, contact, etc.\n",Object(p.b)("strong",{parentName:"p"},"session"),": session pages like login and sign-up. If the user is logged then must to redirect to the private dashboard."),Object(p.b)("h2",{id:"routes-template"},"Routes Template"),Object(p.b)("p",null,"In this file you can define the routes, the template and the rights (public, private, session)."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// src/routes/index.tsx\n\nconst routesTemplate: IRouteTemplate[] = [\n  {\n    routes: privateRoutes,\n    template: GlobalLayout,\n    type: routeTypes.private,\n  },\n  ...\n];\n\n")),Object(p.b)("h2",{id:"router"},"Router"),Object(p.b)("p",null,"It define the route and call the Auth."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// src/start/Routes.tsx\n\nroutesTemplates.map((routesTemplate) => {\n  const { routes: appRoutes, template: Template , type} = routesTemplate;\n  return appRoutes.map( (appRoute) => {\n    return (\n      <Route\n        exact={appRoute.exact}\n        path={appRoute.path}\n        key={appRoute.path}\n        render={(route) =>\n          <Auth\n            appRoute={appRoute}\n            Template={Template}\n            route={route}\n            type={type}\n          />\n        }\n      />\n    );\n  });\n})\n")),Object(p.b)("h2",{id:"auth"},"Auth"),Object(p.b)("p",null,"Verify the rights and redirection."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'// src/start/Auth.tsx\n\nif (isPrivate(type) && !global.logged) {\n  return <GlobalLayout Component={Error403} route={route} />;\n}\n\nif (isSession(type) && global.logged) {\n  return <Redirect to="/" />\n}\n\nconst Layout = appRoute.template ? appRoute.template : Template;\nreturn <Layout\n  Component={appRoute.component}\n  route={route}\n/>;\n')),Object(p.b)("p",null,"You can download this code in my ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/albertcito/react-template"}),"Github")))}m.isMDXComponent=!0},80:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=({src:e,alt:t,title:a})=>r.a.createElement("div",{className:"imageContainer"},r.a.createElement("div",{className:"center"},r.a.createElement("img",{src:e,alt:t})),r.a.createElement("div",{className:"center"},a))}}]);