import React, { Component } from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Card,
  CardItem,
  Body
} from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content
          padder
          style={{ alignContent: 'center', backgroundColor: '#A9E6DA' }}
        >
          <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
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
          </View>
        </Content>
      </Container>
    );
  }
}
