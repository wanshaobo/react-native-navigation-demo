//
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import D from '../../../../common/d'

import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'Login'})
	]
})

export default class Setting extends Component {

	static navigationOptions = {
		//header: null,//不显示栈导航顶部组件
		headerTitle: '个人中心'
	};

	logout(navigate){
		this.props.navigation.dispatch(resetAction);
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',alignItems:'center'}}>
				<TouchableOpacity onPress={()=>{this.logout()}} activeOpacity={1}>
					<Text style={{fontSize: D(44)}}>退出登录</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
