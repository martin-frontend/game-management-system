(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-018df406"],{"1c94":function(t,e,a){},"23a1":function(t,e,a){"use strict";a("4e43")},"4e0e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"table-container"},[a("el-tag",[t._v("發送物品")]),t.checkPermission(["修改發送物品"])?a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"primary",circle:""},on:{click:t.add}}):t._e(),a("el-tabs",{staticStyle:{"margin-top":"10px"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabMapOptions,(function(e){return a("el-tab-pane",{key:e.key,attrs:{label:e.label,name:e.key}},[a("Item",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"table-data":t.filterData(t.tableData)},on:{edit:t.edit,initdata:t.initdata}})],1)})),1)],1),a("Dialog",{ref:"dialog",on:{initdata:t.initdata}})],1)},o=[],i=(a("4de4"),a("d81d"),a("a9e3"),a("5530")),l=a("2909"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.tableData,"row-key":"id",border:""}},[t.checkPermission(["修改發送物品"])?a("el-table-column",{attrs:{prop:"operating",label:"功能",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.edit("編輯",e.row)}}},[t._v("編輯")]),"未發送"===e.row.status?a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return t.send(e.row)}}},[t._v("立即發送")]):t._e(),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.remove(e.row.id)}}},[t._v("刪除")])]}}],null,!1,4160685751)}):t._e(),a("el-table-column",{attrs:{prop:"id",label:"編號",width:"100",sortable:""}}),a("el-table-column",{attrs:{prop:"title",label:"標題",width:"180"}}),a("el-table-column",{attrs:{prop:"status",label:"狀態",width:"100"}}),a("el-table-column",{attrs:{label:"發送時間",prop:"senddate",width:"160",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.senddate)+" ")]}}])}),a("el-table-column",{attrs:{prop:"creator",label:"建立者",width:"100"}}),a("el-table-column",{attrs:{prop:"content",label:"內容"}})],1),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},r=[],c=a("c1df"),d=a.n(c),u=a("b775");function m(t){return Object(u["a"])({url:"operation_getsenditem",method:"get",data:t})}function f(t){return Object(u["a"])({url:"operation_createsenditem",method:"post",data:t})}function p(t){return Object(u["a"])({url:"operation_updatesenditem",method:"post",data:t})}function h(t){return Object(u["a"])({url:"operation_deletesenditem",method:"post",data:t})}var b=a("e350"),g={name:"Item",props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{checkPermission:b["a"],handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},edit:function(t,e){this.$emit("edit",{title:t,row:e})},remove:function(t){var e=this,a=new FormData;a.append("id",t),h(a).then((function(t){var a=t.data;a.success?(e.$emit("initdata"),e.$message.success(a.msg)):e.$message.warning(a.msg)})).catch((function(t){console.log(t)}))},send:function(t){var e=this,a=new FormData;a.append("title",t.title),a.append("senddate",d()(Date.now()).format("yyyy-MM-DD HH:mm:ss")),a.append("status",t.status),a.append("content",t.content),a.append("id",t.id),p(a).then((function(t){var a=t.data;a.success?(e.$emit("initdata"),e.$message.success(a.msg)):e.$message.warning(a.msg)})).catch((function(t){console.log(t)}))}}},D=g,v=(a("f358"),a("2877")),w=Object(v["a"])(D,s,r,!1,null,"6a1b15d8",null),k=w.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.title,"before-close":t.handleClose,visible:t.dialogFormVisible,width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.formData}},[a("el-form-item",{attrs:{prop:"title",label:"標題","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"請輸入標題"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("el-form-item",{attrs:{prop:"senddate",label:"日期","label-width":t.formLabelWidth}},[a("el-date-picker",{staticClass:"form-margin",attrs:{type:"datetime",placeholder:"請選擇發送日期時間","value-format":"yyyy-MM-dd HH:mm:ss",disabled:t.checked},model:{value:t.formData.senddate,callback:function(e){t.$set(t.formData,"senddate",e)},expression:"formData.senddate"}}),a("el-checkbox",{on:{change:t.doCheck},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("立即發送")])],1),a("el-form-item",{attrs:{prop:"radio",label:"對象","label-width":t.formLabelWidth}},[a("el-radio-group",{model:{value:t.formData.radio,callback:function(e){t.$set(t.formData,"radio",e)},expression:"formData.radio"}},[a("el-radio",{attrs:{label:1}},[t._v("全部玩家")]),a("el-radio",{attrs:{label:2}},[t._v("指定玩家")])],1),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===t.formData.radio,expression:"formData.radio === 2"}],staticClass:"add-btn",on:{click:t.addAccounts}},[t._v("新增多筆帳號ID")])],1),a("el-form-item",{attrs:{label:"道具","label-width":t.formLabelWidth}},[a("el-table",{staticStyle:{width:"400px"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"道具名稱"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.propValue,callback:function(a){t.$set(e.row,"propValue",a)},expression:"scope.row.propValue"}},t._l(e.row.props,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)]}}])}),a("el-table-column",{attrs:{label:"道具數量",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.quantity,callback:function(a){t.$set(e.row,"quantity",t._n(a))},expression:"scope.row.quantity"}})]}}])}),a("el-table-column",{attrs:{align:"center",width:"60px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.index?a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",circle:""},on:{click:t.doAdd}}):a("el-button",{attrs:{icon:"el-icon-minus",type:"danger",circle:""},on:{click:function(a){return t.doDelete(e.row.index)}}})]}}])})],1)],1),a("el-form-item",{attrs:{prop:"content",label:"內容","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:6,placeholder:"請輸入內容"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),"新增物品"===t.title?a("el-button",{attrs:{type:"primary"},on:{click:t.createItem}},[t._v("建 立")]):t._e(),"編輯物品"===t.title?a("el-button",{attrs:{type:"primary"},on:{click:t.updateItem}},[t._v("更 新")]):t._e()],1)],1),a("AddAccounts",{ref:"addAcounts",attrs:{"form-data":t.formData},on:{setInit:t.setInit}})],1)},_=[],$=(a("4160"),a("a434"),a("b64b"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.title,"before-close":t.handleClose,"close-on-click-modal":!1,visible:t.dialogFormVisible,width:"50%"}},[a("el-form",{attrs:{model:t.formData}},t._l(t.formData.accounts,(function(e,n){return a("el-form-item",{key:e.key,attrs:{label:"帳號ID",prop:"accounts."+n+".value","label-width":t.formLabelWidth}},[a("el-input",{staticClass:"form-width form-margin",model:{value:e.id,callback:function(a){t.$set(e,"id",a)},expression:"account.id"}}),0==n?a("el-button",{on:{click:t.addAccount}},[t._v("新增帳號ID")]):t._e(),0==n?a("i",{staticClass:"el-icon-upload2 icon"}):t._e(),0!=n?a("el-button",{on:{click:function(a){return a.preventDefault(),t.removeAccount(e)}}},[t._v("删除")]):t._e()],1)})),1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addAccounts}},[t._v("新 增")])],1)],1)],1)}),x=[],C=(a("c975"),a("cd3f")),F={props:{formData:{type:Object,default:function(){return[]}}},data:function(){return{dialogFormVisible:!1,formLabelWidth:"80px",title:"新增多筆帳號ID",initData:{}}},methods:{handleClose:function(t){this.loading=!1,this.dialogFormVisible=!1,this.setInit()},handleOpen:function(t,e){this.dialogFormVisible=!0},removeAccount:function(t){var e=this.formData.accounts.indexOf(t);-1!==e&&this.formData.accounts.splice(e,1)},addAccount:function(){this.formData.accounts.push({id:"",key:Date.now()})},addAccounts:function(){this.formData.accounts=this.formData.accounts.filter((function(t,e,a){return""!==t.id})),0===this.formData.accounts.length&&(this.formData.accounts=[{id:""}]),this.dialogFormVisible=!1},createInit:function(){var t=C(this.formData);this.initData=t},setInit:function(){var t=C(this.initData);this.$emit("setInit",t)}}},O=F,I=(a("cc21"),Object(v["a"])(O,$,x,!1,null,"aa3633ae",null)),A=I.exports,V={components:{AddAccounts:A},data:function(){return{index:1,formData:{radio:1,title:"",senddate:"",content:"",accounts:[{id:""}]},tableData:[{index:0,propValue:"",props:["道具1","道具2","道具3"],quantity:1}],checked:!1,dialogFormVisible:!1,formLabelWidth:"80px",title:"新增物品",rules:{title:[{required:!0,message:"請輸入標題",trigger:"change"}],senddate:[{required:!0,message:"請選擇發送日期時間",trigger:"change"}],content:[{required:!0,message:"請輸入內容",trigger:"change"}]},property:[]}},methods:{resetFormData:function(){this.formData={radio:1,title:"",senddate:"",content:"",accounts:[{id:""}]}},handleClose:function(){var t=this;this.loading=!1,this.dialogFormVisible=!1,this.resetFormData(),this.$nextTick((function(){t.$refs["ruleForm"].clearValidate(Object.keys(t.formData))}))},handleOpen:function(t,e){this.dialogFormVisible=!0,this.title=t+"物品","編輯"===t&&(this.formData=Object.assign({},e),this.formData.senddate=new Date(this.formData.senddate))},createItem:function(){var t=this;this.$refs["ruleForm"].validate((function(e){if(e){var a=new FormData;a.append("title",t.formData.title),a.append("senddate",t.getdatetime(t.formData.senddate)),a.append("status",t.formData.status),a.append("content",t.formData.content),f(a).then((function(e){var a=e.data;a.success?(t.$emit("initdata"),t.$message.success(a.msg)):t.$message.warning(a.msg),t.handleClose()})).catch((function(t){console.log(t)}))}}))},updateItem:function(){var t=this;this.$refs["ruleForm"].validate((function(e){if(e){var a=new FormData;a.append("title",t.formData.title),a.append("senddate",t.getdatetime(t.formData.senddate)),a.append("status",t.formData.status),a.append("content",t.formData.content),a.append("id",t.formData.id),p(a).then((function(e){var a=e.data;a.success?(t.$emit("initdata"),t.$message.success(a.msg)):t.$message.warning(a.msg),t.dialogFormVisible=!1})).catch((function(t){console.log(t)}))}}))},getdatetime:function(t){return d()(t).format("YYYY-MM-DD HH:mm:ss")},doCheck:function(t){t?this.$set(this.formData,"senddate",d()().format("YYYY-MM-DD HH:mm:ss")):this.$set(this.formData,"senddate","")},addAccounts:function(){this.$refs.addAccounts.handleOpen(),this.$refs.addAccounts.createInit()},setInit:function(t){this.formData=t},doAdd:function(){if(this.tableData.length>=5)this.$message.warning("最多附加5樣");else{var t=this.index++;this.tableData.push({index:t,propValue:"",props:["道具1","道具2","道具3"],quantity:1})}},doDelete:function(t){this.tableData.forEach((function(e,a,n){e.index===t&&n.splice(a,1)}))}}},j=V,S=(a("23a1"),Object(v["a"])(j,y,_,!1,null,"be89158e",null)),M=S.exports,z={name:"DeliverItem",components:{Dialog:M,Item:k},data:function(){return{loading:!1,tabMapOptions:[{label:"信件欄",key:"all"},{label:"未發送",key:"notSend"},{label:"已發送",key:"sent"}],activeName:"all",tableData:[]}},computed:{},mounted:function(){this.initdata()},methods:{checkPermission:b["a"],add:function(){this.$refs.dialog.handleOpen("新增")},edit:function(t){var e=t.title,a=t.row;this.$refs.dialog.handleOpen(e,a)},filterData:function(){switch(this.activeName){case"notSend":return this.tableData.filter((function(t,e,a){return"未發送"===t.status}));case"sent":return this.tableData.filter((function(t,e,a){return"已發送"===t.status}));case"all":return this.tableData}},initdata:function(){var t=this;this.loading=!0;var e="";switch(this.activeName){case"notSend":e="0";break;case"sent":e="1";break}var a=new FormData;a.append("state",e),m(a).then((function(e){var a=e.data;a.success?(t.tableData=Object(l["a"])(a.content),t.tableData=t.tableData.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{id:Number(t.id)})}))):(t.tableData=[],t.$message.warning(a.msg)),t.loading=!1})).catch((function(t){console.log(t)}))}}},L=z,N=Object(v["a"])(L,n,o,!1,null,null,null);e["default"]=N.exports},"4e43":function(t,e,a){},7270:function(t,e,a){},cc21:function(t,e,a){"use strict";a("7270")},e350:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("caad"),a("45fc"),a("ac1f"),a("2532"),a("1276");var n=a("4360");function o(t){if(t&&t instanceof Array&&t.length>0){var e=n["a"].getters&&n["a"].getters.roles,a=e.split(","),o=t,i=a.some((function(t){return o.includes(t)}));return i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},f358:function(t,e,a){"use strict";a("1c94")}}]);