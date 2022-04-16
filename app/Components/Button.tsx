'use strict';

import React, { Component } from 'react'
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native'
import MyRemind from './MyRemind'
import wrapWithTeleport from './wrapWithTeleport'

class Button extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(): void {
  }

  render(){
    const { teleport, remove } = this.props;
    const handleOnPress = () => {
    	if (teleport){
        teleport(['jar'], <MyRemind hide={remove}/>);
			}else {
    		console.warn('error')
			}
    }
		return Platform.OS === 'ios'?(
			<TouchableOpacity onPress={handleOnPress} activeOpacity={0.6} {...this.props}>{this.props.children}</TouchableOpacity>
		):(
			<TouchableOpacity activeOpacity={0.6} {...this.props} disable={this.props.disable} >{this.props.children}</TouchableOpacity>
		)
		// <View {...this.props}><TouchableOpacity disable={this.props.disable} onPress={this.props.onPress}>{this.props.children}</TouchableOpacity></View>
	}
}

export default wrapWithTeleport(Button)
