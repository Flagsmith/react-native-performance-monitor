webpackHotUpdate(1,{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fusioncharts_fusioncharts_overlappedcolumn2d__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fusioncharts/fusioncharts.overlappedcolumn2d */ "./node_modules/fusioncharts/fusioncharts.overlappedcolumn2d.js");
/* harmony import */ var fusioncharts_fusioncharts_overlappedcolumn2d__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_overlappedcolumn2d__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_fusioncharts_lib_ReactFC__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-fusioncharts/lib/ReactFC */ "./node_modules/react-fusioncharts/lib/ReactFC.js");
/* harmony import */ var react_fusioncharts_lib_ReactFC__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_fusioncharts_lib_ReactFC__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _parse_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parse-input */ "./components/parse-input.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Row */ "./components/Row.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;










document.addEventListener('click', function (e) {
  if (document.activeElement.toString() == '[object HTMLButtonElement]') {
    document.activeElement.blur();
  }
});
react_fusioncharts_lib_ReactFC__WEBPACK_IMPORTED_MODULE_13___default.a.fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_9___default.a, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10___default.a, fusioncharts_fusioncharts_overlappedcolumn2d__WEBPACK_IMPORTED_MODULE_11___default.a, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_12___default.a);
var colors = ['#5d62b5', '#29c3be', '#f2726f', '#4fb54f', '#c3bf39', '#f26394', '#5d62b5', '#29c3be', '#f2726f', '#4fb54f', '#c3bf39', '#f26394', '#5d62b5', '#29c3be', '#f2726f', '#4fb54f', '#c3bf39', '#f26394', '#5d62b5', '#29c3be', '#f2726f', '#4fb54f', '#c3bf39', '#f26394'];
var exampleState = {
  'dataSource': {
    'chart': {
      'caption': 'React Native Render Times',
      'subcaption': 'Performance experiments',
      'yaxisname': 'Render time (ms)',
      'drawcrossline': '1',
      'theme': 'fusion',
      'showvalues': '0',
      'palettecolors': '5d62b5,29c3be,f2726f,4fb54f,c3bf39,f26394,5d62b5,29c3be,f2726f,4fb54f,c3bf39,f26394,5d62b5,29c3be,f2726f,4fb54f,c3bf39,f26394,5d62b5,29c3be,f2726f,4fb54f,c3bf39,f26394'
    },
    'categories': [{
      'category': [{
        'label': 'Test1'
      }, {
        'label': 'Test2'
      }, {
        'label': 'Test3'
      }]
    }],
    'dataset': [{
      'seriesname': 'Baseline test',
      'data': [{
        'value': 5
      }, {
        'value': 5
      }, {
        'value': 5
      }]
    }, {
      'seriesname': 'Variant 2',
      'data': [{
        'value': 5
      }, {
        'value': 5
      }, {
        'value': 5
      }]
    }],
    'trendlines': [{
      'line': [{
        'color': '#5d62b5',
        'thickness': '4',
        'startValue': 5,
        'alpha': '50'
      }]
    }, {
      'line': [{
        'color': '#29c3be',
        'thickness': '4',
        'startValue': 5,
        'alpha': '50'
      }]
    }, {
      'line': [{
        'color': '#ff0000',
        'thickness': '2',
        'startValue': 16.67,
        'alpha': '100'
      }]
    }]
  },
  'type': 'overlappedcolumn2d',
  'paused': true
};

var toCSV = function toCSV(state) {
  var datas = exampleState.dataSource.dataset;
  var maxNum = 0;
  var maxIndex = -1;

  lodash__WEBPACK_IMPORTED_MODULE_14___default.a.each(datas, function (d, i) {
    if (d.data.length > maxNum) {
      maxNum = d.data.length;
      maxIndex = i;
    }
  });

  var arr = [];

  lodash__WEBPACK_IMPORTED_MODULE_14___default.a.each(datas[maxIndex].data, function (v, i) {
    // row
    var obj = {};

    lodash__WEBPACK_IMPORTED_MODULE_14___default.a.each(datas, function (data) {
      // column
      debugger;
      obj[data.seriesname] = data.data[i];
    });

    arr.push(obj);
  });

  console.log(arr);
};

