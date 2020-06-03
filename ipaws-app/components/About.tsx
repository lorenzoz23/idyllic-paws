import React, { Component } from 'react';
import {
  Container,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
  Icon,
  Title,
  Header,
  Right,
  DeckSwiper,
  View
} from 'native-base';
import { Image } from 'react-native';

const about = require('../ipaws-assets/about.jpg');

const cards = [
  {
    type: 'text',
    text:
      'Dr. Franchesca Zenitsky is a dedicated holistic practitioner whose conventional and holistic veterinary training allow her to evaluate your pet’s health and combine modalities as necessary in the interest of his or her optimal health and well-being.  Her focus is on personalized wellness care and disease management through nutritional therapy and other safe, effective complementary practices.'
  },
  {
    type: 'text',
    text:
      'Dr. Zenitsky holds degrees in both Veterinary Medicine and Genetics from Iowa State University as well as a degree in Biology / Applied Ecology from Eastern Kentucky University where she conducted endangered species research.  She has worked in the environmental consulting field since 1994 and developed a broad range of experience in environmental and biological services.  In 2011, Dr. Zenitsky founded an environmental consulting firm that she maintains for clients that wish to utilize her services.'
  },
  {
    type: 'text',
    text:
      'It was her goal early on to pursue a Ph.D. in wildlife / endangered species biological research or a DVM in wildlife medicine, but life’s circumstances rather circumvented those objectives!  Still, she continued to honor her core values and, after much research and some experimentation, she began to successfully incorporate holistic modalities into her animal family’s lifestyle.  Disturbed, however, by the prevalence of chronic disease in most animals she met and little influence to make a difference, in 2008 she was finally ready and able to leap in with both feet and get on with preparing to practice holistic veterinary medicine.'
  },
  {
    type: 'text',
    text:
      'Dr. Zenitsky established Idyllic Paws in 2013 to provide veterinary care in the Des Moines metro area using both conventional and holistic medical techniques.  A housecall-based practice provides the best opportunity for Dr. Zenitsky to truly get to know her patients (and their people), by seeing them in their home environments.  She continues her pursuit of lifelong education, advancing her training and ever incorporating new knowledge into her patients’ treatment plans.'
  },
  {
    type: 'text',
    text:
      'In addition to learning more every day, Dr. Zenitsky is devoted to empowering pet owners with knowledge of optimal pet care as well as leading the initiative for a rabies vaccine medical exemption clause to be added to Iowa legislation.  She and her brilliant son, Lorenzo, live with Tony, a 12+ year old sheltie, Lola, an 8 year old shepherd mix, and three cool cats – Mingo, Trixie, and Bukster-Baxter.  In her spare time she loves the great outdoors, to garden, cook, hike, engage in music and camaraderie, read, cater to her pack, and study holistic medicine.'
  },
  {
    type: 'accordian',
    dataArray: [
      {
        title: 'Professional veterinary associations',
        content: ''
      }
    ]
  }
];

export default class About extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#A9E6DA',
          paddingTop: 20
        }}
      >
        <Header
          style={{
            backgroundColor: 'transparent',
            elevation: 0
          }}
          androidStatusBarColor="transparent"
        >
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={{ color: '#1ABC9C', fontSize: 27 }}
              />
            </Button>
          </Left>
          <Body style={{ alignContent: 'center' }}>
            <Title
              style={{ color: '#1ABC9C', fontWeight: 'bold', fontSize: 21 }}
            >
              About Us
            </Title>
          </Body>
          <Right />
        </Header>
        <View padder>
          <Image
            source={about}
            resizeMode="contain"
            style={{
              maxWidth: undefined,
              maxHeight: 250,
              borderRadius: 10
            }}
          />
          <Text note style={{ alignSelf: 'center', color: '#1ABC9C' }}>
            Dr. Z with Lola (left) and Tony (right)
          </Text>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item: any) => (
              <Card style={{ elevation: 3, backgroundColor: '#D1F8FF' }}>
                <CardItem
                  style={{ backgroundColor: '#D1F8FF', borderRadius: 10 }}
                >
                  {item.type === 'text' ? (
                    <Text style={{ textAlign: 'center' }}>{item.text}</Text>
                  ) : (
                    <View style={{ flexDirection: 'column' }}>
                      <Text>
                        Her professional veterinary associations include:
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        American Veterinary Medical Association (licensed in
                        Iowa)
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        Iowa Veterinary Medical Association
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        American Holistic Veterinary Medical Association
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        Veterinary Botanical Medicine Association
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        Academy of Veterinary Homeopathy
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        Humane Society Veterinary Medical Association
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginBottom: 5
                        }}
                      >
                        Certified in Animal Chiropractic (Options for Animals)
                      </Text>
                    </View>
                  )}
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
