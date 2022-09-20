import{_,f,r as g,g as m,c as v,a as e,h as o,t as w,p as b,i as y,o as x}from"./bootstrap-43d143c7.mjs";const P=f({setup(i,{expose:p}){p();const r=["build scalable apps.","deploy globally distributed apps.","architect solutions.","leverage the power of the cloud.","handle massive workloads.","leverage tech as a competitive advantage.","reduce time-to-market."],s={typingSpeed:100,erasingSpeed:30,timeBetweenPhrases:2e3},t=g("");let a=0;const c=l=>new Promise(d=>setTimeout(d,l));async function u(l){let d=0;for(;t.value.length>0;)t.value=t.value.substring(0,t.value.length-1),await c(s.erasingSpeed);for(;t.value.length<l.length;)d++,t.value=l.substring(0,d).trim(),await c(s.typingSpeed)}m(async()=>{for(;;)await u(r[a]),a++,a===r.length&&(a=0),await c(s.timeBetweenPhrases)});const h={valuePropositions:r,config:s,currentPhrase:t,nextPhraseIndex:a,sleep:c,typePhrase:u};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),n=i=>(b("data-v-3eafaef1"),i=i(),y(),i),S={class:"section is-spaced"},B={class:"container"},k={class:"subtitle is-family-monospace is-1 is-size-4-mobile is-spaced is-typewritter"},C=o(" Helping "),I=n(()=>e("a",{href:"https://www.mongodb.com/",target:"_blank"}," MongoDB ",-1)),A=n(()=>e("span",{class:"typing-cursor"}," |",-1)),D=n(()=>e("hr",{class:"is-hidden-tablet mt-6"},null,-1)),O=n(()=>e("p",{class:"subtitle is-4 is-size-5-mobile"}," 15 years of software engineering experience. With a proven track record of leading teams to deliver reliable software that scales and delivers value to customers. ",-1)),M=n(()=>e("p",null,[e("br"),o("Certified Product Owner."),e("br"),o("Certified TOGAF\xAE 9 Architect."),e("br"),o("Certified MongoDB DBA. ")],-1));function N(i,p,r,s,t,a){return x(),v("main",null,[e("section",S,[e("div",B,[e("p",k,[C,I,o(" users "+w(s.currentPhrase),1),A]),D,O,M])])])}var $=_(P,[["render",N],["__scopeId","data-v-3eafaef1"]]);export{$ as default};
