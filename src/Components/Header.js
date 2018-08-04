import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFAFA",
    height: 60,
    elevation: 5
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  left: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Header extends Component {
  static defaultProps = {};

  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { title, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="#01a699" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          <Icon name="dots-vertical" size={30} color="#01a699" />
        </View>
      </View>
    );
  }
}
