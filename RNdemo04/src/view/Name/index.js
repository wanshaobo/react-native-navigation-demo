//
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class Name extends Component {

	static navigationOptions = {
		//header: null,//不显示栈导航顶部组件
		headerTitle: '我的名字',
	};

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>wanshaobo</Text>
			</View>
		);
	}
}
