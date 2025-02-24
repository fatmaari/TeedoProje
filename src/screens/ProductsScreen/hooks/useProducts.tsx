import { useCallback, useEffect } from 'react'
import { ProductType } from '_types/ProductTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts,selectProduct } from 'src/redux/features/product/productSlice';
import productsdata from 'src/data/data';
import { selectProducts } from 'src/redux/features/product/productSelector';
import { addToCard } from 'src/redux/features/card/cardSlice';


const useProducts = () => {
     const navigation = useNavigation<NativeStackNavigationProp<any>>();
     const dispatch = useDispatch()
     const productsList = useSelector(selectProducts)

     useEffect(() => {
      dispatch(setProducts(productsdata));
    }, []);

    const handleAddToCard =useCallback(
      (item: ProductType) => {
      dispatch(addToCard({...item, quantity:1}))// Burada dispatch() kullanılarak Redux Store’a bir action (addToCard) gönderiliyor.
      //item nesnesinin içine quantity: 1 ekleniyor (ürün sepete ilk defa eklendiğinde miktarı 1 olacak).
    },[])


    const handleOnProductPress = useCallback(
        (item: ProductType) => {
          dispatch(selectProduct(item))//
          navigation.navigate('ProductsDetail');
        },
        [navigation]
      );
  return {
    productsList,
    handleOnProductPress,
    handleAddToCard,
};
}

export default useProducts