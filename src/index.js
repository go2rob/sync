/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  state = {
    counter: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{"state: " + this.state.counter}</Text>
        <View style={styles.inLine}>
          <Button
            onPress={() =>
              this.setState(prevState => ({
                counter: prevState.counter + 1
              }))
            }
            style={styles.button}
            title="Add"
          />
          <Button
            onPress={() =>
              this.setState(prevState => ({
                counter: prevState.counter - 1
              }))
            }
            style={styles.button}
            title="Subtract"
          />
        </View>
      </View>
    );
  }
}

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
