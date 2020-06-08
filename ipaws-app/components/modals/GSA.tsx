import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Text, List, ListItem, Button, Icon } from 'native-base';

export default class GSA extends Component {
  state = {
    isVisible: true
  };
  render() {
    return (
      <Modal
        style={{
          backgroundColor: '#D5DBDB',
          borderRadius: 10,
          maxHeight: 500,
          minHeight: 500
        }}
        backdropColor="#1ABC9C"
        backdropOpacity={0.6}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}
        onSwipeComplete={() => this.setState({ isVisible: false })}
      >
        <View padder style={{ alignItems: 'center', justifyContent: 'center' }}>
          <List>
            <ListItem>
              <Text>Polk</Text>
            </ListItem>
            <ListItem>
              <Text>Story</Text>
            </ListItem>
            <ListItem>
              <Text>Boone</Text>
            </ListItem>
            <ListItem>
              <Text>Dallas</Text>
            </ListItem>
            <ListItem>
              <Text>Warren</Text>
            </ListItem>
            <ListItem>
              <Text>Jasper</Text>
            </ListItem>
            <ListItem>
              <Text>Madison</Text>
            </ListItem>
          </List>
          <Button
            rounded
            onPress={() => this.setState({ isVisible: false })}
            style={{ backgroundColor: '#1ABC9C' }}
          >
            <Icon type="EvilIcons" name="close" />
          </Button>
        </View>
      </Modal>
    );
  }
}
