import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from './src/components/Start';
import SignIn from './src/components/SignIn';
import Register from './src/components/Register';
import Dashboard from './src/components/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* Commented out these lines as they were causing errors */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Start" component={Start} />
         <Stack.Screen name="Register" component={Register} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
