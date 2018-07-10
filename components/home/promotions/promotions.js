import React , { Component } from 'react';
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import GridView from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

export default class PromotionsHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            promotions:[
                {
                    title:'khuyến mãi khủng tết',
                    thumbnail:'https://thumb.ibb.co/hGJUkT/banner_film2.jpg',
                    open:'12/02/2018',
                    close:'15/01/2018'
                },
                {
                    title:'khuyến mãi khủng tết',
                    thumbnail:'https://thumb.ibb.co/hGJUkT/banner_film2.jpg',
                    open:'12/02/2018',
                    close:'15/01/2018'
                },
                {
                    title:'khuyến mãi khủng tết',
                    thumbnail:'https://thumb.ibb.co/hGJUkT/banner_film2.jpg',
                    open:'12/02/2018',
                    close:'15/01/2018'
                },
                {
                    title:'khuyến mãi khủng tết',
                    thumbnail:'https://thumb.ibb.co/mgA9kT/banner_film1.jpg',
                    open:'12/02/2018',
                    close:'15/01/2018'
                },
                {
                    title:'khuyến mãi khủng tết',
                    thumbnail:'https://thumb.ibb.co/mgA9kT/banner_film1.jpg',
                    open:'12/02/2018',
                    close:'15/01/2018'
                },
                {
                    title:'khuyến mãi khủng tết',
                    thumbnail:'https://thumb.ibb.co/hGJUkT/banner_film2.jpg',
                    open:'12/02/2018',
                    close:'15/01/2018'
                }
            ]
        }
    }
    render(){
        return (
            <View>
                <GridView
                    itemDimension={130}
                    items={this.state.promotions.slice(0,2)}
                    renderItem={item => (
                        <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.item}>
                            <View style={style.thumbnail}>
                                <Image
                                    style={{width:'100%',height:'100%',borderRadius:3}}
                                    source={{uri:'https://i.imgur.com/3lsxy4c.png'}}
                                />
                            </View>
                            <View style={style.content}>
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.time}>{item.open} ~ {item.close}</Text>
                            </View>
                        </LinearGradient>
                    )}
                />
                <GridView
                    style={style.gridView}
                    itemDimension={viewportWidth/1.2}
                    items={this.state.promotions.slice(2,3)}
                    renderItem={item => (
                        <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.item}>
                            <View style={style.thumbnail}>
                                <Image
                                    style={{width:'100%',height:'100%',borderRadius:3}}
                                    source={{uri:'https://i.imgur.com/3lsxy4c.png'}}
                                />
                            </View>
                            <View style={style.content}>
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.time}>{item.open} ~ {item.close}</Text>
                            </View>
                        </LinearGradient>
                    )}
                />
                <GridView
                    style={style.gridView}
                    itemDimension={130}
                    items={this.state.promotions.slice(3,5)}
                    renderItem={item => (
                        <LinearGradient colors={['rgb(249,159,0)','rgb(219,48,105)' ]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={style.item}>
                            <View style={style.thumbnail}>
                                <Image
                                    style={{width:'100%',height:'100%',borderRadius:3}}
                                    source={{uri:'https://i.imgur.com/3lsxy4c.png'}}
                                />
                            </View>
                            <View style={style.content}>
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.time}>{item.open} ~ {item.close}</Text>
                            </View>
                        </LinearGradient>
                    )}
                />
            </View>
           
        )
    }
}

const style = StyleSheet.create({
    gridView:{
        marginTop:-20
    },
    item:{
        flex:1,
        flexDirection:'column',
        margin:0,
        borderRadius:5,
        backgroundColor:'#ff5400',
        height:viewportWidth*0.35,
    },
    thumbnail:{
        flex:7,
    },
    content:{
        flex:3,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    title:{
        color:'#333',
        fontSize:viewportWidth*0.03,
        color:'#fff'
    },
    time:{
        color:'#333',
        fontSize:viewportWidth*0.025,
        color:'#fff'
    }
})