(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769bd0e0"],{"5d11":function(t,a,e){},"62e6":function(t,a,e){"use strict";e("5d11")},"94a3":function(t,a,e){"use strict";e("de76")},"94b0":function(t,a,e){"use strict";e.d(a,"g",(function(){return r})),e.d(a,"h",(function(){return o})),e.d(a,"b",(function(){return s})),e.d(a,"a",(function(){return i})),e.d(a,"c",(function(){return l})),e.d(a,"f",(function(){return c})),e.d(a,"d",(function(){return u})),e.d(a,"e",(function(){return d}));var n=e("b775");function r(t){return Object(n["a"])({url:"/analysis_getremain",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/analysis_getrevenue",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/analysis/getuserdau",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/analysis/getuser",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/analysis/getuserlog",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/analysis/getuserwau",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/analysis/getusermau",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/analysis/getusernru",method:"post",data:t})}},a576:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-container"},[e("search-panel",{on:{onSearch:t.onSearch}}),e("div",{staticClass:"table-container"},[e("el-tag",[t._v("留存統計")]),e("tablePanel",{staticClass:"account-chart"})],1)],1)},r=[],o=(e("4160"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-panel"},[e("el-tag",[t._v("請輸入查詢條件")]),e("div",{staticStyle:{padding:"5px 0"}}),e("el-form",{ref:"form",attrs:{inline:!0,model:t.formData,rules:t.rules}},[e("el-form-item",{attrs:{prop:"startdate"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"選擇開始日期"},model:{value:t.formData.startdate,callback:function(a){t.$set(t.formData,"startdate",a)},expression:"formData.startdate"}})],1),e("el-form-item",{attrs:{prop:"enddate"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"選擇結束日期","picker-options":t.pickerOptions},model:{value:t.formData.enddate,callback:function(a){t.$set(t.formData,"enddate",a)},expression:"formData.enddate"}})],1),e("el-form-item",[e("el-select",{attrs:{placeholder:"請選擇"},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查詢")])],1)],1)}),s=[],i=e("94b0"),l=e("c1df"),c=e.n(l),u={name:"SearchPanel",data:function(){return{isStartDateError:!1,formData:{startdate:"",enddate:""},rules:{startdate:[{required:!0,trigger:"change",validator:this.handleStartDate}],enddate:[{required:!0,trigger:"change",validator:this.handleEndDate}]},options:[{value:"ALL",label:"ALL"},{value:"Android",label:"Android"},{value:"IOS",label:"IOS"}]}},computed:{pickerOptions:function(){var t=this;return{disabledDate:function(a){return!t.isStartDateError&&c()(a)<c()(t.formData.startdate)}}}},mounted:function(){this.initData(),this.handleSearch()},methods:{initData:function(){this.formData.startdate=this.getmonthstart(),this.formData.enddate=this.getmonthend(),this.formData.type="ALL"},handleSearch:function(){var t=this;this.$refs["form"].validate((function(a,e){if(!a)return console.log("error submit!!"),!1;var n=new FormData;n.append("startdate",t.formData.startdate),n.append("enddate",t.formData.enddate),"ALL"!==t.formData.type&&n.append("type",t.formData.type),Object(i["g"])(n).then((function(a){var e=a.data;e.success?t.$emit("onSearch",e.content):(t.$emit("onSearch",[]),t.$message.warning(e.msg))})).catch((function(t){console.log(t)}))}))},handleStartDate:function(t,a,e){a&&c()(a)>c()(this.formData.enddate)?(this.isStartDateError=!0,e(new Error("請選擇正確的開始日期"))):a?(this.isStartDateError=!1,e()):e(new Error("開始日期不得為空"))},handleEndDate:function(t,a,e){if(a&&c()(a)<c()(this.formData.startdate))return e(new Error("請選擇正確的結束日期"));a?(this.formData.startdate&&this.$refs["form"].validateField(["startdate"]),this.isStartDateError=!1,e()):e(new Error("結束日期不得為空"))},getmonthstart:function(){return c()().startOf("month").format("YYYY-MM-DD")},getmonthend:function(){return c()().endOf("month").format("YYYY-MM-DD")}}},d=u,f=e("2877"),p=Object(f["a"])(d,o,s,!1,null,"2ccc06cc",null),m=p.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("i",{staticClass:"download-icon el-icon-download"}),e("el-tabs",{model:{value:t.statistic,callback:function(a){t.statistic=a},expression:"statistic"}},t._l(t.statisticOptions,(function(t){return e("el-tab-pane",{key:t.value,attrs:{label:t.label,name:t.value}})})),1),e("tableData",{attrs:{statistic:t.statistic}})],1)},b=[],v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-table",{attrs:{data:t.handleData()}},[e("el-table-column",{attrs:{property:"date",label:"日期"}}),e("el-table-column",{attrs:{property:"amount",label:"value"===t.statistic?"數量":"百分比"}})],1)],1)},D=[],g={name:"TableData",props:{statistic:{type:String,default:""}},inject:["group"],methods:{handleData:function(){return"value"===this.statistic?this.group.tableData.value:this.group.tableData.percent}}},y=g,O=Object(f["a"])(y,v,D,!1,null,null,null),S=O.exports,w={name:"TablePanel",components:{tableData:S},data:function(){return{statistic:"value",statisticOptions:[{value:"value",label:"數值"},{value:"percent",label:"百分比"}]}}},E=w,k=(e("94a3"),Object(f["a"])(E,h,b,!1,null,"c3fef23c",null)),_=k.exports,j={name:"Index",components:{searchPanel:m,tablePanel:_},data:function(){return{tableData:{value:[],percent:[]}}},provide:function(){return{group:this}},methods:{onSearch:function(t){var a=this;this.tableData={value:[],percent:[]},t&&t.forEach((function(t){a.tableData.value.push({date:t.date,amount:t.newaccount}),a.tableData.percent.push({date:t.date,amount:t.percentage})}))}}},$=j,x=(e("62e6"),Object(f["a"])($,n,r,!1,null,"4ac0e35a",null));a["default"]=x.exports},de76:function(t,a,e){}}]);