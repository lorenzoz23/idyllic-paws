import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Container,
  Left,
  Button,
  Icon,
  Right,
  Title,
  Header
} from 'native-base';
import Home from './Home';
import Services from './Services';
import Clients from './Clients';
import Contact from './Contact';
import { StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();

interface TopTabNavigatorProps {
  navigation: any;
}

export default class TopTabNavigator extends Component<TopTabNavigatorProps> {
  state = {
    showSidebar: false
  };
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#1ABC9C',
          paddingTop: 20
        }}
      >
        <Header
          style={{
            backgroundColor: '#1ABC9C',
            elevation: 0
          }}
        >
          <StatusBar translucent={true} backgroundColor="transparent" />
          <Left style={{ paddingLeft: 5 }}>
            <Title
              style={{
                fontWeight: 'bold',
                color: '#E8E8E8'
              }}
            >
              Idyllic Paws
            </Title>
          </Left>
          <Right style={{ paddingRight: 5 }}>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            >
              <Icon name="menu" style={{ color: '#E8E8E8' }} />
            </Button>
          </Right>
        </Header>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#1ABC9C',
            inactiveTintColor: '#A9E6DA',
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: '#34495E' },
            showIcon: true,
            indicatorStyle: { backgroundColor: '#1ABC9C' }
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="home" style={{ color: color }} />
              )
            }}
          />
          <Tab.Screen
            name="Services"
            component={Services}
            options={{
              tabBarLabel: 'Services',
              tabBarIcon: ({ color }) => (
                <Icon name="medkit" style={{ color: color }} />
              )
            }}
          />
          <Tab.Screen
            name="Clients"
            component={Clients}
            options={{
              tabBarLabel: 'Clients',
              tabBarIcon: ({ color }) => (
                <Icon name="paw" style={{ color: color }} />
              )
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarLabel: 'Contact',
              tabBarIcon: ({ color }) => (
                <Icon name="person" style={{ color: color }} />
              )
            }}
          />
        </Tab.Navigator>
      </Container>
    );
  }
}
