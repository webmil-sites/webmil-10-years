(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(t,e,n){"use strict";var c={data:function(){return{year:(new Date).getFullYear()}}},o=n(8),component=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"c-footer"},[e("div",{staticClass:"o-wrapper"},[e("div",{staticClass:"o-main-flex o-main-flex--no-wrap o-main-flex--justify-content-between o-main-flex--align-items-center"},[e("p",{staticClass:"copyright js-anim-first"},[this._v("© Webmil, "+this._s(this.year))]),e("nuxt-link",{staticClass:"webmil js-anim-second",attrs:{to:"http://webmil.eu/"}})],1)])])},[],!1,null,null,null);e.a=component.exports},152:function(t,e,n){"use strict";n.r(e);var c=n(144),o={props:["contacts"]},l=n(8),r=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-contacts-block"},[n("h6",[t._v(t._s(t.contacts.title))]),n("div",{staticClass:"content"},[n("a",{attrs:{href:t.contacts.email}},[t._v(t._s(t.contacts.email))]),n("br"),n("a",{attrs:{href:"tel:"+t.contacts.phone}},[t._v(" "+t._s(t.contacts.phone))])])])},[],!1,null,null,null).exports,m={data:function(){return{icos:[{id:"facebook",ico:"/facebook-ico.png",link:"/"},{id:"dribbble",ico:"/dribbble-ico.png",link:"/"},{id:"behance",ico:"/behance-ico.png",link:"/"},{id:"medium",ico:"/medium-ico.png",link:"/"}]}},methods:{background:function(t){return"background-image: url('".concat(t,"')")}}},f=Object(l.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-social-list o-main-flex o-main-flex--no-wrap o-main-flex--justify-content-start o-main-flex--align-items-center"},t._l(t.icos,function(e){return n("div",{key:e.id,staticClass:"c-social-list__item",attrs:{id:e.id}},[n("a",{staticClass:"ico",style:t.background(e.ico),attrs:{href:e.link,src:e.ico}})])}),0)},[],!1,null,null,null).exports,d={data:function(){return{contactsSales:{id:"sales",title:"Sales",phone:"097 74 74 774",email:"mailgmail@webmil.eu"},contactsInfo:{id:"info",title:"Info",phone:"097 74 74 774",email:"mailgmail@webmil.eu"},contactsHr:{id:"hr",title:"Hr",phone:"",email:"mailgmail@webmil.eu"}}},components:{AppFooter:c.a,ContactsBlock:r,SocialList:f}},h=Object(l.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"c-contacts-page o-main-flex o-main-flex--no-wrap o-main-flex--align-items-center"},[e("div",{staticClass:"o-wrapper o-wrapper--contacts"},[e("h5",[this._v("Contact us")]),e("div",{staticClass:"o-main-flex o-main-flex--no-wrap o-main-flex--justify-content-between"},[e("div",{staticClass:"o-main-flex__item"},[this._m(0),e("contacts-block",{attrs:{contacts:this.contactsSales}})],1),e("div",{staticClass:"o-main-flex__item"},[e("contacts-block",{staticClass:"c-contacts-block--mb",attrs:{contacts:this.contactsInfo}}),e("contacts-block",{staticClass:"c-contacts-block--mb",attrs:{contacts:this.contactsHr}}),e("social-list")],1)])])]),e("app-footer")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("Drop us "),e("span",[this._v("a line")]),this._v(" to collaborate")])}],!1,null,null,null);e.default=h.exports}}]);
