/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './Containers/RootContainer'
import createStore from './Redux'

const store = createStore()

type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
