'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	Image,
	ListView,
	ScrollView
} from 'react-native';

const REQUEST_URL_ITEM = 'http://uiseed.cn/?json=1&p='; //数据地址

class ArticleDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: null,
			flag: false
		};
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData = () => {
		fetch(REQUEST_URL_ITEM + this.props.id)
			.then((response) => response.json())
			.then((responseData) => {
				// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
				this.setState({
					content: responseData.post,
					flag: true
				});
			});
	}
	_onPress = () => {
		const {
			navigator
		} = this.props;

		if (navigator) {
			//很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
			navigator.pop();
		}
	}
	returnContent = (flag, content) => {
		return flag ? content.content : '加载中...';
	}
	render() {
		const {
			content,
			flag
		} = this.state;
		return (
			<View style={styles.container}>
		        <View style={styles.header}>
		        	<TouchableHighlight underlayColor='#b8e1f7' style={styles.back} onPress={this._onPress}>
			            <Image style={styles.back} source={require('../../image/back.png')}/>
			        </TouchableHighlight>
			        <Text style={styles.headerTitle}>详情</Text>
		        </View>
		        <ScrollView contentContainerStyle={styles.contentContainer}>
			        <Text style={styles.welcome}>
			          	{this.returnContent(flag, content)}
			        </Text>
    			</ScrollView>
		    </View>
		);
	}
}
let Dimensions = require("Dimensions");
let _width = Dimensions.get('window').width;
const styles = StyleSheet.create({
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
		width: _width - 45,
		color: '#fff',
		fontSize: 16
	},
	back: {
		width: 35,
		height: 35
	},
});


export default ArticleDetail;