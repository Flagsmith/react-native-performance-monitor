import React, {Component, PureComponent} from 'react';
import withPerformance from 'react-native-performance-monitor/provider';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';
const data = Array.from(Array(10000).keys());
const fastMode = false;

class FastText extends PureComponent{
  render() {
    return <Text>{this.props.children}</Text>
  }
}

class SlowText extends Component{
  render() {
    return <Text>{this.props.children}</Text>
  }
}

const renderItem = ({index})=> (
 <View key={index} style={{height:200, justifyContent:'center', alignItems:'center'}}>
   {
     fastMode? <FastText>React Native Performance Monitor {index}</FastText> : <SlowText>React Native Performance Monitor {index}</SlowText>
   }
 </View>
)

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1, padding:20}}>
        <FlatList
          keyExtractor={(item,index)=>index}
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default withPerformance(App, 'App');
