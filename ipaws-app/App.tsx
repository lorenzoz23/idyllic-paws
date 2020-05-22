import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutUs from './components/AboutUs';
import Holistic from './components/Holistic';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TopTabNavigator from './components/TopTabNavigator';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={TopTabNavigator} />
          <Drawer.Screen name="About Us" component={AboutUs} />
          <Drawer.Screen name="Holistic Approach" component={Holistic} />
          <Drawer.Screen name="Testimonials" component={Testimonials} />
          <Drawer.Screen name="FAQ" component={FAQ} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
