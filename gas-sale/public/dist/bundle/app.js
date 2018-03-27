!function(e){function t(t){for(var l,c,d=t[0],u=t[1],s=t[2],i=0,f=[];i<d.length;i++)c=d[i],r[c]&&f.push(r[c][0]),r[c]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(m&&m(t);f.length;)f.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,d=1;d<a.length;d++){var u=a[d];0!==r[u]&&(l=!1)}l&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},r={1:0},n=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var m=u;n.push([34,0]),a()}({13:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,r=a(1),n=(l=r)&&l.__esModule?l:{default:l};t.default=function(e){return n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-6 col-md-offset-3",style:{textAlign:"center",marginBottom:48}},n.default.createElement("h1",null,"Welcome to Turbo"),n.default.createElement("hr",null),n.default.createElement("div",{style:{background:"#f9f9f9",border:"1px solid #ddd",borderRadius:3,padding:12}},"You are currently looking at the ",n.default.createElement("strong",{style:{color:"red"}},"Intro.js")," file in the '/src/components/presentation' directory of your project. This template is rendered with the Mustache templating engine."),n.default.createElement("h3",{style:{marginTop:48}},"Routes"),n.default.createElement("hr",null),n.default.createElement("p",null,"The routes are stored in the 'routes' directory. This scaffold comes with two sample routes out of the box: index and api. To test each route, click the following links:"),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-6 col-md-offset-0"},n.default.createElement("div",{style:c.grayBox},n.default.createElement("h4",null,"Index Route"),n.default.createElement("ul",{style:{paddingLeft:16}},n.default.createElement("li",null,n.default.createElement("a",{href:"/json"},"JSON Response")),n.default.createElement("li",null,n.default.createElement("a",{href:"/send"},"Text Response")),n.default.createElement("li",null,n.default.createElement("a",{href:"/redirect"},"Redirect"))))),n.default.createElement("div",{className:"col-md-6"},n.default.createElement("div",{style:c.grayBox},n.default.createElement("h4",null,"API Route"),n.default.createElement("ul",{style:{paddingLeft:16}},n.default.createElement("li",null,n.default.createElement("a",{href:"/api/profile"},"Resource Request")),n.default.createElement("li",null,n.default.createElement("a",{href:"/api/profile?team=cavaliers"},"With Query Params")),n.default.createElement("li",null,n.default.createElement("a",{href:"/api/profile/lebron_james"},"With ID")))))),n.default.createElement("h3",{style:{marginTop:48}},"Static Assets"),n.default.createElement("hr",null),n.default.createElement("p",null,"Static assets (images, js, css, etc) are located in the \"public\" directory. The image below is rendered from the 'images' directory of the public folder:",n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("img",{src:"/images/turbo.png"}),n.default.createElement("br",null),n.default.createElement("br",null),"When deployed on Turbo Vertex, static assets are ",n.default.createElement("em",null,"automatically")," distributed to a global CDN so there is no need to set that up. If you decide to eject and deploy this project on your own architecture, you will have to configure a CDN distribution (or at least you should)."),n.default.createElement("h3",{style:{marginTop:48}},"Deployment"),n.default.createElement("hr",null),n.default.createElement("p",null,"To deploy, connect the project to a Turbo 360 project using the APP_ID (from root directory):",n.default.createElement("pre",{style:c.pre},n.default.createElement("code",null,"$ turbo app APP_ID")),"Then deploy by simply entering the deploy command:",n.default.createElement("pre",{style:c.pre},n.default.createElement("code",null,"$ turbo deploy")),"When deployment is complete, you will see a live link where you can access the project on the internet!")))};var c={grayBox:{textAlign:"left",background:"#f9f9f9",border:"1px solid #ddd",borderRadius:3,padding:12},pre:{textAlign:"left",marginTop:8,background:"#333",color:"#fff"}}},17:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USERS_RECEIVED:"USERS_RECEIVED",USER_CREATED:"USER_CREATED",USER_LOGGED_IN:"USER_LOGGED_IN",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED"}},18:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,r=a(17),n=(l=r)&&l.__esModule?l:{default:l};var c={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1],a=Object.assign({},e);switch(t.type){case n.default.CURRENT_USER_RECEIVED:return a.currentUser=t.data,a;case n.default.USERS_RECEIVED:return a.all=t.data,a;case n.default.USER_CREATED:var l=a.all?Object.assign([],a.all):[];return l.unshift(t.data),a.all=l,a;default:return e}}},19:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userReducer=void 0;var l,r=a(18),n=(l=r)&&l.__esModule?l:{default:l};t.userReducer=n.default},22:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,r,n=a(4),c=a(20),d=(l=c)&&l.__esModule?l:{default:l},u=a(19);t.default={configure:function(e){var t=(0,n.combineReducers)({user:u.userReducer});return r=e?(0,n.createStore)(t,e,(0,n.applyMiddleware)(d.default)):(0,n.createStore)(t,(0,n.applyMiddleware)(d.default))},currentStore:function(){return r}}},34:function(e,t,a){"use strict";var l=d(a(1)),r=d(a(32)),n=d(a(22)),c=a(12);d(a(13));function d(e){return e&&e.__esModule?e:{default:e}}var u=l.default.createElement(c.Provider,{store:n.default.configure(null)},l.default.createElement("div",{className:"wrapper"},l.default.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},l.default.createElement("div",{className:"sidebar-wrapper"},l.default.createElement("div",{className:"logo"},l.default.createElement("a",{href:"http://www.creative-tim.com",className:"simple-text"},"Creative Mac")),l.default.createElement("ul",{className:"nav"},l.default.createElement("li",{className:"active"},l.default.createElement("a",{href:"dashboard.html"},l.default.createElement("i",{className:"ti-panel"}),l.default.createElement("p",null,"Dashboard"))),l.default.createElement("li",null,l.default.createElement("a",{href:"user.html"},l.default.createElement("i",{className:"ti-user"}),l.default.createElement("p",null,"User Profile"))),l.default.createElement("li",null,l.default.createElement("a",{href:"table.html"},l.default.createElement("i",{className:"ti-view-list-alt"}),l.default.createElement("p",null,"Gas stations "))),l.default.createElement("li",null,l.default.createElement("a",{href:"typography.html"},l.default.createElement("i",{className:"ti-text"}),l.default.createElement("p",null,"Pending Order"))),l.default.createElement("li",null,l.default.createElement("a",{href:"icons.html"},l.default.createElement("i",{className:"ti-pencil-alt2"}),l.default.createElement("p",null,"Active Order"))),l.default.createElement("li",null,l.default.createElement("a",{href:"maps.html"},l.default.createElement("i",{className:"ti-map"}),l.default.createElement("p",null,"Maps"))),l.default.createElement("li",null,l.default.createElement("a",{href:"notifications.html"},l.default.createElement("i",{className:"ti-bell"}),l.default.createElement("p",null,"Notifications"))),l.default.createElement("li",{className:"active-pro"},l.default.createElement("a",{href:"upgrade.html"},l.default.createElement("i",{className:"ti-export"}),l.default.createElement("p",null,"Blog")))))),l.default.createElement("div",{className:"main-panel"},l.default.createElement("nav",{className:"navbar navbar-default"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"navbar-header"},l.default.createElement("button",{type:"button",className:"navbar-toggle"},l.default.createElement("span",{className:"sr-only"},"Toggle navigation"),l.default.createElement("span",{className:"icon-bar bar1"}),l.default.createElement("span",{className:"icon-bar bar2"}),l.default.createElement("span",{className:"icon-bar bar3"})),l.default.createElement("a",{className:"navbar-brand",href:"#"},"Dashboard")),l.default.createElement("div",{className:"collapse navbar-collapse"},l.default.createElement("ul",{className:"nav navbar-nav navbar-right"},l.default.createElement("li",null,l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-panel"}),l.default.createElement("p",null,"Stats"))),l.default.createElement("li",{className:"dropdown"},l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-bell"}),l.default.createElement("p",{className:"notification"},"5 "),l.default.createElement("p",null,"Notifications"),l.default.createElement("b",{className:"caret"})),l.default.createElement("ul",{className:"dropdown-menu"},l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 1")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 2")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 3")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 4")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Another notification")))),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},l.default.createElement("i",{className:"ti-settings"}),l.default.createElement("p",null,"Settings"))))))),l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-warning text-center"},l.default.createElement("i",{className:"ti-server"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,"Capacity"),"105GB"))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-reload"})," Updated now"))))),l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-success text-center"},l.default.createElement("i",{className:"ti-wallet"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,"Revenue"),"$1,345"))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-calendar"})," Last day"))))),l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-danger text-center"},l.default.createElement("i",{className:"ti-pulse"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,"Errors"),"23"))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-timer"})," In the last hour"))))),l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-info text-center"},l.default.createElement("i",{className:"ti-twitter-alt"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,"Followers"),"+45"))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-reload"})," Updated now")))))))),l.default.createElement("footer",{className:"footer"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("nav",{className:"pull-left"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Mac")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://blog.creative-tim.com"},"Blog")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com/license"},"Licenses")))),l.default.createElement("div",{className:"copyright pull-right"},"© 2018, made with ",l.default.createElement("i",{className:"fa fa-heart heart"})," by ",l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Mac")))))));r.default.render(u,document.getElementById("root"))}});