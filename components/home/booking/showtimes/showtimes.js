import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabShowTimes from './tab';
import MetizNavigation from '../../../elements/metizNavigation';
import MetizContentScreen from '../../../elements/metizContentScreen';
import MetizLoading from '../../../elements/metizLoading';


export default class ShowTimes extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalVisible: false,
      filmtype:''
    };
  }
  static navigationOptions = ({navigation}) => ({
    header: null,
  })
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    return (
        <View style={style.container}>
            <MetizNavigation
                title={'LỊCH CHIẾU METIZ'}
                actionButtonLeft={()=> Actions.pop()}
                actionButtonRight={ ()=>{} }
            />
            <MetizContentScreen>
                <TabShowTimes/>
            </MetizContentScreen>
        </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex:1
  },
})
