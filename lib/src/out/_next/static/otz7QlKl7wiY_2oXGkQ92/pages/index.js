(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0KLy":function(t,e,n){"use strict";var r=n("p0XB"),o=n("/HRN"),u=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),l=n("N9n2"),c=n("XXOK"),f=n("UXZV"),d=n("eVuF"),s=n("pLtp"),p=n("hfKm"),h=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};p(e,"__esModule",{value:!0});var m=h(n("q1tI")),y=n("Q0KE"),v=[],_=[],b=!1;function g(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then(function(t){return n.loading=!1,n.loaded=t,t}).catch(function(t){throw n.loading=!1,n.error=t,t}),n}function w(t){var e={loading:!1,loaded:{},error:null},n=[];try{s(t).forEach(function(r){var o=g(t[r]);o.loading?e.loading=!0:(e.loaded[r]=o.loaded,e.error=o.error),n.push(o.promise),o.promise.then(function(t){e.loaded[r]=t}).catch(function(t){e.error=t})})}catch(r){e.error=r}return e.promise=d.all(n).then(function(t){return e.loading=!1,t}).catch(function(t){throw e.loading=!1,t}),e}function T(t,e){return m.default.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function M(t,e){var n,d=f({loader:null,loading:null,delay:200,timeout:null,render:T,webpack:null,modules:null},e),s=null;function p(){return s||(s=t(d.loader)),s.promise}if(!b&&"function"===typeof d.webpack){var h=d.webpack();_.push(function(t){var e=!0,n=!1,r=void 0;try{for(var o,u=c(h);!(e=(o=u.next()).done);e=!0){var a=o.value;if(-1!==t.indexOf(a))return p()}}catch(i){n=!0,r=i}finally{try{e||null==u.return||u.return()}finally{if(n)throw r}}})}return(n=function(e){function n(e){var r;return o(this,n),(r=a(this,i(n).call(this,e))).retry=function(){r.setState({error:null,loading:!0,timedOut:!1}),s=t(d.loader),r._loadModule()},p(),r.state={error:s.error,pastDelay:!1,timedOut:!1,loading:s.loading,loaded:s.loaded},r}return l(n,e),u(n,[{key:"UNSAFE_componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var t=this;if(this.context&&r(d.modules)&&d.modules.forEach(function(e){t.context(e)}),s.loading){"number"===typeof d.delay&&(0===d.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){t.setState({pastDelay:!0})},d.delay)),"number"===typeof d.timeout&&(this._timeout=setTimeout(function(){t.setState({timedOut:!0})},d.timeout));var e=function(){t._mounted&&(t.setState({error:s.error,loaded:s.loaded,loading:s.loading}),t._clearTimeouts())};s.promise.then(function(){e()}).catch(function(t){e()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?m.default.createElement(d.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?d.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return p()}}]),n}(m.default.Component)).contextType=y.LoadableContext,n}function E(t){return M(g,t)}function O(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return d.all(n).then(function(){if(t.length)return O(t,e)})}E.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return M(w,t)},E.preloadAll=function(){return new d(function(t,e){O(v).then(t,e)})},E.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new d(function(e){var n=function(){return b=!0,e()};O(_,t).then(n,n)})},window.__NEXT_PRELOADREADY=E.preloadReady,e.default=E},"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},"AT/M":function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),o=n.n(r),u=n("Z7t5"),a=n.n(u);function i(t){return(i="function"===typeof a.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":typeof t})(t)}function l(t){return(l="function"===typeof a.a&&"symbol"===i(o.a)?function(t){return i(t)}:function(t){return t&&"function"===typeof a.a&&t.constructor===a.a&&t!==a.a.prototype?"symbol":i(t)})(t)}var c=n("AT/M");function f(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?Object(c.a)(t):e}n.d(e,"a",function(){return f})},Q0KE:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var u=o(n("q1tI"));e.LoadableContext=u.createContext(null)},RNiq:function(t,e,n){"use strict";n.r(e);var r,o,u=n("0iUn"),a=n("MI3g"),i=n("a7VT"),l=n("AT/M"),c=n("Tit0"),f=n("vYYK"),d=(n("00et"),n("q1tI")),s=n.n(d),p=n("m/Pd"),h=n.n(p),m=n("UgXd"),y=n.n(m),v=s.a.createElement,_=y()(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"3aVm"))},{ssr:!1,loadableGenerated:{webpack:function(){return["3aVm"]},modules:["../components/App"]}}),b=(o=r=function(t){function e(t,n){var r;return Object(u.a)(this,e),r=Object(a.a)(this,Object(i.a)(e).call(this,t,n)),Object(f.a)(Object(l.a)(r),"render",function(){return v(s.a.Fragment,null,v(h.a,null,v("title",null,"React Native Performance Monitor"),v("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"})),v(_||"div",null))}),r.state={},r}return Object(c.a)(e,t),e}(s.a.Component),Object(f.a)(r,"displayName","HomePage"),o);e.default=b},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),o=n.n(r),u=n("TRZx"),a=n.n(u);function i(t,e){return(i=a.a||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",function(){return l})},UgXd:function(t,e,n){"use strict";var r=n("pLtp"),o=n("UXZV"),u=n("eVuF"),a=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};a(e,"__esModule",{value:!0});var l=i(n("q1tI")),c=i(n("0KLy")),f=!1;function d(t,e){if(delete e.webpack,delete e.modules,!f)return t(e);var n=e.loading;return function(){return l.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=d,e.default=function(t,e){var n=c.default,a={loading:function(t){return t.error,t.isLoading,t.pastDelay,null}};if(t instanceof u?a.loader=function(){return t}:"function"===typeof t?a.loader=t:"object"===typeof t&&(a=o({},a,t)),a=o({},a,e),"object"===typeof t&&!(t instanceof u)&&(t.render&&(a.render=function(e,n){return t.render(n,e)}),t.modules)){n=c.default.Map;var i={},l=t.modules();r(l).forEach(function(t){var e=l[t];"function"!==typeof e.then?i[t]=e:i[t]=function(){return e.then(function(t){return t.default||t})}}),a.loader=i}if(a.loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated,"boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,d(n,a);delete a.ssr}return n(a)}},a7VT:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("Bhuq"),o=n.n(r),u=n("TRZx"),a=n.n(u);function i(t){return(i=a.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},vYYK:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("hfKm"),o=n.n(r);function u(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var t=n("RNiq");return{page:t.default||t}}])}},[["vlRD",1,0,6]]]);