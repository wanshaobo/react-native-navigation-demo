//
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class Order extends Component {

	static navigationOptions = {
		header: null,//不显示栈导航顶部组件
	};

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>Order</Text>
			</View>
		);
	}
}
