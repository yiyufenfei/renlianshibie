(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-InvestmentInformation"],{"28fd":function(t,a,i){"use strict";i.r(a);var s=i("e7bf"),n=i.n(s);for(var e in s)"default"!==e&&function(t){i.d(a,t,(function(){return s[t]}))}(e);a["default"]=n.a},"2b90":function(t,a,i){"use strict";var s=i("999f"),n=i.n(s);n.a},"7c54":function(t,a,i){"use strict";i.r(a);var s=i("c0d3"),n=i("28fd");for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);i("2b90");var d,f=i("f0c5"),o=Object(f["a"])(n["default"],s["b"],s["c"],!1,null,"610ffc67",null,!1,s["a"],d);a["default"]=o.exports},"999f":function(t,a,i){var s=i("f4ad");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("28d227fb",s,!0,{sourceMap:!1,shadowMode:!1})},c0d3:function(t,a,i){"use strict";var s;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){return s}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("div",{staticClass:"headerf"},[i("div",{staticClass:"boxs"},[i("div",[i("div",{staticClass:"touxiang"},[t._v("i")]),i("div",{staticClass:"name"},[i("div",[t._v(t._s(t.data.name))]),i("div",[t._v("440********4579")])]),i("div",{staticClass:"time"},[i("div",[t._v("08-08 17:31")])])])]),i("div",{staticClass:"flexs"},[i("div",[t._v("相关企业 4")]),i("div",[t._v("任职 4")]),i("div",[t._v("参股 4")])])]),i("ul",{staticClass:"uls",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gopage.apply(void 0,arguments)}}},[i("li",[i("div",{staticClass:"titles"},[t._v("广州市星力量文化传媒有限公司")]),i("div",{staticClass:"countent"},[i("div",{staticClass:"left"},[i("div",{staticClass:"bgs"},[t._v("在营（开业）企业")]),i("div",{staticClass:"count"},[i("div",{staticClass:"content_t"},[t._v("法定代理人(负责人、经营者、执行事务合伙人、首席代表) 经理 执行董事")]),i("div",{staticClass:"right"},[t._v("参股 100")])])])])]),i("li",[i("div",{staticClass:"titles"},[t._v("汕头市森哲网络科技优先公司")]),i("div",{staticClass:"countent"},[i("div",{staticClass:"left"},[i("div",{staticClass:"bgs"},[t._v("在营（开业）企业")]),i("div",{staticClass:"count"},[i("div",{staticClass:"content_t"},[t._v("执行董事 经理")]),i("div",{staticClass:"right"},[t._v("参股 1")])])])])]),i("li",[i("div",{staticClass:"titles"},[t._v("汕头市创拓网络科技优先公司")]),i("div",{staticClass:"countent"},[i("div",{staticClass:"left"},[i("div",{staticClass:"bgs"},[t._v("在营（开业）企业")]),i("div",{staticClass:"count"},[i("div",{staticClass:"content_t"},[t._v("监事")]),i("div",{staticClass:"right"},[t._v("参股 0.49")])])])])]),i("li",[i("div",{staticClass:"titles"},[t._v("汕头市鹏盛发网络科技优先公司")]),i("div",{staticClass:"countent"},[i("div",{staticClass:"left"},[i("div",{staticClass:"bgs"},[t._v("在营（开业）企业")]),i("div",{staticClass:"count"},[i("div",{staticClass:"content_t"},[t._v("监事")]),i("div",{staticClass:"right"},[t._v("参股 0.49")])])])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"heibox"},[i("div",{staticClass:"whitebox"},[i("div",{staticClass:"title"},[t._v("温馨提示")]),i("div",{staticClass:"countli"},[t._v("1 本程序展示的是您在全国范围市场主体内投资和任职的相关情况，由于全国各地数据更新\n        同步需要一定时间，如您已通过登记机关办理了在相关市场主体投资或任职的变更登记或备案，\n        或相关市场主题已完成注销，但通过本程序查询的结果与实际情况或国家企业信用信息公示\n        系统显示结果不一致，请您及时联系服务电话告知我们，我们将及时排查解决，并建议您3至5后\n        重新查询。")]),i("div",{staticClass:"countli"},[t._v("2 因市场主体登记信息中仍有部分15位身份证号码。在查询时可能会同您的18位身份证号码\n        冲突，如您的查询结果中存在任职或投资人员姓名与本人不一致的情况，请您及时联系服务电话\n        告知我们，并建议联系该市场主体的登记机关核实情况。")]),i("div",{staticClass:"now",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.show=!1}}},[t._v("知道了")])])])])},e=[]},e7bf:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{show:!1,data:{name:"",idcard:"",phone:""}}},created:function(){uni.getStorageSync("user")&&(this.data=JSON.parse(uni.getStorageSync("user")))},mounted:function(){},methods:{gopage:function(){uni.navigateTo({url:"InvestmentInformation_detail"})}}};a.default=s},f4ad:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,'.headerf[data-v-610ffc67]{position:fixed;top:0;width:100%}.now[data-v-610ffc67]{text-align:center;color:#486fcf;font-size:15px;line-height:48px;border-top:solid 1px #ccc}.countli[data-v-610ffc67]{color:#999;font-size:15px;margin-bottom:20px}.title[data-v-610ffc67]{text-align:center;line-height:60px}.whitebox[data-v-610ffc67]{background:#fff;width:90%;margin:0 auto;max-height:90vh;position:relative;top:50%;padding:0 20px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.heibox[data-v-610ffc67]{position:fixed;width:100%;height:100vh;background:rgba(0,0,0,.5);top:0}.right[data-v-610ffc67]{padding-left:10px;float:left;width:75px;color:#bbb}.right[data-v-610ffc67]::before{width:2px;-webkit-transform:translateY(0);transform:translateY(0);height:17px;content:"";display:block;float:left;background:#d30808;margin-right:5px}.countent[data-v-610ffc67]{overflow:hidden}.left[data-v-610ffc67]{float:left}.content_t[data-v-610ffc67]{max-width:71%;float:left}.count[data-v-610ffc67]{clear:both;font-size:13px;padding-top:5px}.bgs[data-v-610ffc67]{padding:2px 5px;background:rgba(255,25,25,.2);float:left;font-size:13px;border-radius:3px;margin-top:5px;color:#e70202}.titles[data-v-610ffc67]{font-size:16px;font-weight:700}.uls[data-v-610ffc67]{padding:0 15px}.uls li[data-v-610ffc67]{background:#fff;padding:15px;margin-top:15px}.flexs[data-v-610ffc67]{display:flex;background:#fff}.flexs > div[data-v-610ffc67]{flex:1;line-height:40px;font-size:14px;padding-left:20px;position:relative;color:#bbb}.flexs > div[data-v-610ffc67]::before{width:2px;-webkit-transform:translateY(12px);transform:translateY(12px);height:15px;content:"";display:block;float:left;margin-right:5px}.flexs > div[data-v-610ffc67]:nth-child(1){color:#486fcf}.flexs > div[data-v-610ffc67]:nth-child(1)::before{background:#486fcf}.flexs > div[data-v-610ffc67]:nth-child(2)::before{background:#03da27}.flexs > div[data-v-610ffc67]:nth-child(3)::before{background:#d30808}.flexs > div[data-v-610ffc67]:nth-child(1){flex:1.3}.boxs > div[data-v-610ffc67]{width:100%;overflow:hidden;border-bottom:solid 1px #ccc;padding:20px 0}.boxs[data-v-610ffc67]{overflow:hidden;-webkit-padding-after:10px;padding-block-end:10px;background:#fff;padding:0 20px}.time[data-v-610ffc67]{margin-top:25px;float:right;font-size:13px;color:#bbb}.name div[data-v-610ffc67]:nth-child(1){font-size:15px;font-weight:700;color:#333}.name div[data-v-610ffc67]:nth-child(2){font-size:13px;color:#bbb;margin-top:4px}.name[data-v-610ffc67]{float:left;margin-left:10px}.touxiang[data-v-610ffc67]{width:40px;height:40px;border:solid 1px #ccc;border-radius:3px;text-align:center;line-height:40px;font-size:20px;float:left}.content[data-v-610ffc67]{width:100%;min-height:100vh;background:#f6f5f8;box-sizing:border-box;padding-top:122px}',""]),t.exports=a}}]);