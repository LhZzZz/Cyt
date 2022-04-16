/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component,useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions} from 'react-native';
import Button from './Components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {func} from "prop-types";
import {is} from "@babel/types";
import PortalGate from "./Components/PortalGate";
import PortalProvider from './Components/PortalProvider'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

const { width, height } = Dimensions.get('window');
let preY = undefined

function Header() {
	return (
		<View>
      <View style={{justifyContent:"flex-end",flexDirection:"row"}}>
        <Button style={{backgroundColor:"rgba(0,0,0,0.4)",flexDirection:"row",alignItems:"center",padding:10,borderRadius:20,marginRight:10}}>
          <Text style={{color:"white"}}><AntDesign name={"wallet"} color={"white"} size={15}/>  钱包</Text>
        </Button>
        <Button style={{backgroundColor:"rgba(0,0,0,0.4)",flexDirection:"row",alignItems:"center",padding:10,borderRadius:20}}>
          <Text style={{color:"white"}}><AntDesign name={"bells"} color={"white"} size={15}/>  提醒</Text>
        </Button>
      </View>
		</View>
	)
}

function renderUserInfo() {
	return (
		<View style={{marginTop:100}}>
			<View style={{flexDirection:"row",justifyContent:"space-between"}}>
				<View style={{justifyContent:"center",alignItems:"center"}}>
          <Image source={require('./Imgs/test.jpg')} style={{width:70,height:70,borderRadius:40}}/>
					<Text style={{fontWeight:"500",fontSize:20,marginTop:10}}>Chilli</Text>
				</View>
				<View style={{justifyContent:"space-around"}}>
					<Button style={{backgroundColor:"white",width:40,height:40,justifyContent:"center",alignItems:"center",borderRadius:20,shadowColor:"#FF9540",shadowOpacity: 0.2, shadowOffset: {w:10,h:10}}}>
            <FontAwesome name={"envelope-o"} color={"#FF9540"} size={20}/>
					</Button>
          <Button style={{backgroundColor:"#FF9540",width:40,height:40,justifyContent:"center",alignItems:"center",borderRadius:20,shadowColor:"#FF9540",shadowOpacity: 0.2, shadowOffset: {w:10,h:10}}}>
            <AntDesign name={"setting"} color={"white"} size={20}/>
          </Button>
				</View>
			</View>

			<View style={{flexDirection:"row",marginTop:30,justifyContent:"space-between",alignItems:"center"}}>
				<View>
					<Text style={{fontWeight:"500",fontSize:18}}>1</Text>
          <Text style={{color:"gray", marginTop:10}}>圈子</Text>
				</View>
        <View>
          <Text style={{fontWeight:"500",fontSize:18}}>1</Text>
          <Text style={{color:"gray", marginTop:10}}>好友</Text>
        </View>
        <View>
          <Text style={{fontWeight:"500",fontSize:18}}>1</Text>
          <Text style={{color:"gray", marginTop:10}}>相册</Text>
        </View>
        <View>
          <Text style={{fontWeight:"500",fontSize:18}}>1</Text>
          <Text style={{color:"gray", marginTop:10}}>历史活动</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"white",paddingVertical:10,paddingHorizontal:15,borderRadius:10,shadowColor:"gray",shadowOpacity: 0.2, shadowOffset: {w:10,h:10}}}>
          <Image source={require('./Imgs/kefu.png')} style={{width:20,height:20}}/>
					<Text style={{color:"#FF9540",marginTop:5,fontSize:12,fontWeight:"500"}}>客服</Text>
        </View>
			</View>
		</View>
	)
}

