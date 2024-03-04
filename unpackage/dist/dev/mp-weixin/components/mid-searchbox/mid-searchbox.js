"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "mid-searchbox",
  data() {
    return {};
  },
  methods: {
    searchBoxHandler() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    },
    offInformation() {
      common_vendor.index.navigateTo({
        url: "/pages/demo1/demo1"
      });
    }
    // 点击了模拟的 input 输入框
    /* searchBoxHandler() {
       // 触发外界通过 @click 绑定的 click 事件处理函数
       this.$emit('click')
     },
     offInformation(){
    this.$emit('click')
     } */
  }
};
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "search",
      size: "30"
    }),
    b: common_vendor.o((...args) => $options.searchBoxHandler && $options.searchBoxHandler(...args)),
    c: common_vendor.o((...args) => $options.offInformation && $options.offInformation(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c5634578"], ["__file", "C:/Users/ASUS/Desktop/软件创新/miaoda-project/components/mid-searchbox/mid-searchbox.vue"]]);
wx.createComponent(Component);
