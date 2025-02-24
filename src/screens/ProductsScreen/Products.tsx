
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import useProducts from './hooks/useProducts';
import styles from './Products.style';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useSelector } from 'react-redux';
import { selectCardItems } from 'src/redux/features/card/cardSelector';




const Products = () => {
  const { productsList, handleOnProductPress, handleAddToCard }=useProducts();
  const {
    container,
    productContainer,
    productImage,
    productTitle,
    productBottomInfoContainer,
    productPrice,
    productRatingContainer,
    productRating,
    columnWrapperStyle,
    addToCard,
  } = styles;
  
  return (
   <View style={container}>

    <FlatList
        data={productsList}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{rowGap:20, padding:10}}
        columnWrapperStyle={columnWrapperStyle}
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

          <Text style={productPrice}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            item.price
          )}</Text>

          <View style={productRatingContainer}>

            <Ionicons name='star'size={16} color='#353535'/>
            <Text style={productRating}>{item.rating}</Text>

          </View>
          </View>
          <TouchableOpacity style={addToCard} onPress={()=>handleAddToCard(item)}>
            <Text style={{color:'#fff', textAlign:'center'}}>Sepete Ekle</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      )}/>
   </View>
  )
}

export default Products