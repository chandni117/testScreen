import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, View, TextInput, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Search..."
        />
        <View style={styles.iconContainer}>
          <MaterialIcons name="search" size={24} color="black" style={styles.icon} />
        </View>
        <View style={styles.circle}></View>
        <Image
          source={require('../assets/girl.jpg')}
          style={styles.girlImage}
        />
      </View>
      {/* Rest of your content */}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    width: '90%',
  },
  inputText: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 70,
    bottom: 18,
  },
  icon: {
    height: 20,
    width: 20,
  },
  girlImage: {
    width: 50,
    height: 50,
    marginLeft: 5,
    borderRadius: 25,
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'red',
    position: 'absolute',
    right: 5,
    top: 48,
    zIndex: 1,
    borderColor: 'white',
    borderWidth: 1,
  },
});
