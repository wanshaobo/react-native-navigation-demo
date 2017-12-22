import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';

import D from '../../../common/d';

export default class Search extends Component {

	static navigationOptions = {
		header: null,//不显示栈导航顶部组件
	};

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Setting')}} activeOpacity={1}>
					<Text style={{fontSize: D(44)}}>进入设置页面</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const Styles = StyleSheet.create({

});
