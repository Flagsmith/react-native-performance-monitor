<img src="./example.gif"/>

This is work in progress, follow the repository as it should be ready for wider use soon.


This project lets you see a realtime graph of render times. The purpose is for you to be able to create experiments (i.e. change markup and see how it affects render times), every render causes data to be posted to 

```
npm i react-native-performance-monitor --save
npx react-native-performance-monitor get
```


Usage 
```
import withPerformanceMonitor from 'react-native-performance-monitor/provider';
export default withPerformanceMonitor(YourScreen, 'Screen Name');
```
