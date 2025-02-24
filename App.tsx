import 'react-native-gesture-handler';
import { FlatList,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import StackNavigator from 'src/navigation/stack/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { persistor, store } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';



export default function App() {
  const navigationRef=useNavigationContainerRef();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
     <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <SafeAreaProvider>
       <StatusBar style={'auto' as StatusBarStyle} />
        <NavigationContainer 
          ref={navigatorRef => {
            navigationRef.current = navigatorRef;
          }}>
          <StackNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
      </PersistGate>
    </Provider> 
  </GestureHandlerRootView>
  
  );
}

