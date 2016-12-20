import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Dashboard extends Component {
  goToProfile() {
    console.log('going to profile');
  }
  goToRepos() {
    console.log('going to repos');
  }
  goToNotes() {
    console.log('going to notes');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.userInfo.avatar_url }}
          style={styles.image} />
        <TouchableHighlight
          style={styles.profile}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.repos}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.notes}
          onPress={this.goToNotes.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}> View notes </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  profile: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#48BBEC'
  },
  repos: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#E77AAE'
  },
  notes: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#758BF4'
  }
});
