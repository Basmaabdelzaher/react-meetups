(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={form:"NewMeetup_form__38paV",control:"NewMeetup_control__1YhPd",actions:"NewMeetup_actions__3dCJr"}},function(e,t,a){e.exports={item:"Single-meetup_item__3iKeF",image:"Single-meetup_image__fOBd-",content:"Single-meetup_content__20X5A",actions:"Single-meetup_actions__lTt-3"}},,function(e,t,a){e.exports={header:"MainNavigation_header__1Ljfj",logo:"MainNavigation_logo__23X_A",active:"MainNavigation_active__3XrYU",badge:"MainNavigation_badge__iPPSn"}},,,function(e,t,a){e.exports={card:"Card_card__3Tv5P"}},function(e,t,a){e.exports={list:"MeetupList_list__N2MGZ"}},function(e,t,a){e.exports={main:"Layout_main__2K-9P"}},,function(e,t,a){e.exports=a(24)},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=a(3),o=Object(n.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},isItemIsFavorite:function(e){}});function u(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],u={favorites:l,totalFavorites:l.length,addFavorite:function(e){c((function(t){return t.concat(e)}))},removeFavorite:function(e){c((function(t){return t.filter((function(t){return t.id!=e}))}))},isFavorite:function(e){return l.some((function(t){return t.id==e}))}};return r.a.createElement(o.Provider,{value:u},e.children)}var m=o,s=a(4),d=(a(23),a(1)),v=a(14),f=a(6),E=a.n(f),p=a(11),_=a.n(p);var b=function(e){return r.a.createElement("div",{className:_.a.card},e.children)};var g=function(e){var t=e.meetup,a=Object(n.useContext)(m),l=a.isFavorite(t.id);return r.a.createElement("li",{className:E.a.item},r.a.createElement(b,null,r.a.createElement("div",{className:E.a.image},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",{className:E.a.content},r.a.createElement("h3",null,t.title),r.a.createElement("address",null,t.address),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:E.a.actions},r.a.createElement("button",{onClick:function(){l?a.removeFavorite(t.id):a.addFavorite(t)}},l?"Remove From Favorites":"Add To Favorites"))))},h=a(12),N=a.n(h);var j=function(e){return r.a.createElement("ul",{className:N.a.list},e.meetups.map((function(e){return r.a.createElement(g,{key:e.id,meetup:e})})))};var F=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){fetch("https://react-getting-started-5acf3-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var a in e){var n=Object(v.a)({id:a},e[a]);t.push(n)}l(!1),m(t)}))}),[]),a?r.a.createElement("div",null,"Loading ...."):r.a.createElement("div",null,r.a.createElement(j,{meetups:u}))},O=a(5),M=a.n(O);var w=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useRef)(),c=Object(n.useRef)();return r.a.createElement(b,null,r.a.createElement("form",{className:M.a.form,onSubmit:function(n){n.preventDefault();var r={title:t.current.value,image:a.current.value,address:l.current.vale,description:c.current.value};e.addNewMeetup(r)}},r.a.createElement("div",{className:M.a.control},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",required:!0,ref:t})),r.a.createElement("div",{className:M.a.control},r.a.createElement("label",{htmlFor:"image"},"Image URL"),r.a.createElement("input",{type:"url",id:"image",required:!0,ref:a})),r.a.createElement("div",{className:M.a.control},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",id:"address",required:!0,ref:l})),r.a.createElement("div",{className:M.a.control},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{id:"description",rows:"5",required:!0,ref:c})),r.a.createElement("div",{className:M.a.actions},r.a.createElement("button",null,"Add New Meetup"))))};var x=function(){var e=Object(d.f)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Add New Meetup:"),r.a.createElement(w,{addNewMeetup:function(t){fetch("https://react-getting-started-5acf3-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e("/")}))}}))};var y=function(){var e,t=Object(n.useContext)(m);return e=0==t.totalFavorites?r.a.createElement("p",null,"You have no favorites yet. Start adding some!"):r.a.createElement(j,{meetups:t.favorites}),r.a.createElement("div",null,r.a.createElement("h1",null,"My Favorites"),e)},S=a(13),A=a.n(S),C=a(8),P=a.n(C);var R=function(){var e=Object(n.useContext)(m);return r.a.createElement("header",{className:P.a.header},r.a.createElement("div",{className:P.a.logo},"React Meetups"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"All Meetups")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/new-meetup"},"Add New Meetup")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/favorites"},"My Favorites",r.a.createElement("span",{className:P.a.badge},e.totalFavorites))))))};var T=function(e){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("main",{className:A.a.main},e.children))};var L=function(){return r.a.createElement(T,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",element:r.a.createElement(F,null)}),r.a.createElement(d.a,{path:"/new-meetup",element:r.a.createElement(x,null)}),r.a.createElement(d.a,{path:"/favorites",element:r.a.createElement(y,null)})))};c.a.render(r.a.createElement(u,null,r.a.createElement(s.a,null,r.a.createElement(L,null))),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.989a1181.chunk.js.map