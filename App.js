import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Animated
} from 'react-native';
import Home from './components/home/home';
import Detail from './components/home/detail/detail';
import BookingDetail from './components/home/detail/bookingDetail';
import MainLogin from './components/home/user/main';
import Register from './components/home/user/register';
import Login from './components/home/user/login';
import ForgotPassword from './components/home/user/forgotPassword';
import About from './components/home/about/about';
import AboutQuestions from './components/home/about/aboutQuestions';
import BookingLogin from './components/home/user/bookingLogin/bookingLogin';
import ShowTimes from './components/home/booking/showtimes/showtimes';
import MenuFilm from './components/home/film/film';
import InfoProfile from './components/home/user/info/infoProfile';
import EditProfile from './components/home/user/info/editProfile';
import ChangePassword from './components/home/user/info/changePassword';
import TransactionHistory from './components/home/user/info/transactionHistory';
import MemberCard from './components/home/user/info/memberCard';
import GiftCard from './components/home/user/info/giftCard';
import Notification from './components/home/notification/notification';
/**
 * transaction route config 
 */

const transitionConfig = () => ({

  // screenInterpolator: sceneProps => {
  //     const { layout, position, scene } = sceneProps;
  //     const { index } = scene;
  //     const translateX = position.interpolate({
  //         inputRange: [index - 1, index, index + 1],
  //         outputRange: [layout.initWidth, 0, 0]
  //     });
  //     const opacity = position.interpolate({
  //         inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
  //         outputRange: [0, 1, 1, 0.3, 0]
  //     });
  //     return { opacity, transform: [{ translateX }] }
  // }
  
  // transaction replace
  screenInterpolator: sceneProps => {      
    const { position, scene } = sceneProps

    const thisSceneIndex = scene.index

    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [0, 1],
    })

    return { opacity } 
  },
})

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key="root"
        transitionConfig={transitionConfig}
        >
          <Scene key="Home"
            component={Home}
            title="Home"
            initial
            type='reset'
          />
          <Scene key="Detail"
            component={Detail}
            title="Detail"
          />
          <Scene key="BookingDetail"
            component={BookingDetail}
            title="BookingDetail"
          />
          <Scene key="MainLogin"
            component={MainLogin}
            title="ĐĂNG NHẬP"
          />
          <Scene key="Login"
            component={Login}
            title="ĐĂNG NHẬP"
          />
          <Scene key="Register"
            component={Register}
            title="ĐĂNG KÝ"
          />
          <Scene key="ForgotPassword"
            component={ForgotPassword}
            title="ForgotPassword"
          />
          <Scene key="About"
            component={About}
            title="About"
          />
          <Scene key="AboutQuestions"
            component={AboutQuestions}
            title="AboutQuestions"
          />
          <Scene key="BookingLogin"
            component={BookingLogin}
            title="BookingLogin"
          />
          <Scene key="ShowTimes"
            component={ShowTimes}
            title="ShowTimes"
          />
          <Scene key="MenuFilm"
            component={MenuFilm}
            title="MenuFilm"
          />
          {/* <!-- infomation user --> */}
          <Scene key="InfoProfile"
            component={InfoProfile}
            title="InfoProfile"
          />
          <Scene key="EditProfile"
            component={EditProfile}
            title="EditProfile"
          />
          <Scene key="ChangePassword"
            component={ChangePassword}
            title="ChangePassword"
          />
          <Scene key="TransactionHistory"
            component={TransactionHistory}
            title="TransactionHistory"
          />
          <Scene key="MemberCard"
            component={MemberCard}
            title="MemberCard"
          />
          <Scene key="GiftCard"
            component={GiftCard}
            title="GiftCard"
          />
          <Scene key="Notification"
            component={Notification}
            title="Notification"
          />
        </Scene>
    </Router>
    );
  }
}

