(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(t,e,i){"use strict";i.r(e),i.d(e,"pageQuery",function(){return E});var n=i(8),r=i.n(n),a=i(6),o=i.n(a),s=i(1),u=i.n(s),l=i(3),c=i(13),d=i(180),f=i(42),L=i(190),p=i.n(L),g=i(182),M=i.n(g),h=i(71),y=i(178),w=c.b.div({preEnter:{y:1e3,opacity:1},enter:{opacity:1,y:0,transition:{duration:600,ease:"easeInOut"}},exit:{y:0,opacity:.5,transition:{duration:600,ease:"easeInOut"}}}),j=l.a.div.withConfig({displayName:"page__Information",componentId:"sc-1vpoy39-0"})(["background-color:",";font-family:'Calibre-Regular';color:white;height:100%;position:relative;z-index:-1;@media(min-width:992px){height:100%;}"],function(t){return t.color}),m=l.a.p.withConfig({displayName:"page__Title",componentId:"sc-1vpoy39-1"})(["font-size:72px;margin-left:25px;margin-right:25px;padding-top:75px;line-height:72px;@media(min-width:992px){margin-left:150px;font-size:72px;}"]),N=l.a.p.withConfig({displayName:"page__Text",componentId:"sc-1vpoy39-2"})(["font-size:24px;margin-left:25px;margin-right:25px;margin-top:75px;max-width:70%;line-height:36px;@media(min-width:992px){font-size:36px;margin-left:150px;max-width:800px;}"]),C=l.a.div.withConfig({displayName:"page__Tags",componentId:"sc-1vpoy39-3"})(["display:flex;flex-direction:column;margin-top:75px;margin-bottom:75px;@media(min-width:992px){margin-left:125px;flex-direction:row;}"]),S=l.a.p.withConfig({displayName:"page__Tag",componentId:"sc-1vpoy39-4"})(["font-size:18px;margin-left:25px;:nth-child(2n){display:none;}@media(min-width:992px){font-size:24px;line-height:50px;:nth-child(2n){display:block;}:nth-last-child(1){display:none;}}"]),b=l.a.div.withConfig({displayName:"page__InfiniteScroll",componentId:"sc-1vpoy39-5"})(["height:100vh;overflow-y:scroll;"]),x=function(t){function e(e){var i;return(i=t.call(this,e)||this).state={allPages:[],currentInViewport:null},i.refsCollection=[],i.infiniteScroll=null,i.allPagesInit=null,i.addElements=i.addElements.bind(r()(i)),i.handleScroll=i.handleScroll.bind(r()(i)),i}o()(e,t);var i=e.prototype;return i.componentDidMount=function(){var t=this;this.props.isInfoPage(!1);var e=[],i=function(t){var e=this;this.uid=t.uid,this.title=t.data.title.text,this.color=t.data.color,this.text=t.data.text.text,this.tags=[],this.images=[],t.tags.map(function(t){return e.tags.push(t)}),t.data.image_gallery.map(function(t){return e.images.push(t)})};e.push(new function(t){var e=this;this.uid=t.uid,this.title=t.data.title.text,this.color=t.data.color,this.text=t.data.text.text,this.tags=[],this.images=[],t.tags.map(function(t){return e.tags.push(t)}),t.data.image_gallery.map(function(t){return e.images.push(t)})}(this.props.data.prismicPage)),this.props.data.allPrismicPage.edges.map(function(t){return e.push(new i(t.node))}),this.setState({allPages:e}),this.allPagesInit=e,this.container=this.infiniteScroll,setTimeout(function(){t.refsCollection.forEach(function(e){t.isInViewport(e)&&t.props.isInViewport(e.id)})},750),this.isInViewport=function(t){var e=t.getBoundingClientRect();if(e)return e.top>=-100&&e.top<=0||e.top<=100-e.height&&e.top>=-e.height}},i.addElements=function(){var t=this;this.setState(function(e){return{allPages:[].concat(e.allPages,t.allPagesInit)}})},i.handleScroll=function(){var t=this;if(this.container.scrollHeight-this.container.scrollTop>=this.container.clientHeight-100&&this.container.scrollHeight-this.container.scrollTop<=this.container.clientHeight&&this.addElements(),this.refsCollection.forEach(function(e){t.isInViewport(e)&&t.props.isInViewport(e.id)}),this.refsCollection.length>24){var e=[].concat(this.state.allPages).splice(0,4);this.setState({allPages:e})}},i.render=function(){var t=this;return u.a.createElement(w,null,u.a.createElement(M.a,null,u.a.createElement(y.a,{title:"Projects",keywords:["Karlanders","immo","Projects"]}),u.a.createElement(d.a,{to:"/info"}),u.a.createElement(b,{ref:function(e){return t.infiniteScroll=e},onScroll:this.handleScroll,className:"infinite-scroll"},this.state.allPages.map(function(e,i){return u.a.createElement("div",{ref:function(e){t.refsCollection[i]=e},id:""+e.uid},e.images.map(function(t,e){return u.a.createElement(p.a,{fluid:t.image.localFile.childImageSharp.fluid})}),u.a.createElement(j,{color:""+e.color},u.a.createElement(m,null,e.title),u.a.createElement(N,null,e.text),u.a.createElement(C,null,e.tags.map(function(t,e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S,null,t),u.a.createElement(S,null,"|"))}))))}))))},e}(u.a.Component);e.default=Object(f.b)(function(t){return{isInfoPage:t.isInfoPage,isInViewport:t.isInViewport}},function(t){return{isInViewport:function(e){return t(Object(h.b)(e))},isInfoPage:function(e){return t(Object(h.c)(e))}}})(x);var E="739975856"},178:function(t,e,i){"use strict";var n=i(179),r=i(1),a=i.n(r),o=i(2),s=i.n(o),u=i(188),l=i.n(u);function c(t){var e=t.description,i=t.lang,r=t.meta,o=t.keywords,s=t.title,u=n.data.site,c=e||u.siteMetadata.description;return a.a.createElement(l.a,{htmlAttributes:{lang:i},title:s,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=c},179:function(t){t.exports={data:{site:{siteMetadata:{title:"KarlAnders.immo",description:"",author:"http://samuelbassett.xyz"}}}}},180:function(t,e,i){"use strict";var n=i(1),r=i.n(n),a=i(14),o=i(3),s=i(181),u=i.n(s),l=o.a.div.withConfig({displayName:"logo__Styled",componentId:"zj7acn-0"})(["position:fixed;width:200px;right:-190px;bottom:0;margin-bottom:25px;transform-origin:bottom left;transform:rotateZ(-90deg);z-index:998;@media(min-width:992px){position:fixed;width:300px;right:-280px;bottom:0;margin-bottom:25px;transform-origin:bottom left;transform:rotateZ(-90deg);z-index:999;}img{height:100%;width:100%}"]);e.a=function(t){return r.a.createElement(l,null,r.a.createElement(a.a,{to:t.to},r.a.createElement("img",{alt:"",src:u.a})))}},181:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNTUuOCA1Mi4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTUuOCA1Mi4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDBGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0Mi42LDUyLjNjNi4yLDAsMTMuMi0zLDEzLjItMTEuNGMwLTctNC44LTEwLTEyLTEyLjVjLTUuOS0yLTEwLjItMy41LTEwLjItNi45YzAtMy4zLDMtNS43LDYuNi01LjcKCQljNS44LDAsOS40LDQuOCwxMy43LDEzaDAuMUwzNTMuNCwxN2MtNC4xLTEuMS04LjQtMi4xLTEyLjItMi4xYy02LjYsMC0xMy41LDMuMy0xMy41LDExLjJjMCw1LjEsMi4yLDguNCwxMC44LDExLjQKCQljNi41LDIuMiwxMS41LDMuOSwxMS41LDcuOGMwLDQuNi0zLjUsNi4xLTYuOCw2LjFjLTguNCwwLTEyLjktMTAuMi0xNS4zLTE1LjZoLTAuMWwwLjksMTQuNUMzMzIuMyw1MSwzMzcuNSw1Mi4zLDM0Mi42LDUyLjMKCQkgTTMyNS4zLDI0LjdjLTEuMS03LjQtNS41LTkuMS0xMC45LTkuMWgtMTYuN3YwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjZ2MC4xaDE3Ljl2LTAuMQoJCWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMTYuNGgwLjFjMy41LDAsNS4yLDYsNC44LDEzTDMyNS4zLDI0Ljd6IE0yODEuMiwxNS44YzMuMywwLDUuOCw1LjUsNi4xLDEzLjhoLTEyCgkJQzI3NS4zLDE5LjcsMjc4LjksMTUuOCwyODEuMiwxNS44IE0yODYuNSw0NC4xYy00LjksMC0xMC44LTMuNi0xMS4yLTEzLjZoMjEuNWMtMC42LTkuOS02LjctMTUuNi0xNC0xNS42CgkJYy03LjYsMC0xNi42LDYuMi0xNi42LDE4LjdjMCwxMi43LDguMywxOC42LDE1LjcsMTguNmM3LjYsMCwxMi41LTYuOCwxNC4zLTEyLjZsLTAuMS0wLjFDMjkzLjEsNDIuNCwyODkuNSw0NC4xLDI4Ni41LDQ0LjEKCQkgTTI1MC40LDUwLjVjLTUuNCwwLTkuOS05LjMtOS45LTIxLjJjMC0xMS4xLDMuNi0xMi44LDguMS0xMi44aDJ2MzRIMjUwLjR6IE0yNjAuOCw0Mi44VjEuMmgtMTR2MC4xYzMuNywxLjksMy44LDQuOCwzLjgsOC42djUuNgoJCWgtMS43Yy04LjgsMC0xOC45LDUuNS0xOC45LDE5LjFjMCwxMS43LDcuNiwxNi45LDE3LjksMTYuOWgxNi43di0wLjFDMjYwLjksNDkuNSwyNjAuOCw0Ni42LDI2MC44LDQyLjggTTIyNS4xLDQyLjhWMjEuMQoJCWMwLTMuMi0xLjctNi02LjUtNmMtNC42LDAtOS40LDIuNC0xMi4yLDQuMnYtMy43aC0xNHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjZ2MC4xaDE3LjJ2LTAuMQoJCWMtMy0xLjctMy4yLTQuOC0zLjItOC42VjIwLjNjMi4yLTEuNCw0LTEuNyw1LjMtMS43YzIuNCwwLDMuMiwyLjIsMy4yLDQuNXYxOS43YzAsMy44LTAuNCw2LjktMy4yLDguNnYwLjFoMTcuM3YtMC4xCgkJQzIyNS4yLDQ5LjUsMjI1LjEsNDYuNiwyMjUuMSw0Mi44IE0xNTIuOCwzNS43bDguMy0yMC43bDguNCwyMC43SDE1Mi44eiBNMTgzLjUsNDAuM0wxNjYuMiwwSDE2NmwtMTYuOCw0MS42CgkJYy0xLjksNC44LTQsNy45LTYuNCw5Ljh2MC4xaDExLjJ2LTAuMWMtNC4xLTEuNS01LjgtNC40LTMuOS05LjNsMi4yLTUuNGgxNy41TDE3Miw0MmMxLjksNC45LDAuNCw3LjgtMy43LDkuNHYwLjFoMjN2LTAuMQoJCUMxODguNyw1MCwxODYuMyw0Ni45LDE4My41LDQwLjMgTTExMiw1MS42aDE3Ljl2LTAuMWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMS4yaC0xNHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MzIuOAoJCWMwLDMuOC0wLjEsNi43LTMuOCw4LjZWNTEuNnogTTExMS43LDI0LjdjLTEuMS03LjQtNS41LTkuMS0xMC45LTkuMUg4NHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjYKCQl2MC4xaDE3Ljl2LTAuMWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMTYuNGgwLjFjMy41LDAsNS4yLDYsNC44LDEzTDExMS43LDI0Ljd6IE02NC43LDQ4LjRjLTIuMiwwLTQuOS0zLTQuOS03LjMKCQljMC03LjQsMS44LTguNSw4LjktMTQuM3YxNi44QzY4LjcsNDYuNiw2Ni45LDQ4LjQsNjQuNyw0OC40IE03OC44LDQyLjhWMjMuNWMwLTQuNS0yLjQtOC40LTkuNS04LjRjLTQuMiwwLTguNCwwLjYtMTEuNywxLjJsLTYsOAoJCWwwLjEsMC4xYzIuNi0yLjMsOS4xLTguMiwxMy04LjJjMi43LDAsNC4yLDIuNSw0LjIsNS41YzAsNC4yLTIuNSw2LjItOS40LDEwLjNjLTYuMywzLjctOS40LDYtOS40LDExLjNjMCwzLjgsMi43LDguNiw5LjEsOC42CgkJYzMuMiwwLDcuMS0yLjcsOS40LTQuN3Y0LjNoMTMuOXYtMC4xQzc4LjksNDkuNSw3OC44LDQ2LjYsNzguOCw0Mi44IE0zOS45LDQwLjJMMjQuNywxOS40bDguNi03LjdDNDEsNC44LDQ3LDIuMyw0OS41LDEuM1YxLjIKCQlIMjkuM3YwLjFjNS4yLDIuNiw3LjMsNiwyLjcsMTAuMkwxNi43LDI1LjFWOS45YzAtMy44LDItNy4xLDUuMy04LjZWMS4ySDB2MC4xYzMuMywxLjUsNS40LDQuOCw1LjQsOC42djMyLjgKCQljMCwzLjgtMi4xLDcuMS01LjQsOC42djAuMWgyMnYtMC4xYy0zLjMtMS41LTUuMy00LjgtNS4zLTguNlYyNmwxMS43LDE2LjhjMi40LDMuNSwzLDYuOC0wLjEsOC42djAuMUg1MHYtMC4xCgkJQzQ3LjMsNDkuOCw0My45LDQ1LjcsMzkuOSw0MC4yIi8+CjwvZz4KPC9zdmc+Cg=="},182:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}});var n,r=(n=i(183))&&n.__esModule?n:{default:n}},183:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i(1)),r=o(i(184)),a=o(i(187));function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=function(t){function e(){var t,i,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var u=arguments.length,l=new Array(u),d=0;d<u;d++)l[d]=arguments[d];return n=this,o=(t=c(e)).call.apply(t,[this].concat(l)),i=!o||"object"!==s(o)&&"function"!=typeof o?f(n):o,L(f(f(i)),"state",{style:{}}),L(f(f(i)),"updateStyle",function(){var t=(0,r.default)(i.props.style,(0,a.default)());i.setState({style:t})}),i}var i,o,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,n.default.Component),i=e,(o=[{key:"componentDidMount",value:function(){this.updateStyle(),window.addEventListener("resize",this.updateStyle)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateStyle)}},{key:"render",value:function(){return n.default.createElement("div",u({},this.props,{style:this.state.style}))}}])&&l(i.prototype,o),p&&l(i,p),e}();e.default=p},184:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}});var n,r=(n=i(185))&&n.__esModule?n:{default:n}},185:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.containsRvh=function(t){return/(\d+(\.\d*)?)rvh(?!\w)/.test(t)},e.default=void 0;var n,r=(n=i(186))&&n.__esModule?n:{default:n};var a=function(t,e){!function(t,e){if("object"!==(0,r.default)(t)&&void 0!==t)throw Error("style (the first argument) must be an object or undefined");if("number"!=typeof e||e<0)throw Error("Second argument (windowHeight) must be a non-negative number")}(t,e);var i=void 0===t?{height:"100rvh"}:t,n={};return Object.keys(i).forEach(function(t){n[t]=function(t,e){return t.replace(/(\d+(\.\d*)?)rvh(?!\w)/g,function(t,i){return"".concat(e*parseFloat(i)/100,"px")})}(i[t],e)}),n};e.default=a},186:function(t,e,i){"use strict";t.exports=(t=>{if(void 0===t)return"undefined";if(null===t)return"null";if(Array.isArray(t))return"array";if("boolean"==typeof t)return"boolean";if("function"==typeof t)return"function";if("number"==typeof t)return"number";if("string"==typeof t)return"string";if("object"==typeof t)return t.constructor===RegExp?"regexp":t.constructor===Map?"map":t.constructor===Set?"set":t.constructor===Date?"date":"object";if("symbol"==typeof t)return"symbol";throw new Error(`value of unknown type: ${t}`)})},187:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return window.innerHeight};e.default=n},190:function(t,e,i){"use strict";var n=i(15);e.__esModule=!0,e.default=void 0;var r,a=n(i(6)),o=n(i(8)),s=n(i(101)),u=n(i(102)),l=n(i(1)),c=n(i(2)),d=function(t){var e=(0,u.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},f=Object.create({}),L=function(t){var e=d(t),i=e.fluid?e.fluid.src:e.fixed.src;return f[i]||!1},p=new WeakMap;var g=function(t,e){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(t){t.forEach(function(t){if(p.has(t.target)){var e=p.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(t.target),p.delete(t.target),e())}})},{rootMargin:"200px"})),r);return i&&(i.observe(t),p.set(t,e)),function(){i.unobserve(t),p.delete(t)}},M=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',i=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+i+"/>":"",r=t.srcSet?'srcset="'+t.srcSet+'" ':"",a=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(t.width?'width="'+t.width+'" ':"")+(t.height?'height="'+t.height+'" ':"")+i+r+e+o+a+(t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=l.default.forwardRef(function(t,e){var i=t.sizes,n=t.srcSet,r=t.src,a=t.style,o=t.onLoad,c=t.onError,d=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,u.default)({sizes:i,srcSet:n,src:r},d,{onLoad:o,onError:c,ref:e,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});h.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(t){function e(e){var i;i=t.call(this,e)||this;var n=!0,r=!1,a=e.fadeIn,s=L(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),e.critical&&(n=!0,r=!1);var u=!(e.critical&&!e.fadeIn);return i.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:a,hasNoScript:u,seenBefore:s},i.imageRef=l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,o.default)((0,o.default)(i))),i.handleRef=i.handleRef.bind((0,o.default)((0,o.default)(i))),i}(0,a.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:L(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(t){var e=this;this.state.IOSupported&&t&&(this.cleanUpListeners=g(t,function(){var t=L(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:e.imageRef.current.currentSrc.length>0})})}))},i.handleImageLoaded=function(){var t,e,i;t=this.props,e=d(t),i=e.fluid?e.fluid.src:e.fixed.src,f[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var t=d(this.props),e=t.title,i=t.alt,n=t.className,r=t.style,a=void 0===r?{}:r,o=t.imgStyle,s=void 0===o?{}:o,c=t.placeholderStyle,f=void 0===c?{}:c,L=t.placeholderClassName,p=t.fluid,g=t.fixed,y=t.backgroundColor,w=t.Tag,j=t.itemProp,m=this.state.imgLoaded||!1===this.state.fadeIn,N=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,u.default)({opacity:m?1:0,transition:N?"opacity 0.5s":"none"},s),S="boolean"==typeof y?"lightgray":y,b={transitionDelay:"0.5s"},x=(0,u.default)({opacity:this.state.imgLoaded?0:1},N&&b,s,f),E={title:e,alt:this.state.isVisible?"":i,style:x,className:L};if(p){var D=p;return l.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},l.default.createElement(w,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),S&&l.default.createElement(w,{title:e,style:(0,u.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&b)}),D.base64&&l.default.createElement(h,(0,u.default)({src:D.base64},E)),D.tracedSVG&&l.default.createElement(h,(0,u.default)({src:D.tracedSVG},E)),this.state.isVisible&&l.default.createElement("picture",null,D.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:D.srcSetWebp,sizes:D.sizes}),l.default.createElement(h,{alt:i,title:e,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,u.default)({alt:i,title:e},D))}}))}if(g){var T=g,O=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},a);return"inherit"===a.display&&delete O.display,l.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},S&&l.default.createElement(w,{title:e,style:(0,u.default)({backgroundColor:S,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},N&&b)}),T.base64&&l.default.createElement(h,(0,u.default)({src:T.base64},E)),T.tracedSVG&&l.default.createElement(h,(0,u.default)({src:T.tracedSVG},E)),this.state.isVisible&&l.default.createElement("picture",null,T.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),l.default.createElement(h,{alt:i,title:e,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,u.default)({alt:i,title:e},T))}}))}return null},e}(l.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:j,fixed:w,fluid:j,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var m=y;e.default=m}}]);
//# sourceMappingURL=component---src-templates-page-js-d7a3880bf868394e4f1e.js.map