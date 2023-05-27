import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default function Card() {
  const deviceWidth = Math.round(Dimensions.get('window').width);

  return (
    <View style={{ flexDirection: 'column', flex: 1, paddingBottom: 440 }}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={require('../assets/iphoneX.png')} />
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        <Text style={styles.logoText}>
          INSTANT{'\n'}SPACE
        </Text>

        <Text style={[styles.text, { marginTop: 16 }]}>
          Lorem ipsum{'\n'}dolor sit ipsum{'\n'}consecr.
        </Text>

        <View style={styles.circle}></View>
        <View style={[styles.circle, { marginLeft: 19 }]}></View>
        <View style={[styles.circle, styles.circleWhite]}></View>
        <View style={[styles.circle, { marginLeft: 52 }]}></View>
      </View>
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(152, 191, 240,1.0)',
    width: deviceWidth - 27,
    height: 200,
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 172,
    right: 10,
    bottom: 15,
  },
  logo: {
    position: 'absolute',
    width: 45,
    height: 40,
    marginLeft: 7,
    marginTop: 7,
    borderRadius: 10,
  },
  logoText: {
    marginTop: 7,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 10,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  circle: {
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: 'rgb(115, 147, 179)',
    position: 'absolute',
    marginLeft: 10,
    top: 175,
  },
  circleWhite: {
    width: 20,
    backgroundColor: 'white',
    marginLeft: 29,
  },
});
