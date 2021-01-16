<template name="basics">
  <view>
    <scroll-view scroll-y class="page">
      <view class="nav-list">
        <navigator
          hover-class="none"
          :url="'/pages/base/index' + '?title=' + item.title + '&id=' + item.id"
          class="nav-li"
          navigateTo
          :class="'bg-' + item.color"
          :style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
          v-for="(item, index) in elements"
          :key="index"
        >
          <view class="nav-title">{{ item.title }}</view>
          <view>{{ item.name }}</view>
          <text :class="'cuIcon-' + item.cuIcon"></text>
        </navigator>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "basics",
  data() {
    return {
      elements: [
        {
          title: "浏览器",
          id: "browser",
          color: "cyan",
        },
        {
          title: "服务器",
          id: "server",
          color: "blue",
        },
        {
          title: "html",
          id: "html",
          color: "purple",
        },
        {
          title: "css",
          id: "css",
          color: "mauve",
        },
        {
          title: "js",
          id: "js",
          color: "pink",
        },
        {
          title: "vue",
          id: "vue",
          color: "brown",
        },
        {
          title: "组件化开发",
          id: "component",
          color: "red",
        },
        {
          title: "模块化开发",
          id: "module",
          color: "green",
        },
        {
          title: "兼容性方案",
          id: "8",
          color: "orange",
        },
        {
          title: "设计模式",
          id: "9",
          color: "olive",
        },

        {
          title: "面向对象",
          id: "object",
          color: "grey",
        },
        {
          title: "执行顺序",
          id: "12",
          color: "black",
        },
        {
          title: "事件队列",
          id: "13",
          color: "grey",
        },
        {
          title: "mvvm和mvc",
          id: "mvvm",
          color: "pink",
        },
        {
          title: "单元测试",
          id: "15",
          color: "mauve",
        },
        {
          title: "代码质量",
          id: "codeReview",
          color: "olive",
        },
      ],
    };
  },
  onShow() {
    console.log("success");
  },
};
</script>

<style>
.page {
  height: 100vh;
  /* margin-top: 200upx; */
}
</style>
