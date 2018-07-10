import React , { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text,
    Image,
    Platform
} from 'react-native';

export default class MetizLoading extends Component {
    render (){
        return (
            <View style={style.loading} pointerEvents="none" >
                <View style={style.indicator}>
                    <ActivityIndicator animating={true} size='large' color='red'/>
                    <View style={style.logo}>
                        <Image source={require('../libs/images/_logo.png')} style={style.image}/>
                    </View>
                </View>
                <Text style={style.text}> { this.props.content }</Text>
            </View>
        )
    }
}

MetizLoading.propTypes = {
    content: PropTypes.string,
};

MetizLoading.defaultProps = {
    content: 'Đang tải dữ liệu...'
};

const style = StyleSheet.create({
    loading: {
        position: 'absolute',
        opacity:1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(103,41,204,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:100
    },
    indicator:{
        backgroundColor:'#fff',
        paddingTop:Platform.OS == 'ios' ? 8 :5,
        paddingLeft:Platform.OS == 'ios' ? 8 :5,
        padding:5,
        borderRadius:5,
        marginBottom:4,
    },
    logo:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:Platform.OS == 'ios' ? 10 :15 ,
        height:Platform.OS == 'ios' ? 7 : 10
    },
    text:{
        fontSize:10,
        color:'#7f0f21'
    }
})