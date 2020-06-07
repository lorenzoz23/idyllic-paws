import React, { Component } from 'react';
import {
  Container,
  View,
  Text,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Icon,
  Button,
  Title,
  Right
} from 'native-base';
import { Image, ScrollView, Dimensions } from 'react-native';

const cards = [
  {
    title: 'If your dog is showing signs of allergies...',
    content:
      'Dr. Zenitsky came into our lives in July 2014 at a point where hope was all but a distant memory. Our 2 1/2 year old lab, Royce, was barely half covered in hair and used the entire amount of his limited energy each day scratching the spots that still had hair and licking the bald areas that didn’t. The only sign of love our boy could give was to hold his head against ours because petting him or touching his skin caused noticeable pain. We had been to the vet numerous times and the only recommendations were more drugs, more oatmeal baths and expensive vet-recommended kibble. It just wasn’t working.',
    footer: 'Kerry and Beth Richardson – Clive, IA',
    image: {
      before:
        'https://idyllicpaws.com/wp-content/uploads/2014/07/Royce-then-220x300.jpg',
      after:
        'https://idyllicpaws.com/wp-content/uploads/2014/07/Royce-now-271x300.jpg'
    }
  },
  {
    title: 'I will be forever indebted to Dr. Z...',
    content:
      'I am impressed with this veterinarian! One visit to her and my poor dog’s hot spots are completely healed! I’ve made countless visits to my FORMER veterinarian in Platte City, spent hundreds of dollars on steroid shots, topicals, expensive dog food, etc. Not once did they do any kind of testing or even suggest testing. Dr. Z called me within 2 days and told me he had a Candida infection! She recommended supplements and suggested I start him on raw food. She also emailed me a complete personalized report on how to help my dog and so far the hot spots have not returned. I will be forever indebted to Dr. Z for doing in one visit what my FORMER vet never did! BTW, his eyes are no longer draining or crusting over. They are completely clear!',
    footer: 'Lydia Dailey – Platte City, MO',
    image: {}
  },
  {
    title:
      'Dr. Franchesca has helped our allergy-prone pup feel vibrant again...',
    content:
      'As soon as Dr. Franchesca was in practice, she became our vet of choice, for several reasons… Her home visits, values/ perspective, skills/ insight, and her compassionate interaction. Having our 6 animals cared for in the comfort of our own home is a tremendous relief; essential especially for our cats, who showed zero signs of stress after being seen by Dr. Franchesca! Using only dietary measures and natural medicinal formulas, Dr. Franchesca has helped our allergy-prone pup feel vibrant again… He no longer has scratching fits and I’m sure he’s relieved to shed his cone! We have also seen Franchesca with her own dogs- how happy, healthy, and well-behaved they are.',
    footer: 'Anne Grace – Des Moines, IA',
    image: {}
  },
  {
    title: 'My 2 dogs love Dr. Z',
    content:
      'My 2 dogs love Dr. Z. She has helped make dietary changes for them that have made a big difference, and she truly cares about them. She took time to get a complete history of both dogs, and gave me a complete review and suggestions for all areas, many which I never thought of, and were certainly not suggested by my previous vet, who thought I was “out there” when it came to wanting natural approaches for my dogs. The fact that she comes to us is a real bonus!',
    footer: 'Paula Underwood – West Des Moines, IA',
    image: {}
  },
  {
    title: 'Why Idyllic Paws is perfect for our cat: ',
    content:
      'In home visits mean no more crying, stressed-out kitty on the way to the vet! We strive for wholistic care for the humans in our family-how nice to find it for our pet. Dr. Z shines interacting with our pet, calming any fears, and even vaccinations were tolerated well. Education for the owners! Dr. Z gave us a detailed report on our cat’s health, diet suggestions, education about vaccinations, behavior and more. Call us AND our cat “happy”',
    footer: 'Angela & John Tedesco – Johnston, IA',
    image: {}
  },
  {
    title: 'Our family would not know what to do without Dr. Z',
    content:
      'Thanks to Dr. Z, all three of our Boston Terriers are healthier and happier! Boston Terriers are known for their flatulence so Dr Z recommended that we feed ours a raw diet to try and reduce it. As a result, there has been no more gas plus their breath doesn’t smell bad anymore! Two of our dogs don’t always get along (to the point of having some serious fights) and it has created a lot of tension in our house over the past couple of years. We previously tried mainstream calming remedies, prescription medications, and behavioral training to no avail. We were at the point of possibly giving up one of our dogs, which was not an option we were looking forward to. When Dr. Z came on the scene, she helped us look at the biochemical root cause of the issue then treat it safely, effectively, and naturally. By using a combination of electrical stimulation therapy and supplements, the anxiety level of both dogs has greatly improved as well as the overall stress level in our home. We are able to keep all three of our dogs, and we know they are a lot happier now!',
    footer: 'Casey & Kelly Bassett – Ankeny, IA',
    image: {
      before:
        'https://idyllicpaws.com/wp-content/uploads/2014/07/charlie-as.jpg',
      after: 'https://idyllicpaws.com/wp-content/uploads/2014/07/raw-food.jpg'
    }
  },
  {
    title: 'So ideal!',
    content:
      'What a great service… I always struggle to get my animals to the vet – now the vet comes to me! The only thing that makes that even more perfect is that this vet cares for pets comprehensively. So ideal!',
    footer: 'Alexa McDowell – Boone, IA',
    image: {}
  },
  {
    title: 'Love Dr. Z and so do my cats',
    content:
      'Love Dr. Z and so do my cats. They nuzzel up to her and lay on her lap when she comes to visit. She healed both of them from skin allergies that they have had for years that were never healed with the shots given by the other vet. Everyone who wants to do whats best for their furry friends should contact Dr. Z.',
    footer: 'Carla Ruble – Windsor Heights, IA',
    image: {}
  },
  {
    title: 'Yes, I said “cure”.',
    content:
      'My cat story... Buzz, my cat, had lost weight to the point where he was emaciated and his ribs were showing. His back legs were weakened and he was walking on his haunches. He drank water constantly and would urinate anywhere, at any time. His stools were runny and extremely foul smelling. Buzz was 15 years old and I attributed much of this to age. I was ready to have the cat put down because I thought he was suffering and in pain. I took the cat to the vet and was told the cat had severe diabetes It would probably cost about $1000 a year to treat the cat. Then I met Dr. Zenitsky. She came to our house to examine our Buzz (YES, SHE CAME TO OUR HOUSE). One of the things that make her special is her compassion and advocacy for the animal. After she examined Buzz, she believed, and convinced me that the problems could be reversed through methods that would be less expensive and much better for the cat’s welfare. The first thing she did was get the cat off kibble (Buzz had eaten nothing but Meow mix since he was a kitten). She then suggested a raw diet of meats and vegetables, with some supplements. She laid out a regimen for his diet, and worked up a treatment plan.  She gave detailed information about the illness, its causes and cure and her recommended treatment. Yes, I said “cure”. In December, 2013 Buzz’s blood glucose level was about 350. We started the raw diet and the BG started to come down immediately. In January, 2014 the BG was lower but not under control. We put Buzz on insulin (very easy to administer), and by January 26, 2014, The cat’s BG was back to normal levels.  He has not had a shot since then; has regained his weight and is as healthy and active as he has ever been.  Tests have been done on him and the disease has been put into, what seems like, permanent remission.  Now Buzz gets nothing but grain free food, mostly raw. Dr. Zenitsky; I want to thank you for saving Buzz and making us so much more knowledgeable about our animals and their welfare. Keep it up.',
    footer: 'Nate Mulvihill – Des Moines, IA',
    image: {}
  }
];

