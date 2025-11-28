(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/stats/stats"],{

/***/ 69:
/*!**********************************************************************************!*\
  !*** C:/Users/86198/Desktop/light-note/main.js?{"page":"pages%2Fstats%2Fstats"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! @dcloudio/uni-console */ 26);
__webpack_require__(/*! uni-pages */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _stats = _interopRequireDefault(__webpack_require__(/*! ./pages/stats/stats.vue */ 70));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_stats.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 70:
/*!***************************************************************!*\
  !*** C:/Users/86198/Desktop/light-note/pages/stats/stats.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.vue?vue&type=template&id=162bebc6&scoped=true& */ 71);
/* harmony import */ var _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.vue?vue&type=script&lang=js& */ 73);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.vue?vue&type=style&index=0&id=162bebc6&scoped=true&lang=css& */ 75);
/* harmony import */ var _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "162bebc6",
  null,
  false,
  _stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/stats/stats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/*!**********************************************************************************************************!*\
  !*** C:/Users/86198/Desktop/light-note/pages/stats/stats.vue?vue&type=template&id=162bebc6&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./stats.vue?vue&type=template&id=162bebc6&scoped=true& */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_template_id_162bebc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 72:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86198/Desktop/light-note/pages/stats/stats.vue?vue&type=template&id=162bebc6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    qiunDataCharts: function () {
      return Promise.all(/*! import() | uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(__webpack_require__.bind(null, /*! @/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue */ 91))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 =
    !!_vm.hasDiaryData &&
    !(_vm.currentChart === "pie") &&
    !(_vm.currentChart === "bar") &&
    _vm.currentChart === "schedule"
      ? _vm.__map(7, function (day, dayIdx) {
          var $orig = _vm.__get_orig(day)
          var l0 = _vm.__map(3, function (slot, slotIdx) {
            var $orig = _vm.__get_orig(slot)
            var m0 = _vm.getMoodColor(_vm.scheduleMoods[dayIdx][slotIdx])
            return {
              $orig: $orig,
              m0: m0,
            }
          })
          return {
            $orig: $orig,
            l0: l0,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 73:
/*!****************************************************************************************!*\
  !*** C:/Users/86198/Desktop/light-note/pages/stats/stats.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./stats.vue?vue&type=script&lang=js& */ 74);
/* harmony import */ var _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86198/Desktop/light-note/pages/stats/stats.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _storage = __webpack_require__(/*! @/utils/storage */ 42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 移除组件导入语句，通过EasyCom自动引入
var _default = {
  // 移除components注册
  data: function data() {
    return {
      currentChart: 'pie',
      // 当前显示的图表类型：pie/bar/schedule
      totalTodo: 0,
      // 总待办数
      doneTodo: 0,
      // 已完成待办数
      doneRate: 0,
      // 待办完成率
      pieChartData: {},
      // 饼图数据
      barChartData: {},
      // 柱形图数据
      scheduleMoods: [],
      // 课表式心情数据（7天×3时段）
      weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // 星期数组
      // 心情-颜色映射（常量配置）
      moodColorMap: {
        开心: '#FF6B6B',
        疲惫: '#4ECDC4',
        学习: '#FFD166',
        日常: '#6A0572',
        emo: '#1A535C'
      },
      // 图表配置项
      pieChartOpts: {
        padding: [10, 10, 10, 10],
        legend: {
          show: true,
          position: 'bottom',
          align: 'center'
        },
        title: {
          name: '心情分布占比',
          fontSize: 16
        }
      },
      barChartOpts: {
        padding: [10, 10, 10, 10],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          name: '数量',
          gridType: 'dash'
        },
        legend: {
          show: true,
          position: 'bottom'
        },
        title: {
          name: '近7天心情趋势',
          fontSize: 16
        }
      }
    };
  },
  computed: {
    // 格式化完成率显示
    doneRateFormatted: function doneRateFormatted() {
      return this.totalTodo === 0 ? '0%' : "".concat(Math.round(this.doneRate * 100), "%");
    },
    // 判断是否有日记数据
    hasDiaryData: function hasDiaryData() {
      var diaryList = (0, _storage.getStorage)('DIARY') || [];
      return diaryList.length > 0;
    }
  },
  onShow: function onShow() {
    this.initPageData();
  },
  methods: {
    // 初始化页面所有数据
    initPageData: function initPageData() {
      this.initTodoStats(); // 初始化待办统计
      this.initMoodCharts(); // 初始化心情图表
      this.initScheduleMoods(); // 初始化课表式心情
    },
    // 切换图表类型
    switchChart: function switchChart(chartType) {
      this.currentChart = chartType;
      // 如果是课表图，确保数据已初始化
      if (chartType === 'schedule' && !this.scheduleMoods.length) {
        this.initScheduleMoods();
      }
    },
    // 1. 初始化待办统计
    initTodoStats: function initTodoStats() {
      var todoList = (0, _storage.getStorage)('TODO') || [];
      this.totalTodo = todoList.length;
      this.doneTodo = todoList.filter(function (item) {
        return item === null || item === void 0 ? void 0 : item.done;
      }).length;
      this.doneRate = this.totalTodo === 0 ? 0 : this.doneTodo / this.totalTodo;
    },
    // 2. 初始化心情图表（饼图+柱形图）
    initMoodCharts: function initMoodCharts() {
      var _this = this;
      var diaryList = (0, _storage.getStorage)('DIARY') || [];
      if (!this.hasDiaryData) {
        this.pieChartData = {
          series: []
        };
        this.barChartData = {
          series: []
        };
        return;
      }

      // ---------------------- 饼图：心情占比 ----------------------
      // 初始化心情计数器
      var moodCount = Object.keys(this.moodColorMap).reduce(function (obj, mood) {
        obj[mood] = 0;
        return obj;
      }, {});

      // 统计各心情数量
      diaryList.forEach(function (diary) {
        if (moodCount.hasOwnProperty(diary.tag)) {
          moodCount[diary.tag]++;
        }
      });

      // 组装饼图数据
      this.pieChartData = {
        series: Object.entries(moodCount).filter(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            mood = _ref2[0],
            count = _ref2[1];
          return count > 0;
        }).map(function (_ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
            mood = _ref4[0],
            count = _ref4[1];
          return {
            name: mood,
            data: count,
            color: _this.moodColorMap[mood]
          };
        })
      };

      // ---------------------- 柱形图：一周每日心情 ----------------------
      // 获取近7天日期（格式：MM-DD）
      var last7Days = this.getLast7Days();

      // 初始化每日心情数据
      var dailyMoodData = last7Days.reduce(function (obj, day) {
        obj[day] = Object.keys(_this.moodColorMap).reduce(function (moodObj, mood) {
          moodObj[mood] = 0;
          return moodObj;
        }, {});
        return obj;
      }, {});

      // 统计每日心情
      diaryList.forEach(function (diary) {
        if (diary !== null && diary !== void 0 && diary.date) {
          var diaryDate = _this.formatDateToMd(diary.date);
          if (last7Days.includes(diaryDate) && dailyMoodData[diaryDate].hasOwnProperty(diary.tag)) {
            dailyMoodData[diaryDate][diary.tag]++;
          }
        }
      });

      // 组装柱形图数据
      this.barChartData = {
        categories: last7Days,
        // X轴：近7天日期
        series: Object.entries(this.moodColorMap).map(function (_ref5) {
          var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
            mood = _ref6[0],
            color = _ref6[1];
          return {
            name: mood,
            data: last7Days.map(function (day) {
              return dailyMoodData[day][mood];
            }),
            color: color
          };
        }).filter(function (series) {
          return series.data.some(function (num) {
            return num > 0;
          });
        }) // 过滤无数据的心情类型
      };
    },
    // 3. 初始化课表式心情（模拟数据+真实日记数据结合）
    initScheduleMoods: function initScheduleMoods() {
      var _this2 = this;
      var diaryList = (0, _storage.getStorage)('DIARY') || [];
      var moodTypes = Object.keys(this.moodColorMap);

      // 初始化7天×3时段的空数据
      this.scheduleMoods = Array(7).fill().map(function () {
        return Array(3).fill('');
      });

      // 用真实日记数据填充
      diaryList.forEach(function (diary) {
        if (diary !== null && diary !== void 0 && diary.date && diary !== null && diary !== void 0 && diary.tag) {
          var date = new Date(diary.date);
          if (!isNaN(date.getTime())) {
            // 验证日期有效性
            var dayOfWeek = date.getDay() || 7; // 周日转为7（对应数组索引6）
            var dayIdx = dayOfWeek - 1; // 转换为0-6的索引（周一0，周日6）
            if (dayIdx >= 0 && dayIdx < 7) {
              // 随机分配到早/中/晚某个时段
              var slotIdx = Math.floor(Math.random() * 3);
              _this2.scheduleMoods[dayIdx][slotIdx] = diary.tag;
            }
          }
        }
      });

      // 填充模拟数据（仅对空值填充）
      this.scheduleMoods = this.scheduleMoods.map(function (day) {
        return day.map(function (slot) {
          return slot || moodTypes[Math.floor(Math.random() * moodTypes.length)];
        });
      });
    },
    // 获取心情对应的颜色（用于课表）
    getMoodColor: function getMoodColor(mood) {
      return this.moodColorMap[mood] || '#F5F5F5'; // 默认灰色
    },
    // 获取近7天日期（MM-DD格式）
    getLast7Days: function getLast7Days() {
      var _this3 = this;
      return Array(7).fill().map(function (_, i) {
        var date = new Date();
        date.setDate(date.getDate() - 6 + i);
        return _this3.formatDateToMd(date);
      });
    },
    // 格式化日期为MM-DD格式
    formatDateToMd: function formatDateToMd(date) {
      if (typeof date === 'string') {
        // 处理字符串日期（如：2024/12/31）
        var _date$split$map = date.split('/').map(Number),
          _date$split$map2 = (0, _slicedToArray2.default)(_date$split$map, 3),
          year = _date$split$map2[0],
          month = _date$split$map2[1],
          day = _date$split$map2[2];
        return "".concat(month, "-").concat(day);
      } else if (date instanceof Date) {
        // 处理Date对象
        return "".concat(date.getMonth() + 1, "-").concat(date.getDate());
      }
      return '';
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 75:
/*!************************************************************************************************************************!*\
  !*** C:/Users/86198/Desktop/light-note/pages/stats/stats.vue?vue&type=style&index=0&id=162bebc6&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./stats.vue?vue&type=style&index=0&id=162bebc6&scoped=true&lang=css& */ 76);
/* harmony import */ var _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_LeStoreDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_stats_vue_vue_type_style_index_0_id_162bebc6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86198/Desktop/light-note/pages/stats/stats.vue?vue&type=style&index=0&id=162bebc6&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[69,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/stats/stats.js.map