import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import D from '../../../common/d'

export default class CashAccount extends Component {

	static navigationOptions = ({navigation}) => ({
		tabBarVisible: false,//不显示标签导航
		headerTitle: '现金账户',
		// headerTitle: navigation.state.params.title,
		//head金账户'ft: <Text></Text>,
		//headerRight: <Text></Text>
	})

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',alignItems:'center'}}>
				<Text>现金账户查询详情页</Text>
			</View>
		);
	}
}

const Styles = StyleSheet.create({

});
