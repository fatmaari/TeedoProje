
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import useProducts from './hooks/useProducts';
import styles from './Products.style';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';



const Products = () => {
  const { products, handleOnProductPress }=useProducts();
  const {
    container,
    productContainer,
    productImage,
    productTitle,
    productDescription,
    productBottomInfoContainer,
    productPrice,
    productRatingContainer,
    productRating,
  } = styles;
 
  return (
   <View style={container}>
    <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{rowGap:20, padding:10}}
        renderItem={({ item }) => (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={productContainer}
        onPress={()=> handleOnProductPress(item)}>
          <Text style={productTitle}>{item.title}</Text>
          <Image contentFit='contain'
                transition={50}
                contentPosition='center'
                style={productImage} 
                source={{ uri: item.image }} 
                cachePolicy='memory-disk'/>
          <View style={productBottomInfoContainer}>
          <Text style={productPrice}>{item.price}$</Text>
          <View style={productRatingContainer}>
            <Ionicons name='star'size={16} color='#353535'/>
            <Text style={productRating}>{item.rating}</Text>
          </View>
          </View>
        </TouchableOpacity>
      )}/>
   </View>
  )
}

export default Products