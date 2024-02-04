(()=>{"use strict";var e,t,r,i,n,u,s,a,o={692:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.upcoming=t.anime=t.index=void 0;var i=new(r(624).default);t.index=function(e,t){t.render("api_index",{title:"Tanuki API Docs"})},t.anime=function(e,t){var r=e.query.limit?e.query.limit:20,n={params:{fields:{anime:"id,titles,status,subtype"},filter:{status:["current"],subtype:"TV"},sort:"popularityRank",page:{limit:r=r>20?20:r}}};i.get("anime",n).then((function(e){return t.send(e.data)}),(function(e){return t.send(e)}))},t.upcoming=function(e,t){var r=e.query.limit?e.query.limit:20,n={params:{fields:{anime:"id,titles,status,subtype"},filter:{status:"upcoming"},sort:"popularityRank",page:{limit:r=r>20?20:r}}};i.get("anime",n).then((function(e){return t.send(e.data)}),(function(e){return t.send(e)}))}},676:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=r(224),n=r(692),u=i.Router();u.get("/",(function(e,t,r){(0,n.index)(e,t)})),u.get("/anime/",(function(e,t,r){(0,n.anime)(e,t)})),u.get("/upcoming/",(function(e,t,r){(0,n.upcoming)(e,t)})),t.default=u},952:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=r(224).Router();i.get("/",(function(e,t,r){t.render("index",{title:"Express"})})),t.default=i},68:e=>{e.exports=require("cookie-parser")},224:e=>{e.exports=require("express")},404:e=>{e.exports=require("http-errors")},624:e=>{e.exports=require("kitsu")},558:e=>{e.exports=require("morgan")},72:e=>{e.exports=require("path")}},d={};function p(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={exports:{}};return o[e](r,r.exports,p),r.exports}e=p(224),t=p(68),r=p(558),i=p(952),n=p(676),u=p(72),s=p(404),(a=e()).set("views",u.join(__dirname,"views")),a.set("view engine","pug"),a.use((0,r.default)("dev")),a.use(e.json()),a.use(e.urlencoded({extended:!1})),a.use((0,t.default)()),a.use(e.static(u.join(__dirname,"public"))),a.use("/",i.default),a.use("/api/v1",n.default),a.use((function(e,t,r){r(s(404))})),a.use((function(e,t,r,i){r.locals.message=e.message,r.locals.error="development"===t.app.get("env")?e:{},r.status(e.status||500),r.render("error")}))})();