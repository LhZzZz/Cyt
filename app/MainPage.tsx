/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, useEffect, useState, useReducer} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, ImageBackground,Dimensions, TextInput, SafeAreaView, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Button from './Components/Button'
import { BlurView, VibrancyView } from "@react-native-community/blur";
import PortalProvider from './Components/PortalProvider'
import PortalGate from './Components/PortalGate'
import MyRemind from './Components/MyRemind'
import { useNavigation, useRoute } from '@react-navigation/native';
type Props = {};
const { width, height } = Dimensions.get('window');
import {authInfo,authToken} from './store'
import {useAtom} from "jotai";
// import ContentLoader, {Rect,Circle,Facebook} from 'react-content-loader/native'
import {FirstLoader, SeecondLoader} from "./Components/WaitingLoader";
import HighLightText from "./Components/HighLightText"
// import { Shadow } from 'react-native-shadow-2';

const MyFacebookLoader = () => <Facebook />

import StackSwiper from './Components/StackSwiper'


const THEME_COLOR = "#FF9540"

const data:any[] = [
  {title:"最in圈子",data:"data1"},
  {title:"聚玩",data:"data2"},
  {title:"人文",data:"data3"},
  {title:"运动",data:"data4"},
  {title:"观影",data:"data5"},
  {title:"音乐",data:"data5"},
]

const extraData = {
  "data1":[
    {title:"燃剧场活动圈",desc:"读剧，表演体验，跑团，配音，游戏",game:[0,1,3,4,5]},
    {title:"深蓝影迷会",desc:"一起看电影",game:[0,1,3]},
    {title:"并步读书会",desc:"看书，学习",game:[0,1,3]},
    {title:"灰灰观影团",desc:"酷酷的人一起看电影",game:[0,1,3]},
    {title:"流动茶话会",desc:"思想是一场流动的茶话会",game:[0,1,3]}
  ],
  "data2":[
    {title:"POTATO Clamping",desc:"与陌生的你在篝火旁把酒言欢",game:[0,1,3,4,5]},
    {title:"详可露营",desc:"就此燥起来",game:[0,1,3]}
  ]
}

function renderHeader(){
  // @ts-ignore
  return (
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View style={{backgroundColor:"white",borderRadius:20,padding:10,flexDirection:"row",alignItems:"center",shadowColor:"gray",shadowOpacity: 0.2,
        shadowOffset: {w:10,h:10}}}>
        <Ionicons name={"location"} color={"#FF9540"} size={15}/>
        <Text style={{marginHorizontal:10}}>深圳</Text>
        <AntDesign name={"right"}/>
      </View>
      <View style={{flexDirection:"row",alignItems:"center"}}>
        <View style={{justifyContent:"center",alignItems:"center",marginRight:10}}>
          <AntDesign name={"search1"}  color={"#FF9540"} size={18}/>
          <Text style={{fontWeight:"600",marginTop:5,fontSize:12}}>搜索</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",marginRight:10}}>
          <AntDesign name={"sharealt"}  color={"#FF9540"} size={18}/>
          <Text style={{fontWeight:"600",marginTop:5,fontSize:12}}>分享</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <FontAwesome name={"th-large"}  color={"#FF9540"} size={18}/>
          <Text style={{fontWeight:"600",marginTop:5,fontSize:12}}>MORE</Text>
        </View>
      </View>
    </View>
  )
}

function renderMyCircle(){
  return (
    <View style={{marginVertical:20}}>
      <Text style={{fontSize:20,fontWeight:"600"}}>我的圈子</Text>
      <View style={{alignItems:"center",paddingVertical:10,marginTop:20}}>
        <View style={{opacity:0.4}}>
          <Image source={require('./Imgs/quanzi.png')} style={{width:50,height:50,marginBottom:10}}/>
        </View>
        <Text style={{color:"gray"}}>你还没有加入圈子 <Text style={{color:"#FF9540"}}>去加入<AntDesign name={"right"}/></Text></Text>
      </View>
    </View>
  )
}

