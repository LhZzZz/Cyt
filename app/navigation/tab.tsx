import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native"
import {createBottomTabNavigator,useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import MainPage from '../MainPage'
import PreferPage from '../PreferPage'


const Tab = createBottomTabNavigator();

interface TabIconProps {
  title:string,
  selected?:boolean,
  style?:any
}

const TabIcon = (props:TabIconProps) =>{
  let {selected} = props
  return (
    <View style={{justifyContent:"center", alignItems:"center",marginTop:45}}>
      <Image source={require(('../Imgs/smile.png'))} resizeMode={"contain"} style={{width:20,height:20,tintColor:selected?"red":"green"}}/>
      <Text style={{color:selected?"red":"green"}}>{props.title}</Text>
    </View>
  )
}


const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel:false,
        safeAreaInsets:{top:0,bottom:0},
        style:{
          position:"absolute",
          bottom:25,left:20,right:20,borderRadius:25,
          backgroundColor:"white",
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen name={"Home"} component={MainPage} options={{
        tabBarIcon:({focused}) => (<View style={{backgroundColor:"green"}}><Text>Home</Text></View>)
      }}/>
      <Tab.Screen name={"Prefer"} component={PreferPage} options={{
        tabBarIcon:({focused}) => (<View style={{backgroundColor:"green"}}><Text>Me</Text></View>)
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:"red",
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.2,
    elevation: 5
  }
})

export default Tabs
