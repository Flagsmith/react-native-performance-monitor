// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Component } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

const Profiler = React.Profiler;
export default ({ WrappedComponent, _id, ip = '127.0.0.1', events = ['mount', 'update'], showLogs = false, port = 8125, enableWS = true }) => {
  const remote = `http://${ip}:${port}/value`;
  const log = (message) => {
    if (showLogs) {
      console.log(message);
    }
  };
  class HOC extends Component {
    static displayName = 'withPerformance';

    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      if (!enableWS) return;
      this.socket = new WebSocket(`ws://${ip}:8126`);
      this.socket.onopen = function () {
        log('RNPM: connected');
      };

      this.socket.onmessage = (event) => {
        switch (event.data) {
          case 'remount': {
            log('RNPM: remount');
            this.setState({ unmount: true }, () => {
              setTimeout(() => this.setState({ unmount: false }), 200);
            });
            break;
          }
          case 'forceUpdate': {
            log('RNPM: force update');
            this.forceUpdate();
            break;
          }
          default:
            break;
        }
      };
    }

    componentWillUnmount() {
      this.socket && this.socket.close();
    }

    logMeasurement = async (id, phase, actualDuration) => {
      if (!events.includes(phase)) {
        return;
      }
      if (actualDuration < 0.1) {
        return;
      }

      if (remote) {
        fetch(remote, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ value: actualDuration }),
        });
      }
    }

    render() {
      return this.state.unmount ? null : (
        <Profiler id={_id} onRender={this.logMeasurement}>
          <WrappedComponent
            {...this.props}
            {...this.state}
          />
        </Profiler>

      );
    }
  }

  return hoistNonReactStatics(HOC, WrappedComponent);
};
