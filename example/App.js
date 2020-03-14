import React, { Component, PureComponent } from 'react';
import propTypes from 'prop-types';
import withPerformance from 'react-native-performance-monitor/provider';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const data = Array.from(Array(100).keys())
  .map((key) => ({ key: key + '' }));

class MyItem extends PureComponent {
  static displayName = 'Text';

  static propTypes = {
    style: propTypes.any,
    children: propTypes.node,
  };

  render() {
    const {
      props: { textStyle, children, ...rest },
    } = this;
    return (
      <View  style={styles.itemContainer}>
        <Text style={[textStyle]}>
          {children}
        </Text>
      </View>
    );
  }
}

const renderItem = (item) => (
    <MyItem
      textStyle={styles.text}
      key={item.key}>
      react-native-performance-monitor line {item.key}
    </MyItem>
);

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
       <ScrollView>
         {data.map(renderItem)}
       </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color:'blue'
  }
});

export default withPerformance(App, 'App');
