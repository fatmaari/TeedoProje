import { View, Text} from 'react-native'
import styles from '_screens/ProductsScreen/Products.style';
import { useRoute } from '@react-navigation/native';
import { ProductType } from '_types/ProductTypes';
import { Image } from 'expo-image';



const ProductsDetail = () => {
  const {productImage, container } = styles;
  const route = useRoute();

  const productDataFromRoute = route.params as { products: ProductType };

  const { title, description, image, price } = productDataFromRoute.products;
  return (
    <View style={container}>
      <Image contentFit='contain'
                transition={50}
                contentPosition='center'
                style={productImage} source={{ uri: image }} 
                cachePolicy='memory-disk' />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}$</Text>
    </View>
  )
}

export default ProductsDetail