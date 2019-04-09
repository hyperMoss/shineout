(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[24],{192:function(e,n,t){"use strict";var u=t(19),f=t(0),m=t.n(f),d=t(229),h=t(53),p=t(14);n.a=function(s){return function(e){var n=Object(f.useState)(""),t=Object(u.a)(n,2),a=t[0],c=t[1],o=Object(f.useState)([]),r=Object(u.a)(o,1)[0],i=e.location.hash,l=Object(f.useCallback)(function(e){e.forEach(function(e){r.push(e)})},[]);Object(f.useEffect)(function(){!function(e){if(e){var n=document.querySelector(e);n&&setTimeout(function(){n.scrollIntoView()},50)}}(i);var e=function(){var t=document.documentElement.scrollTop,e=r.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var n=document.querySelector("#".concat(e.id));n&&n.offsetTop<=t&&(a=e.id)}),c(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return m.a.createElement("div",{className:Object(p.f)("_")},m.a.createElement(s,{onHeadingSetted:l}),m.a.createElement(d.a,{className:Object(p.f)("sticky"),top:50},m.a.createElement("div",{className:Object(p.f)("nav")},r.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:n,className:Object(p.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}}.bind(null,e.id)},t)}))))}}},198:function(e,n,t){"use strict";var k=t(0),z=t.n(k),u=t(30),F=t(19),a=t(232),f=t.n(a),m=t(49),T=t(14),d=t(11),c=t(12),r=t.n(c),o=t(233),i=t.n(o),R=(t(234),function(e){var n=e.language,t=void 0===n?"lang-jsx":n,a=e.onHighLight,c=e.value,o=Object(k.useRef)(null);return Object(k.useEffect)(function(){var e=o.current;i.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),z.a.createElement("pre",{ref:o,className:r()(t||"lang-jsx",Object(T.a)("pre"))},z.a.createElement("code",null,c))}),C=t(217),l=t(43),s=t(7),h=t(8),p=t(10),b=t(2),y=t(9),g=t(33),v=t(205),A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(v.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(v.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,a=n.placeholder;return e?t:z.a.createElement("span",{ref:this.placeholderRef},a)}}]),t}(g.b),N=t(60),_=t(53),P=z.a.createElement("div",{className:Object(T.a)("placeholder")},z.a.createElement(l.a,null));function j(e){var n=e.component,t=e.id,a=e.name,c=e.rawText,o=e.title,r=Object(k.useRef)(null),i=Object(k.useState)(!1),l=Object(F.a)(i,2),s=l[0],u=l[1],f=Object(k.useState)(),m=Object(F.a)(f,2),d=m[0],h=m[1],p=Object(k.useState)(),b=Object(F.a)(p,1)[0],y=function e(n,t,a){r.current.style.height="".concat(n*(t-1),"px"),1<t&&setTimeout(function(){e(n,t-1,a)},16),a&&(document.documentElement.scrollTop-=n)};Object(k.useEffect)(function(){if(r.current)if(s)r.current.style.height="".concat(d,"px");else{var e=d%15;0<e&&y(e,1,b),y((d-e)/15,15,b)}},[s]);var g=function(e){u(!s),b=e},v=function(e){return z.a.createElement("a",{href:"javascript:;",className:Object(T.a)("toggle"),onClick:g.bind(null,e)},z.a.createElement(N.a,{name:s?"code-close":"code"}))},j=c.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),E=_.a.location.search,O="?example=";if(0===E.indexOf(O)&&(E=E.replace(O,""),a.indexOf(E)<0))return null;var x=o.split("\n"),w=Object(C.a)(x),S=w[0],I=w.slice(1);return S&&(S=S.trim()),z.a.createElement(k.Fragment,null,S&&z.a.createElement("h3",{key:"0",id:t},S),z.a.createElement(A,{placeholder:P},z.a.createElement("div",{className:Object(T.a)("_",s&&"showcode")},z.a.createElement("div",{className:Object(T.a)("body")},Object(k.createElement)(n)),0<o.length&&z.a.createElement("div",{className:Object(T.a)("desc")},I.map(function(e,n){return z.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),v(!1)),z.a.createElement("div",{ref:r,className:Object(T.a)("code")},z.a.createElement(R,{onHighLight:function(e){h(e)},onClose:g,value:j}),v(!0)))))}j.defaultProps={rawText:""};var E=function(e){var n=e.children,t=Object(k.useState)(!1),a=Object(F.a)(t,2),c=a[0],o=a[1],r=n.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),i=c?"pre":"div";return z.a.createElement("div",{onClick:function(){o(!c)},className:Object(T.e)("console")},z.a.createElement(i,null,r))};E.defaultProps={children:[]};var O=E;function x(e){var n=e.children;return z.a.createElement("table",{className:"doc-api-table"},n)}x.defaultProps={};var w=x,S=/^<code name="([\w|-]+)" /,I=/^<example name="([\w|-]+)"/;function H(e){var n=e.onHeadingSetted,o=e.codes,r=e.examples,t=e.source,a=Object(k.useState)([]),c=Object(F.a)(a,1)[0],i=Object(k.useState)({}),l=Object(F.a)(i,1)[0];Object(k.useEffect)(function(){n&&n(c)},[]);var s=function(e){c.push(e)};return c=[],z.a.createElement(f.a,{className:Object(T.e)("_"),source:t,renderers:{code:R,heading:function(e){var n,t,a=e.level,c=e.children,o="".concat(a,"-").concat(c[0]),r="h".concat(a);if("object"==typeof c[0])return z.a.createElement(r,null,c);if(!l[o]){var i="heading-".concat((n=a,t=c[0],4===n?Object(m.b)():(t||"").replace(/[\W|-]/g,"-")));2!==a&&3!==a||s({id:i,level:a,children:c}),l[o]=z.a.createElement(r,{id:i},c)}return l[o]},html:function(e){if("<example />"===e.value)return function(){if(l.examples)return l.examples;if(!r)return z.a.createElement("div",null);var e=Object(d.b)("示例","Example"),n="heading-example-h";return s({id:n,level:2,children:[e]}),l.examples=[z.a.createElement("h2",{key:"h",id:n},e)].concat(Object(u.a)(r.map(function(e,n){if(/\d+-/.test(e.name)){var t="heading-".concat(e.name),a=e.title.split("\n"),c=Object(F.a)(a,1)[0];return s({id:t,level:3,children:[c]}),z.a.createElement(j,Object.assign({key:n,id:t},e,{lazy:2<n}))}}))),l.examples}();var n=e.value.match(I);if(n)return function(n){var e="example-".concat(n);if(!l[e]){var t=(r||[]).find(function(e){return e.name===n});l[e]=t?z.a.createElement(j,t):null}return l[e]}(n[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return z.a.createElement("br",null);var t,a,c=e.value.match(S);return c?(t=c[1],(a=o[t])?[z.a.createElement(R,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,n){return z.a.createElement(O,{key:n},e)}))):(console.error("Code ".concat(t," not existed")),null)):null},table:w,link:function(e){var n=e.href.indexOf(!1)?"_blank":void 0;return z.a.createElement("a",{href:e.href,target:n},e.children)}}})}H.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var D=t(59),B=t(192);t.d(n,"a",function(){return M});var L,q=((L=function(e){var n=Object(k.useState)(e.source),t=Object(F.a)(n,2),a=t[0],c=t[1];return Object(k.useEffect)(function(){e.loader&&e.loader().then(function(e){c(e.default)})},[]),a?z.a.createElement(H,Object.assign({},e,{source:a})):z.a.createElement(D.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(k.memo)(L));n.b=q;function M(n){return Object(B.a)(function(e){return z.a.createElement(q,Object.assign({},e,{loader:n}))})}},205:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return f});var a=t(216),c=t(49),o=t(42),r={},i=null,l=!1,s=o.b.height;function u(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>s){var t=Object(c.b)();return r[t]=e,t}return e.render(),null}function f(e){e&&delete r[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){l||(l=!0,Object.keys(r).forEach(function(e){var n=r[e],t=n.element,a=n.render,c=t.getBoundingClientRect();c.bottom<0||c.top>s||(delete r[e],a())}),l=!1),i=null},80)},a.a)},499:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(192),r=t(198),i=t(11),l=t(500),s=t.n(l),u=t(501),f=t.n(u),m=Object(i.b)(s.a,f.a),d=[{name:"1-awesome",title:Object(i.b)("基本用法 \n 引入一个在线地址（本示例为 font-awesome）创建一个新的 Icon 组件，在需要使用的地方引入。","Base \n Create a new compoennt with url, then use it anywhere."),component:t(502).default,rawText:t(503)},{name:"2-iconfont",title:Object(i.b)("使用 Iconfont \n 可以在 iconfont.cn 定制一个图标，在项目中引入",'Customize Font \n You can customize an icon in <a target="_blank" href="http://iconfont.cn">iconfont.cn</a> or <a target="_blank" href="http://fontastic.me/">fontastic.me</a>'),component:t(504).default,rawText:t(505)},{name:"3-size",title:Object(i.b)("样式 \n 通过 fontSize 和 type 属性可以便捷的设置大小和颜色，更多样式可以通过 style 属性设置。","Style \n Set fontSize and type to change icon size and color."),component:t(506).default,rawText:t(507)}];n.default=Object(o.a)(function(e){return c.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},500:function(e,n){e.exports="# Icon *图标*\n组件库没有内置图标集，而是提供了一个函数生成一个新的图标组件。<br />\n一个项目内可以创建多个不同名称的图标组件。\n\n<example />\n\n## API\n\n### Icon *function(url, fontFamily, prefix):ReactClass*\n函数，返回一个新的组件，一个项目内可以创建多个，但是 fontFamily 不能相同\n\n| 参数 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| url | string |  | 图标css文件地址，使用在线地址，不需要引入到项目中。如果在 link 中已经引用过，可以为空(null) |\n| fontFamily | string | 'iconfont' | font-family 需要和引入的css文件内的font-family一致 |\n| prefix | string | 'icon' | 类名前缀 |\n\n### MyIcon *Icon函数创建的图标组件*\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string | 无 | 图标 unicode 编码，和 name 二选一 |\n| name | string | '' | 图标类名（去除前缀的部分），值参照具体使用的图标库 |\n| fontSize | string | 无 | 图标大小，和 style.fontSize 相同 |\n| style | object | 无 | 扩展样式，可以用来设定特定的大小和颜色等 |\n| type | string | 'default' | 内置颜色，可选值为 \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |"},501:function(e,n){e.exports="# Icon\nIcon is  a function to generate a new ReactClass with css path.\n<br />\nMultiple icon components with different names can be created in a project.\n\n<example />\n\n## API\n\n### Icon *function(url, fontFamily, prefix):ReactClass*\nFunction, returns a new component. A project can create more than one, but fontFamily must be the unique.\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| url | string |  | The address of css file of the icon. If it has been introduced in the link tag, it can be empty. |\n| fontFamily | string | 'iconfont' | The font-family needs to be the same as the font-family in the introduced CSS file. |\n| prefix | string | 'icon' | The prefix of the class |\n\n### MyIcon *Component created by the Icon function*\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | string | - | The unicode code of the icon. |\n| name | string | '' | The name of the icon class (without prefix). |\n| fontSize | string | - | The size of the icon, same as the style.fontSize. |\n| style | object | - | Extend style. |\n| type | string | 'default' | Built-in color, options: \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |"},502:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(124),r=Object(o.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),i={marginRight:20};n.default=function(){return c.a.createElement("div",null,c.a.createElement(r,{style:i,name:"home"}),c.a.createElement(r,{style:i,name:"info",type:"info"}),c.a.createElement(r,{style:i,name:"check",type:"success"}),c.a.createElement(r,{style:i,name:"close",type:"danger"}))}},503:function(e,n){e.exports='/**\n * cn - 基本用法\n *    -- 引入一个在线地址（本示例为 font-awesome）创建一个新的 Icon 组件，在需要使用的地方引入。\n * en - Base\n *    -- Create a new compoennt with url, then use it anywhere.\n */\nimport React from \'react\'\nimport { Icon } from \'shineout\'\n\nconst url = \'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\'\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\nconst margin = { marginRight: 20 }\n\nexport default function() {\n  return (\n    <div>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="info" type="info" />\n      <FontAwesome style={margin} name="check" type="success" />\n      <FontAwesome style={margin} name="close" type="danger" />\n    </div>\n  )\n}\n'},504:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(124),r=Object(o.a)("//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css"),i={marginRight:20};n.default=function(){return c.a.createElement("div",null,c.a.createElement(r,{style:i},""),c.a.createElement(r,{style:i,name:"info",type:"info"}),c.a.createElement(r,{style:i,name:"right",type:"success"}),c.a.createElement(r,{style:i,name:"error",type:"danger"}))}},505:function(e,n){e.exports='/**\n * cn - 使用 Iconfont\n *    -- 可以在 iconfont.cn 定制一个图标，在项目中引入\n * en - Customize Font\n *    -- You can customize an icon in <a target="_blank" href="http://iconfont.cn">iconfont.cn</a> or <a target="_blank" href="http://fontastic.me/">fontastic.me</a>\n */\nimport React from \'react\'\nimport { Icon } from \'shineout\'\n\nconst Iconfont = Icon(\'//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css\')\nconst margin = { marginRight: 20 }\n\nexport default function() {\n  return (\n    <div>\n      <Iconfont style={margin}>&#xe64e;</Iconfont>\n      <Iconfont style={margin} name="info" type="info" />\n      <Iconfont style={margin} name="right" type="success" />\n      <Iconfont style={margin} name="error" type="danger" />\n    </div>\n  )\n}\n'},506:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(54),r={marginRight:20};n.default=function(){return c.a.createElement("div",null,c.a.createElement(o.a,{style:r,name:"home"}),c.a.createElement(o.a,{style:r,name:"home",type:"info",fontSize:18}),c.a.createElement(o.a,{style:r,name:"home",type:"success",fontSize:"24px"}),c.a.createElement(o.a,{style:{fontSize:30,color:"#f5222d"},name:"home"}))}},507:function(e,n){e.exports='/**\n * cn - 样式\n *    -- 通过 fontSize 和 type 属性可以便捷的设置大小和颜色，更多样式可以通过 style 属性设置。\n * en - Style\n *    -- Set fontSize and type to change icon size and color.\n */\nimport React from \'react\'\nimport FontAwesome from \'./FontAwesome\'\n\nconst margin = { marginRight: 20 }\n\nexport default function() {\n  return (\n    <div>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="home" type="info" fontSize={18} />\n      <FontAwesome style={margin} name="home" type="success" fontSize="24px" />\n      <FontAwesome style={{ fontSize: 30, color: \'#f5222d\' }} name="home" />\n    </div>\n  )\n}\n'}}]);