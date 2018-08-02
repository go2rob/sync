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
class LoginScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{"Hi: " + this.props.username}</Text>
        <View style={styles.inLine}>
          <Button
            onPress={() => this.props.navigation.navigate('Counter')}
            style={styles.button}
            title="Go To Counter"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
	return {
		username: state.login.username,
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
