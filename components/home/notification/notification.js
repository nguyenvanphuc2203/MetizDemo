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
                            <TouchableOpacity onPress={()=>{  }} style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Image source={{uri:'https://i.imgur.com/DikeBdY.png'}} style={style.thumbnail} />
                                </View>
                                <View style={style.itemtext}>
                                    <Text style={style.text}>Bạn vừa nhận được 100 điểm thưởng </Text>
                                    <Text style={style.textdate}>28/04/1997 </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#d8d8d8" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{  }} style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Image source={{uri:'https://i.imgur.com/3lsxy4c.png'}} style={style.thumbnail} />
                                </View>
                                <View style={style.itemtext}>
                                    <Text style={style.text}>Khuyến mãi đồng giá 45k </Text>
                                    <Text style={style.textdate}>25/04/1997 </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#d8d8d8" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{  }} style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Image source={{uri:'https://i.imgur.com/DikeBdY.png'}} style={style.thumbnail} />
                                </View>
                                <View style={style.itemtext}>
                                    <Text style={style.text}>Khai trương rạp meti mới! </Text>
                                    <Text style={style.textdate}>28/04/1997 </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#d8d8d8" />
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
        flex:2,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemtext:{
        flex:7,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        height:widthDevice/5,
        flexDirection:'row',
        padding:10,
        marginTop:1,
        borderBottomWidth:2,
        borderBottomColor:'#484d7f',
        borderBottomWidth:2,
        borderBottomColor:'#484d7f'
    },
    thumbnail:{
        width:widthDevice*0.15,
        height:widthDevice*0.15,
        borderRadius:5
    },
    text:{
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Medium'
    },
    textdate:{
        fontSize:widthDevice*0.035,
        color:'#6e6da2',
        fontFamily:'SairaSemiCondensed-Medium'
    },
});