function renderTool() {
	return (
		<View style={{backgroundColor:"white",shadowColor:"gray",shadowOpacity: 0.2, shadowOffset: {w:10,h:10},marginVertical:30,padding:10,borderRadius:10}}>
			<View style={{paddingVertical:10,paddingBottom:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
				<View style={{flexDirection:"row",alignItems:"center"}}>
					<Image source={require('./Imgs/dingdan.png')} style={{width:18,height:18}} resizeMode={"contain"}/>
					<Text style={{fontWeight:"500",fontSize:16,marginLeft:5}}>订单管理</Text>
				</View>
				<View>
					<Text style={{color:"gray",fontSize:12}}>查看全部订单<AntDesign name={"right"} color={"black"}/></Text>
				</View>
			</View>
      <View style={{paddingVertical:10,paddingTop:20,borderTopWidth:1,borderTopColor:"#eee",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image source={require('./Imgs/youjian.png')} style={{width:18,height:18}} resizeMode={"contain"}/>
          <Text style={{fontWeight:"500",fontSize:16,marginLeft:5}}>活动评价</Text>
        </View>
        <View>
          <Text style={{color:"gray",fontSize:12}}><AntDesign name={"right"} color={"black"}/></Text>
        </View>
      </View>
		</View>
	)
}

//一定要大写才能用<Bar />
function Bar(props) {
	// console.warn(tabIndex)
	let {tabs,tabIndex,onPress} = props
	return (
		<View style={{flexDirection:"row",alignItems:"center"}}>
			{tabs.map((item, index)=>{
        let selected = index === tabIndex
        return (
					<Button
						onPress={()=>onPress(index)}
						style={{marginRight:20,justifyContent:"center",alignItems:"center"}}>
						<Text style={{color:selected?"black":"gray",fontSize:selected?20:16}}>{item}</Text>
						<View style={{marginTop:10,paddingHorizontal:10,paddingVertical:2,borderRadius:10,backgroundColor:selected?"#FF9540":"rgba(0,0,0,0)"}}/>
					</Button>
				)
			})}
		</View>
	)
}

function Activity(props) {
	let {tabs, tabIndex, settabIndex} = props
	return (
		<View>
			{/*{bar(tabs,tabIndex,settabIndex)}*/}
			<Bar tabs={tabs} tabIndex={tabIndex} onPress={settabIndex}/>
			<View>
        <View style={{opacity:0.4,alignSelf:"center",marginTop:20}}>
          <Image source={require('./Imgs/quanzi.png')} style={{width:50,height:50,marginBottom:10}}/>
        </View>
        <Text style={{color:"gray",alignSelf:"center"}}>什么都没有</Text>
			</View>
		</View>
	)
}

function FriendStatus(id){
	const isOnline = useFriendStatus(id);
	return isOnline?"isOnline":"offLine"
}

function FriendItem(props){
	const isOnline = useFriendStatus(props.id);
	return (
		<Text>{isOnline?"在线":"离线"}</Text>
	)
}

function useFriendStatus(id){
	const [isOnline, setIsOnline] = useState(null);
	useEffect(()=>{
		if (id==0){
      setIsOnline(true)
		}
	})
	return isOnline
}



function onScroll(e:any,callback:Function){
	let offsetY = e.nativeEvent.contentOffset.y
	if (preY && preY <=offsetY){
    if (offsetY<=80){
      callback(false)
      return;
    }
    if (offsetY>=50){
      callback(true)
    }
    return
	}
  preY = offsetY
}

function MyComponent(){
	const [count, setCount] = useState(0)
	useEffect(()=>{
		setCount(1)
	})
	return (
		<View>
			<Text>{count}</Text>
		</View>
	)
}

function PreferPage() {
  const [tabIndex, settabIndex] = useState(0)
	const [showHoverBar,setShowHoverBar] = useState<boolean>(false)
  let tabs = ["活动日程","感兴趣的"]
	let momentTabs = ["动态","轨迹"]
  const [momentIndex, setmomentIndex] = useState(0)
  useEffect(()=>{
	});
  const people = [1,2]
	return (
		<PortalProvider>
		<View style={{flex:1,backgroundColor:"white"}}>
      <Image source={require('./Imgs/bg.png')} style={{width:width*2,height:height/3,position:"absolute",zIndex:-1,top:0,left:-width/2}} resizeMode={"cover"}/>
			{showHoverBar?
        null:null
			}
      <ScrollView
				scrollEventThrottle={16}
				stickyHeaderIndices={[0]}
				onScroll={(e)=>onScroll(e,setShowHoverBar)}
				// onScrollEndDrag={(e)=>onScroll(e,setShowHoverBar)}
				style={{flex:1}}>
        <View style={{opacity:showHoverBar?1:0,backgroundColor:"white",justifyContent:"center",alignItems:"center",paddingTop:30}}>
          <View style={{}}>
            <Text style={{padding:10,fontSize:18,fontWeight:"500"}}>我的</Text>
          </View>
        </View>
				<View style={{padding:20}}>
          <View>
            {Header()}
            {renderUserInfo()}
					</View>
          {renderTool()}
          <Activity tabs={tabs} tabIndex={tabIndex} settabIndex={settabIndex}/>

          <View style={{marginTop:80}}>
            <Activity tabs={momentTabs} tabIndex={momentIndex} settabIndex={setmomentIndex}/>
          </View>
				</View>
				{/*{people.map((p,index)=>{*/}
					{/*return <FriendItem id={index}/>*/}
				{/*})}*/}
				{/*<MyComponent />*/}
			</ScrollView>
      <Button
				// onPress={()=>nav.navigate("Login",{data:"lhz"})}
        style={{position:"absolute",borderWidth:2,borderColor:"white",backgroundColor:"#FF9540",width:50,height:50,borderRadius:25,bottom: 20,left: 20,justifyContent:"center",alignItems:"center",shadowColor:"gray",shadowOpacity: 0.2, shadowOffset: {w:10,h:10}}}>
        <AntDesign name={"plus"} size={20} color={"white"}/>
      </Button>
      <PortalGate gateName={'jar'}/>
		</View>
		</PortalProvider>
	)
}



export default PreferPage
