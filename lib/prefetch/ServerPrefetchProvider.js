'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerPrefetchProvider = function (_Component) {
  (0, _inherits3.default)(ServerPrefetchProvider, _Component);

  function ServerPrefetchProvider() {
    (0, _classCallCheck3.default)(this, ServerPrefetchProvider);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ServerPrefetchProvider.prototype.getChildContext = function getChildContext() {
    return {
      prefetchCursor: this.props.prefetchCursor
    };
  };

  ServerPrefetchProvider.prototype.render = function render() {
    return this.props.children;
  };

  return ServerPrefetchProvider;
}(_react.Component);

ServerPrefetchProvider.childContextTypes = {
  prefetchCursor: _propTypes2.default.object
};
ServerPrefetchProvider.propTypes = {
  children: _propTypes2.default.object,
  prefetchCursor: _propTypes2.default.object
};
ServerPrefetchProvider.defaultProps = {
  children: null,
  prefetchCursor: null
};
exports.default = ServerPrefetchProvider;
module.exports = exports['default'];