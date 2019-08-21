(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[19],{1065:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(196),o=n(200),u=n(279),c=n(12),s=n(1066),l=n.n(s),d=n(1067),h=n.n(d),f=Object(c.b)(l.a,h.a),m=[];u.a.start(),u.a.setType("disabled"),n(1068),u.a.setType("example"),n(1069),u.a.setType("format"),n(1070),u.a.setType("onchange"),n(1071),u.a.setType("prediction"),n(1072),u.a.setType("separator"),n(1073);var v=u.a.end(),p={disabled:{text:n(1074),log:v.disabled},example:{text:n(1075),log:v.example},format:{text:n(1076),log:v.format},onchange:{text:n(1077),log:v.onchange},prediction:{text:n(1078),log:v.prediction},separator:{text:n(1079),log:v.separator}};t.default=Object(i.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:p,source:f,examples:m}))})},1066:function(e,t){e.exports="# Datum.List 数据处理\n\n列表数据辅助类，用来处理如 Select，Table 等组件在复杂数据情况下，格式化数据、校验状态、拼接结果等操作。\n\n\n## 示例\n\n这个页面中示例用到的数据如下\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n<code name=\"example\" />\n\n## 初始化参数\n\n### format  *null | string | function(d)*\nformat 是Datum内部用来把复杂数据格式化为需要的值，可以为 null, string, function\n\n- **null** - 为空时，返回值为原始数据\n- **string** - 为string时，会作为key从原始数据中获取值，相当于 (d) => d\\[format]\n- **function(d)** - d 为单条原始数据\n\n<code name=\"format\" />\n\n### onChange *function(value)*\n值改变时触发的回调函数。value 为 format 函数格式化后的数据。\n\n<code name=\"onchange\" />\n\n### separator *null | string*\n分隔符。为空时，value会保留Array格式。不为空时，value会处理为 separator 分隔的字符串。\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDatum内部存储的是format之后的值，所以需要prediction函数来比对存储的值和原始数据是否一致。不设置，会使用此默认值:\n```\n(val, d) => val === format(d)\n```\n\n通常用在 value 为对象时，值相同却不是同一个对象等情况。\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\n判断数据项是否禁用。如果返回 true，add 和 remove 函数会忽略此数据。\n\n<code name=\"disabled\" />\n\n### value *array | string*\n初始值，可以为 Array 或 String。\n\n## 函数\n\n### getValue *function():array|string*\n获取当前值。根据separator的设置，返回array或者string。\n\n### setValue *function(array|string)*\n设置值。新的值会替代当前值。\n\n### add *function(array|object)*\n添加数据。值为 format 前的原始数据，单条或者一组数据。\n\n### remove *function(array|object)*\n移除数据。值为 format 前的原始数据，单条或者一组数据。\n\n### clear *function*\n清空数据。"},1067:function(e,t){e.exports="# Datum.List\n\n The auxiliary class that process the array values.\n \n## Example\n\nThe data used in the example on this page is as follows:\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n\n<br />\n\n<code name=\"example\" />\n\n## Arguments\n\n### format  *null | string | function(d)*\nThe format is used to convert the original data object to the specified value.\n\n- **null** - When it is null, the return value is the original data.\n- **string** - When it is a string, it will get the value from the original data as the key, which is equivalent to (d) => d\\[format].\n- **function(d)** - d is the single original data.\n\n<code name=\"format\" />\n\n### onChange *function(value)*\nA callback function triggered when a value changes. Value is an array of the formatted data for the format function or string(separator is a string).\n\n<code name=\"onchange\" />\n\n### separator *null | string*\nWhen it is null, value is the Array format.\n\nWhen it is a string, value is a string delimited by the separator.\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDetermine whether the value is consistent with the original data. If it is not set, this default prediction will be used:\n```\n(val, d) => val === format(d)\n```\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\nDetermines whether data items are disabled. If true, the add and remove functions will ignore this item.\n\n<code name=\"disabled\" />\n\n### value *array | string*\nThe initial value.\n\n## Methods\n\n### getValue *function():array|string*\nGet the current values. Return array or string depending on the separator setting.\n\n### setValue *function(array|string)*\nSet the value. The new value will replace the current value.\n\n### add *function(array|object)*\nAdd data. The value is the original data before being formatted.\n\n### remove *function(array|object)*\nRemove data. The value is the original data before being formatted.\n\n### clear *function*\nClear all data.\n"},1068:function(e,t,n){"use strict";n.r(t);var a=n(210),r=n(271),i=new a.a.List({disabled:function(e){return"blue"===e.name||"red"===e.name},format:function(e){return e.name},onChange:function(e){console.log(e)}});i.setValue(["red"]),i.add([r.a.orange,r.a.blue]),i.remove([r.a.orange,r.a.red])},1069:function(e,t,n){"use strict";n.r(t);var a=n(210),r=n(271),i=new a.a.List({format:"name",separator:",",prediction:function(e,t){return e===t.name},value:"blue",onChange:function(e){console.log(e)}});i.add(r.a.orange),i.add(r.a.green),i.remove(r.a.green),i.clear(),i.setValue("red,violet"),i.add(r.a.cyan)},1070:function(e,t,n){"use strict";n.r(t);var a=n(210),r=n(271),i=new a.a.List({});i.add(r.a.red),console.log(i.getValue()),(i=new a.a.List({format:function(e){return e.name}})).add(r.a.red),console.log(i.getValue()),(i=new a.a.List({format:function(e){return"".concat(e.id,"-").concat(e.name)}})).add(r.a.red),i.add(r.a.green),console.log(i.getValue())},1071:function(e,t,n){"use strict";n.r(t);var a=n(210),r=n(271),i=new a.a.List({format:function(e){return e.name},onChange:function(e){console.log(e)}});i.setValue(["blue"]),i.add(r.a.red),i.add(r.a.orange),i.remove(r.a.red),i.clear()},1072:function(e,t,n){"use strict";n.r(t);var a=n(210),r=n(271),i=new a.a.List({format:"id",separator:",",prediction:function(e,t){return parseInt(e,10)===t.id},value:"2,3"});i.add(r.a.red),console.log(i.getValue()),i.remove(r.a.orange),console.log(i.getValue())},1073:function(e,t,n){"use strict";n.r(t);var a=n(210),r=n(271),i=function(e){return console.log(e)},o=new a.a.List({format:"id",value:[2,3],onChange:i});o.add(r.a.red),(o=new a.a.List({format:"name",onChange:i,separator:",",value:"red,yellow"})).add(r.a.blue),o.remove(r.a.yellow),(o=new a.a.List({format:"name",onChange:i,separator:"|",value:"red|yellow"})).add(r.a.cyan)},1074:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  disabled: d => d.name === 'blue' || d.name === 'red',\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['red'])\ndatum.add([data.orange, data.blue]) // orange, blue\ndatum.remove([data.orange, data.red]) // orange, red\n"},1075:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'name',\n  separator: ',',\n  prediction: (val, d) => val === d.name,\n  value: 'blue',\n  onChange: values => {\n    console.log(values)\n  },\n})\ndatum.add(data.orange)\ndatum.add(data.green)\ndatum.remove(data.green)\ndatum.clear()\ndatum.setValue('red,violet')\ndatum.add(data.cyan)\n"},1076:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nlet datum = new Datum.List({})\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => d.name })\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => `${d.id}-${d.name}` })\ndatum.add(data.red)\ndatum.add(data.green)\nconsole.log(datum.getValue())\n"},1077:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: d => d.name,\n  onChange(value) {\n    console.log(value)\n  },\n})\n\ndatum.setValue(['blue'])\ndatum.add(data.red)\ndatum.add(data.orange)\ndatum.remove(data.red)\ndatum.clear()\n"},1078:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'id',\n  separator: ',',\n  prediction: (val, d) => parseInt(val, 10) === d.id,\n  value: '2,3',\n})\ndatum.add(data.red)\nconsole.log(datum.getValue())\ndatum.remove(data.orange)\nconsole.log(datum.getValue())\n"},1079:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst onChange = value => console.log(value)\n\nlet datum = new Datum.List({ format: 'id', value: [2, 3], onChange })\ndatum.add(data.red)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: ',',\n  value: 'red,yellow',\n})\ndatum.add(data.blue)\ndatum.remove(data.yellow)\n\ndatum = new Datum.List({\n  format: 'name',\n  onChange,\n  separator: '|',\n  value: 'red|yellow',\n})\ndatum.add(data.cyan)\n"},196:function(e,t,n){"use strict";var d=n(21),h=n(0),f=n.n(h),m=n(232),v=n(40),p=n(14);t.a=function(l){return function(e){var t=Object(h.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(h.useState)([]),o=Object(d.a)(i,1)[0],u=e.location.hash,c=Object(h.useCallback)(function(e){e.forEach(function(e){o.push(e)})},[]),s=Object(h.useCallback)(function(){if(u){var e=document.querySelector(u);e&&setTimeout(function(){e.scrollIntoView()},50)}},[u]);Object(h.useEffect)(function(){s();var e=function(){var n=document.documentElement.scrollTop,e=o.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return f.a.createElement("div",{className:Object(p.f)("_")},f.a.createElement(l,{onHeadingSetted:c}),!e.noNav&&f.a.createElement(m.a,{className:Object(p.f)("sticky"),top:50},f.a.createElement("div",{className:Object(p.f)("nav")},o.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return f.a.createElement("a",{key:t,className:Object(p.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===v.a.location.search.indexOf("?example="))v.a.push("".concat(v.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{v.a.push("".concat(v.a.location.pathname,"#").concat(e));var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},197:function(e,t,n){"use strict";n.d(t,"i",function(){return a}),n.d(t,"j",function(){return r}),n.d(t,"k",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"h",function(){return h}),n.d(t,"d",function(){return f});var a=function(e){return"__CHANGE_SUBSCRIBE_".concat(e,"__")},r=function(e){return"__ERROR_SUBSCRIBE_".concat(e,"__")},i=function(e){return"__UPDATE_SUBSCRIBE_".concat(e,"__")},o="__CHANGE_TOPIC__",u="__VALIDATE_TOPIC__",c="__RESET_TOPIC__",s="__VALIDATE_FORCE_PASS__",l="__IGNORE_VALIDATE__",d="__UPDATE_ERROR_TYPE__",h="__WITH_OUT_DISPATCH__",f="__IGNORE_BIND__"},200:function(e,t,n){"use strict";var x=n(0),S=n.n(x),l=n(31),T=n(21),a=n(236),d=n.n(a),h=n(32),f=n(36),D=n(14),m=n(12),r=n(11),o=n.n(r),i=n(237),u=n.n(i),A=(n(238),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,i=Object(x.useRef)(null);return Object(x.useEffect)(function(){var e=i.current;u.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),S.a.createElement("pre",{ref:i,className:o()(n||"lang-jsx",Object(D.a)("pre"))},S.a.createElement("code",null,r))}),N=n(228),c=n(49),s=n(7),v=n(8),p=n(6),b=n(2),g=n(9),y=n(35),O=n(205),L=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(g.a)(n,e),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:S.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(y.b),R=n(62),I=n(40),P=S.a.createElement("div",{className:Object(D.a)("placeholder")},S.a.createElement(c.a,null));function j(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,i=e.title,o=Object(x.useRef)(null),u=Object(x.useState)(!1),c=Object(T.a)(u,2),s=c[0],l=c[1],d=Object(x.useState)(Object(x.createElement)(t)),h=Object(T.a)(d,1)[0],f=Object(x.useState)(),m=Object(T.a)(f,2),v=m[0],p=m[1],b=Object(x.useState)(),g=Object(T.a)(b,1)[0],y=function e(t,n,a){o.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(x.useEffect)(function(){if(o.current)if(s)o.current.style.height="".concat(v,"px");else{var e=v%15;0<e&&y(e,1,g),y((v-e)/15,15,g)}},[s]);var O=function(e){l(!s),g=e},j=function(e){return S.a.createElement("a",{href:"javascript:;",className:Object(D.a)("toggle"),onClick:O.bind(null,e)},S.a.createElement(R.a,{name:s?"code-close":"code"}))},E=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),k=I.a.location.search,w="?example=";if(0===k.indexOf(w)&&(k=k.replace(w,""),a.indexOf(k)<0))return null;var $=i.split("\n"),V=Object(N.a)($),_=V[0],C=V.slice(1);return _&&(_=_.trim()),S.a.createElement(x.Fragment,null,_&&S.a.createElement("h3",{key:"0",id:n},_),S.a.createElement(L,{placeholder:P},S.a.createElement("div",{className:Object(D.a)("_",s&&"showcode")},S.a.createElement("div",{className:Object(D.a)("body")},h),0<i.length&&S.a.createElement("div",{className:Object(D.a)("desc")},C.map(function(e,t){return S.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),j(!1)),S.a.createElement("div",{ref:o,className:Object(D.a)("code")},S.a.createElement(A,{onHighLight:function(e){p(e)},onClose:O,value:E}),j(!0)))))}j.defaultProps={rawText:""};var E=function(e){var t=e.children,n=Object(x.useState)(!1),a=Object(T.a)(n,2),r=a[0],i=a[1],o=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),u=r?"pre":"div";return S.a.createElement("div",{onClick:function(){i(!r)},className:Object(D.e)("console")},S.a.createElement(u,null,o))};E.defaultProps={children:[]};var k=E;function w(e){var t=e.children,n=Object(l.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return S.a.createElement("div",{style:{overflow:"auto"}},S.a.createElement("table",{className:"doc-api-table"},t[0],S.a.cloneElement(t[1],{children:n})))}w.defaultProps={};var $=w,V=/^<code name="([\w|-]+)" /,_=/^<example name="([\w|-]+)"/;function C(e){var t=e.onHeadingSetted,i=e.codes,o=e.examples,n=e.source,a=Object(x.useState)([]),r=Object(T.a)(a,1)[0],u=Object(x.useState)({}),c=Object(T.a)(u,1)[0];Object(x.useEffect)(function(){t&&t(r)},[]);var s=function(e){r.push(e)};return r=[],S.a.createElement(d.a,{className:Object(D.e)("_"),source:n,renderers:{code:A,heading:function(e){var t,n,a=e.level,r=e.children,i="".concat(a,"-").concat(r[0]),o="h".concat(a);if("object"==typeof r[0])return S.a.createElement(o,null,r);if(!c[i]){var u="heading-".concat((t=a,n=r[0],4===t?Object(f.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:u,level:a,children:r}),c[i]=S.a.createElement(o,{id:u},r)}return c[i]},html:function(e){if("<example />"===e.value)return function(){if(c.examples)return c.examples;if(!o)return S.a.createElement("div",null);var e=Object(m.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),c.examples=[S.a.createElement("h2",{key:"h",id:t},e)].concat(Object(l.a)(o.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(T.a)(a,1)[0];return s({id:n,level:3,children:[r]}),S.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),c.examples}();var t=e.value.match(_);if(t)return function(t){var e="example-".concat(t);if(!c[e]){var n=(o||[]).find(function(e){return e.name===t});c[e]=n?S.a.createElement(j,n):null}return c[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return S.a.createElement("br",null);var n,a,r=e.value.match(V);return r?(n=r[1],(a=i[n])?[S.a.createElement(A,{key:"cb",value:a.text})].concat(Object(l.a)(a.log.map(function(e,t){return S.a.createElement(k,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:$,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?S.a.createElement("a",{href:e.href,target:t},e.children):S.a.createElement(h.a,{to:e.href,target:t},e.children)}}})}C.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var F=n(63),B=n(196);n.d(t,"a",function(){return M});var U,H=((U=function(e){var t=Object(x.useState)(e.source),n=Object(T.a)(t,2),a=n[0],r=n[1];return Object(x.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?S.a.createElement(C,Object.assign({},e,{source:a})):S.a.createElement(F.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(x.memo)(U));t.b=H;function M(t,n){return Object(B.a)(function(e){return S.a.createElement(H,Object.assign({},e,{noNav:n,loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var a=n(214),r=n(36),i=n(19),o={},u=null,c=!1,s=i.b.height;function l(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function d(e){e&&delete o[e]}document.addEventListener("scroll",function(){u&&clearTimeout(u),u=setTimeout(function(){c||(c=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>s||(delete o[e],a())}),c=!1),u=null},80)},a.a)},206:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return d});var i=n(7),o=n(6),u=n(2),a=n(9),r=n(224),c=function(e){function r(e,t,n){var a;return Object(i.a)(this,r),(a=Object(o.a)(this,Object(u.a)(r).call(this))).message=e,a.name=t,a.value=n,a}return Object(a.a)(r,e),r}(Object(r.a)(Error)),s=function e(t){return t instanceof Error?new c(t.message):Array.isArray(t)?t.map(e):t},l=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return new Promise(function(n,a){Promise.all(e).then(function(e){var t=e.find(function(e){return!0!==e});t?a(t):n(!0)}).catch(function(e){a(t?s(e):e)})})},d=function(e,t){return e===t||(e instanceof Error&&t instanceof Error?e.message===t.message:e===t)}},210:function(e,t,n){"use strict";var a=n(225),p=n(7),b=n(8),g=n(55),y=n(197),r=function(){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(p.a)(this,s);var t=e.format,n=e.onChange,a=e.separator,r=e.value,i=e.prediction,o=e.distinct,u=e.disabled,c=e.limit;this.distinct=o,this.limit=c,this.separator=a,this.initFormat(t),this.$events={},this.$cachedDisabled={},this.setDisabled(u),i&&(this.prediction=i),this.setValue(r,y.h),this.onChange=n}return Object(b.a)(s,[{key:"setDisabled",value:function(e){this.$cachedDisabled!==e&&(this.$cachedDisabled=e,this.disabled=function(){switch(typeof e){case"boolean":return e;case"function":return e.apply(void 0,arguments);default:return!1}})}},{key:"handleChange",value:function(e){if(this.$values=e,this.dispatch(y.a),this.onChange){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.onChange.apply(this,[this.getValue()].concat(n))}}},{key:"add",value:function(e){var t=this;if(null!=e){1===this.limit&&(this.$values=[]);var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)&&(!t.distinct||!t.check(e))});var a=[],r=!0,i=!1,o=void 0;try{for(var u,c=n[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=u.value,l=this.format(s);void 0!==l&&a.push(l)}}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}this.handleChange(this.values.concat(a),e,!0)}}},{key:"set",value:function(e){this.$values=[],this.add(e)}},{key:"check",value:function(e){if(this.prediction){for(var t=0,n=this.values.length;t<n;t++)if(this.prediction(this.values[t],e))return!0;return!1}return 0<=this.values.indexOf(this.format(e))}},{key:"clear",value:function(){this.values=[]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"initFormat",value:function(t){switch(typeof t){case"string":this.format=function(e){return e[t]};break;case"function":this.format=function(e){return t(e)};break;default:this.format=function(e){return e}}}},{key:"defaultPrediction",value:function(e,t){return e===this.format(t)}},{key:"remove",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)});var a=[],r=this.prediction||this.defaultPrediction.bind(this),i=!0,o=!1,u=void 0;try{e:for(var c,s=this.values[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){for(var l=c.value,d=0;d<n.length;d++)if(n[d].IS_NOT_MATCHED_VALUE||r(l,n[d])){n.splice(d,1);continue e}a.push(l)}}catch(e){o=!0,u=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw u}}this.handleChange(a,e,!1)}}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(this.$events[e]=this.$events[e].filter(function(e){return e!==t}))}},{key:"getValue",value:function(){var e=this.values;return 1===this.limit?e=this.values[0]:this.separator&&(e=this.values.join(this.separator)),this.$cachedValue=e}},{key:"resetValue",value:function(e,t){this.$values=e,this.onChange&&!t&&this.onChange(this.getValue()),this.dispatch(y.a),this.dispatch("set-value")}},{key:"formatValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return 1!==this.limit||Array.isArray(e)?e?Array.isArray(e)?e:"string"==typeof e?this.separator?e.split(this.separator).map(function(e){return e.trim()}):(console.warn("Select separator parameter is empty."),[e]):(console.error(new Error("Select values is not valid.")),[]):[]:[e]}},{key:"setValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];(1<arguments.length?arguments[1]:void 0)===y.h?this.$values=this.formatValue(e):this.resetValue(this.formatValue(e),Object(g.b)(this.$cachedValue,e)),this.$cachedValue=this.getValue()}},{key:"length",get:function(){return this.$values.length}},{key:"values",get:function(){return this.$values},set:function(e){this.$values=e,this.dispatch(y.a),this.onChange&&this.onChange(this.getValue())}}]),s}(),O=n(17),j=n(6),E=n(2),k=n(9),i=n(0),w=n.n(i),o=n(53),$={form:a.a,list:r},u=Object(o.b)(function(e,a){var t,n,r=e||{},i=r.type,o=void 0===i?"list":i,u=r.key,c=void 0===u?"value":u,s=r.limit,l=void 0===s?0:s,d=r.bindProps,h=void 0===d?[]:d,f=r.ignoreUndefined,m=r.pure,v=$[o];return n=t=function(e){function u(n){var e;Object(p.a)(this,u),e=Object(j.a)(this,Object(E.a)(u).call(this,n));var t=n.datum,a=n.onChange,r=n.initValidate,i=n[c];if(t instanceof v)e.datum=t;else{var o=h.reduce(function(e,t){return e[t]=n[t],e},{value:i,limit:l,initValidate:r});e.datum=new v(Object.assign(o,t))}return a&&(e.datum.onChange=a),e}return Object(k.a)(u,e),Object(b.a)(u,[{key:"componentDidMount",value:function(){this.prevValues=this.props[c]}},{key:"componentDidUpdate",value:function(e){e.onChange!==this.props.onChange&&(this.datum.onChange=this.props.onChange);var t=this.props[c];Object(g.b)(t,this.prevValues)||(this.setValue(this.props.initValidate?void 0:y.e),this.prevValues=t)}},{key:"setValue",value:function(e){var t=this.props[c];f&&void 0===t||this.datum.setValue(t,e)}},{key:"render",value:function(){var e=this.props,t=e.onDatumBind,n=Object(O.a)(e,["onDatumBind"]);return t&&t(this.datum),h.includes("disabled")&&void 0!==n.disabled&&this.datum.setDisabled(n.disabled),"list"===o&&this.setValue(y.h),w.a.createElement(a,Object.assign({},n,{datum:this.datum}))}}]),u}(void 0===m||m?w.a.PureComponent:w.a.Component),t.defaultProps={initValidate:!1},n});t.a={Form:a.a,List:r,hoc:u}},224:function(e,t,n){"use strict";var r=n(2),i=n(57);function o(e,t,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var r=new(Function.bind.apply(e,a));return n&&Object(i.a)(r,n.prototype),r}).apply(null,arguments)}function u(e){var a="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,n)}function n(){return o(e,arguments,Object(r.a)(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Object(i.a)(n,e)})(e)}n.d(t,"a",function(){return u})},225:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var u=n(31),s=n(7),a=n(8),r=n(66),i=n.n(r),o=n(65),l=n(67),d=n(47),h=n(3),f=n(206),m=n(197),c=function(){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,c);var t=e.removeUndefined,n=void 0===t||t,a=e.rules,r=e.onChange,i=e.value,o=e.error,u=e.initValidate;this.rules=a,this.onChange=r,this.removeUndefined=n,this.$inputNames={},this.$values={},this.$defaultValues={},this.$validator={},this.$events={},this.$errors={},this.deepSetOptions={removeUndefined:n,forceSet:!0},i&&this.setValue(i,u?void 0:m.e),o&&this.resetFormError(o)}return Object(a.a)(c,[{key:"handleChange",value:function(){this.onChange&&this.onChange(this.getValue())}},{key:"reset",value:function(){this.$errors={},this.setValue(Object(o.f)(Object(l.b)(this.$defaultValues)),m.c,!0),this.handleChange(),this.dispatch(m.f)}},{key:"get",value:function(e){var t=this;return Array.isArray(e)?e.map(function(e){return t.get(e)}):Object(d.a)(this.$values,e)}},{key:"set",value:function(e,t,n){Object(h.k)(e)&&(t=Object(d.f)(e),e=Object.keys(e)),Object(h.a)(e)?this.setArrayValue(e,t):t!==this.get(e)&&(Object(d.d)(this.$values,e,t,this.deepSetOptions),this.$inputNames[e]&&(this.dispatch(Object(m.k)(e),t,e),this.dispatch(Object(m.i)(e))),n&&this.publishValue(e,m.c),this.dispatch(m.a),this.handleChange())}},{key:"setArrayValue",value:function(e,n){var a=this;e.forEach(function(e,t){Object(d.d)(a.$values,e,n[t],a.deepSetOptions)}),e.forEach(function(e,t){a.$inputNames[e]&&(a.dispatch(Object(m.k)(e),n[t],e),a.dispatch(Object(m.i)(e)))}),this.dispatch(m.a),this.handleChange()}},{key:"insert",value:function(e,t,n){this.insertError(e,t,void 0);var a=this.get(e);a?(a.splice(t,0,n),this.publishValue(e,m.e),this.publishError(e)):this.set(e,[n])}},{key:"splice",value:function(e,t){this.spliceError(e,t),this.get(e).splice(t,1),this.publishValue(e,m.e),this.publishError(e)}},{key:"remove",value:function(e){Object(d.c)(this.$values,e)}},{key:"publishValue",value:function(e,t){var n=this,a="".concat(e,"["),r="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(a)||0===e.indexOf(r)}).forEach(function(e){n.dispatch(Object(m.k)(e),n.get(e),e,t)})}},{key:"getError",value:function(e,t){return t?this.$errors[e]:Object(o.b)(e,this.$errors)}},{key:"resetFormError",value:function(){var t,n=this,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$errors[""]||(this.$errors[""]={}),t=Object.keys(a).length?Object.keys(a).reduce(function(e,t){return e[t]=a[t]instanceof Error?a[t]:new Error(a[t]),e},{}):Object.keys(this.$errors[""]).reduce(function(e,t){return e[t]=void 0,e},{}),Object.keys(t).map(function(e){return n.setFormError(e,t[e])})}},{key:"removeFormError",value:function(e){this.$errors[""]&&this.$errors[""][e]&&this.setFormError(e)}},{key:"setFormError",value:function(e,t){this.$errors[""]&&(void 0===t?delete this.$errors[""][e]:this.$errors[""][e]=t,this.dispatch(Object(m.j)(e),this.getError(e),e,m.b),this.dispatch(Object(m.k)(e)))}},{key:"setError",value:function(e,t,n){void 0===t?delete this.$errors[e]:this.$errors[e]=t,this.dispatch(Object(m.j)(e),this.getError(e),e,m.b),n&&this.publishError(e)}},{key:"insertError",value:function(e,t,n){Object(o.d)(this.$errors,e,t,n)}},{key:"spliceError",value:function(e,t){Object(o.e)(this.$errors,e,t)}},{key:"publishError",value:function(e){var t=this,n="".concat(e,"["),a="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(n)||0===e.indexOf(a)}).forEach(function(e){t.dispatch(Object(m.j)(e),t.getError(e),e,m.b)})}},{key:"getRule",value:function(e){return this.rules&&Object(d.a)(this.rules,e)||[]}},{key:"getValue",value:function(){return Object(l.a)(this.$values)}},{key:"setValue",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;!(2<arguments.length?arguments[2]:void 0)&&i()(e,this.$values)||(this.$values=Object(d.b)({},e,{clone:!0}),setTimeout(function(){Object.keys(t.$inputNames).sort(function(e,t){return e.length-t.length}).forEach(function(e){t.dispatch(Object(m.k)(e),t.get(e),e,n),t.dispatch(Object(m.i)(e))}),t.dispatch(m.a)}))}},{key:"bind",value:function(e,t,n,a){this.$inputNames[e]&&console.warn('There is already an item with name "'.concat(e,'" exists. The name props must be unique.')),void 0!==n&&null==this.get(e)&&(this.set(e,n,!0),this.dispatch(Object(m.i)(e)),this.dispatch(m.a)),n&&(this.$defaultValues[e]=Object(l.b)(n)),this.$validator[e]=a,this.$inputNames[e]=!0,this.subscribe(Object(m.k)(e),t),this.subscribe(Object(m.j)(e),t)}},{key:"unbind",value:function(e){var t=this;Array.isArray(e)?e.forEach(function(e){return t.unbind(e)}):(this.unsubscribe(Object(m.k)(e)),this.unsubscribe(Object(m.j)(e)),delete this.$inputNames[e],delete this.$validator[e],delete this.$errors[e],delete this.$defaultValues[e],Object(d.c)(this.$values,e),this.formUnmount||setTimeout(function(){t.handleChange()}))}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(t?this.$events[e]=this.$events[e].filter(function(e){return e!==t}):delete this.$events[e])}},{key:"validate",value:function(i){var o=this;return new Promise(function(n,a){var e=Object.keys(o.$validator),t=o.getValue(),r=[].concat(Object(u.a)(e.map(function(e){return o.$validator[e](o.get(e),t,i)})),Object(u.a)((o.$events[m.g]||[]).map(function(e){return e()})));Promise.all(r).then(function(e){var t=e.find(function(e){return!0!==e});void 0===t?n(!0):a(t)}).catch(function(e){a(new f.a(e))})})}},{key:"validateFieldsByName",value:function(t,n){var a=this;if(!t||"string"!=typeof t)return Promise.reject(new Error('Name expect a string, get "'.concat(t,'"')));var r=[],i=this.getValue();return Object.keys(this.$validator).forEach(function(e){e!==t&&0!==e.indexOf(t)||r.push(a.$validator[e](a.get(e),i,n))}),Object(f.c)(r)}},{key:"validateFields",value:function(e,t){var n=this;Array.isArray(e)||(e=[e]);var a=e.map(function(e){return n.validateFieldsByName(e,t)});return Object(f.c)(a)}},{key:"validateClear",value:function(){var t=this,e=Object.keys(this.$validator);this.$errors={};var n=e.map(function(e){return t.$validator[e](m.c)});Promise.all(n)}}]),c}()},271:function(e,t,n){"use strict";t.a={red:{id:1,name:"red"},orange:{id:2,name:"orange"},yellow:{id:3,name:"yellow"},green:{id:4,name:"green"},cyan:{id:5,name:"cyan"},blue:{id:6,name:"blue"},violet:{id:7,name:"violet"}}},279:function(e,t,n){"use strict";var a=n(7),r=n(8),i=window.console,o=function(){function e(){Object(a.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(r.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.map(function(e){return"".concat((t=e,JSON.stringify(t,function(e,t){return"function"==typeof t?"fn#fn".concat(t.toString(),"fn#fn"):t},2)));var t});this.current.push(a)}}]),e}();t.a={start:function(){window.console=new o},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=i,e}}}}]);