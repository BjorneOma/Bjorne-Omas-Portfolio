(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{33:function(e,c,s){},44:function(e,c,s){},47:function(e,c,s){"use strict";s.r(c);var i=s(1),t=s.n(i),a=s(14),l=s.n(a),n=(s(33),s(11)),r=s(9),j=s(0),d=function(){var e=Object(i.useState)({position:"absolute"}),c=Object(n.a)(e,2),s=c[0],t=c[1],a=function(){window.scrollY>window.innerHeight&&s!={position:"fixed",top:"0"}?t({position:"fixed",top:"0"}):window.scrollY<window.innerHeight&&s!={position:"absolute"}&&t({position:"absolute"})};Object(i.useEffect)((function(){window.addEventListener("scroll",a),console.log("Added event."+window.innerHeight)}),[]);var l=Object(i.useState)(Object(j.jsx)(r.Link,{to:"projectPlacement",spy:!0,smooth:!0,duration:500,offset:1,children:"PROJECTS"})),d=Object(n.a)(l,2),o=d[0];d[1];return Object(j.jsx)("div",{className:"navBar",style:s,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.Link,{to:"home",spy:!0,smooth:!0,duration:500,children:"HOME"})}),Object(j.jsx)("li",{children:o}),Object(j.jsx)("li",{children:Object(j.jsx)(r.Link,{to:"about",spy:!0,smooth:!0,duration:500,children:"ABOUT"})})]})})},o=(s(44),s(10)),b=s(2),m=function(){return Object(j.jsxs)("div",{id:"home",children:[Object(j.jsx)("h1",{children:"Hi, I'm Bj\xf8rne Oma"}),Object(j.jsx)("h2",{children:"Programmer, UX designer and Game Developer"}),Object(j.jsx)(r.Link,{className:"myWorkButton",to:"projectPlacement",spy:!0,smooth:!0,duration:500,offset:1,children:"View My Work"})]})},h=function(e){var c=e.image,s=e.title,i=e.description,t=e.url;return Object(j.jsx)(o.b,{to:t,children:Object(j.jsx)("span",{style:{display:"block"},children:Object(j.jsxs)("div",{className:"projectPreview",children:[Object(j.jsx)("img",{className:"projectPreviewImage",src:c}),Object(j.jsx)("p",{className:"projectPreviewTitle",children:s}),Object(j.jsx)("p",{className:"projectPreviewText",children:i}),Object(j.jsx)("p",{className:"clickToSeeMore",children:"Click To Read More"})]})})})},O=s.p+"static/media/CrankTheCoal.c6ed378c.PNG",x=s.p+"static/media/Jolaspelet.e9b2db5b.PNG",p=s.p+"static/media/Klimakalkulator.ed21dff9.PNG",u=s.p+"static/media/TurnBased.bc104423.PNG",g=function(){var e=Object(i.useState)([{title:"CRANK THE COAL, BOB",description:"2-player local coop-game",image:O,url:"/crankthecoal",id:1},{title:"CHRISTMAS GAME",description:"Typing game for young and old!",image:x,url:"/jolaspelet",id:2},{title:"CLIMATE CALCULATOR",description:"Climate Calculator prototype made for NRK",image:p,url:"/klimakalkulator",id:3},{title:"TURN BASED GAME",description:"Turn based puzzle game",image:u,url:"/turnBased",id:4}]),c=Object(n.a)(e,2),s=c[0];c[1];return Object(j.jsxs)("div",{id:"projects",children:[Object(j.jsx)("h1",{className:"sectionHeader",children:"Projects"}),Object(j.jsx)("div",{children:s.map((function(e){return Object(j.jsx)(h,{image:e.image,title:e.title,description:e.description,url:e.url},e.id)}))})]})},v=s.p+"static/media/Crank03.ceebe8f6.PNG",N=function(){return Object(j.jsxs)("div",{className:"project",children:[Object(j.jsx)("h1",{className:"sectionHeader",children:"Crank The Coal, Bob"}),Object(j.jsx)("p",{children:"Crank the Coal, Bob is a two player game about running a coal-fueled castle. The players need to communicate and cooperate to keep the engine running, while also steering away from obstacles."}),Object(j.jsx)("img",{src:v,alt:""}),Object(j.jsx)("p",{children:"This game is kinda great."})]})},f=function(){return Object(j.jsx)("div",{className:"project",children:Object(j.jsx)("h1",{className:"sectionHeader",children:"Jolaspelet"})})},k=s.p+"static/media/avatarImage.4317f6b6.jpg",T=function(){return Object(j.jsxs)("div",{id:"about",children:[Object(j.jsx)("h1",{className:"sectionHeader",children:"About"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"aboutText",children:[Object(j.jsx)("img",{alt:"Bilde",src:k,className:"avatar"}),Object(j.jsx)("p",{children:"My name is Bj\xf8rne Oma. I am 22 years old, and currently live in Bergen, where I am taking a bachelors degree in Media- and Interaction Design. I love making games, and I also love making software that makes people's lives easier."}),Object(j.jsxs)("p",{children:["bjorneoma@gmail.com ",Object(j.jsx)("br",{}),"95784182"]})]}),Object(j.jsxs)("div",{className:"aboutSkills",children:[Object(j.jsxs)("div",{className:"skill programming",children:[Object(j.jsx)("div",{className:"circle huge",children:"Programming"}),Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsxs)("div",{className:"bigTools",children:[Object(j.jsx)("div",{className:"circle big",children:"C#"}),Object(j.jsx)("div",{className:"circle big",children:"Git"})]}),Object(j.jsxs)("div",{className:"smallTools",children:[Object(j.jsx)("div",{className:"circle small",children:"Javascript"}),Object(j.jsx)("div",{className:"circle small",children:"Python"}),Object(j.jsx)("div",{className:"circle small",children:"CSS"}),Object(j.jsx)("div",{className:"circle small",children:"React"}),Object(j.jsx)("div",{className:"circle small",children:"HTML"})]})]})]}),Object(j.jsxs)("div",{className:"skill ux",children:[Object(j.jsx)("div",{className:"circle huge",children:"UX Design"}),Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsxs)("div",{className:"bigTools",children:[Object(j.jsxs)("div",{className:"circle big",children:["Google",Object(j.jsx)("br",{})," Design",Object(j.jsx)("br",{})," Sprint"]}),Object(j.jsx)("div",{className:"circle big",children:"Figma"}),Object(j.jsxs)("div",{className:"circle big",children:["User",Object(j.jsx)("br",{})," Testing"]})]}),Object(j.jsxs)("div",{className:"smallTools",children:[Object(j.jsx)("div",{className:"circle small",children:"Adobe XD"}),Object(j.jsxs)("div",{className:"circle small",children:["Design",Object(j.jsx)("br",{})," Thinking"]})]})]})]}),Object(j.jsxs)("div",{className:"skill gameDev",children:[Object(j.jsxs)("div",{className:"circle huge",children:["Game",Object(j.jsx)("br",{}),"Development"]}),Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsxs)("div",{className:"bigTools",children:[Object(j.jsx)("div",{className:"circle big",children:"Unity"}),Object(j.jsx)("div",{className:"circle big",children:"C#"})]}),Object(j.jsxs)("div",{className:"smallTools",children:[Object(j.jsx)("div",{className:"circle small",children:"Blender"}),Object(j.jsx)("div",{className:"circle small",children:"Krita"})]})]})]})]})]})]})};var C=function(){return Object(j.jsx)(o.a,{basename:"/",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsx)(d,{}),Object(j.jsx)("div",{id:"projectPlacement"}),Object(j.jsx)(b.a,{exact:!0,path:"/",component:g}),Object(j.jsx)(b.a,{exact:!0,path:"/crankTheCoal",component:N}),Object(j.jsx)(b.a,{exact:!0,path:"/crankTheCoal",component:f}),Object(j.jsx)(T,{})]})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(c){var s=c.getCLS,i=c.getFID,t=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),i(e),t(e),a(e),l(e)}))};l.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.e513f5d6.chunk.js.map