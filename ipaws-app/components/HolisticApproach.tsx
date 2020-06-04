import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Accordion
} from 'native-base';
import { Image } from 'react-native';

const holisticDataArray = [
  {
    title: 'Optimal Nutrition',
    content:
      'I suggest that your pet’s body is the “doctor” and will do everything possible to get and stay healthy when provided with the proper “fuel”.'
  },
  {
    title: 'Avoidance of overvaccination and toxins',
    content:
      'Vaccine avoidance minimizes health complications that arise from the overuse of inoculations in dogs and cats. Did you know most vaccines can last a lifetime in dogs and cats, just as they do in people? Flea, tick and heartworm meds are creating superbugs that are becoming resistant to our attempts to kill them. They’re neurotoxic for both the target and the host and yet most vets view them as a way to prevent disease and ill health.'
  },
  {
    title: 'Cure',
    content:
      'It is not the same as alleviating symptoms, or palliation. It is a return of the body’s chemistry back to the default – normal functioning. My objective is cure, such that no symptoms remain, and no medication is needed. At the end of successful treatment, the patient is actually healthier, not just stabilized on meds.'
  }
];

const holistic = require('../ipaws-assets/holistic.jpg');

export default class HolisticApproach extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#A9E6DA' }}>
        <Content style={{ backgroundColor: 'transparent' }} padder>
          <Card>
            <CardItem style={{ backgroundColor: '#C7FFF4' }}>
              <Left>
                <Image
                  source={holistic}
                  style={{ height: 250, width: 150, borderRadius: 10 }}
                />
              </Left>
              <Body>
                <Text>
                  Health not just the treatment of illness; health is a
                  lifestyle. I take a compassionate, holistic approach to your
                  pet’s care, examining their physical, behavioral, emotional,
                  and environmental history, so we can get to the heart of their
                  problem. Only then will I suggest treatments that will aid
                  your pet’s recovery and promote future health.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ elevation: 0, backgroundColor: '#A9E6DA' }}>
            <CardItem
              style={{
                elevation: 5,
                backgroundColor: '#70E6CF'
              }}
            >
              <Left>
                <Text style={{ textAlign: 'center' }}>
                  My philosophy is simple: it is better to cure disease and
                  promote health and wellness than it is to just address or
                  cover up symptoms as is done in conventional medicine. I do
                  this by focusing on three main areas: nutrition, avoidance of
                  overvaccination and toxins, and cure rather than suppression.
                </Text>
              </Left>
              <Body />
              <Right>
                <Image
                  source={holistic}
                  style={{ height: 300, width: 200, borderRadius: 10 }}
                />
              </Right>
            </CardItem>
          </Card>
          <Accordion
            dataArray={holisticDataArray}
            expanded={0}
            headerStyle={{
              backgroundColor: '#1ABC9C',
              borderRadius: 10,
              marginBottom: 10
            }}
            contentStyle={{
              backgroundColor: '#FEFFF3',
              borderRadius: 10,
              marginBottom: 10
            }}
          />
          <Card>
            <CardItem style={{ backgroundColor: '#C7FFF4' }}>
              <Text>
                My main modalities for treatment are a species-appropriate diet,
                nutraceuticals/natural supplements, herbal therapies,
                Chiropractic, Cranial Electrotherapy Stimulation & Microcurrent
                Electrical Therapy, therapeutic grade essential oils, and client
                education. In addition, I use reiki and flower essences for
                emotional healing and work with other highly experienced
                holistic veterinarians to incorporate classical homeopathy,
                acupuncture, and advanced holistic cancer therapy into treatment
                plans as appropriate.
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: '#C7FFF4' }}>
              <Text>
                I rely on conventional diagnostics like laboratory tests and
                imaging when appropriate, and recommend conventional treatments
                as supportive care where indicated. The emphasis is on using all
                reasonable therapies or systems of medicine that work together
                synergistically to prevent and treat disease that would not be
                possible using one system of medicine alone.
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
