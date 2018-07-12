import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
	Dimensions,
	Image,
	Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'; // New code
import GridView from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import { getNextDateFormat,getNextDay,getCurrentDate } from '../../../functions/functions';
import MetizLoading from '../../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */
const DATE = new Date();

export default class TimesRooms extends Component{
	constructor(props){
		super(props);
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
			currentday:0,
			data:[],
			dataformat:[],
			loading:true,
			refreshing:false
		}
	}
	getShowTimesByDate(date){
		this.state.dateActive.map((item,index) =>{
			if ( index == date ) item.active = true;
			else item.active = false;
		})
		this.setState({dateActive:this.state.dateActive,currentday:date,loading:true})
		/**
		 * format data from api to formatData
		 * group showtimes for Film 
		 * format times , compare with current times
		 */
		url = 'http://172.16.12.13:8080/Helio.asmx/getShowTimes?Secret=5ba90f1cc2d540edbb01e3ffc85bc7f2&id_Movie=0&id_MovieTheater=0&id_Area=0&id_Server=1&Date='+getNextDateFormat(date);
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({data:responseJson.List});
			let movies_id = '';
			let arr = [];
			let subarr = [];
			let item_time = '';
			this.state.data.map(item => {
				if (movies_id == '') movies_id = item.MOVIE_ID;
				item_time = item.DATE.substr(3, 3) + item.DATE.substr(0, 3) + item.DATE.substr(6,4) +" "+item.TIME;
				if (item.MOVIE_ID == movies_id ){
					if ( Date.parse(item_time) < Date.parse(getCurrentDate(DATE)) ){
						console.log('Deleted showtimes over time', item.MOVIE_NAME_VN +' '+item.TIME)
					}else{
						subarr.push(item);
					}
				}else{
					movies_id = item.MOVIE_ID;
					if ( subarr.length > 0 ) arr.push(subarr);
					subarr = [];
					if ( Date.parse(item_time) < Date.parse(getCurrentDate(DATE)) ){
						console.log('Deleted showtimes over time', item.MOVIE_NAME_VN +' '+item.TIME)
					}else{
						subarr.push(item);
					}
				}
			})
			if ( subarr.length > 0 ) arr.push(subarr)
			// set data after format to state 
			this.setState({dataformat:arr,loading:false});
			console.log(date,this.state.dataformat)
		})
		.catch((error) => {
			console.error(error);
		});
	}
	getPosterbyID(id_movie){
		fetch('')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
			})
			.catch((error) => {
				console.error(error);
			});
	}
	componentWillMount(){
		this.getShowTimesByDate(0);
	}
	_onRefresh() {
		this.getShowTimesByDate(this.state.currentday)
	}
	onClickShowtime(id){
		Alert.alert(
			'Metiz Cinema',
			'Phim không dành cho khán giả dưới 13 tuổi!.', [{
				text: 'Đồng ý',
				onPress: () => Actions.BookingSeat(),
				style: 'OK'
			} ], {
				cancelable: false
			}
		)
	}
	render(){
		return (
			<View style={style.showtimes}>
				<LinearGradient colors={['#473d82','#5e4f8b']} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.time}>
					<View style={{flex:1,flexDirection:'row'}}>
						{this.state.dateActive.map( item =>
							<TouchableOpacity key={item.day} onPress={()=> this.getShowTimesByDate(item.day) } style={style.timeItem}>
									<View style={[style.date, item.active && style.active]}><Text style={style.daytext}>{getNextDateFormat(item.day).slice(3,5)}</Text></View>
							</TouchableOpacity>
						)}
					</View>
					<View style={style.day}><Text style={style.datetext}> { `${getNextDay(this.state.currentday)} - ${getNextDateFormat(this.state.currentday)}`}</Text></View>
				</LinearGradient>
				<LinearGradient colors={['rgb(78,67,118)','rgb(43,88,118)' ]}  style={style.show}>
					{ this.state.dataformat.length == 0 && 
					<View style={style.emptyShowtimes}>
						<Text style={style.daytext}>Không có xuất chiếu!</Text>   
					</View>}
					<ScrollView
						refreshControl={
							<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this._onRefresh.bind(this)}
							/>
						}
						>
						{
							this.state.dataformat.map((item, index) => (
								<View key={index} style={style.boxFilm}>
									<View style={style.poster}>
										<Image
											style={{width:widthDevice/4,height:widthDevice/3,borderRadius:5}}
											source={{uri:'https://image.tmdb.org/t/p/w500/x1txcDXkcM65gl7w20PwYSxAYah.jpg'}}
										/>
									</View>
									<View style={style.containerboxfilm}>
										<View style={style.headbox}>
												
											<View style={style.infofilm}>
												<Text style={style.moviesname}>{ typeof(item[0]) != 'undefined' ? item[0].MOVIE_NAME_VN.toUpperCase() : 'Không tên'} </Text>
												<Text style={style.moviesdes}>Thời lượng 120 - cấm trẻ dưới 16 tuổi </Text>
											</View>
										</View>
										<View style={style.boxshowtime}>
											<GridView
												itemDimension={widthDevice/6}
												items={item}
												renderItem={(item,index) => 
													<TouchableOpacity 
														onPress={ ()=>this.onClickShowtime(item.ID) }
														style={{flex:1,borderRadius:5,padding:5,marginHorizontal:-2,marginVertical:-1,backgroundColor:'#e9ebee',justifyContent:'center',alignItems:'center'}}>
														<View >
															<Text style={style.timetext}>{item.TIME}</Text>   
														</View>
													</TouchableOpacity> 
												}
											/>
										</View>
									</View>
								</View>
							))
						}
					</ScrollView>
					{ this.state.loading && <MetizLoading/>}
				</LinearGradient>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container:{
		flex:1/13,
		marginTop:6
	},
	showtimes:{
		flex:1,
		flexDirection:'column'
	},
	boxFilm:{
		flex:1
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
		marginTop:widthDevice/6
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
		top:15,
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
		flexDirection:'column',
		justifyContent:'center'
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
	day:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	daytext:{
		fontSize:widthDevice*0.035,
		color:'#fff',
		fontFamily:'SairaSemiCondensed-Bold'
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
		color:'rgb(248,163,17)',
		fontFamily:'SairaSemiCondensed-Medium'
	},
	active:{
		backgroundColor:'rgb(248,163,17)',
	},
	show:{
		flex:9,
		position: "relative"
	},
	emptyShowtimes:{
		flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
	