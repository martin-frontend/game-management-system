(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74bbf0c1"],{"0324":function(t,e,a){},"3fb5":function(t,e,a){"use strict";a("0324")},"48fb":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o}));var r=a("b775");function n(t){return Object(r["a"])({url:"/statistics_getremain",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/statistics_getrevenue",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/statistics_getaddaccount",method:"post",data:t})}function o(t){return Object(r["a"])({url:"statistics_getactiveaccount",method:"post",data:t})}},"7da6":function(t,e,a){},b1b0:function(t,e,a){"use strict";a("7da6")},d4ea:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"page-container"},[a("search-panel",{on:{updatedTableData:t.updatedTableData}}),a("div",{staticClass:"table-container"},[a("el-tag",[t._v("新增帳戶")]),a("chart",{staticClass:"account-chart"}),a("tableData")],1)],1)},n=[],i=(a("4de4"),a("13d5"),a("45fc"),a("2909")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-panel"},[a("el-tag",[t._v("請輸入查詢條件")]),a("div",{staticStyle:{padding:"5px 0"}}),a("el-form",{ref:"form",attrs:{inline:!0,model:t.searchform,rules:t.rules}},[a("el-form-item",{attrs:{prop:"startDate"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"選擇開始日期"},model:{value:t.searchform.startDate,callback:function(e){t.$set(t.searchform,"startDate",e)},expression:"searchform.startDate"}})],1),a("el-form-item",{attrs:{prop:"endDate"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"選擇結束日期","picker-options":t.pickerOptions},model:{value:t.searchform.endDate,callback:function(e){t.$set(t.searchform,"endDate",e)},expression:"searchform.endDate"}})],1),a("el-form-item",[a("el-select",{attrs:{placeholder:"請選擇"},model:{value:t.searchform.type,callback:function(e){t.$set(t.searchform,"type",e)},expression:"searchform.type"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查詢")])],1)],1)},o=[],l=a("c1df"),c=a.n(l),d={name:"SearchPanel",data:function(){return{loading:!1,isStartDateError:!1,searchform:{startDate:this.getmonthstart(),endDate:this.getmonthend(),type:"ALL"},rules:{startDate:[{required:!0,trigger:"change",validator:this.handleStartDate}],endDate:[{required:!0,trigger:"change",validator:this.handleEndDate}]},options:[{value:"ALL",label:"ALL"},{value:"ANDROID",label:"Android"},{value:"IOS",label:"iOS"}]}},computed:{pickerOptions:function(){var t=this;return{disabledDate:function(e){return!t.isStartDateError&&c()(e)<c()(t.searchform.startDate)}}}},mounted:function(){this.handleSearch()},methods:{handleSearch:function(){var t=this;this.loading=!0,this.$refs["form"].validate((function(e,a){if(!e)return console.log("error submit!!"),!1;var r=new FormData;r.append("startdate",t.searchform.startDate),r.append("enddate",t.searchform.endDate),"ALL"!==t.searchform.type&&r.append("type",t.searchform.type),t.$emit("updatedTableData",r,t.loading)}))},handleStartDate:function(t,e,a){e&&c()(e)>c()(this.searchform.endDate)?(this.isStartDateError=!0,a(new Error("請選擇正確的開始日期"))):e?(this.isStartDateError=!1,a()):a(new Error("開始日期不得為空"))},handleEndDate:function(t,e,a){if(e&&c()(e)<c()(this.searchform.startDate))return a(new Error("請選擇正確的結束日期"));e?(this.searchform.startDate&&this.$refs["form"].validateField(["startDate"]),this.isStartDateError=!1,a()):a(new Error("結束日期不得為空"))},getmonthstart:function(){return c()().startOf("month").format("YYYY-MM-DD")},getmonthend:function(){return c()().endOf("month").format("YYYY-MM-DD")}}},u=d,h=a("2877"),f=Object(h["a"])(u,s,o,!1,null,"e47913a8",null),m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"download-icon el-icon-download"}),a("line-marker")],1)},b=[],g=a("e9c2"),v={name:"Chart",components:{LineMarker:g["a"]}},D=v,y=(a("3fb5"),Object(h["a"])(D,p,b,!1,null,"2fb0109b",null)),w=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.group.tableData,"show-summary":"","sum-text":"新增帳戶數"}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"amount",label:"數量"}})],1)],1)},L=[],x={name:"TableData",inject:["group"]},E=x,$=Object(h["a"])(E,_,L,!1,null,null,null),O=$.exports,S=a("48fb"),z={name:"Index",components:{searchPanel:m,chart:w,tableData:O},data:function(){return{loading:!1,tableData:[]}},provide:function(){return{group:this}},methods:{updatedTableData:function(t,e){var a=this;this.loading=e,Object(S["b"])(t).then((function(t){var e=t.data;if(e.success){var r=e.content.reduce((function(t,e){return t.some((function(t){return t.date===e.date}))?t.filter((function(t){return t.date===e.date}))[0].amount+=+e.amount:t.push({date:e.date,amount:+e.amount}),t}),[]);a.tableData=Object(i["a"])(r)}else a.tableData=[],a.$message.warning(e.msg);a.loading=!1})).catch((function(t){console.log(t),a.loading=!1}))}}},k=z,j=(a("b1b0"),Object(h["a"])(k,r,n,!1,null,"31557a36",null));e["default"]=j.exports},e9c2:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{height:t.height,width:t.width}})},n=[],i=(a("4160"),a("159b"),a("313e")),s=a.n(i),o=a("ed08"),l={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){this.initListener()},activated:function(){this.$_resizeHandler||this.initListener(),this.resize()},beforeDestroy:function(){this.destroyListener()},deactivated:function(){this.destroyListener()},methods:{$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},initListener:function(){var t=this;this.$_resizeHandler=Object(o["b"])((function(){t.resize()}),100),window.addEventListener("resize",this.$_resizeHandler),this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},destroyListener:function(){window.removeEventListener("resize",this.$_resizeHandler),this.$_resizeHandler=null,this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)},resize:function(){var t=this.chart;t&&t.resize()}}},c={mixins:[l],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"250px"},autoResize:{type:Boolean,default:!0},type:{type:String,default:""}},inject:["group"],data:function(){return{chart:null,dateList:[],yAxisList:[]}},watch:{type:{deep:!0,handler:function(t){t&&this.setOptions(this.group.tableData)}},"group.tableData":{deep:!0,handler:function(t){t&&this.initChart()}}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(this.$el),this.setOptions(this.group.tableData)},setOptions:function(t){var e=this;this.dateList=[],this.yAxisList=[],t.forEach((function(t){e.dateList.push(t.date),e.yAxisList.push(t.amount)})),this.chart.setOption({title:{text:t.length?"":"無資料"},xAxis:{show:t.length,data:this.dateList,boundaryGap:!1,axisTick:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:"#20B2B0"},borderType:"dashed"}},grid:{left:15,right:15,bottom:77,top:67,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{color:"#1F1F1F",shadowBlur:0}},padding:[5,10]},yAxis:{show:t.length,axisTick:{show:!1},axisLine:{lineStyle:{color:"#20B2B0"}},axisPointer:{show:!1}},legend:{show:t.length,y:"bottom",icon:"circle",itemWidth:9,itemHeight:9,padding:[35,0,25,0],data:["新增帳戶數"],textStyle:{fontSize:13,color:["FC7127"]}},series:[{name:"新增帳戶數",itemStyle:{normal:{color:"#20B2B0",lineStyle:{color:"#20B2B0",width:4},barBorderRadius:[50,50,0,0]},emphasis:{barBorderRadius:[50,50]}},smooth:!0,type:"line",data:this.yAxisList,animationDuration:2800,animationEasing:"cubicInOut"}]})}}},d=c,u=a("2877"),h=Object(u["a"])(d,r,n,!1,null,null,null);e["a"]=h.exports}}]);