<template>
  <view class="bg-cyan pages" @click="randomMsg(msgItem)">
    <view class="padding text-center text-size">{{ title }}</view>
    <view class="main"> {{ index + 1 }}: {{ msg }} </view>
  </view>
</template>

<script>
import * as dataMsg from "./data";

export default {
  data() {
    return {
      msg: "",
      msgItem: [],
      title: "",
      index: 0,
    };
  },
  created() {},
  onLoad: function (option) {
    //option为object类型，会序列化上个页面传递的参数
    this.title = option.title;
    for (const key in dataMsg) {
      if (key === option.id) {
        this.msgItem = dataMsg[key];
        this.randomMsg(dataMsg[key]);
        return;
      }
    }
  },
  methods: {
    randomMsg(data) {
      this.index = Math.floor(Math.random() * data.length);
      this.msg = data[this.index];
    },
  },
};
</script>

<style>
page {
  height: 100%;
}
.pages {
  height: 100%;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 24px;
}
.text-size {
  font-size: 30px;
}
</style>
