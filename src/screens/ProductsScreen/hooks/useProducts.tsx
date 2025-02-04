import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { ProductType } from '_types/ProductTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



const useProducts = () => {
     const navigation= useNavigation<NativeStackNavigationProp<any>>();
    const products = [
        {
            "id": 1,
            "title": "Essence Mascara Lash Princess",
            "price": 9.99,
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "image":"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        },
        {
            "id": 2,
            "title": "Eyeshadow Palette with Mirror",
            "price": 19.99,
            "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
            "image":"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        },
        {
            "id": 3,
            "title": "Powder Canister",
            "price": 14.99,
            "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
            "image": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
        
        }    
    ]
    const handleOnProductPress = useCallback(
        (item: ProductType) => {
          navigation.navigate( 'ProductsDetail', {products:item });
        },
        [navigation]
      );
  return {
    products,
    handleOnProductPress,
};
}

export default useProducts