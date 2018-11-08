/*!
 * @project        SEOmatic
 * @name           dashboard.js
 * @author         Andrew Welch
 * @build          Thu, Nov 8, 2018 10:24 PM ET
 * @release        99f4191303821fe86fc3711addf8fbb2563157a5 [feature/modernize-webpack]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,h=[];p<s.length;p++)i=s[p],a[i]&&h.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);h.length;)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={1:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([120,7]),n()}({120:function(t,e,n){"use strict";n.r(e);var r=n(24),a=n.n(r),o=function(){var t=this.$createElement;return(this._self._c||t)("main")};o._withStripped=!0;var i=n(47),s=n.n(i);a.a.use(s.a);var u={mounted:function(){var t=this;this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout(function(){t.$confetti.stop()},5e3)},methods:{}},c=n(25),l=Object(c.a)(u,o,[],!1,null,null,null);l.options.__file="src/assetbundles/seomatic/src/vue/Confetti.vue";var p=l.exports,h=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:this.chartOptions,series:this.series}})};h._withStripped=!0;n(67),n(84),n(94);var f=n(48),d=n.n(f),v=n(49);function b(t,e,n,r,a,o,i){try{var s=t[o](i),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}var m,y,g=function(t,e,n){t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},x={components:{apexcharts:n.n(v).a},props:{title:String,subTitle:String,range:String},methods:{getSeriesData:(m=regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.a.create({baseURL:"/retour/charts/dashboard/",headers:{"X-Requested-With":"XMLHttpRequest"}}),t.next=3,g(e,this.range,function(t){var e,r=Object.assign({},n.chartOptions);void 0!==t[0]&&(r.yaxis.max=Math.round((e=[t[0].data],e.map(function(t){return Math.max.apply(null,t)}))[0]+1.5),r.labels=t[0].labels,n.chartOptions=r,n.series=t)});case 3:case"end":return t.stop()}},t,this)}),y=function(){var t=this,e=arguments;return new Promise(function(n,r){var a=m.apply(t,e);function o(t){b(a,n,r,o,i,"next",t)}function i(t){b(a,n,r,o,i,"throw",t)}o(void 0)})},function(){return y.apply(this,arguments)})},created:function(){this.getSeriesData()},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{crosshairs:{width:1}},labels:[],yaxis:{min:0,max:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}}},w=Object(c.a)(x,h,[],!1,null,null,null);w.options.__file="src/assetbundles/seomatic/src/vue/DashboardChart.vue";var O=w.exports;new a.a({el:"#cp-nav-content",components:{confetti:p,"dashboard-chart":O},data:{},methods:{},mounted:function(){}})}});
//# sourceMappingURL=dashboard.js.map