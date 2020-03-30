(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "7Y1S":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"Ucan\"}}}}");

/***/ }),

/***/ "KByP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4aJ6");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("t91x");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es6.reflect.construct.js
var es6_reflect_construct = __webpack_require__("LXYL");

// EXTERNAL MODULE: ./public/static/d/3928705230.json
var _3928705230 = __webpack_require__("7Y1S");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ../node_modules/ptz-i18n/dist/index.js
var dist = __webpack_require__("wc+d");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/index.js + 9 modules
var es = __webpack_require__("CE6G");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/Seo.tsx
var Seo = __webpack_require__("MlAH");

// EXTERNAL MODULE: ../@antv/gatsby-theme-antv/site/components/PageLoading.tsx + 2 modules
var PageLoading = __webpack_require__("NYms");

// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/components/RedirectIndex.tsx




function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }









var RedirectIndex_RedirectIndex = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(RedirectIndex, _React$PureComponent);

  var _super = _createSuper(RedirectIndex);

  function RedirectIndex(args) {
    var _this;

    _this = _React$PureComponent.call(this, args) || this; // Skip build, Browsers only

    _this.langKey = '';

    _this.renderIndex = function (data) {
      var t = _this.props.t;
      var _data$site$siteMetada = data.site.siteMetadata.title,
          title = _data$site$siteMetada === void 0 ? '' : _data$site$siteMetada;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Seo["a" /* default */], {
        title: title || 'Ucan',
        titleSuffix: 'Staff Transport ',
        description: 'Staff Transport ',
        lang: _this.langKey
      }), react_default.a.createElement(PageLoading["a" /* default */], null));
    };

    if (typeof window !== 'undefined') {
      var langKey = Object(dist["getUserLangKey"])(['zh', 'en'], 'zh');
      _this.langKey = langKey; // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961

      Object(gatsby_browser_entry["navigate"])(langKey);
    }

    return _this;
  }

  var _proto = RedirectIndex.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(gatsby_browser_entry["StaticQuery"], {
      query: "3928705230",
      render: this.renderIndex,
      data: _3928705230
    });
  };

  return RedirectIndex;
}(react_default.a.PureComponent);

/* harmony default export */ var components_RedirectIndex = (Object(es["c" /* withTranslation */])()(RedirectIndex_RedirectIndex));
// CONCATENATED MODULE: ../@antv/gatsby-theme-antv/site/pages/index.tsx



var pages_Page = function Page() {
  return react_default.a.createElement(components_RedirectIndex, null);
};

pages_Page.noLayout = true;
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Page);

/***/ })

}]);
//# sourceMappingURL=component---antv-gatsby-theme-antv-site-pages-index-tsx-be31e3d9572efb046daa.js.map