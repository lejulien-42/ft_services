(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"02dm":function(t,e,r){"use strict";r.r(e);var a=r("KHwQ"),n=r.n(a),i=r("LvDl"),o=r.n(i),s=r("F/XL"),u=r("67Y/"),l=r("t8hP"),c=r("Obii"),g=r("5kRJ");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function d(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(t){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(g.a)();return m(this,e),(r=d(this,v(e).call(this,t))).templateSrv=a,r.type="opentsdb",r.url=t.url,r.name=t.name,r.withCredentials=t.withCredentials,r.basicAuth=t.basicAuth,t.jsonData=t.jsonData||{},r.tsdbVersion=t.jsonData.tsdbVersion||1,r.tsdbResolution=t.jsonData.tsdbResolution||1,r.lookupLimit=t.jsonData.lookupLimit||1e3,r.tagKeys={},r.aggregatorsPromise=null,r.filterTypesPromise=null,r}var r,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),r=e,(a=[{key:"query",value:function(t){var e=this,r=this.convertToTSDBTime(t.range.raw.from,!1,t.timezone),a=this.convertToTSDBTime(t.range.raw.to,!0,t.timezone),n=[];o.a.each(t.targets,(function(r){r.metric&&n.push(e.convertTargetToQuery(r,t,e.tsdbVersion))}));var i=o.a.compact(n);if(o.a.isEmpty(i))return Object(s.a)({data:[]});var l={};return o.a.each(i,(function(t){t.filters&&t.filters.length>0?o.a.each(t.filters,(function(t){l[t.tagk]=!0})):o.a.each(t.tags,(function(t,e){l[e]=!0}))})),t.targets=o.a.filter(t.targets,(function(t){return!0!==t.hide})),this.performTimeSeriesQuery(i,r,a).pipe(Object(u.a)((function(r){var a=e.mapMetricsToTargets(r.data,t,e.tsdbVersion);return{data:o.a.map(r.data,(function(r,n){return-1===(n=a[n])&&(n=0),e._saveTagKeys(r),e.transformMetricData(r,l,t.targets[n],t,e.tsdbResolution)}))}})))}},{key:"annotationQuery",value:function(t){var e=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),r=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),a=[],n=[];a.push({aggregator:"sum",metric:t.annotation.target});var i=o.a.compact(a);return this.performTimeSeriesQuery(i,e,r).pipe(Object(u.a)((function(e){if(e.data[0]){var r=e.data[0].annotations;t.annotation.isGlobal&&(r=e.data[0].globalAnnotations),r&&o.a.each(r,(function(e){var r={text:e.description,time:1e3*Math.floor(e.startTime),annotation:t.annotation};n.push(r)}))}return n}))).toPromise()}},{key:"targetContainsTemplate",value:function(t){if(t.filters&&t.filters.length>0)for(var e=0;e<t.filters.length;e++)if(this.templateSrv.variableExists(t.filters[e].filter))return!0;if(t.tags&&Object.keys(t.tags).length>0)for(var r in t.tags)if(this.templateSrv.variableExists(t.tags[r]))return!0;return!1}},{key:"performTimeSeriesQuery",value:function(t,e,r){var a=!1;2===this.tsdbResolution&&(a=!0);var n={start:e,queries:t,msResolution:a,globalAnnotations:!0};3===this.tsdbVersion&&(n.showQuery=!0),r&&(n.end=r);var i={method:"POST",url:this.url+"/api/query",data:n};return this._addCredentialOptions(i),Object(l.getBackendSrv)().fetch(i)}},{key:"suggestTagKeys",value:function(t){return Promise.resolve(this.tagKeys[t]||[])}},{key:"_saveTagKeys",value:function(t){var e=Object.keys(t.tags);o.a.each(t.aggregateTags,(function(t){e.push(t)})),this.tagKeys[t.metric]=e}},{key:"_performSuggestQuery",value:function(t,e){return this._get("/api/suggest",{type:e,q:t,max:this.lookupLimit}).pipe(Object(u.a)((function(t){return t.data})))}},{key:"_performMetricKeyValueLookup",value:function(t,e){if(!t||!e)return Object(s.a)([]);var r=e.split(",").map((function(t){return t.trim()})),a=r[0],n=a+"=*";r.length>1&&(n+=","+r.splice(1).join(","));var i=t+"{"+n+"}";return this._get("/api/search/lookup",{m:i,limit:this.lookupLimit}).pipe(Object(u.a)((function(t){t=t.data.results;var e=[];return o.a.each(t,(function(t){-1===e.indexOf(t.tags[a])&&e.push(t.tags[a])})),e})))}},{key:"_performMetricKeyLookup",value:function(t){return t?this._get("/api/search/lookup",{m:t,limit:1e3}).pipe(Object(u.a)((function(t){t=t.data.results;var e=[];return o.a.each(t,(function(t){o.a.each(t.tags,(function(t,r){-1===e.indexOf(r)&&e.push(r)}))})),e}))):Object(s.a)([])}},{key:"_get",value:function(t,e){var r={method:"GET",url:this.url+t,params:e};return this._addCredentialOptions(r),Object(l.getBackendSrv)().fetch(r)}},{key:"_addCredentialOptions",value:function(t){(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers={Authorization:this.basicAuth})}},{key:"metricFindQuery",value:function(t){if(!t)return Promise.resolve([]);var e;try{e=this.templateSrv.replace(t,{},"distributed")}catch(t){return Promise.reject(t)}var r=function(t){return o.a.map(t,(function(t){return{text:t}}))},a=e.match(/metrics\((.*)\)/);if(a)return this._performSuggestQuery(a[1],"metrics").pipe(Object(u.a)(r)).toPromise();var n=e.match(/tag_names\((.*)\)/);if(n)return this._performMetricKeyLookup(n[1]).pipe(Object(u.a)(r)).toPromise();var i=e.match(/tag_values\((.*?),\s?(.*)\)/);if(i)return this._performMetricKeyValueLookup(i[1],i[2]).pipe(Object(u.a)(r)).toPromise();var s=e.match(/suggest_tagk\((.*)\)/);if(s)return this._performSuggestQuery(s[1],"tagk").pipe(Object(u.a)(r)).toPromise();var l=e.match(/suggest_tagv\((.*)\)/);return l?this._performSuggestQuery(l[1],"tagv").pipe(Object(u.a)(r)).toPromise():Promise.resolve([])}},{key:"testDatasource",value:function(){return this._performSuggestQuery("cpu","metrics").pipe(Object(u.a)((function(){return{status:"success",message:"Data source is working"}}))).toPromise()}},{key:"getAggregators",value:function(){return this.aggregatorsPromise||(this.aggregatorsPromise=this._get("/api/aggregators").pipe(Object(u.a)((function(t){return t.data&&o.a.isArray(t.data)?t.data.sort():[]}))).toPromise()),this.aggregatorsPromise}},{key:"getFilterTypes",value:function(){return this.filterTypesPromise||(this.filterTypesPromise=this._get("/api/config/filters").pipe(Object(u.a)((function(t){return t.data?Object.keys(t.data).sort():[]}))).toPromise()),this.filterTypesPromise}},{key:"transformMetricData",value:function(t,e,r,a,n){var i=this.createMetricLabel(t,r,e,a),s=[];return o.a.each(t.dps,(function(t,e){2===n?s.push([t,1*e]):s.push([t,1e3*e])})),{target:i,datapoints:s}}},{key:"createMetricLabel",value:function(t,e,r,a){if(e.alias){var n=o.a.clone(a.scopedVars||{});return o.a.each(t.tags,(function(t,e){n["tag_"+e]={value:t}})),this.templateSrv.replace(e.alias,n)}var i=t.metric,s=[];return o.a.isEmpty(t.tags)||o.a.each(o.a.toPairs(t.tags),(function(t){o.a.has(r,t[0])&&s.push(t[0]+"="+t[1])})),o.a.isEmpty(s)||(i+="{"+s.join(", ")+"}"),i}},{key:"convertTargetToQuery",value:function(t,e,r){if(!t.metric||t.hide)return null;var a={metric:this.templateSrv.replace(t.metric,e.scopedVars,"pipe"),aggregator:"avg"};if(t.aggregator&&(a.aggregator=this.templateSrv.replace(t.aggregator)),t.shouldComputeRate&&(a.rate=!0,a.rateOptions={counter:!!t.isCounter},t.counterMax&&t.counterMax.length&&(a.rateOptions.counterMax=parseInt(t.counterMax,10)),t.counterResetValue&&t.counterResetValue.length&&(a.rateOptions.resetValue=parseInt(t.counterResetValue,10)),r>=2&&(a.rateOptions.dropResets=!(a.rateOptions.counterMax||a.rateOptions.ResetValue&&0!==a.rateOptions.ResetValue))),!t.disableDownsampling){var i=this.templateSrv.replace(t.downsampleInterval||e.interval);i.match(/\.[0-9]+s/)&&(i=1e3*parseFloat(i)+"ms"),a.downsample=i+"-"+t.downsampleAggregator,t.downsampleFillPolicy&&"none"!==t.downsampleFillPolicy&&(a.downsample+="-"+t.downsampleFillPolicy)}if(t.filters&&t.filters.length>0){if(a.filters=n.a.copy(t.filters),a.filters)for(var o in a.filters)a.filters[o].filter=this.templateSrv.replace(a.filters[o].filter,e.scopedVars,"pipe")}else if(a.tags=n.a.copy(t.tags),a.tags)for(var s in a.tags)a.tags[s]=this.templateSrv.replace(a.tags[s],e.scopedVars,"pipe");return t.explicitTags&&(a.explicitTags=!0),a}},{key:"mapMetricsToTargets",value:function(t,e,r){var a,n,i=this;return o.a.map(t,(function(t){return 3===r?t.query.index:o.a.findIndex(e.targets,(function(r){return r.filters&&r.filters.length>0?r.metric===t.metric:r.metric===t.metric&&o.a.every(r.tags,(function(r,s){return a=i.templateSrv.replace(r,e.scopedVars,"pipe"),n=a.split("|"),o.a.includes(n,t.tags[s])||"*"===a}))}))}))}},{key:"interpolateVariablesInQueries",value:function(t,e){var r=this;return t.length?t.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t,{metric:r.templateSrv.replace(t.metric,e)})})):t}},{key:"convertToTSDBTime",value:function(t,e,r){return"now"===t?null:(t=c.dateMath.parse(t,e,r)).valueOf()}}])&&y(r.prototype,a),i&&y(r,i),e}(c.DataSourceApi);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function w(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var S=function(t){function e(t,r){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(a=w(this,k(e).call(this,t,r))).errors=a.validateTarget(),a.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],a.fillPolicies=["none","nan","null","zero"],a.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],a.tsdbVersion=a.datasource.tsdbVersion,a.target.aggregator||(a.target.aggregator="sum"),a.target.downsampleAggregator||(a.target.downsampleAggregator="avg"),a.target.downsampleFillPolicy||(a.target.downsampleFillPolicy="none"),a.datasource.getAggregators().then((function(t){0!==t.length&&(a.aggregators=t)})),a.datasource.getFilterTypes().then((function(t){0!==t.length&&(a.filterTypes=t)})),a.suggestMetrics=function(t,e){a.datasource.metricFindQuery("metrics("+t+")").then(a.getTextValues).then(e)},a.suggestTagKeys=function(t,e){a.datasource.suggestTagKeys(a.target.metric).then(e)},a.suggestTagValues=function(t,e){a.datasource.metricFindQuery("suggest_tagv("+t+")").then(a.getTextValues).then(e)},a}var r,a,n;return e.$inject=["$scope","$injector"],function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),r=e,(a=[{key:"targetBlur",value:function(){this.errors=this.validateTarget(),this.refresh()}},{key:"getTextValues",value:function(t){return o.a.map(t,(function(t){return c.textUtil.escapeHtml(t.text)}))}},{key:"addTag",value:function(){this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),this.addTagMode=!1):this.addTagMode=!0}},{key:"removeTag",value:function(t){delete this.target.tags[t],this.targetBlur()}},{key:"editTag",value:function(t,e){this.removeTag(t),this.target.currentTagKey=t,this.target.currentTagValue=e,this.addTag()}},{key:"closeAddTagMode",value:function(){this.addTagMode=!1}},{key:"addFilter",value:function(){if(this.target.tags&&o.a.size(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),this.addFilterMode){if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){var t={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(t),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1}else this.addFilterMode=!0}},{key:"removeFilter",value:function(t){this.target.filters.splice(t,1),this.targetBlur()}},{key:"editFilter",value:function(t,e){this.removeFilter(e),this.target.currentFilterKey=t.tagk,this.target.currentFilterValue=t.filter,this.target.currentFilterType=t.type,this.target.currentFilterGroupBy=t.groupBy,this.addFilter()}},{key:"closeAddFilterMode",value:function(){this.addFilterMode=!1}},{key:"validateTarget",value:function(){var t={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?c.rangeUtil.describeInterval(this.target.downsampleInterval):t.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(e){t.downsampleInterval=e.message}return this.target.tags&&o.a.has(this.target.tags,this.target.currentTagKey)&&(t.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),t}}])&&j(r.prototype,a),n&&j(r,n),e}(r("LzXI").QueryCtrl);S.templateUrl="partials/query.editor.html";var _=r("q1tI"),F=r.n(_),D=r("kDLi");function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M=D.LegacyForms.Select,C=D.LegacyForms.Input,L=[{label:"<=2.1",value:1},{label:"==2.2",value:2},{label:"==2.3",value:3}],K=[{label:"second",value:1},{label:"millisecond",value:2}],B=function(t){var e,r,a,n=t.onChange,i=t.value;return F.a.createElement(F.a.Fragment,null,F.a.createElement("h5",null,"OpenTSDB settings"),F.a.createElement("div",{className:"gf-form"},F.a.createElement(D.InlineFormLabel,{width:7},"Version"),F.a.createElement(M,{options:L,value:null!==(e=L.find((function(t){return t.value===i.jsonData.tsdbVersion})))&&void 0!==e?e:L[0],onChange:Q("tsdbVersion",i,n)})),F.a.createElement("div",{className:"gf-form"},F.a.createElement(D.InlineFormLabel,{width:7},"Resolution"),F.a.createElement(M,{options:K,value:null!==(r=K.find((function(t){return t.value===i.jsonData.tsdbResolution})))&&void 0!==r?r:K[0],onChange:Q("tsdbResolution",i,n)})),F.a.createElement("div",{className:"gf-form"},F.a.createElement(D.InlineFormLabel,{width:7},"Lookup Limit"),F.a.createElement(C,{type:"number",value:null!==(a=i.jsonData.lookupLimit)&&void 0!==a?a:1e3,onChange:R("lookupLimit",i,n)})))},Q=function(t,e,r){return function(a){r(E({},e,{jsonData:E({},e.jsonData,x({},t,a.value))}))}},R=function(t,e,r){return function(a){r(E({},e,{jsonData:E({},e.jsonData,x({},t,a.currentTarget.value))}))}};r.d(e,"plugin",(function(){return I}));var A=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};A.templateUrl="partials/annotations.editor.html";var I=new c.DataSourcePlugin(O).setQueryCtrl(S).setConfigEditor((function(t){var e=t.options,r=t.onOptionsChange;return F.a.createElement(F.a.Fragment,null,F.a.createElement(D.DataSourceHttpSettings,{defaultUrl:"http://localhost:4242",dataSourceConfig:e,onChange:r}),F.a.createElement(B,{value:e,onChange:r}))})).setAnnotationQueryCtrl(A)}}]);
//# sourceMappingURL=opentsdbPlugin.6533b456cf289f2af922.js.map