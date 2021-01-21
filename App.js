import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import MovieScreen from './screens/MovieScreen';
import { Button } from 'react-native';
import ConfigScreen from './screens/ConfigScreen';
import { apiUrl } from './data/utils';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={headerOptions}
          initialParams={{
            apiUrl: apiUrl
          }}
        />
        <Stack.Screen
          name='Movie'
          component={MovieScreen}
          options={headerMovieOptions}  
        />
        <Stack.Screen
          name='Config'
          component={ConfigScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerOptions = ({navigation}) => ({
  headerStyle: {
    backgroundColor: '#1a1a1a',
  },
  headerTintColor: '#fff',
  headerRight: () => (
    <Button
      onPress={() => navigation.navigate('Config')}
      title='opciones'
      color='#1a1a1a'
    />
  ),
});

const headerMovieOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#bf42f5',
    height: 100,
  },
  headerTintColor: '#fff',
  headerRight: () => (
    <Button
      onPress={() => navigation.navigate('Config')}
      title='opciones'
      color='#bf42f5'
    />
  ),
});