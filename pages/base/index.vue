<template name="basics">
  <view>
    <view class="bg-gradual-blue padding text-center">{{ title }}</view>

    <view class="cu-list menu">
      <view
        class="cu-item"
        v-for="(item, index) in elements"
        :key="index"
        :style="[{ animation: 'show ' + ((index + 1) * 0.5 + 1) + 's 1' }]"
      >
        <view class="content" @tap="showModal(item)">
          <text class="text-grey">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <view class="cu-modal" :class="modalName == 'Modal' ? 'show' : ''">
      <view class="cu-dialog">
        <view class="cu-bar bg-white justify-end">
          <view class="content">{{ modalData.title }}</view>
          <view class="action" @tap="hideModal">
            <text class="cuIcon-close text-red"></text>
          </view>
        </view>
        <view class="padding-xl text-left"
          ><MDParserHighlight :resource="modalData.msg"></MDParserHighlight
        ></view>
      </view>
    </view>
  </view>
</template>

<script>
import MDParserHighlight from "components/cmder-MDParserHighlight/index.vue";
import { browser } from "./browser";
import { server } from "./server";
export default {
  components: {
    MDParserHighlight,
  },
  data() {
    return {
      elements: [],
      title: "",
      modalName: null,
      modalData: {},
    };
  },
  onLoad: function (option) {
    //option为object类型，会序列化上个页面传递的参数
    this.title = option.title;
    let pages = { browser, server };
    for (const item in pages) {
      if (item === option.id) {
        this.elements = pages[item];
        break;
      }
    }
  },
  methods: {
    showModal(item) {
      this.modalData = item;
      this.modalName = "Modal";
    },
    hideModal(e) {
      this.modalName = null;
    },
  },
};
</script>

<style>
.wrapper {
  white-space: pre-wrap;
}
</style>
