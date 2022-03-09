"use strict";(self.webpackChunkdocusaurus_plugin_mindmap_docs=self.webpackChunkdocusaurus_plugin_mindmap_docs||[]).push([[206],{714:function(n,e,t){var r=t(1262),i=t(7294),o=t(818);function a(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}t(1311);var u=a(r),d=a(i),c=a(o);function s(n){if(!n)return"";var e=n.split("\n").filter((function(n){return n})),t=null,r={};return console.log("lines",e),e.forEach((function(n){var e=n.split(/\s/),i=e[0],o=e[1],a=i.includes("l")?"left":"right",u={id:Math.random().toString(36).slice(2,8),topic:o,direction:a},d=i.replace("l","").length;r[d]=u,1===d?(u.id="root",t=u):(r[d-1].children=r[d-1].children||[],r[d-1].children.push(u))})),t}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}(".docusaurus-plugin-mindmap {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n}\n\n.docusaurus-plugin-mindmap jmexpander {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.docusaurus-plugin-mindmap jmnode:hover,\n.docusaurus-plugin-mindmap jmnode.selected {\n  background-color: #428bca !important;\n  box-shadow: 1px 1px 1px #666 !important;\n}\n");var l=function(n){var e,t,r,o=n.content,a=d.default.useRef(null),u=d.default.useState(0),l=u[0],m=u[1],p=i.useCallback((e=function(){a.current.innerHTML="";var n={meta:{name:"",author:"",version:""},format:"node_tree",data:s(o)},e={container:a.current,editable:!1,theme:"primary"},t=new c.default(e);t.show(n);var r=t.view.size.w,i=a.current.getBoundingClientRect().width,u=1;r>i&&r/i<2&&(u=i/r),t.view.setZoom(u),m(t.view.size.h*u+5)},t=300,r=null,function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var o=this;clearTimeout(r),r=setTimeout((function(){e.apply(o,n)}),t)}),[o]);return i.useEffect((function(){return p(),window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}),[o]),d.default.createElement("div",{ref:a,style:{height:l},className:"docusaurus-plugin-mindmap"})},m=i.memo((function(n){var e=n.content;return console.log(c.default),d.default.createElement(u.default,{fallback:d.default.createElement(d.default.Fragment,null,"loading...")},(function(){return d.default.createElement(l,{content:e})}))}));n.exports=m},9568:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return f}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=t(714),u=t.n(a),d=["components"],c={sidebar_position:1},s="intro",l={unversionedId:"intro",id:"intro",title:"intro",description:"<Mindmap",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docusaurus-plugin-mindmap/docs/intro",editUrl:"https://github.com/xiguaxigua/docusaurus-plugin-mindmap/edit/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},m=[],p={toc:m};function f(n){var e=n.components,t=(0,i.Z)(n,d);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"intro"),(0,o.kt)(u(),{content:"\n- \u524d\u7aef\n-- HTML\n-- CSS\n-- JS\n--- \u95ed\u5305\n--- \u539f\u578b\u94fe\n",mdxType:"Mindmap"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Mindmap from '@theme/Mindmap';\n\n<Mindmap\n  content={`\n- \u524d\u7aef\n-- HTML\n-- CSS\n-- JS\n--- \u95ed\u5305\n--- \u539f\u578b\u94fe\n`}\n/>\n")),(0,o.kt)(u(),{content:"\n- \u524d\u7aef\n-- HTML\n-- CSS\n--l JS\n--- \u95ed\u5305\n--- \u539f\u578b\u94fe\n",mdxType:"Mindmap"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Mindmap from '@theme/Mindmap';\n\n<Mindmap\n  content={`\n- \u524d\u7aef\n-- HTML\n-- CSS\n--l JS\n--- \u95ed\u5305\n--- \u539f\u578b\u94fe\n`}\n/>\n")))}f.isMDXComponent=!0}}]);