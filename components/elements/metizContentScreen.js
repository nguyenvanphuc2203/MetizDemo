import React , { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class MetizContentScreen extends Component{
    render(){
        return(
            <View style={[style.contentContainer,{backgroundColor:this.props.backgroundColor}]}>
                { this.props.children }
            </View>
        )
    }
}

const style = StyleSheet.create({
    contentContainer:{
        flex:1,
        backgroundColor:'#e9ebee',
        position:'relative'
    }
})