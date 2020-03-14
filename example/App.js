import React, { Component, PureComponent } from 'react';
import propTypes from 'prop-types'
import withPerformance from 'react-native-performance-monitor/provider';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';
const fastMode = false;

const data = Array.from(Array(10000).keys())
  .map((key) => ({ key: key + '' }));

class FastText extends PureComponent {
  render() {
    return (
      <Text style={[this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}


class SlowText extends Component {
  static displayName = 'Text';

  static propTypes = {
    style: propTypes.any,
    children: propTypes.node,
  };
  render() {
    const {
      props: { style, children },
    } = this;
    return (
      <Text {...this.props} style={[style]}>
        {children}
      </Text>
    );
  }
}

const renderItem = ({ item }) => (
  <View key={item.key} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
    {
      fastMode ? <Text>React Native Performance Monitor {item.key}</Text> :
        <FastText>React Native Performance Monitor {item.key}</FastText>
    }
  </View>
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default withPerformance(App, 'App');