function useSelectedIndex(i:number){
  const [index, setIndex] = useState(i)
  return {index:index,setIndex:setIndex}
}

function renderBar(state, dispatch){
  let {selectedIndex} = state;
  return (
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <ScrollView style={{}} horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item,i)=>{
          let selected = selectedIndex === i
          return (
            <Button
              style={{marginRight:15}}
              onPress={()=>{
                dispatch({type:"setIndex",payload:{newIndex:i}})
              }}
            >
              <Text style={{fontSize:selected?20:18,color:selected?"black":"gray",fontWeight:selected?"600":"400"}}>{item.title}</Text>
            </Button>
          )
        })}

      </ScrollView>
      <View style={{paddingLeft:10,borderLeftWidth:2,borderLeftColor:"lightgray"}}>
        <AntDesign name={"caretdown"} size={18} color={"#FF9540"}/>
      </View>
    </View>
  )
}

function gameItem(item,index){
  return (
    <View key={index} style={{borderRadius:20,overflow:"hidden",shadowColor:"lightgray",shadowOpacity: 0.6,
      shadowOffset: {w:10,h:10}}}>
      <ImageBackground source={require(('./Imgs/test.jpg'))} style={{width:width-20,height:width-100,alignSelf:"center",marginVertical:10}} imageStyle={{borderRadius:20}} resizeMode={"cover"}>
        <BlurView blurType="regular" blurAmount={10} style={{flex:1,borderRadius:20,position:"absolute",top:0,left:0,bottom: 0,
          right: 0}}/>
        <View style={{flex:1,borderRadius:20,backgroundColor:"rgba(211,211,211,0.4)"}}>
          <View style={{flexDirection:"row",padding:15}}>
            <View source={require(('./Imgs/test.jpg'))} style={{width:60,height:60,borderRadius:10,backgroundColor:"white"}}/>
            <View style={{flex:0.8,paddingHorizontal:10,justifyContent:"space-around"}}>
              <Text style={{color:"white",fontSize:16,fontWeight:"500"}}>{item.title}</Text>
              <Text style={{color:"white"}} numberOfLines={1}>{item.desc}</Text>
            </View>
            <View style={{flex:0.2,alignItems:"flex-end",justifyContent:"center"}}>
              <Button style={{backgroundColor:"#FF9540",alignSelf:"center",padding:5,borderRadius:20,flexDirection:"row",alignItems:"center"}}>
                <AntDesign name={"plus"} size={12} color={"white"}/>
                <Text style={{color:"white",marginLeft:2,fontSize:12}}>加入</Text>
              </Button>
            </View>
          </View>

          <View style={{flex:1,justifyContent:"center",paddingLeft:15,paddingBottom:15}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{}}>
              {item.game &&item.game.length>0?item.game.map((item:any,index:number)=>{
                return(
                  <View style={{width:width-80,height:"100%",backgroundColor:"white",borderRadius:10,marginRight:20,justifyContent:"center",alignItems:"center"}}>
                    <Text>{index+1}</Text>
                  </View>
                )
              }):null}
              <View style={{backgroundColor:"#FFD5C0",justifyContent:"center",alignItems:"center",borderRadius:10,paddingHorizontal:20,marginRight:20}}>
                <Text style={{width:20,textAlign:"center",color:THEME_COLOR,lineHeight:25,fontWeight:"500"}}>查看更多</Text>
              </View>
            </ScrollView>
          </View>

        </View>
      </ImageBackground>
    </View>

  )
}

function ListHeader(state,dispatch){
  return (
    <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>
      {renderHeader()}
      {renderMyCircle()}
      {renderBar(state,dispatch)}
    </View>
  )
}

