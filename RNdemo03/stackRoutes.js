import { TabNavigator,StackNavigator } from 'react-navigation';
import TabRoutes from './tabRoutes';
import Record from './src/view/HomePage/Record'
import CashAccount from './src/view/Search/CashAccount'
import RebateSearch from './src/view/Search/RebateSearch'
import D from './src/common/d'

//TabNavigator(RouteConfigs,TabNavigatorConfig)
const RootTabs = TabNavigator(TabRoutes,{
	//tabBarComponent: null,
	tabBarPosition: 'bottom',
	swipeEnabled: false,//左右滑动可以切换标签
	animationEnabled: false,
	lazy: true,
	backBehavior: 'none',//安卓物理返回键的行为，默认返回第一个标签，none不执行任何操作
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

export default {
	RootTabs: {screen: RootTabs},
	Record: {screen: Record},
	CashAccount: {screen: CashAccount},
	RebateSearch: {screen: RebateSearch},
};