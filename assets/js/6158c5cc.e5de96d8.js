"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,b=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return r?a.createElement(b,c(c({ref:t},u),{},{components:r})):a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={slug:"react-blog-post",title:"react concept",authors:{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png"},tags:["react"]},c=void 0,i={permalink:"/blog/react-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/2022-05-28-react-concept.md",source:"@site/blog/react/2022-05-28-react-concept.md",title:"react concept",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:.76,hasTruncateMarker:!1,authors:[{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png",imageURL:"https://github.com/wgao19.png"}],frontMatter:{slug:"react-blog-post",title:"react concept",authors:{name:"Gao Wei",title:"Docusaurus Core Team",url:"https://github.com/wgao19",image_url:"https://github.com/wgao19.png",imageURL:"https://github.com/wgao19.png"},tags:["react"]},prevItem:{title:"\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58",permalink:"/blog/react"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"),(0,n.kt)("h1",{id:"usecallback"},"useCallback"),(0,n.kt)("p",null,"useCallback \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u4f9d\u5b58\u914d\u5217\u306e\u4e2d\u8eab\u304c\u5909\u308f\u3089\u306a\u304b\u3063\u305f\u5834\u5408\u30e1\u30e2\u5316\u3055\u308c\u305f\u95a2\u6570\u3001\u3064\u307e\u308a\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u524d\u3068\u540c\u4e00\u306e\u95a2\u6570\u304c\u8fd4\u308b\u305f\u3081\u3001\u3053\u306e\u95a2\u6570\u3092\u6e21\u3057\u3066\u3044\u308b\u5b50\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067 props \u304c\u5909\u5316\u3057\u3066\u3044\u306a\u3044\u3068\u307f\u306a\u3055\u308c\u3066\u518d\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u30b9\u30ad\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In other words, useCallback caches a function between re-renders until its dependencies change. Let's walk through an example to see when this is useful.")),(0,n.kt)("h1",{id:"reference"},"reference"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://zenn.dev/masatotezuka/articles/9102b1e260a478#%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%5D"},"React.memo\u30fbuseCallback()\u3092\u6574\u7406\u3057\u3066\u307f\u305f")))}m.isMDXComponent=!0}}]);