
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../assets/images/user.png')}
            />
          </View>

          <View style={styles.cardTextContainer}>
            <Text style={styles.cardName}>John Doe</Text>
            <Text style={styles.cardOccupation}>
              React Native Developer
            </Text>

            <View style={styles.cardDivider} />

            <Text style={styles.cardDescription}>
              John is a really great developer and loves to learn
              new things. He uses React Native to create amazing
              mobile applications.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    overflow: 'hidden',
  },

  cardImage: {
    width: 80,
    height: 80,
  },

  cardTextContainer: {
    alignItems: 'center',
    width: '85%',
    marginTop: 18,
  },

  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  cardOccupation: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },

  cardDivider: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 12,
  },

  cardDescription: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    lineHeight: 20,
  },
});
