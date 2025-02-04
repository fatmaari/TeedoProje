import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '_screens/ProductsScreen/Products';
import ProductsDetail from '_screens/ProductsDetailScreen/ProductsDetail';


type Props = {}

const Stack = createNativeStackNavigator();

const StackNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='Products'>
        <Stack.Screen options={{title:'Ürünler'}} name='Products' component={Products}/>
        <Stack.Screen options={{title:'Ürün Detayı'}}name='ProductsDetail' component={ProductsDetail}/>


    </Stack.Navigator>
  )
}

export default StackNavigator