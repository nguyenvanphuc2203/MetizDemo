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
                    <LinearGradient colors={['#494576','#2c5776']} style={{flex:1}}>
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
                                        <Text style={styles.text}>Thời lượng</Text>
                                        <Text style={styles.text}>120 Phút</Text>
                                    </View>
                                    <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name="ios-calendar-outline" size={30} color="#fff" />
                                        <Text style={styles.text}>Khởi chiếu</Text>
                                        <Text style={styles.text}>30/07/2018</Text>
                                    </View>
                                    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
                                        <TouchableOpacity activeOpacity={1} onPress={()=> Actions.PlayTrailer() } style={{height:widthDevice/10,}}> 
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
                        <View style={styles.showtimes}>
                            {/* <!-- showtime menu day --> */}
                            <LinearGradient colors={['#473d82','#5e4f8b']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.time}>
                            {this.state.dateActive.map( item => 
                                <TouchableOpacity key={item.day} onPress={()=> this.getShowtimeByDate(item.day) } style={styles.timeItem}>
                                    <View style={styles.day}><Text style={styles.daytext}>{getNextDayDetail(item.day)}</Text></View>
                                    <View style={[styles.date, item.active && styles.active]}>
                                        <Text style={styles.datetext}>{getNextDateFormat(item.day).slice(3,5)}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            </LinearGradient>
                            {/* <!-- showtimes grid --> */}
                            <View  style={styles.show}>
                                {   
                                    this.state.showtimes.length == 0 &&
                                    <View style={styles.nocontent}>
                                        <Text style={styles.daytext}>Không có suất chiếu!</Text>
                                    </View>
                                }
                                    <GridView
                                        itemDimension={widthDevice/5}
                                        items={this.state.showtimes}
                                        renderItem={(item,index) => 
                                            <TouchableOpacity 
                                                onPress={ ()=>{ } }
                                                style={styles.showitem}>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={styles.showtimetext}>{item.TIME}</Text> 
                                                    <Text style={styles.showtimetext}>ROOM {item.ROOM_NAME}</Text>  
                                                </View>
                                            </TouchableOpacity> 
                                        }
                                    />
                                { this.state.loading && <MetizLoading/>}
                            </View>
                        </View>
                    </ScrollView>
                    </LinearGradient>
                </MetizContentScreen>
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
        height:widthDevice*0.6,
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
        width:'100%',
        height:'100%',
        marginBottom:23
    },
    information:{
        height:heightDevice/5,
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
    showtimes:{
        height:heightDevice/3*2
    },
    time:{
        height:widthDevice/5.5,
        paddingVertical:8,
        flexDirection:'row',
        backgroundColor:'#333'
    },
    text:{
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Medium'
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
        height:heightDevice/4
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
        fontFamily:'SairaSemiCondensed-Medium',
        fontSize:widthDevice*0.04
    },
    nocontent:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:10,top:0,bottom:0,right:0,left:0
    }
});