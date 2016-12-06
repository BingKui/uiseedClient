'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class DetailTpl extends Component {
	static static defaultProps = {
		title: '',
		imgUrl: '../../image/loading.gif',
		content: '',
		author: '',
		date: ''
	};
	static propTypes = {

	}
	render() {
		return (

		);
	}
}

const styles = StyleSheet.create({

});


export default DetailTpl;