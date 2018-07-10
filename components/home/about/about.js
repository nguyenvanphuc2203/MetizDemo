import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
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
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class About extends Component {
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
                    title={'THÔNG TIN CHUNG'}
                    actionButtonLeft={()=> Actions.pop()}
                    iconRight={<Icon name="md-share" size={30} color="red" />}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <View style={style.main}>
                        <View style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Text >Giới thiệu </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#333" />
                            </View>
                            
                        </View>
                        <View style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Text >Chính sách & Điều khoản </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#333" />
                            </View>
                            
                        </View>
                        <View style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Text >Bảo mật </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#333" />
                            </View>
                            
                        </View>
                        <TouchableOpacity onPress={()=> Actions.AboutQuestions() } style={style.rowitem}>
                            <View style={style.itemleft}>
                                <Text >Câu hỏi thường gặp </Text>
                            </View>
                            <View style={style.itemright}>
                                <Icon name="ios-arrow-forward" size={30} color="#333" />
                            </View>
                        </TouchableOpacity>
                        <View style={style.contactitem}>
                            <View style={style.itemleft}>
                                <Text >Liên hệ </Text>
                            </View>
                        </View>
                        <View style={style.contactinfo}>
                            <View style={style.itemleft}>
                                <Text >Hotline </Text>
                            </View>
                            <View style={style.itemright}>
                                <Text >0928228282 </Text>
                            </View>
                        </View>
                        <View style={style.contactinfo}>
                            <View style={style.itemleft}>
                                <Text >Email</Text>
                            </View>
                            <View style={style.itemright}>
                                <Text >contact@metiz.vn </Text>
                            </View>
                        </View>
                    </View>
                </MetizContentScreen>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    main:{
        flexDirection:'column',
        marginTop:5,
        backgroundColor:'#fff'
    },
    itemleft:{
        flex:6,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:4,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        height:widthDevice*0.15,
        flexDirection:'row',
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#e9ebee'
    },
    contactitem:{
        height:widthDevice*0.17,
        flexDirection:'row',
        padding:10,
        borderTopWidth:1,
        backgroundColor:'#009789',
        borderTopColor:'#e9ebee'
    },
    contactinfo:{
        height:widthDevice*0.12,
        flexDirection:'row',
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#e9ebee'
    }
});