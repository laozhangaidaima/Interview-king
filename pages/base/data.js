let dataMsg = [
  {
    title: "常见浏览器内核",
    msg:
      "\n## 内核\n- Trident：IE 浏览器内核；\n- Gecko：Firefox 浏览器内核；\n- Presto：Opera 浏览器内核；\n- Webkit：Safari 浏览器内核；\n- Blink：谷歌浏览器内核，属于 Webkit 的一个分支，与 Opera 一起在研发；\n\n## 浏览器\n- IE：Trident，IE 内核；\n- Chrome：以前是 Webkit，现在是 Blink 内核；\n- Firefox：Gecko 内核；\n- Safari：Webkit 内核；\n- Opera：一起是 Presto，现在是 Blink 内核；\n- 360、猎豹浏览器内核：IE + Blink 双内核；\n- 搜狗、遨游、QQ 浏览器内核：Trident（兼容模式）+ Webkit（高速模式）；\n- 百度浏览器、世界之窗内核：IE 内核；\n- 2345 浏览器：以前是 IE 内核，现在是 IE + Blink 双内核；\n- UC 浏览器内核：Webkit + Trident；\n",
    type: "browser",
  },
  {
    title: "页面导入样式时，使用 link 和 @import 有什么区别",
    msg:
      "\n1. 从属关系区别。@import 只能导入样式表，link 还可以定义 RSS、rel 连接属性、引入网站图标等；\n2. 加载顺序区别；加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载；\n3. 兼容性区别；\n      ",
    type: "browser",
  },
  {
    title: "浏览器的渲染原理",
    msg:
      "\n\n1. 首先解析收到的文档，根据文档定义构建一颗 DOM 树，DOM 树是由 DOM 元素及属性节点组成的；\n2. 然后对 CSS 进行解析，生成 CSSOM 规则树；\n3. 根据 DOM 树和 CSSOM 规则树构建 Render Tree。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 对象相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。\n4. 当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情就是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。\n5. 布局阶段结束后是绘制阶段，比那里渲染树并调用对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。\n\n\n为了更好的用户体验，渲染引擎会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 解析完成之后再去构建和布局 render tree。它是解析完一部分内容就显示一部分内容，同时可能还在网络下载其余内容。\n      ",
    type: "browser",
  },
  {
    title: "如何实现浏览器内多个标签页之间的通信",
    msg:
      "\n\n实现多个标签页之间的通信，本质上都是通过中介者模式来实现的。因为标签页之间没有办法直接通信，因此我们可以找一个中介者来让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。\n\n1. 使用 Websocket，通信的标签页连接同一个服务器，发送消息到服务器后，服务器推送消息给所有连接的客户端；\n2. 可以地调用 localStorage，localStorage 在另一个浏览上下文里被添加、修改或删除时，它都会触发一个 storage 事件，我们可以通过监听 storage 事件，控制它的值来进行页面信息通信；\n3. 如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标签页通信的；\n      ",
    type: "browser",
  },
  {
    title: "简述前端性能优化",
    msg:
      "\n\n## 页面内容方面\n\n1. 通过文件合并、css 雪碧图、使用 base64 等方式来减少 HTTP 请求数，避免过多的请求造成等待的情况；\n2. 通过 DNS 缓存等机制来减少 DNS 的查询次数；\n3. 通过设置缓存策略，对常用不变的资源进行缓存；\n4. 通过延迟加载的方式，来减少页面首屏加载时需要请求的资源，延迟加载的资源当用户需要访问时，再去请求加载；\n5. 通过用户行为，对某些资源使用预加载的方式，来提高用户需要访问资源时的响应速度；\n\n## 服务器方面\n\n1. 使用 CDN 服务，来提高用户对于资源请求时的响应速度；\n2. 服务器端自用 Gzip、Deflate 等方式对于传输的资源进行压缩，减少传输文件的体积；\n3. 尽可能减小 cookie 的大小，并且通过将静态资源分配到其他域名下，来避免对静态资源请求时携带不必要的 cookie；\n      ",
    type: "browser",
  },
  {
    title: "从输入一个url到浏览器页面展示都经历了哪些过程？",
    msg:
      "\n\n1. 首先，在浏览器地址栏中输入url\n\n2. 浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。\n\n3. 在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址。\n\n4. 浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。\n\n5. 握手成功后，浏览器向服务器发送http请求，请求数据包。\n\n6. 服务器处理收到的请求，将数据返回至浏览器\n\n7. 浏览器收到HTTP响应\n\n8. 读取页面内容，浏览器渲染，解析html源码\n\n9. 生成Dom树、解析css样式、js交互\n\n10. 客户端和服务器交互\n\n11. ajax查询\n      ",
    type: "browser",
  },
  {
    title: "tcp三次握手",
    msg:
      "\n1. 第一次握手：客户端发包，服务端收到了\n2. 第二次握手：服务端发包，客户端收到了\n3. 第三次握手：客户端发包，服务端收到了\n- 作用是：客户端和服务端都确认自己的接收、发送能力是正常的\n- TCP连接是全双工 需要确认双方接收、发送能力都是正常的\n      ",
    type: "browser",
  },
  {
    title: "tcp四次挥手",
    msg:
      "\n1. 第一次挥手：客户端请求关闭连接。\n2. 第二次挥手：服务器端还没有准备好关闭连接。\n3. 第三次挥手：服务器端准备好关闭连接时，通知客户端\n4. 第四次挥手：客户端确定关闭，服务端确定关闭\n- 作用是：告诉对方我要关闭了\n      ",
    type: "browser",
  },
  {
    title: "浏览器渲染过程",
    msg:
      "\n1. HTML解析出DOM树\n2. CSS解析出css树\n3. 将二者关联生成渲染树\n4. 根据渲染树计算每个节点的信息\n5. 根据计算好的信息绘制整个页面\n\n- 其他特点\n  - 浏览器解析文档，当遇到script标签的时候，会立即解析脚本，停止解析文档（因为JS可能会改动DOM和CSS，所以继续解析会造成浪费）。\n  - html从上往下渲染\n\n      ",
    type: "browser",
  },
  {
    title: "重绘和回流,如何进行优化？",
    msg:
      "\n- 重绘\n  - 不影响布局：color、background-color、outline\n- 回流\n  - 布局改变：元素大小、布局、隐藏\n  1. 添加或者删除可见的DOM元素；\n  2. 元素位置改变；\n  3. 元素尺寸改变——，margin、padding、height、width；\n  4. 内容变化，比如用户在input框中输入文字，文本或者图片大小改变而引起的计算值宽度和高度改变；\n  5. 页面渲染初始化；\n\n- 其他特点\n  - 回流必将引起重绘，而重绘不一定会引起回流。\n  - html从上往下渲染\n- 优化\n  1. 避免设置多层内联样式\n  2. 避免使用table布局\n  3. 避免频繁操作DOM\n  4. 多用class 少用id\n      ",
    type: "browser",
  },
  {
    title: "前端SEO",
    msg:
      "\n1. 准确的网页标题 title\n2. 使用 meta 元标签  keywords和description要准确\n3. 使用语义化元素\n4. 利用 img 中的 alt 属性\n5. html css js 样式分离\n6. 重要内容放在html最前面\n7. 速度 / 性能直接影响 SEO\n8. 交换链接\n      ",
    type: "browser",
  },
  {
    title: "HTTP状态码作用",
    msg:
      "\n- 1xx消息\n    - 处理中\n- 2xx成功\n    - 服务器处理成功\n- 3xx重定向\n    - 客户端采取进一步的操作才能完成请求。\n- 4xx客户端错误\n    - 客户端错误\n- 5xx服务器错误\n    - 服务器错误\n",
    type: "server",
  },
  {
    title: "DNS缓存",
    msg:
      "\n1. DNS查询耗时大约20ms\n2. 过期时间：谷歌、火狐 1分钟  IE将DNS缓存30min  iOS 24小时\n- 作用是：将域名解析成IP地址\n      ",
    type: "server",
  },
  {
    title: "CDN缓存",
    msg: "\n- 作用是：内容分发网络 中间服务器 提高异地访问速度\n      ",
    type: "server",
  },
  {
    title: "浏览器缓存(http缓存)",
    msg:
      "\n1. 将资源缓存到内存中\n2. 三级缓存原理 (访问缓存优先级)\n   1. 先在内存中查找,如果有,直接加载。\n   2. 如果内存中不存在,则在硬盘中查找,如果有直接加载。\n   3. 如果硬盘中也没有,那么就进行网络请求。\n   4. 请求获取的资源缓存到硬盘和内存。\n3. 浏览器缓存的分类\n   1. 强缓存\n   2. 协商缓存\n4. 浏览器默认缓存时间\n   1. firefox ：假设 7点0分 访问的 5点0分修改的 index.html ,那么缓存时间为2*60*60 ÷ 10 = 720 秒 页面缓存时间为 720 秒\n5. Expires：过期时间\n6. ETag：文件发生了改变\n7. Cache-Control：设置缓存时间、状态以及验证状态。\n8. Last-Modified：上次被修改时间\n- 作用是：保存HTTP获取的资源 减少服务器负担 加快网页速度\n      ",
    type: "server",
  },
  {
    title: "Doctype作用",
    msg:
      "\n- 作用是：告诉浏览器用怪异模式还是标准模式解析\n\n1. 标准模式：遵循最新标准\n2. 怪异/兼容模式：处理所有奇怪的渲染及不符合标准的网页。\n3. 强制触发怪异模式\n    1. 丢失的 URL\n    2. 没有使用或格式错误的 DOCTYPE\n",
    type: "html",
  },
  {
    title: "标准模式和怪异模式区别",
    msg:
      '\n1. 标准盒模型：width = width + 2margin + 2padding + 2*border \n2. 怪异(ie)盒模型：width(content) 部分包含了 border 和 padding  注意：margin不包括\n3. 切换盒模型： \n    1. 怪异盒模型：box-sizing："border-box"  \n    2. 标准盒模型：box-sizing："content-box"\n',
    type: "html",
  },
  {
    title: "行内元素有哪些?块级元素有哪些?怎么改变？",
    msg:
      "\n1. 块级元素：div h1--h4 hr ul li\n2. 行内元素: span img input i a em  \n3. 切换元素类型： \n    1. 块级元素：display：block  \n    2. 行内元素：display：inline\n",
    type: "html",
  },
  {
    title: "html全局属性有哪些",
    msg: `
- 作用是：所有HTML元素共有的属性

1. accesskey:设置快捷键
2. class:类名
3. id: 元素 id，文档内唯一
4. contenteditable：是否可编辑
5. contextmenu: 自定义鼠标右键弹出菜单内容
6. data-*: 为元素增加自定义属性
7. draggable: 设置元素是否可拖拽
8. style: 行内 css 样式
9. title: 元素相关的建议信息
     `,
    type: "html",
  },
  {
    title: "CSS 有哪些继承属性",
    msg: `
- 作用是：子节点继承父节点的属性

- 关于文字排版的属性如：
  - font
  - word-break
  - letter-spacing
  - text-align
  - text-rendering
  - word-spacing
  - white-space
  - text-indent
  - text-transform
  - text-shadow
- line-height
- color
- visibility
- cursor
     `,
    type: "css",
  },
  {
    title: "cookies，sessionStorage 和 localStorage",
    msg: `
- 作用是：缓存数据

- sessionStorage：会话结束后数据也随之销毁
  - 关闭浏览器，数据销毁
  - 微信公众号的网站中，直接点击关闭按钮，或者是后退到公众号界面，才算是关闭
- localStorage：持久化的本地存储
- cookie：与服务器进行交互 
     `,
    type: "browser",
  },
  {
    title: "触发bfc及作用",
    msg: `
- 作用是：
  - 解决外边距折叠问题
  - 清除浮动
  
- 如何触发
  - 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
  - 根元素或包含根元素的元素
  - 浮动元素（元素的 float 不是 none）
  - 绝对定位元素（元素的 position 为 absolute 或 fixed）
  - overflow 值不为 visible 的块元素
  - 行内块元素（元素的 display 为 inline-block）
  - 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
  - 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
  - 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
  - display 值为 flow-root 的元素
  - contain 值为 layout、content或 strict 的元素
  - 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
  - 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
  - column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
     `,
    type: "css",
  },
  {
    title: "如何把控项目质量",
    msg: `  
- 规范项目目录 脚手架
- eslint 提交代码审查
- .EditorConfig文件 统一编辑器 编码样式
     `,
    type: "codeReview",
  },
  {
    title: "怎么codeReview",
    msg: `  
- 工具使用GitLab 
- Code Review：上线前一次 一周最多一次 
- 分支合并到master 需要eslint和codereview通过
- 业务质量 分支自测 基线测试 外网测试 外网正式
- 代码质量 分支自测通过eslint  
     `,
    type: "codeReview",
  },
  {
    title: "mvvm和mvc，两者区别？",
    msg: `  
- 是设计架构 设计模式 
- mvc
  - m：模型（Model）：数据保存
  - v：视图（View）：用户界面
  - c：控制器（Controller）：业务逻辑
  - 所有通信都是单向的。
  - View 传送指令到 Controller
  - Controller 完成业务逻辑后，要求 Model 改变状态
  - Model 将新的数据发送到 View，用户得到反馈
  - 数据流向是一个环
- mvvm
  - 各部分之间的通信，都是双向的。
  - View 与 Model 不发生联系，都通过 vm 传递。
  - 采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。
  - 数据流向是v ⇄ vm ⇄ m  是双向的
- 区别
  - mvc是单向的 mvvm是双向的
  - 数据流向不同
  - MVVM主要解决了MVC中大量的dom操作
  - 优点：低耦合 可重用性 独立开发 结构清晰
     `,
    type: "mvvm",
  },
  {
    title: "面向对象的三大特征",
    msg: `  
- 封装，继承，多态 
- 封装:隐藏实现设计细节，暴露结果功能
  - 类 function
- 继承：一个对象获得另一个对象的属性和方法
  - 实现方法：
    - call或者apply  
    - prototype
    - extend
  - m：模型（Model）：数据保存
  - v：视图（View）：用户界面
  - c：控制器（Controller）：业务逻辑
  - 所有通信都是单向的。
  - View 传送指令到 Controller
  - Controller 完成业务逻辑后，要求 Model 改变状态
  - Model 将新的数据发送到 View，用户得到反馈
  - 数据流向是一个环
- 多态
  - 同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果
  - 类似条件分支
     `,
    type: "object",
  },
  {
    title: "面向对象的6个原则",
    msg: `  
- 单一职责：一个函数一个功能
- 开闭：扩展是开放的，但是对于修改是封闭的。
- 里氏替换：只要父类出现的地方子类就可以出现，而且替换成子类不会有任何的错误或异常
- 依赖倒置：高层模块不应该依赖低层模块，两者之间都应该依赖其抽象  抽象不应该依赖细节 细节应该依赖抽象
- 接口隔离：类与类之间的依赖关系应该建立在最小的接口之上
- 迪米特：一个类应该对自己需要耦合或者调用的类知道最少
     `,
    type: "object",
  },
  {
    title: "模块化规范有哪些？好处？",
    msg: `  
- 包括：CommonJS AMD CMD UMD 原生js模块化
- 好处：代码复用 可维护性好 依赖管理 避免变量名污染
- 模块就是实现特定功能的文件
     `,
    type: "module",
  },
  {
    title: "CommonJS、AMD、CMD、UMD、原生模块化是什么？",
    msg: `  
- CommonJS(服务器端模块的规范)
  - 服务器端模块的规范，Node.js采用了这个规范。
  - require 和 module.exports
  - 加载完成才能执行后面的操作
  - 一个单独的文件就是一个模块。加载模块使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象。

- AMD(异步模块定义)
  - define方法定义模块
- CMD(通用模块定义)
  - define方法定义模块
  - 区别：对于依赖的模块AMD是提前执行，CMD是延迟执行。 CMD推崇依赖就近，AMD推崇依赖前置
- UMD
  - UMD是CommonJS和AMD的综合产物
  - 先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。
  - 在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。
- 原生JS模块化（Native JS） es6
  - import export
     `,
    type: "module",
  },
  {
    title: "怎么设计一个组件？",
    msg: `  
- 专一：一个组件只专注做一件事，且把这件事做好。
- 可配置性：明确输入和输出分别是什么 不同参数不同表现
- 传参的校验：是否正确 是否必须  当属性没有被设置时，就使用默认值。
- 最好项目之初就决定好哪些部分需要抽离为组件
- 出现三次就肯定要封装
- 只依赖传参 容错高 耦合性低 不要用依赖vuex localstore 
     `,
    type: "component",
  },
  {
    title: "上传组件到npm",
    msg: `  
- vue-cli搭建一个组件
- 修改package.json 
- 创建 npmignoore
- 登录npm账号
- npm publish 发布
     `,
    type: "component",
  },
  {
    title: "为什么需要虚拟DOM?",
    msg: `  
- 前端性能优化是尽可能少地操作DOM
- DOM操作相对较慢
- 频繁变动DOM会造成浏览器的重绘或回流
- 一次性将差异更新到DOM
     `,
    type: "vue",
  },
  {
    title: "什么是虚拟DOM?",
    msg: `  
- 虚拟DOM就是用JS对象来表示或者是模拟一个真实DOM的结构。
     `,
    type: "vue",
  },
  {
    title: "虚拟DOM的创建过程?",
    msg: `  
- 通过真实dom的信息 获取元素 子节点 html指令 props等信息
- 通过解析器 把真实dom 编译为虚拟dom 形成树结构
- 操作dom 把虚拟dom再编译为真实dom
- 一次性将差异更新到DOM
     `,
    type: "vue",
  },
  {
    title: "什么是双向绑定和单向绑定？",
    msg: `  
- MVVM数据双向绑定，即主要是：数据变化更新视图，视图变化更新数据。
- 单向绑定：只有数据能改变视图 视图不能改变数据
     `,
    type: "vue",
  },
  {
    title: "vue实现双向绑定",
    msg: `  
-  mvvm设计模式 v层和m层可以相互改变
-  第一步：使数据对象变得“可观测”
  - Object.defineProperty 第一次参数是对象 第二个参数是要监听的值 第三个参数是get set
  - 知道了数据在什么时候被读或写了
  - 通过遍历 把对象的每一个属性都监听到
- 第二步：依赖收集
  - 通过 发布订阅者 模式实现
  - 所有依赖收集起来，一旦数据发生变化，就统一通知更新。
  - 创建依赖收集容器，也就是消息订阅器Dep
     `,
    type: "vue",
  },
];

export default dataMsg;
