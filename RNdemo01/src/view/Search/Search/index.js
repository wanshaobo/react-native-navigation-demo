import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import D from '../../../common/d'

export default class Search extends Component {

	static navigationOptions = {
		header: null,//不显示栈导航顶部组件
	};

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	check(navigate){
		this.props.navigation.navigate(navigate)
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',alignItems:'center'}}>
				<Text>查询</Text>
				<TouchableOpacity onPress={()=>{this.check('CashAccount')}} activeOpacity={1}>
					<Text style={{fontSize: D(44)}}>进入现金账户详情页</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.check('RebateSearch')}} activeOpacity={1}>
					<Text style={{fontSize: D(44)}}>进入返利查询详情页</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const Styles = StyleSheet.create({

});