export default class Testimonials extends Component {
  state = {
    height: 0
  };

  componentDidMount = () => {
    this.setState({
      height: Dimensions.get('window').height
    });
  };

  swipeLeft = () => {};

  swipeRight = () => {};

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#A9E6DA',
          paddingTop: 20,
          flex: 1
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
              Testimonials
            </Title>
          </Body>
          <Right />
        </Header>
        <View padder>
          <DeckSwiper
            //ref={(c) => (this._deckSwiper = c)}
            dataSource={cards}
            renderItem={(item: any) => (
              <Card
                style={{
                  elevation: 3,
                  borderLeftWidth: 5,
                  borderColor: '#1ABC9C'
                }}
              >
                <CardItem header bordered>
                  <Left>
                    <Title>
                      <Text style={{ color: '#1ABC9C' }}>{item.title}</Text>
                    </Title>
                  </Left>
                </CardItem>
                <CardItem
                  bordered
                  style={{
                    flexDirection: 'column',
                    minHeight: this.state.height / 1.75,
                    maxHeight: this.state.height / 1.75
                  }}
                >
                  <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                  >
                    <Body style={{ marginBottom: 20 }}>
                      <Text>{item.content}</Text>
                    </Body>
                    {item.image.before ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          marginBottom: 10
                        }}
                      >
                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}
                        >
                          <Image
                            style={{
                              height: 150,
                              width: 150,
                              borderRadius: 10
                            }}
                            source={{ uri: item.image.before }}
                          />
                          <Text note>Then...</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}
                        >
                          <Image
                            style={{
                              height: 150,
                              width: 150,
                              borderRadius: 10
                            }}
                            source={{ uri: item.image.after }}
                          />
                          <Text note>...Now!</Text>
                        </View>
                      </View>
                    ) : null}
                  </ScrollView>
                </CardItem>
                <CardItem footer bordered>
                  <Text style={{ color: '#1ABC9C', fontWeight: 'bold' }}>
                    {item.footer}
                  </Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
        <View
          padder
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 20
          }}
        >
          <Button
            rounded
            iconLeft
            onPress={() => this.swipeLeft()}
            style={{ backgroundColor: '#1ABC9C' }}
          >
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button
            iconRight
            rounded
            onPress={() => this.swipeRight()}
            style={{ backgroundColor: '#1ABC9C' }}
          >
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}
