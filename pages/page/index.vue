<template>
  <view>
    <web-view :webview-styles="webviewStyles" :src="url"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.axihe.com/map/html-focus.html",
      webviewStyles: {
        progress: {
          color: "#FF3333",
        },
      },
    };
  },
  onLoad: function (option) {
    //option为object类型，会序列化上个页面传递的参数
    // this.title = option.title;

    let obj = {
      html: "https://www.axihe.com/map/html-focus.html",
      css: "https://www.axihe.com/map/css-focus.html",
      js: "https://www.axihe.com/map/js-focus.html",
      vue: "https://www.axihe.com/map/vue-focus.html",
      http: "https://www.axihe.com/map/ajax-focus.html",
      前端经验相关: "https://www.axihe.com/map/other-focus.html",
      前端综合: "https://www.axihe.com/map/web-focus.html",
      Webpack: "https://www.axihe.com/map/webpack-focus.html",
      微信小程序: "https://www.axihe.com/map/wechat-focus.html",
    };

    this.url = obj[option.title];
  },
  methods: {},
};
</script>

<style></style>
