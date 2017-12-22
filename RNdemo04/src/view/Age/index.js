import React, { Component } from 'react';
import {
	Text,
	View,
} from 'react-native';
import { connect } from 'react-redux';
import { getAge } from '../../redux/actions/age'
class Age extends Component {

	static navigationOptions = {
		//header: null,//不显示栈导航顶部组件
		headerTitle: '我的年龄',
	};

	componentDidMount(){
		getAge();
	}

	render() {
		return (
			<View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
				<Text>{this.props.userInfo.age}</Text>
			</View>
		);
	}
}


export default connect(state => ({
	userInfo: state.age,
}))(Age);
