import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'; // New code
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	Image,
	Button,
	Alert,
	Dimensions,
	StyleSheet,
	NetInfo
} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

class Showing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSwiperFilm:2,
            entries: [
                {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
                {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
                {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'}
            ],
            status_network:true
        }
    }
    handleConnectionChange = (isConnected) => {
        this.setState({ status_network: isConnected });
        console.log(`is connected: ${this.state.status_network}`);
    }
    
    componentDidMount(){
        this.getMoviesShowing()
    }
    /**
     * fetch data demo from themoviesDB 
     * handle network error 
     */
    getMoviesShowing(){
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
        if ( this.state.status_network )
        {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8631f0c8f0363c450d47ace4043eca5')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({entries: responseJson.results});
            })
            .catch((error) => {
                console.error(error);
            });
        }
        else
        {
            Alert.alert(
                'Không có kết nối mạng',
                'Vui lòng kết nối mạng để sử dụng?', [{
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                } ], {
                    cancelable: false
                }
            )
        }
    }
    _renderItem ({item, index }) {
        // render item of slider film 
        var poster = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
        return (
            <TouchableOpacity activeOpacity={1} onPress={()=>{  }}>
                <View style={style.item}>
                    <Image source={{uri:poster}} style={style.poster} />
                    <TouchableOpacity activeOpacity={1} disabled={this.state.isDisableButtonRegister} onPress={()=>{ Actions.Detail({id:item.id,poster:poster}) }} style={style.TouchableDatve}> 
                        <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.buttonDatve}>
                            <Text style={style.title}>ĐẶT VÉ</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View >
                <Carousel
                    layout={'default'}
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth*0.575}
                    loop={true}
                    firstItem={2}
                    loopClonesPerSide={10}
                    //enableMomentum={true}
                    enableSnap={true}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={0.6}
                    onSnapToItem={(index) => this.setState({currentSwiperFilm:index}) }
                />
                <View style={style.infoFilm}>
                    <Text  style={style.title} numberOfLines={1}>{this.state.entries[this.state.currentSwiperFilm].title} | P16 </Text>
                    <Text style={style.description}> Thời Lượng: 02h30P - Khởi Chiếu: {this.state.entries[this.state.currentSwiperFilm].release_date}</Text>
                </View>
            </View>
        );
	}
	componentWillUnmount() {
		NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
	}
}

const style = StyleSheet.create({
	item:{
		width:viewportWidth*0.575,
		marginTop:13,
		position: "relative",
		alignItems: 'center',
	},
	poster:{
		width:viewportWidth*0.575,
		height:viewportWidth*0.85,
		marginBottom:23
	},
	infoFilm:{
		alignItems:'center',
		flexDirection:'column',
		justifyContent:'center',
		paddingBottom:10,
	},
	title:{
		color:'#fff',
		padding:2,
		fontWeight:'bold',
		fontSize:viewportWidth*0.035,
		justifyContent:'center'
	},
	description:{
		color:'#e9ebee',
		padding:2,
		fontSize:viewportWidth*0.03
	},
	TouchableDatve:{
		flex:1,
		height:viewportWidth/10,
		position:'absolute',
		bottom:0,
		zIndex:20,
	},
	buttonDatve:{
		height:viewportWidth/13,
		borderRadius:viewportWidth/20,
		paddingHorizontal:25,
		paddingVertical:4
	}
})

export default Showing