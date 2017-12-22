import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import D from '../../common/d';

import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [
		// NavigationActions.navigate({ routeName: 'Login'}),
		NavigationActions.navigate({ routeName: 'Home'})
	]
})

const navigateAction = NavigationActions.navigate({
	routeName: 'Home',
	params: {},
	action: [//可以在Home的子页面中使用this.props.navigation.navigate({Page1});相当于routers.js
		NavigationActions.navigate({ routeName: 'Page1'}),
		NavigationActions.navigate({ routeName: 'Page2'})
	]
})

export default class Login extends Component {

	static navigationOptions = {
		header: null,//不显示栈导航顶部组件
	};

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	login(){
		this.props.navigation.dispatch(resetAction);
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
				<Text>这是登陆页面</Text>
				<TouchableOpacity onPress={()=>{this.login()}}>
					<Text style={{marginTop:D(30),fontSize:D(30)}}>登陆成功，点击进入程序</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const Styles = StyleSheet.create({

});
