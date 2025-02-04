import 'react-native-gesture-handler';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import StackNavigator from 'src/navigation/stack/StackNavigator';



export default function App() {
  return (
   <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  
  );
}

