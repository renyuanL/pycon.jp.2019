(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{309:function(t,e,o){var content=o(497);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("5f09e306",content,!0,{sourceMap:!1})},310:function(t,e,o){var content=o(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("6d7ec316",content,!0,{sourceMap:!1})},311:function(t,e,o){var content=o(501);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("5066282a",content,!0,{sourceMap:!1})},312:function(t,e,o){var content=o(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("0a9d436b",content,!0,{sourceMap:!1})},313:function(t,e,o){var content=o(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("558a70aa",content,!0,{sourceMap:!1})},314:function(t,e,o){var content=o(507);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("98fd1618",content,!0,{sourceMap:!1})},315:function(t,e,o){var content=o(509);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("829d7b40",content,!0,{sourceMap:!1})},496:function(t,e,o){"use strict";var n=o(309);o.n(n).a},497:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,".tt-card[data-v-1f76dec8]{height:100%;position:relative}.bottom[data-v-1f76dec8]{position:absolute;bottom:5px}.v-dialog__container[data-v-1f76dec8]{display:none!important}.level.all[data-v-1f76dec8]{border:1px solid #76b3f2;color:#76b3f2}.level.beginner[data-v-1f76dec8]{border:1px solid #6ab26a;color:#6ab26a}.level.intermediate[data-v-1f76dec8]{border:1px solid #f0980c;color:#f0980c}.level.advanced[data-v-1f76dec8]{border:1px solid #ea4d6b;color:#ea4d6b}",""])},498:function(t,e,o){"use strict";var n=o(310);o.n(n).a},499:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,".v-dialog__container[data-v-bbb319f0]{display:none!important}",""])},500:function(t,e,o){"use strict";var n=o(311);o.n(n).a},501:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,".day[data-v-26ffe3c6]{display:none}.top-sticky .day[data-v-26ffe3c6]{display:inline}@media only screen and (min-width:1200px){.bottom-border[data-v-26ffe3c6]{border-bottom:1px solid #cdcfd4}.parent[data-v-26ffe3c6]{position:relative}.time-caption[data-v-26ffe3c6]{position:absolute;left:-46px;top:-14px}}@media only screen and (max-width:1200px){.time-caption[data-v-26ffe3c6]{position:-webkit-sticky;position:sticky;padding:12px 0;background-color:#e9ebf0}}",""])},502:function(t,e,o){"use strict";var n=o(312);o.n(n).a},503:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,"@media only screen and (max-width:1200px){.flex[data-v-4bbe5cda]{background-color:#fff!important}}",""])},504:function(t,e,o){"use strict";var n=o(313);o.n(n).a},505:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,"@media only screen and (max-width:1200px){.flex[data-v-05770eae]{background-color:#fff!important}}",""])},506:function(t,e,o){"use strict";var n=o(314);o.n(n).a},507:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,".timetable .v-ripple__container{display:none}",""])},508:function(t,e,o){"use strict";var n=o(315);o.n(n).a},509:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,".tab[data-v-03b74556]{border-bottom:2px solid #e9ebf0}.tab.active[data-v-03b74556]{border:2px solid #e9ebf0;border-bottom:none}.v-btn[data-v-03b74556]:before{display:none}@media only screen and (max-width:959px){.container[data-v-03b74556]{padding:16px 8px}}",""])},631:function(t,e,o){"use strict";o.r(e);o(26);var n=o(340),l=o(1),r=(o(156),o(50),o(31),o(284)),c=o(290),d={name:"timetable-card",props:["session"],components:{SessionModalWindow:c.a},methods:{ClassForLevel:function(t){switch(t){case"All":return"all";case"Beginner":return"beginner";case"Intermediate":return"intermediate";case"Advanced":return"advanced"}},onClick:function(){this.addParamsToLocation({sessionId:this.session.id})},addParamsToLocation:function(t){window.history.pushState({},null,this.$router.history.base+this.$route.path+"?"+Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}},watch:{dialog:function(t,e){t||window.history.go(-1)}},data:function(){return{dialog:!1,roomsMaster:r.a}}},m=(o(496),o(2)),f=Object(m.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"pa-1 tt-card",attrs:{height:"100%"}},[o("v-layout",{staticClass:"align-top py-1"},[o("v-flex",{staticClass:"shrink"},[o("span",{staticClass:"white--text px-1 font-weight-bold text-uppercase caption",class:"en"===t.session.lang_of_talk?"themeBlue":"themeRed"},[t._v(t._s(t.session.lang_of_talk))])]),o("v-spacer"),o("v-flex",{staticClass:"shrink"},[o("v-layout",{staticClass:"column"},[t.$vuetify.breakpoint.smAndDown?o("v-flex",[o("div",{staticClass:"caption blueGrey1--text"},[t._v(t._s(t.$t("rooms."+t.roomsMaster[t.session.room_id])))])]):t._e(),o("v-flex",[o("div",{staticClass:"caption blueGrey1--text"},[t._v(t._s(t.$t("sessions."+t.session.talk_format)))])])],1)],1)],1),o("div",{staticClass:"py-1 caption font-weight-bold"},[t._v(t._s(t.session.title))]),o("div",{staticClass:"py-1 caption font-weight-thin grey--text"},[t._v(t._s(t.session.name))]),t.session.audience_level?o("v-layout",{staticClass:"justify-end py-2"},[o("v-flex",{staticClass:"shrink caption font-weight-thin grey--text"},[o("span",[t._v(t._s(t.$t("timetable.level"))+" :")]),o("span",{staticClass:"ml-1 px-1 level",class:t.ClassForLevel(t.session.audience_level)},[t._v(t._s(t.session.audience_level))])])],1):t._e(),o("v-layout",{staticClass:"justify-center wrap"},[t.session.youtube?o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:t.session.youtube,target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fab fa-youtube")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.youtube")))])],1)],1):t._e(),t.session.presentation?o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:t.session.presentation,target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fas fa-tv")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.presentation")))])],1)],1):t._e()],1),o("div",{staticClass:"pt-3 pb-3"}),o("div",{staticClass:"bottom py-1",staticStyle:{width:"95%"}},[o("v-divider"),o("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("a",t._g({on:{click:t.onClick}},n),[o("div",{staticClass:"pt-1 text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.detail")))])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("SessionModalWindow",{attrs:{session:t.session},on:{close:function(e){t.dialog=!1}}})],1)],1)],1)},[],!1,null,"1f76dec8",null).exports,v={name:"timetable-simple-card",components:{SessionModalWindow:c.a},props:{roomIds:{type:Array,default:function(){return[]}},seeDetail:{type:Boolean,default:!1},session:{type:Object,default:function(){}}},data:function(){return{dialog:!1,roomsMaster:r.a}},computed:{roomText:function(){var t=this;return this.roomIds.map(function(e){return t.$t("rooms."+r.a[e])}).join(",")}}},y=(o(498),Object(m.a)(v,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"pa-1",attrs:{height:"100%"}},[t.$vuetify.breakpoint.smAndDown&&t.roomIds.length>0?o("v-layout",{staticClass:"align-top py-1"},[o("v-flex",{staticClass:"text-xs-center"},[o("div",{staticClass:"caption blueGrey1--text"},[t._v(t._s(t.roomText))])])],1):t._e(),o("div",{staticClass:"text-md-center text-xs-center font-weight-bold body-2"},[t._t("default")],2),o("div",{staticClass:"text-md-left text-xs-left caption grey--text",staticStyle:{"white-space":"pre-line"}},[t._t("detail")],2),o("div",{staticClass:"text-md-center text-xs-center font-weight-bold body-2"},[t._t("seeDetail",[t.seeDetail?[o("div",{staticClass:"detail py-1"},[o("v-divider"),o("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("a",t._g({},n),[o("div",{staticClass:"pt-1 text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.detail")))])])]}}],null,!1,1603818919),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("SessionModalWindow",{attrs:{session:t.session},on:{close:function(e){t.dialog=!1}}})],1)],1)]:t._e()])],2)],1)},[],!1,null,"bbb319f0",null).exports),x=o(49),_={name:"timetable-row",props:{time:{default:null},"no-border":{default:!1},day:{type:String}}},C=(o(500),Object(m.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"parent",class:t.noBorder?"":"bottom-border",attrs:{"sticky-container":""}},[t.time?o("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"time-caption subheading text-xs-center",class:{"font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[o("span",{staticClass:"caption grey--text day pr-2"},[t._v(t._s(t.day))]),o("span",[t._v(t._s(t.time))])]):t._e(),t._t("default")],2)},[],!1,null,"26ffe3c6",null).exports),h=l.default.extend({name:"time-table",props:["sessions"],components:{card:f,row:C,"simple-card":y,"configurable-link":x.a},data:function(){return{rooms:[1006,1001,1002,1003,1004,1005],roomsMaster:r.a,day:this.$t("days.day1")+" 09/16"}},computed:{jobfairSeseion:function(){return this.sessions.filter(function(s){return 501==s.id})[0]},keynoteSeseion:function(){return this.sessions.filter(function(s){return 502==s.id})[0]},ltSeseion:function(){return this.sessions.filter(function(s){return 504==s.id})[0]}},created:function(){},methods:{matchSession:function(t,e){var o=this.sessions.filter(function(s){return s.room_id==t&&s.no==e});return o.length>0?o[0]:null}}}),w=(o(502),Object(m.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"schedule-table",class:{"pl-4":t.$vuetify.breakpoint.mdAndUp}},[t.$vuetify.breakpoint.mdAndUp?o("row",[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 text-md-center"},[o("p",{staticClass:"body-2 font-weight-bold"},[t._v(t._s(t.$t("rooms."+t.roomsMaster[e])))])])}),1)],1):t._e(),o("row",{attrs:{time:"09:00",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"pa-2 text-md-center text-xs-center subheading"},[t._v(t._s(t.$t("timetable.open")))])],1)],1),o("row",{attrs:{time:"09:45",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.opening")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"md2"})})],2)],1),o("row",{attrs:{time:"10:10",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006],session:t.keynoteSeseion},scopedSlots:t._u([{key:"detail",fn:function(){return[o("p",[t._v(t._s(t.keynoteSeseion.name))]),o("p",[t._v(t._s(t.keynoteSeseion.abstract))]),o("v-layout",{staticClass:"justify-center wrap"},[t.keynoteSeseion.youtube?o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:t.keynoteSeseion.youtube,target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fab fa-youtube")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.youtube")))])],1)],1):t._e(),t.keynoteSeseion.presentation?o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:t.keynoteSeseion.presentation,target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fas fa-tv")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.presentation")))])],1)],1):t._e()],1)]},proxy:!0}])},[o("p",{staticClass:"my-0"},[t._v(t._s(t.$t("timetable.keynote"))+" ")]),o("p",{staticClass:"my-0"},[t._v(t._s(t.keynoteSeseion.title))]),o("p",{staticClass:"my-0 body-2 font-weight-normal"},[t._v("("+t._s(t.$t("timetable.interpret"))+")")])])],1)],1)],1),o("row",{attrs:{time:"11:25",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,1)?o("card",{attrs:{session:t.matchSession(e,1)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"12:10",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md4 pa-2"},[o("simple-card",{attrs:{roomIds:[1006,1001]}},[o("p",{class:{"pt-3":t.$vuetify.breakpoint.smAndDown,"pt-5":t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(t.$t("timetable.lunch")))])])],1),o("v-flex",{staticClass:"xs12 sm12 md2 pa-2"},[o("simple-card",{attrs:{roomIds:[1002],session:t.jobfairSeseion,seeDetail:!0},scopedSlots:t._u([{key:"detail",fn:function(){return[t._v(" "+t._s(t.$t("timetable.jobfair_desc")))]},proxy:!0}])},[t._v(t._s(t.$t("timetable.jobfair")))])],1),o("v-flex",{staticClass:"xs12 sm12 md6 pa-2"},[o("simple-card",{attrs:{roomIds:[1003,1004,1005]}},[o("p",{class:{"pt-3":t.$vuetify.breakpoint.smAndDown,"pt-5":t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(t.$t("timetable.lunch")))])])],1)],1)],1),o("row",{attrs:{time:"13:40",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,2)?o("card",{attrs:{session:t.matchSession(e,2)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"14:40",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,3)?o("card",{attrs:{session:t.matchSession(e,3)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"15:10",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]},scopedSlots:t._u([{key:"seeDetail",fn:function(){return[o("div",{staticClass:"pt-1 pb-1"}),o("div",{staticClass:"bottom py-1",staticStyle:{width:"95%"}},[o("v-divider"),o("configurable-link",{attrs:{path:"/sessions?category=poster"}},[o("div",{staticClass:"pt-1 text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.poster_link")))])])],1)]},proxy:!0}])},[t._v(t._s(t.$t("timetable.poster"))+" / "+t._s(t.$t("timetable.coffee")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"md2"})})],2)],1),o("row",{attrs:{time:"16:00",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,4)?o("card",{attrs:{session:t.matchSession(e,4)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"16:30",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,5)?o("card",{attrs:{session:t.matchSession(e,5)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"17:00",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006],session:t.ltSeseion},scopedSlots:t._u([{key:"detail",fn:function(){return[t._v(t._s(t.ltSeseion.abstract)),o("v-layout",{staticClass:"justify-center wrap"},[o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:"https://www.youtube.com/watch?v=UShlTE8wdzU",target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fab fa-youtube")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.youtube")))])],1)],1)],1)]},proxy:!0},{key:"seeDetail",fn:function(){return[o("div",{staticClass:"pt-1 pb-1"}),o("div",{staticClass:"bottom py-1",staticStyle:{width:"95%"}},[o("v-divider"),o("configurable-link",{attrs:{path:"/sessions?category=lt"}},[o("div",{staticClass:"pt-1 text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.lt_link")))])])],1)]},proxy:!0}])},[t._v(t._s(t.$t("timetable.lt")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"xs12 sm12 md2"})})],2)],1),o("row",{attrs:{time:"17:20",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.photo")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"xs12 sm12 md2"})})],2)],1),o("row",{attrs:{time:"17:30",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.smlt"))+" ＆ "+t._s(t.$t("timetable.closing")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"xs12 sm12 md2"})})],2)],1),o("row",{attrs:{time:"18:00","no-border":!0,day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 pa-2 text-md-center text-xs-center subheading"},[t._v(t._s(t.$t("timetable.party")))])],1)],1),o("row",{attrs:{time:"20:00"}})],1)},[],!1,null,"4bbe5cda",null).exports),k=l.default.extend({name:"time-table",props:["sessions"],components:{card:f,row:C,"simple-card":y,"configurable-link":x.a},data:function(){return{rooms:[1006,1001,1002,1003,1004,1005],roomsMaster:r.a,day:this.$t("days.day2")+"09/17"+this.$t("weekday.tue")}},created:function(){},computed:{keynoteSeseion:function(){return this.sessions.filter(function(s){return 503==s.id})[0]},ltSeseion:function(){return this.sessions.filter(function(s){return 505==s.id})[0]}},methods:{matchSession:function(t,e){var o=this.sessions.filter(function(s){return s.room_id==t&&s.no==e});return o.length>0?o[0]:null}}}),$=(o(504),Object(m.a)(k,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"schedule-table",class:{"pl-4":t.$vuetify.breakpoint.mdAndUp}},[t.$vuetify.breakpoint.smAndUp?o("row",[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 text-md-center"},[o("p",{staticClass:"body-2 font-weight-bold"},[t._v(t._s(t.$t("rooms."+t.roomsMaster[e])))])])}),1)],1):t._e(),o("row",{attrs:{time:"09:00",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"pa-2 text-md-center text-xs-center subheading"},[t._v(t._s(t.$t("timetable.open")))])],1)],1),o("row",{attrs:{time:"09:45",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.opening")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"md2"})})],2)],1),o("row",{attrs:{time:"10:00",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006],session:t.keynoteSeseion},scopedSlots:t._u([{key:"detail",fn:function(){return[o("p",[t._v(t._s(t.keynoteSeseion.name))]),o("p",[t._v(t._s(t.keynoteSeseion.abstract))]),o("v-layout",{staticClass:"justify-center wrap"},[t.keynoteSeseion.youtube?o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:t.keynoteSeseion.youtube,target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fab fa-youtube")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.youtube")))])],1)],1):t._e(),t.keynoteSeseion.presentation?o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:t.keynoteSeseion.presentation,target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fas fa-tv")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.presentation")))])],1)],1):t._e()],1)]},proxy:!0}])},[o("p",{staticClass:"my-0"},[t._v(t._s(t.$t("timetable.keynote"))+" ")]),o("p",{staticClass:"my-0"},[t._v(t._s(t.keynoteSeseion.title))]),o("p",{staticClass:"my-0 body-2 font-weight-normal"},[t._v("("+t._s(t.$t("timetable.interpret"))+")")])])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"xs12 sm12 md2"})})],2)],1),o("row",{attrs:{time:"11:15",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,1)?o("card",{attrs:{session:t.matchSession(e,1)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"12:00",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md12 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006,1001,1002,1003,1004,1005]}},[t._v(t._s(t.$t("timetable.lunch")))])],1)],1)],1),o("row",{attrs:{time:"13:30",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,2)?o("card",{attrs:{session:t.matchSession(e,2)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"14:15",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,3)?o("card",{attrs:{session:t.matchSession(e,3)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"14:45",day:t.day}},[o("v-layout",{staticClass:"wrap"},[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.poster"))+" / "+t._s(t.$t("timetable.coffee"))),o("div",{staticClass:"pt-1 pb-1"}),o("div",{staticClass:"bottom py-1",staticStyle:{width:"95%"}},[o("v-divider"),o("configurable-link",{attrs:{path:"/sessions?category=poster"}},[o("div",{staticClass:"pt-1 text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.poster_link")))])])],1)])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"xs12 sm12 md2"})})],2)],1),o("row",{attrs:{time:"15:45",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,4)?o("card",{attrs:{session:t.matchSession(e,4)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"16:15",day:t.day}},[o("v-layout",{staticClass:"wrap"},t._l(t.rooms,function(e,n){return o("v-flex",{key:n,staticClass:"xs12 sm12 md2 pa-2",class:n%2==0?"blueGrey2":""},[t.matchSession(e,5)?o("card",{attrs:{session:t.matchSession(e,5)}}):t._e()],1)}),1)],1),o("row",{attrs:{time:"16:45",day:t.day}},[o("v-layout",[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006],session:t.ltSeseion},scopedSlots:t._u([{key:"detail",fn:function(){return[t._v(t._s(t.ltSeseion.abstract))]},proxy:!0},{key:"seeDetail",fn:function(){return[o("v-layout",{staticClass:"justify-center wrap"},[o("v-flex",{staticClass:"text-xs-center text-md-center"},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{small:"",round:"",flat:"",href:"https://www.youtube.com/watch?v=UShlTE8wdzU",target:"_blank"}},[o("v-icon",{attrs:{small:""}},[t._v("fab fa-youtube")]),o("span",{staticClass:"caption pl-1"},[t._v(t._s(t.$t("basic.youtube")))])],1)],1)],1),o("div",{staticClass:"pt-1 pb-1"}),o("div",{staticClass:"bottom py-1",staticStyle:{width:"95%"}},[o("v-divider"),o("configurable-link",{attrs:{path:"/sessions?category=lt"}},[o("div",{staticClass:"pt-1 text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.lt_link")))])])],1)]},proxy:!0}])},[t._v(t._s(t.$t("timetable.lt")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"md2"})})],2)],1),o("row",{attrs:{time:"17:20",day:t.day}},[o("v-layout",[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.smlt")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"md2"})})],2)],1),o("row",{attrs:{time:"17:40",day:t.day}},[o("v-layout",[o("v-flex",{staticClass:"xs12 sm12 md2 pa-2 blueGrey2"},[o("simple-card",{attrs:{roomIds:[1006]}},[t._v(t._s(t.$t("timetable.photo2")))])],1),t._l(5,function(t,e){return o("v-flex",{key:e,staticClass:"md2"})})],2)],1),o("row",{attrs:{time:"17:50","no-border":!0,day:t.day}},[o("v-layout",[o("v-flex",{staticClass:"pa-2 text-md-center text-xs-center subheading"},[t._v(t._s(t.$t("timetable.closing")))])],1)],1),o("row",{attrs:{time:"18:20",day:t.day}})],1)},[],!1,null,"05770eae",null).exports),S={name:"tab-button",props:["day","date","weekday","isMobile","holiday"]},D=Object(m.a)(S,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-button"},[t.isMobile?[o("span",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.day))]),o("span",{staticClass:"body-2 ml-1 font-weight-bold"},[t._v(t._s(t.date))]),o("span",{staticClass:"body-1 ml-1 font-weight-bold"},[t._v("("+t._s(t.weekday)+")")])]:[o("span",{staticClass:"subheading font-weight-bold"},[t._v(t._s(t.day))]),o("span",{staticClass:"headline ml-2 font-weight-bold"},[t._v(t._s(t.date))]),o("span",{staticClass:"subheading ml-2 font-weight-bold"},[t._v("("+t._s(t.weekday)+")")])]],2)},[],!1,null,null,null).exports,I=o(250),G=o(271),M=o(248),j=o(260),A=o(272),T=o(273),U=o(274),E=o(275),O=o(276),W={components:{PageHeader:I.a,TwoColumnsLayout:G.a,ButtonWithArrow:M.a,TalkCard:j.a,hs:A.a,ScheduleTable:T.a,EventHeader:U.a,EventPageIndex:E.a,Supports:O.a,TimeTableDay1:w,TimeTableDay2:$,TabButton:D,SessionModalWindow:c.a},head:function(){return{title:this.$t("timetable.title")}},data:function(){return{activeDay:1,sessions:n,dialog:!1,missingDialog:!1,session:n[0]}},created:function(){var t=this;if(this.$route.query.sessionId){var e=n.filter(function(s){return s.id==t.$route.query.sessionId})[0];if(e){this.session=e,this.dialog=!0;try{this.activeDay=parseInt(e.day)}catch(t){}}else this.missingDialog=!0}},watch:{dialog:function(t,e){t||window.history.pushState({},null,this.$router.history.base+this.$route.path)},missingDialog:function(t,e){t||window.history.pushState({},null,this.$router.history.base+this.$route.path)}},computed:{day1Sessions:function(){return n.filter(function(s){return 1==s.day})},day2Sessions:function(){return n.filter(function(s){return 2==s.day})}}},B=(o(506),o(508),Object(m.a)(W,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"timetable"}},[o("page-header",{attrs:{ja:"タイムテーブル",en:"Timetable"}}),o("v-container",[o("v-layout",{staticClass:"my-4"},[o("v-flex",{staticClass:"text-md-left font-weight-bold"},[t._v(t._s(t.$t("timetable.note")))])],1),o("v-layout",{staticClass:"tabs timetable wrap"},[o("v-flex",{staticClass:"xs6 text-md-center tab",class:1===t.activeDay?"active":""},[o("v-btn",{class:1===t.activeDay?"themeColor3--text":"",attrs:{block:"",flat:""},on:{click:function(e){t.activeDay=1}}},[o("tab-button",{attrs:{day:t.$t("days.day1"),date:"09/16",weekday:t.$t("weekday.mon"),isMobile:t.$vuetify.breakpoint.smAndDown}})],1)],1),o("v-flex",{staticClass:"xs6 text-md-center tab",class:2===t.activeDay?"active":""},[o("v-btn",{class:2===t.activeDay?"themeColor3--text":"",attrs:{block:"",flat:""},on:{click:function(e){t.activeDay=2}}},[o("tab-button",{attrs:{day:t.$t("days.day2"),date:"09/17",weekday:t.$t("weekday.tue"),isMobile:t.$vuetify.breakpoint.smAndDown}})],1)],1)],1),o("v-layout",{staticClass:"tab-item"},[1===t.activeDay?o("v-flex",{staticClass:"mt-2",class:{"mt-5":t.$vuetify.breakpoint.mdAndUp}},[o("time-table-day-1",{attrs:{sessions:t.day1Sessions}})],1):t._e(),2===t.activeDay?o("v-flex",{staticClass:"mt-2",class:{"mt-5":t.$vuetify.breakpoint.mdAndUp}},[o("time-table-day-2",{attrs:{sessions:t.day2Sessions}})],1):t._e()],1)],1),o("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("SessionModalWindow",{attrs:{session:t.session},on:{close:function(e){t.dialog=!1}}})],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.missingDialog,callback:function(e){t.missingDialog=e},expression:"missingDialog"}},[o("v-card",[o("v-card-text",{staticClass:"title font-weight-bold text-md-center text-xs-center"},[t._v(t._s(t.$t("timetable.noSession")))])],1)],1)],1)},[],!1,null,"03b74556",null));e.default=B.exports}}]);