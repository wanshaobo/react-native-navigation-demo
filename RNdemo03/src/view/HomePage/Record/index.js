//
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class Record extends Component {

	static navigationOptions = {
		tabBarVisible: false,//不显示标签导航
		headerTitle: '聊天记录',
		//head金账户'ft: <Text></Text>,
		//headerRight: <Text></Text>
	}

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>聊天记录</Text>
			</View>
		);
	}
}
