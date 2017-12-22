import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';
import D from './src/common/d'

import HomePage from './src/view/HomePage'
import Category from './src/view/Category'
import Order from './src/view/Order'
import Cart from './src/view/Cart'
import SearchStackNavigator from './src/view/Search'

export default {
	HomePage: {
		screen: HomePage,
		navigationOptions: {
			tabBarLabel: '首页',
			tabBarIcon: ({focused}) => {
				return(
					focused ?
						<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/home-selected.png')}/> :
						<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/cart-unselected.png')}/>
				)
			}
		}
	},
	Category: {
		screen: Category,
		navigationOptions: {
			tabBarLabel: '分类',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/cart-unselected.png')}/>
			)
		}
	},
	Order: {
		screen: Order,
		navigationOptions: {
			tabBarLabel: '订单',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/order-unselected.png')}/>
			)
		}
	},
	Cart: {
		screen: Cart,
		navigationOptions: {
			tabBarLabel: '购物车',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/cart-unselected.png')}/>
			)
		}
	},
	Search: {
		screen: SearchStackNavigator,
		navigationOptions: {
			tabBarLabel: '查询',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('./src/img/search-unselected.png')}/>
			)
		}
	},
};

const Styles = StyleSheet.create({
	icon:{
		width: D(48),
		height: D(48)
	}
});