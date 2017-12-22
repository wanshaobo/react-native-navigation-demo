import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import D from '../../../common/d'

export default class RebateSearch extends Component {

	static navigationOptions = {
		tabBarVisible: false,//不显示标签导航
		headerTitle: '返利查询',
		//head金账户'ft: <Text></Text>,
		//headerRight: <Text></Text>
	}

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',alignItems:'center'}}>
				<Text>返利查询详情页</Text>
			</View>
		);
	}
}

const Styles = StyleSheet.create({

});

