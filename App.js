import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerScreen from './components/screens/ScannerScreen';
import DetailsScreen from './components/screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Scanner" 
          component={ScannerScreen} 
          options={{ title: 'QR & Barcode Scanner' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Scan Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}