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

import Sidebar from './components/Sidebar';

export default class App extends Component {
  state = {
    showSidebar: false,
    active: false
  };
  render() {
    return (
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
            hasSubtitle={true}
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
                    practice dedicated to your animal companions and a holistic,
                    individualized approach in patient healthcare. I’ve helped
                    many dogs and cats overcome illnesses, allergies, and other
                    immune disorders, and go on to lead happy, healthy lives.
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
                <Icon name="home" />
                <Text>Home</Text>
              </Button>
              <Button vertical>
                <Icon name="paw" />
                <Text>Clients</Text>
              </Button>
              <Button vertical>
                <Icon active name="medkit" />
                <Text>Services</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Drawer>
      </Container>
    );
  }
}
