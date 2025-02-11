import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '_screens/ProductsScreen/Products';
import Profile from '_screens/ProfileScreen/Profile';
import ProductsDetail from '_screens/ProductsDetailScreen/ProductsDetail';
import BottomTabs from './BottomTabs';




const Stack = createNativeStackNavigator();

export const StackNavigator = () => { 
  
  return (
    <Stack.Navigator initialRouteName='BottomTabs'>
        <Stack.Screen options={{headerShown:false}} name='BottomTabs' component={BottomTabs}/>
        <Stack.Screen options={{title:'Ürünler'}} name='Products' component={Products}/>
        <Stack.Screen options={{title:'Ürün Detayı'}}name='ProductsDetail' component={ProductsDetail}/>
        <Stack.Screen name='Profile' component={Profile}/>
    </Stack.Navigator>
  )
}


export default StackNavigator