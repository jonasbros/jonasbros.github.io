(function(e){function t(t){for(var c,r,a=t[0],s=t[1],l=t[2],b=0,d=[];b<a.length;b++)r=a[b],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},i={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10ad":function(e,t,n){"use strict";n("7821")},"1fe4":function(e,t,n){},"286d":function(e,t,n){},"2f23":function(e,t,n){e.exports=n.p+"img/PingStudiosLogoBlack.9c06ca7f.svg"},"387e":function(e,t,n){e.exports=n.p+"img/github.edc7e894.svg"},"44ec":function(e,t,n){e.exports=n.p+"img/ABOUT.7de1054e.svg"},"54e6":function(e,t,n){e.exports=n.p+"img/instagram.f971da4e.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(e,t,n,i,o,r){var a=Object(c["w"])("router-view"),s=Object(c["w"])("PageTransition"),l=Object(c["w"])("Pointer");return Object(c["r"])(),Object(c["g"])(c["a"],null,[Object(c["i"])(a,null,{default:Object(c["C"])((function(e){var n=e.Component;return[Object(c["i"])(c["d"],{name:"ayaya",mode:"out-in",duration:{enter:o.pageTransitionDuration,leave:o.pageTransitionDuration},"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut",onBeforeLeave:t[1]||(t[1]=function(e){return r.beforeLeave(e)})},{default:Object(c["C"])((function(){return[(Object(c["r"])(),Object(c["g"])(c["b"],null,[(Object(c["r"])(),Object(c["g"])(Object(c["x"])(n)))],1024))]})),_:2},1032,["duration"])]})),_:1}),(Object(c["r"])(),Object(c["g"])(c["b"],null,[Object(c["i"])(s)],1024)),Object(c["i"])(l)],64)}n("99af");var o=Object(c["i"])("div",{class:"pointer"},null,-1);function r(e,t,n,i,r,a){return Object(c["r"])(),Object(c["g"])(c["c"],{to:"body"},[o])}var a={mounted:function(){this.init()},methods:{init:function(){var e=document.querySelector(".pointer"),t=e.offsetWidth/2;document.addEventListener("mousemove",(function(n){var c=n.clientX,i=n.clientY;e.setAttribute("style","left: ".concat(c-t,"px; top: ").concat(i-t,"px;"))})),document.addEventListener("mouseenter",(function(){e.classList.contains("hidden")&&e.classList.remove("hidden")}))}}};n("c456");a.render=r;var s=a,l=Object(c["i"])("div",{class:"page__transition"},null,-1);function u(e,t,n,i,o,r){return Object(c["r"])(),Object(c["g"])(c["c"],{to:"body"},[l])}n("776a");const b={};b.render=u;var d=b,f=n("cffa"),p=n("a5cf"),h={components:[s,d],data:function(){return{tl:null,sw:375,pageTransitionDuration:1e3,pingTransitionScale:250}},created:function(){f["a"].registerPlugin(p["c"]),this.tl=new p["c"],this.sw=window.innerWidth,this.sw>=1920&&(this.pingTransitionScale=600)},methods:{beforeLeave:function(e){var t,n,c=document.querySelector(".page__transition");e.addEventListener("click",(function(e){t=e.clientX,n=e.clientY,c.setAttribute("style","left: ".concat(t-7.5,"px; top: ").concat(n-7.5,"px;"))}));var i=new p["c"];i.to(c,1,{scale:this.pingTransitionScale,ease:"Power4.inOut"}).to(c,.5,{opacity:1,ease:"Power4.inOut"},"-= 0").to(c,1,{opacity:0}).to(c,{scale:1})}}};n("9cdc");h.render=i;var m=h,O={class:"footer__nav weight-is-semibold"},j=Object(c["h"])("Home"),g=Object(c["h"])("Work"),v=Object(c["h"])("About"),_=Object(c["h"])("Contact"),w=Object(c["i"])("p",{class:"footer__copy"},"PING! Studios © 2021",-1);function y(e,t,n,i,o,r){var a=Object(c["w"])("router-link");return Object(c["r"])(),Object(c["g"])("footer",null,[Object(c["i"])("ul",O,[Object(c["i"])("li",null,[Object(c["i"])(a,{to:"/",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[j]})),_:1})]),Object(c["i"])("li",null,[Object(c["i"])(a,{to:"work",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[g]})),_:1})]),Object(c["i"])("li",null,[Object(c["i"])(a,{to:"about",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[v]})),_:1})]),Object(c["i"])("li",null,[Object(c["i"])(a,{to:"contact",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[_]})),_:1})])]),w])}var k={};n("f401");k.render=y;var S=k,T={class:"sent__modal closed"},A={class:"sent__modal-content"},x=Object(c["i"])("h2",null,"Thanks for reaching out!",-1);function C(e,t,n,i,o,r){return Object(c["r"])(),Object(c["g"])(c["c"],{to:"body"},[Object(c["i"])("div",T,[Object(c["i"])("div",A,[x,Object(c["i"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return r.closeModal.apply(r,arguments)})},"Close")])])])}var P={methods:{closeModal:function(){document.querySelector(".sent__modal").classList.add("closed")}}};n("f2f3");P.render=C;var E=P,L=n("6c02"),R=n("2f23"),D=n.n(R),I={class:"view__container"},B=Object(c["i"])("img",{class:"home__logo",src:D.a,alt:"Ping! Studios"},null,-1),q=Object(c["i"])("div",{class:"home__copy"},[Object(c["i"])("p",{class:"weight-is-semibold"},[Object(c["h"])(" Hi, my name is "),Object(c["i"])("span",{class:"color-is-red"},"Jonas"),Object(c["h"])(" and I'm a "),Object(c["i"])("span",{class:"color-is-red"},"web developer")])],-1),N={class:"home__nav weight-is-bold"},U=Object(c["h"])("Work"),W=Object(c["h"])("About"),F=Object(c["h"])("Contact");function M(e,t,n,i,o,r){var a=Object(c["w"])("router-link");return Object(c["r"])(),Object(c["g"])("div",I,[B,q,Object(c["i"])("ul",N,[Object(c["i"])("li",null,[Object(c["i"])(a,{to:"work",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[U]})),_:1})]),Object(c["i"])("li",null,[Object(c["i"])(a,{to:"about",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[W]})),_:1})]),Object(c["i"])("li",null,[Object(c["i"])(a,{to:"contact",class:"color-is-black hover-is-red"},{default:Object(c["C"])((function(){return[F]})),_:1})])])])}var z={};n("e69a");z.render=M;var H=z,J=n("ddfb"),K=n.n(J),Y={class:"view__container work__container"},G=Object(c["i"])("img",{class:"page__title work__title",src:K.a,alt:"Work"},null,-1),Q={class:"work__info weight-is-semibold"},V={class:"work__title"},X={class:"work__role color-is-red"},Z={class:"work__copy"},$={class:"work__tech"},ee=Object(c["i"])("p",{class:"weight-is-semibold"},"Technologies used:",-1),te=Object(c["i"])("div",{class:"work__github"},[Object(c["h"])(" Check out my "),Object(c["i"])("a",{class:"color-is-red weight-is-semibold",href:"https://github.com/jonasbros",target:"_blank"},"Github"),Object(c["h"])(" for more! ")],-1);function ne(e,t,n,i,o,r){var a=Object(c["w"])("SiteFooter");return Object(c["r"])(),Object(c["g"])("div",Y,[G,(Object(c["r"])(!0),Object(c["g"])(c["a"],null,Object(c["v"])(o.works,(function(e,t){return Object(c["r"])(),Object(c["g"])("div",{class:"work__item-container",key:t},[Object(c["i"])("div",{class:"work__picture",style:{backgroundImage:"url(".concat(e.picture,")")}},null,4),Object(c["i"])("div",Q,[Object(c["i"])("p",V,Object(c["z"])(e.title),1),Object(c["i"])("p",X,Object(c["z"])(e.role),1)]),Object(c["i"])("div",Z,Object(c["z"])(e.copy),1),Object(c["i"])("div",$,[ee,Object(c["i"])("ul",null,[(Object(c["r"])(!0),Object(c["g"])(c["a"],null,Object(c["v"])(e.tech,(function(e,t){return Object(c["r"])(),Object(c["g"])("li",{key:t},Object(c["z"])(e),1)})),128))])])])})),128)),te,Object(c["i"])(a)])}var ce={components:[S],methods:{getWorkPicture:function(e){var t=n("b191")("./".concat(e));return t}},data:function(){return{works:[{picture:this.getWorkPicture("work-sample.jpg"),title:"The Behavior of Sanctioned Environment",role:"Developer",copy:"That being said, criteria of the edge of the constructive criticism seems to potentially change the paradigm of the questionable thesis. A solution might be in a combination of effective time management and content strategy The Network of Recent Communication (Karl Willett in The Book of the Primary Element)",tech:["VUE3","FIREBASE"]},{picture:this.getWorkPicture("work-sample.jpg"),title:"Network of Recent Communication",role:"Designer",copy:"In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",tech:["LUNACY","ADOBE ILLUSTRATOR"]},{picture:this.getWorkPicture("work-sample.jpg"),title:"Network of Recent Communication",role:"Designer",copy:"In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",tech:["LUNACY","ADOBE ILLUSTRATOR"]},{picture:this.getWorkPicture("work-sample.jpg"),title:"Network of Recent Communication",role:"Designer",copy:"In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",tech:["LUNACY","ADOBE ILLUSTRATOR"]},{picture:this.getWorkPicture("work-sample.jpg"),title:"Network of Recent Communication",role:"Designer",copy:"In any case, any further consideration has a long history of The Perception of Revolutionary Hierarchy (Alonzo Fox in The Book of the Task Analysis)",tech:["LUNACY","ADOBE ILLUSTRATOR"]}]}}};n("e4a3");ce.render=ne;var ie=ce,oe=n("44ec"),re=n.n(oe),ae={class:"view__container about__container"},se=Object(c["i"])("img",{class:"page__title about__title",src:re.a,alt:"ABOUT"},null,-1),le={class:"about__copy"},ue=Object(c["i"])("p",null,"That being said, criteria of the edge of the constructive criticism seems to potentially change the paradigm of the questionable thesis. A solution might be in a combination of effective time management and content strategy The Network of Recent Communication.",-1),be=Object(c["i"])("br",null,null,-1),de=Object(c["i"])("p",{class:"weight-is-semibold"},"Experience:",-1),fe={class:"exp__what"},pe={class:"exp__when weight-is-medium color-is-red"},he=Object(c["i"])("br",null,null,-1),me=Object(c["i"])("p",{class:"weight-is-semibold"},"Skills:",-1),Oe={class:"skill"},je=Object(c["i"])("br",null,null,-1),ge=Object(c["i"])("br",null,null,-1);function ve(e,t,n,i,o,r){var a=Object(c["w"])("SiteFooter");return Object(c["r"])(),Object(c["g"])("div",ae,[se,Object(c["i"])("div",le,[ue,be,de,(Object(c["r"])(!0),Object(c["g"])(c["a"],null,Object(c["v"])(o.exp,(function(e,t){return Object(c["r"])(),Object(c["g"])("div",{class:"about__exp",key:t},[Object(c["i"])("p",fe,Object(c["z"])(e.what),1),Object(c["i"])("p",pe,Object(c["z"])(e.when),1)])})),128)),he,me,(Object(c["r"])(!0),Object(c["g"])(c["a"],null,Object(c["v"])(o.skills,(function(e,t){return Object(c["r"])(),Object(c["g"])("ul",{class:"about__skills",key:t},[Object(c["i"])("li",Oe,Object(c["z"])(e),1)])})),128)),je,ge]),Object(c["i"])(a)])}var _e={components:[S],data:function(){return{exp:[{what:"IVR Developer at 3JK Scribes Experts Corp.",when:"2019-Present"},{what:"Audio Specialist at 3JK Scribes Experts Corp.",when:"2019-Present"},{what:"QA Specialist at 3JK Scribes Experts Corp.",when:"2018-2019"}],skills:["HTML/CSS/JS","Vue JS","PHP","MySQL","Adobe Photoshop/Illustrator","Graphic Design"]}}};n("b077");_e.render=ve;var we=_e,ye=n("ea1a"),ke=n.n(ye),Se=n("e672"),Te=n.n(Se),Ae=n("aaa3"),xe=n.n(Ae),Ce=n("a3df"),Pe=n.n(Ce),Ee=n("54e6"),Le=n.n(Ee),Re=n("387e"),De=n.n(Re),Ie={class:"view__container contact__container"},Be={key:0,class:"page__title contact__title",src:ke.a,alt:"ABOUT"},qe={key:1,class:"page__title contact__title",src:Te.a,alt:"ABOUT"},Ne=Object(c["i"])("input",{type:"hidden",name:"contact_number"},null,-1),Ue=Object(c["i"])("input",{class:"form__input name",type:"text",name:"user_name",placeholder:"Name",required:""},null,-1),We=Object(c["i"])("input",{class:"form__input email",type:"email",name:"user_email",placeholder:"Email",required:""},null,-1),Fe=Object(c["i"])("div",{class:"g-recaptcha","data-callback":"callbackSucc","data-error-callback":"callbackError","data-expired-callback":"callbackExpired"},null,-1),Me=Object(c["i"])("div",{class:"contact__social"},[Object(c["i"])("p",null,"Connect with me on social media:"),Object(c["i"])("a",{href:"#"},[Object(c["i"])("img",{class:"hover-is-red is-svg",src:xe.a,alt:"Facebook"})]),Object(c["i"])("a",{href:"#"},[Object(c["i"])("img",{class:"hover-is-red is-svg",src:Pe.a,alt:"Twitter"})]),Object(c["i"])("a",{href:"#"},[Object(c["i"])("img",{class:"hover-is-red is-svg",src:Le.a,alt:"Instagram"})]),Object(c["i"])("a",{href:"#"},[Object(c["i"])("img",{class:"hover-is-red is-svg",src:De.a,alt:"Instagram"})])],-1);function ze(e,t,n,i,o,r){var a=Object(c["w"])("SentModal"),s=Object(c["w"])("SiteFooter");return Object(c["r"])(),Object(c["g"])("div",Ie,[this.swOver(962)?(Object(c["r"])(),Object(c["g"])("img",qe)):(Object(c["r"])(),Object(c["g"])("img",Be)),Object(c["i"])("div",null,[Object(c["i"])("form",{method:"get",action:"contact",class:"contact__form",onSubmit:t[2]||(t[2]=Object(c["D"])((function(e){return r.send()}),["prevent"]))},[Ne,Ue,We,Object(c["i"])("textarea",{class:"form__input msg",name:"message",placeholder:"Message",onKeydown:t[1]||(t[1]=function(e){return r.initRecaptcha(e)}),required:""},null,32),Object(c["i"])("input",{class:["btn form__submit",o.sending||!o.recaptcha?"submit__disabled":""],type:"submit",value:o.sending?"Sending...":"Send"},null,10,["value"]),Fe],32),Me]),Object(c["i"])(a),Object(c["i"])(s)])}n("4160"),n("159b");var He=n("0f91"),Je=n.n(He),Ke={components:[S,E],data:function(){return{recaptcha:!1,sending:!1}},created:function(){var e=this;this.init(),window.callbackSucc=function(t){e.callbackSucc(t)},window.callbackError=function(t){e.callbackError(t)},window.callbackExpired=function(t){e.callbackExpired(t)}},mounted:function(){document.querySelector(".g-recaptcha").addEventListener("mouseenter",(function(){var e=document.querySelector(".pointer");e.classList.add("hidden")})),document.querySelector(".g-recaptcha").addEventListener("mouseleave",(function(){var e=document.querySelector(".pointer");e.classList.remove("hidden")}))},methods:{swOver:function(e){return window.innerWidth>=e},initRecaptcha:function(e){var t=e.target;if(!t.value&&"Backspace"!=e.key&&"Delete"!=e.key){var n=document.querySelector(".g-recaptcha");window.grecaptcha.render(n,{sitekey:"6LctFuIZAAAAAE5jPonJhdQgaPw4D9hPwy64nv21",theme:"light"})}},resetRecaptcha:function(){var e=document.querySelector(".g-recaptcha");window.grecaptcha.reset(e)},init:function(){Je.a.init("user_d7olsciRBtoAMF6aldMN3")},send:function(){var e=this,t=document.querySelector(".contact__form"),n=new FormData(t),c={to_name:"PING! Studios",user_name:n.get("user_name"),user_email:n.get("user_email"),reply_to:n.get("user_email"),message:n.get("message")};this.sending=!0,t.contact_number.value=1e5*Math.random()|0,Je.a.send("gmail_service","template_gcalfn8",c).then((function(){console.log("SUCCESS!");var t=document.querySelector(".form__submit"),n=document.querySelector(".sent__modal");t.value="Sent!",n.classList.remove("closed"),setTimeout((function(){n.classList.add("closed")}),3e3),e.resetRecaptcha(),document.querySelectorAll(".form__input").forEach((function(e){e.value=""})),setTimeout((function(){t.value="Send",e.sending=!1}),2500)}),(function(t){console.log("FAILED...",t),e.resetRecaptcha(),e.sending=!1}))},callbackSucc:function(e){e&&(this.recaptcha=!0)},callbackError:function(e){e&&(this.recaptcha=!1)},callbackExpired:function(e){e&&(this.recaptcha=!1,this.resetRecaptcha())}}};n("10ad");Ke.render=ze;var Ye=Ke,Ge=[{name:"Home",path:"/",component:H,meta:{title:"Ping!"}},{name:"Work",path:"/work",component:ie,meta:{title:"Work"}},{name:"About",path:"/about",component:we,meta:{title:"About"}},{name:"Contact",path:"/contact",component:Ye,meta:{title:"Contact"}}],Qe=Object(L["a"])({history:Object(L["b"])("/"),routes:Ge});Qe.afterEach((function(e){e.meta&&e.meta.title&&(document.title=e.meta.title)}));var Ve=Qe;Object(c["f"])(m).component("PageTransition",d).component("Pointer",s).component("SentModal",E).component("SiteFooter",S).use(Ve).mount("#app")},"776a":function(e,t,n){"use strict";n("d3aa")},7821:function(e,t,n){},"7e10":function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},a3df:function(e,t,n){e.exports=n.p+"img/twitter.6dae54f5.svg"},aaa3:function(e,t,n){e.exports=n.p+"img/facebook.dca680bc.svg"},ac84:function(e,t,n){},b077:function(e,t,n){"use strict";n("1fe4")},b191:function(e,t,n){var c={"./work-sample.jpg":"b579"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}i.keys=function(){return Object.keys(c)},i.resolve=o,e.exports=i,i.id="b191"},b579:function(e,t,n){e.exports=n.p+"img/work-sample.6157197c.jpg"},c456:function(e,t,n){"use strict";n("ac84")},c701:function(e,t,n){},d184:function(e,t,n){},d3aa:function(e,t,n){},ddfb:function(e,t,n){e.exports=n.p+"img/WORK.8a982369.svg"},e4a3:function(e,t,n){"use strict";n("d184")},e672:function(e,t,n){e.exports=n.p+"img/CONTACT2.3305acd6.svg"},e69a:function(e,t,n){"use strict";n("286d")},ea1a:function(e,t,n){e.exports=n.p+"img/CONTACT.00812777.svg"},ec44:function(e,t,n){},f2f3:function(e,t,n){"use strict";n("7e10")},f401:function(e,t,n){"use strict";n("ec44")}});
//# sourceMappingURL=app.3d089bad.js.map