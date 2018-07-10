import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import CodeInput from 'react-native-code-input';
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

export default class ForgotPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            email:'',
            code:'',
            isHidePassword:true,
            isDisableButtonRegister:false,
            step1:true,
            step2:false,
            step3:false,
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    componentDidMount(){
        
    }
    _onFulfill(code){
        this.setState({code:code})
    }
    handleStep1(){
        this.setState({step1:false,step2:true,step3:false})
    }
    handleStep2(){
        this.setState({step1:false,step2:false,step3:true})
    }
    handleStep3(){

    }
    render(){
        return (
            <View style={style.container}>
                <MetizNavigation
                    title={'QUÊN MẬT KHẨU'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={()=>{}}
                />
                <MetizContentScreen>
                    {/* <!-- Submit Email forgot password --> */}
                    { this.state.step1 && 
                        <View style={style.main}>
                            <View style={style.alert}>
                                <Text style={style.alertText}>Vui lòng điền địa chỉ email của bạn để được nhận mã?</Text>
                            </View>
                            <View style={style.inputRow}>
                                <TextInput
                                    style={style.textInput}
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.text}
                                    underlineColorAndroid="transparent"
                                    placeholder="Email *"
                                />
                            </View>
                            <View style={style.inputRow}>
                                <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={this.handleStep1.bind(this)} style={style.loginButton}> 
                                    <Text style={style.loginButtonText}>GỬI MÃ XÁC NHẬN</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[style.inputRow,{flexDirection:'column',alignItems:'center',paddingTop:widthDevice/10}]}>
                                <TouchableOpacity onPress={this.handleStep1.bind(this)}>
                                <Text style={style.checkboxTextLine}>Tôi đã có mã xác nhận!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                    {/* <!-- verify code from email --> */}
                    { this.state.step2 && 
                        <View style={style.main}>
                            <View style={style.alert}>
                                <Text style={style.alertText}>Vui lòng nhập mã xác nhận!</Text>
                            </View>
                            <View style={style.inputRow}>
                                <CodeInput
                                    ref="codeInputRef1"
                                    // secureTextEntry
                                    borderType={'underline'}
                                    space={5}
                                    size={widthDevice/8}
                                    inputPosition='center'
                                    activeColor='red'
                                    inactiveColor='black'
                                    onFulfill={(code) => this._onFulfill(code)}
                                />
                            </View>
                            <View style={style.inputRow}>
                                <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={this.handleStep2.bind(this)} style={style.loginButton}> 
                                    <Text style={style.loginButtonText}>XÁC NHẬN!</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[style.inputRow,{flexDirection:'column',alignItems:'center',paddingTop:widthDevice/10}]}>
                                <TouchableOpacity onPress={()=>{  }}>
                                <Text style={style.checkboxTextLine}>Gửi lại mã xác nhận!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                    {/* <!-- change user password --> */}
                    { this.state.step3 && 
                        <View style={style.main}>
                            <View style={style.alert}>
                                <Text style={style.alertText}>Mật khẩu phải lớn hơn 8 kí tự, bao gồm kí tự HOA và số?</Text>
                            </View>
                            <View style={style.inputRow}>
                                <TextInput
                                    style={style.textInputPass}
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.text}
                                    secureTextEntry={this.state.isHidePassword}
                                    underlineColorAndroid="transparent"
                                    placeholder="Nhập mật khẩu! *"
                                />
                                <TouchableOpacity onPress={()=> this.setState({isHidePassword:!this.state.isHidePassword})} style={style.hiddenPass}>
                                    <Text > {this.state.isHidePassword ? <Icon name="ios-eye" size={widthDevice*0.06} color="#333" /> : <Icon name="ios-eye-off" size={widthDevice*0.06} color="#333" /> } </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={style.inputRow}>
                                <TextInput
                                    style={style.textInputPass}
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.text}
                                    secureTextEntry={this.state.isHidePassword}
                                    underlineColorAndroid="transparent"
                                    placeholder="Nhập lại mật khẩu! *"
                                />
                                <TouchableOpacity onPress={()=> this.setState({isHidePassword:!this.state.isHidePassword})} style={style.hiddenPass}>
                                    <Text > {this.state.isHidePassword ? <Icon name="ios-eye" size={widthDevice*0.06} color="#333" /> : <Icon name="ios-eye-off" size={widthDevice*0.06} color="#333" /> } </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={style.inputRow}>
                                <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{}} style={style.loginButton}> 
                                    <Text style={style.loginButtonText}>ĐỔI MẬT KHẨU</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
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
    },
    alert:{
        flexDirection:'column',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#009789',
        padding:30,
        marginVertical:4
    },
    alertText:{
        color:'#fff'
    },
    inputRow:{
        flexDirection:'row',
        marginHorizontal:30,
        marginVertical:4
    },
    textInput:{
        flex:1,
        backgroundColor:'#fff',
        height: widthDevice/10,
        paddingLeft:10, 
        borderRadius:5
    },
    textInputPass:{
        flex:9,
        backgroundColor:'#fff',
        height: widthDevice/10,
        paddingLeft:10, 
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5
    },
    hiddenPass:{
        flex:1,
        borderLeftColor:'#fff',
        borderLeftWidth:1,
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center', padding:5,
    },
    loginButton:{
        flex:1,
        borderRadius:5,
        height:widthDevice/10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    loginButtonText:{
        color:'#fff'
    },
    checkboxText:{
        fontSize:widthDevice*0.03,
        alignItems:'center',
        justifyContent:'center'
    },
    checkboxTextLine:{
        fontSize:widthDevice*0.03,
        textDecorationLine:'underline',
        color:'blue'
    }
});