import { Image } from 'expo-image'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './CardStyle';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCardItems, selectCardTotalPrice, selectCardTotalQuantity } from 'src/redux/features/card/cardSelector';
import { removeFromCard, updateQuantity } from 'src/redux/features/card/cardSlice';


const Card = () => {
  const cardItems= useSelector(selectCardItems);
  const cardTotal= useSelector(selectCardTotalPrice);
  const cardQuantity= useSelector(selectCardTotalQuantity);
  const dispach = useDispatch();
  const { productContainer,
    productImage,
    productInfoContainer,
    addToCard,
    addButtonContainer,
    buttonContainer,
    button,
    iconStyle,
    listEmptyContainer,
    listHeaderContainer
  } = styles;

  return (
    <FlatList
      data={cardItems}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ rowGap: 20, padding: 10 }}
      ListEmptyComponent={<View style={listEmptyContainer}>
        <Text>Sepetinizde ürün bulunmamaktadır.</Text>
      </View>}
      ListHeaderComponent={
        <View style={listHeaderContainer}>
          <Text >Toplam {cardQuantity} Ürün</Text>
          <Text>
            Toplam:{' '}
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'USD',
            }).format(cardTotal)}{' '}
          </Text>
        </View>
      }
      renderItem={({ item }) => {
        return (
          <View key={item.id} style={productContainer}>
      
            <View>
              <Image
                source={{ uri:item.image }}
                contentFit='contain'
                style={productImage}
                transition={50}
                contentPosition='center'
                cachePolicy='memory-disk' 
              />
            </View>
            <View style={productInfoContainer}>

              <View style={{rowGap:10}}>
                <Text >{item.title}</Text>
                <Text >{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</Text>
              </View>

              <View style={addButtonContainer}>
                <TouchableOpacity style={addToCard} onPress={()=>{
                  dispach(removeFromCard(item.id))
                }}>
                  <Text style={{ color: '#fff' }}>Sepeten Çıkar</Text>
                  </TouchableOpacity>
                <View style={buttonContainer}>
                  <TouchableOpacity style={button} onPress={()=>{dispach(updateQuantity({id:item.id,change:-1}))}}><Ionicons name= 'trash-outline' style={iconStyle}></Ionicons></TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity style={button} onPress={()=>{ dispach(updateQuantity({id:item.id,change:1}))}}>
                    <Text style={{ color: '#fff' }}>+</Text>
                    </TouchableOpacity>
                </View>
              </View>

            </View>

          </View>
        )

      }}
    />
  )
}

export default Card