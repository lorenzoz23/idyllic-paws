import React, { Component } from 'react';
import { Container, Content, View, Text } from 'native-base';

export default class Testimonials extends Component {
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#A9E6DA' }}>
          <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
          >
            <Text>Testimonials</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
