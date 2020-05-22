import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon, ListItem, Text } from 'native-base';
import { Linking, Image } from 'react-native';
import { View } from 'native-base';

const logo = require('../ipaws-assets/logo.png');

const MyDrawer = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View {...props}>
          <View style={{ width: undefined, height: 150 }}>
            <Image
              source={logo}
              style={{
                height: undefined,
                width: undefined,
                flex: 1
              }}
            />
          </View>
          <ListItem first noIndent>
            <Text>Learn More</Text>
          </ListItem>
          <DrawerItem
            label="About Us"
            icon={({ color, size }) => (
              <Icon
                name="info"
                type="Feather"
                style={{ color: '#40A9EF', fontSize: size }}
              />
            )}
            onPress={() => {
              props.navigation.navigate('About Us');
            }}
            {...props}
          />
          <DrawerItem
            label="Holistic Approach"
            icon={({ color, size }) => (
              <Icon
                name="heart"
                type="Entypo"
                style={{ color: '#FF3030', fontSize: size }}
              />
            )}
            onPress={() => {
              props.navigation.navigate('Holistic Approach');
            }}
            {...props}
          />
          <DrawerItem
            label="Testimonials"
            icon={({ color, size }) => (
              <Icon
                name="rate-review"
                type="MaterialIcons"
                style={{ color: '#CA79ED', fontSize: size }}
              />
            )}
            onPress={() => {
              props.navigation.navigate('Testimonials');
            }}
            {...props}
          />
          <DrawerItem
            label="FAQ"
            icon={({ color, size }) => (
              <Icon
                name="question-answer"
                type="MaterialIcons"
                style={{ color: '#F4D03F', fontSize: size }}
              />
            )}
            onPress={() => {
              props.navigation.navigate('FAQ');
            }}
            {...props}
          />
          <DrawerItem
            label="Blog"
            icon={({ color, size }) => (
              <Icon
                name="blog"
                type="FontAwesome5"
                style={{ color: '#F77722', fontSize: size }}
              />
            )}
            onPress={() =>
              Linking.openURL('https://seethewebdev.com/idyllicpaws.com/blog/')
            }
            {...props}
          />
          <ListItem first noIndent>
            <Text>Connect</Text>
          </ListItem>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="logo-facebook"
                style={{ color: '#3B5998', fontSize: size }}
              />
            )}
            label="Facebook"
            onPress={() =>
              Linking.openURL('https://www.facebook.com/idyllicpawsvet')
            }
            {...props}
          />
        </View>
        <View>
          <DrawerItem
            style={{
              marginBottom: 15
            }}
            icon={({ color, size }) => (
              <Icon name="home" style={{ color: color, fontSize: size }} />
            )}
            label="Back to Home"
            onPress={() => {
              props.navigation.navigate('Main');
            }}
            {...props}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MyDrawer;
