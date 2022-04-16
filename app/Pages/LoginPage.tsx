/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, useEffect, useState, createContext, useContext, useCallback, useMemo} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,TextInput,Alert,Image,Dimensions} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native'

const initialState = {m:0,n:0};
const context = createContext({});



function Children() {
  let {state, setState} = useContext(context)
  return (
    <View>
      <Text  onPress={()=>setState({...state, m:state.m+1})} style={{color:"white",padding:10,backgroundColor:"green"}}>{state.m}</Text>
    </View>
  )
}

let a = 0;

function SubContent(){
	const [state, setState] = useState(initialState)
	a += 1
	return (
		<context.Provider value={{state,setState}}>
      <View style={{flex:1, backgroundColor:"gray"}}>
        <Children/>
      </View>
		</context.Provider>

	)
}



function Header(props:any) {
	const [id,setID] = useState(0)
	// console.log("header");
	useEffect(()=>{
		// console.log("header Effect")

		//effect可以返回一个函数在组件Umount时触发,类似class风格中的componentWillUmount
		//也可以理解是返回一个effect的清除函数，并且当effect重新时触发都会先调用这个清除函数
    let unmount = function () {
      console.log("header Unmount")
    }
    return unmount
	},[id]);
	return (
		<View style={{flexDirection:"row"}}>

		</View>
	)
}

function Content(props:any){
	useEffect(()=>{
		// console.log("content effect")
	})
	return (
		<View style={{flex:1,backgroundColor:"red"}}>
			<Text>content</Text>
		</View>
	)
}

/*
React.memo会返回一个纯化(purified)的组件MemoFuncComponent，
这个组件将会在JSX标记中渲染出来。当组件的参数props和状态state发生改变时，
React将会检查前一个状态和参数是否和下一个状态和参数是否相同
，如果相同，组件将不会被渲染，如果不同，组件将会被重新渲染。
class风格中可以让类继承React.PureComponent达到同样的效果
* */
const MemoText = React.memo((props)=>{
	// console.warn(props.target +'  momotext')//如果props没变化的话,函数都不会进来
  return <Text>122</Text>
})

//这里的props就是class的页面的this.props
function LoginPage(props:any) {
	const route = useRoute();
	const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
	useEffect(()=>{
		// console.log("effect 2:")
	})
  useEffect(() => {
    // Update the document title using the browser API
		// console.log("efffect1");
  },[count,num]);
  /*
  第二个控制参数可以控制effect（包括effect的清除函数）是否每次渲染都调用（但不会影响返回的umount函数的触发）,
  [x, y]表示只有x,y中有变化就触发,
  如果是[]的话就effect就变成了componentDidMount的作用
  一句话，有第二参数的有无（[]也是无）控制componentDidUpdate流程的有无
  * */

  const addCount = useCallback(()=>{
  	return (num:number) =>{
				setCount(count + 1)//1.这里count是外面的变量 所以形成了闭包 就算setCout了这里的count是不会变的
		}
	},[count])//2.但如果这里不是[]而是给一个会变的值，值变化时UseCallback就会重新构造函数，那就解决了上面的闭包问题

  const addNum = useCallback(()=>{
    console.warn('addNum Call',num)
    return (numer:number) =>{
      setNum(num + numer)
    }
  },[])
	/*
	useCallback是useMemo的语法糖
	useCallback可以创建重新渲染也不会重新创建的方法
	[x,y]表示只有x，y中有变化就重新创建
	[]即只会创建一次，所以如果有引用外部的变量，就会形成闭包，变量是不会变得
	* */

	const memoizedValue = useMemo(()=>{ return count+1},[count])
	console.warn(memoizedValue)
	return (
		<SafeAreaView style={{flex:1,backgroundColor:"white"}}>
			<Text>here:{memoizedValue}</Text>
      <MemoText value={"count"} target={"count--"}/>
      <Text onPress={()=>addCount()(2)} style={{fontWeight:"500",fontSize:20,backgroundColor:"lightgray",padding:10}}>{count} add count</Text>
			<Text onPress={()=>setCount(prevState => {
				return prevState + 1
			})} style={{fontWeight:"500",fontSize:20,backgroundColor:"gray",padding:10}}>{count} set count</Text>

      {/*<MemoText value={num} target={"num--"}/>*/}
			<Text onPress={()=>addNum()(2)} style={{fontWeight:"500",fontSize:20,backgroundColor:"lightgray",padding:10}}>{num} add num</Text>
      <Text onPress={()=>setNum(prevState => {
        return prevState + 1
      })} style={{fontWeight:"500",fontSize:20,backgroundColor:"gray",padding:10}}>{num} set num</Text>
			<Header/>
			<Content />
			<SubContent/>
		</SafeAreaView>
	)
}

export default LoginPage


