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

export default class Services extends Component {
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
                <Text>Services</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    Idyllic Paws was created for you and your animal companions.
                    Dr. Zenitsky provides at-home veterinary care and phone
                    consultations for dogs and cats. She is known for reliable
                    service, flexible scheduling, and excellent follow-up.
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
