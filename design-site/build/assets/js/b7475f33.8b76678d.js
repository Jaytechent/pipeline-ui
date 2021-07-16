(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9429],{1799:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=t(2122),o=t(9756),s=(t(7294),t(3905)),r=t(8735),p=["components"],i={},l="Box",d={unversionedId:"Components/Box",id:"Components/Box",isDocsHomePage:!1,title:"Box",description:"Box renders a responsive box-model layout component.",source:"@site/docs/Components/Box.mdx",sourceDirName:"Components",slug:"/Components/Box",permalink:"/docs/Components/Box",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Box.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BaseStyles",permalink:"/docs/Components/BaseStyles"},next:{title:"Button",permalink:"/docs/Components/Button"}},m=[{value:"Usage Example",id:"usage-example",children:[{value:"Margin and padding",id:"margin-and-padding",children:[]}]}],u={toc:m};function c(e){var n=e.components,t=(0,o.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"box"},"Box"),(0,s.kt)("p",null,"Box renders a responsive box-model layout component."),(0,s.kt)(r.Z,{bg:"salmon",color:"white",fontSize:4,p:3,width:[1,1,.5],mdxType:"Box"},"This is a Box"),(0,s.kt)("h2",{id:"usage-example"},"Usage Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box bg="salmon" color="white" fontSize={4} p={3} width={[1, 1, 0.5]}>\n  This is a Box\n</Box>\n')),(0,s.kt)("h3",{id:"margin-and-padding"},"Margin and padding"),(0,s.kt)("p",null,"The space function adds margin and padding props. The margin and padding props use a shorthand syntax, similar to Basscss, Tachyons, and Bootstrap."),(0,s.kt)("p",null,"Margin props"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"m margin\nmt margin-top\nmr margin-right\nmb margin-bottom\nml margin-left\nmx margin-left and margin-right\nmy margin-top and margin-bottom\n")),(0,s.kt)("p",null,"Padding props"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"p padding\npt padding-top\npr padding-right\npb padding-bottom\npl padding-left\npx padding-left and padding-right\npy padding-top and padding-bottom\n")),(0,s.kt)("p",null,"Space Theming"),(0,s.kt)("p",null,"To set a consistent white-space scale, add a space array to your theme. Use numbers to set pixel values, or use strings for other CSS units such as rem."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"// theme.js\nexport default {\n  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],\n};\n")),(0,s.kt)("p",null,"All spacing props accept numbers, strings, or arrays as values, where:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Numbers between 0 and the last index of the space array are values from the space array defined in theme\nNumbers greater than the length of the spacearray are converted to pixels\nString values can be used for any valid CSS value (e.g. 'auto' or '2em')\nMargin props accept negative values to set negative margin\nArrays can be used for responsive styles\n")),(0,s.kt)("p",null,"Width"),(0,s.kt)("p",null,"The width function adds a single width prop for setting responsive width styles."),(0,s.kt)("p",null,"The width prop accepts number, string, or array values, where:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Numbers between 0 and 1 are converted to percentage based widths (e.g. 1/2 becomes '50%')\nNumbers greater than 1 are converted to pixels\nStrings can be used for other CSS values (e.g. '50vw' or '30em')\nArrays can be used for responsive styles\n")),(0,s.kt)("p",null,"Responsive Styles"),(0,s.kt)("p",null,"All styled-system functions accept arrays as values to set styles responsively using a mobile-first approach."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"<Box\n  width={[\n    1, // 100% below the smallest breakpoint\n    1 / 2, // 50% from the next breakpoint and up\n    1 / 4, // 25% from the next breakpoint and up\n  ]}\n/>\n")),(0,s.kt)("h4",{id:"props"},"props"),(0,s.kt)("p",null,"theme\nobject\n(optional)"),(0,s.kt)("p",null,"Styled System Props"),(0,s.kt)("p",null,"Box uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props."))}c.isMDXComponent=!0}}]);