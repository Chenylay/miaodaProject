"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    seeComments() {
      common_vendor.index.navigateTo({
        url: "/pages/comments/comments"
      });
    }
  }
};
if (!Array) {
  const _easycom_mid_comments2 = common_vendor.resolveComponent("mid-comments");
  _easycom_mid_comments2();
}
const _easycom_mid_comments = () => "../../components/mid-comments/mid-comments.js";
if (!Math) {
  _easycom_mid_comments();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.seeComments && $options.seeComments(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0832fc77"], ["__file", "C:/Users/ASUS/Desktop/软件创新/miaoda-project/pages/post/post.vue"]]);
wx.createPage(MiniProgramPage);
