(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{Dljr:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("Obii"),o=r("kDLi"),a=r("kDDq"),i=r("q1tI"),c=r.n(i),u=r("Wkk1");function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding-bottom: ",";\n    color: ",";\n  "]);return s=function(){return e},e}function l(e){var t,r,a=e.options,i=e.onOptionsChange,s=Object(o.useStyles)(f);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"page-heading"},"Trace to logs"),c.a.createElement("div",{className:s.infoText},"Trace to logs let's you navigate from a trace span to the selected data source's log."),c.a.createElement("div",{className:"gf-form"},c.a.createElement(o.InlineFormLabel,{tooltip:"The data source the trace is going to navigate to"},"Data source"),c.a.createElement(u.a,{pluginId:"loki",current:null===(t=a.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,noDefault:!0,onChange:function(e){var t;return Object(n.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:a},"tracesToLogs",{datasourceUid:e.uid,tags:null===(t=a.jsonData.tracesToLogs)||void 0===t?void 0:t.tags})}})),c.a.createElement("div",{className:"gf-form"},c.a.createElement(o.InlineFormLabel,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'"},"Tags"),c.a.createElement(o.TagsInput,{tags:null===(r=a.jsonData.tracesToLogs)||void 0===r?void 0:r.tags,onChange:function(e){var t;return Object(n.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:a},"tracesToLogs",{datasourceUid:null===(t=a.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,tags:e})}})))}var f=function(e){return{infoText:Object(a.css)(s(),e.spacing.md,e.colors.textSemiWeak)}}},SjO4:function(e,t,r){"use strict";r.r(t);var n=r("Obii"),o=r("t8hP"),a=r("F/XL"),i=r("0/uQ"),c=r("67Y/"),u=r("NPB1"),s=r("zsCE");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){y(a,n,o,i,c,"next",e)}function c(e){y(a,n,o,i,c,"throw",e)}i(void 0)}))}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(u.a)();return d(this,t),(r=m(this,v(t).call(this,e))).instanceSettings=e,r.timeSrv=n,r}var r,l,y,h,w;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),r=t,(l=[{key:"metadataRequest",value:(w=b(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._request(t,r,{hideFromInspector:!0}).toPromise();case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return w.apply(this,arguments)})},{key:"query",value:function(e){var t,r=null===(t=e.targets[0])||void 0===t?void 0:t.query;return r?this._request("/api/traces/".concat(encodeURIComponent(r))).pipe(Object(c.a)((function(e){var t;return{data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[]}],meta:{preferredVisualisationType:"trace"}})]}}))):Object(a.a)({data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace"}})]})}},{key:"testDatasource",value:(h=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request("/api/traces/random").toPromise();case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),400===(null===e.t0||void 0===e.t0?void 0:e.t0.status)){e.next=9;break}throw e.t0;case 9:return e.abrupt("return",{status:"success",message:"Data source is working"});case 10:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(){return h.apply(this,arguments)})},{key:"getTimeRange",value:function(){var e=this.timeSrv.timeRange();return{start:j(e.from,!1),end:j(e.to,!0)}}},{key:"getQueryDisplayText",value:function(e){return e.query}},{key:"_request",value:function(e,t,r){var n="/api/datasources/proxy/".concat(this.instanceSettings.id),a=t?Object(s.d)(t):"",c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{url:"".concat(n).concat(e).concat(a.length?"?".concat(a):"")});return Object(i.a)(Object(o.getBackendSrv)().datasourceRequest(c))}}])&&g(r.prototype,l),y&&g(r,y),t}(n.DataSourceApi);function j(e,t){return"string"==typeof e&&(e=n.dateMath.parse(e,t)),1e3*e.valueOf()}var w=r("q1tI"),P=r.n(w),D=r("kDLi");function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(){return T(this,t),q(this,C(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.query,r=e.onChange;return P.a.createElement(D.LegacyForms.FormField,{label:"Trace ID",labelWidth:4,inputEl:P.a.createElement("div",{className:"slate-query-field__wrapper"},P.a.createElement("div",{className:"slate-query-field"},P.a.createElement("input",{style:{width:"100%"},value:t.query||"",onChange:function(e){return r(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{query:e.currentTarget.value}))}})))})}}])&&_(r.prototype,n),o&&_(r,o),t}(P.a.PureComponent),L=r("Dljr");r.d(t,"plugin",(function(){return R}));var R=new n.DataSourcePlugin(h).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return P.a.createElement(P.a.Fragment,null,P.a.createElement(D.DataSourceHttpSettings,{defaultUrl:"http://localhost:16686",dataSourceConfig:t,showAccessOptions:!1,onChange:r}),P.a.createElement(L.a,{options:t,onOptionsChange:r}))})).setExploreQueryField(F)}}]);
//# sourceMappingURL=tempoPlugin.6533b456cf289f2af922.js.map