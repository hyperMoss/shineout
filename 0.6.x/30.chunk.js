(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{187:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(47),l=t(35),i=t(20),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function c(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var s=Object(i.a)(t(184),"nav");n.a=function(e){return function(n){function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headings:[]},n.setHeading=n.setHeading.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,r["PureComponent"]),u(t,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(c(this.state.headings),c(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return o.a.createElement(l.a,{className:s("sticky"),top:50},o.a.createElement("div",{className:s("nav")},e.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return o.a.createElement(a.a,{key:n,className:s("level-"+e.level),to:"#"+e.id},t)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:s("_")},o.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}()}},188:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=(t(1),t(190)),l=t.n(a),i=t(34),u=t(20),c=t(19),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function f(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var d=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.bindElement=function(e){r.element=e},f(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),s(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),n}();d.defaultProps={language:""};var p=d,m=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var g=Object(u.a)(t(186),"example"),v=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1};var r=e.title.split("\n"),o=m(r,1)[0];return t.id="h-"+Object(i.a)(o),e.appendHeading({id:t.id,level:3,children:[o]}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),h(n,[{key:"collapse",value:function(e,n,t){var r=this;this.codeblock.style.height=e*(n-1)+"px",n>1&&setTimeout(function(){r.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height=n.codeHeight+"px";else{var r=n.codeHeight%15;r>0&&n.collapse(r,1,e),n.collapse((n.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:g("toggle"),onClick:this.toggleCode.bind(this,e)},"<",n?"/":" ",">")}},{key:"render",value:function(){var e=this.props,n=e.component,t=e.rawText,a=this.state.showcode,l=t.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),i=function(e){return Array.isArray(e)?e:Array.from(e)}(this.props.title.split("\n")),u=i[0],c=i.slice(1);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:this.id,className:g("title")},u,c.length>0&&o.a.createElement("div",{className:g("sub-title")},c.map(function(e,n){return o.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}))),o.a.createElement("div",{className:g("_",a&&"showcode")},o.a.createElement("div",{className:g("body")},Object(r.createElement)(n),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:g("code")},this.renderCodeHandle(!0),o.a.createElement(p,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:l}))))}}]),n}();v.defaultProps={appendHeading:function(){},rawText:""};var b=v,y=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var x=Object(u.a)(t(185),"markdown"),E=/^<code name="([\w|-]+)" /,w=/^<example name="([\w|-]+)"/,O=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.headings=[],t.appendHeading=t.appendHeading.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),y(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?o.a.createElement(r.Fragment,null,o.a.createElement(p,{language:"jsx",value:n.text}),n.log.map(function(e,n){return o.a.createElement("div",{key:n,className:x("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,n=this.props.examples;if(!n)return o.a.createElement("div",null);var t=Object(c.a)("示例","Example"),a="h-"+Object(i.a)("Example");return this.appendHeading({id:a,level:2,children:[t]}),o.a.createElement(r.Fragment,null,o.a.createElement("h2",{id:a},t),n.map(function(n,t){if(/\d+-/.test(n.name))return o.a.createElement(b,Object.assign({key:t,appendHeading:e.appendHeading},n))}))}},{key:"renderExample",value:function(e){var n=(this.props.examples||[]).find(function(n){return n.name===e});return n?o.a.createElement(b,n):null}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],o.a.createElement(l.a,{className:x("_"),source:n,renderers:{code:p,heading:function(n){var t=n.level,r=n.children,a="h-"+Object(i.a)(r[0]);2!==t&&3!==t||e.appendHeading({id:a,level:t,children:r});var l="h"+t;return o.a.createElement(l,{id:a},r)},html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var r=t.match(w);if(r)return e.renderExample(r[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return o.a.createElement("br",null);var a=t.match(E);return a?e.renderCode(a[1]):null}}})}}]),n}();O.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var j=O,C=t(36),S=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var _=t(187);t.d(n,"a",function(){return k});var H=function(){var e=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={source:t.props.source},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.PureComponent),S(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(j,Object.assign({},this.props,{source:e})):o.a.createElement(C.a,{style:{minHeight:200}})}}]),n}();return e.defaultProps={loader:void 0,source:void 0},e}();n.b=H;function k(e){return Object(_.a)(function(n){return o.a.createElement(H,Object.assign({},n,{loader:e}))})}},601:function(e,n){e.exports="/**\n * cn - 垂直\n * en - Vertical\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nconst formatTemp = v => `${v}℃`\n\nexport default function () {\n  return (\n    <div>\n      <Slider\n        vertical\n        onChange={d => console.log(d)}\n        defaultValue={50}\n      />\n      <Slider\n        range\n        vertical\n        onChange={d => console.log(d)}\n        defaultValue={[12, 70]}\n      />\n      <Slider\n        vertical\n        defaultValue={18}\n        scale={[0, 20, 40, 60, 100]}\n        onChange={d => console.log(d)}\n        formatValue={false}\n        formatScale={formatTemp}\n      />\n      <Slider\n        autoHide\n        range\n        vertical\n        onChange={d => console.log(d)}\n        defaultValue={[12, 70]}\n      />\n      <Slider\n        disabled\n        range\n        vertical\n        onChange={d => console.log(d)}\n        defaultValue={[12, 70]}\n      />\n    </div>\n  )\n}\n"},602:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18),l=function(e){return e+"℃"};n.default=function(){return o.a.createElement("div",null,o.a.createElement(a.x,{vertical:!0,onChange:function(e){return console.log(e)},defaultValue:50}),o.a.createElement(a.x,{range:!0,vertical:!0,onChange:function(e){return console.log(e)},defaultValue:[12,70]}),o.a.createElement(a.x,{vertical:!0,defaultValue:18,scale:[0,20,40,60,100],onChange:function(e){return console.log(e)},formatValue:!1,formatScale:l}),o.a.createElement(a.x,{autoHide:!0,range:!0,vertical:!0,onChange:function(e){return console.log(e)},defaultValue:[12,70]}),o.a.createElement(a.x,{disabled:!0,range:!0,vertical:!0,onChange:function(e){return console.log(e)},defaultValue:[12,70]}))}},603:function(e,n){e.exports="/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      range\n      disabled\n      defaultValue={[25, 75]}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},604:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{range:!0,disabled:!0,defaultValue:[25,75],onChange:function(e){return console.log(e)}})}},605:function(e,n){e.exports="/**\n * cn -\n *    -- 如果要彻底不显示刻度和当前值，设置 formatValue 和 fotmatScale 为 false\n * en - autoHide\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      defaultValue={4}\n      step={1}\n      formatValue={false}\n      formatScale={false}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},606:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{defaultValue:4,step:1,formatValue:!1,formatScale:!1,onChange:function(e){return console.log(e)}})}},607:function(e,n){e.exports="/**\n * cn - 隐藏\n *    -- autoHide 选项为 true 时，自动隐藏当前值和刻度\n * en - autoHide\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      autoHide\n      defaultValue={4}\n      scale={[1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]}\n      step={1}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},608:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{autoHide:!0,defaultValue:4,scale:[1,2,3,5,8,13,21,34,55,89,144],step:1,onChange:function(e){return console.log(e)}})}},609:function(e,n){e.exports="/**\n * cn -\n *    -- step 设定为 0 时，只能从 scale 内的值\n * en - Step\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      formatValue={false}\n      scale={[0.8, 1, 1.2, 1.4, 1.7, 2, 2.4, 2.8, 3.3, 4, 4.8, 5.6, 6.7, 8, 9.5, 11, 13, 16]}\n      step={0}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},610:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{formatValue:!1,scale:[.8,1,1.2,1.4,1.7,2,2.4,2.8,3.3,4,4.8,5.6,6.7,8,9.5,11,13,16],step:0,onChange:function(e){return console.log(e)}})}},611:function(e,n){e.exports="/**\n * cn - 步长\n * en - Step\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      range\n      defaultValue={[0.05, 0.25]}\n      scale={[0, 1]}\n      step={0.05}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},612:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{range:!0,defaultValue:[.05,.25],scale:[0,1],step:.05,onChange:function(e){return console.log(e)}})}},613:function(e,n){e.exports="/**\n * cn - 格式化\n * en - Format\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nconst pad = i => (i < 10 ? `0${i}` : i)\nconst format = (v) => {\n  const value = v + 540\n  const hours = Math.floor(value / 60)\n  return `${pad(hours)}:${pad(value - (hours * 60))}`\n}\n\nexport default function () {\n  return (\n    <Slider\n      range\n      defaultValue={[33, 216]}\n      scale={[0, 60, 120, 180, 240, 300, 360, 420, 480, 540]}\n      onChange={d => console.log(d)}\n      formatScale={format}\n      formatValue={format}\n    />\n  )\n}\n"},614:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18),l=function(e){return e<10?"0"+e:e},i=function(e){var n=e+540,t=Math.floor(n/60);return l(t)+":"+l(n-60*t)};n.default=function(){return o.a.createElement(a.x,{range:!0,defaultValue:[33,216],scale:[0,60,120,180,240,300,360,420,480,540],onChange:function(e){return console.log(e)},formatScale:i,formatValue:i})}},615:function(e,n){e.exports="/**\n * cn - 区间\n * en - Scale\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      scale={[0, 50, 100, 250, 500, 1000]}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},616:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{scale:[0,50,100,250,500,1e3],onChange:function(e){return console.log(e)}})}},617:function(e,n){e.exports="/**\n * cn - 范围选择\n * en - Range\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider\n      range\n      defaultValue={[25, 75]}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},618:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{range:!0,defaultValue:[25,75],onChange:function(e){return console.log(e)}})}},619:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Slider } from 'shineout'\n\nexport default function () {\n  return (\n    <Slider onChange={d => console.log(d)} defaultValue={50} />\n  )\n}\n"},620:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18);n.default=function(){return o.a.createElement(a.x,{onChange:function(e){return console.log(e)},defaultValue:50})}},621:function(e,n){e.exports="# Slider\n\n<example />"},622:function(e,n){e.exports="# Slider *滑块*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number\\|array\\[number] | 无 | 默认值 |\n| formatScale | function\\|false | v => v | 格式化显示刻度，为false时，不显示刻度 |\n| formatValue | function\\|false | v => v | 格式化显示当前值，为false时，不显示当前值 |\n| height | number | 200 | 高度，仅在 vertical 为 true 情况下有效 |\n| onChange | function | 无 | 值改变时回调函数 |\n| scale | array\\[number] | \\[0, 100] | 取值范围，长度 >= 2 的数组 |\n| step | number | 1 | 步长，必须大于等于0；为0时，只能选取 scale 指定的值 |\n| value | number\\|array\\[number] | 无 | 当前值 |\n| vertical | bool | false | 是否垂直 |\n"},623:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(187),l=t(188),i=t(19),u=t(622),c=t.n(u),s=t(621),f=t.n(s),d=Object(i.a)(c.a,f.a),p=[{name:"01-base",title:Object(i.a)("基本用法","Base"),component:t(620).default,rawText:t(619)},{name:"02-range",title:Object(i.a)("范围选择","Range"),component:t(618).default,rawText:t(617)},{name:"03-scale",title:Object(i.a)("区间","Scale"),component:t(616).default,rawText:t(615)},{name:"04-format",title:Object(i.a)("格式化","Format"),component:t(614).default,rawText:t(613)},{name:"05-step",title:Object(i.a)("步长","Step"),component:t(612).default,rawText:t(611)},{name:"06-step",title:Object(i.a)(" \n step 设定为 0 时，只能从 scale 内的值","Step"),component:t(610).default,rawText:t(609)},{name:"07-hide",title:Object(i.a)("隐藏 \n autoHide 选项为 true 时，自动隐藏当前值和刻度","autoHide"),component:t(608).default,rawText:t(607)},{name:"08-hide",title:Object(i.a)(" \n 如果要彻底不显示刻度和当前值，设置 formatValue 和 fotmatScale 为 false","autoHide"),component:t(606).default,rawText:t(605)},{name:"09-disabled",title:Object(i.a)("禁用","Disabled"),component:t(604).default,rawText:t(603)},{name:"10-vertical",title:Object(i.a)("垂直","Vertical"),component:t(602).default,rawText:t(601)}];n.default=Object(a.a)(function(e){return o.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})}}]);