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

export default class Investment extends Component {
  render() {
    return (
      <Container>
        <Content padder style={{ backgroundColor: '#A9E6DA' }}>
          <Card>
            <CardItem header bordered style={{ justifyContent: 'center' }}>
              <Text style={{ color: '#1ABC9C' }}>
                Ready to make the investment?
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ textAlign: 'center' }}>
                  There really is so much you can do for your animals that
                  conventional medicine cannot address. Holistic medicine has
                  the means to help them live longer and happier lives, and to
                  prevent or truly cure problems, rather than just cover them
                  up. Much of what I do is educating and empowering my clients
                  so they can make informed choices and provide the best care
                  for their current animal companions and all the ones they will
                  ever care for. Indeed, it is my goal to get you to the point
                  where you don’t need me much anymore! Call 515-778-1585 or
                  fill out our form to schedule an appointment today.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
