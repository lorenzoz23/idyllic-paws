import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right
} from 'native-base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HolisticApproach from './HolisticApproach';
import Investment from './Investment';

const Tab = createMaterialTopTabNavigator();

export default class Holistic extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#A9E6DA',
          paddingTop: 20
        }}
      >
        <Header
          style={{
            backgroundColor: 'transparent',
            elevation: 0
          }}
          androidStatusBarColor="transparent"
        >
          <Left style={{ marginRight: 25 }}>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={{ color: '#1ABC9C', fontSize: 27 }}
              />
            </Button>
          </Left>
          <Body style={{ alignContent: 'center', flex: 2 }}>
            <Title
              style={{
                color: '#1ABC9C',
                fontWeight: 'bold',
                fontSize: 21
              }}
            >
              Holistic Approach
            </Title>
          </Body>
          <Right />
        </Header>
        <Tab.Navigator
          initialRouteName="Holistic"
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
            name="Holistic"
            component={HolisticApproach}
            options={{
              tabBarLabel: 'The Approach'
            }}
          />
          <Tab.Screen
            name="Services"
            component={Investment}
            options={{
              tabBarLabel: 'Next Steps'
            }}
          />
        </Tab.Navigator>
      </Container>
    );
  }
}
