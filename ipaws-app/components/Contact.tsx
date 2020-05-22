import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Textarea,
  Button,
  Text,
  Icon
} from 'native-base';

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Content
          padder
          style={{
            backgroundColor: '#A9E6DA'
          }}
        >
          <Form>
            <Item
              style={{
                backgroundColor: '#70E6CF',
                borderRadius: 15,
                marginBottom: 10
              }}
              bordered={false}
              last
            >
              <Icon name="person" type="MaterialIcons" />
              <Input placeholder="Name" placeholderTextColor="#34495E" />
            </Item>
            <Item
              style={{
                backgroundColor: '#70E6CF',
                borderRadius: 15,
                marginBottom: 10
              }}
              bordered={false}
              last
            >
              <Icon name="email" type="MaterialCommunityIcons" />
              <Input
                textContentType="emailAddress"
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#34495E"
              />
            </Item>
            <Item
              style={{
                backgroundColor: '#70E6CF',
                borderRadius: 15,
                marginBottom: 10
              }}
              bordered={false}
              last
            >
              <Icon name="cellphone" type="MaterialCommunityIcons" />
              <Input
                textContentType="telephoneNumber"
                placeholder="Phone"
                keyboardType="phone-pad"
                placeholderTextColor="#34495E"
              />
            </Item>
            <Textarea
              placeholderTextColor="#34495E"
              rowSpan={5}
              bordered={false}
              placeholder="Message"
              underline={false}
              style={{
                backgroundColor: '#70E6CF',
                borderRadius: 15,
                marginBottom: 20,
                fontSize: 18
              }}
            />
            <Button
              block
              rounded
              style={{ backgroundColor: '#4295FF', marginBottom: 10 }}
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
