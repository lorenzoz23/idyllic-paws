import React, { Component } from 'react';
import {
  Container,
  Content,
  Left,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body
} from 'native-base';
import { Image } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#A9E6DA' }}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://seethewebdev.com/idyllicpaws.com/wp-content/uploads/2014/07/handinhand-e1582137285773-199x300.jpg'
                  }}
                />
                <Body>
                  <Text>About Us</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      'https://seethewebdev.com/idyllicpaws.com/wp-content/uploads/2014/07/drzenitsky400x500-e1582220146237.jpg'
                  }}
                />
                <Text note>Dr. Z with Lola (left) and Tony (right)</Text>
                <Text>
                  Dr. Franchesca Zenitsky is a dedicated holistic practitioner
                  whose conventional and holistic veterinary training allow her
                  to evaluate your pet’s health and combine modalities as
                  necessary in the interest of his or her optimal health and
                  well-being. Her focus is on personalized wellness care and
                  disease management through nutritional therapy and other safe,
                  effective complementary practices.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
