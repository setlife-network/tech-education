!function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],f=0,s=[];f<c.length;f++)a=c[f],o[a]&&s.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);s.length;)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;i.push([336,1]),n()}({336:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(56),a=n.n(i),c=n(140),u=n(341),l=n(36),p=n(14),f={breakpoints:["768px","1024px","1366px","1920px"],devices:{mobile:599,tabletPortrait:600,tabletLandscape:900,desktop:1200,desktopBig:1800},shadows:{1:"0px 1.5px 8px rgba(0,0,0,0.47)",2:"0px 2px 11px rgba(0,0,0,0.50)",3:"0px 3px 16px rgba(0,0,0,0.52)",4:"0px 4px 21px rgba(0,0,0,0.54)",5:"0px 5px 25px rgba(0,0,0,0.54)",6:"0px 5px 35px rgba(0,0,0,0.54)",7:"0px 5px 45px rgba(0,0,0,0.54)"},colors:{white:"#ffffff",background:"#F6F7F9",border:"#ECEFF3",lightGrey:"#C9D6E2",grey:"#B5B5B5",charcoal:"#2E497A",purple:"#C15BEE",blue:"#1C9EF6",lightBlue:"#8CC3E6",veryLightBlue:"#CCEDFF",darkBlue:"#1373BD",green:"#2BC094",yellow:"#F5D76E",red:"#F93B6A",facebook:"#32529F",overlay:"rgba(0,0,0,0.65)",transparent:"transparent",bottomColor:"#3B3B3B",primary:"#eceff1",primaryLight:"#ffffff",primaryDark:"#babdbe",secondary:"#b3e5fc",secondaryLight:"#e6ffff",secondaryDark:"#82b3c9",textPrimary:"#000000",textSecondary:"#ffffff",accent:"#F93B6A"},gradients:{vertical:"linear-gradient(#1C9EF6, #0ACFFE)",horizontal:"linear-gradient(90deg, #1C9EF6, #0ACFFE)",green:"linear-gradient(#84FAB0, #2BC094)"},fonts:{display1:{fontSize:72,fontWeight:400},display2:{fontSize:60,fontWeight:400},display3:{fontSize:54,fontWeight:400},display4:{fontSize:48,fontWeight:400},h1:{fontSize:30,fontWeight:600},h2:{fontSize:24,fontWeight:600},h3:{fontSize:20,fontWeight:600},h4:{fontSize:16,fontWeight:600},h5:{fontSize:14,fontWeight:600},h6:{fontSize:12,fontWeight:600}},tags:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",display1:"h1",display2:"h2",display3:"h3",display4:"h4"},navbar:[100,240],space:[0,8,16,24,32,40,48,56,64,72,80],durationShort:"200ms",durationLong:"450ms",transitionOpacity:{entering:1,entered:1,exiting:0,exited:0},zIndexModal:999,zIndexModalBackdrop:1e3},s=n(21),y=n(340),b=n(3),m=n.n(b),d=n(28),h=n(2);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=Object(p.default)("div")(h.l,h.C,h.G,h.p,h.n,h.y,h.w,h.x,h.v,h.m,h.A,h.E,h.B,h.k,h.s,function(e){return e.css});w.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}({},h.C.propTypes,h.G.propTypes,h.p.propTypes,h.l.propTypes,h.n.propTypes,h.y.propTypes,h.w.propTypes,h.x.propTypes,h.v.propTypes,h.m.propTypes,h.A.propTypes,h.E.propTypes,h.B.propTypes,h.k.propTypes,h.s.propTypes);var O=w;function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){var e=k(["\n        order: ",";\n    "]);return j=function(){return e},e}function E(){var e=k(["\n        align-items: center;\n        justify-content: center;\n    "]);return E=function(){return e},e}function S(){var e=k(["\n        flex-direction: column-reverse;\n    "]);return S=function(){return e},e}function P(){var e=k(["\n        flex-direction: column;\n    "]);return P=function(){return e},e}function x(){var e=k(["\n        flex-direction: row-reverse;\n    "]);return x=function(){return e},e}function T(){var e=k(["\n        flex-direction: row;\n    "]);return T=function(){return e},e}function _(){var e=k(["\n        flex-wrap: wrap;\n    "]);return _=function(){return e},e}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var C=Object(h.D)({prop:"direction",cssProperty:"flexDirection"}),z=Object(h.D)({prop:"basis",cssProperty:"flexBasis"}),D=Object(p.default)(O).withConfig({displayName:"Flex",componentId:"tgmg8o-0"})(["display:flex;",";",";",";",";",";",";",";"," "," "," "," "," "," ",""],C,z,h.b,h.c,h.q,h.r,h.a,Object(d.a)("wrap")(_()),Object(d.a)("row")(T()),Object(d.a)("row","reverse")(x()),Object(d.a)("column")(P()),Object(d.a)("column","reverse")(S()),Object(d.a)("center")(E()),Object(d.a)("order")(j(),function(e){return e.order}));D.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}({},h.b.propTypes,h.c.propTypes,h.a.propTypes,h.q.propTypes,h.r.propTypes,C.propTypes,z.propTypes,{row:m.a.bool,column:m.a.bool,reverse:m.a.bool,wrap:m.a.bool,center:m.a.bool,order:m.a.number});var F=D,B=n(339),N=n(142);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=Object(h.F)({key:"fonts"}),A=Object(h.D)({prop:"align",cssProperty:"textAlign"}),R=Object(h.D)({prop:"weight",cssProperty:"fontWeight"}),M=Object(h.D)({prop:"size",cssProperty:"fontSize"}),L=Object(h.D)({prop:"whiteSpace",cssProperty:"white-space"}),q=p.default.p.attrs({as:function(e){return e.theme.tags[e.variant]}}).withConfig({displayName:"Text",componentId:"sc-16q5x6r-0"})(["",";",";",";",";",";",";",";",";",";",";",";",";",";"],A,h.l,h.o,M,h.t,h.u,h.C,W,R,h.m,h.z,L,function(e){return e.css});q.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){I(e,t,n[t])})}return e}({},A.propTypes,h.l.propTypes,h.o.propTypes,h.t.propTypes,h.u.propTypes,h.C.propTypes,M.propTypes,R.propTypes,h.m.propTypes,h.z.propTypes,L.propTypes),q.defaultProps={color:"charcoal",size:16,lineHeight:1.6,letterSpacing:"0.025rem",fontFamily:"Nunito,sans-serif"};var H=q;function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,J(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null,"Curriculum Ethos"))}}])&&U(n.prototype,r),i&&U(n,i),t}();function Q(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n        transition: all 0.35s;\n        cursor: pointer;\n        &:hover {\n        }\n    "]);return Q=function(){return e},e}var Y=Object(p.default)(F).withConfig({displayName:"ImageSection__HoverableImageSection",componentId:"sc-1uqfajv-0"})(["",""],Object(d.a)("onClick")(Q())),Z=function(e){var t=e.imageUrl,n=e.onClick,r=e.subtitle,i=e.title;return o.a.createElement(Y,{center:!0,column:!0,height:["50vh","600px"],width:"100%",style:{position:"relative",borderBottom:"1px white solid",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat(t,")")},onClick:n},o.a.createElement(F,{position:"absolute",minHeight:"100%",minWidth:"100%",bg:f.colors.overlay}),o.a.createElement(F,{column:!0,center:!0,style:{position:"absolute"},my:"auto"},o.a.createElement(H,{weight:"700",size:"2rem",color:f.colors.textSecondary,style:{borderBottom:"1px solid ".concat(f.colors.textSecondary)}},i),o.a.createElement(H,{align:"center",weight:"700",size:"1rem",color:f.colors.textSecondary},r)))};Z.defaultProps={onClick:null};var $=Z;function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=Object(h.D)({prop:"depth",cssProperty:"boxShadow",key:"shadows"}),ne=Object(p.default)(O)(h.j,h.h,h.i,h.d,h.g,h.e,h.f,te);ne.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ee(e,t,n[t])})}return e}({},h.j.propTypes,h.h.propTypes,h.i.propTypes,h.d.propTypes,h.g.propTypes,h.e.propTypes,h.f.propTypes,{depth:m.a.oneOf([1,2,3,4,5,6,7])});var re=ne;function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var le=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,ce(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.version,r=e.description;return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,null,o.a.createElement(re,{width:"100%",bg:f.colors.background,p:"auto"},o.a.createElement(F,{row:!0,my:"2rem",mx:"1rem"},o.a.createElement(H,{weight:"700",size:"1.5rem",align:"left",color:f.colors.textPrimary,ml:"1rem",mr:"auto"},t),o.a.createElement(re,{bg:f.colors.overlay,width:"80px",height:"80px",minWidth:"80px",minHeight:"80px",mr:["25px","50px"],ml:"auto",my:"auto",borderRadius:50,depth:3},o.a.createElement(H,{align:"center",color:f.colors.textSecondary},n))))),o.a.createElement(re,{depth:7},o.a.createElement(F,{width:"100%",center:!0,bg:f.colors.charcoal},o.a.createElement(H,{color:f.colors.textSecondary,weight:"500",size:"1rem",align:"left",whiteSpace:"pre-line",my:"2rem",mx:"2rem"},r))))}}])&&ie(n.prototype,r),i&&ie(n,i),t}(),pe=[{name:"Fundamentals of Software",version:"Version 1.0",description:"This course is best suited for newcomers to the world of programming.\n\n                            In Part 1, student will establish a foundational understanding of the basic logical principles that govern the behavior of a program\n\n                            Part 2 will feature actual coding  and language-specific syntax and should only be introduced after the fundamental foundation has been set. This will help students reinforce these principles in practice and start building  a familiarity for reading and writing source code."},{name:"Discovering & Verifying Digital Information",version:"Coming Soon",description:"This course is aimed at improving students' ability to discover and verify digital information. As the virtually limitless amount of information available on the internet continues to grow into new forms and sizes, one of the most critical components of software literacy includes becoming proficient in finding high quality information. This demands a strong scientific methodology for ensuring that corrupted information is not incorporated into your work and research."},{name:"Project Planning & Development",version:"Coming Soon",description:"This course provides key insights for those who have specialized their skillset in design, marketing, or programming and want to gain a more holistic understanding of the software development process. Project managers may also find some of the material helpful for reinforcing their knowledge and adapting parts of their own management methods."},{name:"Cybersecurity, Blockchains, & Trusted Computing",version:"Coming Soon",description:"Part 1 will teach basic ways to assess exposure to common risks that affect anyone using the software of the Internet.\n\n Part 2 will dive deeper into the more specific vulnerabilities currently present in critical components of Internet infrastructure, introducing blockchain as a networking protocol and outlining the general principles that govern any trusted relationships required for different kinds of computing."}];function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),be(this,me(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,o.a.Component),n=t,(r=[{key:"renderCourses",value:function(){return pe.map(function(e){return o.a.createElement(le,{key:e.toString(),name:e.name,version:e.version,description:e.description})})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{width:"100%",center:!0,bg:f.colors.charcoal},o.a.createElement(H,{color:f.colors.textSecondary,weight:"700",size:"2rem"},"Setlife Courses")),this.renderCourses())}}])&&ye(n.prototype,r),i&&ye(n,i),t}(),ge=Object(l.connect)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){fe(e,t,n[t])})}return e}({},e)},function(e){return{}})(he);function we(e){return(we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function je(e,t){return(je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Se=function(e){function t(){var e,n,r,o,i,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,l=new Array(u),p=0;p<u;p++)l[p]=arguments[p];return r=this,o=(e=ve(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==we(o)&&"function"!=typeof o?Ee(r):o,i=Ee(Ee(n)),c=function(){n.props.history.push("/curriculum-ethos")},(a="goToCurriculumEthos")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&je(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{column:!0,className:"LandingPage",width:"100%"},o.a.createElement($,{imageUrl:"https://user-images.githubusercontent.com/4914611/51281952-ded64180-19b1-11e9-9b25-a168c316a768.jpeg",subtitle:"We'll teach you the core skills you need to understand the world of technology",title:"Tech Education"}),o.a.createElement($,{imageUrl:"https://user-images.githubusercontent.com/41223034/51287369-1c909580-19c5-11e9-8f7d-abe222a70109.png",subtitle:"Click to learn more about the curriculum",title:"Curriculum Ethos",onClick:this.goToCurriculumEthos}),o.a.createElement(ge,null)))}}])&&Oe(n.prototype,r),i&&Oe(n,i),t}(),Pe=o.a.createElement(F,{className:"routes-container",width:"100vw"},o.a.createElement(B.a,null,o.a.createElement(N.a,{exact:!0,path:"/",component:Se}),o.a.createElement(N.a,{path:"/curriculum-ethos",component:X})));function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ke(e,t){return!t||"object"!==Te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ce(e){return(Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ze(e,t){return(ze=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}p.default.div.withConfig({displayName:"Header__Content",componentId:"sc-1nqt1i1-0"})(["width:100%;display:flex;flex-flow:row wrap;justify-content:flex-end;@media all and (min-width:1024px ){margin-right:5%;}@media all and (max-width:768px){justify-content:space-around;}@media all and (max-width:500px){flex-direction:column;}}"]);var De=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ke(this,Ce(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ze(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(re,{depth:2,width:"100%",style:{position:"fixed",top:0,left:0,zIndex:2}},o.a.createElement(F,{row:!0,alignItems:"center",bg:f.colors.facebook},o.a.createElement(re,null,o.a.createElement(H,{mx:"1rem",color:f.colors.textSecondary},"Home"))))}}])&&_e(n.prototype,r),i&&_e(n,i),t}(),Fe=Object(l.connect)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){xe(e,t,n[t])})}return e}({},e)},function(e){return{}})(De);function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e,t){return!t||"object"!==Be(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function We(e){return(We=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ie(this,We(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){this.props.location;return o.a.createElement(F,{center:!0,column:!0,bg:f.colors.grey},o.a.createElement(F,{width:"100%"},o.a.createElement(Fe,null)),o.a.createElement(F,{height:["auto"],width:[1]},Pe))}}])&&Ne(n.prototype,r),i&&Ne(n,i),t}(),Me=Object(s.compose)(y.a,Object(l.connect)(function(e){return{}},function(e){return{}}))(Re),Le=n(102);function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){He(e,t,n[t])})}return e}function He(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ge="DECREMENT_PENDING_NETWORK_CALLS",Ue="INCREMENT_PENDING_NETWORK_CALLS",Ve={pendingNetworkCalls:0};var Je=Object(s.combineReducers)({environment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;switch((arguments.length>1?arguments[1]:void 0).type){case Ge:return qe({},e,{pendingNetworkCalls:e.pendingNetworkCalls-1});case Ue:return qe({},e,{pendingNetworkCalls:e.pendingNetworkCalls+1});default:return e}}});var Ke,Xe=function(e){var t;if(e)t=Object(s.createStore)(Je,Object(s.applyMiddleware)(Le.a));else{var n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.compose;t=Object(s.createStore)(Je,n(Object(s.applyMiddleware)(Le.a)))}return t}(!0),Qe=document.getElementById("app-mount-point");Ke=Me,a.a.render(o.a.createElement(c.AppContainer,null,o.a.createElement(p.ThemeProvider,{theme:f},o.a.createElement(l.Provider,{store:Xe},o.a.createElement(u.a,null,o.a.createElement(Ke,null))))),Qe)}});