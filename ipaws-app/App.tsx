import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Drawer,
  Left,
  Title,
  Right,
  Card,
  CardItem,
  Body
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import Sidebar from './components/Sidebar';

export default class App extends Component {
  state = {
    showSidebar: false,
    active: false
  };
  render() {
    return (
      <NavigationContainer>
        {
          <Container>
            <Drawer
              content={<Sidebar />}
              open={this.state.showSidebar}
              onClose={() => this.setState({ showSidebar: false })}
            >
              <Header
                style={{
                  backgroundColor: '#1ABC9C'
                }}
                androidStatusBarColor="#1ABC9C"
              >
                <Left>
                  <Button
                    rounded
                    style={{ backgroundColor: '#1ABC9C' }}
                    onPress={() =>
                      this.setState({ showSidebar: !this.state.showSidebar })
                    }
                  >
                    <Icon name="menu" color="#E8E8E8" />
                  </Button>
                </Left>
                <Right>
                  <Title
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: '#E8E8E8',
                      alignSelf: 'center'
                    }}
                  >
                    Idyllic Paws
                  </Title>
                </Right>
              </Header>
              <Content
                padder
                style={{ alignContent: 'center', backgroundColor: '#A9E6DA' }}
              >
                <Card>
                  <CardItem header bordered>
                    <Text>Holistic Wellness for the Love of Cats & Dogs</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                        Welcome to Idyllic Paws a house-call based, small animal
                        practice dedicated to your animal companions and a
                        holistic, individualized approach in patient healthcare.
                        I’ve helped many dogs and cats overcome illnesses,
                        allergies, and other immune disorders, and go on to lead
                        happy, healthy lives.
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                    <Text>Dr. Zenitsky looks forward to working with you!</Text>
                  </CardItem>
                </Card>
              </Content>
              <Footer>
                <FooterTab
                  style={{
                    backgroundColor: '#1ABC9C',
                    padding: 5
                  }}
                >
                  <Button vertical>
                    <Icon
                      name="profile"
                      type="AntDesign"
                      style={{ fontSize: 23, color: '#E8E8E8' }}
                    />
                    <Text style={{ color: '#E8E8E8', fontSize: 10 }}>
                      Files
                    </Text>
                  </Button>
                  <Button vertical>
                    <Icon
                      name="paw"
                      style={{ fontSize: 23, color: '#E8E8E8' }}
                    />
                    <Text style={{ color: '#E8E8E8', fontSize: 10 }}>
                      Clients
                    </Text>
                  </Button>
                  <Button vertical active>
                    <Icon
                      name="home"
                      style={{ fontSize: 23, color: '#E8E8E8' }}
                    />
                    <Text style={{ color: '#E8E8E8', fontSize: 10 }}>Home</Text>
                  </Button>
                  <Button vertical>
                    <Icon
                      name="medkit"
                      style={{ fontSize: 23, color: '#E8E8E8' }}
                    />
                    <Text style={{ color: '#E8E8E8', fontSize: 10 }}>
                      Services
                    </Text>
                  </Button>
                  <Button vertical>
                    <Icon
                      name="person"
                      style={{ fontSize: 23, color: '#E8E8E8' }}
                    />
                    <Text style={{ color: '#E8E8E8', fontSize: 10 }}>
                      Contact
                    </Text>
                  </Button>
                </FooterTab>
              </Footer>
            </Drawer>
          </Container>
        }
      </NavigationContainer>
    );
  }
}
