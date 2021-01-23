<template name="basics">
  <view>
    <scroll-view scroll-y class="page">
      <view class="nav-list">
        <navigator
          hover-class="none"
          :url="
            '/pages/remember/index' + '?title=' + item.title + '&id=' + item.id
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
  </view>
</template>

<script>
export default {
  name: "basics",
  data() {
    return {
      elements: [
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
          title: "http",
          id: "http",
          color: "pink",
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
  /* height: 100vh; */
  margin-top: 100upx;
}
</style>
