<img src="./example.gif"/>

This project lets you see a realtime graph of render times. The purpose is for you to be able to create experiments on your markup and see how performance is impacted in terms of mounting and rendering.
 
Every render causes data to be posted to the realtime graph, you can configure whether it's just mounts or updates that are posted. 


# installation
```
npm i react-native-performance-monitor --save
```

# Displaying the graph
```
npx react-native-performance get
```

# usage
```
import withPerformance from 'react-native-performance-monitor/provider'
...
class YourScreen extends Component
...
export default withPerformance(YourScreen, 'YourScreen', 'http://127.0.0.1:8125/value', ['mount','render']);
```

