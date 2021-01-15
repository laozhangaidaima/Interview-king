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
- 作用是：告诉浏览器用怪异模式还是标准模式解析

1. 标准盒模型：width = width + 2margin + 2padding + 2*border 
2. 怪异(ie)盒模型：width(content) 部分包含了 border 和 padding  注意：margin不包括
3. 切换盒模型：box-sizing："border-box"  
   1. 怪异盒模型：box-sizing："border-box"  
   2. 标准盒模型：box-sizing："content-box"