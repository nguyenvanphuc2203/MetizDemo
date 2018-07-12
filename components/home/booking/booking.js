import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Share, {ShareSheet, Button} from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
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

export default class BookingSeat extends Component {
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
                        {/* <!-- button booking film --> */}
                        <View style={styles.seatSection}>
                            <Text style={styles.text}> seat secction </Text>
                        </View>
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
                                            <Text style={styles.text}>Tên ghế đã chọn: </Text>
                                        </View>
                                        <View style={styles.resultRowRight}>
                                            <Text style={styles.text}>K2,J3 </Text>
                                        </View>
                                    </View>
                                    <View style={styles.resultRow}>
                                        <View style={styles.resultRowLeft}>
                                            <Text style={styles.text}>Tổng số tiền: </Text>
                                        </View>
                                        <View style={styles.resultRowRight}>
                                            <Text style={[styles.text,{color:'#f5ae3c'}]}>110.000 đ </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.nextButton}>
                                    <TouchableOpacity onPress={()=>{ Actions.BookingCombo() }} style={{flex:1,height:widthDevice/9,}}> 
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
      marginTop:(Platform.OS == 'ios') ? -70 : -70,
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
		marginBottom:23
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
    bookingGradient:{
        paddingHorizontal:widthDevice/3,
        borderRadius:widthDevice/18,
        height:widthDevice/10,
        justifyContent:'center',
        alignItems:'center',
    },
    bookingContainer:{
        height:heightDevice-(widthDevice/2)
    },
    seatSection:{
        justifyContent:'center',
        alignItems:'center',
        height:heightDevice/2
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