"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9636],{9479:function(t,n,l){l.r(n),l.d(n,{frontMatter:function(){return r},contentTitle:function(){return k},metadata:function(){return s},toc:function(){return a},default:function(){return m}});var o=l(2122),e=l(9756),u=(l(7294),l(3905)),i=l(6086),d=["components"],r={},k="Button",s={unversionedId:"Components/Button",id:"Components/Button",isDocsHomePage:!1,title:"Button",description:"Use the Button component when you want users to perform an action. It contains a label with an optional icon before or after the label. It maps to a `` element and extends Box.",source:"@site/docs/Components/Button.mdx",sourceDirName:"Components",slug:"/Components/Button",permalink:"/docs/Components/Button",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Button.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Box",permalink:"/docs/Components/Box"},next:{title:"Card",permalink:"/docs/Components/Card"}},a=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],p={toc:a};function m(t){var n=t.components,l=(0,e.Z)(t,d);return(0,u.kt)("wrapper",(0,o.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"button"},"Button"),(0,u.kt)("p",null,"Use the Button component when you want users to perform an action. It contains a label with an optional icon before or after the label. It maps to a ",(0,u.kt)("inlineCode",{parentName:"p"},"<button>")," element and extends Box."),(0,u.kt)("h2",{id:"usage-example"},"Usage Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Flex alignItems={"center"}>\n  <Button icon="Send" mr={3}>\n    Send\n  </Button>\n\n  <Button icon="Send" iconpos="right" mr={3}>\n    Send\n  </Button>\n\n  <Button icon="MoreHoriz" icononly />\n</Flex>\n')),(0,u.kt)("h3",{id:"props"},"Props"),(0,u.kt)(i.Z,{mdxType:"Table"},(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Prop"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Default"),(0,u.kt)("th",null,"Description"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"bg"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'silver'"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"border"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'none'"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"color"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'white'"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"contrastColor"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'white'"),(0,u.kt)("td",null,"Sets text color of button.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"fontFamily"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'sansSerif'"),(0,u.kt)("td",null,"Sets font of button text.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"fontSize"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'inherit'"),(0,u.kt)("td",null,"Sets font size.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"fontWeight"),(0,u.kt)("td",null,"integer (optional)"),(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"Sets font weight.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"height"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'3rem'"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"icon"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null),(0,u.kt)("td",null,"Sets icon of button.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"icononly"),(0,u.kt)("td",null,"bool (optional)"),(0,u.kt)("td",null,"false"),(0,u.kt)("td",null,"Sets padding on button with icon and no text")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"iconpos"),(0,u.kt)("td",null,"enum (optional)"),(0,u.kt)("td",null),(0,u.kt)("td",null,"Sets icon position on button. Allowed values: 'left' 'right'.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"lineHeight"),(0,u.kt)("td",null,"integer (optional)"),(0,u.kt)("td",null,"1"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"mainColor"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'primary'"),(0,u.kt)("td",null,"Sets background color of button.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"minWidth"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'3rem'"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"position"),(0,u.kt)("td",null,"string (optional)"),(0,u.kt)("td",null,"'relative'"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"px"),(0,u.kt)("td",null,"integer (optional)"),(0,u.kt)("td",null,"4"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"py"),(0,u.kt)("td",null,"integer (optional)"),(0,u.kt)("td",null,"0"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"size"),(0,u.kt)("td",null,"enum (optional)"),(0,u.kt)("td",null),(0,u.kt)("td",null,"Sets font and spacing size of button. Allowed values: 'small' 'medium' 'large'.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"theme"),(0,u.kt)("td",null,"object (optional)"),(0,u.kt)("td",null),(0,u.kt)("td",null,"Sets theme.")))),(0,u.kt)("p",null,"size\nenum\n(optional)\nSets font and spacing size of button\nAllowed values: 'small' 'medium' 'large' ."),(0,u.kt)("p",null,"theme\nobject\n(optional)\nSets theme"),(0,u.kt)("p",null,"Styled System Props"),(0,u.kt)("p",null,"Button uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props."))}m.isMDXComponent=!0}}]);