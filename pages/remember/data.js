export let html = [
  "1. DOCTYPE 的作用是什么？",
  "2. 标准模式与兼容模式各有什么区别？",
  "3. HTML5 为什么只需要写 &lt;!DOCTYPE HTML&gt;，而不需要引入 DTD？",
  "4. SGML 、 HTML 、XML 和 XHTML 的区别？",
  "5. DTD 介绍",
  "6. 行内元素定义",
  "7. 块级元素定义",
  "8. 行内元素与块级元素的区别？",
  "9. HTML5 元素的分类",
  "10. 空元素定义",
  "11. link 标签定义",
  "12. 页面导入样式时，使用 link 和 @import 有什么区别？",
  "13. 你对浏览器的理解？",
  "14. 介绍一下你对浏览器内核的理解？",
  "15. 常见的浏览器内核比较",
  "16. 常见浏览器所用内核",
  "17. 浏览器的渲染原理？",
  "18. 渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程）",
  "19. async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）",
  "20. 什么是文档的预解析？（浏览器解析过程）",
  "21. CSS 如何阻塞文档解析？（浏览器解析过程）",
  "22. 渲染页面时常见哪些不良现象？（浏览器渲染过程）",
  "23. 如何优化关键渲染路径？（浏览器渲染过程）",
  "24. 什么是重绘和回流？（浏览器绘制过程）",
  "25. 如何减少回流？（浏览器绘制过程）",
  "26. 为什么操作 DOM 慢？（浏览器绘制过程）",
  "27. DOMContentLoaded 事件和 Load 事件的区别？",
  "28. HTML5 有哪些新特性、移除了那些元素？",
  "29. 如何处理 HTML5 新标签的浏览器兼容问题？",
  "30. 简述一下你对 HTML 语义化的理解？",
  "31. b 与 strong 的区别和 i 与 em 的区别？",
  "32. 前端需要注意哪些 SEO ？",
  "33. HTML5 的离线储存怎么使用，工作原理能不能解释一下？",
  "34. 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？",
  "35. 常见的浏览器端的存储技术有哪些？",
  "36. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？",
  "37. iframe 有那些缺点？",
  "38. Label 的作用是什么？是怎么用的？",
  "39. HTML5 的 form 的自动完成功能是什么？",
  "40. 如何实现浏览器内多个标签页之间的通信?",
  "41. webSocket 如何兼容低版本浏览器？",
  "42. 页面可见性（Page Visibility API） 可以有哪些用途？",
  "43. 如何在页面上实现一个圆形的可点击区域？",
  "44. 实现不使用 border 画出 1 px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。",
  "45. title 与 h1 的区别？",
  "46. &lt;img&gt; 的 title 和 alt 有什么区别？",
  "47. Canvas 和 SVG 有什么区别？",
  "48. 网页验证码是干嘛的，是为了解决什么安全问题？",
  "49. 渐进增强和优雅降级的定义",
  "50. attribute 和 property 的区别是什么？",
  "51. 对 web 标准、可用性、可访问性的理解",
  "52. IE 各版本和 Chrome 可以并行下载多少个资源？",
  "53. Flash、Ajax 各自的优缺点，在使用中如何取舍？",
  "54. 怎么重构页面？",
  "55. 浏览器架构",
  "56. 常用的 meta 标签",
  "57. css reset 和 normalize.css 有什么区别？",
  "58. 用于预格式化文本的标签是？",
  "59. DHTML 是什么？",
  "60. head 标签中必不少的是？",
  "61. HTML5 新增的表单元素有？",
  "62. 在 HTML5 中，哪个方法用于获得用户的当前位置？",
  "63. 文档的不同注释方式？",
  "64. disabled 和 readonly 的区别？",
  "65. 主流浏览器内核私有属性 css 前缀？",
  "66. 前端性能优化？",
  "67. Chrome 中的 Waterfall ？",
  "68. 扫描二维码登录网页是什么原理，前后两个事件是如何联系的？",
  "69. Html 规范中为什么要求引用资源不加协议头http或者https？",
];

