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
    RefreshControl,
    Dimensions,
    TextInput
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            refreshing:false,
            loading:false,
            password:'',
            text:'',
            isHidePassword:true,
            isDisableButtonRegister:false
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
                    title={'ĐĂNG NHẬP'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={()=>{}}
                    backgroundColor={'rgb(26,26,27)'}
                />
                <MetizContentScreen>
                    <View style={style.main}>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInput}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid="transparent"
                                placeholder="Email *"
                                placeholderTextColor="rgb(224,228,233)"
                            />
                        </View>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInputPass}
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={this.state.isHidePassword}
                                underlineColorAndroid="transparent"
                                placeholder="Nhập mật khẩu! *"
                                placeholderTextColor="rgb(224,228,233)"
                                
                            />
                            <TouchableOpacity onPress={()=> this.setState({isHidePassword:!this.state.isHidePassword})} style={style.hiddenPass}>
                                <Text > {this.state.isHidePassword ? <Icon name="ios-eye" size={widthDevice*0.06} color="rgb(192,192,192)" /> : <Icon name="ios-eye-off" size={widthDevice*0.06} color="rgb(192,192,192)" /> } </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.buttonRow}>
                            <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{ Actions.Login() }} style={{flex:1,height:widthDevice/9,}}> 
                                <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.loginButton}>
                                    <Text style={style.loginButtonText}>ĐĂNG NHẬP</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={[style.buttonRow,{flexDirection:'column',alignItems:'center',paddingTop:widthDevice/10}]}>
                            <Text style={style.checkboxText}>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity onPress={()=>{ Actions.Register() }}>
                            <Text style={style.checkboxTextLine}>Đăng Ký TÀI KHOẢN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[style.buttonRow,{flexDirection:'column',alignItems:'center',paddingTop:widthDevice/5}]}>
                            <TouchableOpacity onPress={()=>{ Actions.ForgotPassword() }}>
                            <Text style={style.checkboxTextLine}>QUÊN MẬT KHẨU</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </MetizContentScreen>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(26,26,27)'
    },
    inputRow:{
        flexDirection:'row',
        marginHorizontal:15,
        marginVertical:10,
        borderBottomColor:'rgb(255,120,54)',
        borderBottomWidth:1,
    },
    buttonRow:{
        flexDirection:'row',
        marginHorizontal:15,
    },
    textInput:{
        flex:1,
        backgroundColor:'transparent',
        height: widthDevice/9,
        paddingLeft:10,
        color : "rgb(224,228,233)"
    },
    textInputPass:{
        flex:9,
        backgroundColor:'transparent',
        height: widthDevice/9,
        paddingLeft:10,
        color : "rgb(224,228,233)"

    },
    hiddenPass:{
        flex:1,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center', padding:5,
    },
    loginButton:{
        flex:1,
        borderRadius:widthDevice/18,
        height:widthDevice/9,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    loginButtonText:{
        color:'#fff',
        fontWeight:'bold'
    },
    checkboxText:{
        fontSize:widthDevice*0.03,
        alignItems:'center',
        justifyContent:'center',
        color:'#fff'
    },
    checkboxTextLine:{
        fontSize:widthDevice*0.03,
        textDecorationLine:'underline',
        color:'rgb(255,120,54)',
        fontWeight:'bold'
    }
});