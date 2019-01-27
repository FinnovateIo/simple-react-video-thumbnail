(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './VideoPlayer'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./VideoPlayer'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.VideoPlayer);
    global.index = mod.exports;
  }
})(this, function (exports, _VideoPlayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _VideoPlayer2.default;
});