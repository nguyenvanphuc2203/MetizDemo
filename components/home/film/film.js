import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from 'react-navigation';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    AlertIOS,
    ScrollView,
    Image,
    Dimensions,
    RefreshControl,
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizContentScreen from '../../elements/metizContentScreen';
import Showing from './tabFilm/showing';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class TabsFilm extends Component {
    constructor(props){
        super(props)
        this.state = {
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
                    title={'THÔNG TIN CHUNG'}
                    actionButtonLeft={()=> Actions.pop()}
                    iconRight={<Icon name="md-share" size={30} color="red" />}
                    actionButtonRight={ ()=>{} }
                />
                <MetizContentScreen>
                    <TabFilm/>
                </MetizContentScreen>
            </View>
        )
    }
}

const TabFilm = createMaterialTopTabNavigator({
    'Đang chiếu': Showing,
    'Sắp chiếu': Showing,
},
{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor:'#fff',
    activeTabStyle: {
      backgroundColor: 'red',
    },
    tabStyle: {
      backgroundColor: 'black',
      padding:0
    },
    style: {
      backgroundColor: 'red'
    },
  },
  tabBarPosition: 'top',
  swipeEnabled:false,
  lazy: true
});

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    
});