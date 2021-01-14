(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65274db5"],{"0e24":function(t,e,a){},"1e57":function(t,e,a){"use strict";a("40cc")},"40cc":function(t,e,a){},"48fb":function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u}));var n=a("b775");function r(t){return Object(n["a"])({url:"/statistics_getremain",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/statistics_getrevenue",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/analysis/getuserdau",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/analysis/getuserwau",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/analysis/getusermau",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/analysis/getusernru",method:"post",data:t})}},6128:function(t,e,a){},9448:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("search-panel",{on:{onSearch:t.onSearch}}),a("div",{staticClass:"table-container"},[a("el-tag",[t._v("營收付費")]),a("tablePanel")],1)],1)},r=[],s=a("2909"),l=a("48fb"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-panel"},[a("el-tag",[t._v("請輸入查詢條件")]),a("div",{staticStyle:{padding:"5px 0"}}),a("el-form",{ref:"form",attrs:{inline:!0,model:t.formData,rules:t.rules}},[a("el-form-item",{attrs:{prop:"startDate"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"選擇開始日期"},model:{value:t.formData.startDate,callback:function(e){t.$set(t.formData,"startDate",e)},expression:"formData.startDate"}})],1),a("el-form-item",{attrs:{prop:"endDate"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"選擇結束日期","picker-options":t.pickerOptions},model:{value:t.formData.endDate,callback:function(e){t.$set(t.formData,"endDate",e)},expression:"formData.endDate"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查詢")])],1)],1)},i=[],u=a("c1df"),c=a.n(u),d={name:"SearchPanel",data:function(){return{isStartDateError:!1,formData:{startDate:this.getmonthstart(),endDate:this.getmonthend()},rules:{startDate:[{required:!0,trigger:"change",validator:this.handleStartDate}],endDate:[{required:!0,trigger:"change",validator:this.handleEndDate}]}}},computed:{pickerOptions:function(){var t=this;return{disabledDate:function(e){return!t.isStartDateError&&c()(e)<c()(t.formData.startDate)}}}},mounted:function(){this.handleSearch()},methods:{handleSearch:function(){var t=this;this.$refs["form"].validate((function(e,a){if(!e)return console.log("error submit!!"),!1;var n=new FormData;n.append("startdate",t.formData.startDate),n.append("enddate",t.formData.endDate),t.$emit("onSearch",n)}))},handleStartDate:function(t,e,a){e&&c()(e)>c()(this.formData.endDate)?(this.isStartDateError=!0,a(new Error("請選擇正確的開始日期"))):e?(this.isStartDateError=!1,a()):a(new Error("開始日期不得為空"))},handleEndDate:function(t,e,a){if(e&&c()(e)<c()(this.formData.startDate))return a(new Error("請選擇正確的結束日期"));e?(this.formData.startDate&&this.$refs["form"].validateField(["startDate"]),this.isStartDateError=!1,a()):a(new Error("結束日期不得為空"))},getmonthstart:function(){return c()().startOf("month").format("YYYY-MM-DD")},getmonthend:function(){return c()().endOf("month").format("YYYY-MM-DD")}}},f=d,p=a("2877"),v=Object(p["a"])(f,o,i,!1,null,"c598d2c4",null),m=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"download-icon el-icon-download"}),a("el-tabs",{model:{value:t.statistic,callback:function(e){t.statistic=e},expression:"statistic"}},t._l(t.statisticOptions,(function(t){return a("el-tab-pane",{key:t.value,attrs:{label:t.label,name:t.value}})})),1),"revenue"===t.statistic?a("revenueData"):"iap"===t.statistic?a("iapData"):a("storeData")],1)},b=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.group.loading,expression:"group.loading"}]},[a("el-row",{attrs:{type:"flex"}},[t.group.tableData.length?a("div",{staticClass:"multiple-tables"},[a("div",{staticClass:"first-table"},[a("table",{attrs:{width:"100%",rules:"all",cellpadding:"5"}},[a("tr",[a("td",[a("span")])]),a("tr",[a("td",[a("span",[t._v("營收")])])]),a("tr",[a("td",[a("span",[t._v("平台拆帳比")])])]),a("tr",[a("td",[a("span",[t._v("實際收入")])])]),a("tr",[a("td",[a("span",[t._v("Pay Rate")])])]),a("tr",[a("td",[a("span",[t._v("付費人數")])])]),a("tr",[a("td",[a("span",[t._v("活躍用戶數")])])]),a("tr",[a("td",[a("span",[t._v("總用戶數")])])]),a("tr",[a("td",[a("span",[t._v("ARPPU")])])]),a("tr",[a("td",[a("span",[t._v("ARPU")])])])])]),a("div",{staticClass:"second-table"},t._l(t.group.tableData[0].revenue,(function(e,n){return a("div",{key:n,staticClass:"second-part-table"},[a("table",{attrs:{width:"100%",rules:"all",cellpadding:"5"}},[a("tr",[a("td",[a("span",[t._v(t._s(e.name))])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.revenue))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.debit_ratio))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.income))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.payrate))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.payamount))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.activeuser))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.totaluser))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.arppu))])])])]),a("tr",[a("td",[a("div",{staticClass:"td_content"},[a("div",[t._v(t._s(e.arpu))])])])])])])})),0)]):a("div",[t._v("暫無數據")])])],1)},D=[],g={name:"RevenueData",inject:["group"]},y=g,w=(a("c4c0"),Object(p["a"])(y,h,D,!1,null,"6654c6b8",null)),S=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.group.loading,expression:"group.loading"}]},[a("el-table",{attrs:{data:t.handleData()}},[a("el-table-column",{attrs:{label:"平台"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.platform)+" ")]}}])}),a("el-table-column",{attrs:{label:"編號"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.numbering)+" ")]}}])}),a("el-table-column",{attrs:{label:"商品名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.productname)+" ")]}}])}),a("el-table-column",{attrs:{label:"銷售數量"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.saleamount)+" ")]}}])}),a("el-table-column",{attrs:{label:"單價"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.price)+" ")]}}])}),a("el-table-column",{attrs:{label:"總金額"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total)+" ")]}}])}),a("el-table-column",{attrs:{label:"營收占比"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.ratio)+" ")]}}])})],1)],1)},O=[],j={name:"IapData",props:{statistic:{type:String,default:""}},inject:["group"],methods:{handleData:function(){return this.group.tableData.length?this.group.tableData[0].iap:[]}}},C=j,E=Object(p["a"])(C,k,O,!1,null,null,null),x=E.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.group.loading,expression:"group.loading"}]},[a("el-table",{attrs:{data:t.handleData()}},[a("el-table-column",{attrs:{label:"商店"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.store)+" ")]}}])}),a("el-table-column",{attrs:{label:"道具編號"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.itemnumber)+" ")]}}])}),a("el-table-column",{attrs:{label:"道具名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.itemname)+" ")]}}])}),a("el-table-column",{attrs:{label:"銷售數量"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.saleamount)+" ")]}}])}),a("el-table-column",{attrs:{label:"單價"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.price)+" ")]}}])}),a("el-table-column",{attrs:{label:"貨幣種類"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.cointype)+" ")]}}])}),a("el-table-column",{attrs:{label:"總金額"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total)+" ")]}}])}),a("el-table-column",{attrs:{label:"銷售佔比"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.saleratio)+" ")]}}])})],1)],1)},P=[],M={name:"TableData",props:{statistic:{type:String,default:""}},inject:["group"],methods:{handleData:function(){return this.group.tableData.length?this.group.tableData[0].gamestore:[]}}},Y=M,R=(a("b1fe"),Object(p["a"])(Y,$,P,!1,null,"16290efc",null)),A=R.exports,I={name:"TablePanel",components:{revenueData:S,iapData:x,storeData:A},data:function(){return{statistic:"revenue",statisticOptions:[{value:"revenue",label:"營收"},{value:"iap",label:"IAP商品"},{value:"store",label:"遊戲商店"}]}}},N=I,q=(a("1e57"),Object(p["a"])(N,_,b,!1,null,"6538ef0d",null)),F=q.exports,J={name:"Index",components:{searchPanel:m,tablePanel:F},provide:function(){return{group:this}},data:function(){return{loading:!1,tableData:[]}},methods:{onSearch:function(t){var e=this;this.loading=!0,Object(l["f"])(t).then((function(t){var a=t.data;a.success?e.tableData=Object(s["a"])(a.content):(e.tableData=[],e.$message.warning(a.msg)),e.loading=!1})).catch((function(t){e.loading=!1,console.log(t)}))}}},T=J,U=Object(p["a"])(T,n,r,!1,null,null,null);e["default"]=U.exports},b1fe:function(t,e,a){"use strict";a("0e24")},c4c0:function(t,e,a){"use strict";a("6128")}}]);