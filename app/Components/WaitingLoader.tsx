import React from 'react'
import {View, Text} from 'react-native'
import ContentLoader, {Rect,Circle,Facebook} from 'react-content-loader/native'
/**viewBox : 左上角坐标x ,y 高, 宽**/
const FirstLoader = ()=>{
  return (
    <View style={{position: "relative",
      height: '100%',
      width: '100%',}}>
      <ContentLoader style={{position:'absolute',width:380,height:70}} viewBox="0 0 380 70" backgroundColor={"lightgray"}>
        <Circle x="0" y='0' cx="30" cy="30" r="30" />
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        <Rect x="80" y="60" rx="3" ry="3" width="50%" height="10" />
      </ContentLoader>
    </View>
  )
}

const SeecondLoader = () => {
  return (
    <View>
      <Text>second loader</Text>
    </View>
  )
}

export {
  FirstLoader,
  SeecondLoader
}
