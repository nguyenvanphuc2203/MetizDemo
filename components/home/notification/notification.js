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
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class Notification extends Component {
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
                    title={'THÔNG BÁO'}
                    actionButtonLeft={()=> Actions.pop()}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <LinearGradient colors={['#364983','#624e8c' ]} start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={style.gradient}>
                        <ScrollView >
                            <TouchableOpacity onPress={()=>{ Actions.EditProfile() }} style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Icon name="ios-paper" size={25} color="#007dff" />
                                </View>
                                <View style={style.itemtext}>
                                    <Text style={style.text}>Thông tin tài khoản </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </LinearGradient>
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
    gradient:{
        flex:1
    },
    itemleft:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemtext:{
        flex:8,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        height:widthDevice/4,
        flexDirection:'row',
        padding:10,
        marginTop:1,
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
    }
});