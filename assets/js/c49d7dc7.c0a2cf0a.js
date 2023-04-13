"use strict";(self.webpackChunkleaf_loans=self.webpackChunkleaf_loans||[]).push([[4964],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7751:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},c="Loan Detail",s={unversionedId:"leaf-loans/reference/features/loan-detail",id:"leaf-loans/reference/features/loan-detail",title:"Loan Detail",description:"The loan detail page has no data and domain layers of itself, it instead relies on the methods exposed by LoanPaymentRepo.",source:"@site/docs/leaf-loans/reference/features/05-loan-detail.md",sourceDirName:"leaf-loans/reference/features",slug:"/leaf-loans/reference/features/loan-detail",permalink:"/docs/leaf-loans/reference/features/loan-detail",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/leaf-loans/reference/features/05-loan-detail.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loan Application",permalink:"/docs/leaf-loans/reference/features/loan-application"},next:{title:"Loan History",permalink:"/docs/leaf-loans/reference/features/loan-history"}},u=[],p={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loan-detail"},"Loan Detail"),(0,o.kt)("p",null,"The loan detail page has no data and domain layers of itself, it instead relies on the methods exposed by ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanPaymentRepo"),"."),(0,o.kt)("p",null,"The loan detail screen takes a loan as an argument and gets the loan payment history using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoanPayments")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanPaymentRepo"),"."),(0,o.kt)("p",null,"The events being analyzed in this component include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Large Pay Button Tapped (",(0,o.kt)("inlineCode",{parentName:"li"},"loan_detail_big_pay_button_tapped"),")"),(0,o.kt)("li",{parentName:"ul"},"Small Pay Button Tapped (",(0,o.kt)("inlineCode",{parentName:"li"},"loan_detail_small_pay_button_tapped"),")")))}f.isMDXComponent=!0}}]);