import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ServerPrefetchProvider extends Component {

  static childContextTypes = {
    prefetchCursor: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.object,
    prefetchCursor: PropTypes.object
  }

  static defaultProps = {
    children: null,
    prefetchCursor: null
  }

  getChildContext() {
    return {
      prefetchCursor: this.props.prefetchCursor,
    };
  }

  render() {
    return this.props.children;
  }
}
