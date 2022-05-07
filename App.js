import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import NavBar from './src/Components/Header';
import configureStore from './src/store';
import Form from './src/Views/Form'
import FormList from './src/Views/FormList';
import carReducer from './src/reducer/carReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={configureStore(carReducer)}>
      <SafeAreaProvider >
        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen
              options={{ title: 'Formulario',headerStyle:{backgroundColor:'#000' },headerTintColor:'#ff0'}}
              name="Form"
              component={Form}
            />
            <Stack.Screen
            options={{ title: 'Garaje',headerStyle:{backgroundColor:'#000' },headerTintColor:'#ff0'}}
              name="FormList"
              component={FormList}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
});
