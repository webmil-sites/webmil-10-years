(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,n){var content=n(152);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("8464029a",content,!0,{sourceMap:!1})},148:function(e,t,n){"use strict";var o=n(3),r=n(16),l=n(19),c=n(96),f=n(47),h=n(9),d=n(48).f,m=n(65).f,k=n(10).f,v=n(149).trim,y=o.Number,w=y,_=y.prototype,L="Number"==l(n(64)(_)),C="trim"in String.prototype,E=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,l=(t=C?t.trim():v(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var code,c=t.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(L?h(function(){_.valueOf.call(n)}):"Number"!=l(n))?c(new w(E(t)),n,y):E(t)};for(var I,N=n(8)?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)r(w,I=N[x])&&!r(y,I)&&k(y,I,m(w,I));y.prototype=_,_.constructor=y,n(11)(o,"Number",y)}},149:function(e,t,n){var o=n(7),r=n(18),l=n(9),c=n(150),f="["+c+"]",h=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(e,t,n){var r={},f=l(function(){return!!c[e]()||"​"!="​"[e]()}),h=r[e]=f?t(k):c[e];n&&(r[n]=h),o(o.P+o.F*f,"String",r)},k=m.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(d,"")),e};e.exports=m},150:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},151:function(e,t,n){"use strict";var o=n(147);n.n(o).a},152:function(e,t,n){(e.exports=n(62)(!1)).push([e.i,"#video-placeholder-wrapper{width:0;height:0}",""])},154:function(e,t,n){"use strict";n(148);var o={data:function(){return{showPlayer:!1}},props:{id:Number},methods:{showOn:function(){this.showPlayer=!0,Element.prototype.requestFullscreen||(Element.prototype.requestFullscreen=Element.prototype.mozRequestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.msRequestFullscreen),this.$nextTick(function(){var e=this,iframe=document.querySelector("iframe");iframe.requestFullscreen(),iframe.onfullscreenchange=function(t){var n=!!document.fullscreenElement;console.log(n),n||(e.showPlayer=!1),console.log(e.showPlayer)}})}}},r=(n(151),n(6)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"showreel"},[n("a",{attrs:{href:"#","data-video":e.id},on:{click:function(t){return t.preventDefault(),e.showOn(t)}}},[e._v("Showreel")]),e.showPlayer?n("div",{attrs:{id:"video-placeholder-wrapper"}},[n("iframe",{attrs:{id:"video-frame",src:"https://player.vimeo.com/video/"+e.id+"?autoplay=1",frameborder:"0",allow:"autoplay; fullscreen",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),n("div",{attrs:{id:"video-placeholder"}})]):e._e()])},[],!1,null,null,null);t.a=component.exports},165:function(e,t,n){"use strict";n.r(t);var o={props:["item"]},r=n(6),l={components:{Project:Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-case"},[n("div",{staticClass:"c-case__heading o-main-flex o-main-flex--wrap o-main-flex--justify-content-between o-main-flex--align-items-baseline"},[n("h4",[e.item.titleLink?n("a",{attrs:{href:e.item.titleLink,target:"_blank"}},[e._v(e._s(e.item.title))]):n("div",[e._v(e._s(e.item.title))])]),e.item.caseLink?n("a",{staticClass:"link",attrs:{href:e.item.caseLink,target:e.item.caseLink.includes("behance.net")?"_blank":""}},[e._v(e._s(e.item.caseLink.includes("behance.net")?"behance":"case study"))]):e._e()]),n("p",[e._v(e._s(e.item.info))]),e.item.caseLink?n("a",{staticClass:"link-mobile",attrs:{href:e.item.caseLink,target:e.item.caseLink.includes("behance.net")?"_blank":""}},[e._v(e._s(e.item.caseLink.includes("behance.net")?"behance":"case study"))]):e._e()])},[],!1,null,null,null).exports,Showreel:n(154).a},mounted:function(){this.$ga.page("/cases")},data:function(){return{startups:[{title:"Petcube",titleLink:"https://petcube.com/",info:"Supporting backend and frontend from the beginning till now. Creating landing pages."},{title:"Karpaty.ua",titleLink:"https://karpaty.ua/",info:"Carpathians travel guide. Own startup since 2015.",caseLink:"/portfolio/karpaty_ua"},{title:"Biggggidea.com",titleLink:"https://biggggidea.com/projects/",info:"Supporting backend and frontend from the beginning till now. Creating landing pages.",caseLink:"/portfolio/big_idea"},{title:"Teple misto",titleLink:"https://warm.if.ua/",info:"The platform that unites people and businesses that support the ideas and actions for sustainable development of Ivano-Frankivsk.",caseLink:"/portfolio/warm_city"},{title:"Urban Space 100",titleLink:"http://urbanspace.if.ua/uk",info:"Social initiative."}],ico:[{title:"Hackenproof",titleLink:"https://hackenproof.com/",info:"Hackenproof is vulnerability coordination and bug bounty platform that connects businesses with cybersecurity researchers.",caseLink:"/portfolio/hackenproof"},{title:"Paytomat",titleLink:"https://promo.paytomat.com/",info:"Paytomat bridges the blockchain ecosystem with retail, hedging the risks, increasing speed and enabling instant payments in multiple cryptocurrencies."}],market:[{title:"Design Village Conference",info:"Page landing for the Design Village conference that took place in May 2018 in Ukrainian city Ivano-Frankivsk.",caseLink:"https://www.behance.net/gallery/68998145/Design-Village-2018-Conference-in-Ukraine"},{title:"Prykarpattyaoblenergo",titleLink:"https://oe.if.ua/uk",info:"Joint-stock company “Prykarpattyaoblenergo”.",caseLink:"/portfolio/oe"},{title:"Lobby X - CRM system",info:"Tons of tasks crave our attention on a daily basis. The amount of spent resources are influenced by how we react to them. Hence, it is important to find a simple and handy way to make the work more effective. This is an issue that faced our Clients — Lobby X. The recruitment processes, which had been executed by human resources before, needed to be optimized.",caseLink:"https://www.behance.net/gallery/81227129/Lobby-X-CRM-system"},{title:"Bigboard",titleLink:"http://bigboard.ua/uk",info:"BigBoard — Founder of Ukrainian outdoor market. BigBoard Group is currently the largest domestic outdoor advertising operator.",caseLink:"/portfolio/bigboard"},{title:"Bigmedia",titleLink:"https://bigmedia.ua/uk",info:"The biggest agency specialized in sales of outdoor advertising in Ukraine."},{title:"Maincast",titleLink:"https://www.maincast.com/",info:"Organizer and stream-channel of esport events."},{title:"Unlock iPhone Service",info:"Web-site for unlocking your iPhone.",caseLink:"/portfolio/uis"}],concepts:[{title:"Alfa bank",info:"Mobile App redesign concept.",caseLink:"https://www.behance.net/gallery/69046265/Alfa-bank-online-banking"},{title:"Oschad bank",info:"Online Banking Dashboard design concept.",caseLink:"https://www.behance.net/gallery/58427387/Online-Banking-Dashboard"}],architecture:[{title:"Archimatika",info:"Architectural company.",caseLink:"/portfolio/archimatika"},{title:"Vertical",info:"Presentation Website for Real Estate.",caseLink:"/portfolio/vertical"},{title:"Residential area “Manhattan”",titleLink:"https://mymanhattan.com.ua/uk",info:"Presentation Website for Real Estate.",caseLink:"/portfolio/manhattan"}]}}},c=Object(r.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"o-wrapper"},[n("div",{staticClass:"c-cases"},[e._m(0),n("div",{staticClass:"c-cases__list o-main-flex o-main-flex--wrap"},[n("div",{staticClass:"column"},[n("div",{staticClass:"column-content"},[n("h4",{staticClass:"column-heading"},[e._v("Startups")]),e._l(e.startups,function(e){return n("project",{key:e.title,attrs:{item:e}})})],2)]),n("div",{staticClass:"column"},[n("div",{staticClass:"column-content"},[n("h4",{staticClass:"column-heading"},[e._v("Cryptocurrency ICO projects")]),e._l(e.ico,function(e){return n("project",{key:e.title,attrs:{item:e}})})],2),n("div",{staticClass:"column-content"},[n("h4",{staticClass:"column-heading"},[e._v("Concepts")]),e._l(e.concepts,function(e){return n("project",{key:e.title,attrs:{item:e}})})],2)]),n("div",{staticClass:"column"},[n("div",{staticClass:"column-content"},[e._m(1),e._l(e.market,function(e){return n("project",{key:e.title,attrs:{item:e}})})],2),n("div",{staticClass:"column-content"},[n("h4",{staticClass:"column-heading"},[e._v("Architecture and construction")]),e._l(e.architecture,function(e){return n("project",{key:e.title,attrs:{item:e}})})],2)])])]),n("div",{staticClass:"c-text-container c-text-container--cases-presentation"},[n("div",{staticClass:"download"},[n("div",{staticClass:"download-header"},[n("showreel",{attrs:{id:344057474}})],1),n("p",[e._v("Watch the latest presentation of our company")])]),n("p",[e._v("Working with clients from all over the world helped us gain a unique set of skills: adaptability, cultural understanding and problem-solving in new and changing environments. In an increasingly global economy, we’re brave enough to think widely.")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-cases__header"},[t("p",[this._v("Shortlist of latest projects in the next categories")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{staticClass:"column-heading"},[this._v("Projects for "),t("br"),this._v(" the Ukrainian market")])}],!1,null,null,null);t.default=c.exports}}]);