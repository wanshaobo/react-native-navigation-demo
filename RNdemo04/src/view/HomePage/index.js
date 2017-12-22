//
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import D from '../../common/d'
export default class HomePage extends Component {

	static navigationOptions = {
		header: null,//不显示栈导航顶部组件
		//headerTitle: '首页',
	};

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Name')}} activeOpacity={1}>
					<Text style={{fontSize: D(44)}}>查看我的名字</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Age')}} activeOpacity={1}>
					<Text style={{fontSize: D(44)}}>查看我的年龄</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
