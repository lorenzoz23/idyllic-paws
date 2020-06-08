import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Accordion,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right
} from 'native-base';
import { Image } from 'react-native';

const faq = require('../ipaws-assets/faq.jpg');

const data = [
  {
    title: 'Why do our animals get sick?',
    content:
      'It is possible to treat an animal’s health problems symptomatically with diet change, vitamins and minerals and even supportive conventional or holistic remedies. However it is my goal to find the causes of why the animal got sick or painful or taken over by parasites in the first place and remove these causes. There are as many causes as there are for why people get sick. In my experience of observing the animals that have come to my practice and my education in both orthodox and holistic philosophies, I have come to the following conclusion: ANIMALS GET SICK FROM ANY AND ALL THINGS THAT WEAKEN THE BODY’S VITAL FORCE. We have to stop thinking of our animal’s health in any way less or different than we view our own health needs and challenges.'
  },
  {
    title:
      'Any common misconceptions pet owners have about holistic vets/care?',
    content:
      'Defining “holistic” represents a significant challenge which has contributed to the confusion surrounding the topic. I feel that there is no real consensus about the definition of holistic veterinary medicine – even among veterinarians themselves. Some of the most common misconceptions are that holistic medicine is nothing more than outdated quackery, on par with mystical witchcraft or shamanism. In addition, all too often people will use the term holistic interchangeably with words such as herbal, alternative or complementary medicine which leads to further confusion.'
  },
  {
    title: 'What is holistic veterinary medicine?',
    content:
      'Holistic means any treatment / therapy that is intended to treat the individual as a whole. Holistic veterinary medicine considers all aspects of an animal’s life and employs all of the practitioner’s senses, as well as a combination of conventional and alternative treatments called integrative medicine. When holistic veterinarians see a pet, besides giving it a comprehensive physical examination, they want to find out about its behaviors, medical and dietary history, and its environment, including diet, emotional stresses, and other factors. Holistic therapies might include nutrition, acupuncture, herbal treatments, homeopathy, Reiki healing, or behavioral modification for example. They can be used in conjunction with traditional medical techniques to supplement a treatment plan (called complimentary medicine). At times, holistic therapies may be used alone when surgery or harsh medication do not resolve an issue or might not be advisable (called alternative medicine). A holistic vet can guide you in the selection of the appropriate course of treatment in consultation with your primary veterinarian or veterinary surgeon. This integrative approach to veterinary medicine is designed to minimize adverse effects, maximize successful treatment outcomes and improve the quality of life. The future of veterinary medicine lies in integration; ONE medicine the one that works.'
  },
  {
    title: 'What are some advantages to having a holistic vet?',
    content:
      'While the “find it and kill it” Western medical approach may work for infectious diseases, holistic medicine uses supportive and preventative measures by treating the whole body. Holistic veterinary care is much more effective when treating chronic illnesses like heart disease. This is not to say Western medicine isn’t useful. For acute situations or emergencies requiring surgery, for example, Western medicine will save a pet’s life. In addition, holistic veterinarians also integrate Western diagnostic methods in their care regimen, such as X-rays and laboratory tests. The greatest advantage of having a holistic vet is that you are generally working with a doctor that is open-minded to all therapeutic avenues. Rather than being outright dismissive of new treatments or ideas, a holistic vet will try to incorporate them into a comprehensive treatment plan. In particular, a holistic vet will pay more attention to the mental state of the pet. Emotions such as fear, stress, and depression can have a very real impact on health and well-being.'
  },
  {
    title:
      'What are some main differences between a holistic vet and a "regular" vet?',
    content:
      'It’s difficult to make this distinction. It all depends on how you interpret the definition of “holistic.” Any veterinarian can call themselves “holistic” and market themselves as such. There is no official certification or recognized specialty training. There are independent classes and seminars that vets can (and should) take to educate themselves. This is at the individual vet’s discretion. However, there is no official regulating body to oversee training and competence levels. In short, the difference between a regular and holistic vet boils down to additional specialized training and practical clinical experience.'
  },
  {
    title:
      'Can all pets see a holistic vet or is it for pets with health issues?',
    content:
      'Using a holistic veterinary for primary care has numerous, far-reaching health advantages for pets. I would suggest that pet owners should consult with a holistic vet for regular checkups (preventative / wellness care) or if their pet is experiencing a problem. A holistic vet can also be consulted whenever a higher level of vitality is desired in an apparently healthy or aging animal.'
  },
  {
    title: 'What is your advice for someone looking to find a holistic vet?',
    content:
      'Do your homework and research any prospective veterinarian very carefully. Friends and family are the first and best place to start your search. Always try to rely on a personal recommendation. Remember that you can always “shop around” for a holistic vet, so if you don’t feel comfortable with an individual veterinarian during a consultation, then don’t return. Visit multiple vets for an initial consultation until you find one that you feel is a good fit.'
  },
  {
    title: 'Anything else pet owners should know?',
    content:
      'Many vets advertise as being holistic merely to cash in on the “go green” movement that we are experiencing today. A good question to pose would be: Does the vet (or clinic) practice holistic medicine as a core philosophy or do they simply have holistic options on request or a traveling holistic vet who stops by the clinic once a week to see patients? I would recommend the former.'
  },
  {
    title: 'What are the advantages of a house call veterinarian?',
    content:
      'Pet owners choose veterinary house calls for a variety of reasons: convenience, scheduling flexibility, and reduced stress for both the pet and the owner, especially if transporting the pet is difficult.'
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
              style={{
                color: '#1ABC9C',
                fontWeight: 'bold',
                fontSize: 21
              }}
            >
              FAQs
            </Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ backgroundColor: '#A9E6DA' }} padder>
          <Card>
            <CardItem style={{ backgroundColor: '#1ABC9C' }}>
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
                  dataArray={data}
                  headerStyle={{
                    backgroundColor: '#A9E6DA',
                    borderRadius: 10,
                    marginBottom: 10,
                    justifyContent: 'space-evenly'
                  }}
                  contentStyle={{
                    backgroundColor: '#FEFFF3',
                    borderRadius: 10,
                    marginBottom: 10
                  }}
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
