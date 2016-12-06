import React, {
	Component,
	PropTypes
} from 'react';
import {
	Image,
	StyleSheet,
	ListView,
	Text,
	View,
	TouchableOpacity,
	Navigator
} from 'react-native';

import ArticleItem from './ArticleItem';
import ArticleDetail from './ArticleDetail';

const REQUEST_URL = 'http://uiseed.cn/?json=1&count=30'; //数据地址
export default class ArticleList extends Component {
	// static propTypes = {
	//   onForward: PropTypes.func.isRequired
	// }
	constructor(props) {
		super(props); //这一句不能省略，照抄即可
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
			navigator: {}
		};
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
		// 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.fetchData = this.fetchData.bind(this);
		this.renderMovie = this.renderMovie.bind(this);
	}
	componentDidMount() {
		this.fetchData();
		this.setState({
			navigator: this.props.navigator
		});
	}
	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.posts),
					loaded: true
				});
			});
	}
	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
		);
	}
	renderLoadingView() {
		return (
			<View style={styles.loadContainer}>
		        <Text>数据加载中...</Text>
		    </View>
		);
	}
	_onPress = (_id, _title, _img) => {
		const {
			navigator
		} = this.props;
		if (navigator) {
			navigator.push({
				name: 'ArticleDetail',
				component: ArticleDetail,
				params: {
					id: _id,
					title: _title,
					img: _img
				}
			});
		}
	};
	renderMovie(item) {
		return (
			<TouchableOpacity onPress={() =>{this._onPress(item.id, item.title, item.thumbnail)}} >
				<ArticleItem title={item.title} imgUrl={item.thumbnail}></ArticleItem>
			</TouchableOpacity>
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
	},
	loadContainer: {
		marginTop: 160
	}
});