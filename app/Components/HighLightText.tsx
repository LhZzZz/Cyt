import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import {text} from "stream/consumers";

interface TextProps {
  highlight?:boolean,
  focusValue?:string,
  highlightStyle?:Text.propTypes.style,
  [propsName:string]:any,
}


const TargetText = () =>{
  return (
    <Text>

    </Text>
  )
}

function findText(targetText:string,focusText:string):Array<string>{
  let res: string[] = [];
  let filtedTextArr = targetText.split(focusText)
  let showedTime = filtedTextArr.length - 1
  // for (let i=0;i<showedTime;i++){
  //
  // }
  // let target = targetText.indexOf(focusText)
  // console.warn(targetText,' ',target,' ',targetText.substring(target,target + focusText.length))
  // console.warn(targetText)
  // while (target!== -1){
  //
  // }
  // while (targetText.indexOf(focusText))
  // console.warn(showedTime," ",filtedTextArr)
  return filtedTextArr
}


const HighLightText = React.memo((props:TextProps)=>{
  // const []
  let {focusValue,highlightStyle,highlight} = props
  const initialData:string[] = []
  const [textData,setTextData] = useState(initialData);
  useEffect(async () => {
    if (props && props.children && focusValue){
      let text = props.children.toString()
      let res = findText(text,focusValue)
      console.warn(focusValue,res);
      setTextData(res)
    }
  },[focusValue,props.children,highlight]);
  return (
    <Text style={{...props.style}}>
      {textData&&textData.length>0?
        textData.map((text,index)=>{
          return (
            <Text key={text}>
              {text}
              {index<textData.length-1?
                <Text  style={{...highlightStyle}}>{focusValue}</Text>:null
              }
            </Text>
          )
        }):props.children
      }
    </Text>
  )
})

export default HighLightText
