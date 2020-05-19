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

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content
          style={{ backgroundColor: '#A9E6DA', flex: 1, top: -1 }}
          padder
        >
          <View>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/originals/27/f0/9b/27f09bbdd9ffb6c440123e54e4eb05c5.jpg'
              }}
              style={{
                height: 100,
                width: 100,
                alignSelf: 'stretch',
                position: 'relative',
                marginBottom: 10
              }}
            />
          </View>
          <ListItem header first>
            <Text>Learn More</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
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
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
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
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
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
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
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
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
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
          <ListItem header first>
            <Text>Connect</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button
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
