import React, {
	Component,
	PropTypes
} from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import ArticleDetail from './ArticleDetail';

export default class ArticleItem extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired, //标题
		imgUrl: PropTypes.string.isRequired //图片地址
	}
	render() {
		return (
			<View style={styles.container}>
				<Image
		          source={{uri: this.props.imgUrl}}
		          resizeMode={Image.resizeMode.cover}
		          style={styles.thumbnail}
		        />
		        <View style={styles.rightContainer}>
		          	<Text style={styles.title}>{this.props.title}</Text>
		        </View>
		    </View>
		);
	}
}
let Dimensions = require("Dimensions");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	rightContainer: {
		flex: 1,
		alignItems: 'flex-start',
		backgroundColor: '#ececec',
		width: Dimensions.get('window').width
	},
	title: {
		fontSize: 25,
		textAlign: 'left',
		color: '#ffffff',
		height: 45,
		textAlignVertical: 'center'
	},
	thumbnail: {
		width: Dimensions.get('window').width,
		height: 320
	},
	listView: {
		backgroundColor: '#F5FCFF'
	}
});