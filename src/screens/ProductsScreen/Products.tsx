
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import useProducts from './hooks/useProducts';
import styles from './Products.style';



const Products = () => {
  const { products, handleOnProductPress }=useProducts();
 
  return (
   <View style={styles.container}>
    <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> handleOnProductPress(item)}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Image style={styles.productImage} source={{ uri: item.image }} />
          <Text style={styles.productPrice}>{item.price}$</Text>
        </TouchableOpacity>
      )}/>
   </View>
  )
}

export default Products