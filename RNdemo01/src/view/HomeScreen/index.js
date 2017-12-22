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

export default class HomeScreen extends Component {
	static navigationOptions = ({navigation}) => ({
		//tabBarLabel: '首页',
		headerTitle: '我的业绩',
		//headerStyle: home_styles.headerStyle,
		//headerTitleStyle: home_styles.headerTitleStyle,
		headerTintColor: '#000',
		// headerRight: (<TouchableOpacity onPress={}></TouchableOpacity>),
		// tabBarIcon:( focused =>{ focused ?
		// 	<Image source={require('../../img/home-selected.png')} style={{width:20,height:20}}/> :
		// 	<Image source={require('../../img/home-selected.png')} style={{width:20,height:20}}/>
		// })
		})
	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>HomeScreen</Text>
				<TouchableOpacity onPress={() => {}}>
					<Text>点击进入二级页面</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
