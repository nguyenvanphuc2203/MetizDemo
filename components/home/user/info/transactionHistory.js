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
import MetizNavigation from '../../../elements/metizNavigation';
import MetizContentScreen from '../../../elements/metizContentScreen';
import MetizLoading from '../../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class TransactionHistory extends Component {
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
                    title={'LỊCH SỬ GIAO DỊCH'}
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

                        {/* <!-- Transaction history --> */}
                        <View  style={style.boxFilm}>
                            <View style={style.poster}>
                                <Image
                                    style={{width:widthDevice/4,height:widthDevice/3,borderRadius:5}}
                                    source={{uri:'https://image.tmdb.org/t/p/w500/x1txcDXkcM65gl7w20PwYSxAYah.jpg'}}
                                />
                            </View>
                            <View style={style.containerboxfilm}>
                                <View style={style.headbox}>
                                        
                                    <View style={style.infofilm}>
                                        <Text style={style.moviesname}>NGƯỜI KIẾN VÀ NGƯỜI ONG (C16) </Text>
                                        <Text style={style.moviesdes}>Thời lượng 120 - cấm trẻ dưới 16 tuổi </Text>
                                    </View>
                                </View>
                                <View style={style.boxshowtime}>
                                    <View style={{flex:1}}>
                                        <View style={style.rowitem}>
                                            <View style={style.itemleft}>
                                                <Text style={style.text}>Ngày:</Text>
                                            </View>
                                            <View style={style.itemright}>
                                                <Text style={style.textdark}>28/07/2018 </Text>
                                            </View>
                                        </View>
                                        <View style={style.rowitem}>
                                            <View style={style.itemleft}>
                                                <Text style={style.text}>Mã đặt vé:</Text>
                                            </View>
                                            <View style={style.itemright}>
                                                <Text style={style.textdark}>METIZ0927223 </Text>
                                            </View>
                                        </View>
                                        <View style={style.rowitem}>
                                            <View style={style.itemleft}>
                                                <Text style={style.text}>Trạng thái:</Text>
                                            </View>
                                            <View style={style.itemright}>
                                                <Text style={[style.textdark,{color:'#5ed422'}]}>Đặt vé thành công! </Text>
                                            </View>
                                        </View>
                                        <View style={style.rowitem}>
                                            <View style={style.itemleft}>
                                                <Text style={style.text}>Suất chiếu:</Text>
                                            </View>
                                            <View style={style.itemright}>
                                                <Text style={style.textdark}>19:30 </Text>
                                            </View>
                                        </View>
                                        <View style={style.rowitem}>
                                            <View style={style.itemleft}>
                                                <Text style={style.text}>Số ghế:</Text>
                                            </View>
                                            <View style={style.itemright}>
                                                <Text style={style.textdark}>K10, K11 </Text>
                                            </View>
                                        </View>
                                        <View style={style.rowitem}>
                                            <View style={style.itemleft}>
                                                <Text style={style.text}>Chi phí:</Text>
                                            </View>
                                            <View style={style.itemright}>
                                                <Text style={[style.textdark,{color:'#f5ae3c'}]}>120.000đ </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
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
    itemleft:{
        flex:4,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemtext:{
        flex:8,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:6,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        marginHorizontal:15,
        height:widthDevice/14,
        flexDirection:'row',
    },
    boxFilm:{
		flex:1
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
	containerboxfilm:{
        flex:1,
		flexDirection:'column',
		borderRadius:5,
		marginHorizontal:10,
		backgroundColor:'#fff',
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
		overflow:'visible',
		elevation: 2,
		marginTop:widthDevice/7
	},
	headbox:{
		flex:2,
		alignItems:'center',
		padding:7,
		flexDirection:'row',
		height:widthDevice/4.5,
		overflow:'visible'
	},
	poster:{
		position:'absolute',
		top:10,
		left:20,
		zIndex:10,
		elevation: 3,
	},
	moviesname:{
		marginTop:5,
		fontFamily:"SairaSemiCondensed-Bold",
		fontSize:widthDevice*0.035,
		paddingLeft:widthDevice/3.5
	},
	moviesdes:{
		marginTop:5,
		fontFamily:"SairaSemiCondensed-Medium",
		fontSize:widthDevice*0.035,
		paddingLeft:widthDevice/3.5,
		fontSize:12
	},
	infofilm:{
		flex:7,
		paddingHorizontal:5,
		flexDirection:'column'
	},
	timetext:{
		fontFamily:"SairaSemiCondensed-Medium",
	},
	boxshowtime:{flex:8},
	time:{
		flexDirection:'column',
		height:widthDevice/6,
		paddingVertical:8,
		backgroundColor:'#333'
	},
	timeItem:{
		flex:1,
		flexDirection:'column',
		margin:1,
		alignItems:'center',
		justifyContent:'center'
	},
});