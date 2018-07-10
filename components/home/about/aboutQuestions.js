import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Accordion from 'react-native-collapsible/Accordion';
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

const SECTIONS = [
    {
        title: 'Ticket voucher là gì?',
        content: 'Mang Ticket Voucher đến trực tiếp tại quầy Ticket Box để đổi vé tương ứng với quy định của từng loại....'
    },
    {
        title: 'Tôi phải làm gì khi bị mất thẻ?',
        content: 'Mang Ticket Voucher đến trực tiếp tại quầy Ticket Box để đổi vé tương ứng với quy định của từng loại....'
    },
    {
        title: 'Điểm thưởng là gì?',
        content: 'Mang Ticket Voucher đến trực tiếp tại quầy Ticket Box để đổi vé tương ứng với quy định của từng loại....'
    },
    {
        title: 'Chi tiêu tích lũy là gì?',
        content: 'Mang Ticket Voucher đến trực tiếp tại quầy Ticket Box để đổi vé tương ứng với quy định của từng loại....'
    }
];

export default class AboutQuestions extends Component {
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
    
    _renderHeader(section) {
        return (
          <View style={style.header}>
            <View style={style.question}>
                <Text style={style.headerText}>{section.title}</Text>
            </View>
            <View style={style.arowIcon}>
                <Icon name="ios-arrow-forward" size={20} color="#333" />
            </View>
          </View>
        );
    }
    
    _renderContent(section) {
        return (
          <View style={style.content}>
            <Text>{section.content}</Text>
          </View>
        );
    }
    render(){
        return (
            <View style={style.container}>
                <MetizNavigation
                    title={'THÔNG TIN CHUNG'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <View style={style.main}>
                        <Accordion
                            style={style.Accordion}
                            sections={SECTIONS}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
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
    Accordion:{
        marginTop:3
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        flexDirection:'row',
    },
    question:{
        flex:9,
        alignItems:'flex-start'
    },
    arowIcon:{
        justifyContent:'center',
        flex:1,
        alignItems:'flex-end'
    },
    headerText: {
        fontSize: widthDevice*0.03,
        fontWeight: '500'
    },
    content: {
        padding: 10,
        backgroundColor: '#fff'
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)'
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)'
    },
});