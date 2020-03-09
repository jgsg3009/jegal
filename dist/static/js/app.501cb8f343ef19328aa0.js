webpackJsonp([1],{"8lFo":function(e,t){},HS8S:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("zL8q"),l=n.n(s),o=(n("tvR6"),{name:"App",data:function(){return{isCollapse:!0}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},menuClick:function(e){var t=this.$router;"list"==e?t.push("/listPage"):"add"==e?t.push("/addTask"):"set"==e?t.push("/todoList/type1"):t.push("/user")}}}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[n("el-menu-item-group",[n("el-radio-group",{staticStyle:{"margin-bottom":"20px"},attrs:{size:"small"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[n("el-radio-button",{attrs:{label:!1}},[n("i",{staticClass:"el-icon-open"})]),e._v(" "),n("el-radio-button",{attrs:{label:!0}},[n("i",{staticClass:"el-icon-turn-off"})])],1),e._v(" "),n("el-menu-item",{attrs:{index:"1"},nativeOn:{click:function(t){return t.preventDefault(),e.menuClick("add")}}},[n("i",{staticClass:"el-icon-document-add"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" Add Task ")])]),e._v(" "),n("el-menu-item",{attrs:{index:"2"},nativeOn:{click:function(t){return t.preventDefault(),e.menuClick("list")}}},[n("i",{staticClass:"el-icon-s-unfold"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" Data List ")])]),e._v(" "),n("el-menu-item",{attrs:{index:"3"},nativeOn:{click:function(t){return t.preventDefault(),e.menuClick("dash")}}},[n("i",{staticClass:"el-icon-s-data"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" DashBoard ")])]),e._v(" "),n("el-menu-item",{attrs:{index:"4"},nativeOn:{click:function(t){return t.preventDefault(),e.menuClick("set")}}},[n("i",{staticClass:"el-icon-setting"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" Setting ")])])],1)],1),e._v(" "),n("el-container",[n("el-main",[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(o,i,!1,function(e){n("HS8S")},null,null).exports,u=n("/ocq"),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"users"},[n("h1",[e._v("사용자 목록")]),e._v(" "),e._l(e.users,function(t){return n("div",{staticClass:"user"},[n("div",[n("strong",[e._v(e._s(t.name)+", "+e._s(t.age))]),e._v(" "),n("router-link",{attrs:{to:{name:"detail",params:{id:t.id}}}},[e._v("더보기")])],1)])})],2)},staticRenderFns:[]},d=n("VU/8")({created:function(){var e=this;this.$http.get("/api/tests").then(function(t){e.users=t.data})},data:function(){return{users:[]}}},c,!1,null,null,null).exports,p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("사용자 상세목록")]),e._v(" "),e._l(e.users,function(t){return n("strong",[e._v(e._s(t.name)+","+e._s(t.age))])})],2)},staticRenderFns:[]},m=n("VU/8")({created:function(){var e=this,t=this.$route.params.id;this.$http.get("/api/tests/"+t).then(function(t){e.users=t.data})},data:function(){return{users:[]}}},p,!1,null,null,null).exports,v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"addTask"}},[n("div",{staticStyle:{margin:"20px"}}),e._v(" "),n("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.task}},[n("el-form-item",{attrs:{label:"업무명"}},[n("el-input",{model:{value:e.task.name,callback:function(t){e.$set(e.task,"name",t)},expression:"task.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"상태"}},[n("el-input",{model:{value:e.task.region,callback:function(t){e.$set(e.task,"region",t)},expression:"task.region"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"내용"}},[n("el-input",{model:{value:e.task.type,callback:function(t){e.$set(e.task,"type",t)},expression:"task.type"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"계획 종료일"}},[n("el-input",{model:{value:e.task.endDate,callback:function(t){e.$set(e.task,"endDate",t)},expression:"task.endDate"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"업무 상태"}},[n("el-input",{model:{value:e.task.condition,callback:function(t){e.$set(e.task,"condition",t)},expression:"task.condition"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"업무 중요도"}},[n("el-input",{model:{value:e.task.importance,callback:function(t){e.$set(e.task,"importance",t)},expression:"task.importance"}})],1),e._v(" "),n("button",{on:{click:e.save}},[e._v("save")])],1)],1)},staticRenderFns:[]};var f=n("VU/8")({data:function(){return{labelPosition:"right",task:{name:"",region:"",type:"",endDate:"",condition:"",importance:""}}},methods:{save:function(e){this.$http.post("/api/task/save",{task:this.task})}}},v,!1,function(e){n("8lFo")},null,null).exports,_={methods:{deleteRow:function(e,t){t.splice(e,1)},approvalData:function(e,t){alert("데이터 완료"),t.splice(e,1)}},data:function(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",content:"Los Angeles",endDate:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"490"}},[n("el-table-column",{attrs:{fixed:"",prop:"date",label:"시작일자",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{prop:"endDate",label:"계획 종료일",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"업무명",width:"200"}}),e._v(" "),n("el-table-column",{attrs:{prop:"content",label:"내용",width:"500"}}),e._v(" "),n("el-table-column",{attrs:{prop:"state",label:"상태",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"state",label:"남은 일자",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"버튼",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("\n        삭제\n      ")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),e.approvalData(t.$index,e.tableData)}}},[e._v("\n        완료\n      ")])]}}])})],1)},staticRenderFns:[]},g=n("VU/8")(_,h,!1,null,null,null).exports,k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"SignUp"}},[n("div",[e._v(" Sign Up ")]),e._v("\n    name : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{placeholder:"name"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),e._v(" "),n("br"),e._v("\n    ID : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{placeholder:"ID"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),e._v(" "),n("br"),e._v("\n    Password : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),n("button",{on:{click:e.signUp}},[e._v("SignUp")])])},staticRenderFns:[]},b=n("VU/8")({data:function(){return{user:{id:"",password:"",name:""}}},methods:{signUp:function(e){this.$http.post("/api/login/signUp",{user:this.user})}}},k,!1,null,null,null).exports;a.default.use(u.a);var C=new u.a({mode:"history",routes:[{path:"/todoList/type1",name:"signUp",component:b},{path:"/",name:"listPage",component:g},{path:"/user",name:"user",component:d},{path:"/user/:id",name:"detail",component:m},{path:"/listPage",name:"listPage",component:g},{path:"/addTask",name:"addTask",component:f},{path:"/addTask/save",name:"taskSave",component:f}]}),x=n("mtWM"),D=n.n(x);a.default.prototype.$http=D.a,a.default.use(l.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:C,components:{App:r},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.501cb8f343ef19328aa0.js.map