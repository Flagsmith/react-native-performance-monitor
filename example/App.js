import React, { Component, PureComponent } from 'react';
import propTypes from 'prop-types';
import withPerformance from 'react-native-performance-monitor/provider';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const data = Array.from(Array(10000).keys())
  .map((key) => ({ key: key + '' }));

class MyItem extends PureComponent {
  static displayName = 'Text';

  static propTypes = {
    style: propTypes.any,
    children: propTypes.node,
  };

  render() {
    const {
      props: { textStyle, children },
    } = this;
    return (
      <View style={styles.itemContainer}>
        <Text style={textStyle}>
          {children}
        </Text>
      </View>
    );
  }
}

const renderItem = (res) => (
    <MyItem
      textStyle={styles.text}
      key={res.item.key}>
      react-native-performance-monitor line {res.item.key}
    </MyItem>
);

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
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
    color:'#333'
  }
});

export default withPerformance({WrappedComponent: App, _id: 'App'});
