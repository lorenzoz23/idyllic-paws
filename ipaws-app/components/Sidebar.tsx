import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Right,
  View
} from 'native-base';
import { Image, Linking } from 'react-native';

const logo = require('../ipaws-assets/logo.png');

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content
          style={{ backgroundColor: '#A9E6DA', flex: 1, top: -1 }}
          padder
        >
          <View style={{ width: undefined, height: 150 }}>
            <Image
              source={logo}
              style={{
                height: undefined,
                width: undefined,
                flex: 1,
                borderRadius: 10
              }}
            />
          </View>
          <ListItem first noIndent>
            <Text>Learn More</Text>
          </ListItem>
          <ListItem
            noIndent
            icon
            style={{
              backgroundColor: '#70E6CF',
              borderRadius: 10,
              marginBottom: 5
            }}
          >
            <Left>
              <Button style={{ backgroundColor: '#40A9EF', margin: 10 }}>
                <Icon active name="info" type="Feather" />
              </Button>
            </Left>
            <Body>
              <Text>About Us</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" style={{ color: '#374650' }} />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            icon
            style={{
              backgroundColor: '#70E6CF',
              borderRadius: 10,
              marginBottom: 5
            }}
          >
            <Left>
              <Button style={{ backgroundColor: '#FF3030', margin: 10 }}>
                <Icon active name="heart" type="Entypo" />
              </Button>
            </Left>
            <Body>
              <Text>Holistic Approach</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" style={{ color: '#374650' }} />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            icon
            style={{
              backgroundColor: '#70E6CF',
              borderRadius: 10,
              marginBottom: 5
            }}
          >
            <Left>
              <Button style={{ backgroundColor: '#CA79ED', margin: 10 }}>
                <Icon active name="rate-review" type="MaterialIcons" />
              </Button>
            </Left>
            <Body>
              <Text>Testimonials</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" style={{ color: '#374650' }} />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            icon
            style={{
              backgroundColor: '#70E6CF',
              borderRadius: 10,
              marginBottom: 5
            }}
          >
            <Left>
              <Button style={{ backgroundColor: '#F4D03F', margin: 10 }}>
                <Icon active name="question-answer" type="MaterialIcons" />
              </Button>
            </Left>
            <Body>
              <Text>FAQ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" style={{ color: '#374650' }} />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            icon
            style={{
              backgroundColor: '#70E6CF',
              borderRadius: 10
            }}
          >
            <Left>
              <Button
                style={{ backgroundColor: '#F77722', margin: 10 }}
                onPress={() =>
                  Linking.openURL(
                    'https://seethewebdev.com/idyllicpaws.com/blog/'
                  )
                }
              >
                <Icon active name="blog" type="FontAwesome5" />
              </Button>
            </Left>
            <Body>
              <Text>Blog</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" style={{ color: '#374650' }} />
            </Right>
          </ListItem>
          <ListItem first noIndent>
            <Text>Connect</Text>
          </ListItem>
          <ListItem
            noIndent
            icon
            style={{ backgroundColor: '#70E6CF', borderRadius: 10 }}
          >
            <Left>
              <Button
                style={{ backgroundColor: '#3B5998', margin: 10 }}
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/idyllicpawsvet')
                }
              >
                <Icon active name="logo-facebook" />
              </Button>
            </Left>
            <Body>
              <Text>Facebook</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" style={{ color: '#374650' }} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
