import React , { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    WebView,
    Platform
} from 'react-native';
import MetizNavigation from '../../elements/metizNavigation';
import MetizLoading from '../../elements/metizLoading';

const { width: widthDevice, height: heightDevice } = Dimensions.get('window');
/* get width, height */

export default class PlayTrailer extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true
        }
    }
    static navigationOptions = () => ({
        header: null
    })
    render(){
        return (
            <View style={style.container}>
                <MetizNavigation
                    title={''}
                    actionButtonLeft={()=> Actions.pop()}
                    backgroundColor={'transparent'}
                />
                <View style={style.content}>
                    <View style={style.trailer}>
                        <WebView
                            javaScriptEnabled={true}
                            source={{ uri:'https://www.youtube.com/embed/mIZqNu_8YMs?rel=0&amp;showinfo=0;autoplay=1'}} 
                            fullScreen={true}
                            onLoadEnd={()=>{this.setState({loading:false})}}
                            style={{backgroundColor:'black'}}
                        />
                        { this.state.loading && <MetizLoading content="Đang tải trailer"/>}
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    content:{
        marginTop:(Platform.OS === 'ios') ? -70 : -50,
        flex:1,
        justifyContent:'center',
    },
    trailer:{
        height:widthDevice*0.6,
    }
})