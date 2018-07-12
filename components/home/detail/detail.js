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
            loading:false,
            playTrailer:false,
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    _toggleModalTrailer(){
        this.setState({ playTrailer: !this.state.playTrailer });
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
                        {/* <!-- button booking film --> */}
                        {/* <!-- section info film --> */}
                        <LinearGradient colors={['#473d82','#5e4f8b']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.infofilm}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Actions.BookingDetail({poster:this.props.navigation.state.params.poster}) } style={styles.bookingButton}> 
                                <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.bookingGradient}>
                                    <Text style={styles.trailerButtonText}>ĐẶT VÉ</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={styles.infofilmRow}>
                                <View style={styles.infofilmRowLeft}>
                                    <Text style={styles.text}>Diễn Viên: </Text>
                                </View>
                                <View style={styles.infofilmRowRight}>
                                    <Text style={styles.textdark}>Christoph Lauenstein, Wolfgang  </Text>
                                </View>
                            </View>
                            <View style={styles.infofilmRow}>
                                <View style={styles.infofilmRowLeft}>
                                    <Text style={styles.text}>Đạo Diễn: </Text>
                                </View>
                                <View style={styles.infofilmRowRight}>
                                    <Text style={styles.textdark}>Christine Parisse, Anders Mastrup, Emely Christians, Jean-Marie Musique </Text>
                                </View>
                            </View>
                            <View style={styles.infofilmRow}>
                                <View style={styles.infofilmRowLeft}>
                                    <Text style={styles.text}>Thể loại: </Text>
                                </View>
                                <View style={styles.infofilmRowRight}>
                                    <Text style={styles.textdark}>Hài Hước </Text>
                                </View>
                            </View>
                        </LinearGradient>
                        {/* <!-- section about film --> */}
                        <LinearGradient colors={['#0f1e2f','#0f1e2f']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.aboutfilm}>
                            

                        </LinearGradient>
                         
                    </ScrollView>
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
        justifyContent:'center',
        alignItems:'center'
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
        top:-20,
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
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingTop:40,
        paddingBottom:10,
    },
    aboutfilm:{
        height:widthDevice/2,
    },
    infofilmRow:{
        flex:5,
        flexDirection:'row',
    },
    infofilmRowLeft:{
        flex:3,
        alignItems:'flex-start'
    },
    infofilmRowRight:{
        flex:7,
        alignItems:'flex-start'
    },
    text:{
        fontSize:widthDevice*0.04,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Medium'
    },
    textdark:{
        fontSize:widthDevice*0.04,
        color:'#8b8b8b',
        fontFamily:'SairaSemiCondensed-Medium'
    },
});