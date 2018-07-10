import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Dimensions,
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

/**
 * Tab slide film 
 * config transaction effect when screens 
 */
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            password:'',
            isHidePassword:true
        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <View style={style.loginContainer}>
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
                    <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{}} style={style.loginButton}> 
                        <Text style={style.loginButtonText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class Customer extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            password:'',
            isHidePassword:true
        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <View style={style.loginContainer}>
                <View style={[style.inputRow,{marginTop:8}]}>
                    <TextInput
                        style={style.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.text}
                        underlineColorAndroid="transparent"
                        placeholder="Họ và tên *"
                    />
                
                </View>
                <View style={style.inputRow}>
                    <TextInput
                        style={style.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.text}
                        underlineColorAndroid="transparent"
                        placeholder="Số điện thoại *"
                        keyboardType="numeric"
                    />
                
                </View>
                <View style={style.inputRow}>
                    <TextInput
                        style={style.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.text}
                        underlineColorAndroid="transparent"
                        placeholder="Email "
                    />
                </View>
                <View style={[style.inputRow,{flexDirection:'column',alignItems:'center'}]}>
                    <Text style={style.checkboxText}>Tôi đã đọc hiểu, và đồng ý với các</Text>
                    <Text style={style.checkboxTextLine}>Điều kiện, điều khoản!</Text>
                </View>
                <View style={style.inputRow}>
                    <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={()=>{}} style={style.loginButton}> 
                        <Text style={style.loginButtonText}>XÁC NHẬN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    loginContainer:{
        paddingTop:widthDevice/16
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
})

export default createMaterialTopTabNavigator({
    'Đăng nhập': { screen:Login},
    'Khách': { screen:Customer}
},
{
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor:'#333',
        activeTabStyle: {
            color:"#333",
            backgroundColor: '#fff',
        },
        tabStyle: {
            height: widthDevice/12,
            padding:0,
            
        },
        labelStyle: {
            fontSize: widthDevice * 0.03,

        },
        style: {
            backgroundColor: '#e9ebee',
        },
    },
    swipeEnabled:false,
    tabBarPosition: 'top'
});
