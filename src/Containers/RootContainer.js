import React, { Component } from "react";
import CounterScreen from "./CounterScreen";
import LoginScreen from "./LoginScreen";
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Counter: {
    screen: CounterScreen
  },
  Login: {
    screen: LoginScreen
  }
},
{
  initialRouteName: 'Counter',
});

export default class RootContainer extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}
