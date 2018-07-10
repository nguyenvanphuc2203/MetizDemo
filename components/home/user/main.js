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
    Dimensions
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class MainLogin extends Component {
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
                    title={'ĐĂNG NHẬP'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={()=>{}}
                />
                <MetizContentScreen>
                    <View style={style.main}>
                        <View style={style.inputRow}>
                            <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{ Actions.Login() }} style={{flex:1,height:widthDevice/9,}}> 
                                <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.metizButton}>
                                    <Text style={style.registerButtonText}>TÀI KHOẢN METIZ</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={style.inputRow}>
                            <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{}} style={style.facebookButton}> 
                                <Text style={style.registerButtonText}>TÀI KHOẢN FACEBOOK</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[style.inputRow,{flexDirection:'column',alignItems:'center',paddingTop:widthDevice/5}]}>
                            <Text style={style.checkboxText}>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity onPress={()=>{ Actions.Register() }}>
                            <Text style={style.checkboxTextLine}>Đăng Ký TÀI KHOẢN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    { this.state.loading && <MetizLoading />}
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
        justifyContent:'center'
    },
    inputRow:{
        flexDirection:'row',
        marginHorizontal:15,
        marginVertical:4
    },
    facebookButton:{
        flex:1,
        borderRadius:widthDevice/18,
        height:widthDevice/9,
        backgroundColor:'rgb(31,93,224)',
        justifyContent:'center',
        alignItems:'center'
    },
    metizButton:{
        flex:1,
        borderRadius:widthDevice/18,
        height:widthDevice/9,
        justifyContent:'center',
        alignItems:'center'
    },
    registerButtonText:{
        color:'#fff',
        fontWeight:'bold'
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