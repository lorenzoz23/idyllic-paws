import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { Image } from 'native-base';

import About from './components/About';
import Holistic from './components/Holistic';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TopTabNavigator from './components/TopTabNavigator';
import Sidebar from './components/Sidebar';
import MyDrawer from './components/MyDrawer';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  state = {
    width: 200
  };
  componentDidMount = () => {
    this.setState({
      width: Dimensions.get('window').width
    });
  };
  render() {
    return (
      <NavigationContainer>
        {
          <Drawer.Navigator
            initialRouteName="Main"
            drawerStyle={{ width: this.state.width / 1.25 }}
            //drawerContent={(props) => <Sidebar {...props} />}
            drawerContent={(props) => <MyDrawer {...props} />}
          >
            <Drawer.Screen
              name="Main"
              component={(props) => <TopTabNavigator {...props} />}
            />
            <Drawer.Screen name="About Us" component={About} />
            <Drawer.Screen name="Holistic Approach" component={Holistic} />
            <Drawer.Screen name="Testimonials" component={Testimonials} />
            <Drawer.Screen name="FAQ" component={FAQ} />
          </Drawer.Navigator>
        }
      </NavigationContainer>
    );
  }
}
