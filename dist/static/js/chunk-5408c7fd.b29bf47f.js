(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5408c7fd"],{3379:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"table-container"},[a("p",[t._v("權限")]),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"primary",circle:""},on:{click:t.createRole}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tabledata,border:""}},[a("el-table-column",{attrs:{label:"功能",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.roleLevel?[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.modifyRole(e.row)}}},[t._v("修改")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteRole(e.row.id)}}},[t._v("刪除")])]:void 0}}],null,!0)}),a("el-table-column",{attrs:{label:"權限名稱",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),a("el-table-column",{attrs:{label:"權限"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.roles))]}}])})],1),a("Dialog",{ref:"dialog",on:{initData:t.initData}})],1)},o=[],r=a("2909"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.title+"權限","before-close":t.handleClose,visible:t.dialogFormVisible,width:"60%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.formData}},[a("el-form-item",{attrs:{label:"權限名稱","label-width":t.formLabelWidth}},[a("el-input",{staticClass:"form-width",attrs:{autocomplete:"off",placeholder:"權限名稱"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"權限","label-width":t.formLabelWidth}},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.roleList,(function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.name,name:e.name}},[a("el-checkbox-group",{model:{value:t.formData.roles,callback:function(e){t.$set(t.formData,"roles",e)},expression:"formData.roles"}},t._l(e.role,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}})})),1)],1)})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),"新增"===t.title?a("el-button",{attrs:{type:"primary"},on:{click:t.createRole}},[t._v("建 立")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateRole}},[t._v("更 新 ")])],1)],1)],1)},l=[],s=(a("c975"),a("a15b"),a("b0c0"),a("ac1f"),a("1276"),a("fd85")),c=[{name:"玩家資料",role:["查詢帳號資訊","查詢遊戲歷程"]},{name:"統計數據",role:["查詢活躍帳戶","查詢留存統計","查詢營收付費"]},{name:"營運功能",role:["查詢線上公告","查詢發送物品","查詢活動序號","查詢帳號停權","修改線上公告","修改發送物品","修改活動序號","修改帳號停權"]},{name:"帳號權限",role:["查詢管理帳號","查詢權限設定","修改管理帳號","修改權限設定"]}],u=["查詢帳號資訊","查詢活躍帳戶","查詢線上公告","查詢管理帳號"];function d(){return c}function f(){return u}var m={data:function(){return{formData:{roles:f()},dialogFormVisible:!1,formLabelWidth:"80px",title:"",roleList:d(),activeName:"玩家資料"}},methods:{resetFormData:function(){this.formData={id:"",name:"",roleLevel:"",roles:f()}},handleClose:function(){this.loading=!1,this.resetFormData(),this.dialogFormVisible=!1},handleOpen:function(t,e){if(this.dialogFormVisible=!0,this.title=t,"修改"===t){this.formData=Object.assign({},e);var a=this.formData.roles;this.formData.roles=a.split(",")}},createRole:function(){var t=this,e=new FormData;e.append("name",this.formData.name),e.append("roles",this.formData.roles.join()),Object(s["a"])(e).then((function(e){e.data.success?(t.$emit("initData"),t.$message.success(e.data.msg)):t.$message.warning(e.data.msg),t.dialogFormVisible=!1})).catch((function(t){console.log(t)}))},updateRole:function(){var t=this,e=new FormData;e.append("name",this.formData.name),e.append("roles",this.formData.roles.join()),e.append("id",this.formData.id),Object(s["g"])(e).then((function(e){e.data.success?(t.$emit("initData"),t.$message.success(e.data.msg)):t.$message.warning(e.data.msg),t.dialogFormVisible=!1})).catch((function(t){console.log(t)}))},defaultPage:function(t){var e=f();return!(e.indexOf(t)<0)}}},b=m,h=(a("4e14"),a("2877")),p=Object(h["a"])(b,i,l,!1,null,"b119056c",null),g=p.exports,v={name:"AuthoritySetting",components:{Dialog:g},data:function(){return{tabledata:[]}},mounted:function(){this.initData()},created:function(){},methods:{initData:function(){var t=this;Object(s["e"])().then((function(e){e.data.success?t.tabledata=Object(r["a"])(e.data.content):(t.tabledata=[],t.$message.warning(e.data.msg))})).catch((function(t){console.log(t)}))},createRole:function(){this.$refs.dialog.handleOpen("新增")},deleteRole:function(t){var e=this,a=new FormData;a.append("id",t),Object(s["c"])(a).then((function(t){t.data.success?(e.initData(),e.$message.success(t.data.msg)):e.$message.warning(t.data.msg)})).catch((function(t){console.log(t)}))},modifyRole:function(t){this.$refs.dialog.handleOpen("修改",t)}}},D=v,w=(a("8e94"),Object(h["a"])(D,n,o,!1,null,"7b47f327",null));e["default"]=w.exports},"4e14":function(t,e,a){"use strict";a("f712")},"8e94":function(t,e,a){"use strict";a("d9251")},d9251:function(t,e,a){},f712:function(t,e,a){},fd85:function(t,e,a){"use strict";a.d(e,"f",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"h",(function(){return i})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"c",(function(){return d}));var n=a("b775");function o(){return Object(n["a"])({url:"user/getuser",method:"get"})}function r(t){return Object(n["a"])({url:"user/createuser",method:"post",data:t})}function i(t){return Object(n["a"])({url:"user/updateuser",method:"post",data:t})}function l(t){return Object(n["a"])({url:"user/deleteuser",method:"post",data:t})}function s(){return Object(n["a"])({url:"authority/getrole",method:"get"})}function c(t){return Object(n["a"])({url:"authority/createrole",method:"post",data:t})}function u(t){return Object(n["a"])({url:"authority/updaterole",method:"post",data:t})}function d(t){return Object(n["a"])({url:"authority/deleterole",method:"post",data:t})}}}]);