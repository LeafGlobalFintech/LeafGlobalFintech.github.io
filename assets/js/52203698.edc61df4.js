"use strict";(self.webpackChunkleaf_loans=self.webpackChunkleaf_loans||[]).push([[4664],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},f),{},{components:n})):r.createElement(y,i({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8248:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return f},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Loan History",s={unversionedId:"leaf-loans/reference/features/loan-history",id:"leaf-loans/reference/features/loan-history",title:"Loan History",description:"This component has a repository which defines two methods: getLoans and getActiveLoan.",source:"@site/docs/leaf-loans/reference/features/06-loan-history.md",sourceDirName:"leaf-loans/reference/features",slug:"/leaf-loans/reference/features/loan-history",permalink:"/docs/leaf-loans/reference/features/loan-history",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/leaf-loans/reference/features/06-loan-history.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loan Detail",permalink:"/docs/leaf-loans/reference/features/loan-detail"},next:{title:"Loan Payment",permalink:"/docs/leaf-loans/reference/features/loan-payment"}},f=[],u={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loan-history"},"Loan History"),(0,a.kt)("p",null,"This component has a repository which defines two methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"getLoans")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getActiveLoan"),"."),(0,a.kt)("p",null,"In the current implementation, the active loan is the first loan from the result gotten from ",(0,a.kt)("inlineCode",{parentName:"p"},"getLoans"),"."),(0,a.kt)("p",null,"The only event being analyzed here is Inactive Loan History Card Tapped (",(0,a.kt)("inlineCode",{parentName:"p"},"inactive_loan_history_card_tapped"),") which is registered when any card that can navigate to the loan detail page is tapped."))}p.isMDXComponent=!0}}]);