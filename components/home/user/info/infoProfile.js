import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Clipboard,
    Platform,
    AlertIOS,
    ToastAndroid,
    WebView,
    ScrollView,
    Image,
    Dimensions,
    RefreshControl,
} from 'react-native';
import MetizNavigation from '../../../elements/metizNavigation';
import MetizContentScreen from '../../../elements/metizContentScreen';
import MetizLoading from '../../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class InfoProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible_sharesheet: false,
            refreshing:false,
            loading:false
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    componentDidMount(){
        
    }
    render(){
        return (
            <View style={style.container}>
                <MetizNavigation
                    title={'TÀI KHOẢN CỦA TÔI'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <View style={style.main}>
                    <ScrollView>
                        <LinearGradient colors={['rgb(116,17,203)','rgb(37,117,252)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.info}>
                            <Image source={{uri:'https://i.imgur.com/DikeBdY.png'}} style={style.avatar} />
                            <Text style={style.textname}>PHAN VĂN QUÂN </Text>
                        </LinearGradient>
                        <TouchableOpacity onPress={()=>{ Actions.EditProfile() }} style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Icon name="ios-paper" size={25} color="#007dff" />
                            </View>
                            <View style={style.itemtext}>
                                <Text style={style.text}>Thông tin tài khoản </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ Actions.ChangePassword() }} style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Icon name="ios-settings" size={25} color="#ff7400" />
                            </View>
                            <View style={style.itemtext}>
                                <Text style={style.text}>Đổi mật khẩu </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ Actions.MemberCard() }} style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Icon name="md-card" size={25} color="#7aac1d" />
                            </View>
                            <View style={style.itemtext}>
                                <Text style={style.text}>Thẻ thành viên </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ Actions.TransactionHistory() }} style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Icon name="md-swap" size={25} color="#8071ff" />
                            </View>
                            <View style={style.itemtext}>
                                <Text style={style.text}>lịch sử giao dịch </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ Actions.GiftCard() }} style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Icon name="ios-images" size={25} color="#bd34e0" />
                            </View>
                            <View style={style.itemtext}>
                                <Text style={style.text}>Thẻ quà tặng </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                </MetizContentScreen>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0e1944'
    },
    main:{
        flexDirection:'column',
    },
    avatar:{
        borderRadius:widthDevice*0.1,
        width:widthDevice*0.2,
        height:widthDevice*0.2,
    },
    info:{
        height:widthDevice*0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    itemleft:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemtext:{
        flex:8,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        height:widthDevice/6,
        flexDirection:'row',
        padding:10,
        marginTop:1,
        backgroundColor:'#2e2a50'
    },
    textname:{
        marginTop:10,
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Bold'
    },
    text:{
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Medium'
    }
    
});