export let css = [
  "1.介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？",
  "2.CSS 选择符有哪些？",
  "3.::before 和:after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用。",
  "4.伪类与伪元素的区别",
  "5.CSS 中哪些属性可以继承？",
  "6.CSS 优先级算法如何计算？",
  "7.关于伪类 LVHA 的解释?",
  "8.CSS3 新增伪类有那些？",
  "9.如何居中 div？",
  "10.display 有哪些值？说明他们的作用。",
  "11.position 的值 relative 和 absolute 定位原点是？",
  "12.CSS3 有哪些新特性？（根据项目回答）",
  "13.请解释一下 CSS3 的 Flex box（弹性盒布局模型），以及适用场景？",
  "14.用纯 CSS 创建一个三角形的原理是什么？",
  "15.一个满屏品字布局如何设计?",
  "16.CSS 多列等高如何实现？",
  "17.经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？",
  "18.li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？",
  "19.为什么要初始化 CSS 样式？",
  "20.什么是包含块，对于包含块的理解?",
  "21.CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？",
  "22.width:auto 和 width:100 的区别",
  "23.绝对定位元素与非绝对定位元素的百分比计算的区别",
  "24.简单介绍使用图片 base64 编码的优点和缺点。",
  "25.'display'、'position'和'float'的相互关系？",
  "26.margin 重叠问题的理解。",
  "27.对 BFC 规范（块级格式化上下文：block formatting context）的理解？",
  "28.IFC 是什么？",
  "29.请解释一下为什么需要清除浮动？清除浮动的方式",
  "30.使用 clear 属性清除浮动的原理？",
  "31.zoom:1 的清除浮动原理?",
  "32.移动端的布局用过媒体查询吗？",
  "33.使用 CSS 预处理器吗？喜欢哪个？",
  "34.CSS 优化、提高性能的方法有哪些？",
  "35.浏览器是怎样解析 CSS 选择器的？",
  "36.在网页中应该使用奇数还是偶数的字体？为什么呢？",
  "37.margin 和 padding 分别适合什么场景使用？",
  "38.抽离样式模块怎么写，说出思路，有无实践经验？",
  "39.简单说一下 css3 的 all 属性。",
  "40.为什么不建议使用统配符初始化 css 样式。",
  "41.absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？",
  "42.对于 hasLayout 的理解？",
  "43.元素竖向的百分比设定是相对于容器的高度吗？",
  "44.全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践）",
  "45.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解）",
  "46.视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）",
  "47.如何修改 chrome 记住密码后自动填充表单的黄色背景？",
  "48.怎么让 Chrome 支持小于 12px 的文字？",
  "49.让页面里的字体变清晰，变细用 CSS 怎么做？",
  "50.font-style 属性中 italic 和 oblique 的区别？",
  "51.设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？",
  "52.layout viewport、visual viewport 和 ideal viewport 的区别？",
  "53.position:fixed;在 android 下无效怎么处理？",
  "54.如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）",
  "55.如何让去除 inline-block 元素间间距？",
  "56.overflow:scroll 时不能平滑滚动的问题怎么处理？",
  "57.有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。",
  "58.png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？",
  "59.浏览器如何判断是否支持 webp 格式图片",
  "60.什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）",
  "61.style 标签写在 body 后与 body 前有什么区别？",
  "62.什么是 CSS 预处理器/后处理器？",
  "63.阐述一下 CSSSprites",
  "64.使用 rem 布局的优缺点？",
  "65.几种常见的 CSS 布局",
  "66.画一条 0.5px 的线",
  "67.transition 和 animation 的区别",
  "68.什么是首选最小宽度？",
  "69.为什么 height:100 会无效？",
  "70.min-width/max-width 和 min-height/max-height 属性间的覆盖规则？",
  "71.内联盒模型基本概念",
  "72.什么是幽灵空白节点？",
  "73.什么是替换元素？",
  "74.替换元素的计算规则？",
  "75.content 与替换元素的关系？",
  "76.margin:auto 的填充规则？",
  "77.margin 无效的情形",
  "78.border 的特殊性？",
  "79.什么是基线和 x-height？",
  "80.line-height 的特殊性？",
  "81.vertical-align 的特殊性？",
  "82.overflow 的特殊性？",
  "83.无依赖绝对定位是什么？",
  "84.absolute 与 overflow 的关系？",
  "85.clip 裁剪是什么？",
  "86.relative 的特殊性？",
  "87.什么是层叠上下文？",
  "88.什么是层叠水平？",
  "89.元素的层叠顺序？",
  "90.层叠准则？",
  "91.font-weight 的特殊性？",
  "92.text-indent 的特殊性？",
  "93.letter-spacing 与字符间距？",
  "94.word-spacing 与单词间距？",
  "95.white-space 与换行和空格的控制？",
  "96.隐藏元素的 background-image 到底加不加载？",
  "97.如何实现单行／多行文本溢出的省略（...）？",
  "98.常见的元素隐藏方式？",
  "99.css 实现上下固定中间自适应布局？",
  "100.css 两栏布局的实现？",
  "101.css 三栏布局的实现？",
  "102.实现一个宽高自适应的正方形",
  "103.实现一个三角形",
  "104.一个自适应矩形，水平垂直居中，且宽高比为 2:1",
  "105.你知道 CSS 中不同属性设置为百分比时 对应的计算基准？",
];

