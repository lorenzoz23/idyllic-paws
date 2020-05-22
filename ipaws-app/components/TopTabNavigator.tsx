import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container, Left, Button, Icon, Right, Title } from 'native-base';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Home from './Home';
import Services from './Services';
import Clients from './Clients';
import Contact from './Contact';

const Tab = createMaterialTopTabNavigator();

export default class TopTabNavigator extends Component {
  state = {
    showSidebar: false
  };
  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: '#1ABC9C'
          }}
          androidStatusBarColor="#1ABC9C"
        >
          <Left>
            <Button
              transparent
              style={{
                backgroundColor: '#1ABC9C',
                alignContent: 'center'
              }}
              onPress={() =>
                this.setState({ showSidebar: !this.state.showSidebar })
              }
            >
              <Icon name="menu" style={{ color: '#E8E8E8', fontSize: 27 }} />
            </Button>
          </Left>
          <Right>
            <Title
              style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: '#E8E8E8',
                alignSelf: 'center'
              }}
            >
              Idyllic Paws
            </Title>
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
