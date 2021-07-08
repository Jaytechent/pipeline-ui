(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3605],{4184:function(n,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var t=o(2122),a=o(9756),l=(o(7294),o(3905)),s=o(5125),p=["components"],r={},i="Modal",d={unversionedId:"Components/Modal",id:"Components/Modal",isDocsHomePage:!1,title:"Modal",description:"The Modal component displays any content fixed positioned in the screen centre with a background colour and can be used to generate popup windwos.",source:"@site/docs/Components/Modal.mdx",sourceDirName:"Components",slug:"/Components/Modal",permalink:"/docs/Components/Modal",editUrl:"https://github.com/headline-design/pipeline-ui/docs/Components/Modal.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loader",permalink:"/docs/Components/Loader"},next:{title:"Pill",permalink:"/docs/Components/Pill"}},u=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],c={toc:u};function m(n){var e=n.components,o=(0,a.Z)(n,p);return(0,l.kt)("wrapper",(0,t.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modal"},"Modal"),(0,l.kt)("p",null,"The Modal component displays any content fixed positioned in the screen centre with a background colour and can be used to generate popup windwos."),(0,l.kt)(s.Z,{address:"LMKFQIPL3VQCZGGFK4WZ7FPCQWLNBTJQ3UWSTA7D7QZSPJTZQKTDVT7WG4",mdxType:"AlgoAddress"}),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"(Note: the code below does not correspond to the above component)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'function ModalExample() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const closeModal = e => {\n    e.preventDefault();\n    setIsOpen(false);\n  };\n\n  const openModal = e => {\n    e.preventDefault();\n    setIsOpen(true);\n  };\n\n  return (\n    <Box className="App" p={4}>\n      <Box>\n        <Button onClick={openModal}>Open Modal</Button>\n\n        <Modal isOpen={isOpen}>\n          <Card width={"420px"} p={0}>\n            <Button.Text\n              icononly\n              icon={"Close"}\n              color={"moon-gray"}\n              position={"absolute"}\n              top={0}\n              right={0}\n              mt={3}\n              mr={3}\n              onClick={closeModal}\n            />\n\n            <Box p={4} mb={3}>\n              <Heading.h3>Confirm Action</Heading.h3>\n              <Text>Are you sure you want to action?</Text>\n            </Box>\n\n            <Flex\n              px={4}\n              py={3}\n              borderTop={1}\n              borderColor={"#E8E8E8"}\n              justifyContent={"flex-end"}\n            >\n              <Button.Outline onClick={closeModal}>Cancel</Button.Outline>\n              <Button ml={3}>Confirm</Button>\n            </Flex>\n          </Card>\n        </Modal>\n      </Box>\n    </Box>\n  );\n}\n')),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)("p",null,"Props\nisOpen\nbool\n(optional)\nShows the content of the Modal when true\nDefault value:"),(0,l.kt)("p",null,"false"))}m.isMDXComponent=!0}}]);