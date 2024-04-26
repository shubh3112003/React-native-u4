import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LaptopList from '../components/LaptopList'
const LaptopScreen = (props) => {
  return (
    <View>
      
      {/* <Text>BooksScreen</Text> */}
      <LaptopList navigation={props.navigation}/>
    </View>
  )
}

export default LaptopScreen

const styles = StyleSheet.create({})