(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{187:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(47),a=n(35),l=n(20),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=Object(l.a)(n(184),"nav");t.a=function(e){return function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={headings:[]},t.setHeading=t.setHeading.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r["PureComponent"]),c(n,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(u(this.state.headings),u(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return o.a.createElement(a.a,{className:s("sticky"),top:50},o.a.createElement("div",{className:s("nav")},e.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return o.a.createElement(i.a,{key:t,className:s("level-"+e.level),to:"#"+e.id},n)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:s("_")},o.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}()}},188:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=(n(1),n(190)),a=n.n(i),l=n(34),c=n(20),u=n(19),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.bindElement=function(e){r.element=e},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),s(t,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),t}();d.defaultProps={language:""};var f=d,m=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var g=Object(c.a)(n(186),"example"),y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.setCodeBlockHeight=function(e){n.codeHeight=e},n.bindCodeBlock=function(e){n.codeblock=e},n.state={showcode:!1};var r=e.title.split("\n"),o=m(r,1)[0];return n.id="h-"+Object(l.a)(o),e.appendHeading({id:n.id,level:3,children:[o]}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),h(t,[{key:"collapse",value:function(e,t,n){var r=this;this.codeblock.style.height=e*(t-1)+"px",t>1&&setTimeout(function(){r.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var t=this,n=!this.state.showcode;this.setState({showcode:n},function(){if(n)t.codeblock.style.height=t.codeHeight+"px";else{var r=t.codeHeight%15;r>0&&t.collapse(r,1,e),t.collapse((t.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:g("toggle"),onClick:this.toggleCode.bind(this,e)},"<",t?"/":" ",">")}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.rawText,i=this.state.showcode,a=n.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),l=function(e){return Array.isArray(e)?e:Array.from(e)}(this.props.title.split("\n")),c=l[0],u=l.slice(1);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:this.id,className:g("title")},c,u.length>0&&o.a.createElement("div",{className:g("sub-title")},u.map(function(e,t){return o.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}))),o.a.createElement("div",{className:g("_",i&&"showcode")},o.a.createElement("div",{className:g("body")},Object(r.createElement)(t),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:g("code")},this.renderCodeHandle(!0),o.a.createElement(f,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:a}))))}}]),t}();y.defaultProps={appendHeading:function(){},rawText:""};var v=y,b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var w=Object(c.a)(n(185),"markdown"),E=/^<code name="([\w|-]+)" /,k=/^<example name="([\w|-]+)"/,x=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.headings=[],n.appendHeading=n.appendHeading.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),b(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?o.a.createElement(r.Fragment,null,o.a.createElement(f,{language:"jsx",value:t.text}),t.log.map(function(e,t){return o.a.createElement("div",{key:t,className:w("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,t=this.props.examples;if(!t)return o.a.createElement("div",null);var n=Object(u.a)("示例","Example"),i="h-"+Object(l.a)("Example");return this.appendHeading({id:i,level:2,children:[n]}),o.a.createElement(r.Fragment,null,o.a.createElement("h2",{id:i},n),t.map(function(t,n){if(/\d+-/.test(t.name))return o.a.createElement(v,Object.assign({key:n,appendHeading:e.appendHeading},t))}))}},{key:"renderExample",value:function(e){var t=(this.props.examples||[]).find(function(t){return t.name===e});return t?o.a.createElement(v,t):null}},{key:"render",value:function(){var e=this,t=this.props.source;return this.headings=[],o.a.createElement(a.a,{className:w("_"),source:t,renderers:{code:f,heading:function(t){var n=t.level,r=t.children,i="h-"+Object(l.a)(r[0]);2!==n&&3!==n||e.appendHeading({id:i,level:n,children:r});var a="h"+n;return o.a.createElement(a,{id:i},r)},html:function(t){var n=t.value;if("<example />"===n)return e.renderExamples();var r=n.match(k);if(r)return e.renderExample(r[1],n.indexOf("noExpand")>=0);if("<br>"===n||"<br />"===n)return o.a.createElement("br",null);var i=n.match(E);return i?e.renderCode(i[1]):null}}})}}]),t}();x.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var O=x,j=n(36),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var C=n(187);n.d(t,"a",function(){return _});var H=function(){var e=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={source:n.props.source},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),P(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(t){e.setState({source:t})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(O,Object.assign({},this.props,{source:e})):o.a.createElement(j.a,{style:{minHeight:200}})}}]),t}();return e.defaultProps={loader:void 0,source:void 0},e}();t.b=H;function _(e){return Object(C.a)(function(t){return o.a.createElement(H,Object.assign({},t,{loader:e}))})}},411:function(e,t){e.exports="/**\n * cn -\n *    -- 可以通过 background 和 color 自定义样式\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20, color: 'gold' }}>Some text</div>\n  return (\n    <Popover content={content} background=\"#555\" border=\"gold\" style={{ marginRight: 12 }}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},412:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(18);t.default=function(){var e=o.a.createElement("div",{style:{width:200,padding:20,color:"gold"}},"Some text");return o.a.createElement(i.s,{content:e,background:"#555",border:"gold",style:{marginRight:12}},o.a.createElement(i.c,null,"Hover"))}},413:function(e,t){e.exports="/**\n * cn - 样式\n * en - type\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100, textAlign: 'center', lineHeight: '30px', margin: 4, display: 'inline-block', border: 'solid 1px #eee',\n}\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return types.map((t, i) => (\n    <Popover content={content} type={t} key={i}>\n      <div style={style}>{t}</div>\n    </Popover>\n  ))\n}\n"},414:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(18),a=["success","info","warning","danger"],l={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){var e=o.a.createElement("div",{style:{width:200,padding:20}},"Some text");return a.map(function(t,n){return o.a.createElement(i.s,{content:e,type:t,key:n},o.a.createElement("div",{style:l},t))})}},415:function(e,t){e.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - onClose\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function () {\n  const content = close => (\n    <div style={{ padding: 20 }}>\n      <div>Are you sure you want to close this panel?</div>\n      <div style={{ marginTop: 30, textAlign: 'right' }}>\n        <Button\n          size=\"small\"\n          onClick={() => {\n            close()\n            Message.success('Popover panel closed.')\n          }}\n        >\n          close\n        </Button>\n      </div>\n    </div>\n  )\n\n  return (\n    <Popover content={content} trigger=\"click\" style={{ marginRight: 12 }}>\n      <Button>Click me</Button>\n    </Popover>\n  )\n}\n"},416:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(18);t.default=function(){return o.a.createElement(i.s,{content:function(e){return o.a.createElement("div",{style:{padding:20}},o.a.createElement("div",null,"Are you sure you want to close this panel?"),o.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},o.a.createElement(i.c,{size:"small",onClick:function(){e(),i.p.success("Popover panel closed.")}},"close")))},trigger:"click",style:{marginRight:12}},o.a.createElement(i.c,null,"Click me"))}},417:function(e,t){e.exports="/**\n * cn - 点击触发\n * en - Click\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function () {\n  const content = (\n    <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n      <Card.Header>Header</Card.Header>\n      <Card.Body style={{ height: 80 }}>Body</Card.Body>\n    </Card>\n  )\n  return (\n    <Popover content={content} trigger=\"click\" style={{ marginRight: 12 }}>\n      <Button>Click me</Button>\n    </Popover>\n  )\n}\n"},418:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(18);t.default=function(){var e=o.a.createElement(i.d,{style:{width:300,border:0,background:"transparent"}},o.a.createElement(i.d.Header,null,"Header"),o.a.createElement(i.d.Body,{style:{height:80}},"Body"));return o.a.createElement(i.s,{content:e,trigger:"click",style:{marginRight:12}},o.a.createElement(i.c,null,"Click me"))}},419:function(e,t){e.exports="/**\n * cn - 弹出位置\n * en - Position\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100, textAlign: 'center', lineHeight: '30px', margin: 4, display: 'inline-block', border: 'solid 1px #eee',\n}\n\nexport default function () {\n  const content = <div style={{ width: 240, padding: 30 }}>Some text</div>\n  return positions.map((row, i) => (\n    <div key={i}>\n      {\n        row.map((p, j) =>\n        (p ? (\n          <Popover content={content} position={p} key={j}>\n            <div style={style}>{p}</div>\n          </Popover>\n          )\n         : <div key={j} style={{ ...style, border: 0 }} />))\n      }\n    </div>\n  ))\n}\n"},420:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(18),a=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],l={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){var e=o.a.createElement("div",{style:{width:240,padding:30}},"Some text");return a.map(function(t,n){return o.a.createElement("div",{key:n},t.map(function(t,n){return t?o.a.createElement(i.s,{content:e,position:t,key:n},o.a.createElement("div",{style:l},t)):o.a.createElement("div",{key:n,style:Object.assign({},l,{border:0})})}))})}},421:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content} style={{ marginRight: 12 }}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},422:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(18);t.default=function(){var e=o.a.createElement("div",{style:{width:200,padding:20}},"Some text");return o.a.createElement(i.s,{content:e,style:{marginRight:12}},o.a.createElement(i.c,null,"Hover"))}},423:function(e,t){e.exports="# Popover\n\n<example />\n\n## API"},424:function(e,t){e.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 子元素只能为一个 ReactElement |\n| content | ReactElement \\| function | 必填 | 弹出内容 | \n| position | string | 'top' | 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 无 | 可选值为，\\['success', 'info', 'warning', 'danger'] |\n"},425:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(187),a=n(188),l=n(19),c=n(424),u=n.n(c),s=n(423),p=n.n(s),d=Object(l.a)(u.a,p.a),f=[{name:"1-base",title:Object(l.a)("基本用法","Base"),component:n(422).default,rawText:n(421)},{name:"2-position",title:Object(l.a)("弹出位置","Position"),component:n(420).default,rawText:n(419)},{name:"3-click",title:Object(l.a)("点击触发","Click"),component:n(418).default,rawText:n(417)},{name:"4-func",title:Object(l.a)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","onClose"),component:n(416).default,rawText:n(415)},{name:"5-type",title:Object(l.a)("样式","type"),component:n(414).default,rawText:n(413)},{name:"6-type",title:Object(l.a)(" \n 可以通过 background 和 color 自定义样式",""),component:n(412).default,rawText:n(411)}];t.default=Object(i.a)(function(e){return o.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})}}]);