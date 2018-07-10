import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Accordion from 'react-native-collapsible/Accordion';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Clipboard,
    ToastAndroid,
    AlertIOS,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import MetizNavigation from '../../../elements/metizNavigation';
import MetizContentScreen from '../../../elements/metizContentScreen';
import MetizLoading from '../../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */


export default class GiftCard extends Component {
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
    coppyCodeToClipboard(){
        Clipboard.setString('Metiz020920920')
        if (Platform.OS === "android") {
            ToastAndroid.show('Coppied', ToastAndroid.SHORT);
        } else if (Platform.OS === "ios") {
            AlertIOS.alert('Coppied');
        }
    }
    render(){
        return (
            <View style={style.container}>
                <MetizNavigation
                    title={'THẺ QUÀ TẶNG'}
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

                        {/* <!-- Coupon list... --> */}
                        <Accordion
                            style={style.Accordion}
                            sections={[1]}
                            renderHeader={()=>{
                                return (
                                    <View style={style.header}>
                                      <View style={style.question}>
                                          <Text style={style.headerText}>COUPON</Text>
                                      </View>
                                      <View style={style.arowIcon}>
                                          <Icon name="ios-arrow-down" size={20} color="#fff" />
                                      </View>
                                    </View>
                                  );
                            }}
                            renderContent={()=>{
                                return (
                                    <View style={{flex:1}}>
                                        <View style={style.content}>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Mã COUPON:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <TouchableOpacity onPress={()=> this.coppyCodeToClipboard() } style={style.copyClipboard}>
                                                        <Icon name="md-copy" size={20} color="#0f1e2f" />
                                                        <Text style={[style.textdark,{color:'#5ed422'}]}> MT928282z</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Nội dung:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <Text style={style.textdark}>Giảm giá 100% </Text>
                                                </View>
                                            </View>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Ngày hết hạn:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <Text style={style.textdark}>28/07/2018! </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                  );
                            }}
                        />
                        {/* <!-- Gift card list... --> */}
                        <Accordion
                            style={style.Accordion}
                            sections={[1]}
                            initiallyActiveSection={0}
                            renderHeader={()=>{
                                return (
                                    <View style={style.header}>
                                      <View style={style.question}>
                                          <Text style={style.headerText}>GIFT CARD</Text>
                                      </View>
                                      <View style={style.arowIcon}>
                                          <Icon name="ios-arrow-down" size={20} color="#fff" />
                                      </View>
                                    </View>
                                  );
                            }}
                            renderContent={()=>{
                                return (
                                    <View style={{flex:1}}>
                                        <View style={style.content}>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Mã Voucher:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <TouchableOpacity onPress={()=> this.coppyCodeToClipboard() } style={style.copyClipboard}>
                                                        <Icon name="md-copy" size={20} color="#0f1e2f" />
                                                        <Text style={[style.textdark,{color:'#5ed422'}]}> MT928282z</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Nội dung:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <Text style={style.textdark}>Giảm giá 50% </Text>
                                                </View>
                                            </View>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Ngày hết hạn:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <Text style={style.textdark}>28/07/2018! </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={style.content}>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Mã Voucher:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <TouchableOpacity onPress={()=> this.coppyCodeToClipboard() } style={style.copyClipboard}>
                                                        <Icon name="md-copy" size={20} color="#0f1e2f" />
                                                        <Text style={[style.textdark,{color:'#5ed422'}]}> MT928282z</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Nội dung:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <Text style={style.textdark}>Giảm giá 50% </Text>
                                                </View>
                                            </View>
                                            <View style={style.rowitem}>
                                                <View style={style.itemleft}>
                                                    <Text style={style.text}>Ngày hết hạn:</Text>
                                                </View>
                                                <View style={style.itemright}>
                                                    <Text style={style.textdark}>28/07/2018! </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                  );
                            }}
                        />
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
    itemtext:{
        flex:8,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    copyClipboard:{
        flexDirection:'row',
    },
    itemright:{
        flex:6,
        alignItems:'flex-end',
        justifyContent:'center',
    },
    rowitem:{
        marginHorizontal:15,
        height:widthDevice/12,
        flexDirection:'row',
    },
    textname:{
        marginTop:10,
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Bold'
    },
    text:{
        fontSize:widthDevice*0.04,
        color:'#333',
        fontFamily:'SairaSemiCondensed-Medium'
    },
    textdark:{
        fontSize:widthDevice*0.04,
        color:'#8b8b8b',
        fontFamily:'SairaSemiCondensed-Medium'
    },
    header: {
        marginTop:3,
        backgroundColor: '#2e2a50',
        justifyContent:'center',
        flexDirection:'row',
        height:widthDevice/6,
        paddingHorizontal:10
    },
    question:{
        flex:9,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    arowIcon:{
        justifyContent:'center',
        flex:1,
        alignItems:'flex-end'
    },
    headerText: {
        color:'#fff',
        fontSize: widthDevice*0.03,
        fontWeight: '500'
    },
    content: {
        margin: 10,
        padding:10,
        borderRadius:5,
        backgroundColor:'#fff'
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)'
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)'
    },
});