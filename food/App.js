import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessShowScreen from './src/screens/BusinessShowScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          />
        <Stack.Screen
          name="Business"
          component={BusinessShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;