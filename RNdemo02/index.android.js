import React, { Component } from 'react';
import {
	AppRegistry,
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import D from './src/common/d'
import Routes from './routes'
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

//StackNavigator(RouteConfigs, StackNavigatorConfig)
const RootStack = StackNavigator(Routes,{
	initialRouteName: 'Login',//设置默认的页面组件，必须是上面已注册的页面组件
	//initialRouteParams: '',//初始路由的参数
	mode: 'card',//页面切换模式:card-左右切换,modal-上下切换
	headerMode: 'screen',//导航栏的显示模式:float-默认无透明效果,screen-渐变透明效果,none-隐藏导航栏
	//onTransitionStart: '',//页面切换开始时的回调函数
	//onTransitionEnd: '',//页面切换结束时的回调函数
	transitionConfig: () => ({
		screenInterpolator: CardStackStyleInterpolator.forHorizontal,
	}),
	//屏幕导航的默认选项
	navigationOptions: ({navigation}) => ({
		//header:null,//可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了。
		//title: '',//标题，如果设置了这个,导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。适用于标签导航的设置
		headerStyle: {//设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
			backgroundColor: '#eeeeee',
			elevation: 0,
			height: D(100),
			//paddingTop: D(16),//手机状态栏透明需要加paddingTop
			//alignItems: 'center',
		},
		headerTitle: 'headerTitle',
		//设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了。在安卓上会遇到，如果左边有返回箭头导致文字还是没有居中的问题，最简单的解决思路就是在右边也放置一个空的按钮。
		headerTitleStyle: {
			color: '#000',
			alignSelf:'center',
			//fontWeight: 'bold',
			marginHorizontal: D(0),
			//backgroundColor:'#0ff',
		},
		headerBackTitle: null,
		//headerLeft和headerRight是固定宽度，组件写死的
		headerLeft: (
			<TouchableOpacity onPress={() => {navigation.goBack()}}>
				<View style={{}}>
					<Image style={{width: D(48),height: D(48),padding:D(40)}} source={require('./src/img/back.png')}/>
				</View>
			</TouchableOpacity>
		),
		headerRight:<Text></Text>,
		gesturesEnabled: true,//是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
		//对象覆盖触摸从屏幕边缘开始的距离，以识别手势。 它需要以下属性：horizontal - number - 水平方向的距离 默认为25。vertical - number - 垂直方向的距离 默认为135。
		gestureResponseDistance:{horizontal:50},
	})
})

class App extends Component {
	render() {
		return (
			<RootStack />
		);
	}
}

AppRegistry.registerComponent('RNdemo', () => App);
