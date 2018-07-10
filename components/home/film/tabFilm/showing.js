import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'; // New code
import GridView from 'react-native-super-grid';
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

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
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

  /**
   * fetch data demo from themoviesDB 
   * handle network error 
   */
  componentWillMount(){
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

    if ( this.state.status_network )
    {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8631f0c8f0363c450d47ace4043eca5')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({entries: responseJson.results});
        })
        .catch((error) => {
            Alert.alert(
                'Lỗi kết nối',
                'Vui lòng xem lại kết nối mạng?', [{
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                } ], {
                    cancelable: false
                }
              )
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
  _renderItem (item, index ) {
        // render item of slider film 
        var poster = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
        return (
          <TouchableOpacity activeOpacity={1} style={{flex:1,backgroundColor:'red',flexDirection:'row'}} onPress={()=>{  }}>
            <View style={style.item}>
                <Image source={{uri:poster}} style={style.poster} />
                <TouchableOpacity activeOpacity={1} style={style.buttonDatve} onPress={()=> Actions.Detail({name:item.title}) }>
                    <Text  style={style.title}> Đặt vé</Text>
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
  }
  render() {
    return (
      <View style={{backgroundColor:'#333'}}>
        <GridView
            itemDimension={widthDevice/4}
            items={this.state.entries}
            renderItem={this._renderItem}
        />
      </View>
    );
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
  }
}

const style = StyleSheet.create({
  item:{
    width:(widthDevice-40)/3,
    backgroundColor:'#fff',
  },
  poster:{
    width:(widthDevice-40)/3,
    height:(widthDevice-40)/2,
  },
  title:{
    color:'#fff',
    padding:2,
    fontWeight:'bold',
    fontSize:widthDevice*0.03
  },
  description:{
    color:'#e9ebee',
    padding:2,
    fontSize:widthDevice*0.025
  },
  buttonDatve:{
    position:'absolute',
    bottom:5,
    right:5,
    zIndex:20,
    backgroundColor:'#7f0f21',
    borderRadius:3,
    padding:6
  }
})

export default Showing