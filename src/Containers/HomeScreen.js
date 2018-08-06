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
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fab from "../Components/Fab";
import Header from "../Components/Header";
import ExpenseActions from "../Redux/ExpenseRedux";

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
    width: "100%"
  },
  button: {
    width: "30"
  },
  icon: {
    height: "10",
    width: "10"
  },
  listItemContainer: {
    width: "100%",
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 10
  },
  listItemBody: {
    flex: 1,
    justifyContent: "center"
  },
  listItemBodyText: {
    fontSize: 15
  },
  listItemRight: {
    width: "30%",
    justifyContent: "center",
    fontSize: 15
  },
  listItemRightText: {
    fontSize: 15
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

  renderItem = ({ item }) => (
    <View style={styles.listItemContainer}>
      <View style={styles.listItemBody}>
        <Text style={styles.listItemBodyText}>{item.title}</Text>
      </View>
      <View style={styles.listItemRight}>
        <Text style={styles.listItemRightText}>{item.amount}</Text>
      </View>
    </View>
  );

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  addExpense = () => {
    let temp = {
      id: Math.floor(Math.random() * 1000) + 10,
      title: Math.random()
        .toString(36)
        .substring(7),
      amount: Math.floor(Math.random() * 5000) + 100,
      createdAt: new Date()
    };
    this.props.addExpense(temp);
  };

  render() {
    const { navigation, allExpenses } = this.props;
    return (
      <View style={styles.container}>
        <Header title="Home" navigation={this.props.navigation} />
        <View style={styles.body}>
          <FlatList
            data={allExpenses}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <Fab handlePress={this.addExpense} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    allExpenses: state.expense.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(ExpenseActions.addExpense(expense))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
