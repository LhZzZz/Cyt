import Carousel from 'react-native-snap-carousel';
import {View, Text, Dimensions} from "react-native";
import React, {Component,useState, useEffect} from 'react';
const { width, height } = Dimensions.get('window');


function RenderItem(data:any) {
  let {item,index} = data
  return (
    <View style={{backgroundColor:"red",height:200,justifyContent:"center",alignItems:"center"}}>
      <Text>{index}</Text>
    </View>
  )
}

function StackSwiper(){
  const entries = [1,2,3,4]
  return (
    <View style={{flex:1}}>
      <Carousel
        data={entries}
        layout={'tinder'}
        renderItem={RenderItem}
        sliderWidth={width}
        layoutCardOffset={5}
        itemWidth={width-20}
      />
      <Carousel
        data={entries}
        layout={'stack'}
        renderItem={RenderItem}
        sliderWidth={width}
        layoutCardOffset={5}
        itemWidth={width-20}
      />
    </View>
  )
}

export default StackSwiper
