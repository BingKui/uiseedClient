/**
 * 主页面，进入应用看到的页面
 */
import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Image
} from 'react-native';

import ArticleList from './ArticleList'
export default class MainScene extends Component {
	render() {
		return (
			<View>
		        <View style={styles.header}>
			        <Text style={styles.headerTitle}>uiseed.cn</Text>
		        </View>
		        <ArticleList navigator={this.props.navigator}></ArticleList>
      		</View>
		)
	}
}
let Dimensions = require("Dimensions");
let _width = Dimensions.get('window').width;
var styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 45,
		width: _width,
		backgroundColor: '#44abe5'
	},
	headerTitle: {
		textAlign: 'center',
		width: _width,
		color: '#fff',
		fontSize: 16
	},
	back: {
		width: 35,
		height: 35
	}
});