import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Routes from './routes'

import D from '../../common/d'

//TabNavigator(RouteConfigs,TabNavigatorConfig)
export default Home = TabNavigator(Routes,{
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