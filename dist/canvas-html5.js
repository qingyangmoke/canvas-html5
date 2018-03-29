/*!
 *  canvas-html5
 * Description: canvas-html5
 * Author: 清扬陌客
 * Version: v0.0.3
 * Github: https://github.com/qingyangmoke/canvas-html5.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["canvasHtml5"] = factory();
	else
		root["canvasHtml5"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/song/Develop/github/canvas-html5/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hello = exports.version = exports.clock = exports.text = exports.paint = exports.extract = exports.pattern = exports.shadow = undefined;

	var _text = __webpack_require__(5);

	var _text2 = _interopRequireDefault(_text);

	var _clock = __webpack_require__(6);

	var _clock2 = _interopRequireDefault(_clock);

	var _paint = __webpack_require__(7);

	var _paint2 = _interopRequireDefault(_paint);

	var _pattern = __webpack_require__(10);

	var _pattern2 = _interopRequireDefault(_pattern);

	var _shadow = __webpack_require__(11);

	var _shadow2 = _interopRequireDefault(_shadow);

	var _extract = __webpack_require__(9);

	var extract = _interopRequireWildcard(_extract);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = '0.0.3';
	function hello() {
	  console.log('hello world');
	}

	exports.shadow = _shadow2.default;
	exports.pattern = _pattern2.default;
	exports.extract = extract;
	exports.paint = _paint2.default;
	exports.text = _text2.default;
	exports.clock = _clock2.default;
	exports.version = version;
	exports.hello = hello;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var examples = function () {
	  /**
	   *
	   * @param {HTMLCanvasElement} canvas
	   */
	  function examples(canvas) {
	    var _this = this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, examples);

	    var _options$transparent = options.transparent,
	        transparent = _options$transparent === undefined ? false : _options$transparent,
	        _options$imageSmoothi = options.imageSmoothingEnabled,
	        imageSmoothingEnabled = _options$imageSmoothi === undefined ? false : _options$imageSmoothi;

	    this.canvas = canvas;
	    this.context = canvas.getContext('2d', { alpha: transparent });
	    this.contextSmoothProperty = 'imageSmoothingEnabled';
	    if (!this.context.imageSmoothingEnabled) {
	      ['webkit', 'moz', 'o', 'ms'].forEach(function (e) {
	        var prefixSmoothProperty = e + 'ImageSmoothingEnabled';
	        if (prefixSmoothProperty in _this.context) {
	          _this.contextSmoothProperty = prefixSmoothProperty;
	        }
	      });
	    }
	    if (imageSmoothingEnabled) {
	      this.context[this.contextSmoothProperty] = true;
	    }
	    this.centerX = this.canvas.width / 2;
	    this.centerY = this.canvas.height / 2;
	    this.init();
	  }

	  _createClass(examples, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'drawDashedLine',
	    value: function drawDashedLine(x1, y1, x2, y2) {
	      var strokeStyle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#000';
	      var dashLength = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;

	      this.context.beginPath();
	      this.context.strokeStyle = strokeStyle;
	      var deltaX = x2 - x1;
	      var deltaY = y2 - y1;
	      var numDashes = Math.floor(Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) / dashLength);
	      for (var i = 0; i < numDashes; ++i) {
	        this.context[i % 2 === 0 ? 'moveTo' : 'lineTo'](x1 + deltaX / numDashes * i, y1 + deltaY / numDashes * i);
	      }
	      this.context.closePath();
	      this.context.stroke();
	    }

	    /**
	     *
	     * @param {number} x - x 坐标
	     * @param {number} y - y 坐标
	     * @param {number} w - 宽度
	     * @param {number} h - 高度
	     * @param {number} r - 圆角半径
	     */

	  }, {
	    key: 'roundRect',
	    value: function roundRect(x, y, w, h, r) {
	      r = Math.min(r, Math.min(w, h) / 2);
	      this.context.beginPath();
	      this.context.moveTo(x + r, y);
	      this.context.arcTo(x + w, y, x + w, y + h, r);
	      this.context.arcTo(x + w, y + h, x, y + h, r);
	      this.context.arcTo(x, y + h, x, y, r);
	      this.context.arcTo(x, y, x + w, y, r);
	      this.context.closePath();
	      return this;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.context.fillStyle = '#ffffff';
	      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this.draw();
	    }
	  }]);

	  return examples;
	}();

	exports.default = examples;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _example = __webpack_require__(3);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var text = function (_examples) {
	  _inherits(text, _examples);

	  function text() {
	    _classCallCheck(this, text);

	    return _possibleConstructorReturn(this, (text.__proto__ || Object.getPrototypeOf(text)).apply(this, arguments));
	  }

	  _createClass(text, [{
	    key: 'triangle',
	    value: function triangle(v1, v2, v3, context, wireframe) {
	      context.beginPath();
	      context.moveTo(v1[0], v1[1]);
	      context.lineTo(v2[0], v2[1]);
	      context.lineTo(v3[0], v3[1]);
	      context.lineTo(v1[0], v1[1]);
	      context.closePath();
	      context.fillStyle = '#333';
	      context.fill();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      _get(text.prototype.__proto__ || Object.getPrototypeOf(text.prototype), 'draw', this).call(this);
	      this.context.font = '38px Arial';
	      this.context.fillStyle = 'blue';
	      this.context.strokeStyle = 'black';
	      this.context.textBaseline = 'top';
	      this.context.textAlign = 'left';
	      this.context.save();
	      // this.context.rect(this.canvas.width / 2 - 150, this.canvas.height / 2 - 15, 60, 38);
	      // this.context.clip();
	      this.context.fillText('hello canvas', this.canvas.width / 2 - 150, this.canvas.height / 2 - 15);
	      this.context.restore();
	      this.context.strokeText('hello canvas', this.canvas.width / 2 - 150, this.canvas.height / 2 + 45);

	      // this.context.fillStyle = '#333';

	      // // this.context.beginPath();
	      // // this.context.moveTo(100, 100);
	      // // this.context.lineTo(200, 50);
	      // // this.context.lineTo(150, 200);
	      // // this.context.lineTo(100, 100);
	      // // this.context.fill();

	      // // this.context.beginPath();
	      // // this.context.moveTo(200, 50);
	      // // this.context.lineTo(150, 200);
	      // // this.context.lineTo(300, 100);
	      // // this.context.lineTo(200, 50);
	      // // this.context.fill();

	      // this.drawDashedLine(200, 50, 150, 200, '#ff0000', 5);
	      // this.drawDashedLine(150, 200, 300, 100, '#ff0000', 5);
	      // this.drawDashedLine(300, 100, 200, 50, '#ff0000', 5);

	      // // vertices
	      // // var v1 = [40, 20];
	      // // var v2 = [125, 35];
	      // // var v3 = [165, 105];
	      // // var v4 = [35, 95];
	      // // this.triangle(v1, v2, v3, this.context, true);
	      // // this.triangle(v3, v4, v1, this.context, true);
	    }
	  }]);

	  return text;
	}(_example2.default);

	exports.default = text;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _example = __webpack_require__(3);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var clock = function (_examples) {
	  _inherits(clock, _examples);

	  function clock() {
	    _classCallCheck(this, clock);

	    return _possibleConstructorReturn(this, (clock.__proto__ || Object.getPrototypeOf(clock)).apply(this, arguments));
	  }

	  _createClass(clock, [{
	    key: 'init',
	    value: function init() {
	      this.RADIUS = 50;
	      this.FONT_HEIGHT = 16;
	      this.centerX = this.canvas.width / 2;
	      this.centerY = this.canvas.height / 2;
	    }
	  }, {
	    key: 'drawCenter',
	    value: function drawCenter() {
	      this.context.fillStyle = 'red';
	      this.context.beginPath();
	      this.context.arc(this.centerX, this.centerY, 4, 0, Math.PI * 2, true);
	      this.context.fill();
	    }
	  }, {
	    key: 'drawCircle',
	    value: function drawCircle() {
	      this.context.beginPath();
	      this.context.arc(this.centerX, this.centerY, this.RADIUS, 0, Math.PI * 2, true);
	      this.context.stroke();
	    }
	  }, {
	    key: 'drawNumberals',
	    value: function drawNumberals() {
	      var _this2 = this;

	      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	      this.context.save();
	      numbers.forEach(function (num) {
	        var angle = Math.PI / 6 * (num - 3);
	        var numWidth = _this2.context.measureText(num.toString()).width;
	        var x1 = _this2.centerX + Math.cos(angle) * _this2.RADIUS;
	        var y1 = _this2.centerY + Math.sin(angle) * _this2.RADIUS;
	        // 半径向外扩展10像素 画数字
	        var x = _this2.centerX + Math.cos(angle) * (_this2.RADIUS + 10);
	        var y = _this2.centerY + Math.sin(angle) * (_this2.RADIUS + 10);
	        _this2.context.fillStyle = '#000';
	        _this2.context.beginPath();
	        _this2.context.arc(x1, y1, num % 3 === 0 ? 2 : 1, 0, Math.PI * 2, true);
	        _this2.context.fill();
	        _this2.context.fillStyle = 'blue';
	        // 垂直+横向 居中
	        _this2.context.textBaseline = 'middle';
	        _this2.context.textAlign = 'center';
	        _this2.context.fillText(num.toString(), x, y);
	      });
	      this.context.restore();
	    }
	  }, {
	    key: 'drawHour',
	    value: function drawHour() {
	      var date = new Date();
	      var minutes = date.getMinutes();
	      var hour = date.getHours() % 12;
	      var angle = Math.PI / 6 * (hour - 3) + Math.PI / 6 * minutes / 60;
	      var x = this.centerX + Math.cos(angle) * this.RADIUS / 2;
	      var y = this.centerY + Math.sin(angle) * this.RADIUS / 2;
	      this.context.save();
	      this.context.strokeStyle = 'blcak';
	      this.context.lineWidth = 2;
	      this.context.beginPath();
	      this.context.moveTo(this.centerX, this.centerY);
	      this.context.lineTo(x, y);
	      console.log(this.centerX, this.centerY, x, y, angle);
	      this.context.stroke();
	      this.context.restore();
	    }
	  }, {
	    key: 'drawMinute',
	    value: function drawMinute() {
	      var date = new Date();
	      var minutes = date.getMinutes();
	      var angle = Math.PI * (minutes - 15) / 60 * 2;
	      var x = this.centerX + Math.cos(angle) * this.RADIUS * 2 / 3;
	      var y = this.centerY + Math.sin(angle) * this.RADIUS * 2 / 3;
	      this.context.save();
	      this.context.strokeStyle = 'black';
	      this.context.lineWidth = 2;
	      this.context.beginPath();
	      this.context.moveTo(this.centerX, this.centerY);
	      this.context.lineTo(x, y);
	      console.log(this.centerX, this.centerY, x, y, angle);
	      this.context.stroke();
	      this.context.restore();
	    }
	  }, {
	    key: 'drawSecond',
	    value: function drawSecond() {
	      var date = new Date();
	      var seconds = date.getSeconds();
	      var angle = Math.PI * (seconds - 15) / 60 * 2;
	      var x = this.centerX + Math.cos(angle) * this.RADIUS * 4 / 5;
	      var y = this.centerY + Math.sin(angle) * this.RADIUS * 4 / 5;
	      this.context.save();
	      this.context.strokeStyle = 'red';
	      this.context.lineWidth = 2;
	      this.context.beginPath();
	      this.context.moveTo(this.centerX, this.centerY);
	      this.context.lineTo(x, y);
	      console.log(this.centerX, this.centerY, x, y, angle);
	      this.context.stroke();
	      this.context.restore();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      _get(clock.prototype.__proto__ || Object.getPrototypeOf(clock.prototype), 'draw', this).call(this);
	      this.context.font = this.FONT_HEIGHT + 'px Arial';
	      this.drawCircle();
	      this.drawNumberals();
	      this.drawHour();
	      this.drawMinute();
	      this.drawSecond();
	      this.drawCenter();
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      var _this3 = this;

	      setInterval(function () {
	        _this3.draw();
	      }, 500);
	    }
	  }]);

	  return clock;
	}(_example2.default);

	exports.default = clock;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _example = __webpack_require__(3);

	var _example2 = _interopRequireDefault(_example);

	var _windowToCanvas3 = __webpack_require__(8);

	var _windowToCanvas4 = _interopRequireDefault(_windowToCanvas3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var paint = function (_examples) {
	  _inherits(paint, _examples);

	  function paint() {
	    _classCallCheck(this, paint);

	    return _possibleConstructorReturn(this, (paint.__proto__ || Object.getPrototypeOf(paint)).apply(this, arguments));
	  }

	  _createClass(paint, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;

	      this.centerX = this.canvas.width / 2;
	      this.centerY = this.canvas.height / 2;
	      this.lastX = 0;
	      this.lastY = 0;
	      this.mousedown = false;
	      this.canvas.addEventListener('mousedown', function (_ref) {
	        var clientX = _ref.clientX,
	            clientY = _ref.clientY;

	        var _windowToCanvas = (0, _windowToCanvas4.default)(_this2.canvas, clientX, clientY),
	            x = _windowToCanvas.x,
	            y = _windowToCanvas.y;

	        _this2.lastX = x;
	        _this2.lastY = y;
	        _this2.mousedown = true;
	      });
	      this.canvas.addEventListener('mousemove', function (_ref2) {
	        var clientX = _ref2.clientX,
	            clientY = _ref2.clientY;

	        if (!_this2.mousedown) return;

	        var _windowToCanvas2 = (0, _windowToCanvas4.default)(_this2.canvas, clientX, clientY),
	            x = _windowToCanvas2.x,
	            y = _windowToCanvas2.y;

	        _this2.context.beginPath();
	        _this2.context.moveTo(_this2.lastX, _this2.lastY);
	        _this2.context.lineTo(x, y);
	        _this2.lastX = x;
	        _this2.lastY = y;
	        _this2.context.stroke();
	      });
	      this.canvas.addEventListener('mouseup', function (e) {
	        _this2.mousedown = false;
	      });
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      _get(paint.prototype.__proto__ || Object.getPrototypeOf(paint.prototype), 'draw', this).call(this);
	    }
	  }]);

	  return paint;
	}(_example2.default);

	exports.default = paint;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * window 坐标转换成 canvas内坐标
	 * @param {HTMLCanvasElement} canvas
	 * @param {*} x
	 * @param {*} y
	 */
	function windowToCanvas(canvas, x, y) {
	  var rect = canvas.getBoundingClientRect();
	  return {
	    x: (x - rect.left) * (canvas.width / rect.width),
	    y: (y - rect.top) * (canvas.height / rect.height)
	  };
	}

	exports.default = windowToCanvas;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toImage = toImage;
	exports.toBase64 = toBase64;
	/**
	 * canvas 导出成image对象
	 * @param {HTMLCanvasElement} canvas
	 * @param {String} type - 图片类型 png,jpg,jpeg
	 */
	function toImage(canvas) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'png';

	  var img = new Image();
	  img.src = toBase64(canvas, type);
	  return img;
	}

	/**
	 * canvas 导出成base64对象
	 * @param {HTMLCanvasElement} canvas
	 * @param {String} type - 图片类型 png,jpg,jpeg
	 */
	function toBase64(canvas) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'png';

	  return canvas.toDataURL('image/' + type);
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _example = __webpack_require__(3);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var pattern = function (_examples) {
	  _inherits(pattern, _examples);

	  function pattern() {
	    _classCallCheck(this, pattern);

	    return _possibleConstructorReturn(this, (pattern.__proto__ || Object.getPrototypeOf(pattern)).apply(this, arguments));
	  }

	  _createClass(pattern, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;

	      var img = new Image();
	      img.onload = function () {
	        _this2.texture = img;
	        _this2.draw();
	      };
	      img.src = './assets/box.jpeg';
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;

	      _get(pattern.prototype.__proto__ || Object.getPrototypeOf(pattern.prototype), 'draw', this).call(this);
	      if (this.texture) {
	        // repeat repeat-x repeat-y no-repeat
	        this.context.save();
	        this.roundRect(10, 10, 100, 100, 30);
	        this.context.clip();
	        this.context.scale(scale, scale);
	        var texturePattern = this.context.createPattern(this.texture, 'repeat');
	        this.context.fillStyle = texturePattern;
	        this.context.fillRect(0, 0, Math.round(this.canvas.width / scale), Math.round(this.canvas.height / scale));
	        this.context.restore();
	      }
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      var _this3 = this;

	      var scale = 0.1;
	      var yoyo = false;
	      var timer = setInterval(function () {
	        _this3.draw(scale);
	        if (!yoyo && scale >= 2) {
	          yoyo = true;
	          scale = 2;
	        } else if (yoyo && scale <= 0) {
	          yoyo = false;
	          scale = 0;
	        }
	        scale += yoyo ? -0.01 : 0.01;
	      }, 1000 / 60);
	    }
	  }]);

	  return pattern;
	}(_example2.default);

	exports.default = pattern;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _example = __webpack_require__(3);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var shadow = function (_examples) {
	  _inherits(shadow, _examples);

	  function shadow() {
	    _classCallCheck(this, shadow);

	    return _possibleConstructorReturn(this, (shadow.__proto__ || Object.getPrototypeOf(shadow)).apply(this, arguments));
	  }

	  _createClass(shadow, [{
	    key: 'draw',
	    value: function draw() {
	      _get(shadow.prototype.__proto__ || Object.getPrototypeOf(shadow.prototype), 'draw', this).call(this);
	      this.context.save();
	      this.context.fillStyle = '#0000ff';
	      this.context.shadowColor = 'rgba(0,0,0,0.7)';
	      this.context.shadowOffsetX = 8;
	      this.context.shadowOffsetY = 8;
	      this.context.shadowBlur = 16;
	      this.context.fillRect(this.centerX, this.centerY, 100, 50);
	      this.context.restore();
	    }
	  }]);

	  return shadow;
	}(_example2.default);

	exports.default = shadow;

/***/ })
/******/ ])
});
;