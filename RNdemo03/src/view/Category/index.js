//
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class Category extends Component {

	static navigationOptions = ({navigation}) => ({
		header: null,
	})

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>Category</Text>
			</View>
		);
	}
}
