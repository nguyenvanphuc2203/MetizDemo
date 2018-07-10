import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

export default class ControlPanel extends Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.profile}>
                    <View style={style.profileContainer}>
                        <TouchableOpacity activeOpacity={1} onPress={()=> {this.props.onClosePanel(); Actions.InfoProfile() } } style={style.profileAvatar}>
                            <Image
                                style={style.avatar}
                                source={{uri:'https://i.imgur.com/DikeBdY.png'}}
                                />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.profileInfo} activeOpacity={1} onPress={()=> {this.props.onClosePanel(); Actions.MainLogin() } }>
                            <Text style={style.profileText}>ĐĂNG NHẬP </Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={style.profileInfo} onPress={()=> {this.props.onClosePanel(); Actions.MainLogin() } }>
                            <Text style={style.profileText}>Alex Dramax</Text>
                            <Text style={style.profileText}>jarelexdramax@gmail.com</Text>
                        </TouchableOpacity> */}
                    </View>  
                </View>
                <View style={style.menuList}>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=> this.props.onClosePanel()}>
                        <View style={style.iconMenu}>
                            <Icon name="ios-home" size={viewportWidth*0.06} color="#7dd422" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Trang chủ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=>{ this.props.onClosePanel(); Actions.ShowTimes()} }>
                        <View style={style.iconMenu}>
                            <Icon name="md-calendar" size={viewportWidth*0.06} color="#f6a624" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Lịch chiếu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=>{this.props.onClosePanel(); Actions.MenuFilm() }}>
                        <View style={style.iconMenu}>
                            <Icon name="ios-film" size={viewportWidth*0.06} color="#4a90e2" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Phim</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=> this.props.onClosePanel()}>
                        <View style={style.iconMenu}>
                            <Icon name="md-mail-open" size={viewportWidth*0.06} color="#bd34e0" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Tin tức & Khuyến mãi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=> this.props.onClosePanel()}>
                        <View style={style.iconMenu}>
                            <Icon name="logo-rss" size={viewportWidth*0.06} color="#50e3c2" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Blog phim</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=> this.props.onClosePanel()}>
                        <View style={style.iconMenu}>
                            <Icon name="ios-notifications" size={viewportWidth*0.06} color="#b8e985" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Thông báo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=>{ this.props.onClosePanel(); Actions.About() }}>
                        <View style={style.iconMenu}>
                            <Icon name="ios-information-circle" size={viewportWidth*0.06} color="#45bfff" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Về Metiz Cinema</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuItem} activeOpacity={1} onPress={()=>{ this.props.onClosePanel(); } }>
                        <View style={style.iconMenu}>
                            <Icon name="ios-log-out" size={viewportWidth*0.06} color="#FFF" />
                        </View>
                        <View style={style.textMenuContainer}>
                            <Text style={style.TextMenu}>Đăng Xuất</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.clear}>

                </View>
                <View style={style.logout}>

                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    profile:{
        flex:1.5,
        backgroundColor:'#0c0d0e'
    },
    profileContainer:{
        flex:1,
        flexDirection:'row',
        padding:10
    },
    profileAvatar:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:viewportWidth/12.4,
    },
    avatar:{
        width:viewportWidth/6.2,
        height:viewportWidth/6.2,
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius:viewportWidth/12.4,
    },
    profileInfo:{
        flex:7,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:15
    },
    profileText:{
        color:'#fff',
        fontFamily:'SairaSemiCondensed-Medium'
    },
    menuList:{
        flex:6.5,
        backgroundColor:'#fff'
    },
    clear:{
        backgroundColor:'#222',
        flex:1
    },
    logout:{
        backgroundColor:'#222',
        flex:1
    },
    menuItem:{
        flex:1,
        paddingHorizontal:5,
        paddingVertical:4,
        flexDirection:'row',
        backgroundColor:'#222'
    },
    iconMenu:{
        flex:2,
        marginHorizontal:15,
        marginVertical:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#484c4b'
    },
    textMenuContainer:{
        justifyContent:'center',
        flex:8,
        paddingLeft:10,
        alignItems:'flex-start',
    },
    TextMenu:{
        fontSize:viewportWidth*0.04,
        color:'#45b6bc',
        fontFamily:'SairaSemiCondensed-Medium'
    }
})