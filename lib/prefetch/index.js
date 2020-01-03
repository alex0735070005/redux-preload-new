'use strict';

exports.__esModule = true;
exports.serverPreload = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = prefetchWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getDisplayName = require('../libs/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _PrefetchException = require('./PrefetchException');

var _PrefetchException2 = _interopRequireDefault(_PrefetchException);

var _serverPrefetch = require('./serverPrefetch');

var _serverPrefetch2 = _interopRequireDefault(_serverPrefetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactComponent = _react.PureComponent || _react.Component;
/**
 * Makes decorator for wrapping component into Prefetch component
 *
 * @param  {Array} prefetchActions — returns actions creators by specified paths
 * @return {Function} — decorator for wrapping component into Prefetch
 */
function prefetchWrapper(prefetchActions) {
  var actions = typeof prefetchActions === 'function' ? [prefetchActions] : prefetchActions;
  return function (Wrapped) {
    var _class, _temp;

    return _temp = _class = function (_ReactComponent) {
      (0, _inherits3.default)(PrefetchWrapper, _ReactComponent);

      function PrefetchWrapper() {
        (0, _classCallCheck3.default)(this, PrefetchWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _ReactComponent.apply(this, arguments));
      }

      /**
       * Dispatch prefetch actions
       *
       * @return {Array.<Object>} — list of dispatched actions
       */
      PrefetchWrapper.prototype.dispatchPrefetchActions = function dispatchPrefetchActions() {
        var _this2 = this;

        var dispatch = this.context.store.dispatch;


        return actions.map(function (action) {
          return action(_this2.props);
        }).map(function (action) {
          return dispatch(action);
        });
      };

      PrefetchWrapper.prototype.componentWillMount = function componentWillMount() {
        var prefetchCursor = this.context.prefetchCursor;

        // Is server side prefetch render

        if (prefetchCursor) {
          // Count prefetch Wrappers
          prefetchCursor.current += 1;
          // Was this wrapper previously prefetched
          if (prefetchCursor.current > prefetchCursor.last) {
            // Remember that we have prefetched this wrapper
            prefetchCursor.last += 1;

            // Tell prefetcher to wait for all dispatched actions
            // then run again with prefetched data
            throw new _PrefetchException2.default(this.dispatchPrefetchActions());
          }
        }
      };

      PrefetchWrapper.prototype.componentDidMount = function componentDidMount() {
        this.dispatchPrefetchActions();
      };

      PrefetchWrapper.prototype.render = function render() {
        return _react2.default.createElement(Wrapped, this.props);
      };

      return PrefetchWrapper;
    }(ReactComponent), _class.displayName = 'Prefetch(' + (0, _getDisplayName2.default)(Wrapped) + ')', _class.contextTypes = {
      store: _propTypes2.default.object.isRequired,
      prefetchCursor: _propTypes2.default.object
    }, _class.propTypes = {
      location: _propTypes2.default.object,
      params: _propTypes2.default.object
    }, _temp;
  };
}

var serverPreload = exports.serverPreload = _serverPrefetch2.default;