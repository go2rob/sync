/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

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
class SecondScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inLine}>
          <Text>Second Screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('ThirdScreen')}
            style={styles.button}
            title="Go To Third"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
	return {
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
