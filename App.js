import React from 'react';
import { View } from 'react-native';
import AppNavigator from './src/Navigator';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
}