(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './PlayIcon', 'react-video-thumbnail', './styles/videoPlayer.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./PlayIcon'), require('react-video-thumbnail'), require('./styles/videoPlayer.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.PlayIcon, global.reactVideoThumbnail, global.videoPlayer);
    global.VideoPlayer = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _PlayIcon, _reactVideoThumbnail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _PlayIcon2 = _interopRequireDefault(_PlayIcon);

  var _reactVideoThumbnail2 = _interopRequireDefault(_reactVideoThumbnail);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var VideoPlayer = function (_Component) {
    _inherits(VideoPlayer, _Component);

    function VideoPlayer(props) {
      _classCallCheck(this, VideoPlayer);

      var _this = _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this, props));

      _this.state = {
        showThumb: false
      };
      _this.videoRef = {};
      return _this;
    }

    _createClass(VideoPlayer, [{
      key: 'thumbLoaded',
      value: function thumbLoaded() {
        this.setState({ showThumb: true });
      }
    }, {
      key: 'videoPlay',
      value: function videoPlay(e) {
        e.preventDefault();
        this.setState({ showVideo: true, showThumb: false });
        this.videoRef.play();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: 'video-player' },
          _react2.default.createElement(
            'video',
            { className: 'video-player__video', controls: true, ref: function ref(video) {
                return _this2.videoRef = video;
              }, preload: 'metadata', playsInline: true },
            _react2.default.createElement('source', { src: this.props.videoUrl, type: 'video/mp4' }),
            'your browser does not support the video tag.'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                return _this2.videoPlay(e);
              } },
            _react2.default.createElement(
              'div',
              { className: 'video-player__thumbnail-container', style: { display: this.state.showThumb ? 'block' : 'none' } },
              _react2.default.createElement(
                'div',
                { className: 'video-player__thumbnail-container__thumbnail', onLoad: function onLoad(e) {
                    return _this2.thumbLoaded(e);
                  } },
                _react2.default.createElement(_reactVideoThumbnail2.default, { videoUrl: this.props.videoUrl, snapshotAtTime: this.props.snapshotAt }),
                _react2.default.createElement(
                  'div',
                  { className: 'video-player__icon-container' },
                  _react2.default.createElement(_PlayIcon2.default, { className: 'video-player__icon-container__play-icon' })
                )
              )
            )
          )
        );
      }
    }]);

    return VideoPlayer;
  }(_react.Component);

  exports.default = VideoPlayer;


  VideoPlayer.propTypes = {
    videoUrl: _propTypes2.default.string,
    snapshotAt: _propTypes2.default.number
  };
});