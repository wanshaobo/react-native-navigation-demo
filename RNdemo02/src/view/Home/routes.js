import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';
import D from '../../common/d'

import HomePage from './HomePage'
import Category from './Category'
import Order from './Order'
import Cart from './Cart'
import Search from './Search'

export default Routes = {
	HomeScreen: {
		screen: HomePage,
		navigationOptions: {
			tabBarLabel: '首页',
			tabBarIcon: ({focused}) => {
				return(
					focused ?
						<Image style={Styles.icon} resizeMode='contain' source={require('../../img/home-selected.png')}/> :
						<Image style={Styles.icon} resizeMode='contain' source={require('../../img/cart-unselected.png')}/>
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
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/cart-unselected.png')}/>
			)
		}
	},
	Order: {
		screen: Order,
		navigationOptions: {
			tabBarLabel: '订单',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/order-unselected.png')}/>
			)
		}
	},
	Cart: {
		screen: Cart,
		navigationOptions: {
			tabBarLabel: '购物车',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/cart-unselected.png')}/>
			)
		}
	},
	Search: {
		screen: Search,
		navigationOptions: {
			tabBarLabel: '查询',
			tabBarIcon: ({focused}) => (
				focused ?
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/home-selected.png')}/> :
					<Image style={Styles.icon} resizeMode='contain' source={require('../../img/search-unselected.png')}/>
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