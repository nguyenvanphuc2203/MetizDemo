import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Share, {ShareSheet, Button} from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from 'react-native-numeric-input'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    AlertIOS,
    ToastAndroid,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class BookingCombo extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    componentDidMount(){
        
    }
    render(){
        return (
            <LinearGradient colors={['#4b4476','#2c5776' ]}  style={styles.container}>
                <MetizContentScreen>
                    <ScrollView 
                        ref='_scrollView' 
                        stickyHeaderIndices={[0]}
                        >
                        <MetizNavigation
                            title={''}
                            actionButtonLeft={()=> Actions.pop()}
                            backgroundColor={'transparent'}
                        />

                        {/* <!-- scroll header info film --> */}
                        <View style={styles.headerInfo}>
                            <Image source={{uri:'https://i.imgur.com/eMWZzCP.jpg'}} style={styles.poster} />
                            <LinearGradient colors={['rgba(0,0,0,0)','#080508' ]}  style={styles.headerGradient}></LinearGradient>
                            <View style={styles.information}>
                                <View style={styles.titlefilm}>
                                    <Text style={styles.titletext}>Tòa tháp chọc trời </Text>
                                </View>
                                <View style={styles.showtime}>
                                    <Text style={styles.titletext}>20:30 </Text>
                                </View>
                            </View>
                        </View>
                        {/* <!-- combo list section--> */}
                        <View style={styles.comboSection}>
                            <ScrollView>
                                <View  style={{flex:1}}>
                                    <View style={styles.comboThumbnail}>
                                        <Image
                                            style={{width:widthDevice/4,height:widthDevice/4,borderRadius:5}}
                                            source={{uri:'https://i.imgur.com/wZCe4si.png'}}
                                        />
                                    </View>
                                    <View style={styles.containerBoxCombo}>
                                        <View style={styles.headCombo}>
                                            <View style={styles.infoCombo}>
                                                <Text style={styles.comboName}>COMBO BẮP NƯỚC LỚN </Text>
                                                <Text style={[styles.comboPrice,{color:'#ff7737'}]}>55.000đ </Text>
                                                <View style={styles.comboInputNumber}>
                                                <NumericInput 
                                                    value={this.state.value} 
                                                    onChange={value => this.setState({value})} 
                                                    totalWidth={widthDevice/4} 
                                                    totalHeight={widthDevice/14} 
                                                    iconSize={25}
                                                    step={1}
                                                    minValue={0}
                                                    maxValue={10}
                                                    valueType='integer'
                                                    rounded 
                                                    textColor='#B0228C' 
                                                    borderColor='#fff'
                                                    iconStyle={{ color: 'white' }} 
                                                    rightButtonBackgroundColor='#ff7737' 
                                                    leftButtonBackgroundColor='#ff7737'/>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        {/* <!-- result choose combo --> */}
                        <View style={styles.resultSection}>
                            <View style={styles.resultSectionContainer}>
                                <View style={styles.seattype}>
                                    {/* <Text style={styles.text}>Đã chọn </Text>
                                    <Text style={styles.text}>Đang chọn </Text>
                                    <Text style={styles.text}>Ghế thường </Text>
                                    <Text style={styles.text}>Ghế Đôi </Text> */}
                                </View>
                                <View style={styles.resultBooking}>
                                    <View style={styles.resultRow}>
                                        <View style={styles.resultRowLeft}>
                                            <Text style={styles.text}>Số ghế đã chọn: </Text>
                                        </View>
                                        <View style={styles.resultRowRight}>
                                            <Text style={styles.text}>2 </Text>
                                        </View>
                                    </View>
                                    <View style={styles.resultRow}>
                                        <View style={styles.resultRowLeft}>
                                            <Text style={styles.text}>Tên Combo chọn: </Text>
                                        </View>
                                        <View style={styles.resultRowRight}>
                                            <Text style={styles.text}>Đại tiệc bắp ( 2 combo ) </Text>
                                        </View>
                                    </View>
                                    <View style={styles.resultRow}>
                                        <View style={styles.resultRowLeft}>
                                            <Text style={styles.text}>Tổng số tiền: </Text>
                                        </View>
                                        <View style={styles.resultRowRight}>
                                            <Text style={[styles.text,{color:'#f5ae3c'}]}>220.000 đ </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.nextButton}>
                                    <TouchableOpacity onPress={()=>{ Actions.BookingCoupon() }} style={{flex:1,height:widthDevice/9,}}> 
                                        <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.Button}>
                                            <Text style={styles.ButtonText}>TIẾP TỤC</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </MetizContentScreen>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#0f1e2f'
    },
    headerInfo: {
      height:heightDevice/4,
      backgroundColor:'#e9ebee',
      marginTop:(Platform.OS === 'ios') ? -70 : -70,
    },
    headerGradient:{
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        zIndex:10
    },
    poster:{
		width:widthDevice,
		height:heightDevice/4,
    },
    information:{
        height:widthDevice/4,
        flexDirection:'row',
        position:'absolute',
        justifyContent:'center',
        bottom:0,
        right:0,
        left:0,
        zIndex:20,
        paddingHorizontal:20
    },
    titlefilm:{
        flex:8,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    showtime:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    titletext:{
        color:'#fff',
        fontSize:widthDevice*0.05,
        fontFamily:'SairaSemiCondensed-Bold',
    },
    showtimetext:{
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Bold',
    },
    comboSection:{
        height:heightDevice/2
    },
    containerBoxCombo:{
        height:heightDevice/8,
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
		marginTop:widthDevice/11
	},
    comboThumbnail:{
		position:'absolute',
		top:10,
		left:20,
		zIndex:10,
		elevation: 3,
	},
	comboName:{
        flex:1,
        justifyContent:'center',
		fontFamily:"SairaSemiCondensed-Bold",
		paddingLeft:widthDevice/3.5
	},
	comboPrice:{
        flex:1,
        justifyContent:'center',
        fontFamily:"SairaSemiCondensed-Medium",
		paddingLeft:widthDevice/3.5,
    },
    comboInputNumber:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    headCombo:{
		flex:2,
		alignItems:'center',
		padding:7,
		flexDirection:'row',
		height:widthDevice/4.5,
		overflow:'visible'
	},
	infoCombo:{
		flex:7,
		paddingHorizontal:5,
		flexDirection:'column'
	},
    resultSection:{
        height:heightDevice/4
    },
    resultSectionContainer:{
        flex:1,
        flexDirection:'column',
    },
    seattype:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    resultBooking:{
        flex:5,
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal:20,
        paddingVertical:5,
        borderTopWidth:1,
        borderTopColor:'#3e6681'
    },
    resultRow:{
        flex:3,
        flexDirection:'row',
    },
    resultRowLeft:{
        flex:5,
        alignItems:'flex-start'
    },
    resultRowRight:{
        flex:5,
        alignItems:'flex-end'
    },
    nextButton:{
        flex:3,
        paddingHorizontal:20,
        paddingVertical:10,
    },
    text:{
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Medium',
    },
    Button:{
        flex:1,
        borderRadius:widthDevice/18,
        height:widthDevice/9,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonText:{
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'SairaSemiCondensed-Medium',
    },
});