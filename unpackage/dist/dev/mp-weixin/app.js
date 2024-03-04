"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/comments/comments.js";
  "./pages/PersonalPage/PersonalPage.js";
  "./pages/PlanetPage/PlanetPage.js";
  "./pages/post/post.js";
  "./pages/search/search.js";
  "./pages/SpecialPage/SpecialPage.js";
  "./pages/PersonalPage/attentionFanPage/attentionPage.js";
  "./pages/PersonalPage/attentionFanPage/fanPage.js";
  "./pages/login/login.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/ASUS/Desktop/软件创新/miaoda-project/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