function RenderHoverBt({navigatioin}){
  let nav = useNavigation()
  return (
    <Button
      onPress={()=>nav.navigate("AddNew",{data:"lhz"})}
      style={{position:"absolute",borderWidth:2,borderColor:"white",backgroundColor:"#FF9540",width:50,height:50,borderRadius:25,bottom: 20,left: 20,justifyContent:"center",alignItems:"center",shadowColor:"gray",shadowOpacity: 0.2, shadowOffset: {w:10,h:10}}}>
      <AntDesign name={"plus"} size={20} color={"white"}/>
    </Button>
  )
}

function reducer(state:{},action:any) {
  switch (action.type) {
    case "setIndex":
      return {...state,selectedIndex:action.payload.newIndex}//reducer不会自动合并旧的state，所以要添加...state来合并
  }
}

function Loader(){
  return (
    <View>
      {/*<Facebook backgroundColor={'lightgray'}/>*/}
      {/*<ContentLoader viewBox="0 0 380 70" backgroundColor={"lightgray"}>*/}
        {/*<Circle cx="30" cy="30" r="30" />*/}
        {/*<Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />*/}
        {/*<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />*/}
        {/*<Rect x="80" y="60" rx="3" ry="3" width="250" height="10" />*/}
      {/*</ContentLoader>*/}
    </View>
  )
}

function MainPage(){
  const initialState = {
    selectedIndex:0,
    count:0
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  const [focustext, setfocustext] =useState("中国")
  const [text,settext] = useState("我是一个中国人,在中国有很多好吃的东西")
  console.warn(state);
 // @ts-ignore
  let datas = data[state.selectedIndex]?extraData[data[state.selectedIndex]["data"]]:[];
  const [AuthInfo,setAuthInfo] = useAtom(authInfo);
  console.warn("mainPage: ",AuthInfo);
  return (
    <PortalProvider>
      <SafeAreaView style={styles.container}>
        <PortalGate gateName={'jar'}/>

        {/*<View style={{}}>*/}
          {/*<HighLightText style={{fontSize:18}} focusValue={focustext} highlightStyle={{color:"red"}}>{text}</HighLightText>*/}
          {/*<HighLightText style={{fontSize:18}} focusValue={focustext} highlightStyle={{color:"red",fontWeight:"500"}}>{text}</HighLightText>*/}
        {/*</View>*/}
        <View style={{justifyContent:"center",alignItems:"center"}}>
          {/*<Shadow>*/}
            {/*<Text style={{ margin: 20, fontSize: 20 }}>hello</Text>*/}
          {/*</Shadow>*/}
        </View>

        <Text onPress={()=>setfocustext("好吃")} style={{padding:10,marginTop:20}}>testTarget</Text>
        <Text onPress={()=>settext("我爱中国，我的祖国")} style={{padding:10,marginTop:20}}>testText</Text>
        <Text onPress={()=>setCount(2)} style={{padding:10,marginTop:20}}>setCout</Text>
        {/*<StackSwiper/>*/}
        {/*<FlatList*/}
          {/*data={datas}*/}
          {/*renderItem={({item,index})=>gameItem(item,index)}*/}
          {/*ListHeaderComponent={()=>ListHeader(state,dispatch)}*/}
          {/*ListEmptyComponent={()=>{*/}
            {/*return (*/}
              {/*<View style={{height:height/2,justifyContent:"center",alignItems:"center"}}>*/}
                {/*<View style={{marginVertical:10,opacity:0.6}}>*/}
                  {/*<Image source={require('./Imgs/kong.png')} style={{width:100,height:100}}/>*/}
                {/*</View>*/}
                {/*<Text style={{color:"gray",fontSize:12}}>这里很空，等你搭台</Text>*/}
              {/*</View>*/}
            {/*)*/}
          {/*}}*/}
        {/*/>*/}
        {/*<FirstLoader/>*/}
        {/*<RenderHoverBt/>*/}
      </SafeAreaView>
    </PortalProvider>
  );
}

export default MainPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F9F8F9',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
