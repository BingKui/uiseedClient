/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Navigator
} from 'react-native';

import MainScene from './component/MainScene';

export default class uiseedClient extends Component {
  render() {
    return ( < Navigator initialRoute = {
        {
          title: 'uiseed',
          index: 0
        }
      }
      renderScene = {
        (route, navigator) =>
        < MainScene
        title = {
          route.title
        }

        // Function to call when a new scene should be displayed           
        onForward = {
          () => {
            const nextIndex = route.index + 1;
            navigator.push({
              title: '详情',
              index: nextIndex,
            });
          }
        }

        // Function to call to go back to the previous scene
        onBack = {
          () => {
            if (route.index > 0) {
              navigator.pop();
            }
          }
        }
        />
      }
      />
    )
  }
}

AppRegistry.registerComponent('uiseedClient', () => uiseedClient);