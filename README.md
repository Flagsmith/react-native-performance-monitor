<img src="example.gif"/>

This project lets you see a realtime graph of render times within your React Native app. The purpose is for you to be able to create experiments (i.e. change markup and see how it affects render times).


# Installation

```
npm i react-native-performance-monitor --save
npx react-native-performance-monitor get
```


# Usage
```
import withPerformanceMonitor from 'react-native-performance-monitor/provider';
export default withPerformanceMonitor(YourScreen, 'Screen Name');
```

# An example

Set your baseline at http://127.0.0.1:8125/ by clicking remount. Pause the recorder, and adjust your component with what you think will improve perormance.


Here's a before and after with this approach

Baseline
```
<Text style={[this.props.style]}>
    {this.props.children}
</Text>
```

Improved
```
<Text style={this.props.style}>
    {this.props.children}
</Text>
```

With this before and after I observed the following within a large flat list. 

<img src="example2.png"/>


# How it works

The overall implementation is quite straight forward and simply involved passing the onRenderCallback values via a websocket server to finally render them in a fancy graph.

There are 3 main components:

- The React Native component that sends profile data to a server via REST and listens to messages (remount and forceUpdate) to trigger renders.
- The Web socket server responsible for passing messages between the graph and the react native component
- The Web application that receives websocket values and renders them to a graph

<img src="./data-flow.png"/>
