(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(i.default.useContext(o.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},o=n(8e3);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||i&&c}},2717:function(e,t,n){"use strict";var r=n(930);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),a=(o=n(1585))&&o.__esModule?o:{default:o},s=n(8e3),u=n(5850),d=n(5646);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,c=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){c=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var d=p[s];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=i.props[d],f=r[d]||new Set;"name"===d&&c||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,c.default.cloneElement(e,a)}return c.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=c.useContext(s.AmpStateContext),r=c.useContext(u.HeadManagerContext);return c.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=v},1585:function(e,t,n){"use strict";var r=n(7980),i=n(3227),o=n(8361),c=(n(2191),n(5971)),a=n(2715),s=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var l=function(e){c(n,e);var t=u(n);function n(e){var o;return i(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},3882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(9008),i=[{id:0,content:"Java & Spring \uc870\ud569\uc73c\ub85c \uc5c5\ubb34\ub97c \ub9ce\uc774 \ud558\uc5ec \ud574\ub2f9 \uc2a4\ud0dd\uc73c\ub85c \uac1c\ubc1c\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4."},{id:1,content:"Cubrid, Oracle \uc758 RDBMS \uacbd\ud5d8, Redis \uc6b4\uc601 \uacbd\ud5d8, RabbitMQ \uc6b4\uc601 \uacbd\ud5d8\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."},{id:2,content:"Kotlin \uc5b8\uc5b4\ub97c \uc88b\uc544\ud558\uc5ec Kotlin \uc73c\ub85c\ub3c4 \uac1c\ubc1c \uac00\ub2a5\ud569\ub2c8\ub2e4."},{id:3,content:"\uc778\ud504\ub77c \uc124\uce58\ub97c \uc704\ud558\uc5ec Shell Script \ub97c \ub2e4\ub8ec \uacbd\ud5d8\uc774 \uc788\uc5b4 Linux Command \ud65c\uc6a9 \ub2a5\ub825\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."},{id:4,content:"Admin Page \ub098 API docs \ub97c \uc9c1\uc811 \ub9cc\ub4e4 \uc815\ub3c4\uc758 JavaScript, React \uae30\uc220\uc744 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4."}],o=[{id:0,title:"\ub124\uc774\ubc84 \ud074\ub77c\uc6b0\ub4dc \ud50c\ub7ab\ud3fc\uc758 \uc11c\ubc84 \uc0dd\uc131 \ubd80\ud130 \uc0ad\uc81c \uae4c\uc9c0 \ubaa8\ub4e0 \uacfc\uc815\uc744 \uac1c\ubc1c \ud558\uace0 \uc11c\ubc84\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \uc5ec\ub7ec \uc11c\ube44\uc2a4\ub4e4\uc744 \uac1c\ubc1c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",contents:[{id:0,content:"\ub808\uac70\uc2dc \ucf54\ub4dc \ubd84\uc11d \ubc0f \ub9ac\ud399\ud1a0\ub9c1"},{id:1,content:"Monolithic Architecture \uc5d0\uc11c Microservice Architecture \ub85c \uc804\ud658 \uacbd\ud5d8"},{id:2,content:"Message Queue \ub97c \ud65c\uc6a9\ud55c \ube44\ub3d9\uae30 \uc2dc\uc2a4\ud15c \uad6c\ucd95"},{id:3,content:"\uc11c\ube44\uc2a4 \ud658\uacbd\uc5d0 \ub9de\ub294 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870 \uc124\uacc4\uc640 \ubaa8\ub4c8\ud654 \uc9c4\ud589"}]},{id:1,title:"IAAS \uc0c1\ud488 \uacf5\ud1b5 \ud504\ub85c\ube44\uc800\ub2dd \ud30c\uc774\ud504\ub77c\uc778 \ud50c\ub7ab\ud3fc\uc744 \uac1c\ubc1c\ud558\uace0 \uc720\uc9c0\ubcf4\uc218 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",contents:[{id:0,content:"\uc5ec\ub7ec \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ub3d9\uc77c\ud55c \uc791\uc5c5 \uc774\ub825 \uad00\ub9ac \uc2dc\uc2a4\ud15c \uac1c\ubc1c"},{id:1,content:"\uc5d0\ub7ec \uc0c1\ud669\uc5d0 \ub530\ub77c \ud655\uc7a5 \uac00\ub2a5\ud55c \uc5d0\ub7ec \ucc98\ub9ac \uc2dc\uc2a4\ud15c \uc124\uacc4 \uac1c\ubc1c"}]},{id:2,title:"\uc5c5\ubb34 \uc9c0\uc6d0\uacfc \uc0dd\uc120\uc131 \ud5a5\uc0c1\uc744 \uc704\ud55c \uae30\ub2a5\ub4e4\uc744 \uc2a4\uc2a4\ub85c \ub9cc\ub4e4\uace0 \uc13c\ud130 \uc804\uccb4\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub3c4\ub85d \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",contents:[{id:0,content:"\uc5ec\ub7ec \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ub3d9\uc77c\ud55c \uc791\uc5c5 \uc774\ub825 \uad00\ub9ac \uc2dc\uc2a4\ud15c \uac1c\ubc1c"},{id:1,content:"\uc5c5\ubb34 \uba54\uc2e0\uc800\ub97c \uc774\uc6a9\ud558\uc5ec \uc5c5\ubb34\uc5d0 \ud544\uc694\ud55c \ucc57\ubd07 \uae30\ub2a5 \uac1c\ubc1c"}]},{id:3,title:"\ud074\ub77c\uc6b0\ub4dc \ud658\uacbd\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\ub4e4\uc758 \ud2b8\ub7ec\ube14 \uc288\ud305\uacfc \uc9c0\uc6d0\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",contents:[]}],c=n(5893);function a(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.default,{children:(0,c.jsx)("title",{children:"\uc7a5\ud55c\uc194"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("h1",{children:"\uc7a5\ud55c\uc194"}),(0,c.jsx)("div",{children:"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4\ub85c \uc77c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ubb38\uc81c \ud574\uacb0 \uc790\uccb4\ub97c \uc88b\uc544\ud558\uace0 \ub0a8\uc544 \uc788\ub294 \ubb38\uc81c\uac00 \uc788\uc73c\uba74 \ucc38\uc9c0 \ubabb\ud569\ub2c8\ub2e4. \ube44\ud6a8\uc728\uc801\uc778 \uc5c5\ubb34\ub97c \uc2eb\uc5b4\ud558\uace0 \uc0dd\uc0b0\uc131 \ud5a5\uc0c1\uc5d0 \ub9ce\uc740 \uace0\ubbfc\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,c.jsx)("hr",{}),(0,c.jsx)("section",{children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("h2",{children:"\uacbd\ud5d8"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"NAVER Cloud"}),(0,c.jsx)("span",{children:"Backend Developer"}),(0,c.jsx)("br",{}),(0,c.jsx)("span",{children:"2019.11 ~ \ud604\uc7ac"})]}),(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:o.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsx)("h4",{children:e.title}),(0,c.jsx)("ul",{children:e.contents.map((function(e){return(0,c.jsx)("li",{children:e.content},e.id)}))})]},e.id)}))})})]})}),(0,c.jsx)("hr",{}),(0,c.jsxs)("section",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("h2",{children:"\uc5ed\ub7c9"})}),(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:i.map((function(e){return(0,c.jsx)("li",{children:e.content},e.id)}))})})]}),(0,c.jsx)("hr",{}),(0,c.jsx)("footer",{children:(0,c.jsx)("div",{children:(0,c.jsx)("a",{href:"https://github.com/pinus-densiflora",children:"GitHub"})})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3882)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);