import React from 'react';
import { StyleSheet, Text, View, _Text } from 'react-native';
import  facebookScreen from "./screens.js/facebook";
import  instagramScreen from "./screens.js/instagram";

export default class App extends React.component {
  render()
  {
  return (
   <AppContainer/>
  );
}
}
const TabNavigator=createBottomTabNavigator({
    facebook:{screen:facebookScreen},
    instagram:{screen:instagramScreen}
});
const AppContainer=createappContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
