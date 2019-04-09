(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[35],{192:function(e,n,t){"use strict";var u=t(19),m=t(0),f=t.n(m),g=t(229),p=t(53),d=t(14);n.a=function(c){return function(e){var n=Object(m.useState)(""),t=Object(u.a)(n,2),r=t[0],a=t[1],o=Object(m.useState)([]),l=Object(u.a)(o,1)[0],s=e.location.hash,i=Object(m.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]);Object(m.useEffect)(function(){!function(e){if(e){var n=document.querySelector(e);n&&setTimeout(function(){n.scrollIntoView()},50)}}(s);var e=function(){var t=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var r=e[0].id;e.forEach(function(e){var n=document.querySelector("#".concat(e.id));n&&n.offsetTop<=t&&(r=e.id)}),a(r)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return f.a.createElement("div",{className:Object(d.f)("_")},f.a.createElement(c,{onHeadingSetted:i}),f.a.createElement(g.a,{className:Object(d.f)("sticky"),top:50},f.a.createElement("div",{className:Object(d.f)("nav")},l.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return f.a.createElement("a",{key:n,className:Object(d.f)("level-".concat(e.level),r===e.id&&"active"),onClick:function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}}.bind(null,e.id)},t)}))))}}},197:function(e,n,t){"use strict";function r(e){return"string"!=typeof e&&console.error(new Error("str should be a string")),e&&e[0].toUpperCase()+e.slice(1)}function a(e,t){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,n){return"\\"===e.charAt(0)?e.slice(1):null===t[n]||void 0===t[n]?"":t[n]});if("function"!=typeof e)return"";var n=e(t);return n===t&&"object"==typeof n&&(n=Object.assign({},t)),n}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},198:function(e,n,t){"use strict";var q=t(0),T=t.n(q),u=t(30),P=t(19),r=t(232),m=t.n(r),f=t(49),S=t(14),g=t(11),a=t(12),l=t.n(a),o=t(233),s=t.n(o),N=(t(234),function(e){var n=e.language,t=void 0===n?"lang-jsx":n,r=e.onHighLight,a=e.value,o=Object(q.useRef)(null);return Object(q.useEffect)(function(){var e=o.current;s.a.highlightElement(e,!1,function(){r&&r(e.offsetHeight)})},[]),T.a.createElement("pre",{ref:o,className:l()(t||"lang-jsx",Object(S.a)("pre"))},T.a.createElement("code",null,a))}),D=t(217),i=t(43),c=t(7),p=t(8),d=t(10),b=t(2),h=t(9),v=t(33),x=t(205),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(x.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(x.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,r=n.placeholder;return e?t:T.a.createElement("span",{ref:this.placeholderRef},r)}}]),t}(v.b),L=t(60),C=t(53),F=T.a.createElement("div",{className:Object(S.a)("placeholder")},T.a.createElement(i.a,null));function y(e){var n=e.component,t=e.id,r=e.name,a=e.rawText,o=e.title,l=Object(q.useRef)(null),s=Object(q.useState)(!1),i=Object(P.a)(s,2),c=i[0],u=i[1],m=Object(q.useState)(),f=Object(P.a)(m,2),g=f[0],p=f[1],d=Object(q.useState)(),b=Object(P.a)(d,1)[0],h=function e(n,t,r){l.current.style.height="".concat(n*(t-1),"px"),1<t&&setTimeout(function(){e(n,t-1,r)},16),r&&(document.documentElement.scrollTop-=n)};Object(q.useEffect)(function(){if(l.current)if(c)l.current.style.height="".concat(g,"px");else{var e=g%15;0<e&&h(e,1,b),h((g-e)/15,15,b)}},[c]);var v=function(e){u(!c),b=e},x=function(e){return T.a.createElement("a",{href:"javascript:;",className:Object(S.a)("toggle"),onClick:v.bind(null,e)},T.a.createElement(L.a,{name:c?"code-close":"code"}))},y=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=C.a.location.search,E="?example=";if(0===j.indexOf(E)&&(j=j.replace(E,""),r.indexOf(j)<0))return null;var O=o.split("\n"),k=Object(D.a)(O),w=k[0],R=k.slice(1);return w&&(w=w.trim()),T.a.createElement(q.Fragment,null,w&&T.a.createElement("h3",{key:"0",id:t},w),T.a.createElement(I,{placeholder:F},T.a.createElement("div",{className:Object(S.a)("_",c&&"showcode")},T.a.createElement("div",{className:Object(S.a)("body")},Object(q.createElement)(n)),0<o.length&&T.a.createElement("div",{className:Object(S.a)("desc")},R.map(function(e,n){return T.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),x(!1)),T.a.createElement("div",{ref:l,className:Object(S.a)("code")},T.a.createElement(N,{onHighLight:function(e){p(e)},onClose:v,value:y}),x(!0)))))}y.defaultProps={rawText:""};var j=function(e){var n=e.children,t=Object(q.useState)(!1),r=Object(P.a)(t,2),a=r[0],o=r[1],l=n.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),s=a?"pre":"div";return T.a.createElement("div",{onClick:function(){o(!a)},className:Object(S.e)("console")},T.a.createElement(s,null,l))};j.defaultProps={children:[]};var E=j;function O(e){var n=e.children;return T.a.createElement("table",{className:"doc-api-table"},n)}O.defaultProps={};var k=O,w=/^<code name="([\w|-]+)" /,R=/^<example name="([\w|-]+)"/;function $(e){var n=e.onHeadingSetted,o=e.codes,l=e.examples,t=e.source,r=Object(q.useState)([]),a=Object(P.a)(r,1)[0],s=Object(q.useState)({}),i=Object(P.a)(s,1)[0];Object(q.useEffect)(function(){n&&n(a)},[]);var c=function(e){a.push(e)};return a=[],T.a.createElement(m.a,{className:Object(S.e)("_"),source:t,renderers:{code:N,heading:function(e){var n,t,r=e.level,a=e.children,o="".concat(r,"-").concat(a[0]),l="h".concat(r);if("object"==typeof a[0])return T.a.createElement(l,null,a);if(!i[o]){var s="heading-".concat((n=r,t=a[0],4===n?Object(f.b)():(t||"").replace(/[\W|-]/g,"-")));2!==r&&3!==r||c({id:s,level:r,children:a}),i[o]=T.a.createElement(l,{id:s},a)}return i[o]},html:function(e){if("<example />"===e.value)return function(){if(i.examples)return i.examples;if(!l)return T.a.createElement("div",null);var e=Object(g.b)("示例","Example"),n="heading-example-h";return c({id:n,level:2,children:[e]}),i.examples=[T.a.createElement("h2",{key:"h",id:n},e)].concat(Object(u.a)(l.map(function(e,n){if(/\d+-/.test(e.name)){var t="heading-".concat(e.name),r=e.title.split("\n"),a=Object(P.a)(r,1)[0];return c({id:t,level:3,children:[a]}),T.a.createElement(y,Object.assign({key:n,id:t},e,{lazy:2<n}))}}))),i.examples}();var n=e.value.match(R);if(n)return function(n){var e="example-".concat(n);if(!i[e]){var t=(l||[]).find(function(e){return e.name===n});i[e]=t?T.a.createElement(y,t):null}return i[e]}(n[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return T.a.createElement("br",null);var t,r,a=e.value.match(w);return a?(t=a[1],(r=o[t])?[T.a.createElement(N,{key:"cb",value:r.text})].concat(Object(u.a)(r.log.map(function(e,n){return T.a.createElement(E,{key:n},e)}))):(console.error("Code ".concat(t," not existed")),null)):null},table:k,link:function(e){var n=e.href.indexOf(!1)?"_blank":void 0;return T.a.createElement("a",{href:e.href,target:n},e.children)}}})}$.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var A=t(59),H=t(192);t.d(n,"a",function(){return U});var J,B=((J=function(e){var n=Object(q.useState)(e.source),t=Object(P.a)(n,2),r=t[0],a=t[1];return Object(q.useEffect)(function(){e.loader&&e.loader().then(function(e){a(e.default)})},[]),r?T.a.createElement($,Object.assign({},e,{source:r})):T.a.createElement(A.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(q.memo)(J));n.b=B;function U(n){return Object(H.a)(function(e){return T.a.createElement(B,Object.assign({},e,{loader:n}))})}},205:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return m});var r=t(216),a=t(49),o=t(42),l={},s=null,i=!1,c=o.b.height;function u(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>c){var t=Object(a.b)();return l[t]=e,t}return e.render(),null}function m(e){e&&delete l[e]}document.addEventListener("scroll",function(){s&&clearTimeout(s),s=setTimeout(function(){i||(i=!0,Object.keys(l).forEach(function(e){var n=l[e],t=n.element,r=n.render,a=t.getBoundingClientRect();a.bottom<0||a.top>c||(delete l[e],r())}),i=!1),s=null},80)},r.a)},231:function(e,n,t){"use strict";var l=t(41),s=t(4),r=t(197),i=t(125),c={skipUndefined:!0},u=function(e){var n="array"===e.type?"array":"string";return Object(r.b)(Object(i.a)("rules.required.".concat(n)),e)},a=t(34),o=function(t){return function(e){var n="";switch(e.type){case"integer":case"number":n="number";break;case"array":n="array";break;default:n="string"}return Object(r.b)(Object(i.a)("rules.length.".concat(t,".").concat(n)),e)}},m={skipUndefined:!0},f={max:o("max"),min:o("min")},g=function(t){var r=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).message;return function(e,n){return"number"!=typeof e?(console.error(new Error('Rule "'.concat(t,'" param expect a number, get ').concat(typeof e))),null):Object(l.b)({message:f[t]},Object(l.b)(Object(a.a)({message:r},t,e),{message:n},m),m)}},p=function(e){var n=e.title?"rules.type":"rules.reg";return Object(r.b)(Object(i.a)(n),e)},d={skipUndefined:!0},b=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.message,r=e.tip;return function(e){return Object(l.b)({type:n,message:p},Object(l.b)({message:t,tip:r},{message:e},d),d)}},h={skipUndefined:!0};t.d(n,"a",function(){return v});var v="RULE_OBJECT",x=["email","integer","number","url","json","hex","rgb","ipv4"];n.b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=function e(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!Object(s.i)(n))return console.error(new Error("rules expect an object, got ".concat(typeof options))),{};for(var t=arguments.length,r=new Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];if(0===r.length)return n;var o=r.shift();return Object.keys(o).forEach(function(e){"function"==typeof o[e]&&(o[e]={func:o[e]})}),e.apply(void 0,[Object(l.b)(n,o)].concat(r))}.apply(void 0,[{}].concat(n)),a={required:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=e.message,t=e.tip;return function(e){return Object(l.b)({required:!0,message:u},Object(l.b)({message:n,tip:t},{message:e},c),c)}}(r.required),max:g("max",r.max),min:g("min",r.min),regExp:function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).message;return function(e,n){return"string"==typeof e||e instanceof RegExp?Object(l.b)({message:Object(i.a)("rules.reg")},Object(l.b)({message:t,regExp:e},{message:n},h),h):(console.error(new Error('Rule "reg" param expect a RegExp object or a string, get '.concat(typeof e))),null)}}(r.regExp),type:function(e){return b(e,r.type)},length:function(e,n,t){return[a.min(e,t),a.max(n,t)]},range:function(e,n,t){return[a.min(e,t),a.max(n,t)]}};x.forEach(function(e){a[e]=b(e,r[e]||r.type)});var o=Object.keys(a);return Object.keys(r).forEach(function(n){o.includes(n)||(Object(s.i)(r[n])?a[n]=function(e){return Object.assign({},r[n],{args:e})}:console.error(new Error("Rule ".concat(n," is invalid, expect a function or an object."))))}),Object(l.f)(a).forEach(function(e){e.isInnerValidator=!0}),a.$$type=v,a}},272:function(e,n,t){"use strict";var r=t(7),a=t(8),o=window.console,l=function(){function e(){Object(r.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(a.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.map(function(e){return"".concat((n=e,JSON.stringify(n,function(e,n){return"function"==typeof n?"fn#fn".concat(n.toString(),"fn#fn"):n},2)));var n});this.current.push(r)}}]),e}();n.a={start:function(){window.console=new l},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=o,e}}},891:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(192),l=t(198),s=t(272),i=t(11),c=t(892),u=t.n(c),m=t(893),f=t.n(m),g=Object(i.b)(u.a,f.a),p=[{name:"locale",title:Object(i.b)("",""),component:t(894).default,rawText:t(895)}];s.a.start(),s.a.setType("custom"),t(896),s.a.setType("max"),t(897),s.a.setType("min"),t(898),s.a.setType("range"),t(899),s.a.setType("regExp"),t(900),s.a.setType("required"),t(901),s.a.setType("type"),t(902);var d=s.a.end(),b={custom:{text:t(903),log:d.custom},max:{text:t(904),log:d.max},min:{text:t(905),log:d.min},range:{text:t(906),log:d.range},regExp:{text:t(907),log:d.regExp},required:{text:t(908),log:d.required},type:{text:t(909),log:d.type}};n.default=Object(o.a)(function(e){return a.a.createElement(l.b,Object.assign({},e,{codes:b,source:g,examples:p}))})},892:function(e,n){e.exports="# Rule 表单校验规则\n\n<br />\n\n<br />\n\nShineout Form 内部定义了一套数据校验机制，在 Form 内的组件上通过 rules 属性进行配置。\n\n```\n<Input rules={[...rule]}>\n```\n\nrules 是一个数组，每一条包含一个以下格式的配置。\n\n## 规则\n\nrule 共有 5 种格式，按优先级分别为：\n\n- 函数：完全由调用者控制，理论上可以做所有校验。\n  ```\n  /**\n   value - 当前组件值\n   formdata - 表单内所有组件值 \n   callback - 结果回调\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // 或者返回 Promise，不需要处理 callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n- 必填：根据 required 属性是否为 true 判断，非必填时不需填 false。\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- 长度：根据 min 或者 max 属性判断。\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- 正则表达式：根据 regExp 来判断，可以是 RegExp 对象或 字符串。\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- 类型：内置了一些常用的正则判断，不满足需求时，可以自定义正则表达式或使用 函数校验。\n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n| 属性 | 类型 | 说明 |\n| --- | --- | --- | --- |\n| required | bool | 是否必填 |\n| min | number | 最小值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| max | number | 最大值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| regExp | string \\| RegExp | 正则表达式 |\n| type | string | 类型校验，可选值为 \\[ 'email', 'json', 'url', 'hex', 'number' ]，不支持的可以自定义 regExp 校验 |\n| message | string | 错误消息。可以使用 '{key}' 符号进行格式化。key 为当前rule的属性。如 {min: 20, message: '最小值为 {min}'}，会格式化为 '最小值为 20'。 |\n\n## Rule\n\n规则的编写比较繁琐，为了简化用户使用，定义了一个Rule函数，生成一个辅助对象，并内置了一些校验规则，供快速开发。\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 初始化\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### 参数\n\nargs 为自定义规则，可为空。\n每个参数为一个对象，key 为返回的 函数名称。每个 value 有两个参数，func 和 message。\n\n#### - func *function(value, formData, callback, props)*\n校验函数\n```\nvalue: 当前 Field 值。\nformData: 当前表单全部数据。\ncallback: 回调函数，func 返回 Promise 时可不调用，否则必须执行。\nprops: 当前 Field 的 props，用来格式化 message。\n```\n\n例：\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\n内置的规则会生成默认校验失败提示文案，如果需要覆盖默认文案，可以在初始化参数中覆盖。\n```\nmessage 为 string 时，返回 message。\nmessage 为 函数时，返回 message(props)，props 为当前 Field props。\n```\n\n例：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\n如果传入多个 args 时，会合并处理\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\n相当于\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n通过这种方式可以把自定义的校验规则和语言包分别引入。\n\n### 返回值\n返回对象包含一组函数生成校验规则。每个函数会根据参数生成一条新的规则。\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// 如果函数没有参数，可以只写函数名称\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 自定义校验\n<code name=\"custom\" />\n\n\n## 内置校验\n\n### required *function(message)*\n必填校验\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\n最小值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\n最大值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最大值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\n数值范围校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### max|integer: 必填，最大值\n#### min|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\n#### message|string: 可选\n#### 返回值：object\n内置了常用的类型校验，type可选值为 \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\n正则表达式校验\n#### reg|RegExp|string: 必填\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"regExp\" />\n\n## 内置文案\n\n当前语言内置校验文案如下，可以通过 setLocale 函数替换\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},893:function(e,n){e.exports="# Rule\n\n<br />\n\n<br />\n\nThe Form implements a set of data validation. That is configured through the rules property on the input component like 'Input, Select, Checkbox, ...'\n\n\n```\n<Input rules={[...rule]}>\n```\n\nrules is an array, each containing a rule with the following format.\n\n- Function:Completely controlled by the caller. you can theoretically do all the checking.\n  ```\n  /**\n   value - Current component value\n   formdata - All values in the form \n   callback - The result of verification\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // return a Promise，do not call callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n\n- Required:Determine whether the required attribute is true or not. false is not required when it is not required.\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- Length:Judge by the min or max property.\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- RegExp: Judge by the RegExp. It can be a RegExp object or a string.\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- Type: Some common type validation are built in. \n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n\n| Property | Type | Description |\n| --- | --- | --- | --- |\n| required | bool | whether to be required |\n| min | number | The minimum value. When type is 'number', validate the value. Otherwise, validate the value.length.  |\n| max | number | The maximum value. When type is 'number', validate the value. Otherwise, validate the value.length. |\n| regExp | string \\| RegExp | regular expression |\n| type | string | options: \\[ 'email', 'json', 'url', 'hex', 'number' ]. You can customize the regExp validation if it does not support it. |\n| message | string | The error message. You can use the '{key}' symbol to format. Key is a property of the current rule, such as {min: 20, message: 'minimum value is {min}'}, which is formatted as 'minimum value is 20'. |\n\n\n## Rule\n\nRule is a function return an object contains a set of validate function.\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Constructor\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### Arguments\n\nThe args is optional.\nEach argument is an object, key is the validate function name. Each value has 2 properties, 'func' and 'message'.\n\n#### - func *function(value, formData, callback, props)*\nvalidate function\n```\nvalue: current field's value.\nformData: all form data.\ncallback: the callback function.\nprops: the props of current field.\n```\n\nexample:\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\nBuilt-in rules use default error text, if you want change the default text, set message to overwrite.\n```\nif message type is string, return message.\nif message type is function，retrun message(props)，props is field's props.\n```\n\nexample：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\nMultiple arguments will be merged\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\nequivalent of\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n### Return\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// if the function has no argument, you can use it with out parentheses.\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Custom Validator\n<code name=\"custom\" />\n\n\n## Built-in Validator\n\n### required *function(message)*\n#### message|string: optional\n#### return: object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\nMinimum check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### retrun: object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\nMax check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### return: object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\nRange check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### min|integer: required\n#### max|integer: required\n#### message|string: optional\n#### return: array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\nType check, one of \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n#### message|string: optional\n#### return: object\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\nRegular expression check\n#### reg|RegExp|string: required\n#### message|string: optional\n#### return: object\n\n<code name=\"regExp\" />\n\n## Built-in Text\n\nThe current built-in validation text as follows, which can be replaced by the setLocale function\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},894:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(125);n.default=function(){return a.a.createElement("pre",null,JSON.stringify(Object(o.a)("rules"),null,2))}},895:function(e,n){e.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function() {\n  return <pre>{JSON.stringify(getLocale('rules'), null, 2)}</pre>\n}\n"},896:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)({isExisted:{func:function(e,n,t,r){n.list.includes(e)?t(new Error(r.message.replace("{title}",r.title))):t(!0)},message:"{title} is existed."}});console.log(a.isExisted())},897:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)();console.log(a.max(100)),console.log(a.max(100,"Nubmer must less than 100."))},898:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)();console.log(a.min(1)),console.log(a.min(1,"At least select one option."))},899:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)();console.log(a.range(1,100)),console.log(a.range(1,100,"Nubmer must between 1 - 100."))},900:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)();console.log(a.regExp("^[\\d\\s ().-]+$")),console.log(a.regExp("^[\\d\\s ().-]+$","Please enter a valid tel."))},901:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)();console.log(a.required("something wrong."));var o=Object(r.b)({required:{message:"init message."}});console.log(o.required())},902:function(e,n,t){"use strict";t.r(n);var r=t(231),a=Object(r.b)();console.log(a.email()),console.log(a.email("Email is invalid.")),console.log(a.integer("Please enter a valid age.")),console.log(a.number("Please enter a valid price.")),console.log(a.url("The url is not valid.")),console.log(a.hex("The color is not valid."))},903:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule({\n  isExisted: {\n    func: (value, formData, callback, props) => {\n      if (formData.list.includes(value)) {\n        callback(new Error(props.message.replace('{title}', props.title)))\n      } else {\n        callback(true)\n      }\n    },\n    message: '{title} is existed.',\n  },\n})\nconsole.log(rule.isExisted())\n"},904:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.max(100))\nconsole.log(rule.max(100, 'Nubmer must less than 100.'))\n"},905:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.min(1))\nconsole.log(rule.min(1, 'At least select one option.'))\n"},906:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.range(1, 100))\nconsole.log(rule.range(1, 100, 'Nubmer must between 1 - 100.'))\n"},907:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$'))\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$', 'Please enter a valid tel.'))\n"},908:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.required('something wrong.'))\n\nconst rule2 = Rule({\n  required: {\n    message: 'init message.',\n  },\n})\nconsole.log(rule2.required())\n"},909:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.email())\nconsole.log(rule.email('Email is invalid.'))\nconsole.log(rule.integer('Please enter a valid age.'))\nconsole.log(rule.number('Please enter a valid price.'))\nconsole.log(rule.url('The url is not valid.'))\nconsole.log(rule.hex('The color is not valid.'))\n"}}]);