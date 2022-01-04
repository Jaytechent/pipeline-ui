"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[2254],{2735:function(e,l,a){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!t(e)}a.d(l,{b:function(){return t},Z:function(){return n}})},79524:function(e,l,a){a.d(l,{C:function(){return u},Z:function(){return i}});var t=a(39962),n=a(2735);function u(){var e=(0,t.Z)().siteConfig,l=(e=void 0===e?{}:e).baseUrl,a=void 0===l?"/":l,u=e.url;return{withBaseUrl:function(e,l){return function(e,l,a,t){var u=void 0===t?{}:t,i=u.forcePrependBaseUrl,o=void 0!==i&&i,r=u.absolute,s=void 0!==r&&r;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(o)return l+a;var v=a.startsWith(l)?a:l+a.replace(/^\//,"");return s?e+v:v}(u,a,e,l)}}}function i(e,l){return void 0===l&&(l={}),(0,u().withBaseUrl)(e,l)}},66502:function(e,l,a){a.r(l),a.d(l,{frontMatter:function(){return b},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return A}});var t=a(87462),n=a(63366),u=(a(67294),a(3905)),i=a(79524),o=(a(35666),a(80476)),r=a(46332),s=a(79898),v=["components"],b={},p="AsaList",c={unversionedId:"AlgoComponents/AsaList",id:"AlgoComponents/AsaList",isDocsHomePage:!1,title:"AsaList",description:"An array of verified Algorand ASA's and index numbers that can be imported like a component and used to populate dropdown menus.",source:"@site/docs/AlgoComponents/AsaList.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AsaList",permalink:"/docs/AlgoComponents/AsaList",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AsaList.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoWCButton",permalink:"/docs/AlgoComponents/AlgoWCButton"},next:{title:"MultiWalletConnect",permalink:"/docs/AlgoComponents/MultiWalletConnect"}},d=[{value:"Usage Example",id:"usage-example",children:[],level:2}],m={toc:d};function A(e){var l=e.components,a=(0,n.Z)(e,v);return(0,u.kt)("wrapper",(0,t.Z)({},m,a,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"asalist"},"AsaList"),(0,u.kt)("img",{alt:"Docusaurus with Keytar",width:"100%",height:"400px",src:(0,i.Z)("/img/pipeline_vectilla_7.svg")}),(0,u.kt)("p",null,"An array of verified Algorand ASA's and index numbers that can be imported like a component and used to populate dropdown menus."),(0,u.kt)(o.Z,{mdxType:"Text"},"Select a Verified ASA:"),(0,u.kt)("br",null),(0,u.kt)(r.Z,{options:s.Z,mdxType:"Select"}),(0,u.kt)("h2",{id:"usage-example"},"Usage Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"import {Select, AsaList,Text} from 'pipeline-ui'\n<Text >Select a Verified ASA:</Text>\n        <Select\n          defaultValue={this.state.value}\n          onChange={this.asaNumbChangeHandler}\n          options={AsaList}\n        />\n")),(0,u.kt)("p",null,"In the above example, the OnChange event calls the function asaNumbChangeHandler, which can be seen below:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"asaNumbChangeHandler = (event) => {\n    this.setState({ asaNumb: event.value });\n\n  }\n")))}A.isMDXComponent=!0},79898:function(e,l){l.Z=[{value:163650,label:"ARCC"},{value:265122,label:"OBA"},{value:312769,label:"USDt"},{value:438828,label:"USD-MESE"},{value:438831,label:"MESX"},{value:438832,label:"M-MSFT"},{value:438833,label:"M-AMZN"},{value:438836,label:"M-TWTR"},{value:438837,label:"M-NFLX"},{value:438838,label:"M-GOOGL"},{value:438839,label:"M-AAPL"},{value:438840,label:"M-TSLA"},{value:900843,label:"CLOUT"},{value:2350276,label:"DIA"},{value:2512768,label:"xPROPS"},{value:2513338,label:"xPROPS"},{value:2513746,label:"xPROPS"},{value:2514157,label:"xPROPS"},{value:2725935,label:"RST"},{value:2751733,label:"RIO"},{value:2757561,label:"rUSD"},{value:2836760,label:"RHO 1"},{value:2838934,label:"VAL 1"},{value:6547014,label:"MCAU"},{value:6587142,label:"MCAG"},{value:27165954,label:"Planets"},{value:31566704,label:"USDC"},{value:83209012,label:"EURe"},{value:84507107,label:"QCAD"},{value:112866019,label:"BRZ"},{value:125584116,label:"CPR"},{value:127494380,label:"SITS"},{value:135464366,label:"xPROPS"},{value:137594422,label:"HDL"},{value:142838028,label:"FAME"},{value:143787817,label:"Spud"},{value:181380658,label:"GEO"},{value:197112469,label:"PUPO"},{value:213345970,label:"EXIT"},{value:226701642,label:"YLDY"},{value:227826774,label:"EURS"},{value:230946361,label:"GEMS"},{value:231880341,label:"lmx"}]}}]);