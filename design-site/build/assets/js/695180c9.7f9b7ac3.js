"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[4694],{32449:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var i=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],r={slug:"ssr",title:"Solving Server Side Render Issues",author:"Headline Team",author_title:"Headline Team",author_url:"https://github.com/headline-design",author_image_url:"https://avatars.githubusercontent.com/u/85418370?v=4",tags:["ssr","crypto","buffer","btoa","client"]},l=void 0,u={permalink:"/blog/ssr",editUrl:"https://headline.dev/blog/2019-05-28-ssr.md",source:"@site/blog/2019-05-28-ssr.md",title:"Solving Server Side Render Issues",description:"Server side build failure is a fairly common and frustrating issue that is encountered when generating documentation sites with tools like Docusaurus. SSR issues typically arise when code that functioned flawlessly in a client-side React app is incorporated on a doc site either as a component or live code block. The problem can typically be traced to dependencies or contexts that the server does not have access to. Often, such issues can be difficult to track down due to the complexities of rollup, babel, webpack, polyfills, transpiling and minifying. Fortunately, two simple bypasses can resolve the majority of such problems.",date:"2019-05-28T00:00:00.000Z",formattedDate:"May 28, 2019",tags:[{label:"ssr",permalink:"/blog/tags/ssr"},{label:"crypto",permalink:"/blog/tags/crypto"},{label:"buffer",permalink:"/blog/tags/buffer"},{label:"btoa",permalink:"/blog/tags/btoa"},{label:"client",permalink:"/blog/tags/client"}],readingTime:1.275,truncated:!1,authors:[{name:"Headline Team",title:"Headline Team",url:"https://github.com/headline-design",imageURL:"https://avatars.githubusercontent.com/u/85418370?v=4"}]},c={authorsImageUrls:[void 0]},p=[],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Server side build failure is a fairly common and frustrating issue that is encountered when generating documentation sites with tools like Docusaurus. SSR issues typically arise when code that functioned flawlessly in a client-side React app is incorporated on a doc site either as a component or live code block. The problem can typically be traced to dependencies or contexts that the server does not have access to. Often, such issues can be difficult to track down due to the complexities of rollup, babel, webpack, polyfills, transpiling and minifying. Fortunately, two simple bypasses can resolve the majority of such problems. "),(0,s.kt)("p",null,"The first is simply embedding a codesandbox iFrame, which is particulary advised for complex code that uses state, nodejs libraries like crypto. Link a github repository (or subfolder) via ",(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github"},"https://codesandbox.io/s/github"),". After opening the sandbox, click the embed button on the upper right side of the window.  "),(0,s.kt)("p",null,"The second is to use a plugin like BrowserOnly in conjunction with using ",(0,s.kt)("inlineCode",{parentName:"p"},"require()")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"import"),". "),(0,s.kt)("p",null,"All code below goes into a .mdx file. The function ",(0,s.kt)("inlineCode",{parentName:"p"},"BrowserOnlyButton")," returns both the dependencies and code that depends on them. Note how the dot notation is used with ",(0,s.kt)("inlineCode",{parentName:"p"},"require()")," to specify particular components. Finally, the component can be used in the mdx file simply by adding the jsx tag corresponding to the wrapping function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nexport function BrowserOnlyButton() {\n  return (\n    <BrowserOnly fallback={<p>Some Fallback Content</p>}>\n      {() => {\nconst AlgoButton = require('pipeline-ui').AlgoButton; const Pipeline = require('pipeline-ui').Pipeline; return <AlgoButton wallet={Pipeline.init()} />      }}\n    </BrowserOnly>\n  );\n}\n\n<BrowserOnlyButton />\n")))}h.isMDXComponent=!0}}]);