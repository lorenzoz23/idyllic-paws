import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Accordion
} from 'native-base';
import { Image } from 'react-native';

const faq = require('../ipaws-assets/faq.jpg');

const first = [
  {
    title: 'Why do our animals get sick?',
    content:
      'It is possible to treat an animal’s health problems symptomatically with diet change, vitamins and minerals and even supportive conventional or holistic remedies. However it is my goal to find the causes of why the animal got sick or painful or taken over by parasites in the first place and remove these causes. There are as many causes as there are for why people get sick. In my experience of observing the animals that have come to my practice and my education in both orthodox and holistic philosophies, I have come to the following conclusion: ANIMALS GET SICK FROM ANY AND ALL THINGS THAT WEAKEN THE BODY’S VITAL FORCE. We have to stop thinking of our animal’s health in any way less or different than we view our own health needs and challenges.'
  }
];

const second = [
  {
    title:
      'Any common misconceptions pet owners have about holistic vets/care?',
    content:
      'Defining “holistic” represents a significant challenge which has contributed to the confusion surrounding the topic. I feel that there is no real consensus about the definition of holistic veterinary medicine – even among veterinarians themselves. Some of the most common misconceptions are that holistic medicine is nothing more than outdated quackery, on par with mystical witchcraft or shamanism. In addition, all too often people will use the term holistic interchangeably with words such as herbal, alternative or complementary medicine which leads to further confusion.'
  }
];

export default class FAQ extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#A9E6DA',
          paddingTop: 20
        }}
      >
        <Content style={{ backgroundColor: '#A9E6DA' }} padder>
          <Card style={{ flex: 0 }}>
            <CardItem style={{ justifyContent: 'center' }}>
              <Text>Frequently Asked Questions</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={faq}
                  style={{
                    width: '100%',
                    height: 200,
                    flex: 1,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginBottom: 15
                  }}
                />
                <Accordion
                  dataArray={first}
                  expanded={0}
                  style={{ width: '100%' }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Accordion
                  dataArray={second}
                  expanded={0}
                  style={{ width: '100%' }}
                />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
