"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[7786],{2735:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return a}})},79524:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return r}});var i=n(39962),a=n(2735);function o(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,l=void 0!==r&&r,s=o.absolute,d=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+c:c}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},87364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(79524),l=["components"],s={title:"Getting Started",sidebar_position:1},d=void 0,c={unversionedId:"getting-started-B",id:"getting-started-B",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to Pipeline UI, a library of standardized React components for the Algorand Ecosystem!",source:"@site/docs/getting-started-B.mdx",sourceDirName:".",slug:"/getting-started-B",permalink:"/docs/getting-started-B",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/getting-started-B.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Frequently asked questions",permalink:"/docs/faq"}},p=[{value:"Install the library:",id:"install-the-library",children:[],level:3},{value:"Import components into your React project:",id:"import-components-into-your-react-project",children:[],level:3},{value:"Modifying the library:",id:"modifying-the-library",children:[],level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to Pipeline UI, a library of standardized React components for the Algorand Ecosystem!"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"WalletConnect and AlgoSigner now supported in all Pipeline libraries!"))),(0,o.kt)("h3",{id:"install-the-library"},"Install the library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd myNewApp\nnpm install pipeline-ui\n")),(0,o.kt)("h3",{id:"import-components-into-your-react-project"},"Import components into your React project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-ui';\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All Pipeline UI libraries and demos execute transactions on the Algorand MainNet by default. To send transactions on the TestNet, check out ",(0,o.kt)("a",{parentName:"p",href:"./AlgoComponents/SwitchNet"},"SwitchNet Component")))),(0,o.kt)("h3",{id:"modifying-the-library"},"Modifying the library:"),(0,o.kt)("p",null,"If you wish to download and modify the library components via source code, run the following code to save it to your user root directory and install its dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/headline-design/pipeline-ui\ncd pipeline-ui\nnpm install\n")),(0,o.kt)("p",null,"You may then edit the components via the index.js file found inside each component folder in the parent folder /src. After saving changes, you must then run the following code from the pipeline-ui parent folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm pack\n")),(0,o.kt)("img",{alt:"Docusaurus with Keytar",width:"100%",height:"400px",src:(0,r.Z)("/img/pipeline_vectilla_10.svg")}))}m.isMDXComponent=!0}}]);