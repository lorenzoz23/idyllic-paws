import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon, ListItem, Text } from 'native-base';
import { Linking, Image, Dimensions } from 'react-native';
import { View } from 'native-base';

const logo = require('../ipaws-assets/logo.png');

/**
 * item background color:
 * manage focused items with an array of booleans where
 * componentDidMount sets the first item as focused and then
 * all subsequent item presses make the respective boolean element
 * in the array true and all others false
 */

const MyDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: undefined,
          height: Dimensions.get('window').height / 4.6,
          marginBottom: 5
        }}
      >
        <Image
          source={logo}
          style={{
            height: undefined,
            width: undefined,
            flex: 1
          }}
        />
      </View>
      <DrawerItem
        focused={true}
        activeTintColor="#1ABC9C"
        icon={({ color, size }) => (
          <Icon name="home" style={{ color: color, fontSize: size }} />
        )}
        label="Home"
        onPress={() => {
          props.navigation.jumpTo('Home');
        }}
      />
      <ListItem first noIndent>
        <Text>Learn More</Text>
      </ListItem>
      <DrawerItem
        focused={true}
        activeTintColor="#40A9EF"
        label="About Us"
        icon={({ size }) => (
          <Icon
            name="info"
            type="Feather"
            style={{ color: '#40A9EF', fontSize: size }}
          />
        )}
        onPress={() => {
          props.navigation.jumpTo('About Us');
        }}
      />
      <DrawerItem
        focused={true}
        activeTintColor="#FF3030"
        label="Holistic Approach"
        icon={({ size }) => (
          <Icon
            name="heart"
            type="Entypo"
            style={{ color: '#FF3030', fontSize: size }}
          />
        )}
        onPress={() => {
          props.navigation.jumpTo('Holistic Approach');
        }}
      />
      <DrawerItem
        focused={true}
        activeTintColor="#CA79ED"
        label="Testimonials"
        icon={({ size }) => (
          <Icon
            name="rate-review"
            type="MaterialIcons"
            style={{ color: '#CA79ED', fontSize: size }}
          />
        )}
        onPress={() => {
          props.navigation.jumpTo('Testimonials');
        }}
      />
      <DrawerItem
        focused={true}
        activeTintColor="#F4D03F"
        label="FAQ"
        icon={({ size }) => (
          <Icon
            name="question-answer"
            type="MaterialIcons"
            style={{ color: '#F4D03F', fontSize: size }}
          />
        )}
        onPress={() => {
          props.navigation.jumpTo('FAQ');
        }}
      />
      <DrawerItem
        focused={true}
        activeTintColor="#F77722"
        label="Blog"
        icon={({ size }) => (
          <Icon
            name="blog"
            type="FontAwesome5"
            style={{ color: '#F77722', fontSize: size }}
          />
        )}
        onPress={() =>
          Linking.openURL('https://seethewebdev.com/idyllicpaws.com/blog/')
        }
      />
      <ListItem first noIndent>
        <Text>Connect</Text>
      </ListItem>
      <DrawerItem
        focused={true}
        activeTintColor="#3B5998"
        icon={({ size }) => (
          <Icon
            name="logo-facebook"
            style={{ color: '#3B5998', fontSize: size }}
          />
        )}
        label="Facebook"
        onPress={() =>
          Linking.openURL('https://www.facebook.com/idyllicpawsvet')
        }
      />
      <DrawerItem
        focused={true}
        activeTintColor="#4A9ED6"
        icon={({ size }) => (
          <Icon
            name="logo-linkedin"
            style={{ color: '#4A9ED6', fontSize: size }}
          />
        )}
        label="LinkedIn"
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/franchescazenitsky')
        }
      />
    </DrawerContentScrollView>
  );
};

export default MyDrawer;
