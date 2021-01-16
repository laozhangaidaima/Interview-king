<template name="basics">
  <view>
    <scroll-view scroll-y class="page">
      <!-- <image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 mode="widthFix" class="response"></image> -->
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
      <!-- <view class="cu-tabbar-height"></view> -->
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
          //   name: "layout",
          color: "cyan",
          //   cuIcon: "newsfill",
        },
        {
          title: "服务器",
          id: "server",
          //   name: "background",
          color: "blue",
          //   cuIcon: "colorlens",
        },
        {
          title: "html",
          id: "html",
          //   name: "text",
          color: "purple",
          //   cuIcon: "font",
        },
        {
          title: "css",
          id: "css",
          //   name: "icon",
          color: "mauve",
          //   cuIcon: "cuIcon",
        },
        {
          title: "js",
          id: "js",
          //   name: "button",
          color: "pink",
          //   cuIcon: "btn",
        },
        {
          title: "vue",
          id: "vue",
          //   name: "tag",
          color: "brown",
          //   cuIcon: "tagfill",
        },
        {
          title: "组件化开发",
          id: "7",
          //   name: "avatar",
          color: "red",
          //   cuIcon: "myfill",
        },
        {
          title: "兼容性方案",
          id: "8",
          //   name: "progress",
          color: "orange",
          //   cuIcon: "icloading",
        },
        {
          title: "设计模式",
          id: "9",
          //   name: "shadow",
          color: "olive",
          //   cuIcon: "copy",
        },
        {
          title: "模块化开发",
          id: "10",
          //   name: "loading",
          color: "green",
          //   cuIcon: "loading2",
        },
        {
          title: "面向对象",
          id: "object",
          //   name: "loading",
          color: "grey",
          //   cuIcon: "loading2",
        },
        {
          title: "执行顺序",
          id: "12",
          //   name: "loading",
          color: "black",
          //   cuIcon: "loading2",
        },
        {
          title: "事件队列",
          id: "13",
          //   name: "loading",
          color: "grey",
          //   cuIcon: "loading2",
        },
        {
          title: "mvvm和mvc",
          id: "mvvm",
          //   name: "loading",
          color: "pink",
          //   cuIcon: "loading2",
        },
        {
          title: "单元测试",
          id: "15",
          //   name: "loading",
          color: "mauve",
          //   cuIcon: "loading2",
        },
        {
          title: "代码质量",
          id: "codeReview",
          //   name: "loading",
          color: "olive",
          //   cuIcon: "loading2",
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
