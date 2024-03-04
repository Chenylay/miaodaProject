"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    network: function() {
      common_vendor.index.request({
        url: "https://mock.apifox.com/m1/3949969-0-default/space/question/get",
        data: {
          limit: 5
        },
        success: (res) => {
          console.log(res);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_mid_searchbox2 = common_vendor.resolveComponent("mid-searchbox");
  _easycom_mid_searchbox2();
}
const _easycom_mid_searchbox = () => "../../components/mid-searchbox/mid-searchbox.js";
if (!Math) {
  _easycom_mid_searchbox();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(3, (items, k0, i0) => {
      return {
        a: common_vendor.f(3, (item, k1, i1) => {
          return {};
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/ASUS/Desktop/软件创新/miaoda-project/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
