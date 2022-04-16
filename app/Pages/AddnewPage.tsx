
import * as React from 'react'
import {Text, View, VirtualizedList, StyleSheet, SafeAreaView} from 'react-native';
import {authInfo,authToken,TokenMananger} from '../store'
import {useAtom} from "jotai";

const DATA:any[] = [];
const getItem = (data, index) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  }
}

const getItemCount = (data) => {
  return 50;
}
const Item = ({ title })=> {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


const subContent = (props:Object) =>{
  return <Text>{}</Text>
}

const AddNewPage = (props:Object)=>{
  const [AuthInfo,setAuthInfo] = useAtom(authInfo);
  const [token,setToken] = useAtom(TokenMananger)
  console.warn(token);
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{marginVertical:20,padding:10}} onPress={()=>{
        //set可以获取到前一次的状态,和useState一样其实
        setAuthInfo((x)=>{console.warn("X: ",x); return {name:x.name+ "lhz"}})
      }}>
        用户登录
      </Text>
      <Text style={{marginVertical:20,padding:10}} onPress={()=>setAuthInfo({})}>
        退出登录
      </Text>

      <Text onPress={()=>setToken("123123123123123")} style={{marginVertical:20,padding:10}}>token:{token}</Text>
      {/*<VirtualizedList*/}
        {/*data={DATA}*/}
        {/*initialNumToRender={4}*/}
        {/*renderItem={({ item }) => <Item title={item.title} />}*/}
        {/*keyExtractor={item => item.id}*/}
        {/*getItemCount={getItemCount}*/}
        {/*getItem={getItem}*/}
      {/*/>*/}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default AddNewPage
