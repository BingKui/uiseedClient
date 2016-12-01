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
			        <TouchableHighlight style={styles.back} onPress={this.props.onBack}>
			            <Image style={styles.back} source={require('./back.png')}/>
			        </TouchableHighlight>
			        <Text style={styles.headerTitle}>{ this.props.title }</Text>
		        </View>
		        <TouchableHighlight onPress={this.props.onForward}>
		          	<Text>点我进入下一场景</Text>
		        </TouchableHighlight>
		        <ArticleList></ArticleList>
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
		width: _width - 90,
		color: '#fff',
		fontSize: 16
	},
	back: {
		width: 35,
		height: 35
	}
});