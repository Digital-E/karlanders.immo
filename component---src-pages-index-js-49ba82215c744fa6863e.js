(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(t,e,i){"use strict";i.r(e),i.d(e,"query",function(){return l});var s=i(6),a=i.n(s),r=i(1),u=i.n(r),n=(i(23),i(169)),o=i.n(n),L=(i(167),i(170)),d=function(t){function e(e){var i;return(i=t.call(this,e)||this).state={fetchedPages:null},i}a()(e,t);var i=e.prototype;return i.componentWillMount=function(){this.setState({fetchedPages:this.props.data.allPrismicPage.edges})},i.render=function(){var t=this.state.fetchedPages;return u.a.createElement(u.a.Fragment,null,u.a.createElement(L.a,{title:"Home",keywords:["gatsby","application","react"]}),t.map(function(t){return t.node.data.image_gallery.map(function(t,e){return u.a.createElement(o.a,{key:e,fluid:t.image.localFile.childImageSharp.fluid})})}))},e}(u.a.Component);e.default=d;var l="4210518253"},167:function(t,e,i){"use strict";i(1),i(19);var s=i(5);i(168),s.a.div.withConfig({displayName:"logo__Styled",componentId:"zj7acn-0"})(["position:fixed;width:200px;right:-190px;bottom:0;margin-bottom:25px;transform-origin:bottom left;transform:rotateZ(-90deg);z-index:998;@media(min-width:992px){position:fixed;width:300px;right:-280px;bottom:0;margin-bottom:25px;transform-origin:bottom left;transform:rotateZ(-90deg);z-index:999;}img{height:100%;width:100%}"])},168:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNTUuOCA1Mi4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTUuOCA1Mi4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDBGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0Mi42LDUyLjNjNi4yLDAsMTMuMi0zLDEzLjItMTEuNGMwLTctNC44LTEwLTEyLTEyLjVjLTUuOS0yLTEwLjItMy41LTEwLjItNi45YzAtMy4zLDMtNS43LDYuNi01LjcKCQljNS44LDAsOS40LDQuOCwxMy43LDEzaDAuMUwzNTMuNCwxN2MtNC4xLTEuMS04LjQtMi4xLTEyLjItMi4xYy02LjYsMC0xMy41LDMuMy0xMy41LDExLjJjMCw1LjEsMi4yLDguNCwxMC44LDExLjQKCQljNi41LDIuMiwxMS41LDMuOSwxMS41LDcuOGMwLDQuNi0zLjUsNi4xLTYuOCw2LjFjLTguNCwwLTEyLjktMTAuMi0xNS4zLTE1LjZoLTAuMWwwLjksMTQuNUMzMzIuMyw1MSwzMzcuNSw1Mi4zLDM0Mi42LDUyLjMKCQkgTTMyNS4zLDI0LjdjLTEuMS03LjQtNS41LTkuMS0xMC45LTkuMWgtMTYuN3YwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjZ2MC4xaDE3Ljl2LTAuMQoJCWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMTYuNGgwLjFjMy41LDAsNS4yLDYsNC44LDEzTDMyNS4zLDI0Ljd6IE0yODEuMiwxNS44YzMuMywwLDUuOCw1LjUsNi4xLDEzLjhoLTEyCgkJQzI3NS4zLDE5LjcsMjc4LjksMTUuOCwyODEuMiwxNS44IE0yODYuNSw0NC4xYy00LjksMC0xMC44LTMuNi0xMS4yLTEzLjZoMjEuNWMtMC42LTkuOS02LjctMTUuNi0xNC0xNS42CgkJYy03LjYsMC0xNi42LDYuMi0xNi42LDE4LjdjMCwxMi43LDguMywxOC42LDE1LjcsMTguNmM3LjYsMCwxMi41LTYuOCwxNC4zLTEyLjZsLTAuMS0wLjFDMjkzLjEsNDIuNCwyODkuNSw0NC4xLDI4Ni41LDQ0LjEKCQkgTTI1MC40LDUwLjVjLTUuNCwwLTkuOS05LjMtOS45LTIxLjJjMC0xMS4xLDMuNi0xMi44LDguMS0xMi44aDJ2MzRIMjUwLjR6IE0yNjAuOCw0Mi44VjEuMmgtMTR2MC4xYzMuNywxLjksMy44LDQuOCwzLjgsOC42djUuNgoJCWgtMS43Yy04LjgsMC0xOC45LDUuNS0xOC45LDE5LjFjMCwxMS43LDcuNiwxNi45LDE3LjksMTYuOWgxNi43di0wLjFDMjYwLjksNDkuNSwyNjAuOCw0Ni42LDI2MC44LDQyLjggTTIyNS4xLDQyLjhWMjEuMQoJCWMwLTMuMi0xLjctNi02LjUtNmMtNC42LDAtOS40LDIuNC0xMi4yLDQuMnYtMy43aC0xNHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjZ2MC4xaDE3LjJ2LTAuMQoJCWMtMy0xLjctMy4yLTQuOC0zLjItOC42VjIwLjNjMi4yLTEuNCw0LTEuNyw1LjMtMS43YzIuNCwwLDMuMiwyLjIsMy4yLDQuNXYxOS43YzAsMy44LTAuNCw2LjktMy4yLDguNnYwLjFoMTcuM3YtMC4xCgkJQzIyNS4yLDQ5LjUsMjI1LjEsNDYuNiwyMjUuMSw0Mi44IE0xNTIuOCwzNS43bDguMy0yMC43bDguNCwyMC43SDE1Mi44eiBNMTgzLjUsNDAuM0wxNjYuMiwwSDE2NmwtMTYuOCw0MS42CgkJYy0xLjksNC44LTQsNy45LTYuNCw5Ljh2MC4xaDExLjJ2LTAuMWMtNC4xLTEuNS01LjgtNC40LTMuOS05LjNsMi4yLTUuNGgxNy41TDE3Miw0MmMxLjksNC45LDAuNCw3LjgtMy43LDkuNHYwLjFoMjN2LTAuMQoJCUMxODguNyw1MCwxODYuMyw0Ni45LDE4My41LDQwLjMgTTExMiw1MS42aDE3Ljl2LTAuMWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMS4yaC0xNHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MzIuOAoJCWMwLDMuOC0wLjEsNi43LTMuOCw4LjZWNTEuNnogTTExMS43LDI0LjdjLTEuMS03LjQtNS41LTkuMS0xMC45LTkuMUg4NHYwLjFjMy43LDEuOSwzLjgsNC44LDMuOCw4LjZ2MTguNGMwLDMuOC0wLjEsNi43LTMuOCw4LjYKCQl2MC4xaDE3Ljl2LTAuMWMtMy43LTEuOS0zLjgtNC44LTMuOC04LjZWMTYuNGgwLjFjMy41LDAsNS4yLDYsNC44LDEzTDExMS43LDI0Ljd6IE02NC43LDQ4LjRjLTIuMiwwLTQuOS0zLTQuOS03LjMKCQljMC03LjQsMS44LTguNSw4LjktMTQuM3YxNi44QzY4LjcsNDYuNiw2Ni45LDQ4LjQsNjQuNyw0OC40IE03OC44LDQyLjhWMjMuNWMwLTQuNS0yLjQtOC40LTkuNS04LjRjLTQuMiwwLTguNCwwLjYtMTEuNywxLjJsLTYsOAoJCWwwLjEsMC4xYzIuNi0yLjMsOS4xLTguMiwxMy04LjJjMi43LDAsNC4yLDIuNSw0LjIsNS41YzAsNC4yLTIuNSw2LjItOS40LDEwLjNjLTYuMywzLjctOS40LDYtOS40LDExLjNjMCwzLjgsMi43LDguNiw5LjEsOC42CgkJYzMuMiwwLDcuMS0yLjcsOS40LTQuN3Y0LjNoMTMuOXYtMC4xQzc4LjksNDkuNSw3OC44LDQ2LjYsNzguOCw0Mi44IE0zOS45LDQwLjJMMjQuNywxOS40bDguNi03LjdDNDEsNC44LDQ3LDIuMyw0OS41LDEuM1YxLjIKCQlIMjkuM3YwLjFjNS4yLDIuNiw3LjMsNiwyLjcsMTAuMkwxNi43LDI1LjFWOS45YzAtMy44LDItNy4xLDUuMy04LjZWMS4ySDB2MC4xYzMuMywxLjUsNS40LDQuOCw1LjQsOC42djMyLjgKCQljMCwzLjgtMi4xLDcuMS01LjQsOC42djAuMWgyMnYtMC4xYy0zLjMtMS41LTUuMy00LjgtNS4zLTguNlYyNmwxMS43LDE2LjhjMi40LDMuNSwzLDYuOC0wLjEsOC42djAuMUg1MHYtMC4xCgkJQzQ3LjMsNDkuOCw0My45LDQ1LjcsMzkuOSw0MC4yIi8+CjwvZz4KPC9zdmc+Cg=="},169:function(t,e,i){"use strict";var s=i(12);e.__esModule=!0,e.default=void 0;var a,r=s(i(6)),u=s(i(8)),n=s(i(88)),o=s(i(89)),L=s(i(1)),d=s(i(2)),l=function(t){var e=(0,o.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},M=Object.create({}),c=function(t){var e=l(t),i=e.fluid?e.fluid.src:e.fixed.src;return M[i]||!1},j=new WeakMap;var g=function(t,e){var i=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(t){t.forEach(function(t){if(j.has(t.target)){var e=j.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),j.delete(t.target),e())}})},{rootMargin:"200px"})),a);return i&&(i.observe(t),j.set(t,e)),function(){i.unobserve(t),j.delete(t)}},f=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',i=t.sizes?'sizes="'+t.sizes+'" ':"",s=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+i+"/>":"",a=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.title?'title="'+t.title+'" ':"",u=t.alt?'alt="'+t.alt+'" ':'alt="" ';return"<picture>"+s+"<img "+(t.width?'width="'+t.width+'" ':"")+(t.height?'height="'+t.height+'" ':"")+i+a+e+u+r+(t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=L.default.forwardRef(function(t,e){var i=t.sizes,s=t.srcSet,a=t.src,r=t.style,u=t.onLoad,d=t.onError,l=(0,n.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return L.default.createElement("img",(0,o.default)({sizes:i,srcSet:s,src:a},l,{onLoad:u,onError:d,ref:e,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});w.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(t){function e(e){var i;i=t.call(this,e)||this;var s=!0,a=!1,r=e.fadeIn,n=c(e);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,a=!0),"undefined"==typeof window&&(s=!1),e.critical&&(s=!0,a=!1);var o=!(e.critical&&!e.fadeIn);return i.state={isVisible:s,imgLoaded:!1,imgCached:!1,IOSupported:a,fadeIn:r,hasNoScript:o,seenBefore:n},i.imageRef=L.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,u.default)((0,u.default)(i))),i.handleRef=i.handleRef.bind((0,u.default)((0,u.default)(i))),i}(0,r.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:c(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(t){var e=this;this.state.IOSupported&&t&&(this.cleanUpListeners=g(t,function(){var t=c(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:e.imageRef.current.currentSrc.length>0})})}))},i.handleImageLoaded=function(){var t,e,i;t=this.props,e=l(t),i=e.fluid?e.fluid.src:e.fixed.src,M[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var t=l(this.props),e=t.title,i=t.alt,s=t.className,a=t.style,r=void 0===a?{}:a,u=t.imgStyle,n=void 0===u?{}:u,d=t.placeholderStyle,M=void 0===d?{}:d,c=t.placeholderClassName,j=t.fluid,g=t.fixed,y=t.backgroundColor,N=t.Tag,p=t.itemProp,C=this.state.imgLoaded||!1===this.state.fadeIn,h=!0===this.state.fadeIn&&!this.state.imgCached,S=(0,o.default)({opacity:C?1:0,transition:h?"opacity 0.5s":"none"},n),m="boolean"==typeof y?"lightgray":y,D={transitionDelay:"0.5s"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},h&&D,n,M),E={title:e,alt:this.state.isVisible?"":i,style:T,className:c};if(j){var x=j;return L.default.createElement(N,{className:(s||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},L.default.createElement(N,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),m&&L.default.createElement(N,{title:e,style:(0,o.default)({backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},h&&D)}),x.base64&&L.default.createElement(w,(0,o.default)({src:x.base64},E)),x.tracedSVG&&L.default.createElement(w,(0,o.default)({src:x.tracedSVG},E)),this.state.isVisible&&L.default.createElement("picture",null,x.srcSetWebp&&L.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),L.default.createElement(w,{alt:i,title:e,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:p})),this.state.hasNoScript&&L.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:f((0,o.default)({alt:i,title:e},x))}}))}if(g){var O=g,b=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},r);return"inherit"===r.display&&delete b.display,L.default.createElement(N,{className:(s||"")+" gatsby-image-wrapper",style:b,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},m&&L.default.createElement(N,{title:e,style:(0,o.default)({backgroundColor:m,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},h&&D)}),O.base64&&L.default.createElement(w,(0,o.default)({src:O.base64},E)),O.tracedSVG&&L.default.createElement(w,(0,o.default)({src:O.tracedSVG},E)),this.state.isVisible&&L.default.createElement("picture",null,O.srcSetWebp&&L.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),L.default.createElement(w,{alt:i,title:e,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:p})),this.state.hasNoScript&&L.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:f((0,o.default)({alt:i,title:e},O))}}))}return null},e}(L.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),p=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:N,sizes:p,fixed:N,fluid:p,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var C=y;e.default=C},170:function(t,e,i){"use strict";var s=i(171),a=i(1),r=i.n(a),u=i(2),n=i.n(u),o=i(172),L=i.n(o);function d(t){var e=t.description,i=t.lang,a=t.meta,u=t.keywords,n=t.title,o=s.data.site,d=e||o.siteMetadata.description;return r.a.createElement(L.a,{htmlAttributes:{lang:i},title:n,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:n},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:d}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.arrayOf(n.a.object),keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},e.a=d},171:function(t){t.exports={data:{site:{siteMetadata:{title:"Karl Anders.immo",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-49ba82215c744fa6863e.js.map