import { StyleSheet,Platform } from "react-native";

const styles =  StyleSheet.create({
    container:{
        flex:1,
        rowGap:20,
        backgroundColor:"#D7D6D2"

    },
    productContainer:{
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        rowGap: 10,
    },
    productImage: {
        
        aspectRatio:16/9
    },
    productPrice:{
        color: Platform.OS === 'ios' ? '#ff9f1c' : '#ff4365',
        fontSize:16,

    },
    productTitle:{
        fontWeight:500,
        fontSize:16,
        color:"#003566"
    },
    productDescription: {
        fontSize: 12,
        color: '#353535',
    },
    productRatingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
      },
      productRating: {
        fontSize: 16,
        color: Platform.OS === 'ios' ? '#ff9f1c' : '#ff4365',
      },
      productBottomInfoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

})
export default styles