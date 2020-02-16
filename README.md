This is work in progress, come back later.


For now, this project lets you see a realtime graph of render times. The purpose is for you to be able to create experiments (i.e. change markup and see how it affects render times), every render causes data to be posted to 


# installation localhost:3000
```
npm i
npm run dev
```


use this hoc 

```
import React, { Component } from 'react';

const Profiler = React.Profiler;

export default (WrappedComponent, _id, remote) => {
    class HOC extends Component {
        static displayName = 'withPerformance';

        constructor(props) {
            super(props);
            this.trace = null;
            this.traceStarted = false;
            this.initialMount = null;
            this.initialUpdates = null;
        }

        async componentWillUnmount() {
            if (this.trace) {
                await this.trace.stop();
            }
        }

        logMeasurement = async (id, phase, actualDuration, baseDuration) => {
            // see output during DEV
            if (__DEV__) console.log(id, actualDuration);
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
            return (
                <Profiler id={_id} onRender={this.logMeasurement}>
                    <WrappedComponent
                      {...this.props}
                      {...this.state}
                    />
                </Profiler>

            );
        }
    }

    return HOC;
};

```

export default withPerformance(YourScreen, 'Screen Name', 'http://localhost:3000/value');

