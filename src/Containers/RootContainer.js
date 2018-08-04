import React, { Component } from "react";
import CounterScreen from "./CounterScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator({
  Home:{
      screen: HomeScreen
  },
  SecondScreen:{
      screen: SecondScreen
  },
  ThirdScreen:{
    screen: ThirdScreen
  }
},{
  initialRouteName: 'Home'
});
// drawerWidth: 300

export default class RootContainer extends Component {
  render() {
    return (
      <DrawerNavigator />
    )
  }
}
