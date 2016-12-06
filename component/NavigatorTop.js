'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Navigator
} from 'react-native';

import MainScene from './MainScene';

class NavigatorTop extends Component {
	render() {
		let rootViewName = 'MainScene';
		let rootComponent = MainScene;
		return ( < Navigator initialRoute = {
				{
					name: rootViewName,
					component: rootComponent
				}
			}
			configureScene = {
				(route) => {
					return Navigator.SceneConfigs.HorizontalSwipeJump;
				}
			}
			renderScene = {
				(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator = {navigator} />
				}
			}
			/>
		);
	}
}

const styles = StyleSheet.create({

});


export default NavigatorTop;