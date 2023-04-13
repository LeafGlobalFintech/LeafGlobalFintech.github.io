"use strict";(self.webpackChunkleaf_loans=self.webpackChunkleaf_loans||[]).push([[578],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7350:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},c="Loan Payment",p={unversionedId:"leaf-loans/reference/features/loan-payment",id:"leaf-loans/reference/features/loan-payment",title:"Loan Payment",description:"This component takes care of everything loan payment related. On the repository we have getLoanPayment, getLoanPayments, getUserPayments and payLoan which are self explanatory.",source:"@site/docs/leaf-loans/reference/features/07-loan-payment.md",sourceDirName:"leaf-loans/reference/features",slug:"/leaf-loans/reference/features/loan-payment",permalink:"/docs/leaf-loans/reference/features/loan-payment",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/leaf-loans/reference/features/07-loan-payment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loan History",permalink:"/docs/leaf-loans/reference/features/loan-history"},next:{title:"Onboarding",permalink:"/docs/leaf-loans/reference/features/onboarding"}},u=[],s={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loan-payment"},"Loan Payment"),(0,o.kt)("p",null,"This component takes care of everything loan payment related. On the repository we have ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoanPayment"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoanPayments"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserPayments")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"payLoan")," which are self explanatory."),(0,o.kt)("p",null,"The events being analyzed on this page are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Loan Payment Button Tapped (",(0,o.kt)("inlineCode",{parentName:"li"},"loan_payment_pay_button_tapped"),")"),(0,o.kt)("li",{parentName:"ul"},"Loan Payment Successfully Submitted (",(0,o.kt)("inlineCode",{parentName:"li"},"loan_payment_submitted"),")")))}f.isMDXComponent=!0}}]);