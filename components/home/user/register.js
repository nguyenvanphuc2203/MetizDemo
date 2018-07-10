import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import DateTimePicker from 'react-native-modal-datetime-picker';

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
    TextInput,
    Dimensions
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

const formatDate = (d) => {
    var yyyy = d.getFullYear().toString();
    var mm = (d.getMonth() + 101).toString().slice(-2);
    var dd = (d.getDate() + 100).toString().slice(-2);
    return dd +'-'+ mm +'-'+ yyyy ;
}


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAlert:false,
            alert:'',
            loading:false,
            isDateTimePickerVisible: false,
            isHidePassword:true,
            isHideConfirmPassword:true,
            isDisableButtonRegister:false,
            items: [
                {
                    label: 'Hà nội',
                    value: 'HN',
                },
                {
                    label: 'Đà nẵng',
                    value: 'DN',
                },
                {
                    label: 'Hồ chí minh',
                    value: 'HCM',
                },
            ],
            // value register
            name:'',
            dateOfBirth:'',
            gender:'',
            email:'',
            passport:'',
            phone:'',
            city:'Hà Nội',
            password:'',
            repassword:'',
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    // <!-- checkbox gender -->
    onSelect(index, value){
        this.setState({
          gender: value
        })
    }
    // <! -- datetime Picker -->
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({dateOfBirth:formatDate(date)});
        this._hideDateTimePicker();
    };
    // <!-- verify input -->
    verifyInputName(name){
        if (name.split("").length >= 10)
            return true;
        else 
            return false;
    }
    verifyInputDate(date){
        if (date.split("").length >= 10)
            return true;
        else 
            return false;
    }
    verifyInputEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(String(email).toLowerCase()) ) 
            return true;
        else
            return false;
    }
    verifyInputPassport(passport){
        var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if ( phoneRe.test(passport) ) 
            return true;
        else
            return false;
    }
    verifyInputPhone(phone){
        var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if ( phoneRe.test(phone) ) 
            return true;
        else
            return false;
    }
    verifyInputPassword(password){
        var count = 0;
        password.split("").map(letter => {
            if(/[A-Z]/.test(letter)) count++;
            if(/[0-9]/.test(letter)) count++;
            // if (/[!@#$&*]/.test(letter)) count++;
        })
        if ( count > 0 && password.split("").length > 8 ) 
            return true;
        else
            return false;
    }
    verifyInputRePassword(repassword){
        if ( repassword == this.state.password )
            return true
        else
            return false
    }
    // alert verify
    onpenAlertVerify(notification){
        this.setState({isAlert:true,alert:notification})
    }
    closeAlertVerrify(){
        this.setState({isAlert:false,alert:''})
    }
    // <!-- register button submit -->
    register(){
        if ( this.state.name == '' || this.state.dateOfBirth == '' || this.state.email == '' || 
            this.state.passport == '' || this.state.phone == '' || this.state.password == '' || 
            this.state.repassword == '' )
            this.onpenAlertVerify('Vui lòng điền đầy đủ thông tin bắt buộc!')
        else{
            if ( this.verifyInputPassword(this.state.password) )
                if ( this.verifyInputRePassword(this.state.repassword) )
                    this.setState({loading:true})
                else this.onpenAlertVerify('Mật khẩu không khớp!...')
            else  this.onpenAlertVerify('Mật Khẩu phải chứa 8 kí tự Chữ hoa và số!...')
        }
    }
    
    render(){
        return (
            <View style={style.container}>
                <MetizNavigation
                    title={'ĐĂNG KÝ'}
                    actionButtonLeft={()=> Actions.pop()}
                />
                <MetizContentScreen backgroundColor='#e9ebee'>
                    { this.state.isAlert && 
                        <View style={style.alert}>
                            <Text style={style.alertText}>{this.state.alert}</Text>
                            <TouchableOpacity onPress={()=> this.closeAlertVerrify() } style={style.alertClose}>
                                <Icon name="ios-close-circle" size={widthDevice*0.05} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    }
                    <ScrollView>
                        <View style={[style.inputRow,{marginTop:8}]}>
                            <View style={{flex:1}}>
                                <TextInput
                                    style={style.textInput}
                                    onChangeText={(name) =>{
                                        if ( this.verifyInputName(name) ) this.setState({name:name})
                                        else this.setState({name:''})
                                    } }
                                    underlineColorAndroid="transparent"
                                    placeholder="Họ và tên *"
                                />
                                { this.state.name != '' && 
                                    <View style={style.verifyIcon}>
                                        <Icon name="ios-checkmark-circle" size={widthDevice*0.06} color="#009789" />
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={style.inputRow}>
                            <View style={{flex:6}}>
                                <TextInput
                                    style={style.textInput}
                                    onChangeText={(dateOfBirth) => {
                                        if ( this.verifyInputDate(dateOfBirth) ) this.setState({dateOfBirth:dateOfBirth})
                                        else this.setState({dateOfBirth:''})
                                    }}
                                    value={this.state.dateOfBirth}
                                    underlineColorAndroid="transparent"
                                    placeholder="Ngày sinh *"
                                    onTouchStart={this._showDateTimePicker}
                                />
                                { this.state.dateOfBirth != '' && 
                                    <View style={style.verifyIcon}>
                                        <Icon name="ios-checkmark-circle" size={widthDevice*0.06} color="#009789" />
                                    </View>
                                }
                            </View>
                            <View style={style.gender}>
                                <RadioGroup
                                    size={widthDevice*0.04}
                                    thickness={2}
                                    color='#009789'
                                    selectedIndex={0}
                                    onSelect = {(index, value) => this.onSelect(index, value)}
                                    style={{flexDirection:'row'}}
                                >
                                    <RadioButton value={'Nam'} >
                                        <Text>Nam</Text>
                                    </RadioButton>

                                    <RadioButton value={'Nu'}>
                                        <Text>Nữ</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                            <DateTimePicker
                                datePickerModeAndroid={'spinner'}
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                titleIOS='Chọn ngày sinh!'
                                confirmTextIOS='Xác nhận'
                                cancelTextIOS='Hủy'
                            />
                        </View>
                        <View style={style.inputRow}>
                            <View style={{flex:1}}>
                                <TextInput
                                    style={style.textInput}
                                    onChangeText={(email) => {
                                        if ( this.verifyInputEmail(email) ) this.setState({email:email})
                                        else this.setState({email:''})
                                    }}
                                    underlineColorAndroid="transparent"
                                    placeholder="Email *"
                                />
                                { this.state.email != '' && 
                                    <View style={style.verifyIcon}>
                                        <Icon name="ios-checkmark-circle" size={widthDevice*0.06} color="#009789" />
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={style.inputRow}>
                            <View style={{flex:1}}>
                                <TextInput
                                    style={style.textInput}
                                    onChangeText={(passport) => {
                                        if ( this.verifyInputPassport(passport) ) this.setState({passport:passport})
                                        else this.setState({passport:''})
                                    }}
                                    underlineColorAndroid="transparent"
                                    placeholder="Số CMND "
                                    keyboardType="numeric"
                                />
                                { this.state.passport != '' && 
                                    <View style={style.verifyIcon}>
                                        <Icon name="ios-checkmark-circle" size={widthDevice*0.06} color="#009789" />
                                    </View>
                                }
                            </View>
                            
                        </View>
                        <View style={style.inputRow}>
                            <View style={{flex:1}}>
                                <TextInput
                                    style={style.textInput}
                                    onChangeText={(phone) => {
                                        if ( this.verifyInputPhone(phone) ) this.setState({phone:phone})
                                        else this.setState({phone:''})
                                    }}
                                    underlineColorAndroid="transparent"
                                    placeholder="Số điện thoại *"
                                    keyboardType="numeric"
                                />
                                { this.state.phone != '' && 
                                    <View style={style.verifyIcon}>
                                        <Icon name="ios-checkmark-circle" size={widthDevice*0.06} color="#009789" />
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInputPass}
                                onChangeText={(password) => { this.setState({password:password}) }}
                                secureTextEntry={this.state.isHidePassword}
                                underlineColorAndroid="transparent"
                                placeholder="Nhập mật khẩu! *"
                            />
                            <TouchableOpacity onPress={()=> this.setState({isHidePassword:!this.state.isHidePassword})} style={style.hiddenPass}>
                                <Text > 
                                { this.state.isHidePassword ? 
                                    <Icon name="ios-eye" size={widthDevice*0.06} color="#333"/> : 
                                    <Icon name="ios-eye-off" size={widthDevice*0.06} color="#333" /> 
                                } 
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInputPass}
                                onChangeText={(repassword) => { this.setState({repassword:repassword}) }}
                                secureTextEntry={this.state.isHidePassword}
                                underlineColorAndroid="transparent"
                                placeholder="Nhập lại mật khẩu! *"
                            />
                            <TouchableOpacity onPress={()=> this.setState({isHidePassword:!this.state.isHidePassword})} style={style.hiddenPass}>
                                <Text > {this.state.isHidePassword ? <Icon name="ios-eye" size={widthDevice*0.06} color="#333" /> : <Icon name="ios-eye-off" size={widthDevice*0.06} color="#333" /> } </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.inputRow}>
                            <RNPickerSelect
                                items={this.state.items}
                                placeholder={{
                                    label: 'Thành Phố...',
                                    value: null,
                                }}
                                onValueChange={(value) => {
                                    this.setState({
                                        city: value,
                                    });
                                }}
                                style={{ ...pickerSelectStyles }}
                            />
                        </View>
                        <View style={style.inputRow}>
                            <RNPickerSelect
                                items={this.state.items}
                                placeholder={{
                                    label: 'Quận...',
                                    value: null,
                                }}
                                onValueChange={(value) => {
                                    this.setState({
                                        thanhpho: value,
                                    });
                                }}
                                style={{ ...pickerSelectStyles }}
                            />
                        </View>
                        <View style={style.inputRow}>
                            <TextInput
                                style={style.textInput}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid="transparent"
                                placeholder="Địa chỉ..."
                            />
                        </View>
                        <View style={[style.inputRow,{flexDirection:'column',alignItems:'center'}]}>
                            <Text style={style.checkboxText}>Tôi đã đọc hiểu, và đồng ý với các</Text>
                            <Text style={style.checkboxTextLine}>Điều kiện, điều khoản!</Text>
                        </View>
                        <View style={style.inputRow}>
                            <TouchableOpacity disabled={this.state.isDisableButtonRegister} onPress={this.register.bind(this)} style={style.registerButton}> 
                                <Text style={style.registerButtonText}>ĐĂNG KÝ</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    { this.state.loading && <MetizLoading content='vui lòng chờ...'/>}
                </MetizContentScreen>
                
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputRow:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:4
    },
    textInput:{
        flex:1,
        backgroundColor:'#fff',
        height: widthDevice/10,
        paddingLeft:10, 
        borderRadius:5
    },
    textInputDate:{
        flex:6,
        backgroundColor:'#fff',
        height: widthDevice/10,
        paddingLeft:10, 
        borderRadius:5
    },
    gender:{
        flex:4
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
    registerButton:{
        flex:1,
        borderRadius:5,
        height:widthDevice/10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    registerButtonText:{
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
        color:'#009789'
    },
    verifyIcon:{
        position:'absolute',
        right:10,
        top:widthDevice/45
    },
    alert:{
        flexDirection:'row',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#009789',
        padding:15,
        marginVertical:4
    },
    alertText:{
        flex:9,
        color:'#fff'
    },
    alertClose:{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: widthDevice*0.036,
        height:widthDevice/10,
        width:widthDevice-20,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
		fontSize: widthDevice*0.036,
        height:widthDevice/10,
        width:widthDevice-20,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black',
        borderBottomWidth:0
    },
    underline: { borderTopWidth: 0 },
});