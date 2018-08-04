import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  fab: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 100
  }
});

export default class Fab extends Component {
  static defaultProps = { onPress: () => null };

  static propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object
  };

  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity style={styles.fab} onpress={() => onPress()}>
        <Icon name="plus" size={30} color="#01a699" />
      </TouchableOpacity>
    );
  }
}
