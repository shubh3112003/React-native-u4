import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LaptopScreen from './screens/LaptopScreen';
import LaptopDetailScreen from './screens/LaptopDetailScreen';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    
    <NavigationContainer>
    <Tab.Navigator id="RootNavigator">
      <Tab.Screen name="Laptop" component={LaptopScreen} />
      <Tab.Screen name="LaptopDetail" component={LaptopDetailScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
