import { View, Text} from 'react-native'
import styles from '_screens/ProductsDetailScreen/ProductsDetail.style';
import { Image } from 'expo-image';
import { useSelector } from 'react-redux';
import { getSelectedProductInfo } from 'src/redux/features/product/productSelector';



const ProductsDetail = () => {
  const {productImage, 
    container,
    productDescription,
    productTitle,
    productPrice,
    productInfoContainer,
    productContainer,
   } = styles;

  const productInfo = useSelector(getSelectedProductInfo);

  if (!productInfo) {//productInfo yoksa ürün bulunamadı şeklinde yazı çıkacak.
    return (
      <View style={container}>
        <Text>Ürün bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <View style={productContainer}>
      <Image contentFit='contain'
                transition={50}
                contentPosition='center'
                style={productImage} source={{ uri: productInfo?.image }} 
                cachePolicy='memory-disk' />
     <View style={productInfoContainer}> 
      <Text style={productTitle}>{productInfo?.title}</Text>
      <Text style={productPrice}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(productInfo?.price)}</Text>
     </View>
      <Text style={productDescription}>{productInfo?.description}</Text>
      
      </View>
    </View>
  )
}

export default ProductsDetail