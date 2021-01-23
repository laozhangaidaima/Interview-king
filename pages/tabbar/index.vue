<template name="basics">
  <view>
    <scroll-view scroll-y class="page">
      <view class="nav-list">
        <navigator
          hover-class="none"
          :url="
            '/pages/' +
            jumpUrl +
            '/index' +
            '?title=' +
            item.title +
            '&id=' +
            item.id
          "
          class="nav-li"
          navigateTo
          :class="'bg-' + item.color"
          v-for="(item, index) in elements"
          :key="index"
        >
          <view class="nav-title">{{ item.title }}</view>
          <view>{{ item.name }}</view>
          <text :class="'cuIcon-' + item.cuIcon"></text>
        </navigator>
      </view>
    </scroll-view>
    <!-- tabbar -->
    <view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" @click="NavChange" data-cur="basics">
        <view class="cuIcon-cu-image">
          <image
            :src="
              '/static/tabbar/basics' +
              [PageCur == 'basics' ? '_cur' : ''] +
              '.png'
            "
          ></image>
        </view>
        <view :class="PageCur == 'basics' ? 'text-green' : 'text-gray'"
          >随机</view
        >
      </view>
      <view class="action" @click="NavChange" data-cur="component">
        <view class="cuIcon-cu-image">
          <image
            :src="
              '/static/tabbar/component' +
              [PageCur == 'component' ? '_cur' : ''] +
              '.png'
            "
          ></image>
        </view>
        <view :class="PageCur == 'component' ? 'text-green' : 'text-gray'"
          >列表</view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "basics",
  data() {
    return {
      elements: [
        {
          title: "http",
          id: "http",
          color: "cyan",
        },
        {
          title: "html",
          id: "html",
          color: "blue",
        },
        {
          title: "css",
          id: "css",
          color: "purple",
        },
        {
          title: "js",
          id: "js",
          color: "olive",
        },
        {
          title: "vue",
          id: "vue",
          color: "mauve",
        },
        {
          title: "soft",
          id: "soft",
          color: "pink",
        },
        {
          title: "webpack",
          id: "webpack",
          color: "brown",
        },
        {
          title: "wechat",
          id: "wechat",
          color: "red",
        },
      ],
      PageCur: "basics",
      jumpUrl: "remember",
    };
  },
  onShow() {
    console.log("success");
  },
  methods: {
    NavChange: function (e) {
      this.PageCur = e.currentTarget.dataset.cur;
      this.jumpUrl = this.PageCur === "basics" ? "remember" : "list";

      // this.jumpUrl = '123'
      //   "'/pages/remember/index' + '?title=' + item.title + '&id=' + item.id";
      // '/pages/remember/index' + '?title=' + item.title + '&id=' + item.id
    },
  },
};
</script>

<style>
.page {
  /* height: 100vh; */
  margin-top: 100upx;
}
</style>