export let js = [
  "1. 介绍 js 的基本数据类型。",
  "2. JavaScript 有几种类型的值？你能画一下他们的内存图吗？",
  "3. 什么是堆？什么是栈？它们之间有什么区别和联系？",
  "4. 内部属性 Class, 是什么？",
  "5. 介绍 js 有哪些内置对象？",
  "6. undefined 与 undeclared 的区别？",
  "7. null 和 undefined 的区别？",
  "8. 如何获取安全的 undefined 值？",
  "9. 说几条写 JavaScript 的基本规范？",
  "10. JavaScript 原型，原型链？ 有什么特点？",
  "11. js 获取原型的方法？",
  "12. 在 js 中不同进制数字的表示方式",
  "13. js 中整数的安全范围是多少？",
  "14. typeof NaN 的结果是什么？",
  "15. isNaN 和 Number.isNaN 函数的区别？",
  "16. Array 构造函数只有一个参数值时的表现？",
  "17. 其他值到字符串的转换规则？",
  "18. 其他值到数字值的转换规则？",
  "19. 其他值到布尔类型的值的转换规则？",
  "20. {} 和 '', 的 valueOf 和 toString 的结果是什么？",
  "21. 什么是假值对象？",
  "22. ~ 操作符的作用？",
  "23. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？",
  "24. 操作符什么时候用于字符串的拼接？",
  "25. 什么情况下会发生布尔值的隐式强制类型转换？",
  "26. || 和 &amp;&amp; 操作符的返回值？",
  "27. Symbol 值的强制类型转换？",
  "28. == 操作符的强制类型转换规则？",
  "29. 如何将字符串转化为数字，例如 '12.3b'?",
  "30. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?",
  "31. 常用正则表达式",
  "32. 生成随机数的各种方法？",
  "33. 如何实现数组的随机排序？",
  "34. javascript 创建对象的几种方式？",
  "35. JavaScript 继承的几种实现方式？",
  "36. 寄生式组合继承的实现？",
  "37. Javascript 的作用域链？",
  "38. 谈谈 This 对象的理解。",
  "39. eval 是做什么的？",
  "40. 什么是 DOM 和 BOM？",
  "41. 写一个通用的事件侦听器函数。",
  "42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？",
  "43. 三种事件模型是什么？",
  "44. 事件委托是什么？",
  "45. '1', '2', '3',.map(parseInt) 答案是多少？",
  "46. 什么是闭包，为什么要用它？",
  "47. javascript 代码中的 'use strict'; 是什么意思 ? 使用它区别是什么？",
  "48. 如何判断一个对象是否属于某个类？",
  "49. instanceof 的作用？",
  "50. new 操作符具体干了什么呢？如何实现？",
  "51. Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？",
  "52. 对于 JSON 的了解？",
  "54. js 延迟加载的方式有哪些？",
  "55. Ajax 是什么? 如何创建一个 Ajax？",
  "56. 谈一谈浏览器的缓存机制？",
  "57. Ajax 解决浏览器缓存问题？",
  "58. 同步和异步的区别？",
  "59. 什么是浏览器的同源政策？",
  "60. 如何解决跨域问题？",
  "61. 服务器代理转发时，该如何处理 cookie？",
  "62. 简单谈一下 cookie ？",
  "63. 模块化开发怎么做？",
  "64. js 的几种模块规范？",
  "65. AMD 和 CMD 规范的区别？",
  "66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。",
  "67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）",
  "68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？",
  "69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?",
  "70. documen.write 和 innerHTML 的区别？",
  "71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？",
  "72. innerHTML 与 outerHTML 的区别？",
  "73. .call() 和 .apply() 的区别？",
  "74. JavaScript 类数组对象的定义？",
  "75. 数组和对象有哪些原生方法，列举一下？",
  "76. 数组的 fill 方法？",
  "78. JavaScript 中的作用域与变量声明提升？",
  "79. 如何编写高性能的 Javascript ？",
  "80. 简单介绍一下 V8 引擎的垃圾回收机制",
  "81. 哪些操作会造成内存泄漏？",
  "82. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？",
  "83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）",
  "84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？",
  "85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？",
  "86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？",
  "87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？",
  "88. 检测浏览器版本版本有哪些方式？",
  "89. 什么是 Polyfill ？",
  "90. 使用 JS 实现获取文件扩展名？",
  "91. 介绍一下 js 的节流与防抖？",
  "92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？",
  "93. escape,encodeURI,encodeURIComponent 有什么区别？",
  "94. Unicode 和 UTF-8 之间的关系？",
  "95. js 的事件循环是什么？",
  "96. js 中的深浅拷贝实现？",
  "97. 手写 call、apply 及 bind 函数",
  "98. 函数柯里化的实现",
  "99. 为什么 0.1 0.2 != 0.3？如何解决这个问题？",
  "100. 原码、反码和补码的介绍",
  "101. toPrecision 和 toFixed 和 Math.round 的区别？",
  "102. 什么是 XSS 攻击？如何防范 XSS 攻击？",
  "103. 什么是 CSP？",
  "104. 什么是 CSRF 攻击？如何防范 CSRF 攻击？",
  "105. 什么是 Samesite Cookie 属性？",
  "106. 什么是点击劫持？如何防范点击劫持？",
  "107. SQL 注入攻击？",
  "108. 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？",
  "109. vue 双向数据绑定原理？",
  "110. Object.defineProperty 介绍？",
  "111. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？",
  "112. 什么是 Virtual DOM？为什么 Virtual DOM 比原生 DOM 快？",
  "113. 如何比较两个 DOM 树的差异？",
  "114. 什么是 requestAnimationFrame ？",
  "115. 谈谈你对 webpack 的看法",
  "116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？",
  "117. 谈一谈你理解的函数式编程？",
  "118. 异步编程的实现方式？",
  "119. Js 动画与 CSS 动画区别及相应实现",
  "120. get 请求传参长度的误区",
  "121. URL 和 URI 的区别？",
  "122. get 和 post 请求在缓存方面的区别",
  "123. 图片的懒加载和预加载",
  "124. mouseover 和 mouseenter 的区别？",
  "125. js 拖拽功能的实现",
  "126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？",
  "127. let 和 const 的注意点？",
  "128. 什么是 rest 参数？",
  "129. 什么是尾调用，使用尾调用有什么好处？",
  "130. Symbol 类型的注意点？",
  "131. Set 和 WeakSet 结构？",
  "132. Map 和 WeakMap 结构？",
  "133. 什么是 Proxy ？",
  "134. Reflect 对象创建目的？",
  "135. require 模块引入的查找方式？",
  "136. 什么是 Promise 对象，什么是 Promises/A 规范？",
  "137. 手写一个 Promise",
  "138. 如何检测浏览器所支持的最小字体大小？",
  "139. 怎么做 JS 代码 Error 统计？",
  "140. 单例模式模式是什么？",
  "141. 策略模式是什么？",
  "142. 代理模式是什么？",
  "143. 中介者模式是什么？",
  "144. 适配器模式是什么？",
  "145. 观察者模式和发布订阅模式有什么不同？",
  "146. Vue 的生命周期是什么？",
  "147. Vue 的各个生命阶段是什么？",
  "148. Vue 组件间的参数传递方式？",
  "149. computed 和 watch 的差异？",
  "150. vue-router 中的导航钩子函数",
  "151. $route 和 $router 的区别？",
  "152. vue 常用的修饰符？",
  "153. vue 中 key 值的作用？",
  "154. computed 和 watch 区别？",
  "155. keep-alive 组件有什么作用？",
  "156. vue 中 mixin 和 mixins 区别？",
  "157. 开发中常用的几种 Content-Type ？",
  "158. 如何封装一个 javascript 的类型判断函数？",
  "159. 如何判断一个对象是否为空对象？",
  "160. 使用闭包实现每隔一秒打印 1,2,3,4",
  "161. 手写一个 jsonp",
  "162. 手写一个观察者模式？",
  "163. EventEmitter 实现",
  "164. 一道常被人轻视的前端 JS 面试题",
  "165. 如何确定页面的可用性时间，什么是 Performance API？",
  "166. js 中的命名规则",
  "167. js 语句末尾分号是否可以省略？",
  "168. Object.assign()",
  "169. Math.ceil 和 Math.floor",
  "170. js for 循环注意点",
  "171. 一个列表，假设有 100000 个数据，这个该怎么办？",
  "172. js 中倒计时的纠偏实现？",
  "173. 进程间通信的方式？",
  "174. 如何查找一篇英文文章中出现频率最高的单词？",
];
