(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(e,t,n){"use strict";n.r(t);var r={props:["text"]},o=n(6),c=Object(o.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-career-header"},[t("div",{staticClass:"c-career-header__wrap"},[t("h2",[t("span",[this._v(this._s(this.text))])])])])},[],!1,null,null,null).exports,l={props:["title","requirements"],data:function(){return{show:!0}}},d=Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-vacancy-list"},[n("h4",{on:{click:function(t){e.show=!e.show}}},[e._v(e._s(e.title))]),n("transition",{attrs:{name:"u-transitions-fade"}},[n("ul",{class:{show:!e.show}},e._l(e.requirements,function(t){return n("li",[e._v(e._s(t))])}),0)])],1)},[],!1,null,null,null).exports,m={props:["vacancy"],components:{RequirementsList:d}},h={props:["camp"],components:{RequirementsList:d}},f={mounted:function(){this.$ga.page("/career")},data:function(){return{show:!1,vacancies:[{title:"Trainee/Intern/Junior Ruby Developer",description:"If you are passionate about developing and ready to become a member of our professional team join us! This a good chance to get new knowledge and improve your skills in programming. We are an open-minded and progressive company that enjoys exciting challenges and innovation. You will have a chance to grow your technical and soft skills, and we will invest in your professional training, and allow you to grow your career.",requirements:["Basic knowledge and experience with HTML, CSS, JavaScript","Databases — SQL and MongoDB","OOP/OOD principles","English intermediate+","Ruby on Rails knowledge","Experience with PHP, Python, Java, C++"],benefits:["Office at the centre of IF;","Participation in conferences and seminars;","Foreign languages courses;","Endless coffee and tea;","Football and table tennis classes;","Free parking."],link:"https://docs.google.com/forms/d/e/1FAIpQLScZra5uKxKTSpZ5NgMLjPoykYJ2IaHQ0r83bLYPO6bkp4pdIw/viewform"},{title:"Middle/Senior Ruby developer",description:"If you are passionate about developing and ready to become a member of our professional team join us! This a good chance to get new knowledge and improve your skills in programming. We are an open-minded and progressive company that enjoys exciting challenges and innovation. You will have a chance to grow your technical and soft skills, and we will invest in your professional training, and allow you to grow your career.",requirements:["3+ years of relevant experience in the IT industry;","Understanding algorithms, data structures;","3+ years of experience with Ruby (Ruby on Rails);","Familiar with RESTful APIs standards;","Experience with PostgreSQL and MongoDB;","Experience with RabbitMQ;","Microservice architecture;","Experience with Unit testing;","English level — Intermediate or higher."],benefits:["Office at the centre of IF;","Participation in conferences and seminars;","Foreign languages courses;","Endless coffee and tea;","Football and table tennis classes;","Free parking."],link:"https://docs.google.com/forms/d/e/1FAIpQLScZra5uKxKTSpZ5NgMLjPoykYJ2IaHQ0r83bLYPO6bkp4pdIw/viewform"},{title:"Middle/Senior JavaScript Developer",description:"If you are passionate about developing and ready to become a member of our professional team join us! This a good chance to get new knowledge and improve your skills in programming.We are an open-minded and progressive company that enjoys exciting challenges and innovation. You will have a chance to grow your technical and soft skills and we will invest into your professional training, and allow you to grow your career.",requirements:["Experience with Vuejs/Nuxt/Vuex;","Work with git at merge, rebase and cherry-pick levels;","Understanding Node.js/Webpack and principles of HTTP;","Experience with Developing REST API;","ECMAScript 6;","Performance analysis/optimization;","Understanding CSS3/SASS, HTML5/Pug;","English level — Intermediate or higher;","Test creation."],benefits:["Office at the centre of IF;","Participation in conferences and seminars;","Foreign languages courses;","Endless coffee and tea;","Football and table tennis classes;","Free parking."],link:"https://docs.google.com/forms/d/e/1FAIpQLScZra5uKxKTSpZ5NgMLjPoykYJ2IaHQ0r83bLYPO6bkp4pdIw/viewform"}],camps:[{title:"Ruby camp 2.0",data:"",description:"Ruby Camp at Webmil is an annual educational program for those who want to be a part of the IT world. Most Ruby Camp graduates have become an integral part of Webmil team. We suggest our program to the ones with Ruby experience, whose wish is to improve their knowledge and skills, to spend six weeks at our company and try to develop an open-source project. Don’t miss a great opportunity to work with professionals!",requirements:["Industry-related experience 2+ years;","Experience with Photoshop, Illustrator, Fireworks, InDesign, Adobe XD, Acrobat and Sketch tools;","Knowledge of web markup languages (CSS, HTML);","Knowledge of web design, user experience strategies, and techniques;","Solid understanding in creating cross-browser web-based solutions;","Basic knowledge of iOS and Android design guidelines;","Creativity and ability to provide solutions;","Quick learner;","At least intermediate English level."],benefits:[],link:"https://docs.google.com/forms/d/1JpUTAVxyeH7SZoH_TzJDUxY7sTUWdtxGyj9Vvzyx3ik/edit",status:!1},{title:"Ruby camp 1.0",data:"",description:"Ruby Camp at Webmil is an annual educational program for those who want to be a part of the IT world. Most Ruby Camp graduates have become an integral part of Webmil team. We suggest our program to the ones with Ruby experience, whose wish is to improve their knowledge and skills, to spend six weeks at our company and try to develop an open-source project. Don’t miss a great opportunity to work with professionals!",requirements:["Industry-related experience 2+ years;","Experience with Photoshop, Illustrator, Fireworks, InDesign, Adobe XD, Acrobat and Sketch tools;","Knowledge of web markup languages (CSS, HTML);","Knowledge of web design, user experience strategies, and techniques;","Solid understanding in creating cross-browser web-based solutions;","Basic knowledge of iOS and Android design guidelines;","Creativity and ability to provide solutions;","Quick learner;","At least intermediate English level."],benefits:[],link:"https://docs.google.com/forms/d/1JpUTAVxyeH7SZoH_TzJDUxY7sTUWdtxGyj9Vvzyx3ik/edit",status:!1}]}},components:{CareerHeader:c,Vacancy:Object(o.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-vacancy o-main-flex o-main-flex--wrap o-main-flex--justify-content-between"},[n("div",{staticClass:"c-vacancy__name"},[n("h3",[e._v(e._s(e.vacancy.title))]),n("a",{staticClass:"career-btn o-main-flex o-main-flex--wrap o-main-flex--justify-content-center o-main-flex--align-items-center",attrs:{href:e.vacancy.link}},[e._v("Apply")])]),n("div",{staticClass:"c-vacancy__requirements"},[n("p",[e._v(e._s(e.vacancy.description))]),n("requirements-list",{attrs:{title:"Requirements:",requirements:e.vacancy.requirements}}),n("requirements-list",{staticClass:"benefits",attrs:{title:"Benefits and Perks:",requirements:e.vacancy.benefits}}),n("a",{staticClass:"career-btn-mobile o-main-flex o-main-flex--wrap o-main-flex--justify-content-center o-main-flex--align-items-center",attrs:{href:e.vacancy.link}},[e._v("Apply")])],1)])},[],!1,null,null,null).exports,Camp:Object(o.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-vacancy o-main-flex o-main-flex--wrap o-main-flex--justify-content-between"},[n("div",{staticClass:"c-vacancy__name"},[n("h3",[e._v(e._s(e.camp.title))]),n("p",[e._v(e._s(e.camp.data))]),e.camp.status?n("a",{staticClass:"career-btn o-main-flex o-main-flex--wrap o-main-flex--justify-content-center o-main-flex--align-items-center",attrs:{href:e.camp.link}},[e._v("Apply")]):n("div",{staticClass:"career-btn career-btn--expired o-main-flex o-main-flex--wrap o-main-flex--justify-content-center o-main-flex--align-items-center"},[e._v("Expired")])]),n("div",{staticClass:"c-vacancy__requirements"},[n("p",[e._v(e._s(e.camp.description))]),n("requirements-list",{attrs:{title:"Requirements:",requirements:e.camp.requirements}}),e.camp.status?n("a",{staticClass:"career-btn-mobile o-main-flex o-main-flex--wrap o-main-flex--justify-content-center o-main-flex--align-items-center",attrs:{href:e.camp.link}},[e._v("Apply")]):n("div",{staticClass:"career-btn-mobile career-btn-mobile--expired o-main-flex o-main-flex--wrap o-main-flex--justify-content-center o-main-flex--align-items-center"},[e._v("Expired")])],1)])},[],!1,null,null,null).exports}},v=Object(o.a)(f,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("career-header",{attrs:{text:"Career"}}),this._l(this.vacancies,function(e){return[t("vacancy",{attrs:{vacancy:e}})]}),t("career-header",{attrs:{text:"Education"}}),this._m(0),this._l(this.camps,function(e){return[t("camp",{attrs:{camp:e}})]}),this._m(1)],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-vacancy c-vacancy--about o-main-flex o-main-flex--wrap o-main-flex--justify-content-between"},[t("div",{staticClass:"c-vacancy__name"},[t("h3",[this._v("About")])]),t("div",{staticClass:"c-vacancy__requirements"},[t("p",[this._v("Learning is one of the most important investments we make in the future. Therefore, we organize various events where we educate people on the best practices of design and development. 200+ students have already graduated. University internship programs — our contribution to the education system. At Webmil, more experienced team members share their knowledge with colleagues. We believe that such activities will help us grow excellent specialists who can alter change the face of the web.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-vacancy c-vacancy--cv o-main-flex o-main-flex--wrap o-main-flex--justify-content-between"},[t("div",{staticClass:"c-vacancy__name c-text-container"},[t("div",{staticClass:"download download--cv"},[t("div",{staticClass:"download-header"},[t("h3",[this._v("Drop your CV")])]),t("a",{staticClass:"download-link",attrs:{href:"mailto:hr@webmil.eu"}},[this._v("hr@webmil.eu")])])]),t("div",{staticClass:"c-vacancy__requirements"},[t("p",[this._v("If there is no vacancy for you, send e-mail with your CV to take a place in our wait-list")])])])}],!1,null,null,null);t.default=v.exports}}]);