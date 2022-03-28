import React, {Component} from 'react';
import type {Node} from 'react';
import {View,Text,Button,Image,StyleSheet,useColorScheme} from 'react-native';
import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs,CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Button from './components/Button'
import mainPage from './app/MainPage';
import preferPage from './app/PreferPage';
import loginPage from './app/Pages/LoginPage'
import addnewPage from './app/Pages/AddnewPage'

import Tabs from './app/navigation/tab'

const App: () => Node = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const HomeStack = createStackNavigator();
	function HomeStackScreen() {
		const config = {
			animation: 'spring',
			config: {
				stiffness: 1000,
				damping: 500,
				mass: 3,
				overshootClamping: true,
				restDisplacementThreshold: 0.01,
				restSpeedThreshold: 0.01,
			},
		};
		return (
			<HomeStack.Navigator headerMode={'none'} screenOptions={({ route, navigation }) => ({
			})}>
				<HomeStack.Screen name="Home" component={mainPage} options={{headerTransparent: true}} />
				<HomeStack.Screen name="Login" component={loginPage} options={{headerTransparent: true}} />
				<HomeStack.Screen name="AddNew" component={addnewPage} options={{headerTransparent: true, cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,}}/>
			</HomeStack.Navigator>
		);
	}


	const SettingStack = createStackNavigator();
	function SettingStackScreen() {
		return (
			<SettingStack.Navigator headerMode={'none'} >
				<SettingStack.Screen name="Settings" component={preferPage} options={{headerTransparent: true}} />
				<SettingStack.Screen name="Login" component={loginPage} options={{headerTransparent: true}}/>
			</SettingStack.Navigator>
		);
	}


	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
      <Tabs />
			{/*<Tab.Navigator*/}
				{/*screenOptions={({ route, navigation }) => ({*/}
					{/*tabBarIcon: ({ focused, color, size }) => {*/}
						{/*let iconName;*/}

						{/*if (route.name === '首页') {*/}
							{/*return focused?<Image source={require(('./app/Imgs/smile_focus.png'))} style={{width:20,height:20}}/>:<Image source={require(('./app/Imgs/smile.png'))} style={{width:20,height:20}}/>*/}
						{/*}else if (route.name==="我的"){*/}
							{/*return focused?<Image source={require(('./app/Imgs/wo_focus.png'))} style={{width:20,height:20}}/>:<Image source={require(('./app/Imgs/wo.png'))} style={{width:20,height:20}}/>*/}
						{/*}*/}
					{/*},*/}
				{/*})}*/}
				{/*tabBarOptions={{*/}
					{/*activeTintColor: "#FF9540",*/}
					{/*inactiveTintColor: "gray",*/}
					{/*labelStyle:{fontWeight:'900',fontSize:11},*/}
				{/*}}*/}
			{/*>*/}
				{/*<Tab.Screen name="首页" component={HomeStackScreen}*/}
				            {/*options={({route})=>{*/}
					            {/*let routeName = getFocusedRouteNameFromRoute(route)*/}
					            {/*if (routeName&&routeName!=="Home"){*/}
						            {/*return {*/}
							            {/*tabBarVisible: false*/}
						            {/*}*/}
					            {/*}*/}
				            {/*}}/>*/}
				{/*<Tab.Screen name="我的" component={SettingStackScreen}*/}
				            {/*options={({route})=>{*/}
					            {/*let routeName = getFocusedRouteNameFromRoute(route)*/}
					            {/*if (routeName&&routeName!=="Settings"){*/}
						            {/*return {*/}
							            {/*tabBarVisible: false*/}
						            {/*}*/}
					            {/*}*/}
				            {/*}}*/}
				{/*/>*/}
			{/*</Tab.Navigator>*/}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;


