import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * define default navbar component
 * use with props 
 */

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class MetizNavigation extends Component {
    render(){
        return (
            <View style={[style.nav_container,{backgroundColor:this.props.backgroundColor}]}>
                <StatusBar barStyle="light-content"/>
                <TouchableOpacity onPress={()=>{ this.props.actionButtonLeft() }} style={style.nav_back} >
                    { this.props.iconLeft }
                </TouchableOpacity>
                <View style={style.nav_title}>
                    <Text numberOfLines={1} style={style.titletext}>{ this.props.title.toUpperCase() }</Text>
                </View>
                <TouchableOpacity style={style.nav_menu} onPress={ ()=>this.props.actionButtonRight() }>
                    { this.props.iconRight }
                </TouchableOpacity>
            </View>
        )
    }
}

MetizNavigation.defaultProps = {
    backgroundColor: '#0e1944',
    title: "Metiz Title",
    actionButtonLeft: ()=>{ alert('action back') },
    actionButtonRight: ()=>{ alert('action right') },
    iconLeft: <Icon name="ios-arrow-round-back" size={40} color="#fff" />,
    iconRight: null
}

MetizNavigation.propTypes = {
    title : PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    actionButtonLeft : PropTypes.func.isRequired,
    actionButtonRight : PropTypes.func.isRequired,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element
};

const style = StyleSheet.create({
    nav_container:{
        paddingTop: (Platform.OS == 'ios') ? 20 : 0,
        height:(Platform.OS == 'ios') ? 70 : 50,
        flexDirection:"row",
        justifyContent:'center',
    },
    nav_back:{
        flex:1,
        paddingLeft:4,
        justifyContent:'center',
        alignItems:'center'
    },
    nav_title:{
        flex:7,
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    titletext:{
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Bold'
    },
    subTitle:{
        fontSize:10,
    },
    nav_menu:{
        flex:1,
        paddingLeft:4,
        justifyContent:'center',
        alignItems:'center'
    },
})