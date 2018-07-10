import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import MetizNavigation from '../../../elements/metizNavigation';
import MetizContentScreen from '../../../elements/metizContentScreen';
import MetizLoading from '../../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class Profile extends Component {
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
                    title={'THAY ĐỔI MẬT KHẨU'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <View style={style.main}>
                    <ScrollView >
                        <LinearGradient colors={['rgb(116,17,203)','rgb(37,117,252)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.info}>
                            <Image source={{uri:'https://i.imgur.com/DikeBdY.png'}} style={style.avatar} />
                            <Text style={style.textname}>PHAN VĂN QUÂN </Text>
                        </LinearGradient>

                        {/* <!-- Update password.. --> */}
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInput}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid="transparent"
                                placeholder="Mật khẩu cũ "
                                placeholderTextColor="rgb(224,228,233)"
                            />
                        </View>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInput}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid="transparent"
                                placeholder="Mật khẩu mới"
                                placeholderTextColor="rgb(224,228,233)"
                            />
                        </View>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInput}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid="transparent"
                                placeholder="Nhập lại mật khẩu mới"
                                placeholderTextColor="rgb(224,228,233)"
                            />
                        </View>
                        <View style={style.buttonRow}>
                            <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{  }} style={{flex:1,height:widthDevice/9,}}> 
                                <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.saveButton}>
                                    <Text style={style.saveButtonText}>LƯU LẠI</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor:'#0f1e2f'
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
        width:widthDevice,
        height:widthDevice*0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    itemleft:{
        flex:4,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemtext:{
        flex:8,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:6,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        marginHorizontal:15,
        height:widthDevice/9,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#162434'
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
    },
    textdark:{
        fontSize:widthDevice*0.04,
        color:'#8b8b8b',
        fontFamily:'SairaSemiCondensed-Medium'
    },
    inputRow:{
        flexDirection:'row',
        marginHorizontal:15,
        marginVertical:10,
        borderBottomColor:'rgb(255,120,54)',
        borderBottomWidth:1,
    },
    buttonRow:{
        marginVertical:10,
        flexDirection:'row',
        marginHorizontal:15,
    },
    textInput:{
        fontFamily:'SairaSemiCondensed-Medium',
        flex:1,
        backgroundColor:'transparent',
        height: widthDevice/9,
        paddingLeft:10,
        color : "rgb(224,228,233)"
    },
    saveButton:{
        flex:1,
        borderRadius:widthDevice/18,
        height:widthDevice/9,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    saveButtonText:{
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'SairaSemiCondensed-Medium',
    },
});