(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["tm-vuetify/components/tm-switchList/tm-switchList"],{

/***/ 272:
/*!**********************************************************************************************!*\
  !*** E:/tools/eclipse2/workspace/tool/tm-vuetify/components/tm-switchList/tm-switchList.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tm-switchList.vue?vue&type=template&id=7b19bc1b& */ 273);
/* harmony import */ var _tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tm-switchList.vue?vue&type=script&lang=js& */ 275);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "tm-vuetify/components/tm-switchList/tm-switchList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 273:
/*!*****************************************************************************************************************************!*\
  !*** E:/tools/eclipse2/workspace/tool/tm-vuetify/components/tm-switchList/tm-switchList.vue?vue&type=template&id=7b19bc1b& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tm-switchList.vue?vue&type=template&id=7b19bc1b& */ 274);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_template_id_7b19bc1b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 274:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/tools/eclipse2/workspace/tool/tm-vuetify/components/tm-switchList/tm-switchList.vue?vue&type=template&id=7b19bc1b& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    tmBadges: function() {
      return __webpack_require__.e(/*! import() | tm-vuetify/components/tm-badges/tm-badges */ "tm-vuetify/components/tm-badges/tm-badges").then(__webpack_require__.bind(null, /*! @/tm-vuetify/components/tm-badges/tm-badges.vue */ 303))
    },
    tmImages: function() {
      return Promise.all(/*! import() | tm-vuetify/components/tm-images/tm-images */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tm-vuetify/components/tm-images/tm-images")]).then(__webpack_require__.bind(null, /*! @/tm-vuetify/components/tm-images/tm-images.vue */ 310))
    },
    tmIcons: function() {
      return __webpack_require__.e(/*! import() | tm-vuetify/components/tm-icons/tm-icons */ "tm-vuetify/components/tm-icons/tm-icons").then(__webpack_require__.bind(null, /*! @/tm-vuetify/components/tm-icons/tm-icons.vue */ 134))
    }
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (_vm.$scope.data.scopedSlotsCompiler === "augmented") {
    _vm.$setScopedSlotsParams("left", {
      hdata: {
        width: 80,
        height: 80
      }
    })
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 275:
/*!***********************************************************************************************************************!*\
  !*** E:/tools/eclipse2/workspace/tool/tm-vuetify/components/tm-switchList/tm-switchList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tm-switchList.vue?vue&type=script&lang=js& */ 276);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tm_switchList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 276:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/tools/eclipse2/workspace/tool/tm-vuetify/components/tm-switchList/tm-switchList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var tmIcons = function tmIcons() {__webpack_require__.e(/*! require.ensure | tm-vuetify/components/tm-icons/tm-icons */ "tm-vuetify/components/tm-icons/tm-icons").then((function () {return resolve(__webpack_require__(/*! @/tm-vuetify/components/tm-icons/tm-icons.vue */ 134));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tmBadges = function tmBadges() {__webpack_require__.e(/*! require.ensure | tm-vuetify/components/tm-badges/tm-badges */ "tm-vuetify/components/tm-badges/tm-badges").then((function () {return resolve(__webpack_require__(/*! @/tm-vuetify/components/tm-badges/tm-badges.vue */ 303));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tmImages = function tmImages() {Promise.all(/*! require.ensure | tm-vuetify/components/tm-images/tm-images */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tm-vuetify/components/tm-images/tm-images")]).then((function () {return resolve(__webpack_require__(/*! @/tm-vuetify/components/tm-images/tm-images.vue */ 310));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default2 =






































































































{
  name: "tm-switchList",
  components: {
    tmIcons: tmIcons,
    tmBadges: tmBadges, tmImages: tmImages },

  props: {
    width: {
      type: Number,
      default: 0 },

    height: {
      type: Number,
      default: 140 },

    itemWidth: {
      type: Number,
      default: 180 },

    on: {
      type: Boolean,
      default: false },

    color: {
      type: String,
      default: 'primary' },

    bgColor: {
      type: String,
      default: 'white' },

    // 跟随主题色的改变而改变。
    fllowTheme: {
      type: Boolean | String,
      default: true },

    // 是否开启暗黑模式
    black: {
      type: String | Boolean,
      default: null },

    disabled: {
      type: String | Boolean,
      default: false },

    icon: {
      type: String,
      default: '' },

    iconSize: {
      type: Number | String,
      default: 40 },

    rightIcon: {
      type: String,
      default: '' },

    rightLabel: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '标题' },

    label: {
      type: String,
      default: '' },

    dot: {
      type: String | Boolean | Number,
      default: false },

    actions: {
      type: Array,
      default: function _default() {
        return [];
      } } },


  data: function data() {
    return {
      x: 0,
      old_x: 0,
      w: 0,
      h: 0,
      i_w: 0,
      showright: false,
      isopnen: 0,
      timidId: 88656,
      isDrageUp: false,
      is_js_cha_old_x: true,
      cha_old_x: 0,
      last_len: 0, //最后一次的距离差，
      last_dir: 0 //最后一次的方向。原因在于滑动时，可能断点
    };
  },
  watch: {
    on: function on() {
      if (this.on == true) {
        this.$nextTick(function () {
          this.activeOn = 0;
        });
      } else if (this.on == false) {
        this.$nextTick(function () {
          this.activeOn = this.i_w;
        });
      }
    },
    actions: function actions() {
      this.initsWH();
    } },

  computed: {

    vtype: function vtype() {
      if (this.icon[0] == "." ||
      this.icon[0] == "/" ||
      this.icon.substring(0, 4) == 'http' ||
      this.icon.substring(0, 5) == 'https' ||
      this.icon.substring(0, 3) == 'ftp')
      {
        return false;
      }
      return true;
    },
    iconName: function iconName() {
      return this.icon;
    },
    prefx_computed: function prefx_computed() {
      var prefix = this.icon.split('-')[0];
      if (prefix == 'icon') return 'iconfont';
      if (prefix == 'mdi') return 'mdi';

      return prefix;
    },
    dotObj: function dotObj() {
      if (typeof this.dot === 'number' && this.dot) {
        return {
          dot: false,
          label: this.dot,
          icon: '' };

      }
      if (typeof this.dot === 'string' && this.dot) {

        if (this.dot.indexOf('-') > 0) {
          return {
            dot: false,
            label: 0,
            icon: this.dot };

        } else {

          return {
            dot: false,
            label: this.dot,
            icon: '' };

        }

      }
      if (typeof this.dot === 'boolean' && this.dot) {
        return {
          dot: true,
          label: 0,
          icon: '' };

      }
      return {
        dot: null,
        label: 0,
        icon: '' };

    },
    activeOn: {
      get: function get() {
        if (this.disabled) return this.i_w;
        return this.isopnen;
      },
      set: function set(val) {
        this.isopnen = val;

      } },

    black_tmeme: function black_tmeme() {
      if (this.black !== null) return this.black;
      return this.$tm.vx.state().tmVuetify.black;
    },
    color_tmeme: function color_tmeme() {
      if (this.$tm.vx.state().tmVuetify.color !== null && this.$tm.vx.state().tmVuetify.color && this.
      fllowTheme) {
        return this.$tm.vx.state().tmVuetify.color;
      }
      return this.color;
    } },


  mounted: function mounted() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              _this.initsWH();case 1:case "end":return _context.stop();}}}, _callee);}))();
  },
  methods: {
    initsWH: function initsWH() {
      var t = this;
      var iitemw = uni.upx2px(this.itemWidth);
      var total = 0;
      for (var i = 0; i < this.actions.length; i++) {
        if (this.actions[i]['width']) {
          total += uni.upx2px(this.actions[i]['width']);
        } else {
          total += iitemw;
        }
      }

      this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var p;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (

                  this.$Querey(".tm-switchList", this, 30).catch(function (e) {}));case 2:p = _context2.sent;
                this.w = uni.upx2px(this.width) || p[0].width;
                this.i_w = total;
                this.x = this.on ? 0 : this.i_w;
                this.isopnen = this.on ? 0 : this.i_w;
                setTimeout(function () {
                  t.showright = true;
                }, 50);case 8:case "end":return _context2.stop();}}}, _callee2, this);})));

    },
    move_action_start: function move_action_start(e) {
      if (this.activeOn)
      this.isDrageUp = false;
      this.is_js_cha_old_x = true;

    },
    move_action_end: function move_action_end(e) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var t;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _this2.isDrageUp = true;
                t = _this2;_context3.next = 4;return (
                  uni.$tm.sleep(50));case 4:if (!(




                t.last_dir < 0)) {_context3.next = 14;break;}if (!(



                t.activeOn == 0)) {_context3.next = 11;break;}
                t.activeOn = 20;_context3.next = 9;return (
                  uni.$tm.sleep(200));case 9:
                t.activeOn = 0;return _context3.abrupt("return");case 11:


                if (t.last_len > 20) {
                  t.activeOn = t.i_w + 10;
                  t.$nextTick(function () {
                    t.activeOn = 0;
                  });
                } else if (t.last_len <= 20) {
                  t.activeOn = t.x - 10;
                  t.$nextTick(function () {
                    t.activeOn = t.i_w;
                  });
                }
                //右方向
                _context3.next = 19;break;case 14:if (!(t.last_dir > 0)) {_context3.next = 19;break;}
                // console.log('右');
                t.activeOn = t.i_w + 10;_context3.next = 18;return (
                  uni.$tm.sleep(10));case 18:
                t.$nextTick(function () {

                  t.activeOn = t.i_w;
                });case 19:case "end":return _context3.stop();}}}, _callee3);}))();

    },
    actionsClick: function actionsClick(index, item) {
      if (this.disabled) return;
      this.$emit('actionsClick', {
        index: index,
        item: item });

    },
    click: function click(e) {
      this.activeOn = this.i_w;
      if (this.disabled) return;
      this.$emit('click', e);

    },
    onChange: function onChange(e) {
      var t = this;
      var pos_x = e.detail.x;
      this.last_dir = pos_x - this.x; //上一次移动到下一次移动的距离。正为右，负为反方向左。
      if (this.is_js_cha_old_x == true && this.isDrageUp == false) {
        this.cha_old_x = pos_x;
        this.is_js_cha_old_x = false;
        // console.log('按下', pos_x);
      }
      if (this.isDrageUp == true && this.is_js_cha_old_x == false) {
        this.$nextTick(function () {
          this.is_js_cha_old_x = true;
          this.last_len = Math.floor(Math.abs(this.cha_old_x - pos_x)); //从第一次移动到结束时的移动距离。
          // console.log('松开', this.last_len);
        });
      }
      t.x = pos_x;


    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tm-vuetify/components/tm-switchList/tm-switchList.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tm-vuetify/components/tm-switchList/tm-switchList-create-component',
    {
        'tm-vuetify/components/tm-switchList/tm-switchList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(272))
        })
    },
    [['tm-vuetify/components/tm-switchList/tm-switchList-create-component']]
]);
