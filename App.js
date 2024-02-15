import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Aboutus from './src/screens/aboutus';
import Home from './src/screens/home';
import Privacy from './src/screens/privacy';
import Terms from './src/screens/term';



export const HOME = "home"
export const CONTACT = "contact"
export const PRIVACY = "privacy"
export const Term = "term"

function App() {
  const [route, setRoute] = useState(HOME)
  //switch round
  const getCurrentRoute = () => {
    switch (route) {
      case "home":
        return <Home />
      case "contact":
        return <Aboutus />
      case "privacy":
        return <Privacy />
      case "term":
        return <Terms />
      default:
        return <Home />

    }
  }
  //navigate screen to screen
  const navigateScreen = (screenName) => {
    setRoute(screenName)
  }
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Header navigation={navigateScreen} />
      {getCurrentRoute()}


      <Footer navigation={navigateScreen} />
      <Toast position="bottom" />
    </SafeAreaView>
  );
}



export default App;
