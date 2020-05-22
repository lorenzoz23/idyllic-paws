import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Right,
  Title,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
  Image
} from 'native-base';

export default class Clients extends Component {
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
        <Content style={{ backgroundColor: '#A9E6DA' }}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'Image URL' }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
