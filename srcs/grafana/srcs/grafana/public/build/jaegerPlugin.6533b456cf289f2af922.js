(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{ANPa:function(e,t,r){"use strict";r.r(t);var n=r("Obii"),a=r("t8hP"),o=r("F/XL"),i=r("0/uQ"),u=r("67Y/"),c=r("9Z1F"),s=r("NPB1"),l=r("zsCE");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){d(o,n,a,i,u,"next",e)}function u(e){d(o,n,a,i,u,"throw",e)}i(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return b(this,t),(r=y(this,h(t).call(this,e))).instanceSettings=e,r.timeSrv=n,r}var r,f,d,w,k;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),r=t,(f=[{key:"metadataRequest",value:(k=m(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._request(t,r,{hideFromInspector:!0}).toPromise();case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return k.apply(this,arguments)})},{key:"query",value:function(e){var t,r=null===(t=e.targets[0])||void 0===t?void 0:t.query;return r?this._request("/api/traces/".concat(encodeURIComponent(r))).pipe(Object(u.a)((function(e){var t;return{data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[]}],meta:{preferredVisualisationType:"trace"}})]}}))):Object(o.a)({data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace"}})]})}},{key:"testDatasource",value:(w=m(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._request("/api/services").pipe(Object(u.a)((function(e){var t;return((null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[]).length>0?{status:"success",message:"Data source connected and services found."}:{status:"error",message:"Data source connected, but no services received. Verify that Jaeger is configured properly."}})),Object(c.a)((function(e){var t="Jaeger: ";return e.statusText?t+=e.statusText:t+="Cannot connect to Jaeger",e.status&&(t+=". ".concat(e.status)),e.data&&e.data.message?t+=". ".concat(e.data.message):e.data&&(t+=". ".concat(JSON.stringify(e.data))),Object(o.a)({status:"error",message:t})}))).toPromise());case 1:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{key:"getTimeRange",value:function(){var e=this.timeSrv.timeRange();return{start:j(e.from,!1),end:j(e.to,!0)}}},{key:"getQueryDisplayText",value:function(e){return e.query}},{key:"_request",value:function(e,t,r){var n="/api/datasources/proxy/".concat(this.instanceSettings.id),o=t?Object(l.d)(t):"",u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{url:"".concat(n).concat(e).concat(o.length?"?".concat(o):"")});return Object(i.a)(Object(a.getBackendSrv)().datasourceRequest(u))}}])&&g(r.prototype,f),d&&g(r,d),t}(n.DataSourceApi);function j(e,t){return"string"==typeof e&&(e=n.dateMath.parse(e,t)),1e3*e.valueOf()}var k=r("q1tI"),P=r.n(k),E=r("kDLi"),_=r("HJRA");function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){q(o,n,a,i,u,"next",e)}function u(e){q(o,n,a,i,u,"throw",e)}i(void 0)}))}}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=e.spans.find((function(e){var t;return!(null===(t=e.references)||void 0===t?void 0:t.length)}));return t?"".concat(t.operationName," [").concat(t.duration/1e3," ms]"):e.traceID}var J=function(e){function t(e,r){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=A(this,F(t).call(this,e,r))).onLoadOptions=function(){var e=C(regeneratorRuntime.mark((function e(t){var r,n,o,i,u,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[0].value,1!==t.length){e.next=12;break}return e.next=4,a.findOperations(r);case 4:if(n=e.sent,a._isMounted){e.next=7;break}return e.abrupt("return");case 7:o=[{label:"[ALL]",value:"__ALL__"}].concat(R(n.sort().map((function(e){return{label:e,value:e,isLeaf:!1}})))),a.setState((function(e){return{serviceOptions:e.serviceOptions.map((function(e){return e.value===r?T({},e,{children:o}):e}))}})),e.next=23;break;case 12:if(2!==t.length){e.next=23;break}return i=t[1].value,u="__ALL__"===i?"":i,e.next=17,a.findTraces(r,u);case 17:if(c=e.sent,a._isMounted){e.next=20;break}return e.abrupt("return");case 20:0===(s=c.map((function(e){return{label:I(e),value:e.traceID}}))).length&&(s=[{label:"[No traces in time range]",value:"__NO_TRACES__"}]),a.setState((function(e){return{serviceOptions:e.serviceOptions.map((function(e){if(e.value===r&&e.children){var t=e.children.map((function(e){return e.value===i?T({},e,{children:s}):e}));return T({},e,{children:t})}return e}))}}));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.findOperations=function(){var e=C(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.datasource,o="/api/services/".concat(encodeURIComponent(t),"/operations"),e.prev=2,e.next=5,r.metadataRequest(o);case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),_.a.emit(n.AppEvents.alertError,["Failed to load operations from Jaeger",e.t0]);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.findTraces=function(){var e=C(regeneratorRuntime.mark((function e(t,r){var o,i,u,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.props.datasource,i=o.getTimeRange(),u=i.start,c=i.end,s={start:u,end:c,service:t,operation:r,limit:10,lookback:"1h",maxDuration:"",minDuration:""},"/api/traces",e.prev=4,e.next=7,o.metadataRequest("/api/traces",s);case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(4),_.a.emit(n.AppEvents.alertError,["Failed to load traces from Jaeger",e.t0]);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,r){return e.apply(this,arguments)}}(),a.onSelectTrace=function(e,t){var r=a.props,n=r.query,o=r.onChange,i=r.onRunQuery;3===t.length&&(o(T({},n,{query:t[2].value})),i())},a.state={serviceOptions:[]},a}var r,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),r=t,(a=[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getServices()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"getServices",value:(i=C(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.datasource,e.prev=2,e.next=5,t.metadataRequest("/api/services");case 5:if(r=e.sent,this._isMounted){e.next=8;break}return e.abrupt("return");case 8:r&&(a=r.sort().map((function(e){return{label:e,value:e,isLeaf:!1}})),this.setState({serviceOptions:a})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),_.a.emit(n.AppEvents.alertError,["Failed to load services from Jaeger",e.t0]);case 14:case"end":return e.stop()}}),e,this,[[2,11]])}))),function(){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.query,r=e.onChange,n=this.state.serviceOptions,a=n&&n.length?n:M;return P.a.createElement(P.a.Fragment,null,P.a.createElement("div",{className:"gf-form-inline gf-form-inline--nowrap"},P.a.createElement("div",{className:"gf-form flex-shrink-0"},P.a.createElement(E.ButtonCascader,{options:a,onChange:this.onSelectTrace,loadData:this.onLoadOptions},"Traces")),P.a.createElement("div",{className:"gf-form gf-form--grow flex-shrink-1"},P.a.createElement("div",{className:"slate-query-field__wrapper"},P.a.createElement("div",{className:"slate-query-field"},P.a.createElement("input",{style:{width:"100%"},value:t.query||"",onChange:function(e){return r(T({},t,{query:e.currentTarget.value}))}}))))))}}])&&L(r.prototype,a),o&&L(r,o),t}(P.a.PureComponent),M=[{label:"No traces found",value:"no_traces",isLeaf:!0}],U=r("Dljr");r.d(t,"plugin",(function(){return Q}));var Q=new n.DataSourcePlugin(w).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return P.a.createElement(P.a.Fragment,null,P.a.createElement(E.DataSourceHttpSettings,{defaultUrl:"http://localhost:16686",dataSourceConfig:t,showAccessOptions:!1,onChange:r}),P.a.createElement(U.a,{options:t,onOptionsChange:r}))})).setExploreQueryField(J)},Dljr:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("Obii"),a=r("kDLi"),o=r("kDDq"),i=r("q1tI"),u=r.n(i),c=r("Wkk1");function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding-bottom: ",";\n    color: ",";\n  "]);return s=function(){return e},e}function l(e){var t,r,o=e.options,i=e.onOptionsChange,s=Object(a.useStyles)(f);return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",{className:"page-heading"},"Trace to logs"),u.a.createElement("div",{className:s.infoText},"Trace to logs let's you navigate from a trace span to the selected data source's log."),u.a.createElement("div",{className:"gf-form"},u.a.createElement(a.InlineFormLabel,{tooltip:"The data source the trace is going to navigate to"},"Data source"),u.a.createElement(c.a,{pluginId:"loki",current:null===(t=o.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,noDefault:!0,onChange:function(e){var t;return Object(n.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:o},"tracesToLogs",{datasourceUid:e.uid,tags:null===(t=o.jsonData.tracesToLogs)||void 0===t?void 0:t.tags})}})),u.a.createElement("div",{className:"gf-form"},u.a.createElement(a.InlineFormLabel,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'"},"Tags"),u.a.createElement(a.TagsInput,{tags:null===(r=o.jsonData.tracesToLogs)||void 0===r?void 0:r.tags,onChange:function(e){var t;return Object(n.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:o},"tracesToLogs",{datasourceUid:null===(t=o.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,tags:e})}})))}var f=function(e){return{infoText:Object(o.css)(s(),e.spacing.md,e.colors.textSemiWeak)}}}}]);
//# sourceMappingURL=jaegerPlugin.6533b456cf289f2af922.js.map