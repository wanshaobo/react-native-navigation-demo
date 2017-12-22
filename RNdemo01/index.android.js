/*
项目概述：
首页是标签导航，每个二级页面独立注册栈导航，比较繁琐，二级页面无法进行通信
*/
import React, { Component } from 'react';
import {
	AppRegistry
} from 'react-native';
import D from './src/common/d'
import Routes from './routes'
import { TabNavigator } from 'react-navigation';

//TabNavigator(RouteConfigs,TabNavigatorConfig)
const RootTabs = TabNavigator(Routes,{
	//tabBarComponent: null,
	tabBarPosition: 'bottom',
	swipeEnabled: false,//左右滑动可以切换标签
	animationEnabled: false,
	lazy: true,
	//initialLayout: 'width',
	tabBarOptions:{
		labelStyle: {
			fontSize: 12,
			lineHeight: 12,
			//backgroundColor:'red',
			width:'100%',
			marginTop: D(7),
			marginBottom:0
		},
		iconStyle: {
			//width: 25,
			//height: 25,
			//backgroundColor: '#333'
		},
		tabStyle: {
			//width: 100,
			//backgroundColor:'red',
			paddingTop:D(12),
			paddingBottom:D(16)
		},
		style: {
			backgroundColor: '#fff',
		},
		activeTintColor: '#ff6a00',
		inactiveTintColor: '#000',
		showIcon: true,
		showLabel: true,
		pressOpacity: 1,
		indicatorStyle: {
			height: 0,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
			backgroundColor: '#0ff',
		},
	},
});

class App extends Component {
	render() {
		return (
			<RootTabs />
		);
	}
}

AppRegistry.registerComponent('RNdemo', () => App);
