import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from 'react-native-drawer';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    RefreshControl
} from 'react-native';
import MetizNavigation from '../elements/metizNavigation';
import MetizContentScreen from '../elements/metizContentScreen';
import ControlPanel from '../menu/controlPanel';
import MetizLoading from '../elements/metizLoading';
import SlideFilm from './tabsFilm/showing';
import PromotionsHome from './promotions/promotions';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            refreshing:false,
            activeShowing:true,
            activeComming:false
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    closeControlPanel = () => {
        // close drawer menu
        this._drawer.close()
    };
    openControlPanel = () => {
        // open drawer menu
        this._drawer.open()
    };
    componentDidMount(){
        this.setState({loading:true})
        setTimeout(()=>{
            this.setState({loading:false})
        },2000)
        setTimeout(()=>{
            SplashScreen.hide();
        },500)
    }
    _onRefresh() {
        this.setState({refreshing: true,loading:true});
        setTimeout(()=>{
          this.render()
          console.log(this.state)
          this.setState({refreshing: false,loading:false});
        },1000)
    }
    render(){
        return (
            <Drawer
                type="overlay"
                side="left"  
                tapToClose={true}
                openDrawerOffset={0.2}
                ref={(ref) => this._drawer = ref}
                content={<ControlPanel onClosePanel={this.closeControlPanel.bind(this)}/>}
                >
                    <View style={style.container}>
                        <MetizNavigation
                            title="Metiz Cinema"
                            actionButtonLeft={this.openControlPanel}
                            iconLeft={<Icon name="ios-menu" size={40} color="#fff" />}
                            iconRight={
                                <View style={style.bellNotification}>
                                    <View style={style.badgeView}>
                                        <Text style={style.badge}> 2 </Text>
                                    </View>
                                    <Icon name="ios-notifications-outline" size={35} color="#fff" />
                                </View>
                            }
                            actionButtonRight={()=>{Actions.Notification()}}
                        />
                        <MetizContentScreen>
                            <LinearGradient colors={['#984eeb','#2c5776' ]} style={style.loginButton}>
                            <ScrollView 
                                refreshControl={
                                    <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh.bind(this)}
                                    />
                                }
                                ref='_scrollView' 
                                stickyHeaderIndices={[0]}
                                >
                                    {/* <!-- Tab Movies --> */}
                                    <View style={style.tab}>
                                        <View style={style.tabcontainer}>
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                onPress={()=>{
                                                    this.setState({activeShowing:!this.state.activeShowing,activeComming:!this.state.activeComming});
                                                    this.refs._scrollView.scrollTo(0);
                                                }} 
                                                style={[style.showing, this.state.activeShowing && style.activateTab]} >
                                                <Text style={style.text}>ĐANG CHIẾU</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity 
                                                activeOpacity={1}
                                                onPress={()=>{
                                                    this.setState({activeShowing:!this.state.activeShowing,activeComming:!this.state.activeComming});
                                                    this.refs._scrollView.scrollTo(0);
                                                }} 
                                                style={[style.showing, this.state.activeComming && style.activateTab]} >
                                                <Text style={style.text}>SẮP CHIẾU</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {/* <!-- Slide Movies --> */}
                                    <View style={style.movies}>
                                        <SlideFilm/>
                                        { this.state.loading && <MetizLoading content="Đang tải phim..."/> }   
                                    </View>
                                    {/* <!-- Tin tức & Khuyến mãi --> */}
                                        <View style={style.hot}>
                                            <View style={style.hotrow}>
                                            <View style={style.hottext}>
                                                <Text style={style.text}>TIN TỨC & KHUYẾN MÃI</Text>
                                            </View>
                                            <TouchableOpacity onPress={()=> {}} style={style.hotall}>
                                                <View style={style.hotallButton}>
                                                    <Text style={style.text}> Tất cả  </Text>
                                                </View>
                                            </TouchableOpacity>
                                            </View>
                                        </View>
                                        {/* <!-- Danh sách Tin tức & Khuyến mãi  --> */}
                                        <View style={style.hotlist}>
                                            <PromotionsHome/>
                                        </View>
                            </ScrollView>
                            </LinearGradient>
                        </MetizContentScreen>
                    </View>
            </Drawer>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#2e2a50'
    },
    home: {
        flex:1,
    },
    bellNotification:{
        position:'relative',
    },
    badgeView:{
        position:'absolute',
        top:0,
        right:-5,
        padding:2,
        backgroundColor:'red',
        borderRadius:10,
        zIndex:10
    },
    badge:{
        color:'#fff',
        fontSize:10
    },
    tab:{
        height:viewportWidth/11,
        flexDirection:'row'
    },
    tabcontainer:{
        flex:1,flexDirection:'row',
        backgroundColor:'#0e1944'
    },
    showing:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    movies:{
        height:viewportWidth*1.1
    },
    activateTab:{
        borderBottomWidth:2,
        borderBottomColor:'#ff5400',
    },
    hot:{
        height:viewportHeight*0.05,
        marginTop:0,
    },
    hotrow:{
        flex:1,flexDirection:'row',
        padding:6,
        backgroundColor:'#0e1944'
    },
    hottext:{
        flex:7,
        marginLeft:5,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    text:{
        fontSize:viewportWidth*0.03,
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Bold'
    },
    hotall:{
        flex:3,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingLeft:10,
    },
    hotallButton:{
        width: viewportWidth/5,
        height: viewportWidth/17,
        borderRadius:viewportWidth/34,
        borderWidth:0.3,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#8b8b8b',
        backgroundColor:'#3e3c65'
    },
    hotTouch:{
        height:viewportHeight*0.04,
    },
    texthotall:{
        color:'#fff'
    },
    hotlist:{
        height:viewportWidth*1.2,
    }
});