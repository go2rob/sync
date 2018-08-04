/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fab from "../Components/Fab";
import Header from "../Components/Header";

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
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: "30"
  },
  icon: {
    height: "10",
    width: "10"
  }
});

type Props = {};
class HomeScreen extends Component<Props> {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" size={30} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Home" navigation={this.props.navigation} />
        <View style={styles.body}>
          <Text>Home Screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate("SecondScreen")}
            style={styles.button}
            title="Go To Second"
          />
        </View>
        <Fab />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
