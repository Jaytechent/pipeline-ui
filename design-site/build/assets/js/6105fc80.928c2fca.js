(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6715],{9672:function(e,t,r){"use strict";var n=r(7294),o=r(1288),i=r(8836);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=(0,o.ZP)("svg")({flex:"none"},i.Dh,i.$_),c=n.forwardRef((function(e,t){return n.createElement(l,a({},e,{viewBox:"0 0 24 24",height:e.size,width:e.size,fill:"currentcolor",ref:t}),n.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))}));c.displayName="SvgRadioButtonChecked",c.defaultProps={size:24,color:"inherit"},t.Z=c},9441:function(e,t,r){"use strict";var n=r(7294),o=r(1288),i=r(8836);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=(0,o.ZP)("svg")({flex:"none"},i.Dh,i.$_),c=n.forwardRef((function(e,t){return n.createElement(l,a({},e,{viewBox:"0 0 24 24",height:e.size,width:e.size,fill:"currentcolor",ref:t}),n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))}));c.displayName="SvgRadioButtonUnchecked",c.defaultProps={size:24,color:"inherit"},t.Z=c},8838:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return Z},default:function(){return N},frontMatter:function(){return E},metadata:function(){return z},toc:function(){return D}});var n=r(2122),o=r(9756),i=r(7294),a=r(3905),l=r(5697),c=r.n(l),s=r(1288),p=r(56),u=r(9672),d=r(9441),f=r(7582),m=r(8735),b=r(476),h=["className","label","name","value","id"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=(0,s.ZP)(m.Z).withConfig({displayName:"Radio__StyledWrapper",componentId:"sc-dmrrhr-0"})(["&{position:relative;display:inline-block;}> input{cursor:pointer;appearance:none;position:relative;z-index:1;display:block;height:1.5rem;width:1.5rem;margin:0;}> svg{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;height:100%;width:100%;pointer-events:none;fill:",";}> svg[name='checked']{display:none;z-index:1;fill:",";}> input:checked ~ svg[name='checked']{display:block;}"],(function(e){return(0,p.R)("colors.grey","#CCC")}),(function(e){return(0,p.R)("colors.primary","#000")})),j=(0,s.ZP)(m.Z).withConfig({displayName:"Radio__StyledLabel",componentId:"sc-dmrrhr-1"})(["&{cursor:pointer;}&:hover input:not(:disabled) ~ svg[name='unchecked']{fill:currentColor;}"]);w.defaultProps={theme:f.Z};var P=i.forwardRef((function(e,t){var r=e.className,n=e.label,o=e.name,a=e.value,l=e.id,c=k(e,h);return i.createElement(j,v({forwardedAs:"label",display:"flex",alignItems:"center",className:r},c,{htmlFor:l,opacity:c.disabled?.4:1}),i.createElement(w,{theme:c.theme},i.createElement("input",v({type:"radio",name:o,value:a,id:l,ref:t},c)),i.createElement(u.Z,{name:"checked"}),i.createElement(d.Z,{name:"unchecked"})),i.createElement(b.Z,{color:"text",fontSize:1,fontWeight:3,lineHeight:1,ml:1,mr:2},n))}));P.defaultProps={theme:f.Z,color:"primary"},P.propTypes=g(g({},m.Z.propTypes),{},{theme:c().object,label:c().string}),P.displayName="Radio";var R=P,C=r(7104),x=r(6086),S=["components"],E={},Z="Radio",z={unversionedId:"Components/Radio",id:"Components/Radio",isDocsHomePage:!1,title:"Radio",description:"Use the Radio component when users can select only one option from a short list and you want all the options to be visible. Radio maps to a radio input and a label.",source:"@site/docs/Components/Radio.mdx",sourceDirName:"Components",slug:"/Components/Radio",permalink:"/docs/Components/Radio",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Radio.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"QR",permalink:"/docs/Components/QR"},next:{title:"Select",permalink:"/docs/Components/Select"}},D=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],T={toc:D};function N(e){var t=e.components,r=(0,o.Z)(e,S);return(0,a.kt)("wrapper",(0,n.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"radio"},"Radio"),(0,a.kt)("p",null,"Use the Radio component when users can select only one option from a short list and you want all the options to be visible. Radio maps to a radio input and a label."),(0,a.kt)(C.Z,{label:"Choose your Asset",mdxType:"Field"},(0,a.kt)(R,{label:"Algorand",my:2,mdxType:"Radio"}),(0,a.kt)(R,{defaultChecked:!0,label:"ASA",my:2,mdxType:"Radio"}),(0,a.kt)(R,{disabled:!0,label:"Create",my:2,mdxType:"Radio"})),(0,a.kt)("h2",{id:"usage-example"},"Usage Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Field label="Choose your Asset">\n  <Radio label="Algorand" my={2} />\n  <Radio defaultChecked label="ASA" my={2} />\n  <Radio checked disabled label="Create" my={2} />\n</Field>\n')),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(x.Z,{mdxType:"Table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Prop"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"color"),(0,a.kt)("td",null,"string (optional)"),(0,a.kt)("td",null,"'primary'"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"label"),(0,a.kt)("td",null,"string (optional)"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"theme"),(0,a.kt)("td",null,"object (optional)"),(0,a.kt)("td",null),(0,a.kt)("td",null)))),(0,a.kt)("br",null),"Radio uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props.")}N.isMDXComponent=!0},7104:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o),a=r(1288),l=r(8735),c=r(476),s=["label","children"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=(0,a.ZP)(c.Z).withConfig({displayName:"Field__OptionalLabel",componentId:"sc-o4retc-0"})(["&:after{content:' (optional)';font-weight:normal;font-style:italic;}"]),f=n.forwardRef((function(e,t){var r=e.label,o=e.children,i=u(e,s);return n.createElement(l.Z,p({as:"label",display:"inline-flex",flexDirection:"column",alignItems:"flex-start",mb:3,ref:t},i),function(e){var t=!1;return n.Children.forEach(e,(function(e){e.props.required&&(t=!0)})),t}(o)?n.createElement(c.Z,{fontSize:1,fontWeight:3,mb:2},r):n.createElement(d,{fontSize:1,fontWeight:3,mb:2},r),o)}));f.propTypes={label:i().string.isRequired,children:i().element.isRequired},f.displayName="Field",t.Z=f},6086:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(7294),o=r(5697),i=r.n(o),a=r(1288),l=r(8836),c=r(56),s=r(7582),p=r(8735),u=((0,l.qC)(l.$_,l.Dh),(0,l.qC)(l.I8,l.JB,l.Ue,l.Nv,l.yd,l.rX));(0,l.qC)(l.jf,l.dp,l.bf,l.Cb,l.ih,l.jw,l.kk,l.kC,l.tx,l.Lo),(0,l.qC)(l.FK,l.W5,l.we,l.F2,l.I,l.t$),(0,l.qC)(l.Lz,l.tv,l.E0,l.Wn),(0,l.qC)(l.P_,l.Me,l.WO,l.Kv,l.cq,l.Kl,l.eY,l.fU,l.zo,l.uk,l.vm);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=(0,a.ZP)(p.Z).withConfig({displayName:"Table__StyledTable",componentId:"sc-1oazz9h-0"})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:",";}thead tr,tfoot tr{height:",";}thead th{font-weight:",";text-transform:uppercase;}",""],(0,c.R)("height[3]","4rem"),(0,c.R)("height[2]","3rem"),(0,c.R)("fontWeights.3","bold"),u);h.defaultProps={theme:s.Z};var y=n.forwardRef((function(e,t){return n.createElement(h,b({ref:t},e,{forwardedAs:"table"}))}));y.defaultProps={width:1,border:1,borderColor:"grey",fontSize:1,fontWeight:2,fontFamily:"sansSerif",color:"dark-gray",boxShadow:1},y.propTypes=f(f({},p.Z.propTypes),{},{theme:i().object}),y.displayName="Table";var g=y},476:function(e,t,r){"use strict";var n=r(7294),o=r(5697),i=r.n(o),a=r(8735),l=r(7582);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=n.forwardRef((function(e,t){return n.createElement(a.Z,u({ref:t},e))}));d.defaultProps={fontSize:2,fontWeight:2,lineHeight:"copy",theme:l.Z},d.propTypes=s(s({},a.Z.propTypes),{},{theme:i().object}),d.displayName="Text",d.span=function(e){return n.createElement(d,e)},d.span.defaultProps=s(s({},d.defaultProps),{},{as:"span"}),d.p=function(e){return n.createElement(d,e)},d.p.defaultProps=s(s({},d.defaultProps),{},{as:"p"}),d.s=function(e){return n.createElement(d,e)},d.s.defaultProps=s(s({},d.defaultProps),{},{as:"s"}),t.Z=d}}]);