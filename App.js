//import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';



import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DijkstraAlgo from './components/DijkstraAlgo';
import AStarAlgo from './components/AStarAlgo';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }} />
        <Stack.Screen
          name="A*"
          component={AStarAlgo}
          options={{ title: 'A Star' }} />
        <Stack.Screen
          name="Dijkstra"
          component={DijkstraAlgo}
          options={{ title: 'Dijkstra' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
