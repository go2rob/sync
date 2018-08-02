/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import CounterActions from "../Redux/CounterRedux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  inLine: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  button: {
    width: "30"
  }
});

type Props = {};
class CounterScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{"state: " + this.props.counter}</Text>
        <View style={styles.inLine}>
          <Button
            onPress={() => this.props.increment()}
            style={styles.button}
            title="Add"
          />
          <Button
            onPress={() => this.props.decrement()}
            style={styles.button}
            title="Subtract"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
	return {
		counter: state.counter.counterValue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch(CounterActions.increment()),
		decrement: () => dispatch(CounterActions.decrement())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
