import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Button
} from 'native-base';

import ServicesList from '../components/modals/ServicesList';
import GSA from '../components/modals/GSA';

export default class Services extends Component {
  state = {
    isServicesListVisible: false,
    isGSAVisible: false
  };

  showServicesList = () => {
    this.setState({
      isGSAVisible: false,
      isServicesListVisible: true
    });
  };

  showGSAList = () => {
    this.setState({
      isGSAVisible: true,
      isServicesListVisible: false
    });
  };

  render() {
    return (
      <Container>
        <Content
          padder
          style={{
            alignContent: 'center',
            backgroundColor: '#A9E6DA'
          }}
        >
          {this.state.isServicesListVisible ? <ServicesList /> : null}
          {this.state.isGSAVisible ? <GSA /> : null}
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
            <CardItem bordered>
              <Body>
                <Text>
                  The health of your pet’s mind, body and spirit is influenced
                  by your well-being, the health of your pet’s environment
                  (external forces including hygiene and nutrition), genetics
                  and our (the clinic’s) well-being. We believe unconditional
                  love and safety, exemplary nutrition, limiting toxins,
                  abundant exercise, and training are the five most important
                  factors a guardian must provide to achieve maximal quality and
                  longevity of life for his/her pet companion.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Your initial holistic consultation and pet’s complete physical
                  examination includes approximately 30-45 minutes of discussion
                  regarding your pet’s physical and personality traits,
                  nutrition, blood work and training recommendations and other
                  preventative care products or treatment options or specialist
                  referral recommendations. We can discuss your impact on your
                  pet’s life, how you can help to prevent or treat conditions of
                  which you may be concerned.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{ flexDirection: 'column' }}>
              <Button
                full
                rounded
                style={{ marginBottom: 5, backgroundColor: '#1ABC9C' }}
                onPress={() => this.showServicesList()}
              >
                <Text>List of Services</Text>
              </Button>
              <Button
                full
                rounded
                style={{ backgroundColor: '#1ABC9C' }}
                onPress={() => this.showGSAList()}
              >
                <Text>List of counties in GSA</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
