import React, { Component } from 'react';
import { Container, Content, View, Text } from 'native-base';

export default class Holistic extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#A9E6DA',
          paddingTop: 20
        }}
      >
        <Content style={{ backgroundColor: '#A9E6DA' }}>
          <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
          >
            <Text>Holistic Approach</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
