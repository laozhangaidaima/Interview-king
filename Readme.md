# 使用了 md 渲染器 md 片段必须左顶格

# 标准格式
- 作用是：告诉浏览器用怪异模式还是标准模式解析

1. 标准模式：遵循最新标准
2. 怪异/兼容模式：处理所有奇怪的渲染及不符合标准的网页。
   1. 先在内存中查找,如果有,直接加载。
   2. 如果内存中不存在,则在硬盘中查找,如果有直接加载。
   3. 如果硬盘中也没有,那么就进行网络请求。
   4. 请求获取的资源缓存到硬盘和内存。
3. 强制触发怪异模式
   1. 丢失的 URL
   2. 没有使用或格式错误的 DOCTYPE


# 测试

CSS 有哪些继承属性
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