toCSV(exampleState);
var defaultState = {
  dataSource: {
    chart: {
      caption: 'React Native Render Times',
      subcaption: 'Performance experiments',
      yaxisname: 'Render time (ms)',
      drawcrossline: '1',
      theme: 'fusion',
      showvalues: '0',
      'palettecolors': colors.map(function (c) {
        return c.replace('#', '');
      }).join(',')
    },
    categories: [{
      category: []
    }],
    dataset: [{
      seriesname: 'Baseline test',
      data: []
    }]
  }
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sendRemount", function () {
      _this.socket.send('remount');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sendForceUpdate", function () {
      _this.socket.send('forceUpdate');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addItem", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random();

      if (!_this.state.dataSource.dataset.length) {
        _this.addSeries();
      }

      if (_this.state.dataSource.categories[0].category.length === _this.state.dataSource.dataset[_this.state.dataSource.dataset.length - 1].data.length) {
        _this.addCategory();
      }

      _this.state.dataSource.dataset[_this.state.dataSource.dataset.length - 1].data.push({
        value: value
      });

      var averages = [];

      lodash__WEBPACK_IMPORTED_MODULE_14___default.a.each(_this.state.dataSource.dataset, function (dataSet) {
        var total = 0;

        lodash__WEBPACK_IMPORTED_MODULE_14___default.a.each(dataSet.data, function (item) {
          total += item.value;
        });

        averages.push(total / dataSet.data.length);
      });

      _this.state.dataSource.trendlines = averages.map(function (v, i) {
        return {
          'line': [{
            'color': colors[i],
            'thickness': '4',
            startValue: v,
            'alpha': '50'
          }]
        };
      }).concat([{
        line: [{
          'color': '#ff0000',
          'thickness': '2',
          startValue: 16.67,
          'alpha': '100'
        }]
      }]);

      _this.forceUpdate();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addCategory", function () {
      _this.state.dataSource.categories[0].category.push({
        label: "Test".concat(_this.state.dataSource.categories[0].category.length + 1)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addSeries", function () {
      _this.state.dataSource.dataset.push({
        seriesname: "Variant ".concat(_this.state.dataSource.dataset.length + 1),
        data: []
      });

      _this.forceUpdate();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setVariantName", function (i, e) {
      _this.state.dataSource.dataset[i].seriesname = Object(_parse_input__WEBPACK_IMPORTED_MODULE_15__["default"])(e);

      _this.forceUpdate();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeSeries", function (i) {
      _this.state.dataSource.dataset.splice(i, 1);

      _this.forceUpdate();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "clear", function () {
      _this.setState(lodash__WEBPACK_IMPORTED_MODULE_14___default.a.cloneDeep(defaultState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggle", function () {
      return _this.setState({
        hideMenu: !_this.state.hideMenu
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "pauseResume", function () {
      return _this.setState({
        paused: !_this.state.paused
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "repeat", function (cb, times) {
      var rep = function rep(e) {
        var currentTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (currentTimes < times) {
          cb();
          setTimeout(function () {
            rep(null, currentTimes + 1);
          }, 200);
        }
      };

      return rep;
    });

    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lodash__WEBPACK_IMPORTED_MODULE_14___default.a.cloneDeep(defaultState), {
      type: 'overlappedcolumn2d'
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.socket = new WebSocket('ws://localhost:8126');

      this.socket.onopen = function (event) {
        console.log('Connected');
      };

      this.socket.onmessage = function (event) {
        try {
          if (!_this2.state.paused) {
            _this2.addItem(JSON.parse(event.data).value);
          }
        } catch (e) {}
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var datasets = this.state.dataSource.dataset;
      return __jsx("div", {
        className: "container-fluid"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "control-panel".concat(this.state.hideMenu ? ' hidden' : '')
      }, __jsx("div", {
        style: {
          flex: 1
        }
      }, datasets && datasets.map(function (d, i) {
        return __jsx(_Row__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: i,
          className: "experiment-row"
        }, __jsx("input", {
          key: i,
          onChange: function onChange(e) {
            return _this3.setVariantName(i, e);
          },
          type: "text",
          value: d.seriesname
        }), __jsx("button", {
          onClick: function onClick() {
            return _this3.removeSeries(i);
          },
          type: "button",
          className: "btn btn-default"
        }, __jsx("img", {
          width: 20,
          src: "/static/close.svg"
        })));
      }), __jsx("div", {
        className: "text-center mt-2"
      }, __jsx("button", {
        type: "button",
        className: "btn btn-primary mr-2",
        onClick: this.addSeries
      }, "Add Experiment")), __jsx("div", {
        className: "text-center mt-2"
      }, __jsx("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.pauseResume
      }, this.state.paused ? 'Resume' : 'Pause'))), __jsx("div", {
        className: "text-center mt-2 mb-2"
      }, __jsx("button", {
        style: {
          width: 140
        },
        type: "button",
        className: "btn mr-4 btn-primary",
        onClick: this.sendRemount
      }, "Remount"), __jsx("button", {
        style: {
          width: 70
        },
        type: "button",
        className: "btn mr-2 btn-secondary",
        onClick: this.repeat(this.sendRemount, 5)
      }, "x5"), __jsx("button", {
        style: {
          width: 70
        },
        type: "button",
        className: "btn btn-secondary",
        onClick: this.repeat(this.sendRemount, 10)
      }, "x10")), __jsx("div", {
        className: "text-center mt-2 mb-2"
      }, __jsx("button", {
        style: {
          width: 140
        },
        type: "button",
        className: "btn mr-4 btn-primary",
        onClick: this.sendRemount
      }, "Force Update"), __jsx("button", {
        style: {
          width: 70
        },
        type: "button",
        className: "btn mr-2 btn-secondary",
        onClick: this.repeat(this.sendForceUpdate, 5)
      }, "x5"), __jsx("button", {
        style: {
          width: 70
        },
        type: "button",
        className: "btn btn-secondary",
        onClick: this.repeat(this.sendForceUpdate, 10)
      }, "x10")), __jsx("div", {
        className: "text-center mb-2 mt-4"
      }, __jsx("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: this.clear
      }, "Clear Tests"))), __jsx("div", {
        className: "content"
      }, __jsx("div", {
        className: "nav"
      }, __jsx("a", {
        onClick: this.toggle
      }, __jsx("img", {
        height: 34,
        src: "/static/menu.svg"
      }))), __jsx("div", {
        className: "content-inner"
      }, __jsx(react_fusioncharts_lib_ReactFC__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: this.state.type,
        width: "100%",
        height: "85%",
        dataFormat: "json",
        dataSource: this.state.dataSource
      })))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=1.0b6f2e79370d5ff2a489.hot-update.js.map