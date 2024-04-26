import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import React from 'react';
import laptops from '../data/laptops.json';

const LaptopDetailScreen = ({ route, navigation }) => {
    let name, url, image;

    if (route.params && route.params.laptop) {
        ({ name, url, image } = route.params.laptop);
    } else {
        ({ name, url, image } = laptops[0].model[0]);
    }
    
  

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.modelName}>{name}</Text>
        <Text style={styles.modelUrl} onPress={() => Linking.openURL(url)}>{url}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    marginBottom:10
  },
  detailsContainer: {
    alignItems: 'center',
  },
  modelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10
  },
  modelUrl: {
    fontSize: 14,
    color: 'blue',
  },
});

export default LaptopDetailScreen;
