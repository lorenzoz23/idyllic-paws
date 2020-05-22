import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  View,
  Card,
  CardItem,
  Body
} from 'native-base';

export default class Clients extends Component {
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
                <Text>Congratulations</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    You’ve made your mind up to pursue holistic care for your
                    pet. For many of you this will be your first visit with a
                    holistic practitioner, but the familiar environment of your
                    home can be the most comfortable, calming place for your pet
                    to receive care. Preparing for the visit is important.
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
