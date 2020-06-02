import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import About from './components/About';
import Holistic from './components/Holistic';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TopTabNavigator from './components/TopTabNavigator';
import MyDrawer from './components/MyDrawer';
//import Sidebar from './components/Sidebar';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  state = {
    width: 0
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
            initialRouteName="Home"
            drawerStyle={{ width: this.state.width / 1.2 }}
            drawerContentOptions={{
              activeBackgroundColor: '#A9E6DA',
              activeTintColor: '#1ABC9C'
            }}
            hideStatusBar={true}
            drawerContent={(props) => <MyDrawer {...props} />}
            //drawerContent={(props) => <Sidebar {...props} />}
          >
            <Drawer.Screen name="Home">
              {(props) => <TopTabNavigator {...props} />}
            </Drawer.Screen>
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
