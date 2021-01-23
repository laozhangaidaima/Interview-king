<template name="basics">
  <view>
    <view class="bg-gradual-blue padding text-center text-fix">{{
      title
    }}</view>

    <view class="cu-list menu">
      <view class="cu-item" v-for="(item, index) in elements" :key="index">
        <!-- @tap="showModal(item)" -->
        <view class="content">
          <text class="text-grey">{{ index + 1 }}：{{ item }}</text>
        </view>
      </view>
    </view>

    <!-- <view class="cu-modal" :class="modalName == 'Modal' ? 'show' : ''">
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
    </view> -->
  </view>
</template>

<script>
import MDParserHighlight from "components/cmder-MDParserHighlight/index.vue";
import * as dataMsg from "./data";

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
    for (const key in dataMsg) {
      if (key === option.id) {
        this.elements = dataMsg[key];
        return;
      }
    }
    // 暂时不做详情弹窗
    // document.addEventListener("click", (e) => {
    //   if (e.target.getAttribute("class") === "cu-modal show") {
    //     this.hideModal();
    //   }
    // });
  },
  methods: {
    showModal(item) {
      this.modalData = item;
      this.modalName = "Modal";
    },
    hideModal() {
      this.modalName = null;
    },
  },
};
</script>

<style>
.wrapper {
  white-space: pre-wrap;
}
.text-fix {
  position: fixed;
  z-index: 1;
  width: 100%;
}
.menu {
  padding-top: 40px;
}
</style>
