(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(t,e,n){"use strict";n.r(e);var i=n(6),r=n.n(i),o=n(1),u=n.n(o),s=n(181),a=n(3),c=n(13),f=n(2),d=function(t,e){var n=void 0;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){return t.apply(i,r)},e)}},l=function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()};function p(t){var e=0;return t.forEach(function(t){t.rect.height>e&&(e=t.rect.height)}),e}function L(t){var e=t.mode,n=t.from,i=t.direction,r=t.rect,o=t.width,u=n||0;switch(e){case"await":switch(i){case"toRight":return o;case"toLeft":default:return-r.width}case"smooth":switch(i){case"toRight":return r.width>o?0:o-r.width;case"toLeft":default:return r.width>o?o-r.width:0}case"chain":default:switch(i){case"toRight":return 0;case"toLeft":default:return r.width+u>o?o-r.width:o-r.left-r.width}}}var M=function(t){var e=t.mode,n=t.index,i=t.rect,r=t.offset,o=t.width,u=t.direction,s=function(t){var e=t.index,n=t.rect,i=t.offset,r=t.width,o=t.direction;if(0===e)return i;if("number"==typeof i)return function(t){var e=t.rect,n=t.offset;switch(t.direction){case"toRight":return n-e.width;case"toLeft":default:return n}}({rect:n,offset:i,direction:o});switch(o){case"toRight":return-n.width;case"toLeft":default:return r}}({index:n,rect:i,offset:r,width:o,direction:u});return{from:s,to:function(t){var e=t.rect,n=t.width;switch(t.direction){case"toRight":return n;case"toLeft":default:return-e.width}}({rect:i,width:o,direction:u}),next:L({mode:e,from:s,direction:u,rect:i,width:o})}};function w(t){var e=t.from,n=t.rect;switch(t.direction){case"toRight":return e;case"toLeft":default:return e+n.width}}var m=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},j=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},g=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},x=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},N=function(t){function e(){var t,n,i;m(this,e);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=i=g(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),i.state={children:i.props.children({index:i.props.index}),move:i.props.move,position:{from:void 0,to:void 0,next:void 0},offset:i.props.offset,rect:null},i.x=0,i.isMoving=!1,i.nextTriggered=!1,i.elementRef=u.a.createRef(),i.componentDidMount=function(){i.setPosition(!0),i.observer=new MutationObserver(i.onMutation),i.observer.observe(i.elementRef.current,{characterData:!0,childList:!0,subtree:!0})},i.componentWillUnmount=function(){i.observer.disconnect()},i.onMutation=function(){i.setPosition()},i.componentDidUpdate=function(t,e){i.x||e.position.from===i.state.position.from||(i.x=i.state.position.from,i.elementRef.current.style.transform="translate3d("+i.x+"px, 0, 0)"),i.x!==i.state.position.from&&t.prevRect&&i.props.prevRect&&t.prevRect.width!==i.props.prevRect.width&&(i.props.offset?i.x=i.x+(i.props.offset-t.offset):i.x=i.x+(i.props.prevRect.width-t.prevRect.width),i.elementRef.current.style.transform="translate3d("+i.x+"px, 0, 0)"),i.props.move&&!t.start&&i.props.start&&i.animate(),i.props.start&&!t.move&&i.props.move&&i.animate(),t.move&&!i.props.move&&(i.isMoving=!1)},i.setPosition=function(t){var e=i.props,n=e.mode,r=e.width,o=e.id,u=e.onNext,s=e.direction,a=e.index,c=e.setRect,f=i.elementRef.current.getBoundingClientRect();if(0!==f.width){var d=0===i.props.index?function(t){var e=t.offset,n=t.rect,i=t.direction,r=t.width;if("run-in"===e)switch(i){case"toRight":return-n.width;case"toLeft":default:return r}if("string"==typeof e){var o=Number(e.replace("%",""));if(o)return r/100*o}return e}({offset:i.props.offset,rect:f,direction:s,width:r}):i.props.offset,l=M({mode:n,rect:f,index:a,offset:d,width:r,direction:s});if(c({index:i.props.index,rect:f,offset:d,nextOffset:w({from:l.from,rect:f,direction:s})}),t){var p=function(t){var e=t.rect,n=t.mode,i=(t.prevOffset,t.position),r=t.direction,o=t.width;if("chain"!==n)return!1;switch(r){case"toRight":return i.from>0;case"toLeft":default:return e.width+i.from<=o}}({mode:n,rect:f,position:l,offset:d,direction:s,width:r});p&&u({id:o,index:a,rect:f,nextOffset:w({from:l.from,rect:f,direction:s})}),p||!d&&0!==a||u({id:o,index:a,rect:f}),i.nextTriggered=p}i.setState({rect:f,offset:d,position:l})}},i.shouldTriggerNext=function(){return!i.nextTriggered&&("toLeft"===i.props.direction?i.x<=i.state.position.next:i.x>=i.state.position.next)},i.triggerNext=function(){i.shouldTriggerNext()&&(i.nextTriggered=!0,i.props.onNext({id:i.props.id,index:i.props.index,rect:i.state.rect}))},i.shouldFinish=function(){switch(i.props.direction){case"toRight":return i.x>=i.state.position.to;case"toLeft":default:return i.x<=i.state.position.to}},i.animate=function(){if(!i.isMoving){i.isMoving=!0;var t=null;window.requestAnimationFrame(function e(n){if(i.isMoving&&i.elementRef.current){var r=t?n-t:0;i.x="toLeft"===i.props.direction?i.x-r/100*i.props.speed:i.x+r/100*i.props.speed,i.elementRef.current.style.transform="translate3d("+i.x+"px, 0, 0)",i.triggerNext(),i.shouldFinish()?(i.isMoving=!1,t=null,i.props.onFinish(i.props.id)):(t=n,window.requestAnimationFrame(e))}})}},i.render=function(){return u.a.createElement("div",{className:"ticker__element",style:{willChange:"transform",position:"absolute",left:0,top:0,transform:"translate3d("+i.x+"px, 0, 0)"},ref:i.elementRef},i.state.children)},g(i,n)}return j(e,t),e}(u.a.Component);N.propTypes={children:Object(f.oneOfType)([f.node,f.func]).isRequired,direction:f.string.isRequired,speed:f.number.isRequired,id:f.string.isRequired,index:f.number.isRequired,mode:f.string.isRequired,move:f.bool.isRequired,onNext:f.func.isRequired,onFinish:f.func.isRequired,setRect:f.func.isRequired,start:f.bool.isRequired,offset:Object(f.oneOfType)([f.number,f.string]),prevRect:f.object,width:f.number},N.defaultProps={offset:void 0,width:void 0,prevRect:null};var C=function(t,e){return{elements:[{id:l(),index:0,height:0,start:!1,offset:t,rect:null,prevRect:null}],width:e,height:0}},v=function(t){function e(){var t,n,i;m(this,e);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=i=g(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),i.next=null,i.state=C(i.props.offset),i.tickerRef=u.a.createRef(),i.dOnResize=d(function(){return i.onResize()},150),i.componentDidMount=function(){i.setState({width:i.tickerRef.current.offsetWidth,height:i.props.height}),window.addEventListener("resize",i.dOnResize)},i.componentWillUnmount=function(){window.removeEventListener("resize",i.dOnResize)},i.setRect=function(t){var e=t.index,n=t.rect,r=(t.offset,t.nextOffset);i.setState(function(t){var o=t.elements.map(function(t){var i=t;return t.index===e&&(i.rect=n),t.index===e+1&&(i.prevRect=n,i.offset&&(i.offset=r)),i});return{elements:o,height:i.props.height?t.height:p(o)}})},i.onResize=function(){i.tickerRef.current.offsetWidth!==i.state.width&&i.setState(h({},C(i.props.offset,i.tickerRef.current.offsetWidth),{height:i.props.height}))},i.onFinish=function(t){i.setState(function(e){return{elements:e.elements.filter(function(e){return e.id!==t})}})},i.onNext=function(t){t.id;var e=t.index,n=t.rect,r=t.nextOffset;i.setState(function(t){return{elements:[].concat(x(t.elements.map(function(t){var i=t;return t.index===e&&(i.rect=n),(0===t.index||t.offset||i.index===e+1)&&(i.start=!0),i})),[{id:l(),index:t.elements[t.elements.length-1].index+1,height:0,start:!1,offset:r,rect:null,prevRect:n}])}})},g(i,n)}return j(e,t),y(e,[{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"ticker",ref:this.tickerRef,style:{position:"relative",overflow:"hidden",height:this.state.height&&this.state.height+"px"}},this.state.width&&this.state.elements.map(function(e){return u.a.createElement(N,{key:e.id,id:e.id,index:e.index,start:e.start,offset:e.offset,prevRect:e.prevRect,direction:t.props.direction,mode:t.props.mode,move:t.props.move,speed:t.props.speed,onFinish:t.onFinish,onNext:t.onNext,setRect:t.setRect,width:t.state.width},t.props.children)}))}}]),e}(u.a.Component);v.propTypes={children:Object(f.oneOfType)([f.node,f.func]).isRequired,direction:f.string,mode:f.string,move:f.bool,offset:Object(f.oneOfType)([f.number,f.string]),speed:f.number,height:Object(f.oneOfType)([f.number,f.string])},v.defaultProps={offset:0,speed:5,direction:"toLeft",mode:"chain",move:!0,height:void 0};var b=v,O=n(185),D=n.n(O),T=n(42),E=n(71),S=n(179),I=a.a.div.withConfig({displayName:"info__Information",componentId:"w0kfj8-0"})(["font-family:'Calibre-Regular';color:blue;height:100%;bottom:0;margin-left:25px;margin-right:25px;margin-bottom:150px;display:flex;flex-direction:column;justify-content:space-between;@media(min-width:992px){height:50vh;margin-left:150px;margin-bottom:150px;}"]),z=a.a.p.withConfig({displayName:"info__Text",componentId:"w0kfj8-1"})(["font-family:'Calibre-regular';color:blue;font-size:36px;width:85vw;line-height:50px;max-width:70vw;margin-top:50px;@media(min-width:992px){max-width:65vw;height:50vh;}"]),k=a.a.div.withConfig({displayName:"info__Links",componentId:"w0kfj8-2"})(["display:flex;flex-direction:column;margin-top:50px;margin-bottom:100px;padding-bottom:300px;@media(min-width:992px){padding-bottom:0;}"]),R=a.a.a.withConfig({displayName:"info__StyledLink",componentId:"w0kfj8-3"})(["font-family:'Calibre-Light';color:blue;font-size:62px;line-height:70px;text-decoration:none;u{text-decoration:none;box-shadow:inset 0 -8px 0 white,inset 0 -9.5px 0 blue}"]),Y=c.b.div({preEnter:{y:1e3,opacity:1},enter:{opacity:1,y:0,transition:{duration:600,ease:"easeInOut"}},exit:{y:0,opacity:.5,transition:{duration:600,ease:"easeInOut"}}}),Q=a.a.div.withConfig({displayName:"info__InfiniteScroll",componentId:"w0kfj8-4"})(["height:100vh;background-color:white;overflow-y:scroll;@media(min-width:992px){}"]),A=a.a.p.withConfig({displayName:"info__Marquee",componentId:"w0kfj8-5"})(["color:blue;font-size:92px;font-family:'Eksell';height:100px;margin-top:100px;white-space:nowrap;"]),_=function(t){function e(e){return t.call(this,e)||this}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.isInfoPage(!0)},n.render=function(){return u.a.createElement(Y,null,u.a.createElement(S.a,{title:"Info",keywords:["Karlanders","immo","Info"]}),u.a.createElement(D.a,null,u.a.createElement(s.a,{to:"/"}),u.a.createElement(Q,{className:"infinite-scroll"},u.a.createElement(b,null,function(t){t.index;return u.a.createElement(A,null,"Increase your vertical Karl Anders -")}),u.a.createElement(I,null,u.a.createElement(z,null,"Karl Anders — contemporary branding since 2011 and  real estate ommunication expert. In um versum est  dolormit Min pa qui inciis exersped que nimi, volore tur ad ut ad quos sam, tempe cusdandam donna est ut quiatet praessit vel moluptation provide lecus."),u.a.createElement(k,null,u.a.createElement(R,{href:"mailto:hello@karlanders.immo"},u.a.createElement("u",null,"Get in touch!")),u.a.createElement(R,{href:"https://karlanders.io",target:"_blank"},u.a.createElement("u",null,"Studio")))))))},e}(u.a.Component);e.default=Object(T.b)(function(t){return{isInfoPage:t.app.isInfoPage,isInViewport:t.app.isInViewport}},function(t){return{isInfoPage:function(e){return t(Object(E.c)(e))}}})(_)},179:function(t,e,n){"use strict";var i=n(180),r=n(1),o=n.n(r),u=n(2),s=n.n(u),a=n(183),c=n.n(a);function f(t){var e=t.description,n=t.lang,r=t.meta,u=t.keywords,s=t.title,a=i.data.site,f=e||a.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(r)})}f.defaultProps={lang:"en",meta:[],keywords:[],description:""},f.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=f},180:function(t){t.exports={data:{site:{siteMetadata:{title:"Karl Anders.immo",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},181:function(t,e,n){"use strict";var i=n(1),r=n.n(i),o=n(15),u=n(3),s=n(182),a=n.n(s),c=u.a.div.withConfig({displayName:"logo__Styled",componentId:"zj7acn-0"})(["position:fixed;width:200px;right:-190px;bottom:0;margin-bottom:25px;transform-origin:bottom left;transform:rotateZ(-90deg);z-index:998;@media(min-width:992px){position:fixed;width:300px;right:-280px;bottom:0;margin-bottom:25px;transform-origin:bottom left;transform:rotateZ(-90deg);z-index:999;}img{height:100%;width:100%}"]);e.a=function(t){return r.a.createElement(c,null,r.a.createElement(o.a,{to:t.to},r.a.createElement("img",{alt:"",src:a.a})))}},182:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNTUuOCA1Mi4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTUuOCA1Mi4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDBGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0Mi42LDUyLjNjNi4yLDAsMTMuMi0zLDEzLjItMTEuNGMwLTctNC44LTEwLTEyLTEyLjVjLTUuOS0yLTEwLjItMy41LTEwLjItNi45YzAtMy4zLDMtNS43LDYuNi01LjcKCQljNS44LDAsOS40LDQuOCwxMy43LDEzaDAuMUwzNTMuNCwxN2MtNC4xLTEuMS04LjQtMi4xLTEyLjItMi4xYy02LjYsMC0xMy41LDMuMy0xMy41LDExLjJjMCw1LjEsMi4yLDguNCwxMC44LDExLjQKCQljNi41LDIuMiwxMS41LDMuOSwxMS41LDcuOGMwLDQuNi0zLjUsNi4xLTYuOCw2LjFjLTguNCwwLTEyLjktMTAuMi0xNS4zLTE1LjZoLTAuMWwwLjksMTQuNUMzMzIuMyw1MSwzMzcuNSw1Mi4zLDM0Mi42LDUyLjMKCQkgTTMyNS4zLDI0LjdjLTEuMS03LjQtNS41LTkuMS0xMC45LTkuMWgtMTYuN3YwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjZ2MC4xaDE3Ljl2LTAuMQoJCWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMTYuNGgwLjFjMy41LDAsNS4yLDYsNC44LDEzTDMyNS4zLDI0Ljd6IE0yODEuMiwxNS44YzMuMywwLDUuOCw1LjUsNi4xLDEzLjhoLTEyCgkJQzI3NS4zLDE5LjcsMjc4LjksMTUuOCwyODEuMiwxNS44IE0yODYuNSw0NC4xYy00LjksMC0xMC44LTMuNi0xMS4yLTEzLjZoMjEuNWMtMC42LTkuOS02LjctMTUuNi0xNC0xNS42CgkJYy03LjYsMC0xNi42LDYuMi0xNi42LDE4LjdjMCwxMi43LDguMywxOC42LDE1LjcsMTguNmM3LjYsMCwxMi41LTYuOCwxNC4zLTEyLjZsLTAuMS0wLjFDMjkzLjEsNDIuNCwyODkuNSw0NC4xLDI4Ni41LDQ0LjEKCQkgTTI1MC40LDUwLjVjLTUuNCwwLTkuOS05LjMtOS45LTIxLjJjMC0xMS4xLDMuNi0xMi44LDguMS0xMi44aDJ2MzRIMjUwLjR6IE0yNjAuOCw0Mi44VjEuMmgtMTR2MC4xYzMuNywxLjksMy44LDQuOCwzLjgsOC42djUuNgoJCWgtMS43Yy04LjgsMC0xOC45LDUuNS0xOC45LDE5LjFjMCwxMS43LDcuNiwxNi45LDE3LjksMTYuOWgxNi43di0wLjFDMjYwLjksNDkuNSwyNjAuOCw0Ni42LDI2MC44LDQyLjggTTIyNS4xLDQyLjhWMjEuMQoJCWMwLTMuMi0xLjctNi02LjUtNmMtNC42LDAtOS40LDIuNC0xMi4yLDQuMnYtMy43aC0xNHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjZ2MC4xaDE3LjJ2LTAuMQoJCWMtMy0xLjctMy4yLTQuOC0zLjItOC42VjIwLjNjMi4yLTEuNCw0LTEuNyw1LjMtMS43YzIuNCwwLDMuMiwyLjIsMy4yLDQuNXYxOS43YzAsMy44LTAuNCw2LjktMy4yLDguNnYwLjFoMTcuM3YtMC4xCgkJQzIyNS4yLDQ5LjUsMjI1LjEsNDYuNiwyMjUuMSw0Mi44IE0xNTIuOCwzNS43bDguMy0yMC43bDguNCwyMC43SDE1Mi44eiBNMTgzLjUsNDAuM0wxNjYuMiwwSDE2NmwtMTYuOCw0MS42CgkJYy0xLjksNC44LTQsNy45LTYuNCw5Ljh2MC4xaDExLjJ2LTAuMWMtNC4xLTEuNS01LjgtNC40LTMuOS05LjNsMi4yLTUuNGgxNy41TDE3Miw0MmMxLjksNC45LDAuNCw3LjgtMy43LDkuNHYwLjFoMjN2LTAuMQoJCUMxODguNyw1MCwxODYuMyw0Ni45LDE4My41LDQwLjMgTTExMiw1MS42aDE3Ljl2LTAuMWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMS4yaC0xNHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MzIuOAoJCWMwLDMuOC0wLjEsNi43LTMuOCw4LjZWNTEuNnogTTExMS43LDI0LjdjLTEuMS03LjQtNS41LTkuMS0xMC45LTkuMUg4NHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjYKCQl2MC4xaDE3Ljl2LTAuMWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMTYuNGgwLjFjMy41LDAsNS4yLDYsNC44LDEzTDExMS43LDI0Ljd6IE02NC43LDQ4LjRjLTIuMiwwLTQuOS0zLTQuOS03LjMKCQljMC03LjQsMS44LTguNSw4LjktMTQuM3YxNi44QzY4LjcsNDYuNiw2Ni45LDQ4LjQsNjQuNyw0OC40IE03OC44LDQyLjhWMjMuNWMwLTQuNS0yLjQtOC40LTkuNS04LjRjLTQuMiwwLTguNCwwLjYtMTEuNywxLjJsLTYsOAoJCWwwLjEsMC4xYzIuNi0yLjMsOS4xLTguMiwxMy04LjJjMi43LDAsNC4yLDIuNSw0LjIsNS41YzAsNC4yLTIuNSw2LjItOS40LDEwLjNjLTYuMywzLjctOS40LDYtOS40LDExLjNjMCwzLjgsMi43LDguNiw5LjEsOC42CgkJYzMuMiwwLDcuMS0yLjcsOS40LTQuN3Y0LjNoMTMuOXYtMC4xQzc4LjksNDkuNSw3OC44LDQ2LjYsNzguOCw0Mi44IE0zOS45LDQwLjJMMjQuNywxOS40bDguNi03LjdDNDEsNC44LDQ3LDIuMyw0OS41LDEuM1YxLjIKCQlIMjkuM3YwLjFjNS4yLDIuNiw3LjMsNiwyLjcsMTAuMkwxNi43LDI1LjFWOS45YzAtMy44LDItNy4xLDUuMy04LjZWMS4ySDB2MC4xYzMuMywxLjUsNS40LDQuOCw1LjQsOC42djMyLjgKCQljMCwzLjgtMi4xLDcuMS01LjQsOC42djAuMWgyMnYtMC4xYy0zLjMtMS41LTUuMy00LjgtNS4zLTguNlYyNmwxMS43LDE2LjhjMi40LDMuNSwzLDYuOC0wLjEsOC42djAuMUg1MHYtMC4xCgkJQzQ3LjMsNDkuOCw0My45LDQ1LjcsMzkuOSw0MC4yIi8+CjwvZz4KPC9zdmc+Cg=="},185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}});var i,r=(i=n(186))&&i.__esModule?i:{default:i}},186:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(1)),r=u(n(187)),o=u(n(190));function u(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L=function(t){function e(){var t,n,i,u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return i=this,u=(t=f(e)).call.apply(t,[this].concat(c)),n=!u||"object"!==s(u)&&"function"!=typeof u?l(i):u,p(l(l(n)),"state",{style:{}}),p(l(l(n)),"updateStyle",function(){var t=(0,r.default)(n.props.style,(0,o.default)());n.setState({style:t})}),n}var n,u,L;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,i.default.Component),n=e,(u=[{key:"componentDidMount",value:function(){this.updateStyle(),window.addEventListener("resize",this.updateStyle)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateStyle)}},{key:"render",value:function(){return i.default.createElement("div",a({},this.props,{style:this.state.style}))}}])&&c(n.prototype,u),L&&c(n,L),e}();e.default=L},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}});var i,r=(i=n(188))&&i.__esModule?i:{default:i}},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.containsRvh=function(t){return/(\d+(\.\d*)?)rvh(?!\w)/.test(t)},e.default=void 0;var i,r=(i=n(189))&&i.__esModule?i:{default:i};var o=function(t,e){!function(t,e){if("object"!==(0,r.default)(t)&&void 0!==t)throw Error("style (the first argument) must be an object or undefined");if("number"!=typeof e||e<0)throw Error("Second argument (windowHeight) must be a non-negative number")}(t,e);var n=void 0===t?{height:"100rvh"}:t,i={};return Object.keys(n).forEach(function(t){i[t]=function(t,e){return t.replace(/(\d+(\.\d*)?)rvh(?!\w)/g,function(t,n){return"".concat(e*parseFloat(n)/100,"px")})}(n[t],e)}),i};e.default=o},189:function(t,e,n){"use strict";t.exports=(t=>{if(void 0===t)return"undefined";if(null===t)return"null";if(Array.isArray(t))return"array";if("boolean"==typeof t)return"boolean";if("function"==typeof t)return"function";if("number"==typeof t)return"number";if("string"==typeof t)return"string";if("object"==typeof t)return t.constructor===RegExp?"regexp":t.constructor===Map?"map":t.constructor===Set?"set":t.constructor===Date?"date":"object";if("symbol"==typeof t)return"symbol";throw new Error(`value of unknown type: ${t}`)})},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return window.innerHeight};e.default=i}}]);
//# sourceMappingURL=component---src-pages-info-js-18470df4df238bd64682.js.map