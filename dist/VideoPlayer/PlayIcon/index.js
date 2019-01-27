(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './PlayIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./PlayIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PlayIcon);
    global.index = mod.exports;
  }
})(this, function (exports, _PlayIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _PlayIcon2 = _interopRequireDefault(_PlayIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _PlayIcon2.default;
});