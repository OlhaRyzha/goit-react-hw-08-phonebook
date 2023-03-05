"use strict";(self.webpackChunkhttps_github_com_OlhaRyzha_goit_react_hw_08_phonebook=self.webpackChunkhttps_github_com_OlhaRyzha_goit_react_hw_08_phonebook||[]).push([[514],{3514:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,o,i,a,s,l,c,d,u=t(7689),p=t(9986),f=t(9434),m=t(3139),h=t(168),g=t(6088),_=t(1087),b=g.Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  margin: 50px 0;\n"]))),x=(0,g.Z)(_.OL)(o||(o=(0,h.Z)(["\n  padding: 15px;\n  background-color: pink;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n  margin: 40px 0;\n"]))),v=g.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),y=g.Z.p(a||(a=(0,h.Z)(["\n  margin-top: 40px;\n  font-size: large;\n  margin-bottom: 20px;\n"]))),j=g.Z.b(s||(s=(0,h.Z)(["\n  text-transform: capitalize;\n"]))),k=g.Z.button(l||(l=(0,h.Z)(["\n  padding: 16px;\n  background-color: pink;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n"]))),w=t(184),Z=function(){var n=(0,p.a)().user,e=(0,f.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(v,{children:[(0,w.jsx)("ul",{children:(0,w.jsx)("li",{children:(0,w.jsx)(x,{to:"contacts",children:"Contacts"})})}),(0,w.jsx)(k,{type:"button",onClick:function(){e((0,m.ni)())},children:"Logout"})]}),(0,w.jsxs)(y,{children:["Welcome, ",(0,w.jsx)(j,{children:n.name})," "]})]})},P=function(){return(0,w.jsx)("div",{children:(0,w.jsxs)(b,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(x,{to:"login",children:"Login"})}),(0,w.jsx)("li",{children:(0,w.jsx)(x,{to:"register",children:"Register"})})]})})},C=g.Z.nav(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n"]))),z=((0,g.Z)(_.OL)(d||(d=(0,h.Z)(["\n  color: #fff;\n  font-size: ",";\n  font-weight: 700;\n  text-transform: uppercase;\n  transition-property: color, background-color, transform;\n  transition-duration: 0.2s;\n  transition-timing-function: all 0.5s linear;\n  transform: scale(0.9);\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n  &.active {\n    color: ",";\n    background-color: #d8d0d0;\n    padding: 10px 18px;\n    border-radius: 8px;\n    transform: scale(1);\n    pointer-events: none;\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),function(){var n=(0,p.a)().isLoggedIn;return(0,w.jsxs)(C,{children:[(0,w.jsx)(x,{to:"/",children:"Home"}),n?(0,w.jsx)(Z,{}):(0,w.jsx)(P,{}),(0,w.jsx)(u.j3,{})]})})},6088:function(n,e,t){t.d(e,{Z:function(){return _}});var r=t(2791),o=t(7462),i=t(9791),a=t(5011),s=t(5438),l=t(9140),c=t(2561),d=i.Z,u=function(n){return"theme"!==n},p=function(n){return"string"===typeof n&&n.charCodeAt(0)>96?d:u},f=function(n,e,t){var r;if(e){var o=e.shouldForwardProp;r=n.__emotion_forwardProp&&o?function(e){return n.__emotion_forwardProp(e)&&o(e)}:o}return"function"!==typeof r&&t&&(r=n.__emotion_forwardProp),r},m=function(n){var e=n.cache,t=n.serialized,r=n.isStringTag;(0,s.hC)(e,t,r);(0,c.L)((function(){return(0,s.My)(e,t,r)}));return null},h=function n(e,t){var i,c,d=e.__emotion_real===e,u=d&&e.__emotion_base||e;void 0!==t&&(i=t.label,c=t.target);var h=f(e,t,d),g=h||p(u),_=!g("as");return function(){var b=arguments,x=d&&void 0!==e.__emotion_styles?e.__emotion_styles.slice(0):[];if(void 0!==i&&x.push("label:"+i+";"),null==b[0]||void 0===b[0].raw)x.push.apply(x,b);else{0,x.push(b[0][0]);for(var v=b.length,y=1;y<v;y++)x.push(b[y],b[0][y])}var j=(0,a.w)((function(n,e,t){var o=_&&n.as||u,i="",d=[],f=n;if(null==n.theme){for(var b in f={},n)f[b]=n[b];f.theme=(0,r.useContext)(a.T)}"string"===typeof n.className?i=(0,s.fp)(e.registered,d,n.className):null!=n.className&&(i=n.className+" ");var v=(0,l.O)(x.concat(d),e.registered,f);i+=e.key+"-"+v.name,void 0!==c&&(i+=" "+c);var y=_&&void 0===h?p(o):g,j={};for(var k in n)_&&"as"===k||y(k)&&(j[k]=n[k]);return j.className=i,j.ref=t,(0,r.createElement)(r.Fragment,null,(0,r.createElement)(m,{cache:e,serialized:v,isStringTag:"string"===typeof o}),(0,r.createElement)(o,j))}));return j.displayName=void 0!==i?i:"Styled("+("string"===typeof u?u:u.displayName||u.name||"Component")+")",j.defaultProps=e.defaultProps,j.__emotion_real=j,j.__emotion_base=u,j.__emotion_styles=x,j.__emotion_forwardProp=h,Object.defineProperty(j,"toString",{value:function(){return"."+c}}),j.withComponent=function(e,r){return n(e,(0,o.Z)({},t,r,{shouldForwardProp:f(j,r,!0)})).apply(void 0,x)},j}},g=h.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(n){g[n]=g(n)}));var _=g}}]);
//# sourceMappingURL=514.0e61cbbe.chunk.js.map