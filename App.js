import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import AnyScreen from './src/components/OtherScreen';
import TestFlexBox from './src/components/FlexBoxScreen';
import Calculator from './src/components/calculator/Calculator';
import ListItems from './src/components/ListScreen';
import Counter from './src/components/CounterScreen';
import Gallery from './src/components/GalleryScreen';

const Stack = createStackNavigator();

// <Stack.Screen name="nomeTela/nomeArquivo" component={nomeFunção}>   - na Home não causa problema
// <Button title="nomeBotão" onPress={() => navigation.navigate('nomeTela')}/>

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Home" component={HomeScreen}/>
        <Stack.Screen name="OtherScreen" component={AnyScreen}/>
        <Stack.Screen name="FlexBoxScreen" component={TestFlexBox}/>
        <Stack.Screen name="Calculator" component={Calculator}/>
        <Stack.Screen name="ListScreen" component={ListItems}/>
        <Stack.Screen name="CounterScreen" component={Counter}/>
        <Stack.Screen name="GalleryScreen" component={Gallery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
