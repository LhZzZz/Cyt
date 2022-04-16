import * as React from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground,Dimensions, TextInput, SafeAreaView, ScrollView} from 'react-native';
import PortalGate from './PortalGate'
import {useState} from "react";
const { width, height } = Dimensions.get('window');


function MyRemind(props) {
  const [showModal,setShowModal] = useState(true)
  if (showModal){
    return (
      <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', width: width, height: height,position:"absolute",zIndex:1,justifyContent:"center",alignItems:"center" }}>
          <View style={{backgroundColor:"white",padding:20,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontWeight:"500",fontSize:20,marginBottom:20}}>提示</Text>
              <Text style={{color:"gray"}}>实名认证可以创建更多圈子哦</Text>
              <View style={{backgroundColor:"#FF9540",width:200,borderRadius:20,paddingVertical:10,alignItems:"center",marginVertical:20}}>
                <Text style={{color:"white"}}>去认证</Text>
              </View>
            <Text  style={{color:"gray"}} onPress={()=>props.hide&&props.hide()}>再说吧</Text>
          </View>
      </View>
    )
  } else return null

}
export default MyRemind
