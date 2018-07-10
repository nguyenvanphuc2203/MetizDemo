import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    AlertIOS,
    ToastAndroid,
    Dimensions,
} from 'react-native';
import MetizNavigation from '../../../elements/metizNavigation';
import MetizContentScreen from '../../../elements/metizContentScreen';
import TabsLogin from './tabsLogin'
import MetizLoading from '../../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */



export default class BookingLogin extends Component {
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
                    title={'ĐĂNG NHẬP'}
                    actionButtonLeft={()=> Actions.pop()}
                    iconRight={<Icon name="md-share" size={30} color="red" />}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <TabsLogin/>
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
    
});