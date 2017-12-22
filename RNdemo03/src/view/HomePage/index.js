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

export default class HomePage extends Component {

	static navigationOptions = ({navigation}) => ({
		header: null,
	})

	enter(navigate){
		this.props.navigation.navigate(navigate)
	}

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>HomeScreen</Text>
				<TouchableOpacity onPress={()=>{this.enter('Record')}} activeOpacity={1}>
					<Text >点击进入二级页面</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
