import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Share, {ShareSheet, Button} from 'react-native-share';
import GridView from 'react-native-super-grid';
import ImageResizer from 'react-native-image-resizer';
import { getNextDateFormat,getNextDayDetail } from '../../functions/functions';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    AlertIOS,
    ToastAndroid,
    WebView,
    ScrollView,
    Image,
    RefreshControl,
    Dimensions
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import MetizLoading from '../../elements/metizLoading';
import MetizShareSheet from '../../elements/share/metizShareSheet';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateActive:[ 
                { day:0,active:true },
                { day:1,active:false },
                { day:2,active:false },
                { day:3,active:false },
                { day:4,active:false },
                { day:5,active:false },
                { day:6,active:false },
            ],
            showtimes:[],
            visible_sharesheet: false,
            modalTrailerVisible: false,
            refreshing:false,
            loading:false
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    _toggleModalTrailer(){
        this.setState({ modalTrailerVisible: !this.state.modalTrailerVisible });
    }
    onCancelShareSheet() {
        console.log("CANCEL")
        this.setState({visible_sharesheet:false});
      }
    onOpenShareSheet() {
        console.log("OPEN")
        this.setState({visible_sharesheet:true});
    }
    componentDidMount(){
        this.setState({loading:true})
        setTimeout(()=>{
            this.setState({loading:false})
        },2000);
        this.getShowtimeByDate(0)
    }
    getShowtimeByDate(day){
        this.state.dateActive.map((item,index) =>{
            if ( index == day ) item.active = true;
            else item.active = false;
        })
        this.setState({dateActive:this.state.dateActive,loading:true})
        let url = 'http://172.16.12.13:8080/Helio.asmx/getShowTimes?Secret=5ba90f1cc2d540edbb01e3ffc85bc7f2&id_Movie=a9cbcb9e-a353-4168-a8ff-405164ca1776&id_MovieTheater=0&id_Area=0&id_Server=1&Date='+getNextDateFormat(day);
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
            // set data from api to data 
                this.setState({showtimes:responseJson.List,loading:false});
            })
        .catch((error) => {
          console.error(error);
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <MetizContentScreen>
                    <ScrollView 
                        refreshControl={
                            <RefreshControl
                            refreshing={this.state.refreshing}
                            // onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                        ref='_scrollView' 
                        stickyHeaderIndices={[0]}
                        >
                        <MetizNavigation
                            title={''}
                            actionButtonLeft={()=> Actions.pop()}
                            iconRight={<Icon name="md-share" size={30} color="#fff" />}
                            actionButtonRight={ this.onOpenShareSheet.bind(this)}
                            backgroundColor={'transparent'}
                        />

                        {/* <!-- scroll header info film --> */}
                        <View style={styles.headerInfo}>
                            <Image source={{uri:this.props.navigation.state.params.poster}} style={styles.poster} />
                            <LinearGradient colors={['rgba(0,0,0,0)','#000' ]}  style={styles.headerGradient}></LinearGradient>
                            <View style={styles.information}>
                                <View style={styles.titlefilm}>
                                    <Text style={styles.titlefilmtext}>Luis và nhóm bạn ngoài hành tinh</Text>
                                </View>
                                <View style={styles.contentfilm}>
                                    <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name="ios-clock-outline" size={30} color="#fff" />
                                        <Text style={styles.datetext}>Thời lượng</Text>
                                        <Text style={styles.datetext}>120 Phút</Text>
                                    </View>
                                    <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name="ios-calendar-outline" size={30} color="#fff" />
                                        <Text style={styles.datetext}>Khởi chiếu</Text>
                                        <Text style={styles.datetext}>30/07/2018</Text>
                                    </View>
                                    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
                                        <TouchableOpacity activeOpacity={1} onPress={()=> this._toggleModalTrailer() } style={{height:widthDevice/10,}}> 
                                            <LinearGradient colors={['#473d82','#5e4f8b' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.trailerButton}>
                                                <Text style={styles.trailerButtonText}>Xem Trailer</Text>
                                                <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.trailerIcon}>
                                                    <Icon name="ios-play" size={20} color="#fff" />
                                                </LinearGradient>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* <!-- button booking film --> */}
                        <View style={styles.bookingButtonContainer}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Actions.BookingDetail({poster:this.props.navigation.state.params.poster}) } style={styles.bookingButton}> 
                                <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.bookingGradient}>
                                    <Text style={styles.trailerButtonText}>ĐẶT VÉ</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        
                        {/* <!-- section about film --> */}
                        <LinearGradient colors={['#0f1e2f','#0f1e2f']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.aboutfilm}>

                        </LinearGradient>
                         {/* <!-- section info film --> */}
                         <LinearGradient colors={['#473d82','#5e4f8b']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.infofilm}>

                        </LinearGradient>
                    </ScrollView>
                </MetizContentScreen>
                {/* <!-- modal trailer film --> */}
                <Modal isVisible={this.state.modalTrailerVisible}>
                    <View style={{justifyContent:'center',alignContent:'center',height:widthDevice/2 }}>
                        <WebView
                            javaScriptEnabled={true}
                            source={{ uri:'https://www.youtube.com/embed/Wv28i3zwABI?rel=0&amp;showinfo=0'}} />
                        <TouchableOpacity  onPress={()=> this._toggleModalTrailer() } style={{height:widthDevice/10,}}> 
                            <LinearGradient colors={['#473d82','#5e4f8b' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.closetrailerButton}>
                                <Text style={styles.trailerButtonText}>Hủy</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>
                {/* <!-- share sheet --> */}
                <ShareSheet visible={this.state.visible_sharesheet} onCancel={this.onCancelShareSheet.bind(this)}>
                    <MetizShareSheet 
                        shareUrl={'http://metiz.vn'}
                        onCancel={this.onCancelShareSheet.bind(this)}
                    />
                </ShareSheet>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#0f1e2f'
    },
    headerInfo: {
      height:widthDevice*1.47,
      backgroundColor:'#e9ebee',
      marginTop:(Platform.OS === 'ios') ? -70 : -50,
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
		height:widthDevice*1.47,
		marginBottom:23
    },
    information:{
        height:widthDevice/2,
        flexDirection:'column',
        position:'absolute',
        bottom:0,
        zIndex:20,
        paddingHorizontal:5
    },
    titlefilm:{
        flex:2,
        justifyContent:'center'
    },
    titlefilmtext:{
        paddingHorizontal:20,
        fontSize:widthDevice*0.06,
		color:'#fff',
		fontFamily:'SairaSemiCondensed-Bold'
    },
    contentfilm:{
        flex:8,
        flexDirection:'row',
    },
    bookingButton:{
        height:widthDevice/8,
        alignItems:'center',
        position:'absolute',
        zIndex:100,
        bottom:0,
    },
    bookingGradient:{
        paddingHorizontal:widthDevice/3,
        borderRadius:widthDevice/18,
        height:widthDevice/10,
        justifyContent:'center',
        alignItems:'center',
    },
    bookingButtonContainer:{
        marginTop:-10,
        marginBottom:5,
        alignItems:'center',
        height:widthDevice/10,
    },
    trailerButton:{
        paddingLeft:7,
        borderRadius:widthDevice/18,
        height:widthDevice/10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    closetrailerButton:{
        paddingLeft:7,
        height:widthDevice/10,
        justifyContent:'center',
        alignItems:'center',
    },
    trailerIcon:{
        width:widthDevice/10,
        borderRadius:widthDevice/20,
        height:widthDevice/10,
        justifyContent:'center',
        alignItems:'center',
    },
    trailerButtonText:{
        marginHorizontal:5,
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'SairaSemiCondensed-Bold'
    },
    infofilm:{
        height:widthDevice/2,
    },
    aboutfilm:{
        height:widthDevice/2,
    },
    time:{
        flex:1.5,
        height:widthDevice/8,
        paddingVertical:8,
        flexDirection:'row',
        backgroundColor:'#333'
    },
    timeItem:{
        flex:1,
        flexDirection:'column',
        margin:1,
        alignItems:'center',
        justifyContent:'center'
    },
    day:{
        flex:1,
    },
    daytext:{
		color:'#fff',
		fontFamily:'SairaSemiCondensed-Medium'
	},
	date:{
		flex:1,
		width:'50%',
		height:'50%',
		backgroundColor:'black',
		borderRadius:25,
		justifyContent:'center',
		alignItems:'center'
	},
	datetext:{
		color:'#fff',
		fontFamily:'SairaSemiCondensed-Bold'
	},
	active:{
		backgroundColor:'rgb(248,163,17)',
	},
    show:{
        flex:8.5,
    },
    showitem:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4,backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    showtimetext:{
        fontFamily:'SairaSemiCondensed-Medium'
    },
    nocontent:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:10,top:0,bottom:0,right:0,left:0
    }
});