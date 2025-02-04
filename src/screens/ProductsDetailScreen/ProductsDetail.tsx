import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '_screens/ProductsScreen/Products.style';
import { useRoute } from '@react-navigation/native';
import { ProductType } from '_types/ProductTypes';



const ProductsDetail = () => {
  const {productImage } = styles;
  const route = useRoute();

  const productDataFromRoute = route.params as { products: ProductType };

  const { title, description, image, price } = productDataFromRoute.products;
  return (
    <View>
      <Image style={productImage} source={{ uri: image }} />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}$</Text>
    </View>
  )
}

export default ProductsDetail