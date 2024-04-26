import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import laptops from '../data/laptops.json';

const LaptopList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={laptops}
        renderItem={({ item }) => {
          return (
            <View style={styles.laptopContainer}>
              <Text style={styles.brand}>{item.brand}</Text>
              {item.model.map((laptop, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate('LaptopDetail', { laptop });
                  }}
                >
                  <View style={styles.laptopItem}>
                    <Image style={styles.laptopImage} source={{ uri: laptop.image }} />
                    <Text style={styles.laptopName}>{laptop.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  laptopContainer: {
    padding:30
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  laptopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  laptopImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  laptopName: {
    fontSize: 16,
  },
});

export default LaptopList;
