(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[697],{7250:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},BrowserOnlyButton:function(){return k},toc:function(){return g},default:function(){return C}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),s=(n(35666),n(10748)),a=n(55182),i=n(25108),u=["components"],d={},c="AlgoWCButton",p={unversionedId:"AlgoComponents/AlgoWCButton",id:"AlgoComponents/AlgoWCButton",isDocsHomePage:!1,title:"AlgoWCButton",description:"A button to connect to WalletConnect. Generates an embedded QR code to scan with phone camera. Upon success, returns the first wallet address.",source:"@site/docs/AlgoComponents/AlgoWCButton.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AlgoWCButton",permalink:"/docs/AlgoComponents/AlgoWCButton",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AlgoWCButton.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoSignerButton",permalink:"/docs/AlgoComponents/AlgoSignerButton"},next:{title:"AsaList",permalink:"/docs/AlgoComponents/AsaList"}};function k(){return(0,r.kt)(s.Z,{fallback:(0,r.kt)("p",null,"Some Fallback Content"),mdxType:"BrowserOnly"},(function(){var t=n(81688).cU,e=n(81688).B_;e.init();return e.pipeConnector="walletConnect",(0,r.kt)(t,{mdxType:"AlgoWCButton"})}))}var m,g=[{value:"Accessing returned address",id:"accessing-returned-address",children:[],level:2},{value:"Use Example",id:"use-example",children:[{value:"Props",id:"props",children:[],level:3}],level:2}],h=(m="AlgoWCButton",{BrowserOnlyButton:k,toc:g});function C(t){var e=t.components,n=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"algowcbutton"},"AlgoWCButton"),(0,r.kt)("p",null,"A button to connect to WalletConnect. Generates an embedded QR code to scan with phone camera. Upon success, returns the first wallet address."),(0,r.kt)(k,{mdxType:"BrowserOnlyButton"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"accessing-returned-address"},"Accessing returned address"),(0,r.kt)("p",null,"The returned address can be accessed several different ways. Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"{this}")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"returnTo")," prop to a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," key (as string) will return the address directly to your parent component's state without the need for additional callback or event handler code. The address can also be accessed with ",(0,r.kt)("inlineCode",{parentName:"p"},"Pipeline.address"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n      this.interval = setInterval(() => this.setState({address: Pipeline.address}), 1000);\n    }\n")),(0,r.kt)("p",null,"or with an ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"handleChange = (value) =>{\n    this.setState({myAddress: value})\n  }\n\n  render(){\n    return <AlgoWCButton onChange={this.handleChange}/>\n  }\n")),(0,r.kt)("h2",{id:"use-example"},"Use Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { AlgoWCButton, Pipeline} from 'pipeline-ui';\n\n\nclass TestButton extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      Algaddress: \"\"\n    }\n  }\n  \n  myAlgoWallet = Pipeline.init();\n\n  render() {\n    return <div>\n      <AlgoWCButton \n            context={this} \n            returnTo={\"Algaddress\"} \n            />\n      <h1>{this.state.Algaddress}</h1>\n    </div>\n  }\n}\n\nexport default TestButton;\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(a.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Prop"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"context"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"returnTo"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"empty string"),(0,r.kt)("td",null,"key in state to return fetched address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChange"),(0,r.kt)("td",null,"function"),(0,r.kt)("td",null),(0,r.kt)("td",null,"enables callback (see example above)")))))}C.isMDXComponent=!0},36563:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}}]);