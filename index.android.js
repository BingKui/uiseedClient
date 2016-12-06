/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry
} from 'react-native';

import NavigatorTop from './component/NavigatorTop';

export default class uiseedClient extends Component {
  render() {
    return (
      <NavigatorTop></NavigatorTop>
    )
  }
}

AppRegistry.registerComponent('uiseedClient', () => uiseedClient);