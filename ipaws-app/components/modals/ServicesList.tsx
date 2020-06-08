import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Text, List, ListItem, Button, Icon } from 'native-base';

export default class ServicesList extends Component {
  state = {
    isVisible: true
  };

  render() {
    return (
      <Modal
        style={{
          backgroundColor: '#D5DBDB',
          maxHeight: 300,
          minHeight: 300,
          borderRadius: 10
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
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
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
