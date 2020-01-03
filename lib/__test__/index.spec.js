'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _redux = require('redux');

var _jsdom = require('jsdom');

var _reactRedux = require('react-redux');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.document = (0, _jsdom.jsdom)('<!doctype html><html><body></body></html>'); /* eslint-disable react/no-multi-comp */

global.window = document.defaultView;

describe('prefetch', function () {
  var store = void 0;

  var reducer = function reducer() {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];
    return (// eslint-disable-line no-confusing-arrow
      action.type === 'INCREMENT' ? prev + 1 : prev
    );
  }; // eslint-disable-line no-param-reassign

  beforeEach(function () {
    store = (0, _redux.createStore)(reducer);
  });

  describe('on client side', function () {
    describe('prefetch actions defenitions', function () {
      it('should dispatch an actions provided as function', function () {
        var _dec, _class;

        var Container = (_dec = (0, _index2.default)(function (_ref) {
          var action = _ref.action;
          return { type: action };
        }), _dec(_class = function (_Component) {
          (0, _inherits3.default)(Container, _Component);

          function Container() {
            (0, _classCallCheck3.default)(this, Container);
            return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
          }

          Container.prototype.render = function render() {
            return _react2.default.createElement('div', null);
          };

          return Container;
        }(_react.Component)) || _class);
        Container.propTypes = {
          action: _propTypes2.default.string.isRequired
        };


        _testUtils2.default.renderIntoDocument(_react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(Container, { action: 'INCREMENT' })
        ));

        expect(store.getState()).toEqual(1);
      });

      it('should dispatch an actions provided as list of functions', function () {
        var _dec2, _class2;

        var Container = (_dec2 = (0, _index2.default)([function (_ref2) {
          var action = _ref2.action;
          return { type: action };
        }, function (_ref3) {
          var action = _ref3.action;
          return { type: action };
        }]), _dec2(_class2 = function (_Component2) {
          (0, _inherits3.default)(Container, _Component2);

          function Container() {
            (0, _classCallCheck3.default)(this, Container);
            return (0, _possibleConstructorReturn3.default)(this, _Component2.apply(this, arguments));
          }

          Container.prototype.render = function render() {
            return _react2.default.createElement('div', null);
          };

          return Container;
        }(_react.Component)) || _class2);
        Container.propTypes = {
          action: _propTypes2.default.string.isRequired
        };


        _testUtils2.default.renderIntoDocument(_react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(Container, { action: 'INCREMENT' })
        ));

        expect(store.getState()).toEqual(2);
      });

      it('should dispatch nested prefetch actions', function () {
        var _dec3, _class3, _dec4, _class4;

        var Container = (_dec3 = (0, _index2.default)([function () {
          return { type: 'INCREMENT' };
        }]), _dec3(_class3 = function (_Component3) {
          (0, _inherits3.default)(Container, _Component3);

          function Container() {
            (0, _classCallCheck3.default)(this, Container);
            return (0, _possibleConstructorReturn3.default)(this, _Component3.apply(this, arguments));
          }

          Container.prototype.render = function render() {
            return _react2.default.createElement(Nested, this.props);
          };

          return Container;
        }(_react.Component)) || _class3);
        var Nested = (_dec4 = (0, _index2.default)([function () {
          return { type: 'INCREMENT' };
        }]), _dec4(_class4 = function (_Component4) {
          (0, _inherits3.default)(Nested, _Component4);

          function Nested() {
            (0, _classCallCheck3.default)(this, Nested);
            return (0, _possibleConstructorReturn3.default)(this, _Component4.apply(this, arguments));
          }

          Nested.prototype.render = function render() {
            return _react2.default.createElement('div', null);
          };

          return Nested;
        }(_react.Component)) || _class4);


        _testUtils2.default.renderIntoDocument(_react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(Container, null)
        ));

        expect(store.getState()).toEqual(2);
      });
    });
  });

  describe('on server side', function () {
    var _dec5, _class5, _dec6, _class6;

    var serverReducer = function serverReducer() {
      var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var action = arguments[1];
      return (// eslint-disable-line no-confusing-arrow
        action.type === 'INCREMENT' ? prev + 1 : prev
      );
    }; // eslint-disable-line no-param-reassign
    var serverStore = (0, _redux.createStore)(serverReducer);

    var Container = (_dec5 = (0, _index2.default)([function () {
      return { type: 'INCREMENT' };
    }]), _dec5(_class5 = function (_Component5) {
      (0, _inherits3.default)(Container, _Component5);

      function Container() {
        (0, _classCallCheck3.default)(this, Container);
        return (0, _possibleConstructorReturn3.default)(this, _Component5.apply(this, arguments));
      }

      Container.prototype.render = function render() {
        return _react2.default.createElement(Nested, this.props);
      };

      return Container;
    }(_react.Component)) || _class5);
    var Nested = (_dec6 = (0, _index2.default)([function () {
      return { type: 'INCREMENT' };
    }]), _dec6(_class6 = function (_Component6) {
      (0, _inherits3.default)(Nested, _Component6);

      function Nested() {
        (0, _classCallCheck3.default)(this, Nested);
        return (0, _possibleConstructorReturn3.default)(this, _Component6.apply(this, arguments));
      }

      Nested.prototype.render = function render() {
        return _react2.default.createElement('div', null);
      };

      return Nested;
    }(_react.Component)) || _class6);


    it('should dispatch prefetch actions', function () {
      (0, _index.serverPreload)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: serverStore },
        _react2.default.createElement(Container, null)
      ));
      expect(serverStore.getState()).toEqual(2);
    });
  });
});